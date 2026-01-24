import { supabase } from "./supabase";
import { loadProgress, saveProgress, resetProgress } from "./progressStore";
import { mergeProgress } from "./progressMerge";

const LS_KEY_MIGRATED = "progress_migrated_to_supabase_v1";

/* =========================================
   Helpers
========================================= */

function withUpdatedAt(progress) {
  return {
    ...(progress || {}),
    updatedAt: Number(progress?.updatedAt) || Date.now(),
  };
}

function stableStringify(obj) {
  try {
    const keys = obj ? Object.keys(obj).sort() : [];
    return JSON.stringify(obj, keys);
  } catch {
    return JSON.stringify(obj);
  }
}

/** ✅ ne jamais downgrader la timeline */
function normalizeTimeline(local, remote, merged) {
  const l = Number(local?.timelineWorldCompleted || 0);
  const r = Number(remote?.timelineWorldCompleted || 0);
  const m = Number(merged?.timelineWorldCompleted || 0);
  return { ...(merged || {}), timelineWorldCompleted: Math.max(l, r, m) };
}

/**
 * ✅ Progress “fresh” aligné sur ton progressStore (emptyProgress)
 * + timelineWorldCompleted (car ton app en dépend)
 */
function defaultProgressAligned() {
  // On part de resetProgress() mais ATTENTION: resetProgress() écrit en storage
  // Donc ici on construit un objet fresh sans side effect.
  const base = withUpdatedAt({
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    completedNodeIds: [],
    unlockedCards: [],
    xpToday: 0,
    xpTodayDate: null, // progressStore forcera la date du jour au load
    reviewQueue: [],
    unlockedBadges: [],
    timelineWorldCompleted: 1,
  });

  return base;
}

/* =========================================
   Remote CRUD
========================================= */

export async function fetchRemoteProgress(userId) {
  if (!userId) return null;

  const { data, error } = await supabase
    .from("user_progress")
    .select("data, updated_at")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    ...(data.data || {}),
    remoteUpdatedAt: data.updated_at ? new Date(data.updated_at).getTime() : 0,
  };
}

/**
 * ✅ upsert sans refetch
 * - remoteHint permet de protéger timelineWorldCompleted sans re-query
 */
export async function upsertRemoteProgress(userId, progress, { remoteHint } = {}) {
  if (!userId) return null;

  const safe = withUpdatedAt(progress);

  // ✅ protège timeline (max) sans refetch
  const hintT = Number(remoteHint?.timelineWorldCompleted || 0);
  const localT = Number(safe?.timelineWorldCompleted || 0);
  safe.timelineWorldCompleted = Math.max(hintT, localT);

  const { data, error } = await supabase
    .from("user_progress")
    .upsert(
      { user_id: userId, data: safe, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    )
    .select()
    .maybeSingle();

  if (error) throw error;
  return data || null;
}

/* =========================================
   Login sync (merge)
========================================= */

/**
 * ✅ Règle:
 * - Si remote est vide => on wipe local (sinon mobile réinjecte)
 * - Sinon merge normal
 */
export async function syncProgressOnLogin(userId) {
  if (!userId) return loadProgress();

  const local = withUpdatedAt(loadProgress());
  const remote = await fetchRemoteProgress(userId);

  console.log("🔎 syncProgressOnLogin() snapshots:", {
    hasRemote: !!remote,
    localTimeline: local?.timelineWorldCompleted,
    remoteTimeline: remote?.timelineWorldCompleted,
  });

  // ✅ CAS CRITIQUE : remote vide (après reset cloud)
  if (!remote) {
    // 1) wipe local (sur la clé active user::<id>)
    // ⚠️ resetProgress() déclenche saveProgress et peut push cloud si _cloudSync est branché.
    // Donc on fait un saveProgress "fresh" mais on doit éviter le push auto :
    // -> La méthode safe: on écrit via localStorage direct serait mieux,
    // mais tu n'as pas d'API dédiée. Donc on fait simple:
    // on sauve fresh, puis on upsert fresh. (fresh = clean)
    const fresh = defaultProgressAligned();

    saveProgress(fresh);
    await upsertRemoteProgress(userId, fresh);

    localStorage.setItem(LS_KEY_MIGRATED, "1");
    console.log("🧼 Remote empty => local wiped + remote initialized (fresh).");
    return fresh;
  }

  // ✅ CAS NORMAL : remote existe → merge
  const merged = mergeProgress(local, remote);

  const mergedNormalized = normalizeTimeline(local, remote, merged);
  const mergedSafe = withUpdatedAt(mergedNormalized);

  console.log("🧩 syncProgressOnLogin() merged:", {
    mergedTimeline: merged?.timelineWorldCompleted,
    finalTimeline: mergedSafe?.timelineWorldCompleted,
  });

  saveProgress(mergedSafe);
  await upsertRemoteProgress(userId, mergedSafe, { remoteHint: remote });

  localStorage.setItem(LS_KEY_MIGRATED, "1");
  return mergedSafe;
}

export async function refreshProgressFromCloud(userId) {
  if (!userId) return loadProgress();

  const local = withUpdatedAt(loadProgress());
  const remote = await fetchRemoteProgress(userId);
  if (!remote) return local;

  console.log("🔄 refreshProgressFromCloud() snapshots:", {
    localTimeline: local?.timelineWorldCompleted,
    remoteTimeline: remote?.timelineWorldCompleted,
  });

  const merged = mergeProgress(local, remote);

  const mergedNormalized = normalizeTimeline(local, remote, merged);
  const mergedSafe = withUpdatedAt(mergedNormalized);

  console.log("✅ refreshProgressFromCloud() merged:", {
    mergedTimeline: merged?.timelineWorldCompleted,
    finalTimeline: mergedSafe?.timelineWorldCompleted,
  });

  saveProgress(mergedSafe);
  return mergedSafe;
}

/* =========================================
   ✅ Push automatique (debounce)
========================================= */

let _timer = null;
let _pending = null;
let _lastPushedHash = null;
let _lastKnownProgress = null;

export function queueRemoteProgress(userId, progress, { delay = 800 } = {}) {
  if (!userId) return;

  const safe = withUpdatedAt(progress);

  // ✅ protège un minimum la timeline en gardant la meilleure valeur connue (local)
  const last = _lastKnownProgress || {};
  const safeWithTimeline = normalizeTimeline(last, last, safe);

  _lastKnownProgress = safeWithTimeline;

  const hash = stableStringify(safeWithTimeline);
  if (_lastPushedHash && hash === _lastPushedHash) return;

  _pending = { userId, progress: safeWithTimeline, hash };

  if (_timer) clearTimeout(_timer);

  _timer = setTimeout(async () => {
    const payload = _pending;
    _pending = null;
    _timer = null;

    if (!payload?.userId) return;

    try {
      console.log("☁️ queueRemoteProgress() -> will push:", {
        userId: payload.userId,
        timelineWorldCompleted: payload.progress?.timelineWorldCompleted,
      });

      await upsertRemoteProgress(payload.userId, payload.progress);
      _lastPushedHash = payload.hash;

      console.log("✅ queueRemoteProgress -> ok");
    } catch (e) {
      console.warn("❌ queueRemoteProgress -> failed:", e?.message || e);
      _pending = payload;
    }
  }, delay);
}

export async function flushRemoteProgressNow() {
  if (_timer) clearTimeout(_timer);
  _timer = null;

  if (!_pending?.userId) return;

  const payload = _pending;

  try {
    console.log("⚡ flushRemoteProgressNow() -> pushing:", {
      userId: payload.userId,
      timelineWorldCompleted: payload.progress?.timelineWorldCompleted,
    });

    await upsertRemoteProgress(payload.userId, payload.progress);
    _lastPushedHash = payload.hash || stableStringify(payload.progress);
    _pending = null;
  } catch (e) {
    console.warn("❌ flushRemoteProgressNow -> failed:", e?.message || e);
  }
}

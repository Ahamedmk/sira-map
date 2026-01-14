import { supabase } from "./supabase";
import { loadProgress, saveProgress } from "./progressStore";
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
  // stringify stable minimal pour comparer sans libs
  try {
    return JSON.stringify(obj, Object.keys(obj).sort());
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

export async function upsertRemoteProgress(userId, progress) {
  if (!userId) return null;

  const safe = withUpdatedAt(progress);

  // ✅ LOG AU BON ENDROIT (juste avant l'UPSERT)
  console.log("☁️ upsertRemoteProgress() -> pushing:", {
    userId,
    timelineWorldCompleted: safe?.timelineWorldCompleted,
    updatedAt: safe?.updatedAt,
  });

  const { data, error } = await supabase
    .from("user_progress")
    .upsert(
      {
        user_id: userId,
        data: safe,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    )
    .select();

  if (error) throw error;
  return data || null;
}

/* =========================================
   Login sync (merge)
========================================= */
export async function syncProgressOnLogin(userId) {
  if (!userId) return loadProgress();

  const local = withUpdatedAt(loadProgress());
  const remote = await fetchRemoteProgress(userId);

  // ✅ LOG POUR VOIR QUI GAGNE
  console.log("🔎 syncProgressOnLogin() snapshots:", {
    localTimeline: local?.timelineWorldCompleted,
    remoteTimeline: remote?.timelineWorldCompleted,
  });

  const merged = mergeProgress(local, remote);

  // ✅ empêche le reset (11 -> 1)
  const mergedNormalized = normalizeTimeline(local, remote, merged);
  const mergedSafe = withUpdatedAt(mergedNormalized);

  // ✅ LOG FINAL AVANT SAVE + UPSERT
  console.log("🧩 syncProgressOnLogin() merged:", {
    mergedTimeline: merged?.timelineWorldCompleted,
    finalTimeline: mergedSafe?.timelineWorldCompleted,
  });

  saveProgress(mergedSafe);
  await upsertRemoteProgress(userId, mergedSafe);

  localStorage.setItem(LS_KEY_MIGRATED, "1");
  return mergedSafe;
}

export async function refreshProgressFromCloud(userId) {
  if (!userId) return loadProgress();

  const local = withUpdatedAt(loadProgress());
  const remote = await fetchRemoteProgress(userId);
  if (!remote) return local;

  // ✅ LOG
  console.log("🔄 refreshProgressFromCloud() snapshots:", {
    localTimeline: local?.timelineWorldCompleted,
    remoteTimeline: remote?.timelineWorldCompleted,
  });

  const merged = mergeProgress(local, remote);

  // ✅ empêche le downgrade en local
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

/**
 * Met en file une sauvegarde remote (debounce).
 * Appelée automatiquement via saveProgress() -> setProgressCloudSync()
 */
export function queueRemoteProgress(userId, progress, { delay = 800 } = {}) {
  if (!userId) return;

  const safe = withUpdatedAt(progress);

  // ✅ si progress incomplet (ex: timeline absente), protège un minimum en gardant la valeur connue
  const last = _lastKnownProgress || {};
  const safeWithTimeline = normalizeTimeline(last, last, safe);

  _lastKnownProgress = safeWithTimeline;

  // anti-spam : si rien n’a changé depuis le dernier push, on ignore
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
      // ✅ on garde en pending pour un futur flush / prochain save
      _pending = payload;
    }
  }, delay);
}

/**
 * Flush immédiat (utile avant logout ou fermeture).
 * - push le pending si présent
 * - sinon push le dernier progress connu (si dispo)
 */
export async function flushRemoteProgressNow() {
  const payload =
    _pending ||
    (_lastKnownProgress
      ? {
          userId: null,
          progress: _lastKnownProgress,
          hash: stableStringify(_lastKnownProgress),
        }
      : null);

  if (_timer) clearTimeout(_timer);
  _timer = null;

  if (!_pending && payload && payload.userId == null) {
    // si on n'a pas userId, on ne peut pas flush
    return;
  }

  if (!payload?.userId) return;

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
    // on ne détruit pas _pending si c'était pending
  }
}

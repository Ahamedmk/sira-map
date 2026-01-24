let _muteCloud = false;
export function setCloudSyncMuted(v) { _muteCloud = !!v; }

// src/lib/progressStore.js
const BASE_KEY = "sira_progress_v1";
let _cloudSync = null;

// ✅ clé active (par défaut: guest)
let _activeKey = `${BASE_KEY}::guest`;

/**
 * ✅ Appeler ça quand l'utilisateur change (login/logout)
 * - userId null/undefined => guest
 * - userId => stockage séparé par user
 */
export function setProgressUser(userId) {
  _activeKey = userId ? `${BASE_KEY}::user::${userId}` : `${BASE_KEY}::guest`;

  // ✅ Migration automatique depuis l'ancien KEY unique (1 fois)
  // Objectif: ne pas "perdre" la progression historique de ton MVP
  // et éviter que les comptes se partagent la même progression.
  try {
    const legacyRaw = localStorage.getItem(BASE_KEY);
    if (!legacyRaw) return;

    const migratedFlag = localStorage.getItem(`${_activeKey}::migrated_v1`) === "1";
    if (migratedFlag) return;

    // Si la nouvelle clé n'existe pas encore, on migre.
    const currentRaw = localStorage.getItem(_activeKey);
    if (!currentRaw) {
      localStorage.setItem(_activeKey, legacyRaw);
    }

    localStorage.setItem(`${_activeKey}::migrated_v1`, "1");
  } catch {
    // ignore
  }
}

/**
 * Permet de brancher un push cloud sans coupler progressStore à Supabase.
 * Exemple: setProgressCloudSync((progress) => queueRemoteProgress(user.id, progress))
 */
export function setProgressCloudSync(fn) {
  _cloudSync = typeof fn === "function" ? fn : null;
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDaysISO(dateISO, days) {
  const d = new Date(dateISO);
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// (optionnel mais pratique)
export function getTodayISO() {
  return todayISO();
}

function normalizeArray(val) {
  return Array.isArray(val) ? val : [];
}

function normalizeNumber(val, fallback = 0) {
  const n = Number(val);
  return Number.isFinite(n) ? n : fallback;
}

function emptyProgress(t) {
  return {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    completedNodeIds: [],
    unlockedCards: [],
    xpToday: 0,
    xpTodayDate: t,
    reviewQueue: [], // [{id, lessonId, dueDate, stage, done}]
    unlockedBadges: [],
  };
}

export function loadProgress() {
  const t = todayISO();

  try {
    // ✅ on lit la clé active (guest OU user::<id>)
    const raw = localStorage.getItem(_activeKey);

    if (!raw) return emptyProgress(t);

    const data = JSON.parse(raw);

    // Reset XP du jour si date changée
    const xpTodayDate = data.xpTodayDate ?? t;
    let xpToday = normalizeNumber(data.xpToday, 0);
    if (xpTodayDate !== t) xpToday = 0;

    return {
      xp: normalizeNumber(data.xp, 0),
      streak: normalizeNumber(data.streak, 0),
      unlockedCards: normalizeArray(data.unlockedCards),
      lastActiveDate: data.lastActiveDate ?? null,
      completedNodeIds: normalizeArray(data.completedNodeIds),
      xpToday,
      xpTodayDate: t, // on force à la date du jour
      reviewQueue: normalizeArray(data.reviewQueue),
      unlockedBadges: normalizeArray(data.unlockedBadges),
      updatedAt: data.updatedAt ?? null,
    };
  } catch {
    return emptyProgress(t);
  }
}

export function saveProgress(p) {
  const next = { ...p, updatedAt: Date.now() };

  localStorage.setItem(_activeKey, JSON.stringify(next));
  if (!_muteCloud) {
  _cloudSync?.(next);
}
  // ✅ push cloud (si branché)
  try {
    _cloudSync?.(next);
  } catch (e) {
    console.warn("cloudSync failed:", e?.message || e);
  }
}

export function markActiveDay(p) {
  const t = todayISO();
  if (p.lastActiveDate === t) return p;

  const currentStreak = normalizeNumber(p.streak, 0);

  if (p.lastActiveDate) {
    const prev = new Date(p.lastActiveDate);
    const now = new Date(t);
    const diffDays = Math.round((now - prev) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) p.streak = currentStreak + 1;
    else if (diffDays > 1) p.streak = 1;
    else p.streak = currentStreak;
  } else {
    p.streak = 1;
  }

  p.lastActiveDate = t;
  return p;
}

export function addXp(p, amount) {
  const a = normalizeNumber(amount, 0);
  p.xp = normalizeNumber(p.xp, 0) + a;
  p.xpToday = normalizeNumber(p.xpToday, 0) + a;
  return p;
}

export function completeNode(p, nodeId) {
  p.completedNodeIds = normalizeArray(p.completedNodeIds);
  if (!p.completedNodeIds.includes(nodeId)) {
    p.completedNodeIds.push(nodeId);
  }
  return p;
}

export function isNodeCompleted(p, nodeId) {
  return normalizeArray(p.completedNodeIds).includes(nodeId);
}

/**
 * Planifier 2 révisions après validation d'une leçon:
 * - J+1 (stage=1)
 * - J+3 (stage=2)
 */
export function scheduleReviewsForLesson(p, lessonId) {
  const t = todayISO();
  p.reviewQueue = normalizeArray(p.reviewQueue);

  const tasks = [
    { stage: 1, dueDate: addDaysISO(t, 1) },
    { stage: 2, dueDate: addDaysISO(t, 3) },
  ];

  for (const task of tasks) {
    const exists = p.reviewQueue.some(
      (r) => r?.lessonId === lessonId && r?.stage === task.stage
    );

    if (!exists) {
      p.reviewQueue.push({
        id: `rev_${lessonId}_${task.stage}`,
        lessonId,
        stage: task.stage,
        dueDate: task.dueDate,
        done: false,
      });
    }
  }

  return p;
}

export function getDueReviews(p, dateISO = todayISO()) {
  const q = normalizeArray(p.reviewQueue);
  return q.filter((r) => r && !r.done && r.dueDate <= dateISO);
}

export function markReviewDone(p, reviewId) {
  p.reviewQueue = normalizeArray(p.reviewQueue);
  const r = p.reviewQueue.find((x) => x?.id === reviewId);
  if (r) r.done = true;
  return p;
}

export function removeOldReviews(p, keepDays = 30) {
  return p;
}

/* ---------- Badges helpers ---------- */
export function countCompletedLessons(p) {
  return normalizeArray(p.completedNodeIds).filter((id) =>
    String(id).startsWith("l")
  ).length;
}

export function isBadgeUnlocked(p, badgeId) {
  return normalizeArray(p.unlockedBadges).includes(badgeId);
}

export function unlockBadge(p, badgeId) {
  p.unlockedBadges = normalizeArray(p.unlockedBadges);
  if (!p.unlockedBadges.includes(badgeId)) p.unlockedBadges.push(badgeId);
  return p;
}

/**
 * ✅ reset uniquement la clé active (guest ou user::<id>)
 * (Donc reset guest ne touche pas le user, et inversement)
 */
export function resetProgress() {
  const t = todayISO();
  const fresh = emptyProgress(t);
  localStorage.setItem(_activeKey, JSON.stringify({ ...fresh, updatedAt: Date.now() }));
  return fresh;
}

export function resetReviewsOnly() {
  const p = loadProgress();
  p.reviewQueue = [];
  saveProgress(p);
  return p;
}

export function resetBadgesOnly() {
  const p = loadProgress();
  p.unlockedBadges = [];
  saveProgress(p);
  return p;
}

export function isWorld1Completed(p) {
  return (p.completedNodeIds || []).includes("b1");
}

/* ---------- Cards helpers ---------- */
export function isCardUnlocked(p, slug) {
  return normalizeArray(p.unlockedCards).includes(slug);
}

export function unlockCardLocal(p, slug) {
  p.unlockedCards = normalizeArray(p.unlockedCards);
  if (!p.unlockedCards.includes(slug)) p.unlockedCards.push(slug);
  return p;
}

export function resetCardsOnly() {
  const p = loadProgress();
  p.unlockedCards = [];
  saveProgress(p);
  return p;
}

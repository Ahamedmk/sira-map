const KEY = "sira_progress_v1";
let _cloudSync = null;

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

export function loadProgress() {
  const t = todayISO();

  try {
    const raw = localStorage.getItem(KEY);

    if (!raw) {
      return {
        xp: 0,
        streak: 0,
        lastActiveDate: null,
        completedNodeIds: [],
        xpToday: 0,
        xpTodayDate: t,
        reviewQueue: [], // [{id, lessonId, dueDate, stage, done}]
        unlockedBadges: [], // ✅ manquant
      };
    }

    const data = JSON.parse(raw);

    // Reset XP du jour si date changée
    const xpTodayDate = data.xpTodayDate ?? t;
    let xpToday = normalizeNumber(data.xpToday, 0);

    if (xpTodayDate !== t) {
      xpToday = 0;
    }

    return {
      xp: normalizeNumber(data.xp, 0),
      streak: normalizeNumber(data.streak, 0),
      lastActiveDate: data.lastActiveDate ?? null,
      completedNodeIds: normalizeArray(data.completedNodeIds),
      xpToday,
      xpTodayDate: t, // on force à la date du jour
      reviewQueue: normalizeArray(data.reviewQueue),
      unlockedBadges: normalizeArray(data.unlockedBadges), // ✅ manquant
    };
  } catch {
    return {
      xp: 0,
      streak: 0,
      lastActiveDate: null,
      completedNodeIds: [],
      xpToday: 0,
      xpTodayDate: t,
      reviewQueue: [],
      unlockedBadges: [], // ✅ manquant
    };
  }
}

export function saveProgress(p) {
  p.updatedAt = Date.now();
  localStorage.setItem(KEY, JSON.stringify(p));

  // ✅ push cloud (si branché)
  try {
    _cloudSync?.(p);
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
    else p.streak = currentStreak; // cas bizarre (heure/format), on ne casse pas
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
 * On évite les doublons par (lessonId, stage)
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
  // optionnel : on garde simple pour MVP
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

export function resetProgress() {
  const t = todayISO();

  const fresh = {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    completedNodeIds: [],
    xpToday: 0,
    xpTodayDate: t,
    reviewQueue: [],
    unlockedBadges: [],
  };

  localStorage.setItem(KEY, JSON.stringify(fresh));
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
  // MVP: monde 1 boss = b1
  return (p.completedNodeIds || []).includes("b1");
}


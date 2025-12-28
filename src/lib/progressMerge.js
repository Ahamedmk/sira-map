export function mergeProgress(localP, remoteP) {
  if (!localP && !remoteP) return null;
  if (!remoteP) return localP;
  if (!localP) return remoteP;

  // règle simple & efficace :
  // - on prend le plus récent (updatedAt vs remoteUpdatedAt)
  const localTs = Number(localP.updatedAt ?? 0);
  const remoteTs = Number(remoteP.remoteUpdatedAt ?? 0);

  const base = localTs >= remoteTs ? localP : remoteP;
  const other = localTs >= remoteTs ? remoteP : localP;

  // merge conservateur (on ne perd pas):
  const merged = {
    ...base,
    xp: Math.max(base.xp ?? 0, other.xp ?? 0),
    xpToday: base.xpToday ?? 0,
    xpTodayDate: base.xpTodayDate ?? other.xpTodayDate,
    streak: Math.max(base.streak ?? 0, other.streak ?? 0),
    lastActiveDate: base.lastActiveDate ?? other.lastActiveDate,
    completedNodeIds: Array.from(
      new Set([...(base.completedNodeIds ?? []), ...(other.completedNodeIds ?? [])])
    ),
    unlockedBadges: Array.from(
      new Set([...(base.unlockedBadges ?? []), ...(other.unlockedBadges ?? [])])
    ),
    reviewQueue: mergeReviewQueue(base.reviewQueue ?? [], other.reviewQueue ?? []),
  };

  merged.updatedAt = Date.now();
  return merged;
}

function mergeReviewQueue(a, b) {
  const map = new Map();
  for (const r of [...a, ...b]) {
    if (!r?.id) continue;
    const prev = map.get(r.id);
    // si doublon, on garde celui "done=true" en priorité
    if (!prev) map.set(r.id, r);
    else if (prev.done !== true && r.done === true) map.set(r.id, r);
  }
  return Array.from(map.values());
}

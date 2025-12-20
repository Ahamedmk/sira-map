import { BADGES } from "../data/badges.js";
import { countCompletedLessons, isBadgeUnlocked, unlockBadge } from "./progressStore.js";

export function evaluateBadges(progress) {
  const newlyUnlocked = [];

  const lessonsDone = countCompletedLessons(progress);

  for (const b of BADGES) {
    if (isBadgeUnlocked(progress, b.id)) continue;

    let ok = false;
    if (b.type === "streak") ok = (progress.streak || 0) >= b.target;
    if (b.type === "xp") ok = (progress.xp || 0) >= b.target;
    if (b.type === "lessons") ok = lessonsDone >= b.target;

    if (ok) {
      unlockBadge(progress, b.id);
      newlyUnlocked.push(b);
    }
  }

  return { progress, newlyUnlocked };
}

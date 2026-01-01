import { CARDS } from "../data/cards_mock.js";
import { isCardUnlocked, unlockCardLocal } from "./progressStore";

/**
 * ctx = contexte d’événement
 * Exemples:
 *  - { event:"quiz_end", worldKey:"world10_hijrah", score: 85, isBoss:false, usedHints:false, lessonReplayed:false }
 *  - { event:"world_complete", worldKey:"world10_hijrah" }
 *  - { event:"profile_update", streak: 7, completedWorldKeys:["world10_hijrah"] }
 */
export function evaluateCards(progress, ctx) {
  const newlyUnlocked = [];

  for (const card of CARDS) {
    if (!card?.unlock?.type) continue;
    if (isCardUnlocked(progress, card.slug)) continue;

    if (matchUnlock(card.unlock, ctx)) {
      unlockCardLocal(progress, card.slug);
      newlyUnlocked.push(card);
    }
  }

  return { progress, newlyUnlocked };
}

function matchUnlock(unlock, ctx) {
  const v = unlock?.value || {};

  switch (unlock.type) {
    case "finish_world":
      return ctx.event === "world_complete" && ctx.worldKey === v.worldKey;

    case "quiz_score":
      return (
        ctx.event === "quiz_end" &&
        ctx.worldKey === v.worldKey &&
        (ctx.score ?? 0) >= (v.minScore ?? 80)
      );

    case "quiz_perfect_plus":
      return (
        ctx.event === "quiz_end" &&
        ctx.worldKey === v.worldKey &&
        (ctx.score ?? 0) >= (v.requiredScore ?? 100) &&
        (v.requiresNoHintsUsed ? !ctx.usedHints : true) &&
        (v.requiresLessonReplay ? !!ctx.lessonReplayed : true)
      );

    case "streak":
      return ctx.event === "profile_update" &&
        (ctx.streak || 0) >= (v.minDays ?? 7);

    case "streak_plus_completion":
      return (
        ctx.event === "profile_update" &&
        (ctx.streak || 0) >= (v.minDays ?? 30) &&
        (v.requiredWorldKeys || []).every((w) =>
          (ctx.completedWorldKeys || []).includes(w)
        )
      );

    default:
      return false;
  }
}

import { unlockCard } from "./cardsProgress";

export async function syncCardsToSupabase(cards, ctx) {
  for (const c of cards) {
    try {
      await unlockCard(
        c.slug,
        ctx.source || ctx.event || "engine",
        {
          worldKey: ctx.worldKey,
          score: ctx.score,
          isBoss: ctx.isBoss,
        }
      );
    } catch (e) {
      console.error("sync card failed:", c.slug, e);
    }
  }
}

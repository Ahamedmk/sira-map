import { supabase } from "./supabase";

export async function getUnlockedSlugs() {
  const { data: authData } = await supabase.auth.getUser();
  if (!authData?.user) return new Set();

  const { data, error } = await supabase.from("user_cards").select("card_slug");
  if (error) throw error;

  return new Set((data || []).map((r) => r.card_slug));
}

export async function unlockCard(cardSlug, source = "unknown", metadata = {}) {
  const { data: authData } = await supabase.auth.getUser();
  const userId = authData?.user?.id;
  if (!userId) throw new Error("Not authenticated");

  const { error } = await supabase
    .from("user_cards")
    .upsert(
      {
        user_id: userId,
        card_slug: cardSlug,
        source,
        metadata,
      },
      { onConflict: "user_id,card_slug" } // empêche doublons (anti farm)
    );

  if (error) {
  console.error("❌ unlockCard error:", error);
  throw error;
}
}

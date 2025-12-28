import { supabase } from "./supabase";

/**
 * Récupère la progression remote (ou null si pas trouvé)
 */
export async function fetchRemoteProgress(userId) {
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
 * Upsert (crée ou met à jour)
 */
export async function upsertRemoteProgress(userId, progress) {
  const safe = {
    ...progress,
    // ✅ toujours avoir updatedAt côté data JSON (utile pour merge)
    updatedAt: Number(progress?.updatedAt) || Date.now(),
  };

  const payload = {
    user_id: userId,
    data: safe,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("user_progress")
    .upsert(payload, { onConflict: "user_id" });

  if (error) throw error;
}

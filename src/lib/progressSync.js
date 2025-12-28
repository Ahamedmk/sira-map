import { supabase } from "./supabase";
import { loadProgress, saveProgress } from "./progressStore";
import { mergeProgress } from "./progressMerge";

const LS_KEY_MIGRATED = "progress_migrated_to_supabase_v1";

/** Récupère remote */
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

/** Upsert remote */
export async function upsertRemoteProgress(userId, progress) {
  const safe = {
    ...progress,
    // ✅ on s’assure que updatedAt existe toujours pour les merges
    updatedAt: Number(progress?.updatedAt) || Date.now(),
  };

  const { error } = await supabase.from("user_progress").upsert(
    {
      user_id: userId,
      data: safe,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );

  if (error) throw error;
}

/**
 * Sync au login :
 * - récupère local
 * - récupère remote
 * - merge conservateur (ne perd rien)
 * - save local
 * - push remote
 */
export async function syncProgressOnLogin(userId) {
  const local = loadProgress();
  const remote = await fetchRemoteProgress(userId);

  // ✅ merge conservateur
  const merged = mergeProgress(local, remote);

  // ✅ sécuriser updatedAt
  const mergedSafe = {
    ...merged,
    updatedAt: Number(merged?.updatedAt) || Date.now(),
  };

  // Save local (offline)
  saveProgress(mergedSafe);

  // Push remote (cloud)
  await upsertRemoteProgress(userId, mergedSafe);

  localStorage.setItem(LS_KEY_MIGRATED, "1");

  return mergedSafe;
}

/**
 * Refresh (si tu veux pull le cloud au démarrage quand connecté)
 */
export async function refreshProgressFromCloud(userId) {
  const local = loadProgress();
  const remote = await fetchRemoteProgress(userId);
  if (!remote) return local;

  const merged = mergeProgress(local, remote);

  const mergedSafe = {
    ...merged,
    updatedAt: Number(merged?.updatedAt) || Date.now(),
  };

  saveProgress(mergedSafe);
  return mergedSafe;
}

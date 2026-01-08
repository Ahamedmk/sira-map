export function isPremium() {
  return localStorage.getItem("sira_premium") === "1";
}

// worldId attendu: "world-1", "world-2"...
export function worldNumberFromId(worldId) {
  const m = String(worldId || "").match(/(\d+)/);
  return m ? Number(m[1]) : 1;
}

export function isWorldLockedByPaywall(worldId, freeWorlds = 3) {
  const n = worldNumberFromId(worldId);
  return n > freeWorlds && !isPremium();
}

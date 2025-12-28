import { upsertRemoteProgress } from "./progressRemote";
import { loadProgress } from "./progressStore";

let t = null;

export function scheduleCloudSave(userId, delay = 800) {
  if (!userId) return;
  clearTimeout(t);
  t = setTimeout(async () => {
    try {
      const p = loadProgress();
      await upsertRemoteProgress(userId, p);
      console.log("☁️ progress saved");
    } catch (e) {
      console.warn("☁️ save failed:", e?.message || e);
    }
  }, delay);
}

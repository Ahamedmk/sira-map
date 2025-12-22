import { WORLDS } from "../data/map.mock.js";

// Mélange simple
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Trouver un monde par boss id (b1 => world-1, b2 => world-2, etc.)
export function getWorldByBossId(bossId) {
  const m = String(bossId).match(/^b(\d+)$/);
  if (!m) return null;
  const idx1 = Number(m[1]); // 1-based
  return WORLDS[idx1 - 1] || null;
}

/**
 * Génère les questions boss à partir des reviewQuestions des leçons required du monde.
 * Stratégie:
 * 1) On prend d'abord difficulty="boss"
 * 2) Si pas assez, on complète avec "hard"
 * 3) Si pas assez, on complète avec "medium"
 *
 * Options :
 * - count: nombre de questions
 * - passPct: seuil réussite
 */
export function buildBossQuiz(bossId, lessonsContent, opts = {}) {
  const world = getWorldByBossId(bossId);

  if (!world) {
    return {
      title: "Boss Quiz",
      bossId,
      worldId: null,
      questions: [],
      passPct: 80,
      sourceLessonIds: [],
    };
  }

  const passPct = Number.isFinite(opts.passPct) ? opts.passPct : 80;
  const count = Number.isFinite(opts.count) ? opts.count : 8;

  // Leçons required du monde (type lesson)
  const lessonNodes = world.nodes.filter((n) => n.type === "lesson" && n.required);
  const lessonIds = lessonNodes.map((n) => n.id);

  // Collecter les questions par "niveau" (boss/hard/medium)
  const bossPool = [];
  const hardPool = [];
  const mediumPool = [];

  for (const lid of lessonIds) {
    const c = lessonsContent[lid];
    const qs = c?.reviewQuestions || [];

    for (const q of qs) {
      const wrapped = {
        ...q,
        _sourceLessonId: lid,
      };

      if (q?.difficulty === "boss") bossPool.push(wrapped);
      else if (q?.difficulty === "hard") hardPool.push(wrapped);
      else mediumPool.push(wrapped);
    }
  }

  // Helper: pick sans doublons (par id)
  const picked = [];
  const seen = new Set();

  function pickFrom(pool) {
    for (const q of shuffle(pool)) {
      const id = q.id || `${q._sourceLessonId}_${q.question}`;
      if (seen.has(id)) continue;
      seen.add(id);
      picked.push(q);
      if (picked.length >= count) break;
    }
  }

  // 1) boss 2) hard 3) medium
  pickFrom(bossPool);
  if (picked.length < count) pickFrom(hardPool);
  if (picked.length < count) pickFrom(mediumPool);

  // Normaliser au format attendu par ton quiz
  const questions = picked.slice(0, count).map((q, idx) => ({
    id: q.id || `boss_${bossId}_${idx}`,
    type: q.type || "mcq",
    question: q.question,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation || "",
    difficulty: q.difficulty || "medium",
    _sourceLessonId: q._sourceLessonId,
  }));

  return {
    title: `Boss Quiz — ${world.title}`,
    bossId,
    worldId: world.id,
    questions,
    passPct,
    sourceLessonIds: lessonIds,
  };
}

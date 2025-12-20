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
  const w = WORLDS[idx1 - 1];
  return w || null;
}

/**
 * Génère les questions boss à partir des reviewQuestions des leçons required du monde.
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

  // leçons required du monde (type lesson)
  const lessonNodes = world.nodes.filter((n) => n.type === "lesson" && n.required);
  const lessonIds = lessonNodes.map((n) => n.id);

  // collecter toutes les questions
  const pool = [];
  for (const lid of lessonIds) {
    const c = lessonsContent[lid];
    const qs = c?.reviewQuestions || [];
    for (const q of qs) {
      pool.push({
        ...q,
        // on garde la provenance (utile debug + analytics plus tard)
        _sourceLessonId: lid,
      });
    }
  }

  // Mélange + sélection
  const picked = shuffle(pool).slice(0, Math.min(count, pool.length));

  // Normaliser au format attendu par ton quiz (id/question/options/correctIndex/explanation)
  const questions = picked.map((q, idx) => ({
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

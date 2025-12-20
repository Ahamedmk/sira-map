import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById, WORLDS } from "../data/map.mock.js";
import { ChevronLeft, Crown } from "lucide-react";
import { LESSONS_CONTENT } from "../data/lessons.mock.js";

// ---------- Utils ----------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isBossId(id) {
  return /^b\d+$/.test(String(id));
}

function getWorldByBossId(bossId) {
  const m = String(bossId).match(/^b(\d+)$/);
  if (!m) return null;
  const idx1 = Number(m[1]); // 1-based
  return WORLDS[idx1 - 1] || null;
}

/**
 * Boss quiz auto:
 * - prend les leçons required du monde
 * - récupère leurs reviewQuestions
 * - mélange, pick N
 */
function buildBossQuestions(bossId, opts = {}) {
  const world = getWorldByBossId(bossId);
  const passPct = Number.isFinite(opts.passPct) ? opts.passPct : 80;
  const count = Number.isFinite(opts.count) ? opts.count : 8;

  if (!world) {
    return {
      title: "Boss Quiz",
      worldTitle: null,
      passPct,
      questions: [],
    };
  }

  const lessonIds = world.nodes
    .filter((n) => n.type === "lesson" && n.required)
    .map((n) => n.id);

  const pool = [];
  for (const lid of lessonIds) {
    const qs = LESSONS_CONTENT?.[lid]?.reviewQuestions || [];
    for (const q of qs) {
      pool.push({
        id: q.id,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation || "",
      });
    }
  }

  const picked = shuffle(pool).slice(0, Math.min(count, pool.length));

  return {
    title: `Boss Quiz — ${world.title}`,
    worldTitle: world.title,
    passPct,
    questions: picked,
  };
}

export default function QuizPage() {
  const { lessonId } = useParams(); // peut être l5 OU b2
  const navigate = useNavigate();

  const isBoss = useMemo(() => isBossId(lessonId), [lessonId]);

  // Pour garder ton header actuel, on utilise getLessonById si possible
  // mais pour un boss bX, getLessonById(bX) existe déjà dans ta map (node boss)
  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);

  const quizPack = useMemo(() => {
    if (isBoss) {
      return buildBossQuestions(lessonId, { count: 8, passPct: 80 });
    }

    // ✅ Si tu veux plus tard: quiz auto d’une leçon lX -> prends LESSONS_CONTENT[lX].reviewQuestions
    // Pour l’instant : fallback minimal (tu peux enlever si tu veux)
    const fallback = LESSONS_CONTENT?.[lessonId]?.reviewQuestions || [];
    return {
      title: `Quiz — ${LESSONS_CONTENT?.[lessonId]?.title || "Leçon"}`,
      passPct: 80,
      questions: fallback.length ? fallback : [],
    };
  }, [isBoss, lessonId]);

  const QUESTIONS = quizPack.questions;
  const total = QUESTIONS.length;

  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const q = QUESTIONS[i];
  const progressPct = total ? Math.round(((i + 1) / total) * 100) : 0;

  // ---------- Guards ----------
  if (!lesson) {
    return (
      <div className="min-h-full bg-neutral-50">
        <div className="mx-auto max-w-md px-4 pt-6">
          <p className="text-sm text-neutral-600">Quiz introuvable.</p>
        </div>
      </div>
    );
  }

  if (!total) {
    return (
      <div className="min-h-full bg-neutral-50">
        <div className="mx-auto max-w-md px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-neutral-700"
          >
            <ChevronLeft size={18} />
            Retour
          </button>

          <div className="mt-4 rounded-2xl border bg-white p-4">
            <p className="font-semibold">
              {isBoss ? "Boss Quiz indisponible" : "Quiz indisponible"}
            </p>
            <p className="text-sm text-neutral-600 mt-1">
              Il n’y a pas encore assez de questions pour ce contenu.
              Ajoute des <code>reviewQuestions</code> dans <code>lessons.mock.js</code>.
            </p>

            <button
              onClick={() => navigate("/map")}
              className="mt-4 w-full rounded-xl bg-neutral-900 text-white py-3 font-medium"
            >
              Retour à la map
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = selected !== null && selected === q.correctIndex;

  function validate() {
    if (selected === null) return;
    if (selected === q.correctIndex) setCorrectCount((c) => c + 1);
    setShowFeedback(true);
  }

  function next() {
    // dernière question -> résultat
    if (i + 1 >= total) {
      const finalCorrect = correctCount + (isCorrect ? 1 : 0);
      const pct = Math.round((finalCorrect / total) * 100);
      const passed = pct >= quizPack.passPct;

      // ✅ on garde ton système de routes result
      // Astuce : on passe score + passPct en state pour l’afficher si tu veux
      if (passed)
        navigate(`/result/success/${lessonId}`, {
          replace: true,
          state: { pct, passPct: quizPack.passPct, isBoss },
        });
      else
        navigate(`/result/fail/${lessonId}`, {
          replace: true,
          state: { pct, passPct: quizPack.passPct, isBoss },
        });

      return;
    }

    setShowFeedback(false);
    setSelected(null);
    setI((x) => x + 1);
  }

  return (
    <div className="min-h-full bg-neutral-50 pb-6">
      <div className="mx-auto max-w-md px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-neutral-700"
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        <div className="mt-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-neutral-500">
              {isBoss ? (
                <span className="inline-flex items-center gap-2">
                  <Crown size={14} /> Boss — {lesson.node.title}
                </span>
              ) : (
                <>Épreuve — {lesson.node.title}</>
              )}
            </p>
            <p className="text-xs text-neutral-500">Seuil {quizPack.passPct}%</p>
          </div>

          <div className="mt-2 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-neutral-900" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-2 text-sm text-neutral-600">
            Question {i + 1}/{total}
          </p>
        </div>

        <div className="mt-4 rounded-2xl border bg-white p-4">
          <h1 className="text-base font-semibold">{q.question}</h1>

          <div className="mt-3 space-y-2">
            {q.options.map((opt, idx) => {
              const active = selected === idx;
              const locked = showFeedback;
              return (
                <button
                  key={idx}
                  disabled={locked}
                  className={[
                    "w-full text-left rounded-xl border px-3 py-3 text-sm transition",
                    active ? "border-neutral-900" : "border-neutral-200",
                    locked ? "opacity-90" : "hover:border-neutral-300",
                  ].join(" ")}
                  onClick={() => setSelected(idx)}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {!showFeedback ? (
            <button
              onClick={validate}
              className="mt-4 w-full rounded-xl bg-neutral-900 text-white py-3 font-medium disabled:opacity-50"
              disabled={selected === null}
            >
              Valider
            </button>
          ) : (
            <div className="mt-4 rounded-xl border p-3">
              <p className={`text-sm font-medium ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                {isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </p>
              {q.explanation ? (
                <p className="text-sm text-neutral-700 mt-1">{q.explanation}</p>
              ) : null}

              <button
                onClick={next}
                className="mt-3 w-full rounded-xl bg-neutral-900 text-white py-2.5 font-medium"
              >
                {i + 1 < total ? "Suivant" : "Voir le résultat"}
              </button>
            </div>
          )}
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          Correct : {correctCount}/{total}
        </p>
      </div>
    </div>
  );
}

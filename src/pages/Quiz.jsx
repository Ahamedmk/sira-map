import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Crown, Sparkles, ShieldCheck } from "lucide-react";

import { getLessonById } from "../data/map.mock.js";
import { getLessonContent, LESSONS_CONTENT } from "../data/lessons.mock.js";
import { buildBossQuiz } from "../lib/bossQuizEngine.js"; // ✅ adapte si ton fichier s'appelle autrement

export default function Quiz() {
  const { lessonId } = useParams(); // "l3" ou "b1"
  const navigate = useNavigate();

  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const isBossId = useMemo(() => /^b\d+$/.test(String(lessonId)), [lessonId]);

  const quiz = useMemo(() => {
    if (isBossId) {
      return buildBossQuiz(lessonId, LESSONS_CONTENT, {
        count: 8,
        passPct: 80,
      });
    }

    const lesson = getLessonById(lessonId);
    const content = getLessonContent(lessonId);

    const questions = (content?.reviewQuestions || []).map((q, idx) => ({
      id: q.id || `${lessonId}_q_${idx}`,
      type: q.type || "mcq",
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation || "",
      difficulty: q.difficulty || "medium",
    }));

    return {
      title: `Épreuve — ${content?.title || lesson?.node?.title || "Leçon"}`,
      bossId: null,
      worldId: lesson?.world?.id || null,
      questions,
      passPct: 80,
      sourceLessonIds: [lessonId],
    };
  }, [isBossId, lessonId]);

  const questions = quiz?.questions || [];
  const total = questions.length;

  const bossMode = useMemo(() => {
    if (isBossId) return true;
    return questions.some((q) => q.difficulty === "boss");
  }, [isBossId, questions]);

  if (!total) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-md px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-neutral-700"
          >
            <ChevronLeft size={18} />
            Retour
          </button>
          <div className="mt-4 rounded-3xl border bg-white p-5">
            <p className="text-sm text-neutral-700">
              Aucune question pour ce quiz.
            </p>
            <p className="text-xs text-neutral-500 mt-2">
              Ajoute des <code>reviewQuestions</code> dans lessons.mock.js
            </p>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[i];
  const progressPct = Math.round(((i + 1) / total) * 100);
  const isCorrect = selected !== null && selected === q.correctIndex;

  function validate() {
    if (selected === null) return;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setShowFeedback(true);
  }

  function finish() {
    const finalCorrect = correctCount + (isCorrect ? 1 : 0);
    const pct = Math.round((finalCorrect / total) * 100);
    const passed = pct >= (quiz.passPct ?? 80);

    if (passed) navigate(`/result/success/${lessonId}`, { replace: true });
    else navigate(`/result/fail/${lessonId}`, { replace: true });
  }

  function next() {
    if (i + 1 >= total) return finish();
    setShowFeedback(false);
    setSelected(null);
    setI((x) => x + 1);
  }

  return (
    <div
      className={[
        "min-h-screen pb-6",
        bossMode ? "bg-neutral-950" : "bg-neutral-50",
      ].join(" ")}
    >
      <div className="mx-auto max-w-md px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className={[
            "inline-flex items-center gap-2 text-sm",
            bossMode ? "text-neutral-200" : "text-neutral-700",
          ].join(" ")}
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        {bossMode ? (
          <div className="mt-4 rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-neutral-300">MODE BOSS</p>
                <h1 className="mt-1 text-lg font-semibold text-white">
                  {quiz.title || "Boss Quiz"}
                </h1>
                <p className="mt-1 text-sm text-neutral-300">
                  Seuil :{" "}
                  <span className="font-semibold text-white">
                    {quiz.passPct ?? 80}%
                  </span>{" "}
                  • {total} questions
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                <Crown className="text-yellow-400" size={20} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-3">
            <h1 className="text-base font-semibold text-neutral-900">
              {quiz.title}
            </h1>
            <p className="text-sm text-neutral-600">
              Question {i + 1}/{total}
            </p>
          </div>
        )}

        <div
          className={[
            "mt-4 h-2 w-full rounded-full overflow-hidden",
            bossMode ? "bg-neutral-800" : "bg-neutral-100",
          ].join(" ")}
        >
          <div
            className={[
              "h-full",
              bossMode ? "bg-white" : "bg-neutral-900",
            ].join(" ")}
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div
          className={[
            "mt-4 rounded-3xl border p-5",
            bossMode
              ? "border-neutral-800 bg-neutral-900"
              : "border-neutral-200 bg-white",
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-3">
            <h2
              className={[
                "text-base font-semibold",
                bossMode ? "text-white" : "text-neutral-900",
              ].join(" ")}
            >
              {q.question}
            </h2>

            {bossMode ? (
              <div className="inline-flex items-center gap-2 text-xs text-neutral-300">
                <ShieldCheck size={16} />
                Boss
              </div>
            ) : null}
          </div>

          <div className="mt-4 space-y-2">
            {q.options.map((opt, idx) => {
              const active = selected === idx;
              const locked = showFeedback;

              return (
                <button
                  key={idx}
                  disabled={locked}
                  className={[
                    "w-full text-left rounded-2xl border px-4 py-3 text-sm transition",
                    bossMode
                      ? "bg-neutral-950 border-neutral-800 text-black"
                      : "bg-white border-neutral-200 text-neutral-900",
                    active
                      ? bossMode
                        ? "border-white"
                        : "border-neutral-900"
                      : "",
                    locked
                      ? "opacity-90"
                      : bossMode
                      ? "hover:border-neutral-600"
                      : "hover:border-neutral-300",
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
              className={[
                "mt-4 w-full rounded-2xl py-3 font-medium disabled:opacity-50",
                bossMode
                  ? "bg-white text-neutral-900"
                  : "bg-neutral-900 text-white",
              ].join(" ")}
              disabled={selected === null}
            >
              Valider
            </button>
          ) : (
            <div
              className={[
                "mt-4 rounded-2xl border p-4",
                bossMode
                  ? "border-neutral-800 bg-neutral-950"
                  : "border-neutral-200",
              ].join(" ")}
            >
              <p
                className={[
                  "text-sm font-semibold",
                  isCorrect ? "text-emerald-400" : "text-red-400",
                ].join(" ")}
              >
                {isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </p>

              {q.explanation ? (
                <p
                  className={[
                    "mt-2 text-sm leading-6",
                    bossMode ? "text-neutral-200" : "text-neutral-700",
                  ].join(" ")}
                >
                  {q.explanation}
                </p>
              ) : null}

              <button
                onClick={next}
                className={[
                  "mt-3 w-full rounded-2xl py-2.5 font-medium",
                  bossMode
                    ? "bg-white text-neutral-900"
                    : "bg-neutral-900 text-white",
                ].join(" ")}
              >
                {i + 1 < total ? "Suivant" : "Voir le résultat"}
              </button>

              {bossMode ? (
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-400">
                  <Sparkles size={14} />
                  Mode Boss : compréhension globale du monde.
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

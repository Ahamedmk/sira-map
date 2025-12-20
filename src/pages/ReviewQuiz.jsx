import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import { getLessonContent } from "../data/lessons.mock.js";
import {
  addXp,
  loadProgress,
  saveProgress,
  markActiveDay,
  markReviewDone,
} from "../lib/progressStore.js";
import { ChevronLeft } from "lucide-react";

// Fallback si une leçon n'a pas encore de contenu
function fallbackQuestions(lessonTitle) {
  return [
    {
      id: "fb1",
      type: "tf",
      question: `Vrai/Faux : Cette révision renforce la leçon "${lessonTitle}".`,
      options: ["Vrai", "Faux"],
      correctIndex: 0,
      explanation: "Oui : la révision sert à consolider l’essentiel.",
      difficulty: "easy",
    },
    {
      id: "fb2",
      type: "mcq",
      question: "Quelle est la meilleure stratégie quand tu oublies ?",
      options: [
        "Relire un extrait ciblé puis retenter",
        "Abandonner",
        "Ne plus réviser",
        "Attendre une semaine",
      ],
      correctIndex: 0,
      explanation: "On corrige précisément, puis on reteste.",
      difficulty: "easy",
    },
  ];
}

// Sélection selon stage:
// - Stage 1 (J+1) : easy + 1 medium si possible
// - Stage 2 (J+3) : easy + medium (plus de questions)
function pickQuestionsForStage(all, stage) {
  const easy = all.filter((q) => (q.difficulty || "easy") === "easy");
  const medium = all.filter((q) => (q.difficulty || "easy") === "medium");
  const hard = all.filter((q) => (q.difficulty || "easy") === "hard");

  if (stage === 1) {
    const picked = [];
    if (easy[0]) picked.push(easy[0]);
    if (easy[1]) picked.push(easy[1]);
    if (medium[0]) picked.push(medium[0]);
    return picked.slice(0, 3);
  }

  // stage 2
  const picked = [];
  if (easy[0]) picked.push(easy[0]);
  if (medium[0]) picked.push(medium[0]);
  if (medium[1]) picked.push(medium[1]);
  if (hard[0]) picked.push(hard[0]);
  // si pas assez, compléter avec easy
  for (const q of easy) {
    if (picked.length >= 4) break;
    if (!picked.some((x) => x.id === q.id)) picked.push(q);
  }
  return picked.slice(0, 4);
}

export default function ReviewQuizPage() {
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const progress = useMemo(() => loadProgress(), []);
  const reviewTask = useMemo(
    () => progress.reviewQueue.find((r) => r.id === reviewId),
    [progress, reviewId]
  );

  const lessonId = reviewTask?.lessonId;
  const lessonInfo = useMemo(() => (lessonId ? getLessonById(lessonId) : null), [lessonId]);
  const lessonContent = useMemo(() => (lessonId ? getLessonContent(lessonId) : null), [lessonId]);

  const lessonTitle =
    lessonContent?.title || lessonInfo?.node?.title || "cette leçon";

  const questions = useMemo(() => {
    const base = lessonContent?.reviewQuestions?.length
      ? lessonContent.reviewQuestions
      : fallbackQuestions(lessonTitle);

    return pickQuestionsForStage(base, reviewTask?.stage || 1);
  }, [lessonContent, lessonTitle, reviewTask?.stage]);

  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!reviewTask) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-md px-4 pt-6">
          <p className="text-sm text-neutral-600">Révision introuvable.</p>
          <button
            onClick={() => navigate("/review")}
            className="mt-3 w-full rounded-xl bg-neutral-900 text-black py-2.5 font-medium"
          >
            Retour Réviser
          </button>
        </div>
      </div>
    );
  }

  const q = questions[i];
  const total = questions.length;
  const progressPct = Math.round(((i + 1) / total) * 100);
  const isCorrect = selected !== null && selected === q.correctIndex;

  const passThreshold = reviewTask.stage === 1 ? 67 : 75; // J+1 plus permissif, J+3 plus exigeant

  function validate() {
    if (selected === null) return;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setShowFeedback(true);
  }

  function finish(passed) {
    let p = loadProgress();
    p = markActiveDay(p);

    if (passed) {
      const xpGain = reviewTask.stage === 1 ? 10 : 15; // J+3 donne un peu plus
      p = addXp(p, xpGain);
      p = markReviewDone(p, reviewId);
      // 🎁 Bonus XP si review optionnelle d’un monde déjà complété (MVP world-1)
     const isBonusReview = reviewTask?.id === "rev_r1_1" || reviewTask?.id === "rev_r1_2" || reviewTask?.lessonId === "r1";

      saveProgress(p);

      // On utilise l'écran success existant (ça affiche la leçon)
      navigate(`/result/success/${reviewTask.lessonId}`, { replace: true });
    } else {
      saveProgress(p);
      navigate(`/result/fail/${reviewTask.lessonId}`, { replace: true });
    }
  }

  function next() {
    if (i + 1 >= total) {
      const finalCorrect = correctCount + (isCorrect ? 1 : 0);
      const pct = Math.round((finalCorrect / total) * 100);
      finish(pct >= passThreshold);
      return;
    }

    setShowFeedback(false);
    setSelected(null);
    setI((x) => x + 1);
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-6">
      <div className="mx-auto max-w-md px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-neutral-700"
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        <div className="mt-3">
          <p className="text-xs text-neutral-500">
            Révision {reviewTask.stage === 1 ? "J+1" : "J+3"} — {lessonTitle}
          </p>
          <div className="mt-2 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-neutral-900" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-2 text-sm text-neutral-600">
            Question {i + 1}/{total} • objectif {passThreshold}%
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
              className="mt-4 w-full rounded-xl bg-neutral-900 text-black py-3 font-medium disabled:opacity-50"
              disabled={selected === null}
            >
              Valider
            </button>
          ) : (
            <div className="mt-4 rounded-xl border p-3">
              <p className={`text-sm font-medium ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                {isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </p>
              <p className="text-sm text-neutral-700 mt-1">{q.explanation}</p>

              <button
                onClick={next}
                className="mt-3 w-full rounded-xl bg-neutral-900 text-black py-2.5 font-medium"
              >
                {i + 1 < total ? "Suivant" : "Voir le résultat"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

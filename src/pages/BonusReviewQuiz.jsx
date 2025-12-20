import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { addXp, loadProgress, saveProgress, markActiveDay } from "../lib/progressStore.js";
import { getLessonContent } from "../data/lessons.mock.js";

// Bonus review = mini quiz sur keyPoints
function buildBonusQuestions(content) {
  const points = content?.keyPoints || [];
  const base = points.slice(0, 3);

  // fallback si pas assez de keyPoints
  if (base.length < 2) {
    return [
      {
        id: "bq1",
        question: "Quel est l’objectif d’une révision bonus ?",
        options: ["Se tester rapidement", "Tout oublier", "Passer au hasard"],
        correctIndex: 0,
        explanation: "C’est un rappel rapide pour consolider.",
      },
      {
        id: "bq2",
        question: "Quand est-ce utile ?",
        options: ["Quand on veut consolider", "Quand on veut arrêter", "Jamais"],
        correctIndex: 0,
        explanation: "La répétition intelligente consolide.",
      },
    ];
  }

  // On transforme les points en QCM simples
  return base.map((kp, idx) => ({
    id: `bq_${idx}`,
    question: "Complète l’idée principale :",
    options: [
      kp,
      "Une option piège (hors sujet)",
      "Une autre option piège",
    ],
    correctIndex: 0,
    explanation: "On vise un rappel direct des points clés.",
  }));
}

export default function BonusReviewQuiz() {
  const { bonusId } = useParams(); // r1 ou r2
  const navigate = useNavigate();

  // Pour MVP : r1 = monde 1 => on prend l1/l2/l3/l4 comme base
  const lessonIds = useMemo(() => {
    if (bonusId === "r2") return ["l5", "l6", "l7", "l8"];
    return ["l1", "l2", "l3", "l4"];
  }, [bonusId]);

  const contents = useMemo(
    () => lessonIds.map((id) => getLessonContent(id)).filter(Boolean),
    [lessonIds]
  );

  const merged = useMemo(() => {
    const keyPoints = contents.flatMap((c) => c.keyPoints || []);
    return { keyPoints };
  }, [contents]);

  const questions = useMemo(() => buildBonusQuestions(merged), [merged]);

  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const q = questions[i];
  const total = questions.length;
  const isCorrect = selected !== null && selected === q.correctIndex;

  function validate() {
    if (selected === null) return;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setShowFeedback(true);
  }

  function finish() {
    const finalCorrect = correctCount + (isCorrect ? 1 : 0);
    const pct = Math.round((finalCorrect / total) * 100);
    const passed = pct >= 67;

    let p = loadProgress();
    p = markActiveDay(p);

    // 🎁 Bonus XP si réussite
    if (passed) {
      p = addXp(p, 5);
      saveProgress(p);
      navigate("/map", { replace: true });
    } else {
      saveProgress(p);
      navigate("/map", { replace: true });
    }
  }

  function next() {
    if (i + 1 >= total) return finish();
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
          <p className="text-xs text-neutral-500">🎁 BONUS — Révision rapide</p>
          <p className="text-sm text-neutral-700 mt-1">
            {i + 1}/{total}
          </p>
        </div>

        <div className="mt-4 rounded-2xl border bg-white p-4">
          <h1 className="text-base font-semibold">{q.question}</h1>

          <div className="mt-3 space-y-2">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                disabled={showFeedback}
                className={[
                  "w-full text-left rounded-xl border px-3 py-3 text-sm transition",
                  selected === idx ? "border-neutral-900" : "border-neutral-200",
                  showFeedback ? "opacity-90" : "hover:border-neutral-300",
                ].join(" ")}
                onClick={() => setSelected(idx)}
              >
                {opt}
              </button>
            ))}
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
              <p className="text-sm text-neutral-700 mt-1">{q.explanation}</p>

              <button
                onClick={next}
                className="mt-3 w-full rounded-xl bg-neutral-900 text-white py-2.5 font-medium"
              >
                {i + 1 < total ? "Suivant" : "Terminer"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

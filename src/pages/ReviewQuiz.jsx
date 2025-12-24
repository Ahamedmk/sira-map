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
import { ChevronLeft, Brain, Target, Zap, CheckCircle2, XCircle, Award, AlertCircle } from "lucide-react";

// Fallback si une leçon n'a pas encore de contenu
function fallbackQuestions(lessonTitle) {
  return [
    {
      id: "fb1",
      type: "tf",
      question: `Vrai/Faux : Cette révision renforce la leçon "${lessonTitle}".`,
      options: ["Vrai", "Faux"],
      correctIndex: 0,
      explanation: "Oui : la révision sert à consolider l'essentiel.",
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
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-red-50/20 to-orange-50/20">
        <div className="mx-auto max-w-md px-5 pt-8">
          <button
            onClick={() => navigate("/review")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-neutral-200/50 text-sm font-medium text-neutral-700 shadow-sm hover:shadow-md transition-all"
          >
            <ChevronLeft size={18} />
            Retour
          </button>
          <div className="mt-6 rounded-3xl border-2 border-red-200/50 bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <p className="font-bold text-red-900">Révision introuvable</p>
            </div>
            <p className="text-sm text-red-700 mb-4">
              Cette révision n'existe pas ou a déjà été complétée.
            </p>
            <button
              onClick={() => navigate("/review")}
              className="w-full rounded-2xl bg-red-600 text-white py-3 font-bold hover:shadow-xl transition-all"
            >
              Retour aux Révisions
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[i];
  const total = questions.length;
  const progressPct = Math.round(((i + 1) / total) * 100);
  const isCorrect = selected !== null && selected === q.correctIndex;

  const passThreshold = reviewTask.stage === 1 ? 67 : 75;
  const stageColor = reviewTask.stage === 1 ? "blue" : "purple";
  const stageGradient = reviewTask.stage === 1 
    ? "from-blue-500 to-blue-600" 
    : "from-purple-500 to-purple-600";

  function validate() {
    if (selected === null) return;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setShowFeedback(true);
  }

  function finish(passed) {
    let p = loadProgress();
    p = markActiveDay(p);

    if (passed) {
      const xpGain = reviewTask.stage === 1 ? 10 : 15;
      p = addXp(p, xpGain);
      p = markReviewDone(p, reviewId);

      saveProgress(p);
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-purple-50/20 to-blue-50/20 pb-32 relative overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-10 w-72 h-72 ${stageColor === 'blue' ? 'bg-blue-200/20' : 'bg-purple-200/20'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 left-10 w-80 h-80 ${stageColor === 'blue' ? 'bg-blue-300/20' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse delay-1000`} />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-5 pt-6">
        {/* Header avec bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200/50 text-sm font-medium text-neutral-700 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        {/* Card info révision */}
        <div className={`mt-5 rounded-3xl border-2 ${stageColor === 'blue' ? 'border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-100/50' : 'border-purple-200/50 bg-gradient-to-br from-purple-50 to-purple-100/50'} p-6 shadow-lg relative overflow-hidden`}>
          <div className="absolute top-0 right-0 text-7xl opacity-10">
            {reviewTask.stage === 1 ? '🔵' : '🟣'}
          </div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`h-14 w-14 rounded-2xl ${stageColor === 'blue' ? 'bg-gradient-to-br from-blue-100 to-blue-200' : 'bg-gradient-to-br from-purple-100 to-purple-200'} flex items-center justify-center shadow-md`}>
                  <Brain size={28} className={stageColor === 'blue' ? 'text-blue-600' : 'text-purple-600'} />
                </div>
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${stageColor === 'blue' ? 'bg-blue-200 border border-blue-300' : 'bg-purple-200 border border-purple-300'} mb-1`}>
                    <span className={`text-xs font-bold ${stageColor === 'blue' ? 'text-blue-800' : 'text-purple-800'}`}>
                      Révision {reviewTask.stage === 1 ? "J+1" : "J+3"}
                    </span>
                  </div>
                  <h1 className={`text-lg font-bold ${stageColor === 'blue' ? 'text-blue-900' : 'text-purple-900'}`}>
                    {lessonTitle}
                  </h1>
                </div>
              </div>
            </div>

            {/* Barre de progression */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className={`text-xs font-bold ${stageColor === 'blue' ? 'text-blue-700' : 'text-purple-700'}`}>
                  Progression
                </span>
                <span className={`text-xs font-bold ${stageColor === 'blue' ? 'text-blue-800' : 'text-purple-800'}`}>
                  {progressPct}%
                </span>
              </div>
              <div className="h-3 w-full bg-white/70 rounded-full overflow-hidden shadow-inner">
                <div
                  className={`h-full bg-gradient-to-r ${stageGradient} rounded-full transition-all duration-500 ease-out relative overflow-hidden`}
                  style={{ width: `${progressPct}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className={stageColor === 'blue' ? 'text-blue-700' : 'text-purple-700'}>
                  Question {i + 1}/{total}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-neutral-200/50">
                <Target size={14} className={stageColor === 'blue' ? 'text-blue-600' : 'text-purple-600'} />
                <span className={`text-xs font-bold ${stageColor === 'blue' ? 'text-blue-700' : 'text-purple-700'}`}>
                  Objectif {passThreshold}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card question */}
        <div className="mt-6 rounded-3xl border border-neutral-200/50 bg-white/90 backdrop-blur-sm p-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-neutral-900 leading-snug mb-5">
              {q.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                const active = selected === idx;
                const locked = showFeedback;
                const isCorrectOption = idx === q.correctIndex;
                const showAsWrong = locked && active && !isCorrect;
                const showAsCorrect = locked && isCorrectOption;

                return (
                  <button
                    key={idx}
                    disabled={locked}
                    className={[
                      "w-full text-left rounded-2xl border-2 px-5 py-4 text-sm font-medium transition-all duration-200 relative overflow-hidden group",
                      "bg-white border-neutral-200",
                      active && !locked && (stageColor === 'blue' ? "border-blue-500 bg-blue-50" : "border-purple-500 bg-purple-50"),
                      !locked && !active && "hover:border-neutral-300 hover:shadow-md hover:scale-[1.01]",
                      showAsWrong && "border-red-500 bg-red-50",
                      showAsCorrect && "border-emerald-500 bg-emerald-50",
                      locked && "cursor-not-allowed",
                    ].join(" ")}
                    onClick={() => !locked && setSelected(idx)}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div className={[
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                        active && !locked && (stageColor === 'blue' ? "border-blue-500 bg-blue-500" : "border-purple-500 bg-purple-500"),
                        !active && !locked && "border-neutral-300",
                        showAsWrong && "border-red-500 bg-red-500",
                        showAsCorrect && "border-emerald-500 bg-emerald-500",
                      ].join(" ")}>
                        {(active && !locked) || showAsWrong || showAsCorrect ? (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        ) : null}
                      </div>
                      <span className="text-neutral-900">
                        {opt}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bouton Valider */}
            {!showFeedback && (
              <button
                onClick={validate}
                className={[
                  "mt-5 w-full rounded-2xl py-4 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group",
                  stageColor === 'blue' 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    : "bg-gradient-to-r from-purple-600 to-purple-700 text-white",
                ].join(" ")}
                disabled={selected === null}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap size={20} />
                  Valider ma réponse
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div
            className={[
              "mt-5 rounded-3xl border-2 p-6 shadow-xl animate-fadeIn",
              isCorrect
                ? "border-emerald-500/50 bg-gradient-to-br from-emerald-50 to-emerald-100/50"
                : "border-red-500/50 bg-gradient-to-br from-red-50 to-red-100/50",
            ].join(" ")}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={[
                "h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg",
                isCorrect ? "bg-emerald-500" : "bg-red-500",
              ].join(" ")}>
                {isCorrect ? (
                  <CheckCircle2 size={24} className="text-white" />
                ) : (
                  <XCircle size={24} className="text-white" />
                )}
              </div>
              <div>
                <p className={[
                  "text-lg font-bold",
                  isCorrect ? "text-emerald-700" : "text-red-700",
                ].join(" ")}>
                  {isCorrect ? "Parfait !" : "Presque..."}
                </p>
                <p className="text-xs text-neutral-600">
                  {isCorrect ? "Tu maîtrises bien !" : "Continue d'apprendre"}
                </p>
              </div>
            </div>

            {q.explanation && (
              <div className="rounded-2xl border bg-white p-4 mb-4">
                <p className="text-xs font-bold text-neutral-500 mb-2">💡 EXPLICATION</p>
                <p className="text-sm leading-6 text-neutral-700">
                  {q.explanation}
                </p>
              </div>
            )}

            <button
              onClick={next}
              className={[
                "w-full rounded-2xl py-4 font-bold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group",
                stageColor === 'blue'
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                  : "bg-gradient-to-r from-purple-600 to-purple-700 text-white",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {i + 1 < total ? (
                  <>
                    Question suivante
                    <ChevronLeft size={20} className="rotate-180" />
                  </>
                ) : (
                  <>
                    <Award size={20} />
                    Voir mon résultat
                  </>
                )}
              </span>
            </button>
          </div>
        )}

        {/* Score actuel */}
        <div className="mt-5 rounded-2xl border border-neutral-200/50 bg-white/80 backdrop-blur-sm p-4 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-600">Score actuel</span>
            <span className={`text-lg font-bold ${stageColor === 'blue' ? 'text-blue-600' : 'text-purple-600'}`}>
              {correctCount}/{i + (showFeedback ? 1 : 0)}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
            <Zap size={12} className={stageColor === 'blue' ? 'text-blue-600' : 'text-purple-600'} />
            <span>
              +{reviewTask.stage === 1 ? 10 : 15} XP si tu réussis !
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
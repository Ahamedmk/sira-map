import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  Crown,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { getLessonById } from "../data/map.mock.js";
import { getLessonContent, LESSONS_CONTENT } from "../data/lessons.mock.js";
import { buildBossQuiz } from "../lib/bossQuizEngine.js";
import { evaluateCards } from "../lib/progressCardsEngine";
import { saveProgress } from "../lib/progressStore";
import { syncCardsToSupabase } from "../lib/syncCards";
import { loadProgress, isNodeCompleted } from "../lib/progressStore.js";

// ✅ modal animation
import CardUnlockModal from "../components/CardUnlockModal.jsx";

/**
 * map.mock.js -> world ids: "world-10"
 * cards system -> worldKey: "world10_hijrah"
 */
const WORLD_ID_TO_KEY = {
  "world-1": "world1_intro",
  "world-4": "world4_revelation",
  "world-6": "world6_boycott",
  "world-7": "world7_sorrow",
  "world-10": "world10_hijrah",
  "world-11": "world11_build",
  "world-13": "world13_badr",
  "world-15": "world15_uhud",
  "world-17": "world17_khandaq",
  "world-19": "world19_hudaybiyyah",
  "world-22": "world22_fath",
  "world-24": "world24_final",
};

function worldIdToWorldKey(worldId) {
  if (!worldId) return null;
  if (WORLD_ID_TO_KEY[worldId]) return WORLD_ID_TO_KEY[worldId];

  const m = String(worldId).match(/^world-(\d+)$/);
  if (m) return `world${m[1]}`;

  return null;
}

export default function Quiz() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);

  const [correctCount, setCorrectCount] = useState(0);
  const correctRef = useRef(0);

  const [showFeedback, setShowFeedback] = useState(false);

  // ✅ popup unlock (déclenché par ton engine/flow réel)
  const [unlockOpen, setUnlockOpen] = useState(false);
  const [unlockQueue, setUnlockQueue] = useState([]);

  const pendingNavRef = useRef(null); // { type:"success"|"fail", lessonId }


  const isBossId = useMemo(() => /^b\d+$/.test(String(lessonId)), [lessonId]);

  // ✅ Verrou : si déjà complété -> redirige (anti farm)
  const alreadyDone = useMemo(() => {
    const p = loadProgress();
    return isNodeCompleted(p, lessonId);
  }, [lessonId]);

  useEffect(() => {
    if (!alreadyDone) return;

    if (isBossId) {
      navigate("/map", { replace: true });
      return;
    }

    navigate(`/lesson/${lessonId}`, { replace: true });
  }, [alreadyDone, isBossId, lessonId, navigate]);

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

    const worldId = lesson?.world?.id || null;

    return {
      title: `Épreuve — ${content?.title || lesson?.node?.title || "Leçon"}`,
      bossId: null,
      worldId,
      worldKey: worldIdToWorldKey(worldId),
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

  // Si déjà fait : on ne montre rien (useEffect redirect)
  if (alreadyDone) return null;

  function handleCloseUnlock() {
  const rest = unlockQueue.slice(1);

  // ✅ si plusieurs cartes débloquées -> on enchaîne
  if (rest.length) {
    setUnlockQueue(rest);
    return;
  }

  // ✅ fin de queue
  setUnlockOpen(false);
  setUnlockQueue([]);

  // ✅ navigation après fermeture
  const pending = pendingNavRef.current;
  pendingNavRef.current = null;

  if (pending?.type === "success") {
    navigate(`/result/success/${pending.lessonId}`, { replace: true });
  } else if (pending?.type === "fail") {
    navigate(`/result/fail/${pending.lessonId}`, { replace: true });
  }
}


  if (!total) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-red-50/20 to-orange-50/20">
        <div className="mx-auto max-w-md px-5 pt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-neutral-200/50 text-sm font-medium text-neutral-900 shadow-sm hover:shadow-md transition-all"
          >
            <ChevronLeft size={18} />
            Retour
          </button>

          <div className="mt-6 rounded-3xl border-2 border-red-200/50 bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <p className="font-bold text-red-900">Aucune question disponible</p>
            </div>
            <p className="text-sm text-red-700 mb-2">
              Ce quiz n&apos;a pas encore de questions.
            </p>
            <p className="text-xs text-red-600 bg-red-50 rounded-xl p-3 font-mono">
              Ajoute des reviewQuestions dans lessons.mock.js
            </p>
          </div>
        </div>

        <CardUnlockModal
          open={unlockOpen}
          card={unlockQueue[0]}
          onClose={handleCloseUnlock}
        />
      </div>
    );
  }

  const q = questions[i];
  const progressPct = Math.round(((i + 1) / total) * 100);
  const isCorrect = selected !== null && selected === q.correctIndex;

  function validate() {
    if (selected === null) return;

    if (isCorrect) {
      correctRef.current += 1;
      setCorrectCount(correctRef.current);
    }

    setShowFeedback(true);
  }

  async function finish() {
  const pct = Math.round((correctRef.current / total) * 100);
  const passPct = quiz?.passPct ?? 80;
  const passed = pct >= passPct;

  // si échec: on peut naviguer direct (pas de carte)
  if (!passed) {
    navigate(`/result/fail/${lessonId}`, { replace: true });
    return;
  }

  // ✅ succès: on déclenche le moteur de cartes
  try {
    const p = loadProgress();

    const { progress: p2, newlyUnlocked } = evaluateCards(p, {
      event: "quiz_end",
      worldKey: quiz?.worldKey, // ex: "world10_hijrah"
      score: pct,
      isBoss: isBossId,
      // si tu as ces infos, passe-les, sinon laisse false:
      usedHints: false,
      lessonReplayed: false,
    });

    saveProgress(p2);

    // ✅ sync supabase (anti farm déjà géré par upsert)
    if (newlyUnlocked?.length) {
      await syncCardsToSupabase(newlyUnlocked, {
        source: "quiz",
        event: "quiz_end",
        worldKey: quiz?.worldKey,
        score: pct,
        isBoss: isBossId,
      });

      // ✅ ouvrir popup, et on garde la navigation en attente
      pendingNavRef.current = { type: "success", lessonId };
      setUnlockQueue(newlyUnlocked);
      setUnlockOpen(true);
      return; // ⛔️ on navigate pas maintenant
    }

    // ✅ pas de carte à montrer -> navigation normale
    navigate(`/result/success/${lessonId}`, { replace: true });
  } catch (e) {
    console.error("finish() cards flow failed:", e);
    // fallback : ne bloque pas l'utilisateur
    navigate(`/result/success/${lessonId}`, { replace: true });
  }
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
        "min-h-screen pb-8 relative overflow-hidden",
        bossMode
          ? "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
          : "bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20",
      ].join(" ")}
    >
      {/* ✅ popup unlock (réel) */}
      <CardUnlockModal
        open={unlockOpen}
        card={unlockQueue[0]}
        onClose={handleCloseUnlock}
      />

      {/* Fond animé */}
      {bossMode ? (
        <>
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, idx) => (
              <div
                key={idx}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-md px-5 pt-6">
        <button
          onClick={() => navigate(-1)}
          className={[
            "inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
            bossMode
              ? "bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 text-black"
              : "bg-white/90 backdrop-blur-sm border border-neutral-200/50 text-neutral-900",
          ].join(" ")}
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        {/* Header Quiz */}
        {bossMode ? (
          <div className="mt-5 rounded-3xl border-2 border-yellow-600/30 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 shadow-2xl shadow-yellow-900/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent animate-shimmer" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-600/20 border border-yellow-600/30 mb-2">
                  <Crown size={14} className="text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400">MODE BOSS</span>
                </div>
                <h1 className="mt-2 text-xl font-bold text-white">
                  {quiz.title || "Boss Quiz"}
                </h1>
                <div className="mt-2 flex items-center gap-3 text-sm text-neutral-300">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={16} className="text-yellow-400" />
                    Seuil :{" "}
                    <span className="font-bold text-white">{quiz.passPct ?? 80}%</span>
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="font-semibold">{total} questions</span>
                </div>
              </div>

              <div className="h-16 w-16 rounded-2xl border-2 border-yellow-600/30 bg-gradient-to-br from-yellow-600/20 to-amber-600/20 flex items-center justify-center shadow-xl shadow-yellow-900/30 animate-pulse-slow">
                <Crown className="text-yellow-400" size={28} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5 rounded-3xl border border-neutral-200/50 bg-white/90 backdrop-blur-sm p-6 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-md">
                  <Award size={24} className="text-blue-600" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-neutral-900">{quiz.title}</h1>
                  <p className="text-sm text-neutral-600">
                    Question {i + 1} sur {total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Barre de progression */}
        <div className="mt-5 relative">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className={`text-xs font-bold ${bossMode ? "text-neutral-400" : "text-neutral-600"}`}>
              Progression
            </span>
            <span className={`text-xs font-bold ${bossMode ? "text-yellow-400" : "text-blue-600"}`}>
              {progressPct}%
            </span>
          </div>
          <div
            className={[
              "h-3 w-full rounded-full overflow-hidden shadow-inner",
              bossMode ? "bg-neutral-800" : "bg-neutral-100",
            ].join(" ")}
          >
            <div
              className={[
                "h-full transition-all duration-500 ease-out relative overflow-hidden rounded-full",
                bossMode
                  ? "bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500"
                  : "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500",
              ].join(" ")}
              style={{ width: `${progressPct}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div
          className={[
            "mt-6 rounded-3xl border p-6 shadow-xl relative overflow-hidden",
            bossMode
              ? "border-neutral-700/50 bg-neutral-900/90 backdrop-blur-sm"
              : "border-neutral-200/50 bg-white/90 backdrop-blur-sm",
          ].join(" ")}
        >
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-5">
              <h2
                className={[
                  "text-lg font-bold leading-snug flex-1",
                  bossMode ? "text-white" : "text-neutral-900",
                ].join(" ")}
              >
                {q.question}
              </h2>

              {bossMode && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-600/20 border border-yellow-600/30">
                  <ShieldCheck size={16} className="text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400">Boss</span>
                </div>
              )}
            </div>

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
                      bossMode ? "bg-neutral-800/50 border-neutral-700" : "bg-white border-neutral-200",
                      active && !locked
                        ? bossMode
                          ? "border-yellow-400 bg-yellow-600/10"
                          : "border-blue-500 bg-blue-50"
                        : "",
                      !locked && !active
                        ? bossMode
                          ? "hover:border-neutral-600 hover:bg-neutral-800"
                          : "hover:border-neutral-300 hover:shadow-md hover:scale-[1.01]"
                        : "",
                      showAsWrong && "border-red-500 bg-red-50",
                      showAsCorrect &&
                        (bossMode
                          ? "border-emerald-400 bg-emerald-900/20"
                          : "border-emerald-500 bg-emerald-50"),
                      locked && "cursor-not-allowed",
                    ].join(" ")}
                    onClick={() => !locked && setSelected(idx)}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div
                        className={[
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                          active && !locked
                            ? bossMode
                              ? "border-yellow-400 bg-yellow-400"
                              : "border-blue-500 bg-blue-500"
                            : bossMode
                            ? "border-neutral-600"
                            : "border-neutral-300",
                          showAsWrong && "border-red-500 bg-red-500",
                          showAsCorrect && "border-emerald-500 bg-emerald-500",
                        ].join(" ")}
                      >
                        {(active && !locked) || showAsWrong || showAsCorrect ? (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        ) : null}
                      </div>

                      <span className={bossMode ? "text-neutral-800" : "text-neutral-900"}>
                        {opt}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={validate}
                className={[
                  "mt-5 w-full rounded-2xl py-4 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group",
                  bossMode
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-neutral-900"
                    : "bg-gradient-to-r from-neutral-900 to-neutral-800 text-white",
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
                ? bossMode
                  ? "border-emerald-600/50 bg-gradient-to-br from-emerald-900/30 to-emerald-950/30"
                  : "border-emerald-500/50 bg-gradient-to-br from-emerald-50 to-emerald-100/50"
                : bossMode
                ? "border-red-600/50 bg-gradient-to-br from-red-900/30 to-red-950/30"
                : "border-red-500/50 bg-gradient-to-br from-red-50 to-red-100/50",
            ].join(" ")}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={[
                  "h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg",
                  isCorrect ? "bg-emerald-500" : "bg-red-500",
                ].join(" ")}
              >
                {isCorrect ? (
                  <CheckCircle2 size={24} className="text-white" />
                ) : (
                  <XCircle size={24} className="text-white" />
                )}
              </div>
              <div>
                <p
                  className={[
                    "text-lg font-bold",
                    isCorrect
                      ? bossMode
                        ? "text-emerald-400"
                        : "text-emerald-700"
                      : bossMode
                      ? "text-red-400"
                      : "text-red-700",
                  ].join(" ")}
                >
                  {isCorrect ? "Excellent !" : "Pas tout à fait..."}
                </p>
                <p className={`text-xs ${bossMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  {isCorrect ? "Continue comme ça" : "Lis l'explication"}
                </p>
              </div>
            </div>

            {q.explanation && (
              <div
                className={[
                  "rounded-2xl border p-4 mb-4",
                  bossMode ? "bg-neutral-800/50 border-neutral-700" : "bg-white border-neutral-200",
                ].join(" ")}
              >
                <p className="text-xs font-bold text-neutral-500 mb-2">💡 EXPLICATION</p>
                <p
                  className={[
                    "text-sm leading-6",
                    bossMode ? "text-neutral-200" : "text-neutral-700",
                  ].join(" ")}
                >
                  {q.explanation}
                </p>
              </div>
            )}

            <button
              onClick={next}
              className={[
                "w-full rounded-2xl py-4 font-bold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group",
                bossMode
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-neutral-900"
                  : "bg-gradient-to-r from-neutral-900 to-neutral-800 text-white",
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

            {bossMode && (
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400">
                <Sparkles size={14} />
                <span>Mode Boss : maîtrise du monde entier</span>
              </div>
            )}
          </div>
        )}

        {/* Score actuel */}
        <div
          className={`mt-5 rounded-2xl border p-4 ${
            bossMode ? "bg-neutral-900/50 border-neutral-700" : "bg-white/80 border-neutral-200/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${bossMode ? "text-neutral-400" : "text-neutral-600"}`}>
              Score actuel
            </span>
            <span className={`text-lg font-bold ${bossMode ? "text-yellow-400" : "text-blue-600"}`}>
              {correctCount}/{i + (showFeedback ? 1 : 0)}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes pulse-slow { 0%,100% { transform: scale(1); opacity: 0.8;} 50% { transform: scale(1.05); opacity: 1;} }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}

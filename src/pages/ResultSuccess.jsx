import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Crown, CheckCircle2, Sparkles, Trophy, Star, Zap, ArrowRight, Brain, TrendingUp } from "lucide-react";
import {
  addXp,
  loadProgress,
  saveProgress,
  markActiveDay,
  completeNode,
  scheduleReviewsForLesson,
  unlockBadge,
} from "../lib/progressStore.js";

export default function ResultSuccess() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  const isBoss = useMemo(() => /^b\d+$/.test(String(lessonId)), [lessonId]);

  useEffect(() => {
    // Animation confetti
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  function applyAndGo() {
    let p = loadProgress();
    p = markActiveDay(p);

    // ✅ Marquer le node terminé (leçon ou boss)
    p = completeNode(p, lessonId);

    // ✅ XP
    p = addXp(p, isBoss ? 60 : 30);

    // ✅ Révisions (uniquement pour les leçons)
    if (!isBoss) {
      p = scheduleReviewsForLesson(p, lessonId);
    }

    // ✅ Badge (ex: boss_world_1 si b1)
    if (isBoss) {
      const badgeId = `boss_world_${lessonId.replace("b", "")}`;
      p = unlockBadge(p, badgeId);
    }

    saveProgress(p);
    navigate("/map", { replace: true });
  }

  return (
    <div className={[
      "min-h-screen pb-32 relative overflow-hidden",
      isBoss 
        ? "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" 
        : "bg-gradient-to-br from-emerald-50 via-green-50/50 to-teal-50/50",
    ].join(" ")}>
      {/* Fond animé */}
      {isBoss ? (
        <>
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          {/* Particules d'étoiles dorées */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(25)].map((_, idx) => (
              <div
                key={idx}
                className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
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
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      {/* Confetti animés */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, idx) => (
            <div
              key={idx}
              className="absolute text-2xl animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 1}s`,
              }}
            >
              {isBoss 
                ? ['👑', '⭐', '🌟', '💫', '✨'][Math.floor(Math.random() * 5)]
                : ['🎉', '✨', '⭐', '🌟', '💫', '🎊'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-md px-5 pt-12">
        {/* Card principale */}
        <div className={[
          "rounded-3xl border-2 p-8 shadow-2xl relative overflow-hidden animate-scaleIn",
          isBoss
            ? "border-yellow-600/30 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
            : "border-emerald-300/50 bg-white/95 backdrop-blur-sm shadow-emerald-200/50",
        ].join(" ")}>
          {/* Effet de lueur */}
          <div className={`absolute inset-0 ${
            isBoss 
              ? "bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent" 
              : "bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/50"
          } animate-shimmer-slow`} />

          <div className="relative z-10">
            {/* Header avec icône */}
            <div className="flex flex-col items-center mb-6">
              <div className={[
                "h-20 w-20 rounded-3xl flex items-center justify-center shadow-2xl mb-4 animate-bounce-slow",
                isBoss
                  ? "bg-gradient-to-br from-yellow-500 to-amber-600 shadow-yellow-600/50"
                  : "bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-emerald-600/50",
              ].join(" ")}>
                {isBoss ? (
                  <Crown size={40} className="text-white" />
                ) : (
                  <CheckCircle2 size={40} className="text-white" />
                )}
              </div>

              <div className="flex items-center gap-3 mb-3">
                {isBoss ? (
                  <>
                    <Crown className="text-yellow-400" size={24} />
                    <h1 className="text-2xl font-bold text-white">Boss vaincu !</h1>
                  </>
                ) : (
                  <>
                    <Trophy className="text-emerald-600" size={24} />
                    <h1 className="text-2xl font-bold text-emerald-900">Validé !</h1>
                  </>
                )}
              </div>

              <div className={[
                "inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-3",
                isBoss
                  ? "bg-yellow-600/20 border-yellow-600/30"
                  : "bg-emerald-100 border-emerald-200",
              ].join(" ")}>
                <Sparkles size={16} className={isBoss ? "text-yellow-400" : "text-emerald-700"} />
                <span className={`text-sm font-bold ${isBoss ? "text-yellow-400" : "text-emerald-800"}`}>
                  +{isBoss ? 60 : 30} XP
                </span>
              </div>
            </div>

            {/* Message principal */}
            <div className={[
              "rounded-2xl border p-5 mb-6",
              isBoss
                ? "border-neutral-700 bg-neutral-800/50"
                : "border-emerald-200 bg-emerald-50/50",
            ].join(" ")}>
              <h2 className={[
                "text-lg font-bold mb-2",
                isBoss ? "text-white" : "text-emerald-900",
              ].join(" ")}>
                {isBoss ? "🎊 Monde validé !" : "🎯 Leçon complétée !"}
              </h2>
              <p className={[
                "text-sm leading-6",
                isBoss ? "text-neutral-300" : "text-emerald-800",
              ].join(" ")}>
                {isBoss
                  ? "Tu as prouvé ta maîtrise complète du monde. Le prochain monde t'attend !"
                  : "Excellent travail ! Tes révisions ont été automatiquement planifiées pour consolider tes connaissances."}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className={[
                "rounded-2xl border p-4",
                isBoss
                  ? "border-yellow-600/30 bg-yellow-600/10"
                  : "border-emerald-200 bg-emerald-50/50",
              ].join(" ")}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className={isBoss ? "text-yellow-400" : "text-emerald-600"} />
                  <span className={`text-xs font-bold ${isBoss ? "text-yellow-400" : "text-emerald-700"}`}>
                    PROGRESSION
                  </span>
                </div>
                <p className={`text-2xl font-bold ${isBoss ? "text-white" : "text-emerald-800"}`}>
                  +1
                </p>
                <p className={`text-xs ${isBoss ? "text-neutral-400" : "text-emerald-600"}`}>
                  {isBoss ? "Monde complété" : "Nœud terminé"}
                </p>
              </div>

              {!isBoss && (
                <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-700">RÉVISION</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-800">J+1</p>
                  <p className="text-xs text-blue-600">Planifiée</p>
                </div>
              )}

              {isBoss && (
                <div className="rounded-2xl border border-purple-600/30 bg-purple-600/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className="text-purple-400 fill-purple-400" />
                    <span className="text-xs font-bold text-purple-400">BADGE</span>
                  </div>
                  <p className="text-2xl font-bold text-white">🏆</p>
                  <p className="text-xs text-neutral-400">Débloqué</p>
                </div>
              )}
            </div>

            {/* Message de motivation */}
            {isBoss ? (
              <div className="rounded-2xl bg-gradient-to-r from-yellow-600/20 to-amber-600/20 border border-yellow-600/30 p-4 mb-6">
                <p className="text-sm text-center text-yellow-100 font-medium">
                  👑 Performance exceptionnelle ! Tu es prêt pour le suivant !
                </p>
              </div>
            ) : (
              <div className="rounded-2xl bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 p-4 mb-6">
                <p className="text-sm text-center text-emerald-800 font-medium">
                  ✨ Continue sur ta lancée, chaque leçon compte !
                </p>
              </div>
            )}

            {/* Bouton CTA */}
            <button
              onClick={applyAndGo}
              className={[
                "w-full rounded-2xl py-4 font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group",
                isBoss
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-neutral-900 shadow-yellow-600/30"
                  : "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-emerald-600/30",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isBoss ? (
                  <>
                    <Trophy size={20} />
                    Retour à la Map
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Continuer l'aventure
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Message d'encouragement */}
        <div className="mt-6 text-center">
          <p className={`text-sm ${isBoss ? "text-neutral-400" : "text-neutral-600"}`}>
            {isBoss 
              ? "Tu progresses vers la maîtrise totale 🌟"
              : "Chaque pas compte dans ton apprentissage 🌱"}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 4s ease-in-out infinite;
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
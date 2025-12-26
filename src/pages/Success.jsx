import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import BadgeUnlockModal from "../components/BadgeUnlockModal.jsx";
import { evaluateBadges } from "../lib/badgesEngine.js";

import {
  addXp,
  loadProgress,
  markActiveDay,
  saveProgress,
  completeNode,
  scheduleReviewsForLesson,
} from "../lib/progressStore.js";

import { CheckCircle2, Sparkles, TrendingUp, Award, ArrowRight, Brain, Star, Trophy, Zap } from "lucide-react";

export default function SuccessPage() {
  const [badgeOpen, setBadgeOpen] = useState(false);
  const [unlockedBadge, setUnlockedBadge] = useState(null);

  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);

  const [reward, setReward] = useState({ xp: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Animation confetti
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);

    // Récompense (MVP) : 30 XP leçon, 15 XP review, 60 XP boss
    const xp =
      lesson?.node?.type === "boss" ? 60 : lesson?.node?.type === "review" ? 15 : 30;

    let p = loadProgress();
    p = markActiveDay(p);
    p = addXp(p, xp);
    p = completeNode(p, lessonId);
    
    // On planifie des révisions seulement pour les "lesson" (pas pour boss/review)
    if (lesson?.node?.type === "lesson") {
      p = scheduleReviewsForLesson(p, lessonId);
    }

    const res = evaluateBadges(p);
    p = res.progress;

    if (res.newlyUnlocked.length > 0) {
      setUnlockedBadge(res.newlyUnlocked[0]);
      setBadgeOpen(true);
    }

    saveProgress(p);
    setReward({ xp });

    return () => clearTimeout(timer);
  }, [lessonId, lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-red-50/20 to-orange-50/20">
        <div className="mx-auto max-w-md px-5 pt-8">
          <div className="rounded-3xl border-2 border-red-200/50 bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="font-bold text-red-900">Résultat introuvable</p>
            </div>
            <p className="text-sm text-red-700">
              Cette page de résultat n'existe pas.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isBoss = lesson?.node?.type === "boss";
  const isReview = lesson?.node?.type === "review";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50/50 to-teal-50/50 pb-32 relative overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

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
              {['🎉', '✨', '⭐', '🌟', '💫', '🎊'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-md px-5 pt-12">
        {/* Card principale de succès */}
        <div className="rounded-3xl border-2 border-emerald-300/50 bg-white/95 backdrop-blur-sm p-8 shadow-2xl shadow-emerald-200/50 relative overflow-hidden animate-scaleIn">
          {/* Effet de lueur en arrière-plan */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/50 animate-shimmer-slow" />
          
          <div className="relative z-10">
            {/* Header avec animation */}
            <div className="flex flex-col items-center mb-6">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-600/50 mb-4 animate-bounce-slow">
                {isBoss ? (
                  <Trophy size={40} className="text-white" />
                ) : (
                  <CheckCircle2 size={40} className="text-white" />
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-emerald-900 mb-2 text-center">
                {isBoss ? "Boss vaincu !" : isReview ? "Révision réussie !" : "Bravo !"}
              </h1>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-3">
                <Star size={16} className="text-emerald-700 fill-emerald-700" />
                <span className="text-sm font-bold text-emerald-800">
                  {lesson.node.title}
                </span>
              </div>

              <p className="text-center text-sm text-neutral-600">
                {isBoss 
                  ? "Tu as prouvé ta maîtrise du monde entier !"
                  : isReview
                  ? "Ta mémoire se renforce !"
                  : "Tu progresses vers la maîtrise !"}
              </p>
            </div>

            {/* Card récompense XP */}
            <div className="relative rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 p-6 mb-6 overflow-hidden group">
              <div className="absolute top-0 right-0 text-8xl opacity-5">💰</div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 flex items-center gap-1">
                    <Award size={14} />
                    RÉCOMPENSE
                  </p>
                  <div className="flex items-baseline gap-2">
                    <Sparkles size={24} className="text-amber-600" />
                    <span className="text-4xl font-bold text-amber-700">+{reward.xp}</span>
                    <span className="text-xl font-bold text-amber-600">XP</span>
                  </div>
                </div>
                
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Zap size={32} className="text-amber-700" />
                </div>
              </div>
            </div>

            {/* Stats bonus */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-700">PROGRESSION</span>
                </div>
                <p className="text-2xl font-bold text-emerald-800">+1</p>
                <p className="text-xs text-emerald-600">Nœud complété</p>
              </div>

              {lesson?.node?.type === "lesson" && (
                <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-700">RÉVISIONS</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-800">J+1</p>
                  <p className="text-xs text-blue-600">Planifiée</p>
                </div>
              )}

              {isBoss && (
                <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={16} className="text-purple-600" />
                    <span className="text-xs font-bold text-purple-700">MAÎTRISE</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-800">100%</p>
                  <p className="text-xs text-purple-600">Monde validé</p>
                </div>
              )}
            </div>

            {/* Message de motivation */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 p-4 mb-6">
              <p className="text-sm text-center text-emerald-800 font-medium">
                {isBoss 
                  ? "🎊 Incroyable performance ! Continue comme ça !"
                  : "✨ Continue ta lancée, tu es sur la bonne voie !"}
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="space-y-3">
              <button
                onClick={() => navigate("/map", { replace: true })}
                className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 font-bold shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Continuer l'aventure
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {!isReview && (
                <button
                  onClick={() => navigate("/review")}
                  className="w-full rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 py-4 font-bold hover:bg-emerald-50 hover:border-emerald-300 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Brain size={20} />
                  Voir mes révisions
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Message d'encouragement en bas */}
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Chaque pas compte dans ton apprentissage 🌱
          </p>
        </div>
      </div>

      <BadgeUnlockModal
        open={badgeOpen}
        onOpenChange={setBadgeOpen}
        badge={unlockedBadge}
      />

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
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
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
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
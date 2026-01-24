import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";
import { loadProgress, resetProgress } from "../lib/progressStore.js";
import { BADGES } from "../data/badges.js";
import {
  Sparkles,
  Flame,
  Award,
  TrendingUp,
  Star,
  Zap,
  Trophy,
  Lock,
  LogIn,
  LogOut,
  AlertCircle,
  Trash2,
} from "lucide-react";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { flushRemoteProgressNow, queueRemoteProgress } from "../lib/progressSync.js";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, signOut, loading: authLoading } = useAuth();

  const [progress, setProgress] = useState(() => loadProgress());

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const unlockedSet = useMemo(
    () => new Set(progress.unlockedBadges || []),
    [progress]
  );
  const unlockedCount = unlockedSet.size;
  const badgeProgress = Math.round((unlockedCount / BADGES.length) * 100);

  async function handleLogout() {
    try {
      // ✅ push pending cloud (si connecté) avant logout
      await flushRemoteProgressNow();
    } catch (e) {
      // ignore
    }
    await signOut();
    navigate("/", { replace: true });
  }

  async function handleResetAll() {
    const ok1 = confirm(
      "⚠️ Réinitialiser TOUTES tes données ? (XP, streak, badges, progression, cartes, timeline…)\n\nCette action est irréversible."
    );
    if (!ok1) return;

    const ok2 = confirm("Dernière confirmation : tu es sûr à 100% ?");
    if (!ok2) return;

    try {
      // ✅ reset local
      resetProgress();

      // ✅ refresh state immédiatement
      const fresh = loadProgress();
      setProgress(fresh);

      // ✅ si connecté : tenter de pousser le reset au cloud
      if (user) {
        try {
          if (typeof queueRemoteProgress === "function") {
            queueRemoteProgress(fresh);
          }
          await flushRemoteProgressNow();
        } catch (e) {
          // Si jamais le cloud échoue, au moins le local est reset
          console.warn("Cloud reset failed (local reset ok):", e);
        }
      }

      // ✅ recharge propre
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert("❌ Une erreur est survenue pendant le reset.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20 pb-32">
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-5 pt-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Ton Profil
          </h1>

          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-sm text-neutral-600">
              Continue comme ça, champion ! 🏆
            </p>

            {/* ✅ Zone Auth (Login / Logout) */}
            {!authLoading && (
              <>
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-neutral-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-neutral-50 transition"
                  >
                    <LogOut size={16} />
                    Se déconnecter
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:shadow-md transition"
                  >
                    <LogIn size={16} />
                    Se connecter
                  </button>
                )}
              </>
            )}
          </div>

          {/* ✅ Email si connecté */}
          {user?.email ? (
            <p className="mt-2 text-xs text-neutral-500">
              Connecté : <span className="font-medium">{user.email}</span>
            </p>
          ) : (
            <p className="mt-2 text-xs text-neutral-500">
              Mode invité (progression locale)
            </p>
          )}
        </div>

        {/* Stats principales */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Streak Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 border border-orange-200/50 p-5 shadow-lg shadow-orange-200/30 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 mb-2">
                <Flame size={16} className="animate-pulse" />
                <span>Streak</span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-orange-600">
                  {progress.streak}
                </p>
                <span className="text-sm text-orange-600/70">jours</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-orange-600/80">
                <TrendingUp size={12} />
                <span>Continue !</span>
              </div>
            </div>
          </div>

          {/* XP Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/50 p-5 shadow-lg shadow-amber-200/30 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 mb-2">
                <Sparkles size={16} className="animate-pulse" />
                <span>XP Total</span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-amber-600">
                  {progress.xp}
                </p>
                <span className="text-sm text-amber-600/70">pts</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-amber-600/80">
                <Star size={12} className="fill-amber-600/80" />
                <span>Niveau {Math.floor((progress.xp || 0) / 100)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* XP Today Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-white to-neutral-50 border border-neutral-200/50 p-5 shadow-md shadow-neutral-200/30 mb-6 overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-1">
                <Zap size={18} className="text-blue-600" />
                <span>XP aujourd&apos;hui</span>
              </div>
              <p className="text-2xl font-bold text-neutral-900">
                {progress.xpToday}{" "}
                <span className="text-lg text-neutral-500">/ 50</span>
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Trophy size={28} className="text-blue-600" />
            </div>
          </div>

          <div className="mt-4 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{
                width: `${Math.min(((progress.xpToday || 0) / 50) * 100, 100)}%`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>

          <p className="mt-2 text-xs text-neutral-500 text-center">
            {progress.xpToday >= 50
              ? "🎉 Objectif quotidien atteint !"
              : `Plus que ${Math.max(50 - (progress.xpToday || 0), 0)} XP pour ton objectif`}
          </p>
        </div>

        {/* Section Badges */}
        <div className="rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/50 p-6 shadow-lg shadow-neutral-200/30">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-sm">
                <Award size={24} className="text-purple-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-neutral-900">Tes Badges</p>
                <p className="text-xs text-neutral-600">Collection de réussites</p>
              </div>
            </div>
          </div>

          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-purple-900">
                {unlockedCount}/{BADGES.length} débloqués
              </span>
              <span className="text-sm font-bold text-purple-700">
                {badgeProgress}%
              </span>
            </div>
            <div className="h-2.5 w-full bg-white/70 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                style={{ width: `${badgeProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {BADGES.map((b) => {
              const unlocked = unlockedSet.has(b.id);
              return (
                <div
                  key={b.id}
                  className={[
                    "relative rounded-2xl border p-4 transition-all duration-300 overflow-hidden group",
                    unlocked
                      ? "bg-gradient-to-br from-white to-neutral-50 border-neutral-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
                      : "bg-neutral-50 border-neutral-200/50 opacity-60",
                  ].join(" ")}
                >
                  {unlocked && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}

                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className={[
                        "h-16 w-16 rounded-2xl border-2 flex items-center justify-center text-3xl transition-all duration-300 relative",
                        unlocked
                          ? "bg-gradient-to-br from-white to-neutral-50 border-neutral-300 shadow-md group-hover:scale-110 group-hover:rotate-6"
                          : "bg-neutral-100 border-neutral-300/50",
                      ].join(" ")}
                    >
                      {unlocked ? (
                        <>
                          {b.icon}
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </>
                      ) : (
                        <Lock size={24} className="text-neutral-400" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p
                          className={`font-bold ${
                            unlocked ? "text-neutral-900" : "text-neutral-600"
                          }`}
                        >
                          {b.title}
                        </p>
                        {unlocked && (
                          <span className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 whitespace-nowrap">
                            <Star size={10} className="fill-emerald-700" />
                            Obtenu
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-neutral-600 mb-2 line-clamp-2">
                        {b.description}
                      </p>

                      {!unlocked && (
                        <div className="flex items-center gap-1.5 text-xs">
                          <div className="px-2 py-1 rounded-full bg-neutral-200 text-neutral-700 font-medium">
                            🎯 Objectif : {b.target}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ ZONE DANGER (visible pour tout le monde) */}
        <div className="mt-6 rounded-3xl border border-red-200/70 bg-gradient-to-br from-red-50 to-orange-50 p-5 shadow-lg shadow-red-200/30">
          <div className="flex items-start gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center">
              <AlertCircle size={20} className="text-red-700" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-red-900">Zone Danger</p>
              <p className="text-xs text-red-700 mt-1">
                Réinitialise <b>toutes</b> tes données (progression, XP, badges, cartes, timeline…)
                {user ? " — y compris la sauvegarde cloud (si active)." : " — en local (mode invité)."}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAll}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white py-3.5 font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Trash2 size={18} />
            Reset toutes les données
          </button>
        </div>

        {/* DEV ONLY (optionnel : tu peux le supprimer si tu veux) */}
        {import.meta.env.DEV && (
          <div className="mt-6 rounded-3xl border-2 border-red-300/50 bg-gradient-to-br from-red-50 to-orange-50 p-5 shadow-lg">
            <div className="flex items-start gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center">
                <span className="text-xl">⚠️</span>
              </div>
              <div>
                <p className="text-sm font-bold text-red-800">Mode Développeur</p>
                <p className="text-xs text-red-600 mt-1">
                  Réinitialise toute ta progression locale
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (
                  confirm(
                    "⚠️ Réinitialiser toute la progression ? Cette action est irréversible !"
                  )
                ) {
                  resetProgress();
                  window.location.reload();
                }
              }}
              className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white py-3.5 font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              🔄 Reset Progression (DEV)
            </button>
          </div>
        )}
      </div>

      <BottomNav />

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .delay-1000 { animation-delay: 1s; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

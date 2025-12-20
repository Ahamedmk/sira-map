import React, { useEffect, useMemo, useState } from "react";
import BottomNav from "../components/BottomNav.jsx";
import { loadProgress } from "../lib/progressStore.js";
import { BADGES } from "../data/badges.js";
import { Sparkles, Flame } from "lucide-react";
import { resetProgress } from "../lib/progressStore.js";

export default function ProfilePage() {
  const [progress, setProgress] = useState(() => loadProgress());

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const unlockedSet = useMemo(() => new Set(progress.unlockedBadges || []), [progress]);

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="mx-auto max-w-md px-4 pt-6">
        <h1 className="text-xl font-semibold">Profil</h1>
        <p className="text-sm text-neutral-600">Ta progression et tes récompenses.</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border bg-white p-4">
            <div className="inline-flex items-center gap-2 text-sm text-neutral-600">
              <Flame size={16} /> Streak
            </div>
            <p className="mt-1 text-3xl font-semibold">🔥 {progress.streak}</p>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <div className="inline-flex items-center gap-2 text-sm text-neutral-600">
              <Sparkles size={16} /> XP total
            </div>
            <p className="mt-1 text-3xl font-semibold">{progress.xp}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border bg-white p-4">
          <p className="font-semibold">Badges</p>
          <p className="text-sm text-neutral-600 mt-1">
            {unlockedSet.size}/{BADGES.length} débloqués
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {BADGES.map((b) => {
              const unlocked = unlockedSet.has(b.id);
              return (
                <div
                  key={b.id}
                  className={[
                    "rounded-2xl border p-4 transition",
                    unlocked ? "bg-white" : "bg-neutral-50 opacity-70",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={[
                        "h-12 w-12 rounded-2xl border flex items-center justify-center text-2xl",
                        unlocked ? "bg-white" : "bg-neutral-100",
                      ].join(" ")}
                    >
                      {b.icon}
                    </div>

                    <div>
                      <p className="text-sm font-semibold">{b.title}</p>
                      <p className="text-xs text-neutral-600 mt-1">{b.description}</p>
                      <p className="text-[11px] text-neutral-500 mt-2">
                        {unlocked ? "✅ Débloqué" : `Objectif : ${b.target}`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     {/* DEV ONLY */}
{import.meta.env.DEV && (
  <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4">
    <p className="text-sm font-semibold text-red-700">
      Mode développeur
    </p>
    <p className="text-xs text-red-600 mt-1">
      Réinitialise toute la progression (local).
    </p>

    <button
      onClick={() => {
        if (confirm("Réinitialiser toute la progression ?")) {
          resetProgress();
          window.location.reload();
        }
      }}
      className="mt-3 w-full rounded-xl bg-red-600 text-black py-2.5 font-medium"
    >
      Reset progression
    </button>
  </div>
)}

      <BottomNav />
    </div>
  );
}

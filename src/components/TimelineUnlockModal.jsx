// src/components/TimelineUnlockModal.jsx
import React from "react";
import { Sparkles, Calendar, ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function TimelineUnlockModal({
  open,
  unlockedEvents = [],
  focusId = null,
  onClose,
  onGoTimeline,
}) {
  if (!open) return null;

  const count = unlockedEvents.length;

  return (
    <div className="fixed inset-0 z-50 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Fermer"
      />

      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-7 shadow-2xl border-2 border-amber-200 animate-scaleIn">
        {/* Confetti background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-0 right-0 text-6xl opacity-10 animate-pulse">✨</div>
          <div className="absolute bottom-0 left-0 text-5xl opacity-10 animate-pulse delay-300">🎉</div>
        </div>

        <div className="relative z-10">
          {/* Header avec icône */}
          <div className="flex items-center justify-center mb-5">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/30 animate-bounce-slow">
              <Calendar size={32} className="text-white" />
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-xs font-bold text-amber-900 shadow-md mb-3">
              <Sparkles size={14} />
              Timeline
            </div>

            <h2 className="text-2xl font-extrabold text-neutral-900 mb-3">
              Nouveaux événements débloqués
            </h2>

            <p className="text-base text-neutral-700">
              Tu viens de débloquer{" "}
              <span className="inline-flex items-center gap-1 font-bold text-amber-700">
                <Star size={16} className="fill-amber-700" />
                {count}
              </span>{" "}
              {count > 1 ? "événements" : "événement"} dans la timeline. 🎊
            </p>
          </div>

          {/* Liste des événements */}
          {count > 0 && (
            <div className="mb-6 max-h-56 overflow-auto rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-4 shadow-inner">
              <ul className="space-y-3">
                {unlockedEvents.slice(0, 6).map((e) => (
                  <li key={e.id} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-amber-900">{e.title}</span>
                  </li>
                ))}
                {unlockedEvents.length > 6 && (
                  <li className="flex items-center gap-2 text-sm text-amber-700">
                    <Sparkles size={14} />
                    <span className="font-semibold">
                      … +{unlockedEvents.length - 6} autres événements
                    </span>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Message d'encouragement */}
          <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-4">
            <p className="text-sm text-center text-emerald-800 font-medium">
              ✨ Découvre les moments clés de la Sîra au fur et à mesure de ta progression
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-2xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-sm font-bold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] transition-all duration-200"
            >
              Plus tard
            </button>

            <button
              onClick={onGoTimeline}
              className="flex-1 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-3.5 text-sm font-bold text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group shadow-lg shadow-amber-600/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Voir la timeline
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Debug info (optionnel) */}
          {focusId && (
            <div className="mt-4 text-center text-xs text-neutral-400 font-mono">
              Focus : {focusId}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
          to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
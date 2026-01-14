// src/components/TimelineUnlockModal.jsx
import React from "react";

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
    <div className="fixed inset-0 z-50">
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
        aria-label="Fermer"
      />

      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-5 shadow-2xl dark:bg-slate-950">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Timeline
        </div>

        <div className="mt-1 text-xl font-extrabold text-slate-900 dark:text-slate-100">
          Nouveaux événements débloqués
        </div>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Tu viens de débloquer{" "}
          <span className="font-semibold">{count}</span>{" "}
          {count > 1 ? "événements" : "événement"} dans la timeline.
        </p>

        {count > 0 && (
          <div className="mt-4 max-h-44 overflow-auto rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-900">
            <ul className="space-y-2">
              {unlockedEvents.slice(0, 6).map((e) => (
                <li key={e.id} className="text-slate-700 dark:text-slate-200">
                  • {e.title}
                </li>
              ))}
              {unlockedEvents.length > 6 && (
                <li className="text-slate-500 dark:text-slate-400">
                  … +{unlockedEvents.length - 6} autres
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="mt-4 flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Plus tard
          </button>

          <button
            onClick={onGoTimeline}
            className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Voir la timeline →
          </button>
        </div>

        {/* debug optionnel */}
        {focusId && (
          <div className="mt-3 text-[11px] text-slate-400">
            Focus : {focusId}
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function TimelineUnlockModal({
  open,
  onClose,
  unlockedEvents = [],
  focusId,
}) {
  const navigate = useNavigate();
  if (!open) return null;

  const has = unlockedEvents.length > 0;

  function goTimeline() {
    const url = focusId
      ? `/timeline?focus=${encodeURIComponent(focusId)}`
      : "/timeline";
    navigate(url);
    onClose?.();
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Fermer"
      />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-md rounded-t-3xl bg-white p-5 shadow-2xl dark:bg-neutral-950">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                Monde terminé
              </div>
              <h2 className="mt-1 text-xl font-bold text-neutral-900 dark:text-white">
                Nouvelles étapes révélées
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              Fermer
            </button>
          </div>

          <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            {has ? (
              <div className="space-y-3">
                {unlockedEvents.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-xl bg-white p-3 dark:bg-neutral-950"
                  >
                    <div className="text-xs text-neutral-500">{e.dateLabel}</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {e.title}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Aucun nouvel événement cette fois. Le prochain arrive bientôt.
              </div>
            )}
          </div>

          <div className="mt-5 flex gap-2">
            <button
              onClick={goTimeline}
              className="flex-1 rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-bold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              Voir sur le Chemin
            </button>
            <button
              onClick={onClose}
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800"
            >
              Continuer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

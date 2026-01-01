import React, { useEffect, useMemo } from "react";

function ConfettiBurst() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10%] left-1/2 h-2 w-2 rounded-sm opacity-80 animate-confetti"
          style={{
            transform: `translateX(${(Math.random() - 0.5) * 420}px)`,
            animationDelay: `${Math.random() * 0.35}s`,
            animationDuration: `${0.9 + Math.random() * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

function pickImageUnlocked(card) {
  if (!card) return null;

  // cas "art" jsonb ou objet JS
  const art = card.art || card?.meta?.art;
  if (art?.imageUnlocked) return art.imageUnlocked;
  if (art?.image_unlocked) return art.image_unlocked;

  // cas colonnes supabase (si tu stockes direct)
  if (card.image_unlocked) return card.image_unlocked;
  if (card.imageUnlocked) return card.imageUnlocked;

  return null;
}

export default function CardUnlockModal({ open, card, onClose }) {
  useEffect(() => {
    if (!open) return;
    // auto-close optionnel
    // const t = setTimeout(() => onClose?.(), 2200);
    // return () => clearTimeout(t);
  }, [open, onClose]);

  const title = useMemo(() => {
    if (!card) return "";
    return card.name_fr || card.nameFr || card.title || card.slug || "Carte débloquée";
  }, [card]);

  const laqab = useMemo(() => {
    if (!card) return "";
    return card.laqab || card.subtitle || "";
  }, [card]);

  const rarity = useMemo(() => {
    if (!card) return "";
    return (card.rarity || "common").toUpperCase();
  }, [card]);

  const hook = useMemo(() => {
    if (!card) return "";
    return card.short_hook || card.shortHook || "";
  }, [card]);

  const imageUnlocked = useMemo(() => pickImageUnlocked(card), [card]);

  if (!open || !card) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-show"
        onClick={onClose}
      />

      <div className="relative w-[92%] max-w-md rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-2xl overflow-hidden animate-pop">
        <ConfettiBurst />

        <div className="relative p-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide">
            🎴 CARTE DÉBLOQUÉE
          </div>

          <h2 className="mt-3 text-xl font-extrabold leading-tight">{title}</h2>
          {laqab ? (
            <p className="mt-1 text-sm text-white/70">{laqab}</p>
          ) : null}

          {/* carte */}
          <div className="mt-5 flex justify-center">
            <div className="relative h-[260px] w-[190px] rounded-2xl border border-white/15 bg-white/5 overflow-hidden shadow-xl animate-cardFlip">
              {imageUnlocked ? (
                <img
                  src={imageUnlocked}
                  alt={title}
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-white/60 text-sm">
                  Image manquante
                </div>
              )}

              {/* badge rarity */}
              <div className="absolute top-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold uppercase">
                {rarity}
              </div>
            </div>
          </div>

          {hook ? (
            <p className="mt-5 text-sm text-white/80">{hook}</p>
          ) : null}

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-2xl bg-white text-neutral-950 font-extrabold py-3 hover:opacity-90 active:scale-[0.99] transition"
          >
            Continuer
          </button>
        </div>

        {/* Animations CSS */}
        <style>{`
          .backdrop-show { animation: fadeIn 180ms ease-out; }
          .animate-pop { animation: popIn 220ms ease-out; }
          .animate-cardFlip { animation: cardFlip 550ms ease-out; }
          .animate-confetti {
            background: white;
            animation-name: confettiFall;
            animation-timing-function: ease-in;
            animation-fill-mode: both;
          }
          .animate-confetti:nth-child(3n) { background: #facc15; }
          .animate-confetti:nth-child(3n+1) { background: #22c55e; }
          .animate-confetti:nth-child(3n+2) { background: #60a5fa; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes popIn {
            from { transform: scale(.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes cardFlip {
            0% { transform: rotateY(70deg) scale(.98); opacity: 0; }
            60% { transform: rotateY(0deg) scale(1.02); opacity: 1; }
            100% { transform: rotateY(0deg) scale(1); }
          }
          @keyframes confettiFall {
            0% { top: -10%; opacity: 0; transform: rotate(0deg); }
            10% { opacity: 1; }
            100% { top: 110%; opacity: 0; transform: rotate(280deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

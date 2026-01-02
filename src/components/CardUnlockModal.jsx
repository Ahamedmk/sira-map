import React, { useEffect, useMemo } from "react";
import { Sparkles, Star, Trophy, Crown } from "lucide-react";

function ConfettiBurst() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => {
        const shapes = ['🎉', '✨', '⭐', '💫', '🌟', '🎊'];
        const shape = shapes[i % shapes.length];
        return (
          <span
            key={i}
            className="absolute top-[-10%] left-1/2 text-2xl opacity-90 animate-confetti"
            style={{
              transform: `translateX(${(Math.random() - 0.5) * 500}px)`,
              animationDelay: `${Math.random() * 0.4}s`,
              animationDuration: `${1.2 + Math.random() * 1}s`,
            }}
          >
            {shape}
          </span>
        );
      })}
    </div>
  );
}

function RarityBadge({ rarity }) {
  const rarityMeta = {
    common: { label: "Commune", icon: "⭐", gradient: "from-emerald-400 to-emerald-600", glow: "bg-emerald-400/20" },
    rare: { label: "Rare", icon: "💎", gradient: "from-blue-400 to-blue-600", glow: "bg-blue-400/20" },
    epic: { label: "Épique", icon: "✨", gradient: "from-fuchsia-400 to-fuchsia-600", glow: "bg-fuchsia-400/20" },
    legacy: { label: "Héritage", icon: "👑", gradient: "from-amber-400 to-amber-600", glow: "bg-amber-400/20" },
  };

  const meta = rarityMeta[rarity?.toLowerCase()] || rarityMeta.common;

  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${meta.gradient} px-4 py-2 text-white font-bold text-sm shadow-lg animate-pulse-slow`}>
      <span className="text-lg">{meta.icon}</span>
      {meta.label}
    </div>
  );
}

function pickImageUnlocked(card) {
  if (!card) return null;
  const art = card.art || card?.meta?.art;
  if (art?.imageUnlocked) return art.imageUnlocked;
  if (art?.image_unlocked) return art.image_unlocked;
  if (card.image_unlocked) return card.image_unlocked;
  if (card.imageUnlocked) return card.imageUnlocked;
  return null;
}

export default function CardUnlockModal({ open, card, onClose }) {
  useEffect(() => {
    if (!open) return;
    // Auto-close optionnel après 3s
    // const t = setTimeout(() => onClose?.(), 3000);
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
    if (!card) return "common";
    return (card.rarity || "common").toLowerCase();
  }, [card]);

  const hook = useMemo(() => {
    if (!card) return "";
    return card.short_hook || card.shortHook || "";
  }, [card]);

  const imageUnlocked = useMemo(() => pickImageUnlocked(card), [card]);

  if (!open || !card) return null;

  const rarityMeta = {
    common: { gradient: "from-emerald-400 to-emerald-600", glow: "shadow-emerald-500/50" },
    rare: { gradient: "from-blue-400 to-blue-600", glow: "shadow-blue-500/50" },
    epic: { gradient: "from-fuchsia-400 to-fuchsia-600", glow: "shadow-fuchsia-500/50" },
    legacy: { gradient: "from-amber-400 to-amber-600", glow: "shadow-amber-500/50" },
  };

  const meta = rarityMeta[rarity] || rarityMeta.common;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-5 animate-fadeIn">
      {/* Overlay avec blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-md rounded-3xl border-2 border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white shadow-2xl overflow-hidden animate-popIn">
        {/* Confetti */}
        <ConfettiBurst />

        {/* Glow effect en arrière-plan */}
        <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-5 animate-pulse-slow`} />

        <div className="relative z-10 p-8">
          {/* Header avec badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/20 mb-4 animate-bounce-slow">
              <Trophy size={32} className="text-white" />
            </div>
            
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-wide border border-white/20 mb-4">
              <Star size={14} className="text-white fill-white" />
              NOUVELLE CARTE DÉBLOQUÉE
              <Star size={14} className="text-white fill-white" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              {title}
            </h2>
            
            {laqab && (
              <p className="text-sm text-white/70 italic mb-3">
                {laqab}
              </p>
            )}

            <RarityBadge rarity={rarity} />
          </div>

          {/* Carte visuelle avec effet 3D */}
          <div className="flex justify-center mb-6">
            <div className={`relative group animate-cardFlip ${meta.glow}`}>
              {/* Glow ring autour de la carte */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${meta.gradient} rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500`} />
              
              <div className="relative h-[280px] w-[200px] rounded-2xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden shadow-2xl">
                {imageUnlocked ? (
                  <img
                    src={imageUnlocked}
                    alt={title}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center text-white/40">
                    <Sparkles size={48} className="mb-3 opacity-50" />
                    <span className="text-sm font-medium">Image à venir</span>
                  </div>
                )}

                {/* Overlay gradient au bas */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badge rareté sur la carte */}
                <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase border border-white/20">
                  {rarity}
                </div>

                {/* Effet de brillance qui traverse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>

          {/* Description */}
          {hook && (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles size={18} className="text-white/60 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 leading-relaxed">
                  {hook}
                </p>
              </div>
            </div>
          )}

          {/* Bouton CTA */}
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-gradient-to-r from-white to-white/95 text-neutral-900 font-extrabold py-4 shadow-xl shadow-white/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Crown size={20} />
              Continuer l'aventure
            </span>
          </button>

          {/* Message d'encouragement */}
          <p className="mt-4 text-center text-xs text-white/50">
            ✨ Carte ajoutée à ta collection
          </p>
        </div>

        {/* Animations CSS */}
        <style>{`
          .animate-fadeIn {
            animation: fadeIn 300ms ease-out;
          }
          .animate-popIn {
            animation: popIn 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .animate-cardFlip {
            animation: cardFlip 700ms ease-out;
          }
          .animate-confetti {
            animation: confettiFall linear forwards;
          }
          .animate-bounce-slow {
            animation: bounceSlow 2s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulseSlow 3s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            60% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); }
          }
          
          @keyframes cardFlip {
            0% { 
              transform: perspective(1000px) rotateY(90deg) scale(0.9);
              opacity: 0;
            }
            50% { 
              transform: perspective(1000px) rotateY(-10deg) scale(1.02);
            }
            100% { 
              transform: perspective(1000px) rotateY(0deg) scale(1);
              opacity: 1;
            }
          }
          
          @keyframes confettiFall {
            0% { 
              top: -10%; 
              opacity: 0; 
              transform: translateX(var(--tx, 0)) rotate(0deg) scale(1);
            }
            10% { opacity: 1; }
            100% { 
              top: 110%; 
              opacity: 0; 
              transform: translateX(var(--tx, 0)) rotate(360deg) scale(0.5);
            }
          }
          
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}</style>
      </div>
    </div>
  );
}
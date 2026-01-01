import React, { useEffect, useMemo, useState } from "react";
import {
  Lock,
  Sparkles,
  Trophy,
  Star,
  Search,
  Filter,
  X,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";

import { CINEMATICS } from "../data/cinematics.mock.js";
import { CARDS } from "../data/cards_mock.js";
import BottomNav from "../components/BottomNav.jsx";

// 🔥 Supabase: récupère les slugs débloqués depuis public.user_cards
import { getUnlockedSlugs } from "../lib/cardsProgress.js";

/* =========================
   UI Meta
========================= */

const RARITY_META = {
  common: {
    label: "Commune",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    gradient: "from-emerald-400 to-emerald-600",
    icon: "⭐",
  },
  rare: {
    label: "Rare",
    pill: "bg-blue-100 text-blue-700 border-blue-200",
    gradient: "from-blue-400 to-blue-600",
    icon: "💎",
  },
  epic: {
    label: "Épique",
    pill: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    gradient: "from-fuchsia-400 to-fuchsia-600",
    icon: "✨",
  },
  legacy: {
    label: "Héritage",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    gradient: "from-amber-400 to-amber-600",
    icon: "👑",
  },
};

const CATEGORY_LABEL = {
  companion: { label: "Compagnon", icon: "🤝" },
  family: { label: "Famille", icon: "👨‍👩‍👧" },
  figure: { label: "Figure", icon: "🌟" },
  scholar: { label: "Savant", icon: "📚" },
};

function getWorldLabel(worldKey) {
  const w = CINEMATICS?.[worldKey];
  return w?.slides?.[0]?.title || worldKey;
}

function CardArt({ card, unlocked }) {
  const rarity = RARITY_META[card.rarity] ?? RARITY_META.common;
  const category = CATEGORY_LABEL[card.category] ?? { label: card.category, icon: "📍" };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 group ${
        unlocked
          ? "border-neutral-200 bg-white hover:border-amber-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          : "border-neutral-200 bg-neutral-50 opacity-70 cursor-not-allowed"
      }`}
    >
      {unlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}

      <div className="absolute left-3 top-3 z-10">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold border-2 shadow-sm ${rarity.pill}`}
        >
          <span>{rarity.icon}</span>
          {rarity.label}
        </span>
      </div>

      <div className="h-44 w-full relative overflow-hidden">
        {unlocked ? (
          <div className={`h-full w-full bg-gradient-to-br ${rarity.gradient} relative`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-90">{category.icon}</div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full bg-neutral-200 flex items-center justify-center">
            <div className="h-20 w-20 rounded-3xl bg-neutral-300 flex items-center justify-center">
              <Lock size={32} className="text-neutral-500" />
            </div>
          </div>
        )}
      </div>

      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-sm">
            <Lock size={18} className="text-white" />
            <span className="text-sm font-bold text-white">Verrouillée</span>
          </div>
        </div>
      )}

      <div className="relative z-10 p-5 bg-white">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="text-base font-bold text-neutral-900 truncate">
              {unlocked ? card.name_fr : "???"}
            </div>
            <div className="mt-1 text-sm text-neutral-600 truncate">
              {unlocked ? card.name_ar : "———"}
            </div>
          </div>
          <div className="text-2xl flex-shrink-0">{category.icon}</div>
        </div>

        <div className="text-xs text-neutral-600 line-clamp-2 mb-3 min-h-[32px]">
          {unlocked ? card.short_hook : `Indice : ${getWorldLabel(card.worldKey)}`}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Trophy size={12} />
            <span className="font-medium">{getWorldLabel(card.worldKey)}</span>
          </div>
          {unlocked && (
            <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Star size={12} className="fill-emerald-600" />
              Débloquée
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value }) {
  const pct = Math.max(0, Math.min(100, Math.round(value * 100)));
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100 shadow-inner relative">
      <div
        className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 transition-all duration-700 relative overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 animate-fadeIn">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-2xl rounded-t-3xl bg-white p-6 shadow-2xl md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rounded-3xl border-t-4 border-amber-400 animate-slideUp">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="text-xl font-bold text-neutral-900">{title}</div>
          <button onClick={onClose} className="rounded-2xl p-2 text-neutral-700 hover:bg-neutral-100">
            <X size={24} />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

function UnlockHint({ card }) {
  const u = card.unlock || {};
  const type = u.type;

  if (type === "finish_world") {
    return (
      <span>
        Termine le monde <span className="font-semibold">{getWorldLabel(u.value?.worldKey)}</span> pour la débloquer.
      </span>
    );
  }
  if (type === "quiz_score") {
    const min = u.value?.minScore ?? 80;
    return (
      <span>
        Réussis le quiz du monde <span className="font-semibold">{getWorldLabel(u.value?.worldKey)}</span> avec ≥{" "}
        <span className="font-semibold">{min}%</span>.
      </span>
    );
  }
  if (type === "streak") {
    const days = u.value?.minDays ?? 7;
    return (
      <span>
        Tiens une série de <span className="font-semibold">{days} jours</span> pour la débloquer.
      </span>
    );
  }
  if (type === "quiz_perfect_plus") {
    return (
      <span>
        Fais un <span className="font-semibold">score parfait</span> sur le quiz du monde{" "}
        <span className="font-semibold">{getWorldLabel(u.value?.worldKey)}</span>.
      </span>
    );
  }
  if (type === "streak_plus_completion") {
    const days = u.value?.minDays ?? 30;
    return (
      <span>
        Tiens une série de <span className="font-semibold">{days} jours</span> et termine ce monde pour la débloquer.
      </span>
    );
  }

  return <span>Continue à avancer : cette carte se débloque plus tard.</span>;
}

export default function CollectionPage() {
  // ✅ unlockedSlugs vient de Supabase (public.user_cards)
  const [unlockedSlugs, setUnlockedSlugs] = useState(() => new Set());
  const [loadingUnlocks, setLoadingUnlocks] = useState(true);
  const [errorUnlocks, setErrorUnlocks] = useState(null);

  // Filtres UI
  const [q, setQ] = useState("");
  const [worldKey, setWorldKey] = useState("all");
  const [rarity, setRarity] = useState("all");
  const [category, setCategory] = useState("all");
  const [onlyUnlocked, setOnlyUnlocked] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(null);

  // ✅ Charge les déblocages à l’ouverture de la page
  useEffect(() => {
    let alive = true;

    async function loadUnlocks() {
      try {
        setLoadingUnlocks(true);
        setErrorUnlocks(null);
        const set = await getUnlockedSlugs(); // => Set(slug)
        if (!alive) return;
        setUnlockedSlugs(set || new Set());
      } catch (e) {
        console.error("getUnlockedSlugs failed:", e);
        if (!alive) return;
        setUnlockedSlugs(new Set());
        setErrorUnlocks("Impossible de charger tes cartes. Vérifie ta connexion / RLS.");
      } finally {
        if (!alive) return;
        setLoadingUnlocks(false);
      }
    }

    loadUnlocks();
    return () => {
      alive = false;
    };
  }, []);

  // ✅ Option: bouton “Rafraîchir”
  async function refreshUnlocks() {
    try {
      setLoadingUnlocks(true);
      setErrorUnlocks(null);
      const set = await getUnlockedSlugs();
      setUnlockedSlugs(set || new Set());
    } catch (e) {
      console.error("refreshUnlocks failed:", e);
      setErrorUnlocks("Impossible de rafraîchir. Réessaie.");
    } finally {
      setLoadingUnlocks(false);
    }
  }

  const worlds = useMemo(
    () => Object.keys(CINEMATICS || {}).map((k) => ({ key: k, label: getWorldLabel(k) })),
    []
  );

  const cards = useMemo(() => {
    const query = q.trim().toLowerCase();

    return (CARDS || [])
      .map((c) => ({ ...c, isUnlocked: unlockedSlugs.has(c.slug) }))
      .filter((c) => {
        if (onlyUnlocked && !c.isUnlocked) return false;
        if (worldKey !== "all" && c.worldKey !== worldKey) return false;
        if (rarity !== "all" && c.rarity !== rarity) return false;
        if (category !== "all" && c.category !== category) return false;
        if (!query) return true;

        const hay = [c.slug, c.name_fr, c.name_ar, c.laqab, c.short_hook, c.bio_short, c.worldKey]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return hay.includes(query);
      });
  }, [q, worldKey, rarity, category, onlyUnlocked, unlockedSlugs]);

  const totals = useMemo(() => {
    const all = (CARDS || []).length;
    const unlocked = (CARDS || []).filter((c) => unlockedSlugs.has(c.slug)).length;

    const byWorld = {};
    for (const c of CARDS || []) {
      const key = c.worldKey;
      if (!byWorld[key]) byWorld[key] = { total: 0, unlocked: 0 };
      byWorld[key].total += 1;
      if (unlockedSlugs.has(c.slug)) byWorld[key].unlocked += 1;
    }

    return { all, unlocked, byWorld };
  }, [unlockedSlugs]);

  const selectedCard = useMemo(() => {
    if (!selectedSlug) return null;
    return (CARDS || []).find((c) => c.slug === selectedSlug) || null;
  }, [selectedSlug]);

  const selectedUnlocked = selectedCard ? unlockedSlugs.has(selectedCard.slug) : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-amber-50/20 to-orange-50/20 pb-32">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-sm font-bold text-amber-900 shadow-lg mb-3">
              <Trophy size={18} />
              Collection
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-2">Mes Cartes</h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <Sparkles size={16} className="text-amber-600" />
              <span>
                Débloquées :{" "}
                <span className="font-bold text-neutral-900">
                  {totals.unlocked}/{totals.all}
                </span>
              </span>

              <button
                onClick={refreshUnlocks}
                disabled={loadingUnlocks}
                className={`rounded-full border-2 px-3 py-1.5 text-xs font-bold transition ${
                  loadingUnlocks
                    ? "border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed"
                    : "border-amber-300 bg-white text-amber-800 hover:bg-amber-50"
                }`}
              >
                {loadingUnlocks ? "Chargement…" : "Rafraîchir"}
              </button>
            </div>

            {errorUnlocks && (
              <div className="mt-3 rounded-2xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorUnlocks}
              </div>
            )}
          </div>

          <div className="w-full max-w-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-neutral-600">Progression</span>
              <span className="text-xs font-bold text-amber-700">
                {totals.unlocked}/{totals.all}
              </span>
            </div>
            <ProgressBar value={totals.all ? totals.unlocked / totals.all : 0} />
          </div>
        </div>

        {/* Progression par monde */}
        <div className="rounded-3xl border-2 border-amber-200 bg-white/90 p-6 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <TrendingUp size={20} className="text-white" />
            </div>
            <h2 className="text-lg font-bold text-neutral-900">Par monde</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {worlds.map((w) => {
              const stats = totals.byWorld[w.key] || { total: 0, unlocked: 0 };
              const value = stats.total ? stats.unlocked / stats.total : 0;
              return (
                <button
                  key={w.key}
                  onClick={() => setWorldKey(w.key)}
                  className={`rounded-2xl border-2 p-4 text-left transition-all ${
                    worldKey === w.key
                      ? "border-amber-300 bg-amber-50"
                      : "border-neutral-200 bg-white hover:border-amber-200"
                  }`}
                >
                  <div className="flex justify-between mb-3">
                    <div className="text-sm font-bold text-neutral-900 line-clamp-2">{w.label}</div>
                    <div className="text-sm font-bold text-amber-700">
                      {stats.unlocked}/{stats.total}
                    </div>
                  </div>
                  <ProgressBar value={value} />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setWorldKey("all")}
            className={`rounded-2xl border-2 px-4 py-2.5 text-sm font-bold ${
              worldKey === "all"
                ? "border-amber-300 bg-amber-100 text-amber-900"
                : "border-neutral-200 bg-white text-neutral-700"
            }`}
          >
            Tous
          </button>
        </div>

        {/* Filtres */}
        <div className="rounded-3xl border-2 border-neutral-200 bg-white/90 p-5 shadow-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} />
            <h3 className="font-bold">Filtres</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <label className="text-xs font-bold mb-2 block">Recherche</label>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Nom…"
                  className="w-full rounded-2xl border-2 border-neutral-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-amber-300"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="text-xs font-bold mb-2 block">Monde</label>
              <select
                value={worldKey}
                onChange={(e) => setWorldKey(e.target.value)}
                className="w-full rounded-2xl border-2 border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-amber-300"
              >
                <option value="all">Tous</option>
                {worlds.map((w) => (
                  <option key={w.key} value={w.key}>
                    {w.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold mb-2 block">Rareté</label>
              <select
                value={rarity}
                onChange={(e) => setRarity(e.target.value)}
                className="w-full rounded-2xl border-2 border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-amber-300"
              >
                <option value="all">Toutes</option>
                <option value="common">⭐ Commune</option>
                <option value="rare">💎 Rare</option>
                <option value="epic">✨ Épique</option>
                <option value="legacy">👑 Héritage</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold mb-2 block">Catégorie</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-2xl border-2 border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-amber-300"
              >
                <option value="all">Toutes</option>
                <option value="companion">🤝 Compagnon</option>
                <option value="family">👨‍👩‍👧 Famille</option>
                <option value="figure">🌟 Figure</option>
                <option value="scholar">📚 Savant</option>
              </select>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t flex justify-between">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyUnlocked}
                onChange={(e) => setOnlyUnlocked(e.target.checked)}
                className="h-5 w-5 rounded"
              />
              Débloquées uniquement
            </label>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-amber-600" />
              <span>
                Résultats : <span className="font-bold">{cards.length}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        {loadingUnlocks ? (
          <div className="rounded-3xl border-2 border-neutral-200 bg-white p-8 text-center">
            <div className="text-sm font-bold text-neutral-700">Chargement de ta collection…</div>
            <div className="mt-2 text-xs text-neutral-500">On récupère tes cartes débloquées.</div>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((card) => (
              <button
                key={card.slug}
                onClick={() => setSelectedSlug(card.slug)}
                className="text-left"
              >
                <CardArt card={card} unlocked={card.isUnlocked} />
              </button>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loadingUnlocks && cards.length === 0 && (
          <div className="mt-10 rounded-3xl border-2 bg-white p-10 text-center">
            <Search size={32} className="mx-auto mb-4 text-neutral-400" />
            <h3 className="text-xl font-bold mb-2">Aucune carte</h3>
            <button
              onClick={() => {
                setWorldKey("all");
                setRarity("all");
                setCategory("all");
                setOnlyUnlocked(false);
                setQ("");
              }}
              className="mt-4 rounded-2xl bg-amber-600 px-6 py-3 text-sm font-bold text-white"
            >
              Réinitialiser
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        open={!!selectedCard}
        onClose={() => setSelectedSlug(null)}
        title={selectedCard ? (selectedUnlocked ? selectedCard.name_fr : "Carte verrouillée 🔒") : ""}
      >
        {selectedCard && (
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5">
              <div className="flex gap-2 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold border-2 ${
                    (RARITY_META[selectedCard.rarity] || RARITY_META.common).pill
                  }`}
                >
                  {(RARITY_META[selectedCard.rarity] || RARITY_META.common).icon}
                  {(RARITY_META[selectedCard.rarity] || RARITY_META.common).label}
                </span>
              </div>
              <div className="text-lg font-bold mb-2">{selectedUnlocked ? selectedCard.name_ar : "———"}</div>
              <div className="text-sm">
                {selectedUnlocked ? selectedCard.bio_short : `🔒 Indice : ${getWorldLabel(selectedCard.worldKey)}`}
              </div>
            </div>

            <div className="rounded-2xl border-2 bg-white p-5">
              <div className="flex items-center gap-2 mb-3">
                {selectedUnlocked ? (
                  <>
                    <Sparkles size={18} className="text-amber-600" />
                    <h4 className="font-bold">Anecdote</h4>
                  </>
                ) : (
                  <>
                    <Lock size={18} />
                    <h4 className="font-bold">Déblocage</h4>
                  </>
                )}
              </div>
              <div className="text-sm">{selectedUnlocked ? selectedCard.anecdote : <UnlockHint card={selectedCard} />}</div>
            </div>

            {selectedUnlocked && selectedCard.lessons?.length > 0 && (
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={18} className="text-blue-600" />
                  <h4 className="font-bold text-blue-900">Leçons</h4>
                </div>
                <ul className="space-y-2">
                  {selectedCard.lessons.map((l, i) => (
                    <li key={i} className="flex gap-2 text-sm text-blue-800">
                      <span>•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
      <BottomNav />

      {/* Animations */}
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%) } 100% { transform: translateX(200%) } }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
        .animate-shimmer { animation: shimmer 3s infinite }
        .animate-fadeIn { animation: fadeIn .3s }
        .animate-slideUp { animation: slideUp .3s }
        .delay-1000 { animation-delay: 1s }
      `}</style>
    </div>
  );
}

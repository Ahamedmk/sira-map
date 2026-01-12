// src/pages/Timeline.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SIRA_TIMELINE, PHASES } from "../data/siraTimeline.js";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { supabase } from "../lib/supabase.js";

/**
 * ✅ Objectif :
 * - Ne plus dépendre d’un localStorage “debug” pour la progression
 * - Lire la progression depuis Supabase (table user_progress.data.timelineWorldCompleted)
 * - Fallback propre si user non connecté / table non dispo
 * - Corriger quelques bugs UI (StepCard avait des éléments absolute sans parent relative)
 * - Optionnel: surligner des events nouvellement débloqués si on arrive avec location.state
 */

/* ------------------------------
   UI helpers
------------------------------ */
function phaseMeta(phase) {
  switch (phase) {
    case "before":
      return {
        badge: "Avant la Révélation",
        accent:
          "from-slate-300/60 to-slate-100/20 dark:from-slate-700/40 dark:to-slate-900/10",
        dot: "bg-slate-300 dark:bg-slate-700",
      };
    case "revelation":
      return {
        badge: "Révélation & Appel",
        accent:
          "from-amber-300/50 to-amber-100/10 dark:from-amber-700/30 dark:to-slate-900/10",
        dot: "bg-amber-300 dark:bg-amber-700",
      };
    case "trial":
      return {
        badge: "Épreuves & Consolation",
        accent:
          "from-orange-300/50 to-orange-100/10 dark:from-orange-700/30 dark:to-slate-900/10",
        dot: "bg-orange-300 dark:bg-orange-700",
      };
    case "hijra":
      return {
        badge: "Aqabah & Hijra",
        accent:
          "from-emerald-300/50 to-emerald-100/10 dark:from-emerald-700/30 dark:to-slate-900/10",
        dot: "bg-emerald-300 dark:bg-emerald-700",
      };
    case "madinah":
      return {
        badge: "Construction à Médine",
        accent:
          "from-sky-300/50 to-sky-100/10 dark:from-sky-700/30 dark:to-slate-900/10",
        dot: "bg-sky-300 dark:bg-sky-700",
      };
    case "ending":
      return {
        badge: "Derniers moments",
        accent:
          "from-violet-300/50 to-violet-100/10 dark:from-violet-700/30 dark:to-slate-900/10",
        dot: "bg-violet-300 dark:bg-violet-700",
      };
    default:
      return {
        badge: "Étape",
        accent:
          "from-slate-300/50 to-slate-100/10 dark:from-slate-700/30 dark:to-slate-900/10",
        dot: "bg-slate-300 dark:bg-slate-700",
      };
  }
}

function DesertBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1100px_500px_at_50%_-10%,rgba(251,191,36,0.22),transparent_60%)] dark:bg-[radial-gradient(1100px_500px_at_50%_-10%,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(56,189,248,0.10),transparent_60%)] dark:bg-[radial-gradient(900px_500px_at_20%_20%,rgba(56,189,248,0.06),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.06] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22 x=%220%22 y=%220%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]" />
    </div>
  );
}

function RoadColumn() {
  return (
    <div className="absolute left-1/2 top-0 hidden h-full w-[220px] -translate-x-1/2 md:block">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200/80 dark:bg-slate-800/80" />
      <div className="absolute left-1/2 top-0 h-full w-[90px] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.035] to-transparent dark:via-white/[0.035]" />
      <div className="absolute left-1/2 top-0 h-full w-[160px] -translate-x-1/2 opacity-[0.28] dark:opacity-[0.22]">
        <div className="absolute left-1/2 top-8 h-24 w-[2px] -translate-x-1/2 rotate-[6deg] bg-slate-300 dark:bg-slate-700" />
        <div className="absolute left-1/2 top-[240px] h-24 w-[2px] -translate-x-1/2 -rotate-[7deg] bg-slate-300 dark:bg-slate-700" />
        <div className="absolute left-1/2 top-[480px] h-24 w-[2px] -translate-x-1/2 rotate-[5deg] bg-slate-300 dark:bg-slate-700" />
      </div>
    </div>
  );
}

function TimelineModal({ open, onClose, item }) {
  if (!open || !item) return null;
  const meta = phaseMeta(item.phase);

  return (
    <div className="fixed inset-0 z-50">
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
        aria-label="Fermer"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-2xl rounded-t-3xl bg-white p-5 shadow-2xl dark:bg-slate-950">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                {item.dateLabel}
              </div>
              <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h2>
              <div className="mt-2 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full ${meta.dot}`}
                />
                {meta.badge}
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Fermer
            </button>
          </div>

          <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className={`h-40 bg-gradient-to-br ${meta.accent}`} />
          </div>

          <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {item.summary}
          </p>

          <div className="mt-4 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Question (résonance)
            </div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Qu’est-ce que cette étape t’apprend sur la constance et le courage ?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepTotem({ unlocked, phase, highlight }) {
  const meta = phaseMeta(phase);
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <div
        className={[
          "absolute h-10 w-10 rounded-2xl border transition",
          unlocked
            ? "border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
            : "border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/70",
          highlight ? "ring-2 ring-amber-400/70 ring-offset-2 ring-offset-transparent" : "",
        ].join(" ")}
      />
      <div
        className={[
          "relative h-3.5 w-3.5 rounded-full transition",
          unlocked ? meta.dot : "bg-slate-200 dark:bg-slate-800",
        ].join(" ")}
      />
      {unlocked && (
        <div className="absolute -bottom-2 h-1.5 w-14 rounded-full bg-black/[0.04] blur-[1px] dark:bg-white/[0.04]" />
      )}
    </div>
  );
}

function StepCard({ item, unlocked, side, onOpen, highlight }) {
  const meta = phaseMeta(item.phase);

  return (
    <button
      onClick={onOpen}
      disabled={!unlocked}
      className={[
        "relative group w-full rounded-3xl border text-left transition",
        unlocked
          ? "border-slate-200 bg-white/85 hover:bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-950"
          : "border-slate-200 bg-white/60 opacity-80 dark:border-slate-800 dark:bg-slate-950/55",
        highlight ? "ring-2 ring-amber-400/60" : "",
        !unlocked ? "cursor-not-allowed" : "",
      ].join(" ")}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {item.dateLabel}
            </div>

            <div className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
              {unlocked ? item.title : "Événement à venir…"}
            </div>
          </div>

          <div className="shrink-0">
            <div
              className={[
                "inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold",
                unlocked
                  ? "border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                  : "border border-slate-200 bg-white/40 text-slate-600 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-300",
              ].join(" ")}
            >
              <span
                className={[
                  "mr-2 inline-block h-2 w-2 rounded-full",
                  unlocked ? meta.dot : "bg-slate-200 dark:bg-slate-800",
                ].join(" ")}
              />
              {meta.badge}
            </div>
          </div>
        </div>

        <div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {unlocked
            ? item.summary
            : "La date est là… mais le sens se révèle quand tu avances."}
        </div>

        {unlocked && (
          <div className="mt-3 text-xs font-semibold text-slate-800 opacity-0 transition group-hover:opacity-100 dark:text-slate-200">
            Ouvrir →
          </div>
        )}
      </div>

      <div
        className={`h-1.5 w-full rounded-b-3xl bg-gradient-to-r ${meta.accent}`}
      />

      {/* micro détail de direction */}
      <div
        className={[
          "absolute pointer-events-none hidden md:block",
          side === "left" ? "right-[-10px] top-8" : "left-[-10px] top-8",
        ].join(" ")}
      >
        <div className="h-5 w-5 rotate-45 rounded-md border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950" />
      </div>
    </button>
  );
}

/* ------------------------------
   Data loader: timelineWorldCompleted
------------------------------ */
async function fetchTimelineWorldCompleted(userId) {
  const { data, error } = await supabase
    .from("user_progress")
    .select("data")
    .eq("user_id", userId)
    .single();

  if (error) throw error;

  const d = data?.data || {};
  const v = Number(d.timelineWorldCompleted || 0);
  return Number.isFinite(v) ? v : 0;
}

export default function Timeline() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ si tu veux venir ici après un unlock: navigate("/timeline", { state: { highlightIds: [...], focusId }})
  const highlightIds = useMemo(() => {
    const ids = location?.state?.highlightIds;
    return Array.isArray(ids) ? new Set(ids) : new Set();
  }, [location?.state]);

  const focusId = location?.state?.focusId || null;

  const [completedWorld, setCompletedWorld] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  
  useEffect(() => {
    let alive = true;

    async function run() {
      setLoading(true);

      // fallback si non connecté
      if (!user?.id) {
        if (!alive) return;
        setCompletedWorld(1);
        setLoading(false);
        return;
      }

      try {
        const w = await fetchTimelineWorldCompleted(user.id);
        if (!alive) return;
        // ton unlock logic côté quiz met worldNumber (ex: 10, 11, etc.)
        // si 0 => on garde 1
        setCompletedWorld(Math.max(1, w || 1));
      } catch (e) {
        // si table/fonction pas prête -> fallback
        if (!alive) return;
        setCompletedWorld(1);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [user?.id]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const p of PHASES) map.set(p.key, []);
    for (const item of SIRA_TIMELINE) {
      if (!map.has(item.phase)) map.set(item.phase, []);
      map.get(item.phase).push(item);
    }
    return map;
  }, []);

  const isUnlocked = (item) => completedWorld >= item.unlockAtWorld;

  function openItem(item) {
    if (!isUnlocked(item)) return;
    setActiveItem(item);
  }

  // ✅ auto-focus (si on a un focusId)
  useEffect(() => {
    if (!focusId) return;
    const el = document.getElementById(`tl-${focusId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusId, loading]);

  let globalIndex = 0;

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <DesertBackdrop />

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
              🧭 Le Chemin
            </div>

            <button
              onClick={() => navigate("/map")}
              className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-950"
            >
              Retour à la map
            </button>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Une vie. Des étapes. Un sens qui se révèle.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Les dates sont visibles… mais chaque événement se dévoile au fur et à mesure de tes mondes.
            L’objectif : ressentir le parcours, pas seulement le lire.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/55 dark:text-slate-200">
            <span className="font-semibold">Progression timeline :</span>
            {loading ? (
              <span className="text-slate-500 dark:text-slate-400">Chargement…</span>
            ) : (
              <span>
                Monde terminé :{" "}
                <span className="font-semibold">{completedWorld}</span>
              </span>
            )}
          </div>
        </div>

        {/* Timeline “route” */}
        <div className="relative">
          <RoadColumn />

          <div className="space-y-10 md:space-y-14">
            {PHASES.map((phase) => {
              const items = grouped.get(phase.key) || [];
              if (!items.length) return null;

              const meta = phaseMeta(phase.key);

              return (
                <section key={phase.key} className="relative">
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${meta.accent}`}
                      />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Phase
                        </div>
                        <div className="text-lg font-bold">{meta.badge}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    {items.map((item) => {
                      const unlocked = isUnlocked(item);
                      const side = globalIndex % 2 === 0 ? "left" : "right";
                      const highlight = highlightIds.has(item.id);
                      globalIndex += 1;

                      return (
                        <div key={item.id} id={`tl-${item.id}`} className="relative">
                          {/* Desktop alternating */}
                          <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-10">
                            <div className={side === "left" ? "block" : "invisible"}>
                              <StepCard
                                item={item}
                                unlocked={unlocked}
                                side="left"
                                onOpen={() => openItem(item)}
                                highlight={highlight}
                              />
                            </div>
                            <div className={side === "right" ? "block" : "invisible"}>
                              <StepCard
                                item={item}
                                unlocked={unlocked}
                                side="right"
                                onOpen={() => openItem(item)}
                                highlight={highlight}
                              />
                            </div>
                          </div>

                          {/* Mobile full width */}
                          <div className="md:hidden">
                            <StepCard
                              item={item}
                              unlocked={unlocked}
                              side="left"
                              onOpen={() => openItem(item)}
                              highlight={highlight}
                            />
                          </div>

                          {/* Totem center */}
                          <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                            <StepTotem
                              unlocked={unlocked}
                              phase={item.phase}
                              highlight={highlight}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <TimelineModal
        open={!!activeItem}
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </div>
  );
}

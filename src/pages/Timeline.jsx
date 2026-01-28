// src/pages/Timeline.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SIRA_TIMELINE, PHASES } from "../data/siraTimeline.js";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { supabase } from "../lib/supabase.js";
import { loadProgress } from "../lib/progressStore.js";
import {
  Lock,
  ChevronRight,
  Sparkles,
  MapPin,
  Calendar,
  X,
  ArrowLeft,
  Map as MapIcon,
} from "lucide-react";

function phaseMeta(phase) {
  switch (phase) {
    case "before":
      return {
        badge: "Avant la Révélation",
        accent: "from-slate-400 via-slate-300 to-slate-200",
        accentBg: "from-slate-100 to-slate-50",
        dot: "bg-gradient-to-br from-slate-400 to-slate-500",
        icon: "🌙",
      };
    case "revelation":
      return {
        badge: "Révélation & Appel",
        accent: "from-amber-500 via-amber-400 to-amber-300",
        accentBg: "from-amber-100 to-amber-50",
        dot: "bg-gradient-to-br from-amber-400 to-amber-600",
        icon: "✨",
      };
    case "trial":
      return {
        badge: "Épreuves & Consolation",
        accent: "from-orange-500 via-orange-400 to-orange-300",
        accentBg: "from-orange-100 to-orange-50",
        dot: "bg-gradient-to-br from-orange-400 to-orange-600",
        icon: "🔥",
      };
    case "hijra":
      return {
        badge: "Aqabah & Hijra",
        accent: "from-emerald-500 via-emerald-400 to-emerald-300",
        accentBg: "from-emerald-100 to-emerald-50",
        dot: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        icon: "🕌",
      };
    case "madinah":
      return {
        badge: "Construction à Médine",
        accent: "from-sky-500 via-sky-400 to-sky-300",
        accentBg: "from-sky-100 to-sky-50",
        dot: "bg-gradient-to-br from-sky-400 to-sky-600",
        icon: "🏛️",
      };
    case "ending":
      return {
        badge: "Derniers moments",
        accent: "from-violet-500 via-violet-400 to-violet-300",
        accentBg: "from-violet-100 to-violet-50",
        dot: "bg-gradient-to-br from-violet-400 to-violet-600",
        icon: "🌟",
      };
    default:
      return {
        badge: "Étape",
        accent: "from-slate-400 via-slate-300 to-slate-200",
        accentBg: "from-slate-100 to-slate-50",
        dot: "bg-gradient-to-br from-slate-400 to-slate-500",
        icon: "📍",
      };
  }
}

function DesertBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 via-orange-50/50 to-neutral-50" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(251,191,36,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_30%,rgba(234,88,12,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22 x=%220%22 y=%220%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100/40 to-transparent animate-pulse-slow" />
    </div>
  );
}

function RoadColumn() {
  return (
    <div className="absolute left-1/2 top-0 hidden h-full w-[240px] -translate-x-1/2 md:block">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-amber-300 via-orange-300 to-amber-200 shadow-lg" />
      <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent" />
      <div className="absolute left-1/2 top-0 h-full w-[180px] -translate-x-1/2 opacity-20">
        <div className="absolute left-1/2 top-20 h-16 w-[3px] -translate-x-1/2 rotate-12 bg-amber-400 rounded-full" />
        <div className="absolute left-1/2 top-[280px] h-20 w-[3px] -translate-x-1/2 -rotate-12 bg-orange-400 rounded-full" />
        <div className="absolute left-1/2 top-[540px] h-16 w-[3px] -translate-x-1/2 rotate-8 bg-amber-400 rounded-full" />
      </div>
    </div>
  );
}

function TimelineModal({ open, onClose, item }) {
  if (!open || !item) return null;

  const meta = phaseMeta(item.phase);
  const story = Array.isArray(item.story) ? item.story : [];
  const keyMoments = Array.isArray(item.keyMoments) ? item.keyMoments : [];
  const question =
    item.reflectionQuestion ||
    "Qu'est-ce que cette étape t'apprend sur la constance et le courage ?";

  return (
    <div className="fixed inset-0 z-50 animate-fadeIn">
      <button onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute pt-4 mb-4 left-0 right-0 animate-slideUp">
        <div className="mx-auto max-w-2xl rounded-t-3xl bg-white p-6 shadow-2xl border-t-4 border-amber-400">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={14} className="text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  {item.dateLabel}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">{item.title}</h2>
              <div
                className={`inline-flex items-center gap-2 rounded-full border-2 px-3 py-1.5 text-xs font-bold bg-gradient-to-r ${meta.accentBg} border-amber-200`}
              >
                <span className="text-lg">{meta.icon}</span>
                {meta.badge}
              </div>
            </div>
            <button onClick={onClose} className="rounded-2xl p-2 text-neutral-700 hover:bg-neutral-100 transition-all">
              <X size={24} />
            </button>
          </div>

          <div className="mb-5 overflow-hidden rounded-2xl border-2 border-amber-200 shadow-lg">
            <div className={`h-48 bg-gradient-to-br ${meta.accent} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-4xl mb-2">{meta.icon}</div>
                <div className="text-sm font-semibold opacity-90">{meta.badge}</div>
              </div>
            </div>
          </div>

          <div className="max-h-[55vh] overflow-y-auto space-y-4">
            <div className="rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-5">
              <h3 className="text-sm font-bold text-amber-900 mb-2">En une phrase</h3>
              <p className="text-sm leading-relaxed text-neutral-800">{item.summary}</p>
            </div>

            <div className="rounded-2xl border-2 border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-bold text-neutral-900 mb-3">Contexte & récit</h3>
              <div className="space-y-3">
                {(story.length ? story : [item.summary]).map((p, idx) => (
                  <p key={idx} className="text-sm leading-relaxed text-neutral-700">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {keyMoments.length > 0 && (
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-5">
                <h3 className="text-sm font-bold text-blue-900 mb-3">Moments-clés</h3>
                <ul className="space-y-2">
                  {keyMoments.map((m, i) => (
                    <li key={i} className="flex gap-2 text-sm text-blue-800">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.after && (
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-sm font-bold text-emerald-900 mb-2">Ce que ça change après</h3>
                <p className="text-sm leading-relaxed text-emerald-800">{item.after}</p>
              </div>
            )}

            <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-orange-600" />
                <h3 className="text-sm font-bold text-orange-900">Question de résonance</h3>
              </div>
              <p className="text-sm leading-6 text-orange-800 italic">{question}</p>
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
    <div className="relative flex h-14 w-14 items-center justify-center">
      <div
        className={`absolute h-14 w-14 rounded-2xl border-2 transition-all duration-300 shadow-lg ${
          unlocked ? "border-amber-300 bg-white scale-100" : "border-neutral-200 bg-neutral-50 scale-90 opacity-60"
        } ${highlight ? "ring-4 ring-amber-400/60 ring-offset-2" : ""}`}
      />
      <div className={`relative h-7 w-7 rounded-full transition-all duration-300 shadow-md ${unlocked ? meta.dot : "bg-neutral-300"}`} />
      {unlocked && (
        <>
          <div className="absolute inset-0 rounded-2xl bg-amber-400/20 animate-pulse" />
          <div className="absolute -bottom-3 h-2 w-16 rounded-full bg-amber-900/10 blur-sm" />
        </>
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
      className={`group w-full rounded-3xl border-2 text-left transition-all duration-300 overflow-hidden relative ${
        unlocked
          ? "border-amber-200 bg-white hover:bg-amber-50/50 hover:border-amber-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          : "border-neutral-200 bg-neutral-50 opacity-60 cursor-not-allowed"
      } ${highlight ? "ring-4 ring-amber-400/60 ring-offset-2 animate-pulse-ring" : ""}`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${meta.accent}`} />

      {unlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}

      <div className="relative z-10 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className={`text-3xl ${unlocked ? "animate-bounce-slow" : "opacity-50"}`}>
              {unlocked ? meta.icon : "🔒"}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={12} className={unlocked ? "text-amber-600" : "text-neutral-400"} />
                <span className={`text-xs font-bold ${unlocked ? "text-amber-700" : "text-neutral-500"}`}>
                  {item.dateLabel}
                </span>
              </div>
              <div className="text-lg font-bold text-neutral-900">{unlocked ? item.title : "Événement à venir…"}</div>
            </div>
          </div>

          <div className="shrink-0">
            {unlocked ? (
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold border-2 bg-gradient-to-r ${meta.accentBg} border-amber-200`}>
                <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                {meta.badge}
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold border-2 bg-neutral-100 border-neutral-200">
                <Lock size={10} className="text-neutral-500" />
                Verrouillé
              </div>
            )}
          </div>
        </div>

        <div className={`text-sm leading-relaxed ${unlocked ? "text-neutral-700" : "text-neutral-500"} mb-4`}>
          {unlocked ? item.summary : "La date est visible… mais le sens se révèle quand tu progresses dans ton apprentissage."}
        </div>

        {unlocked && (
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 opacity-75 group-hover:opacity-100 transition-opacity">
            En savoir plus
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>

      <div className={`h-1.5 w-full bg-gradient-to-r ${meta.accent}`} />

      {unlocked && (
        <div className={`absolute pointer-events-none hidden md:block top-10 ${side === "left" ? "right-[-12px]" : "left-[-12px]"}`}>
          <div className="h-6 w-6 rotate-45 rounded-md border-2 border-amber-300 bg-white shadow-lg" />
        </div>
      )}
    </button>
  );
}

async function fetchTimelineWorldCompletedFromSupabase(userId) {
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

function getTimelineWorldCompletedFromLocal() {
  try {
    const p = loadProgress();
    const v = Number(p?.timelineWorldCompleted || 0);
    return Number.isFinite(v) ? v : 0;
  } catch {
    return 0;
  }
}

export default function Timeline() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const persisted = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("timeline_last_unlock_v1") || "null");
    } catch {
      return null;
    }
  }, []);

  const highlightIds = useMemo(() => {
    const idsFromState = location?.state?.highlightIds;
    const idsFromLS = persisted?.highlightIds;
    const ids = Array.isArray(idsFromState) ? idsFromState : Array.isArray(idsFromLS) ? idsFromLS : [];
    return new Set(ids);
  }, [location?.state, persisted]);

  const focusId = location?.state?.focusId || persisted?.focusId || null;

  const [completedWorld, setCompletedWorld] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    let alive = true;

    async function run() {
      setLoading(true);

      // ✅ Guest: on lit la progression locale
      if (!user?.id) {
        const localW = getTimelineWorldCompletedFromLocal();
        if (!alive) return;
        setCompletedWorld(localW);
        setLoading(false);
        return;
      }

      // ✅ Connecté: on lit Supabase
      try {
        const w = await fetchTimelineWorldCompletedFromSupabase(user.id);
        if (!alive) return;
        setCompletedWorld(Number.isFinite(w) ? w : 0);
      } catch {
        if (!alive) return;
        // fallback local si Supabase KO
        setCompletedWorld(getTimelineWorldCompletedFromLocal());
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

  const isUnlocked = (item) => Number.isFinite(completedWorld) && completedWorld >= item.unlockAtWorld;

  function openItem(item) {
    if (!isUnlocked(item)) return;
    setActiveItem(item);
  }

  useEffect(() => {
    if (!focusId) return;
    const el = document.getElementById(`tl-${focusId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusId, loading]);

  let globalIndex = 0;

  return (
    <div className="min-h-screen text-neutral-900 pb-32">
      <DesertBackdrop />

      <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-sm font-bold text-amber-900 shadow-lg">
              <span className="text-lg">🧭</span>
              Le Chemin de la Sîra
            </div>
            <button
              onClick={() => navigate("/map")}
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-200 bg-white px-4 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-50 hover:shadow-md transition-all"
            >
              <ArrowLeft size={16} />
              Retour à la Map
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent">
            Une vie. Des étapes. Un sens qui se révèle.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-700 mb-6">
            Les dates sont visibles… mais chaque événement se dévoile au fur et à mesure de ta progression.
            L&apos;objectif : ressentir le parcours, pas seulement le lire. ✨
          </p>

          <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 px-5 py-3 shadow-md">
            <MapIcon size={18} className="text-amber-700" />
            <div className="text-sm">
              {loading ? (
                <span className="text-neutral-600">Chargement de ta progression…</span>
              ) : (
                <span>
                  Monde complété : <span className="font-bold text-amber-900">{completedWorld}</span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <RoadColumn />

          <div className="space-y-12 md:space-y-16">
            {PHASES.map((phase) => {
              const items = grouped.get(phase.key) || [];
              if (!items.length) return null;

              const meta = phaseMeta(phase.key);

              return (
                <section key={phase.key} className="relative">
                  <div className="mb-6 md:mb-8 animate-fadeIn">
                    <div className="flex items-center gap-4">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${meta.accent} shadow-lg flex items-center justify-center text-2xl`}>
                        {meta.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-1">Phase</div>
                        <div className="text-xl font-bold text-neutral-900">{meta.badge}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    {items.map((item) => {
                      const unlocked = isUnlocked(item);
                      const side = globalIndex % 2 === 0 ? "left" : "right";
                      const highlight = highlightIds.has(item.id);
                      globalIndex += 1;

                      return (
                        <div key={item.id} id={`tl-${item.id}`} className="relative animate-fadeIn">
                          <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-12">
                            <div className={side === "left" ? "block" : "invisible"}>
                              <StepCard item={item} unlocked={unlocked} side="left" onOpen={() => openItem(item)} highlight={highlight} />
                            </div>
                            <div className={side === "right" ? "block" : "invisible"}>
                              <StepCard item={item} unlocked={unlocked} side="right" onOpen={() => openItem(item)} highlight={highlight} />
                            </div>
                          </div>

                          <div className="md:hidden">
                            <StepCard item={item} unlocked={unlocked} side="left" onOpen={() => openItem(item)} highlight={highlight} />
                          </div>

                          <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
                            <StepTotem unlocked={unlocked} phase={item.phase} highlight={highlight} />
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

      <TimelineModal open={!!activeItem} item={activeItem} onClose={() => setActiveItem(null)} />

      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        @keyframes bounce-slow{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @keyframes pulse-slow{0%,100%{opacity:0.5}50%{opacity:0.8}}
        @keyframes pulse-ring{0%,100%{opacity:1}50%{opacity:0.6}}
        .animate-fadeIn{animation:fadeIn .5s ease-out}
        .animate-slideUp{animation:slideUp .3s ease-out}
        .animate-bounce-slow{animation:bounce-slow 2s ease-in-out infinite}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
        .animate-pulse-ring{animation:pulse-ring 2s ease-in-out infinite}
      `}</style>
    </div>
  );
}

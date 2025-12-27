import React, { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Cinématique auto-slide avec transitions ultra-fluides :
 * - transitions douces et progressives
 * - animations synchronisées
 * - effets de parallaxe subtils
 * - timing optimisé pour une expérience cinématographique
 */
export default function CinematicIntro({
  eventKey,
  slides = [],
  onFinish,
  slideMs = 4800,
  outroMs = 650,
}) {
  const total = slides.length || 0;
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("enter");
  const [transitioning, setTransitioning] = useState(false);
  const finishingRef = useRef(false);

  const current = useMemo(() => slides[i] || null, [slides, i]);

  function markSeenAndFinish() {
    if (finishingRef.current) return;
    finishingRef.current = true;

    try {
      if (eventKey) localStorage.setItem(`cinematic_${eventKey}_seen`, "1");
    } catch {}

    setPhase("exit");
    setTimeout(() => {
      onFinish?.();
    }, outroMs);
  }

  useEffect(() => {
    if (!total) return;

    setPhase("enter");
    const t1 = setTimeout(() => setPhase("stable"), 400);

    const t2 = setTimeout(() => {
      if (i + 1 >= total) {
        markSeenAndFinish();
      } else {
        setTransitioning(true);
        setPhase("exit");
        setTimeout(() => {
          setI((x) => x + 1);
          setTransitioning(false);
          setPhase("enter");
        }, 400);
      }
    }, slideMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, total, slideMs]);

  if (!current) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-neutral-950 text-white overflow-hidden">
      {/* Header avec fade-in */}
      <div 
        className={`px-4 pt-4 flex items-center justify-between transition-all duration-700 ${
          phase === "enter" ? "opacity-0 translate-y-[-10px]" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="text-[11px] text-white/60 font-medium tracking-wide">
          Moment clé • {Math.min(i + 1, total)}/{total}
        </div>

        <button
          onClick={markSeenAndFinish}
          className="inline-flex items-center gap-2 text-[11px] text-white/55 hover:text-white/85 transition-all duration-300 hover:gap-1"
        >
          <X size={14} />
          Passer
        </button>
      </div>

      {/* Backdrop animé avec transitions douces */}
      <div className="absolute inset-0">
        <div 
          className={`absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl transition-all duration-[3000ms] ${
            phase === "stable" ? "scale-110" : "scale-100"
          }`}
          style={{
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div 
          className={`absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl transition-all duration-[3000ms] ${
            phase === "stable" ? "scale-110" : "scale-100"
          }`}
          style={{
            animation: "float 8s ease-in-out infinite 4s",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950 to-neutral-950 transition-opacity duration-1000" />
      </div>

      {/* Content avec parallaxe */}
      <div className="relative z-10 mx-auto max-w-md px-5 pt-16">
        <div
          className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl transition-all duration-500 ease-out ${
            phase === "enter" 
              ? "opacity-0 translate-y-8 scale-95" 
              : phase === "stable"
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-[-8px] scale-95"
          }`}
        >
          {/* Label avec animation décalée */}
          <p 
            className={`text-[11px] uppercase tracking-[0.2em] text-white/55 font-medium transition-all duration-500 ${
              phase === "enter" ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Cinématique
          </p>

          {/* Titre avec animation décalée */}
          <h1 
            className={`mt-3 text-2xl font-semibold leading-tight transition-all duration-600 ${
              phase === "enter" ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {current.title}
          </h1>

          {/* Texte avec animation décalée */}
          <p 
            className={`mt-4 text-sm leading-7 text-white/80 transition-all duration-600 ${
              phase === "enter" ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {current.text}
          </p>

          {current.hint && (
            <p 
              className={`mt-4 text-xs text-white/55 transition-all duration-600 ${
                phase === "enter" ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {current.hint}
            </p>
          )}

          {/* Progress bar avec animation fluide */}
          <div 
            className={`mt-6 transition-all duration-600 ${
              phase === "enter" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-blue-400/70 to-purple-400/70 origin-left transition-transform ${
                  phase === "stable" ? "cinematic-bar" : ""
                }`}
                style={{ 
                  animationDuration: `${slideMs}ms`,
                  transform: phase === "enter" ? "scaleX(0)" : undefined
                }}
              />
            </div>

            {/* Dots avec animations individuelles */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {Array.from({ length: total }).map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    idx === i 
                      ? "w-8 bg-white" 
                      : idx < i
                      ? "w-2 bg-white/40"
                      : "w-2 bg-white/25"
                  }`}
                  style={{ 
                    transitionDelay: `${600 + idx * 50}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade avec transition */}
      <div 
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent transition-opacity duration-1000 ${
          phase === "exit" ? "opacity-0" : "opacity-100"
        }`}
      />

      <style>{`
        @keyframes cinematicFill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        .cinematic-bar {
          animation-name: cinematicFill;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
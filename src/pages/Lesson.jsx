import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import { getLessonContent } from "../data/lessons.mock.js";
import {
  ChevronLeft,
  Headphones,
  BookOpen,
  Sparkles,
  Play,
  Zap,
  Trophy,
  ArrowRight,
} from "lucide-react";

import CinematicIntro from "../components/CinematicIntro.jsx";
import { CINEMATICS } from "../data/cinematics.mock.js";

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);
  const content = useMemo(() => getLessonContent(lessonId), [lessonId]);
  const audioSrc = content?.audio || null;

  // ✅ Mapping : cinématique seulement pour les moments stratégiques
  const cinematicKey = useMemo(() => {
    if (lessonId === "l1") return "world1_intro";
    if (lessonId === "l13") return "world4_revelation";
    if (lessonId === "l21") return "world6_boycott";
    if (lessonId === "l25") return "world7_sorrow";
    return null;
  }, [lessonId]);

  const cinematic = cinematicKey ? CINEMATICS[cinematicKey] : null;

  // ✅ "seen" par eventKey (safe)
  const [showIntro, setShowIntro] = useState(() => {
    if (!cinematic) return false;
    try {
      return localStorage.getItem(`cinematic_${cinematic.eventKey}_seen`) !== "1";
    } catch {
      return true; // si storage indispo, on montre 1 fois
    }
  });

  const [mode, setMode] = useState("read"); // read | audio

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-red-50/20 to-orange-50/20">
        <div className="mx-auto max-w-md px-5 pt-8">
          <div className="rounded-3xl bg-white border border-red-200/50 p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="font-bold text-red-900">Leçon introuvable</p>
            </div>
            <p className="text-sm text-red-700">
              Cette leçon n&apos;existe pas ou n&apos;est plus disponible.
            </p>
            <button
              onClick={() => navigate("/map")}
              className="mt-4 w-full rounded-2xl bg-red-600 text-white py-3 font-bold"
            >
              Retour à la Map
            </button>
          </div>
        </div>
      </div>
    );
  }

  const title = content?.title || lesson.node.title;
  const worldTitle = lesson.world?.title || "Monde";
  const illustration = content?.illustration || null;

  const storyBlocks = content?.storyBlocks?.length
    ? content.storyBlocks
    : (content?.story || []).map((t) => ({ type: "p", text: t }));

  const keyPoints = content?.keyPoints?.length
    ? content.keyPoints
    : ["(MVP) Ajoute keyPoints[] dans lessons.mock.js"];

  const cliffhanger = content?.cliffhanger || null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20 pb-32">
      {/* ✅ Cinématique stratégique (rare) */}
      {showIntro && cinematic ? (
  <CinematicIntro
    eventKey={cinematic.eventKey}
    slides={cinematic.slides}
    slideMs={13000}     // tu peux ajuster
    outroMs={1000}      // petit fondu final
    onFinish={() => setShowIntro(false)}
  />
) : null}


      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-5 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200/50 text-sm font-medium text-neutral-700 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <ChevronLeft size={18} />
            Retour
          </button>

          <div className="px-3 py-1.5 rounded-xl bg-blue-100 border border-blue-200/50 text-xs font-bold text-blue-700">
            📚 Leçon
          </div>
        </div>

        {/* Illustration */}
        {illustration ? (
          <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-200/50 bg-white shadow-xl shadow-neutral-200/50 group hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src={illustration}
              alt=""
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm border border-neutral-200/50 text-xs font-bold text-neutral-800 shadow-lg">
              ✨ Illustration
            </div>
          </div>
        ) : null}

        {/* Titre et monde */}
        <div className="mt-6 mb-5">
          <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
            {title}
          </h1>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/50">
            <span className="text-xs font-semibold text-neutral-600">🌍</span>
            <span className="text-xs font-semibold text-neutral-700">{worldTitle}</span>
          </div>
        </div>

        {/* Mode */}
        <div className="relative p-1.5 flex gap-2 rounded-2xl bg-neutral-100 border border-neutral-200/50 shadow-inner mb-6">
          <button
            onClick={() => setMode("read")}
            className={[
              "relative flex-1 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300",
              mode === "read"
                ? "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg"
                : "text-neutral-600 hover:text-neutral-800",
            ].join(" ")}
          >
            <span className="relative z-10 inline-flex items-center gap-2 justify-center">
              <BookOpen size={18} />
              Lecture
            </span>
            {mode === "read" && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl" />
            )}
          </button>

          <button
            onClick={() => setMode("audio")}
            className={[
              "relative flex-1 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300",
              mode === "audio"
                ? "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg"
                : "text-neutral-600 hover:text-neutral-800",
            ].join(" ")}
          >
            <span className="relative z-10 inline-flex items-center gap-2 justify-center">
              <Headphones size={18} />
              Audio
            </span>
            {mode === "audio" && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl" />
            )}
          </button>
        </div>

        {/* CONTENT */}
        <div className="space-y-5">
          {mode === "read" ? (
            <>
              {/* Story */}
              <div className="relative rounded-3xl border border-neutral-200/50 bg-white/90 backdrop-blur-sm p-6 shadow-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-[15px] leading-[1.8] text-neutral-800">
                  {storyBlocks.map((b, idx) => {
                    if (b.type === "subtitle") {
                      return (
                        <h2
                          key={idx}
                          className="mt-6 first:mt-0 text-lg font-bold text-neutral-900 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                          {b.text}
                        </h2>
                      );
                    }
                    return (
                      <p key={idx} className="mt-4 first:mt-0">
                        {b.text}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Cliffhanger */}
              {cliffhanger ? (
                <div className="relative rounded-3xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg overflow-hidden">
                  <div className="absolute top-0 right-0 text-7xl opacity-10">✨</div>

                  <div className="relative z-10">
                    <p className="text-sm font-bold inline-flex items-center gap-2 text-purple-900 mb-3">
                      <Sparkles size={18} className="animate-pulse" />
                      Et ensuite…
                    </p>
                    <p className="text-sm leading-7 text-purple-800 font-medium">
                      {cliffhanger}
                    </p>
                  </div>
                </div>
              ) : null}

              {/* Key points */}
              <div className="relative rounded-3xl border-2 border-amber-200/50 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-lg overflow-hidden">
                <div className="absolute bottom-0 left-0 text-7xl opacity-10">🔑</div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center shadow-md">
                      <span className="text-xl">🔑</span>
                    </div>
                    <p className="text-base font-bold text-amber-900">
                      Points essentiels à retenir
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {keyPoints.map((k, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                        <span className="text-sm leading-6 text-amber-900 font-medium">
                          {k}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="relative rounded-3xl border border-neutral-200/50 bg-white/90 backdrop-blur-sm p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-md">
                  <Headphones size={24} className="text-blue-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">Mode Audio</p>
                  <p className="text-xs text-neutral-600">
                    {audioSrc ? "Disponible" : "Non disponible pour cette leçon"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200/50 p-5">
                <div className="flex items-center justify-center gap-3 text-neutral-600 mb-3">
                  <Play size={20} />
                  <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </div>
                  <span className="text-xs font-mono">0:00</span>
                </div>

                {audioSrc ? (
                  <audio
                    controls
                    controlsList="nodownload"
                    className="w-full mt-4 rounded-xl"
                  >
                    <source src={audioSrc} type="audio/mpeg" />
                    Ton navigateur ne supporte pas l’audio.
                  </audio>
                ) : (
                  <p className="text-xs text-center text-neutral-500">
                    Audio non disponible pour cette leçon 🎧
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 space-y-3">
          <button
            onClick={() => navigate(`/quiz/${lesson.node.id}`)}
            className="relative w-full rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white py-4 font-bold shadow-xl shadow-neutral-900/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Trophy size={20} />
              Passer l&apos;épreuve
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-600">
            <Zap size={14} className="text-amber-600" />
            <span>+30 XP si tu réussis le quiz !</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

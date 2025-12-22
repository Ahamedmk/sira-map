import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import { getLessonContent } from "../data/lessons.mock.js";
import { ChevronLeft, Headphones, BookOpen, Sparkles } from "lucide-react";

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);
  const content = useMemo(() => getLessonContent(lessonId), [lessonId]);

  const [mode, setMode] = useState("read"); // read | audio

  if (!lesson) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-md px-4 pt-6">
          <p className="text-sm text-neutral-600">Leçon introuvable.</p>
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
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="mx-auto max-w-md px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-neutral-700"
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        {/* Illustration */}
        {illustration ? (
          <div className="mt-4 overflow-hidden rounded-3xl border bg-white">
            <img
              src={illustration}
              alt=""
              className="h-44 w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : null}

        <h1 className="mt-4 text-xl font-semibold">{title}</h1>
        <p className="text-sm text-neutral-600">{worldTitle}</p>

        {/* Mode */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setMode("read")}
            className={[
              "flex-1 rounded-xl border px-3 py-2 text-sm font-medium transition",
              mode === "read"
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white hover:border-neutral-300",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <BookOpen size={16} /> Lecture
            </span>
          </button>

          <button
            onClick={() => setMode("audio")}
            className={[
              "flex-1 rounded-xl border px-3 py-2 text-sm font-medium transition",
              mode === "audio"
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white hover:border-neutral-300",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <Headphones size={16} /> Audio
            </span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-4">
          {mode === "read" ? (
            <>
              {/* Story */}
              <div className="rounded-3xl border bg-white p-5">
                <div className="text-[15px] leading-7 text-neutral-800">
                  {storyBlocks.map((b, idx) => {
                    if (b.type === "subtitle") {
                      return (
                        <h2
                          key={idx}
                          className="mt-6 first:mt-0 text-base font-semibold text-neutral-900"
                        >
                          {b.text}
                        </h2>
                      );
                    }
                    return (
                      <p key={idx} className="mt-3 first:mt-0">
                        {b.text}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Cliffhanger */}
              {cliffhanger ? (
                <div className="mt-4 rounded-3xl border bg-neutral-50 p-5">
                  <p className="text-sm font-semibold inline-flex items-center gap-2">
                    <Sparkles size={16} />
                    Et ensuite…
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {cliffhanger}
                  </p>
                </div>
              ) : null}

              {/* Key points */}
              <div className="mt-4 rounded-3xl border bg-white p-5">
                <p className="text-sm font-semibold">
                  🔑 Points essentiels à retenir
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                  {keyPoints.map((k, idx) => (
                    <li key={idx}>{k}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="rounded-3xl border bg-white p-5">
              <p className="text-sm text-neutral-700">
                (Étape suivante) On va brancher un MP3 par leçon.
              </p>
              <div className="mt-3 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-sm text-neutral-600">
                Audio Player Placeholder
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate(`/quiz/${lesson.node.id}`)}
          className="mt-5 w-full rounded-2xl bg-neutral-900 text-white py-3 font-medium"
        >
          Passer l’épreuve
        </button>
      </div>
    </div>
  );
}

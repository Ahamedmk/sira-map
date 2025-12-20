import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import { getLessonContent } from "../data/lessons.mock.js";
import { ChevronLeft, Headphones, BookOpen, CheckCircle2 } from "lucide-react";

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);
  const content = useMemo(() => getLessonContent(lessonId), [lessonId]);

  const [mode, setMode] = useState("read"); // read | audio
  const [microCheckDone, setMicroCheckDone] = useState(false);

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

  return (
    <div className="min-h-screen bg-neutral-50 pb-6">
      <div className="mx-auto max-w-md px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-neutral-700"
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        <h1 className="mt-3 text-xl font-semibold">{title}</h1>
        <p className="text-sm text-neutral-600">{lesson.world.title}</p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setMode("read")}
            className={[
              "flex-1 rounded-xl border px-3 py-2 text-sm font-medium",
              mode === "read" ? "bg-neutral-900 text-black border-neutral-900" : "bg-white",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <BookOpen size={16} /> Lecture
            </span>
          </button>

          <button
            onClick={() => setMode("audio")}
            className={[
              "flex-1 rounded-xl border px-3 py-2 text-sm font-medium",
              mode === "audio" ? "bg-neutral-900 text-black border-neutral-900" : "bg-white",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <Headphones size={16} /> Audio
            </span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-4 space-y-3">
          {mode === "read" ? (
            <>
              {(content?.story || ["(MVP) Ajoute le contenu de cette leçon dans lessons.mock.js"]).map(
                (p, idx) => (
                  <div key={idx} className="rounded-2xl border bg-white p-4">
                    <p className="text-sm leading-6 text-neutral-800">{p}</p>
                  </div>
                )
              )}

              {/* Micro-check simple (pour donner du rythme) */}
              <div className="rounded-2xl border bg-white p-4">
                <p className="text-sm font-semibold">Mini-check (10 secondes)</p>
                <p className="text-sm text-neutral-600 mt-1">
                  Question : “Le contexte tribal influence-t-il fortement la vie sociale ?”
                </p>

                {!microCheckDone ? (
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => setMicroCheckDone(true)}
                      className="flex-1 rounded-xl bg-neutral-900 text-black py-2.5 font-medium"
                    >
                      Oui
                    </button>
                    <button
                      onClick={() => setMicroCheckDone(true)}
                      className="flex-1 rounded-xl border bg-white py-2.5 font-medium"
                    >
                      Non
                    </button>
                  </div>
                ) : (
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-700 font-medium">
                    <CheckCircle2 size={18} />
                    Bien vu — on retient l’essentiel.
                  </div>
                )}
              </div>

              {/* Points clés */}
              <div className="rounded-2xl border bg-white p-4">
                <p className="text-sm font-semibold">Points clés à retenir</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                  {(content?.keyPoints || ["(MVP) Ajoute keyPoints[] dans lessons.mock.js"]).map(
                    (k, idx) => (
                      <li key={idx}>{k}</li>
                    )
                  )}
                </ul>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border bg-white p-4">
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
          className="mt-4 w-full rounded-xl bg-neutral-900 text-black py-3 font-medium"
        >
          Passer l’épreuve
        </button>
      </div>
    </div>
  );
}

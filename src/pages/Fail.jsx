import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import { AlertTriangle } from "lucide-react";

export default function FailPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);

  if (!lesson) {
    return (
      <div className="min-h-full bg-neutral-50">
        <div className="mx-auto max-w-md px-4 pt-6">
          <p className="text-sm text-neutral-600">Résultat introuvable.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-neutral-50 pb-10">
      <div className="mx-auto max-w-md px-4 pt-8">
        <div className="rounded-3xl border bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-red-50 border flex items-center justify-center">
              <AlertTriangle className="text-red-700" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Pas encore 😅</h1>
              <p className="text-sm text-neutral-600">{lesson.node.title}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border bg-neutral-50 p-4">
            <p className="text-sm text-neutral-700 font-medium">Plan simple</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600 space-y-1">
              <li>Revois le passage clé (2 minutes)</li>
              <li>Refais l’épreuve</li>
              <li>Tu valides à 80%</li>
            </ul>
          </div>

          <button
            onClick={() => navigate(`/lesson/${lessonId}`)}
            className="mt-4 w-full rounded-xl bg-neutral-900 text-white py-3 font-medium"
          >
            Revoir la leçon
          </button>

          <button
            onClick={() => navigate(`/quiz/${lessonId}`)}
            className="mt-2 w-full rounded-xl border bg-white py-3 font-medium"
          >
            Refaire l’épreuve
          </button>

          <button
            onClick={() => navigate("/map", { replace: true })}
            className="mt-2 w-full rounded-xl bg-white text-neutral-600 py-3 font-medium"
          >
            Retour Map
          </button>
        </div>
      </div>
    </div>
  );
}

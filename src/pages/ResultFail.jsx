import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, XCircle, Crown } from "lucide-react";

export default function ResultFail() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const isBoss = useMemo(() => /^b\d+$/.test(String(lessonId)), [lessonId]);

  return (
    <div className={["min-h-screen pb-10", isBoss ? "bg-neutral-950" : "bg-neutral-50"].join(" ")}>
      <div className="mx-auto max-w-md px-4 pt-10">
        <button
          onClick={() => navigate("/map")}
          className={["inline-flex items-center gap-2 text-sm", isBoss ? "text-neutral-200" : "text-neutral-700"].join(" ")}
        >
          <ChevronLeft size={18} />
          Retour Map
        </button>

        <div className={["mt-4 rounded-3xl border p-6", isBoss ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-white"].join(" ")}>
          <div className="inline-flex items-center gap-2">
            {isBoss ? <Crown className="text-yellow-400" size={20} /> : <XCircle className="text-red-600" size={20} />}
            <p className={["text-sm font-semibold", isBoss ? "text-white" : "text-neutral-900"].join(" ")}>
              {isBoss ? "Boss non validé" : "Épreuve non validée"}
            </p>
          </div>

          <h1 className={["mt-4 text-xl font-semibold", isBoss ? "text-white" : "text-neutral-900"].join(" ")}>
            On recommence 💪
          </h1>

          <p className={["mt-2 text-sm leading-6", isBoss ? "text-neutral-300" : "text-neutral-600"].join(" ")}>
            {isBoss
              ? "Le Boss vérifie la compréhension globale. Revois les points essentiels, puis retente."
              : "Relis l’histoire et ses points essentiels, puis retente le quiz."}
          </p>

          <div className="mt-5 space-y-2">
            {!isBoss ? (
              <button
                onClick={() => navigate(`/lesson/${lessonId}`, { replace: true })}
                className={["w-full rounded-2xl py-3 font-medium", isBoss ? "bg-neutral-950 text-white border border-neutral-800" : "border bg-white"].join(" ")}
              >
                Revenir à la leçon
              </button>
            ) : null}

            <button
              onClick={() => navigate(`/quiz/${lessonId}`, { replace: true })}
              className={["w-full rounded-2xl py-3 font-medium", isBoss ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"].join(" ")}
            >
              Refaire le quiz
            </button>

            <button
              onClick={() => navigate("/map", { replace: true })}
              className={["w-full rounded-2xl py-3 font-medium", isBoss ? "border border-neutral-800 bg-neutral-950 text-white" : "border bg-white"].join(" ")}
            >
              Retour Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

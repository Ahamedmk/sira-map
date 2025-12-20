import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";
import { loadProgress, getDueReviews } from "../lib/progressStore.js";
import { getLessonById } from "../data/map.mock.js";
import { Brain, ChevronRight, Clock } from "lucide-react";

export default function ReviewPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(() => loadProgress());

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const due = useMemo(() => getDueReviews(progress), [progress]);

  function labelStage(stage) {
    if (stage === 1) return "Révision J+1";
    if (stage === 2) return "Révision J+3";
    return "Révision";
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="mx-auto max-w-md px-4 pt-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold">Réviser</h1>
            <p className="text-sm text-neutral-600">
              Des mini-quiz rapides pour ne pas oublier.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-neutral-700">
            <Brain size={18} />
            <span className="font-semibold">{due.length}</span>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border bg-white p-4">
          <p className="text-sm text-neutral-600">XP aujourd’hui</p>
          <p className="text-2xl font-semibold">{progress.xpToday}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-semibold text-neutral-800">
            À faire aujourd’hui
          </h2>

          {due.length === 0 ? (
            <div className="mt-3 rounded-2xl border bg-white p-4">
              <p className="text-sm text-neutral-700 font-medium">
                Rien à réviser 🎉
              </p>
              <p className="text-sm text-neutral-600 mt-1">
                Reviens demain, ou avance sur la Map.
              </p>
              <button
                onClick={() => navigate("/map")}
                className="mt-3 w-full rounded-xl bg-neutral-900 text-black py-2.5 font-medium"
              >
                Aller à la Map
              </button>
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              {due.map((r) => {
                const info = getLessonById(r.lessonId);
                const title = info?.node?.title ?? `Leçon ${r.lessonId}`;

                return (
                  <button
                    key={r.id}
                    onClick={() => navigate(`/review/quiz/${r.id}`)}
                    className="w-full text-left rounded-2xl border bg-white p-4 hover:border-neutral-300 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{title}</p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-600">
                          <Clock size={14} />
                          <span>≈ 2 min</span>
                          <span>•</span>
                          <span>{labelStage(r.stage)}</span>
                        </div>
                      </div>

                      <ChevronRight className="text-neutral-400" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

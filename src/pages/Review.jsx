import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";
import { loadProgress, getDueReviews } from "../lib/progressStore.js";
import { getLessonById } from "../data/map.mock.js";
import { Brain, ChevronRight, Clock, Sparkles, CheckCircle2, Zap, TrendingUp, Star } from "lucide-react";

export default function ReviewPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(() => loadProgress());

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const due = useMemo(() => getDueReviews(progress), [progress]);

  function labelStage(stage) {
    if (stage === 1) return "J+1";
    if (stage === 2) return "J+3";
    return "Révision";
  }

  function getStageColor(stage) {
    if (stage === 1) return "from-blue-50 to-blue-100";
    if (stage === 2) return "from-purple-50 to-purple-100";
    return "from-neutral-50 to-neutral-100";
  }

  function getStageTextColor(stage) {
    if (stage === 1) return "text-blue-700";
    if (stage === 2) return "text-purple-700";
    return "text-neutral-700";
  }

  function getStageBadgeColor(stage) {
    if (stage === 1) return "bg-blue-100 text-blue-700 border-blue-200";
    if (stage === 2) return "bg-purple-100 text-purple-700 border-purple-200";
    return "bg-neutral-100 text-neutral-700 border-neutral-200";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-purple-50/20 to-blue-50/20 pb-32">
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-5 pt-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
              Révisions
            </h1>
            <p className="text-sm text-neutral-600 mt-1">
              Renforce ta mémoire avec des quiz rapides 🧠
            </p>
          </div>

          {/* Badge compteur */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300/50 shadow-lg shadow-purple-200/30">
            <Brain size={20} className="text-purple-700" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-purple-900">{due.length}</span>
              <span className="text-[9px] font-semibold text-purple-700 -mt-1">
                {due.length > 1 ? "révisions" : "révision"}
              </span>
            </div>
          </div>
        </div>

        {/* Carte XP aujourd'hui */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50 p-5 shadow-lg shadow-neutral-200/30 mb-6 overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
                <Sparkles size={18} className="text-purple-600" />
                <span>XP aujourd'hui</span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-neutral-900">{progress.xpToday}</p>
                <span className="text-lg text-neutral-500">/ 50</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-neutral-600">
                <TrendingUp size={12} className="text-purple-600" />
                <span>Continue comme ça !</span>
              </div>
            </div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-md">
              <Zap size={36} className="text-purple-600" />
            </div>
          </div>

          {/* Barre de progression */}
          <div className="mt-4 h-2.5 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{ width: `${Math.min((progress.xpToday / 50) * 100, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Section principale */}
        <div>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-base font-bold text-neutral-800 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              À faire aujourd'hui
            </h2>
            {due.length > 0 && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                {due.length} {due.length > 1 ? "quiz" : "quiz"}
              </span>
            )}
          </div>

          {due.length === 0 ? (
            <div className="relative rounded-3xl bg-gradient-to-br from-white to-emerald-50 border border-emerald-200/50 p-6 shadow-lg overflow-hidden group">
              {/* Confettis animés */}
              <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12">
                🎉
              </div>
              <div className="absolute bottom-0 left-0 text-5xl opacity-10 transform -rotate-12">
                ✨
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-md">
                    <CheckCircle2 size={28} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-900">
                      Tout est révisé !
                    </p>
                    <p className="text-sm text-emerald-700">
                      Tu es à jour 🎉
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-100/50 border border-emerald-200/50 p-4 mb-4">
                  <p className="text-sm text-emerald-800 text-center">
                    Reviens demain pour de nouvelles révisions, ou continue ton aventure sur la Map !
                  </p>
                </div>

                <button
                  onClick={() => navigate("/map")}
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 font-bold shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Star size={20} className="fill-white" />
                  Aller à la Map
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {due.map((r) => {
                const info = getLessonById(r.lessonId);
                const title = info?.node?.title ?? `Leçon ${r.lessonId}`;

                return (
                  <button
                    key={r.id}
                    onClick={() => navigate(`/review/quiz/${r.id}`)}
                    className="w-full text-left rounded-3xl border bg-white p-5 hover:shadow-xl hover:scale-[1.02] hover:border-neutral-300 transition-all duration-300 relative overflow-hidden group shadow-md shadow-neutral-200/50"
                  >
                    {/* Effet de fond gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getStageColor(r.stage)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Icône */}
                        <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${getStageColor(r.stage)} border-2 border-neutral-300 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <Brain size={24} className={getStageTextColor(r.stage)} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-neutral-900 mb-2">
                            {title}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                              <Clock size={14} />
                              <span className="font-medium">≈ 2 min</span>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStageBadgeColor(r.stage)}`}>
                              {labelStage(r.stage)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Chevron avec animation */}
                      <div className="flex items-center h-14">
                        <ChevronRight 
                          className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1" 
                          size={20}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Message de motivation si des révisions */}
        {due.length > 0 && (
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/50 p-4">
            <p className="text-sm text-center text-neutral-700">
              <span className="font-semibold text-purple-900">💡 Astuce :</span> Les révisions espacées améliorent ta mémorisation à long terme !
            </p>
          </div>
        )}
      </div>

      <BottomNav />

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
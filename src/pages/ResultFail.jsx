import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, XCircle, Crown, RotateCcw, BookOpen, Map, TrendingUp, AlertCircle, Zap } from "lucide-react";

export default function ResultFail() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const isBoss = useMemo(() => /^b\d+$/.test(String(lessonId)), [lessonId]);

  return (
    <div className={`min-h-screen pb-32 relative overflow-hidden ${
      isBoss 
        ? "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" 
        : "bg-gradient-to-br from-red-50 via-orange-50/50 to-neutral-50"
    }`}>
      {/* Fond animé */}
      {isBoss ? (
        <>
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(15)].map((_, idx) => (
              <div
                key={idx}
                className="absolute w-1 h-1 bg-red-400/30 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-md px-5 pt-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate("/map")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${
            isBoss
              ? "bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 text-neutral-200"
              : "bg-white/90 backdrop-blur-sm border border-neutral-200/50 text-neutral-700"
          }`}
        >
          <ChevronLeft size={18} />
          Retour Map
        </button>

        {/* Card principale */}
        <div className={`mt-6 rounded-3xl border-2 p-8 shadow-2xl relative overflow-hidden animate-scaleIn ${
          isBoss
            ? "border-red-600/30 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
            : "border-red-300/50 bg-white/95 backdrop-blur-sm shadow-red-200/50"
        }`}>
          {/* Effet de lueur */}
          <div className={`absolute inset-0 ${
            isBoss 
              ? "bg-gradient-to-r from-transparent via-red-600/10 to-transparent" 
              : "bg-gradient-to-br from-red-50/50 via-orange-50/30 to-red-50/50"
          } animate-shimmer-slow`} />

          <div className="relative z-10">
            {/* Header avec icône */}
            <div className="flex flex-col items-center mb-6">
              <div className={`h-20 w-20 rounded-3xl flex items-center justify-center shadow-2xl mb-4 ${
                isBoss
                  ? "bg-gradient-to-br from-red-600 to-red-800 shadow-red-600/50"
                  : "bg-gradient-to-br from-red-400 to-red-600 shadow-red-600/50"
              }`}>
                {isBoss ? (
                  <Crown size={40} className="text-white" />
                ) : (
                  <XCircle size={40} className="text-white" />
                )}
              </div>

              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold border-2 mb-3 ${
                isBoss
                  ? "bg-red-600/20 border-red-600/30 text-red-400"
                  : "bg-red-100 border-red-200 text-red-700"
              }`}>
                <AlertCircle size={16} />
                {isBoss ? "Boss non validé" : "Épreuve non validée"}
              </div>

              <h1 className={`text-3xl font-bold mb-3 ${
                isBoss ? "text-white" : "text-red-900"
              }`}>
                On recommence 💪
              </h1>
            </div>

            {/* Message principal */}
            <div className={`rounded-2xl border p-5 mb-6 ${
              isBoss
                ? "border-neutral-700 bg-neutral-800/50"
                : "border-red-200 bg-red-50/50"
            }`}>
              <div className="flex items-start gap-3">
                <TrendingUp size={20} className={isBoss ? "text-red-400 flex-shrink-0 mt-0.5" : "text-red-600 flex-shrink-0 mt-0.5"} />
                <div>
                  <p className={`text-sm font-bold mb-2 ${isBoss ? "text-white" : "text-red-900"}`}>
                    {isBoss ? "Comprendre pour réussir" : "Apprends et réessaye"}
                  </p>
                  <p className={`text-sm leading-6 ${
                    isBoss ? "text-neutral-300" : "text-red-800"
                  }`}>
                    {isBoss
                      ? "Le Boss vérifie ta compréhension globale du monde. Revois les points essentiels de chaque leçon, puis retente l'épreuve."
                      : "Relis attentivement l'histoire et ses points essentiels. Prends ton temps pour bien comprendre avant de refaire le quiz."}
                  </p>
                </div>
              </div>
            </div>

            {/* Conseils */}
            <div className={`rounded-2xl border p-5 mb-6 ${
              isBoss
                ? "border-yellow-600/30 bg-yellow-600/10"
                : "border-orange-200 bg-orange-50/50"
            }`}>
              <div className="flex items-start gap-3">
                <Zap size={18} className={`${isBoss ? "text-yellow-400" : "text-orange-600"} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={`text-xs font-bold mb-2 ${isBoss ? "text-yellow-400" : "text-orange-700"}`}>
                    💡 CONSEIL
                  </p>
                  <p className={`text-sm ${isBoss ? "text-neutral-300" : "text-orange-800"}`}>
                    {isBoss
                      ? "Un Boss se bat avec la stratégie, pas la chance. Prends le temps de réviser."
                      : "La compréhension vaut mieux que la mémorisation. Relis calmement."}
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="space-y-3">
              {!isBoss && (
                <button
                  onClick={() => navigate(`/lesson/${lessonId}`, { replace: true })}
                  className="w-full rounded-2xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 py-4 font-bold hover:border-blue-300 hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <BookOpen size={20} />
                  Revenir à la leçon
                </button>
              )}

              <button
                onClick={() => navigate(`/quiz/${lessonId}`, { replace: true })}
                className={`w-full rounded-2xl py-4 font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group flex items-center justify-center gap-2 ${
                  isBoss
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-red-600/30"
                    : "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-red-600/30"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  <RotateCcw size={20} />
                  Refaire le quiz
                </span>
              </button>

              <button
                onClick={() => navigate("/map", { replace: true })}
                className={`w-full rounded-2xl py-4 font-bold transition-all duration-200 hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2 ${
                  isBoss
                    ? "border-2 border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-750"
                    : "border-2 border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <Map size={20} />
                Retour à la Map
              </button>
            </div>

            {/* Message d'encouragement */}
            <div className="mt-6 text-center">
              <p className={`text-sm ${isBoss ? "text-neutral-400" : "text-neutral-600"}`}>
                {isBoss 
                  ? "Chaque échec est une leçon. Tu reviendras plus fort 💪"
                  : "L'apprentissage est un voyage. Continue d'avancer ! 🌟"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 4s ease-in-out infinite;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
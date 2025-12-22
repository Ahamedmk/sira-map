import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Crown, CheckCircle2, Sparkles } from "lucide-react";
import {
  addXp,
  loadProgress,
  saveProgress,
  markActiveDay,
  completeNode,
  scheduleReviewsForLesson,
  unlockBadge,
} from "../lib/progressStore.js";

export default function ResultSuccess() {
  const { lessonId } = useParams(); // l3 ou b1
  const navigate = useNavigate();

  const isBoss = useMemo(() => /^b\d+$/.test(String(lessonId)), [lessonId]);

  function applyAndGo() {
    let p = loadProgress();
    p = markActiveDay(p);

    // ✅ Marquer le node terminé (leçon ou boss)
    p = completeNode(p, lessonId);

    // ✅ XP
    p = addXp(p, isBoss ? 60 : 30);

    // ✅ Révisions (uniquement pour les leçons)
    if (!isBoss) {
      p = scheduleReviewsForLesson(p, lessonId);
    }

    // ✅ Badge (ex: boss_world_1 si b1)
    if (isBoss) {
      const badgeId = `boss_world_${lessonId.replace("b", "")}`;
      p = unlockBadge(p, badgeId);
    }

    saveProgress(p);
    navigate("/map", { replace: true });
  }

  return (
    <div className={["min-h-screen pb-10", isBoss ? "bg-neutral-950" : "bg-neutral-50"].join(" ")}>
      <div className="mx-auto max-w-md px-4 pt-10">
        <div className={["rounded-3xl border p-6", isBoss ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-white"].join(" ")}>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              {isBoss ? (
                <>
                  <Crown className="text-yellow-400" size={22} />
                  <p className="text-sm font-semibold text-white">Boss clear</p>
                </>
              ) : (
                <>
                  <CheckCircle2 className="text-emerald-600" size={22} />
                  <p className="text-sm font-semibold text-neutral-900">Épreuve validée</p>
                </>
              )}
            </div>

            {isBoss ? (
              <div className="text-xs text-neutral-300 inline-flex items-center gap-2">
                <Sparkles size={14} /> +60 XP
              </div>
            ) : (
              <div className="text-xs text-neutral-600 inline-flex items-center gap-2">
                <Sparkles size={14} /> +30 XP
              </div>
            )}
          </div>

          <h1 className={["mt-4 text-xl font-semibold", isBoss ? "text-white" : "text-neutral-900"].join(" ")}>
            {isBoss ? "Monde validé ✅" : "Tu peux continuer ✅"}
          </h1>

          <p className={["mt-2 text-sm leading-6", isBoss ? "text-neutral-300" : "text-neutral-600"].join(" ")}>
            {isBoss
              ? "Tu viens de valider la compréhension globale du monde. Tu peux passer au monde suivant."
              : "Bien joué. Tu as validé la leçon et tes révisions ont été planifiées automatiquement."}
          </p>

          <button
            onClick={applyAndGo}
            className={["mt-5 w-full rounded-2xl py-3 font-medium", isBoss ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"].join(" ")}
          >
            Retour à la Map
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonById } from "../data/map.mock.js";
import BadgeUnlockModal from "../components/BadgeUnlockModal.jsx";
import { evaluateBadges } from "../lib/badgesEngine.js";

import {
  addXp,
  loadProgress,
  markActiveDay,
  saveProgress,
  completeNode,
  scheduleReviewsForLesson,
} from "../lib/progressStore.js";

import { CheckCircle2, Sparkles } from "lucide-react";

export default function SuccessPage() {
    const [badgeOpen, setBadgeOpen] = useState(false);
    const [unlockedBadge, setUnlockedBadge] = useState(null);

  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);

  const [reward, setReward] = useState({ xp: 0 });

  useEffect(() => {
    // Récompense (MVP) : 30 XP leçon, 15 XP review, 60 XP boss
    const xp =
      lesson?.node?.type === "boss" ? 60 : lesson?.node?.type === "review" ? 15 : 30;

    let p = loadProgress();
    p = markActiveDay(p);
    p = addXp(p, xp);
    p = completeNode(p, lessonId);
    // On planifie des révisions seulement pour les "lesson" (pas pour boss/review)
if (lesson?.node?.type === "lesson") {
  p = scheduleReviewsForLesson(p, lessonId);
}

const res = evaluateBadges(p);
p = res.progress;

if (res.newlyUnlocked.length > 0) {
  setUnlockedBadge(res.newlyUnlocked[0]); // on affiche un seul badge à la fois (MVP)
  setBadgeOpen(true);
}

    saveProgress(p);

    setReward({ xp });
  }, [lessonId]); // eslint-disable-line

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
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 border flex items-center justify-center">
              <CheckCircle2 className="text-emerald-700" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Validé ✅</h1>
              <p className="text-sm text-neutral-600">{lesson.node.title}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border bg-neutral-50 p-4">
            <p className="text-sm text-neutral-600">Récompense</p>
            <p className="mt-1 text-2xl font-semibold inline-flex items-center gap-2">
              <Sparkles size={18} />
              +{reward.xp} XP
            </p>
          </div>

          <button
            onClick={() => navigate("/map", { replace: true })}
            className="mt-4 w-full rounded-xl bg-neutral-900 text-black py-3 font-medium"
          >
            Continuer
          </button>

          <button
            onClick={() => navigate("/review")}
            className="mt-2 w-full rounded-xl border bg-white py-3 font-medium"
          >
            Aller aux révisions
          </button>
        </div>
      </div>
      <BadgeUnlockModal
  open={badgeOpen}
  onOpenChange={setBadgeOpen}
  badge={unlockedBadge}
/>

    </div>
    
  );
}

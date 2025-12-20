import React from "react";
import BottomSheet from "./BottomSheet.jsx";

export default function BadgeUnlockModal({ open, onOpenChange, badge }) {
  if (!badge) return null;

  return (
    <BottomSheet
      open={open}
      onOpenChange={onOpenChange}
      title="Badge débloqué 🎉"
      description="Tu viens de gagner une récompense."
    >
      <div className="rounded-2xl border bg-neutral-50 p-4">
        <div className="flex items-start gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white border flex items-center justify-center text-2xl">
            {badge.icon}
          </div>
          <div>
            <p className="font-semibold">{badge.title}</p>
            <p className="text-sm text-neutral-600 mt-1">{badge.description}</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => onOpenChange(false)}
        className="mt-4 w-full rounded-xl bg-neutral-900 text-black py-3 font-medium"
      >
        Continuer
      </button>
    </BottomSheet>
  );
}

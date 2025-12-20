import React from "react";
import BottomNav from "../components/BottomNav.jsx";

export default function LeaderboardPage() {
  return (
    <div className="min-h-full bg-neutral-50 pb-24">
      <div className="mx-auto max-w-md px-4 pt-6">
        <h1 className="text-xl font-semibold">Classement</h1>
        <p className="text-sm text-neutral-600">Bientôt : Today / Week / Friends.</p>
        <div className="mt-4 rounded-2xl border bg-white p-4">
          <p className="font-medium">Ton rang</p>
          <p className="text-2xl font-semibold mt-1">#—</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

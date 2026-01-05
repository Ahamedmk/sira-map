import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, Timer, ArrowLeft, Lock } from "lucide-react";
import BottomNav from "../components/BottomNav.jsx";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { supabase } from "../lib/supabase.js";

function getWeekStartMondayISO(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = date.getUTCDay();
  const diff = day === 0 ? 6 : day - 1;
  date.setUTCDate(date.getUTCDate() - diff);
  return date.toISOString().slice(0, 10);
}

export default function WeeklyBossPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const weekStartISO = useMemo(() => getWeekStartMondayISO(new Date()), []);
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    let alive = true;

    async function run() {
      if (!user?.id) return;

      const { data } = await supabase
        .from("leaderboard_weekly_boss")
        .select("user_id")
        .eq("week_start", weekStartISO)
        .eq("user_id", user.id)
        .maybeSingle();

      if (!alive) return;
      setAttempted(!!data);
    }

    run();
    return () => {
      alive = false;
    };
  }, [user?.id, weekStartISO]);

  function start() {
  navigate("/weeklyboss/quiz");
}

  return (
    <div className="min-h-screen bg-neutral-50 pb-32">
      <div className="mx-auto max-w-md px-5 pt-8">
        <button
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-neutral-200 bg-white px-4 py-2.5 text-sm font-bold text-neutral-700 shadow-md"
          onClick={() => navigate("/leaderboard")}
        >
          <ArrowLeft size={16} />
          Retour classement
        </button>

        <div className="mt-6 rounded-3xl border-2 border-amber-200 bg-white p-6 shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold text-amber-900">
                <Crown size={14} />
                Boss hebdomadaire
              </div>
              <h1 className="mt-3 text-2xl font-extrabold text-neutral-900">
                1 tentative • 7 minutes
              </h1>
              <p className="mt-2 text-sm text-neutral-600">
                Même défi pour tout le monde. Score + temps.
              </p>
            </div>
            <div className="h-14 w-14 rounded-2xl bg-neutral-900 text-white grid place-items-center shadow-lg">
              <Timer size={22} />
            </div>
          </div>

          <button
            onClick={start}
            disabled={attempted}
            className={`mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold shadow-lg transition-all ${
              attempted
                ? "bg-neutral-100 text-neutral-400 border-2 border-neutral-200 cursor-not-allowed"
                : "bg-gradient-to-r from-neutral-900 to-neutral-800 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {attempted ? (
              <>
                <Lock size={16} /> Tentative utilisée
              </>
            ) : (
              <>
                <Crown size={16} /> Démarrer le Boss
              </>
            )}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

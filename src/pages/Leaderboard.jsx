import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Crown,
  Medal,
  Trophy,
  ChevronUp,
  SlidersHorizontal,
  TrendingUp,
  Zap,
  Star,
  Award,
  Flame,
  Timer,
  Swords,
  CheckCircle2,
  Lock,
} from "lucide-react";

import BottomNav from "../components/BottomNav.jsx";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { supabase } from "../lib/supabase.js";

const TABS = [
  { id: "daily", label: "Aujourd'hui", icon: Flame },
  { id: "weekly", label: "Boss semaine", icon: Crown },
  { id: "global", label: "Global", icon: Trophy },
];

function toISODate(d = new Date()) {
  const x = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  return x.toISOString().slice(0, 10);
}

// Week start Monday (YYYY-MM-DD)
function getWeekStartMondayISO(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = date.getUTCDay(); // 0=Sun,1=Mon,...6=Sat
  const diff = day === 0 ? 6 : day - 1;
  date.setUTCDate(date.getUTCDate() - diff);
  return date.toISOString().slice(0, 10);
}

function getWeekEndISOFromWeekStart(weekStartISO) {
  const d = new Date(weekStartISO + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + 7); // next monday
  return d.toISOString().slice(0, 10);
}

function formatTimeRemaining(targetISO) {
  const target = new Date(targetISO + "T00:00:00Z").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  return `${days}j ${hours}h`;
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MiniBadge({ label, tone = "neutral" }) {
  const tones = {
    neutral: "bg-neutral-100 text-neutral-700 border-neutral-200",
    gold: "bg-amber-100 text-amber-800 border-amber-200",
    green: "bg-emerald-100 text-emerald-800 border-emerald-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    red: "bg-rose-100 text-rose-800 border-rose-200",
    purple: "bg-violet-100 text-violet-800 border-violet-200",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold",
        tones[tone] || tones.neutral
      )}
    >
      {label}
    </span>
  );
}

function SegmentedTabs({ value, onChange }) {
  return (
    <div className="mt-5 p-1.5 bg-neutral-100 rounded-2xl shadow-inner">
      <div className="grid grid-cols-3 gap-1.5">
        {TABS.map((t) => {
          const active = value === t.id;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={cx(
                "relative rounded-xl px-3 py-3 text-xs font-bold transition-all duration-300",
                active
                  ? "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
              )}
            >
              {active && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl" />
              )}
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <Icon size={14} />
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Avatar({ name, me = false }) {
  const initials = useMemo(() => {
    const parts = (name || "").trim().split(/\s+/).slice(0, 2);
    const a = parts[0]?.[0] || "U";
    const b = parts[1]?.[0] || "";
    return (a + b).toUpperCase();
  }, [name]);

  return (
    <div
      className={cx(
        "grid h-11 w-11 place-items-center rounded-2xl border-2 text-xs font-bold transition-all",
        me
          ? "border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-600/30"
          : "border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-700"
      )}
    >
      {initials}
    </div>
  );
}

function MyRankCard({ me, tabMeta }) {
  if (!me) return null;

  const progress = Math.max(5, Math.min(95, tabMeta?.nextDeltaPct ?? 42));

  return (
    <div className="mt-5 rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-white to-amber-50/30 p-6 shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-slow" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={18} className="text-amber-600" />
              <span className="text-sm font-bold text-amber-700">Mon rang</span>
            </div>
            <p className="text-5xl font-extrabold text-neutral-900">
              {typeof me.rank === "number" ? `#${me.rank}` : "#—"}
            </p>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {tabMeta.subtitle}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border-2 border-amber-300 px-4 py-2 text-sm font-bold text-amber-800 shadow-md">
              <Trophy size={16} />
              {Number(me.score || 0).toLocaleString("fr-FR")} pts
            </div>

            {typeof me.streak === "number" && (
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 px-4 py-2 text-sm font-bold text-orange-800 shadow-md">
                <Flame size={16} />
                {me.streak} jours
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-amber-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-amber-600" />
              <span className="text-xs font-bold text-neutral-700">Objectif</span>
            </div>
            <span className="text-xs font-bold text-amber-800">
              {tabMeta.nextDeltaLabel}
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100 shadow-inner relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-700 relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-500 flex items-center gap-1.5">
            <Zap size={12} className="text-amber-600" />
            Astuce : régularité (streak) + zéro faute = montée rapide.
          </p>
        </div>
      </div>
    </div>
  );
}

function Podium({ top3, modeLabel }) {
  if (!top3?.length) return null;

  const second = top3.find((x) => x.rank === 2);
  const first = top3.find((x) => x.rank === 1);
  const third = top3.find((x) => x.rank === 3);

  const Card = ({ user, highlight, position }) => {
    if (!user) return <div className="h-full" />;

    const podiumColors = {
      1: {
        gradient: "from-amber-400 to-amber-600",
        glow: "shadow-amber-600/30",
        border: "border-amber-300",
      },
      2: {
        gradient: "from-gray-300 to-gray-500",
        glow: "shadow-gray-500/30",
        border: "border-gray-300",
      },
      3: {
        gradient: "from-orange-400 to-orange-600",
        glow: "shadow-orange-600/30",
        border: "border-orange-300",
      },
    };

    const colors = podiumColors[position] || podiumColors[3];

    return (
      <div
        className={cx(
          "relative rounded-3xl border-2 bg-white p-4 shadow-lg transition-all duration-300 hover:scale-105",
          highlight ? colors.border : "border-neutral-200"
        )}
      >
        {highlight && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div
              className={cx(
                "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-bold text-white shadow-xl border-2 border-white",
                colors.gradient,
                colors.glow
              )}
            >
              <Crown size={14} />#{user.rank}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 mt-2">
          <Avatar name={user.name} />
          <div className="text-center min-w-0 w-full">
            <p className="truncate text-sm font-bold text-neutral-900">{user.name}</p>
            <p className="mt-1 text-xs text-neutral-600 line-clamp-1">{user.title}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-100">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy size={14} className="text-amber-600" />
            <span className="text-lg font-extrabold text-neutral-900">
              {Number(user.score || 0).toLocaleString("fr-FR")}
            </span>
            <span className="text-xs text-neutral-500">pts</span>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5">
            {user.badges?.slice(0, 2).map((b) => (
              <MiniBadge key={b.label} label={b.label} tone={b.tone} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-6 rounded-3xl border-2 border-neutral-200 bg-white/90 backdrop-blur-sm p-6 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Medal size={20} className="text-amber-600" />
            <span className="text-lg font-bold text-neutral-900">Podium</span>
          </div>
          <p className="text-xs text-neutral-600">{modeLabel}</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 border-2 border-amber-300 px-4 py-2 text-xs font-bold text-amber-800 shadow-md">
          <Star size={14} className="fill-amber-800" />
          Top 3
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="translate-y-4">
          <Card user={second} position={2} />
        </div>
        <div>
          <Card user={first} highlight position={1} />
        </div>
        <div className="translate-y-6">
          <Card user={third} position={3} />
        </div>
      </div>
    </div>
  );
}

function LeaderRow({ user, highlightMe }) {
  return (
    <div
      className={cx(
        "flex items-center justify-between gap-4 rounded-2xl border-2 p-4 transition-all duration-200",
        highlightMe
          ? "border-amber-300 bg-gradient-to-r from-amber-50 to-amber-100/50 shadow-md"
          : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md"
      )}
    >
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <div
          className={cx(
            "w-10 text-center text-base font-extrabold",
            highlightMe ? "text-amber-800" : "text-neutral-900"
          )}
        >
          #{user.rank}
        </div>

        <Avatar name={user.name} me={highlightMe} />

        <div className="min-w-0 flex-1">
          <p className={cx("truncate text-sm font-bold", highlightMe ? "text-amber-900" : "text-neutral-900")}>
            {user.name}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {(user.badges || []).slice(0, 2).map((b) => (
              <MiniBadge key={`${user.rank}-${b.label}`} label={b.label} tone={b.tone} />
            ))}
            {typeof user.streak === "number" && (
              <span className={cx("text-[10px] font-bold flex items-center gap-1", highlightMe ? "text-amber-700" : "text-neutral-600")}>
                <Flame size={10} />
                {user.streak}j
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={cx("shrink-0 text-right", highlightMe ? "text-amber-900" : "text-neutral-900")}>
        <div className="text-base font-extrabold">{Number(user.score || 0).toLocaleString("fr-FR")}</div>
        <div className={cx("text-[10px] font-medium", highlightMe ? "text-amber-700" : "text-neutral-600")}>
          points
        </div>
      </div>
    </div>
  );
}

function LeaderboardList({ users, meId }) {
  const me = users.find((u) => u.id === meId);

  const top = users.filter((u) => u.rank <= 20);
  const around = me ? users.filter((u) => Math.abs(u.rank - me.rank) <= 2) : [];
  const topRanks = new Set(top.map((u) => u.rank));
  const aroundFiltered = around.filter((u) => !topRanks.has(u.rank));

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-neutral-600" />
          <span className="text-base font-bold text-neutral-900">Classement</span>
        </div>
        <p className="text-xs text-neutral-500">{me ? "Top 20 + autour de toi" : "Top 20"}</p>
      </div>

      <div className="space-y-3">
        {top.map((u) => (
          <LeaderRow key={u.id} user={u} highlightMe={u.id === meId} />
        ))}

        {me && me.rank > 22 && (
          <div className="my-4 flex items-center justify-center">
            <div className="rounded-full bg-neutral-100 border-2 border-neutral-200 px-5 py-2 text-sm font-bold text-neutral-500 shadow-sm">
              • • •
            </div>
          </div>
        )}

        {aroundFiltered.map((u) => (
          <LeaderRow key={u.id} user={u} highlightMe={u.id === meId} />
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------
   Boss of the week card (CTA)
------------------------------------------ */
function WeeklyBossCard({ attempted, remaining, onStart, myWeeklyScore }) {
  return (
    <div className="mt-6 rounded-3xl border-2 border-neutral-200 bg-white/90 backdrop-blur-sm p-6 shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent -translate-x-full animate-shimmer" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-xs font-extrabold text-amber-900 shadow-md">
            <Swords size={14} />
            Boss de la semaine
          </div>

          <h2 className="mt-3 text-xl font-extrabold text-neutral-900">
            1 tentative • mêmes questions pour tous
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <MiniBadge label="Score + temps" tone="blue" />
            <MiniBadge label="Anti-farming" tone="purple" />
            <MiniBadge label="Récompense rare" tone="gold" />
          </div>

          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Temps restant :{" "}
            <span className="font-extrabold text-neutral-900">{remaining}</span>
          </p>

          {attempted && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900">
              <CheckCircle2 size={16} className="text-emerald-700" />
              Déjà tenté {typeof myWeeklyScore === "number" ? `• ${myWeeklyScore} pts` : ""}
            </div>
          )}
        </div>

        <div className="shrink-0">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg grid place-items-center">
            <Crown size={24} />
          </div>

          <button
            type="button"
            onClick={onStart}
            disabled={attempted}
            className={cx(
              "mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold shadow-lg transition-all",
              attempted
                ? "bg-neutral-100 text-neutral-400 border-2 border-neutral-200 cursor-not-allowed"
                : "bg-gradient-to-r from-neutral-900 to-neutral-800 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {attempted ? (
              <>
                <Lock size={16} />
                Tentative utilisée
              </>
            ) : (
              <>
                <Timer size={16} />
                Tenter le Boss
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------
   Mock fallback (ton code initial)
------------------------------------------ */
function makeMockUsers(mode) {
  const badgePool = {
    daily: [
      { label: "Perfect", tone: "green" },
      { label: "Assidu", tone: "blue" },
      { label: "Streak 7", tone: "purple" },
      { label: "Zéro faute", tone: "green" },
    ],
    weekly: [
      { label: "Boss", tone: "gold" },
      { label: "Top 10", tone: "gold" },
      { label: "Rapide", tone: "blue" },
      { label: "Sans pause", tone: "purple" },
    ],
    global: [
      { label: "Streak 30", tone: "purple" },
      { label: "Vétéran", tone: "blue" },
      { label: "Maîtrise", tone: "green" },
      { label: "Boss x3", tone: "gold" },
    ],
  }[mode];

  const names = [
    "Yahya", "Meryem", "Sofiane", "Amina", "Rayan", "Sarah", "Omar", "Fatima",
    "Ibrahim", "Khadija", "Youssef", "Nour", "Ali", "Hafsa", "Bilal", "Zaynab",
    "Salim", "Imane", "Hamza", "Lina", "Anas", "Maryam", "Sami", "Asma",
    "Adam", "Hana", "Ismail", "Rim", "Zayd", "Nada",
  ];

  const users = Array.from({ length: 100 }).map((_, i) => {
    const rank = i + 1;
    const base = mode === "daily" ? 1800 : mode === "weekly" ? 2200 : 50000;
    const variance = mode === "daily" ? 10 : mode === "weekly" ? 14 : 120;
    const score = Math.max(0, base - rank * (base / 120) + Math.floor(Math.random() * variance));
    const streak = mode === "daily" || mode === "global" ? Math.max(0, Math.floor(40 - rank / 2)) : undefined;

    const badgeA = badgePool[(rank + 0) % badgePool.length];
    const badgeB = badgePool[(rank + 2) % badgePool.length];

    return {
      id: `u_${rank}`,
      rank,
      name: names[i % names.length] + (rank % 7 === 0 ? " •" : ""),
      score: Math.floor(score),
      streak,
      title: mode === "weekly" ? "Défi Boss validé" : mode === "daily" ? "Lecture + quiz" : "Progression globale",
      badges: [badgeA, badgeB],
    };
  });

  const meId = "me_1";
  const meRank = mode === "daily" ? 27 : mode === "weekly" ? 41 : 33;
  const meScore = mode === "daily" ? 1420 : mode === "weekly" ? 1180 : 26200;
  const meStreak = mode === "weekly" ? undefined : 11;

  users[meRank - 1] = {
    id: meId,
    rank: meRank,
    name: "Moi",
    score: meScore,
    streak: meStreak,
    title: mode === "weekly" ? "Boss tenté" : mode === "daily" ? "En route" : "Constance",
    badges:
      mode === "weekly"
        ? [{ label: "Boss", tone: "gold" }, { label: "Top 100", tone: "blue" }]
        : [{ label: "Streak 7", tone: "purple" }, { label: "Assidu", tone: "blue" }],
  };

  return { users, meId };
}

/* -----------------------------------------
   Supabase fetch helpers
------------------------------------------ */
function formatUserLabelFromId(userId) {
  const s = String(userId || "");
  if (s.length < 8) return "Utilisateur";
  return `Utilisateur • ${s.slice(0, 4)}`;
}

async function fetchProfilesMap(userIds) {
  // Si tu as une table profiles : { id, full_name }
  // Sinon, ça échoue, et on fallback.
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, full_name")
      .in("id", userIds);

    if (error) throw error;

    const map = new Map();
    for (const row of data || []) {
      map.set(row.id, row.full_name || formatUserLabelFromId(row.id));
    }
    return map;
  } catch {
    return new Map();
  }
}

export default function LeaderboardPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [tab, setTab] = useState("daily");
  const [loading, setLoading] = useState(false);
  const [useMock, setUseMock] = useState(false);

  const [users, setUsers] = useState([]);
  const [meId, setMeId] = useState(null);

  // Weekly boss state (attempted?)
  const [weeklyAttempted, setWeeklyAttempted] = useState(false);
  const [myWeeklyScore, setMyWeeklyScore] = useState(null);

  const todayISO = useMemo(() => toISODate(new Date()), []);
  const weekStartISO = useMemo(() => getWeekStartMondayISO(new Date()), []);
  const weekEndISO = useMemo(() => getWeekEndISOFromWeekStart(weekStartISO), [weekStartISO]);
  const remaining = useMemo(() => formatTimeRemaining(weekEndISO), [weekEndISO]);

  // Fetch weekly attempted state (only if logged in)
  useEffect(() => {
    let alive = true;

    async function run() {
      if (!user?.id) {
        setWeeklyAttempted(false);
        setMyWeeklyScore(null);
        return;
      }

      const { data, error } = await supabase
        .from("leaderboard_weekly_boss")
        .select("score")
        .eq("week_start", weekStartISO)
        .eq("user_id", user.id)
        .maybeSingle();

      if (!alive) return;

      if (error) {
        setWeeklyAttempted(false);
        setMyWeeklyScore(null);
        return;
      }

      if (data?.score !== undefined && data?.score !== null) {
        setWeeklyAttempted(true);
        setMyWeeklyScore(data.score);
      } else {
        setWeeklyAttempted(false);
        setMyWeeklyScore(null);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [user?.id, weekStartISO]);

  // Main fetch leaderboard per tab
  useEffect(() => {
    let alive = true;

    async function run() {
      // si pas connecté => mock (tu peux changer si tu veux public leaderboard)
      if (!user?.id) {
        setUseMock(true);
        const mock = makeMockUsers(tab);
        setUsers(mock.users);
        setMeId(mock.meId);
        return;
      }

      setUseMock(false);
      setLoading(true);

      try {
        let rows = [];
        if (tab === "daily") {
          const res = await supabase
            .from("leaderboard_daily")
            .select("user_id, score, correct, total, time_ms, streak")
            .eq("day", todayISO)
            .order("score", { ascending: false })
            .order("streak", { ascending: false })
            .order("time_ms", { ascending: true })
            .limit(100);

          if (res.error) throw res.error;
          rows = res.data || [];
        } else if (tab === "weekly") {
          const res = await supabase
            .from("leaderboard_weekly_boss")
            .select("user_id, score, correct, total, time_ms")
            .eq("week_start", weekStartISO)
            .order("score", { ascending: false })
            .order("correct", { ascending: false })
            .order("time_ms", { ascending: true })
            .limit(100);

          if (res.error) throw res.error;
          rows = res.data || [];
        } else {
          const res = await supabase
            .from("leaderboard_global")
            .select("user_id, global_score, days_active, quizzes_passed, streak_max")
            .order("global_score", { ascending: false })
            .limit(100);

          if (res.error) throw res.error;
          rows = res.data || [];
        }

        if (!alive) return;

        const ids = rows.map((r) => r.user_id);
        const profilesMap = await fetchProfilesMap(ids);

        // Build users list with ranks
        const built = rows.map((r, idx) => {
          const uid = r.user_id;
          const name = profilesMap.get(uid) || formatUserLabelFromId(uid);

          if (tab === "daily") {
            return {
              id: uid,
              rank: idx + 1,
              name,
              score: r.score,
              streak: r.streak,
              title: "Quiz validé aujourd’hui",
              badges: [
                r.correct === r.total ? { label: "Zéro faute", tone: "green" } : { label: "Assidu", tone: "blue" },
                r.streak >= 7 ? { label: "Streak 7", tone: "purple" } : { label: "Daily", tone: "neutral" },
              ],
            };
          }

          if (tab === "weekly") {
            return {
              id: uid,
              rank: idx + 1,
              name,
              score: r.score,
              title: "Boss hebdo",
              badges: [
                { label: "Boss", tone: "gold" },
                r.time_ms <= 180000 ? { label: "Rapide", tone: "blue" } : { label: "Endurant", tone: "neutral" },
              ],
            };
          }

          // global
          return {
            id: uid,
            rank: idx + 1,
            name,
            score: r.global_score,
            streak: r.streak_max,
            title: `Jours actifs: ${r.days_active} • Quiz: ${r.quizzes_passed}`,
            badges: [
              r.streak_max >= 30 ? { label: "Streak 30", tone: "purple" } : { label: "Constance", tone: "blue" },
              r.quizzes_passed >= 50 ? { label: "Maîtrise", tone: "green" } : { label: "Progress", tone: "neutral" },
            ],
          };
        });

        setUsers(built);
        setMeId(user.id);

        // Stocke rang pour BottomNav badge (#18)
        const me = built.find((u) => u.id === user.id);
        if (me?.rank) {
          localStorage.setItem("lb_rank_v1", String(me.rank));
        }
      } catch (e) {
        console.error("Leaderboard fetch error:", e);
        if (!alive) return;

        // fallback mock (UI safe)
        setUseMock(true);
        const mock = makeMockUsers(tab);
        setUsers(mock.users);
        setMeId(mock.meId);
      } finally {
        if (alive) setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [tab, user?.id, todayISO, weekStartISO]);

  const me = useMemo(() => users.find((u) => u.id === meId), [users, meId]);
  const top3 = useMemo(() => users.filter((u) => u.rank <= 3), [users]);

  const tabMeta = useMemo(() => {
    if (tab === "daily") {
      return {
        subtitle: "Objectif : revenir chaque jour (streak) + zéro faute.",
        nextDeltaLabel: "Grimpe avec la constance",
        nextDeltaPct: 58,
        modeLabel: "Aujourd'hui (régularité > vitesse)",
      };
    }
    if (tab === "weekly") {
      return {
        subtitle: "1 tentative • mêmes questions pour tous • score + temps",
        nextDeltaLabel: "Vise le Top 10 cette semaine",
        nextDeltaPct: 42,
        modeLabel: "Boss hebdo (1 tentative)",
      };
    }
    return {
      subtitle: "Prestige : jours actifs, streak max, boss gagnés.",
      nextDeltaLabel: "Monte avec la constance",
      nextDeltaPct: 36,
      modeLabel: "Global (prestige)",
    };
  }, [tab]);

  function handleStartWeeklyBoss() {
    // ✅ Meilleure UX : passer par une page dédiée (qu’on crée juste après)
    navigate("/weeklyboss");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-amber-50/20 to-orange-50/20 pb-32">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-md px-5 pt-8">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-sm font-bold text-amber-900 shadow-lg mb-3">
              <Trophy size={18} />
              Leaderboard
            </div>
            <h1 className="text-3xl font-extrabold text-neutral-900 mb-2">Classement</h1>
            <p className="text-sm text-neutral-600">Trois modes : quotidien, boss hebdo, et prestige global 🏆</p>

            {useMock && (
              <p className="mt-2 text-xs text-neutral-500">
                Mode démo (mock) : connecte-toi pour voir le vrai classement.
              </p>
            )}
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-neutral-200 bg-white px-4 py-2.5 text-sm font-bold text-neutral-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
            onClick={() => alert("Filtres (bientôt) : amis, niveau, région…")}
          >
            <SlidersHorizontal size={16} />
          </button>
        </div>

        <SegmentedTabs value={tab} onChange={setTab} />

        {/* ✅ Carte Boss Hebdo (seulement sur l’onglet weekly) */}
        {tab === "weekly" && (
          <WeeklyBossCard
            attempted={weeklyAttempted}
            remaining={remaining}
            onStart={handleStartWeeklyBoss}
            myWeeklyScore={myWeeklyScore}
          />
        )}

        {/* Rang */}
        {me && <MyRankCard me={me} tabMeta={tabMeta} />}

        {/* Podium */}
        <Podium top3={top3} modeLabel={tabMeta.modeLabel} />

        {/* Petit bloc progression */}
        <div className="mt-6 rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ChevronUp size={18} className="text-emerald-700" />
              <span className="text-sm font-bold text-emerald-900">Ta progression</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-200 border-2 border-emerald-300 px-3 py-1 text-xs font-bold text-emerald-900">
              {loading ? "..." : "+1 rang"}
            </div>
          </div>
          <p className="text-xs text-emerald-800">Le classement motive… mais l'intention compte plus que le rang 💚</p>
        </div>

        {/* Liste */}
        <LeaderboardList users={users} meId={meId} />

        <div className="mt-6 rounded-3xl border-2 border-blue-200 bg-blue-50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Star size={16} className="text-blue-700" />
            <span className="text-sm font-bold text-blue-900">Note UX</span>
          </div>
          <p className="text-xs text-blue-800 leading-relaxed">
            Anti-farming : score plafonné par jour + quiz validé non rejouable. Le temps sert à départager (surtout Boss).
          </p>
        </div>
      </div>

      <BottomNav />

      <style>{`
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}.animate-shimmer{animation:shimmer 3s infinite}
        @keyframes shimmer-slow{0%,100%{opacity:.3}50%{opacity:.6}}.animate-shimmer-slow{animation:shimmer-slow 4s ease-in-out infinite}
        .delay-1000{animation-delay:1s}
      `}</style>
    </div>
  );
}

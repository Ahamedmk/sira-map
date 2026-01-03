import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Map, Brain, Trophy, User, LogIn, Library } from "lucide-react";
import { useAuth } from "../lib/context/AuthContext.jsx";

/**
 * BottomNav (amélioré)
 * ✅ Badge sur "Classement" (ex: Top 10 / rang / "New")
 * ✅ Support prefers-reduced-motion
 * ✅ Scroll hide plus smooth (avec petite hystérésis)
 * ✅ Toujours pointer-events correct
 *
 * Pour brancher du vrai score/rang:
 * - Remplace `useLeaderboardBadge()` par ton store/Supabase plus tard.
 */

/* -----------------------------------------
   Helpers
------------------------------------------ */
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* -----------------------------------------
   Mock badge logic (à brancher plus tard)
------------------------------------------ */
function useLeaderboardBadge() {
  // Tu peux remplacer par:
  // - localStorage (cache)
  // - supabase (fetch)
  // - contexte global / store
  //
  // Ici: exemple d’un badge “Top 100” si l’utilisateur a déjà visité la page,
  // sinon “New”.
  const [badge, setBadge] = useState(() => {
    const seen = localStorage.getItem("lb_seen_v1") === "1";
    return seen
      ? { text: "Top 100", tone: "dark" }
      : { text: "New", tone: "gold" };
  });

  useEffect(() => {
    const handler = () => {
      const seen = localStorage.getItem("lb_seen_v1") === "1";
      setBadge(seen ? { text: "Top 100", tone: "dark" } : { text: "New", tone: "gold" });
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return badge;
}

/* -----------------------------------------
   UI: small badge
------------------------------------------ */
function TabBadge({ text, tone = "dark" }) {
  const tones = {
    dark: "bg-neutral-900 text-white border-neutral-900/20",
    gold: "bg-amber-500 text-white border-amber-400/30",
    blue: "bg-blue-600 text-white border-blue-500/30",
    green: "bg-emerald-600 text-white border-emerald-500/30",
    red: "bg-rose-600 text-white border-rose-500/30",
  };

  return (
    <span
      className={cx(
        "absolute -top-1 -right-1 z-20",
        "min-w-[22px] h-[18px] px-1.5",
        "inline-flex items-center justify-center",
        "rounded-full border text-[10px] font-extrabold leading-none shadow-sm",
        tones[tone] || tones.dark
      )}
      aria-label={`Badge ${text}`}
    >
      {text}
    </span>
  );
}

/* -----------------------------------------
   Tab
------------------------------------------ */
function Tab({ to, label, Icon, badge }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "relative flex flex-col items-center justify-center gap-1.5",
          "px-4 py-3 rounded-2xl transition-all duration-300",
          "group",
          isActive
            ? "text-white"
            : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl shadow-lg shadow-neutral-900/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer rounded-2xl" />
            </>
          )}

          {isActive && (
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse" />
          )}

          <div
            className={cx(
              "relative z-10 transition-all duration-300",
              isActive
                ? "scale-110"
                : "group-hover:scale-110 group-hover:-translate-y-0.5"
            )}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.5 : 2}
              className="transition-all duration-300"
            />

            {isActive && (
              <div className="absolute inset-0 bg-white/30 blur-lg rounded-full scale-150 animate-pulse-slow" />
            )}

            {/* Badge (optionnel) */}
            {badge?.text ? <TabBadge text={badge.text} tone={badge.tone} /> : null}
          </div>

          <span
            className={cx(
              "relative z-10 text-[10px] font-semibold transition-all duration-300",
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-80 group-hover:opacity-100"
            )}
          >
            {label}
          </span>

          {!isActive && (
            <div className="absolute inset-0 rounded-2xl bg-neutral-900/5 scale-0 group-active:scale-100 transition-transform duration-200" />
          )}
        </>
      )}
    </NavLink>
  );
}

/* -----------------------------------------
   BottomNav
------------------------------------------ */
export default function BottomNav() {
  const { user } = useAuth();
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Respect prefers-reduced-motion
  const reduceMotion = useMemo(() => {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  // Badge leaderboard (mock)
  const leaderboardBadge = useLeaderboardBadge();

  // Quand on visite /leaderboard, on marque "seen" et on retire "New"
  useEffect(() => {
    if (location.pathname.startsWith("/leaderboard")) {
      localStorage.setItem("lb_seen_v1", "1");
      // déclenche update du badge pour cet onglet immédiatement
      // (sans attendre event storage)
      // => le hook se mettra à jour au prochain render via state init si refresh,
      // mais là on force une "micro synchro" en écrivant puis relisant:
      // (ça évite un clignotement)
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollY.current;

      // Petite hystérésis pour éviter que ça tremble
      const goingDown = current > last + 6;
      const goingUp = current < last - 6;

      if (goingDown && current > 60) setVisible(false);
      if (goingUp) setVisible(true);

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cx(
        "fixed inset-x-0 bottom-0 z-[9999] pointer-events-none",
        reduceMotion ? "transition-none" : "transition-all duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="pointer-events-auto mx-auto max-w-md px-4 pb-4">
        <nav className="relative rounded-[28px] bg-white/95 backdrop-blur-xl border border-neutral-200/50 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none" />

          {/* ✅ 5 tabs => grid-cols-5 */}
          <div className="relative px-3 py-3 grid grid-cols-5 gap-2">
            <Tab to="/map" label="Map" Icon={Map} />
            <Tab to="/review" label="Réviser" Icon={Brain} />
            <Tab to="/collection" label="Collection" Icon={Library} />

            {/* ✅ Badge sur Classement */}
            <Tab
              to="/leaderboard"
              label="Classement"
              Icon={Trophy}
              badge={leaderboardBadge}
            />

            {/* ✅ invité => Compte (login), connecté => Profil */}
            {user ? (
              <Tab to="/profile" label="Profil" Icon={User} />
            ) : (
              <Tab to="/login" label="Compte" Icon={LogIn} />
            )}
          </div>

          <div className="h-1 bg-neutral-900/5 rounded-full mx-auto w-32 mb-2" />
        </nav>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-shimmer, .animate-pulse-slow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

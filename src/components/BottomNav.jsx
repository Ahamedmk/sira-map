import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Map, Brain, Trophy, User, LogIn } from "lucide-react";
import { useAuth } from "../lib/context/AuthContext.jsx";

function Tab({ to, label, Icon }) {
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
            className={`relative z-10 transition-all duration-300 ${
              isActive
                ? "scale-110"
                : "group-hover:scale-110 group-hover:-translate-y-0.5"
            }`}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.5 : 2}
              className="transition-all duration-300"
            />

            {isActive && (
              <div className="absolute inset-0 bg-white/30 blur-lg rounded-full scale-150 animate-pulse-slow" />
            )}
          </div>

          <span
            className={`relative z-10 text-[10px] font-semibold transition-all duration-300 ${
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-80 group-hover:opacity-100"
            }`}
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

export default function BottomNav() {
  const { user } = useAuth();

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[9999] pointer-events-none transition-all duration-500 ease-out
      ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="pointer-events-auto mx-auto max-w-md px-4 pb-4">
        <nav className="relative rounded-[28px] bg-white/95 backdrop-blur-xl border border-neutral-200/50 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none" />

          <div className="relative px-3 py-3 grid grid-cols-4 gap-2">
            <Tab to="/map" label="Map" Icon={Map} />
            <Tab to="/review" label="Réviser" Icon={Brain} />
            <Tab to="/leaderboard" label="Classement" Icon={Trophy} />

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
      `}</style>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { Map, Brain, Trophy, User } from "lucide-react";

function Tab({ to, label, Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex flex-col items-center justify-center gap-1",
          "px-3 py-2 rounded-xl transition",
          isActive ? "text-black bg-neutral-100" : "text-neutral-600",
        ].join(" ")
      }
    >
      <Icon size={20} />
      <span className="text-[11px]">{label}</span>
    </NavLink>
  );
}

export default function BottomNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999]">
      <nav className="mx-auto max-w-md border-t bg-white shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
        <div className="px-3 py-2 grid grid-cols-4 gap-2">
          <Tab to="/map" label="Map" Icon={Map} />
          <Tab to="/review" label="Réviser" Icon={Brain} />
          <Tab to="/leaderboard" label="Classement" Icon={Trophy} />
          <Tab to="/profile" label="Profil" Icon={User} />
        </div>
      </nav>
    </div>
  );
}

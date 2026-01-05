import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Trophy, ArrowLeft, BookOpen, Link2 } from "lucide-react";

export default function WeeklyBossResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen bg-neutral-50 p-6">
        <button onClick={() => navigate("/leaderboard")} className="rounded-xl border bg-white px-4 py-2 font-bold">
          Retour
        </button>
        <p className="mt-4">Aucun résultat.</p>
      </div>
    );
  }

  const { theme, correct, total, pct, timeMs, score, questions } = state;

  const sec = Math.round(timeMs / 1000);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="mx-auto max-w-md px-5 pt-8">
        <button
          onClick={() => navigate("/leaderboard")}
          className="inline-flex items-center gap-2 rounded-2xl border bg-white px-4 py-2.5 text-sm font-bold text-neutral-700 shadow"
        >
          <ArrowLeft size={16} /> Retour classement
        </button>

        <div className="mt-6 rounded-3xl border-2 border-amber-200 bg-white p-6 shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-extrabold text-amber-800">
            <Trophy size={14} /> Résultat Boss hebdo
          </div>

          <h1 className="mt-3 text-xl font-extrabold text-neutral-900">{theme}</h1>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border bg-neutral-50 p-3">
              <p className="text-[10px] font-bold text-neutral-500">Score</p>
              <p className="text-lg font-extrabold">{score}</p>
            </div>
            <div className="rounded-2xl border bg-neutral-50 p-3">
              <p className="text-[10px] font-bold text-neutral-500">Réussite</p>
              <p className="text-lg font-extrabold">{correct}/{total}</p>
            </div>
            <div className="rounded-2xl border bg-neutral-50 p-3">
              <p className="text-[10px] font-bold text-neutral-500">Temps</p>
              <p className="text-lg font-extrabold">{mm}:{ss}</p>
            </div>
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            Pour prouver que rien n’est inventé, voici les sources question par question :
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="rounded-3xl border bg-white p-5 shadow">
              <p className="text-sm font-extrabold text-neutral-900">{q.question}</p>
              <p className="mt-2 text-xs text-neutral-600">{q.explanation}</p>

              <div className="mt-3 rounded-2xl border bg-neutral-50 p-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-neutral-700">
                  <BookOpen size={14} />
                  Sources
                </div>
                <ul className="mt-2 space-y-2">
                  {q.sources.map((s, i) => (
                    <li key={i} className="text-xs text-neutral-600 flex gap-2">
                      <Link2 size={12} className="mt-0.5 text-neutral-400" />
                      <span>
                        <span className="font-bold">{s.work}</span> — {s.ref}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

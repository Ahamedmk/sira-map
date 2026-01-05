import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, Timer, ArrowLeft, CheckCircle2, XCircle, BookOpen, Link2 } from "lucide-react";
import { WEEKLY_BOSS } from "../data/weeklyBossQuestions.js";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { supabase } from "../lib/supabase.js";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function WeeklyBossQuizPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const boss = WEEKLY_BOSS.current;
  const weekStart = boss.weekStart;
  const questions = boss.questions;
  const total = questions.length;

  const [attempted, setAttempted] = useState(false);
  const [checkingAttempt, setCheckingAttempt] = useState(true);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const correctRef = useRef(0);
  const [correctCount, setCorrectCount] = useState(0);

  const startMsRef = useRef(Date.now());
  const [elapsedMs, setElapsedMs] = useState(0);

  const timeLimitMs = boss.timeLimitSec * 1000;
  const remainingMs = Math.max(0, timeLimitMs - elapsedMs);
  const timeUp = remainingMs <= 0;

  const q = questions[idx];

  // 1) Check already attempted (server)
  useEffect(() => {
    let alive = true;

    async function run() {
      if (!user?.id) {
        setAttempted(false);
        setCheckingAttempt(false);
        return;
      }

      const { data, error } = await supabase
        .from("leaderboard_weekly_boss")
        .select("user_id")
        .eq("week_start", weekStart)
        .eq("user_id", user.id)
        .maybeSingle();

      if (!alive) return;

      if (error) {
        setAttempted(false);
      } else {
        setAttempted(!!data);
      }
      setCheckingAttempt(false);
    }

    run();
    return () => {
      alive = false;
    };
  }, [user?.id, weekStart]);

  // 2) Timer loop
  useEffect(() => {
    if (attempted) return;
    if (checkingAttempt) return;

    const t = setInterval(() => {
      setElapsedMs(Date.now() - startMsRef.current);
    }, 250);

    return () => clearInterval(t);
  }, [attempted, checkingAttempt]);

  // Auto-finish when time is up
  useEffect(() => {
    if (checkingAttempt) return;
    if (attempted) return;
    if (!timeUp) return;

    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeUp, checkingAttempt, attempted]);

  const passPct = boss.passPct ?? 80;
  const pct = useMemo(() => {
    if (!total) return 0;
    return Math.round((correctCount / total) * 100);
  }, [correctCount, total]);

  function formatClock(ms) {
    const s = Math.ceil(ms / 1000);
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  const isCorrect = selected !== null && selected === q.correctIndex;

  function validate() {
    if (selected === null) return;

    if (isCorrect) {
      correctRef.current += 1;
      setCorrectCount(correctRef.current);
    }

    setShowFeedback(true);
  }

  async function finish() {
    // éviter double finish
    if (attempted) return;

    const timeMs = Math.max(0, Date.now() - startMsRef.current);

    // Score hebdo : même formule que SQL (pour cohérence affichage)
    const wrong = Math.max(total - correctRef.current, 0);
    const timePenalty = Math.floor((timeMs / 1000) / 5);
    const finalScore = (correctRef.current * 10) - timePenalty - (wrong * 5);

    // Push Supabase (si connecté)
    try {
      if (user?.id) {
        await supabase.rpc("submit_weekly_boss_score", {
          p_week_start: weekStart,
          p_user_id: user.id,
          p_correct: correctRef.current,
          p_total: total,
          p_time_ms: timeMs,
        });
      }
    } catch (e) {
      console.error("submit_weekly_boss_score failed:", e);
      // On continue quand même (résultat local)
    }

    // Navigate résultat (page simple inline)
    navigate("/weekly-boss/result", {
      replace: true,
      state: {
        weekStart,
        theme: boss.theme,
        correct: correctRef.current,
        total,
        pct: Math.round((correctRef.current / total) * 100),
        timeMs,
        score: finalScore,
        questions,
      },
    });
  }

  function next() {
    if (idx + 1 >= total) {
      finish();
      return;
    }
    setSelected(null);
    setShowFeedback(false);
    setIdx((x) => x + 1);
  }

  if (checkingAttempt) {
    return (
      <div className="min-h-screen bg-neutral-50 pb-24">
        <div className="mx-auto max-w-md px-5 pt-8">
          <div className="rounded-3xl border bg-white p-6 shadow">
            <p className="font-bold text-neutral-900">Chargement…</p>
            <p className="text-sm text-neutral-600">Vérification de ta tentative.</p>
          </div>
        </div>
      </div>
    );
  }

  if (attempted) {
    return (
      <div className="min-h-screen bg-neutral-50 pb-24">
        <div className="mx-auto max-w-md px-5 pt-8">
          <button
            onClick={() => navigate("/leaderboard")}
            className="inline-flex items-center gap-2 rounded-2xl border bg-white px-4 py-2.5 text-sm font-bold text-neutral-700 shadow"
          >
            <ArrowLeft size={16} /> Retour
          </button>

          <div className="mt-6 rounded-3xl border-2 border-amber-200 bg-white p-6 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-extrabold text-amber-800">
              <Crown size={14} /> Boss hebdo
            </div>
            <h1 className="mt-3 text-2xl font-extrabold text-neutral-900">
              Tentative déjà utilisée ✅
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Tu pourras retenter la semaine prochaine.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 pb-24">
      <div className="mx-auto max-w-md px-5 pt-8 text-white">
        <button
          onClick={() => navigate("/weekly-boss")}
          className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-900/70 px-4 py-2.5 text-sm font-bold text-black"
        >
          <ArrowLeft size={16} /> Quitter
        </button>

        <div className="mt-6 rounded-3xl border border-yellow-600/30 bg-neutral-900/70 p-6 shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-600/20 border border-yellow-600/30 px-3 py-1 text-xs font-extrabold text-yellow-300">
                <Crown size={14} /> Boss de la semaine
              </div>
              <h1 className="mt-3 text-xl font-extrabold">{boss.theme}</h1>
              <p className="mt-1 text-sm text-neutral-300">
                Question {idx + 1}/{total} • Seuil {passPct}%
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm font-extrabold">
              <Timer size={16} className="text-yellow-300" />
              {formatClock(remainingMs)}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 shadow-xl">
          <h2 className="text-lg font-extrabold leading-snug">{q.question}</h2>

          <div className="mt-5 space-y-3">
            {q.options.map((opt, i) => {
              const active = selected === i;
              const locked = showFeedback;

              const showAsCorrect = locked && i === q.correctIndex;
              const showAsWrong = locked && active && i !== q.correctIndex;

              return (
                <button
                  key={i}
                  disabled={locked}
                  onClick={() => !locked && setSelected(i)}
                  className={cx(
                    "w-full text-left rounded-2xl border-2 px-5 py-4 text-sm font-bold text-black transition-all",
                    "bg-neutral-950/40 border-neutral-700 hover:border-neutral-500",
                    active && !locked && "border-yellow-400 bg-yellow-600/10",
                    showAsCorrect && "border-emerald-400 bg-emerald-900/20",
                    showAsWrong && "border-rose-400 bg-rose-900/20",
                    locked && "cursor-not-allowed"
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {!showFeedback ? (
            <button
              onClick={validate}
              disabled={selected === null}
              className={cx(
                "mt-5 w-full rounded-2xl py-4 font-extrabold shadow-lg transition-all",
                selected === null
                  ? "bg-neutral-800 text-neutral-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 to-amber-500 text-neutral-900 hover:shadow-xl hover:scale-[1.01]"
              )}
            >
              Valider
            </button>
          ) : (
            <>
              <div
                className={cx(
                  "mt-5 rounded-2xl border p-4",
                  isCorrect
                    ? "border-emerald-700 bg-emerald-900/20"
                    : "border-rose-700 bg-rose-900/20"
                )}
              >
                <div className="flex items-center gap-2 font-extrabold">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="text-emerald-300" size={18} />
                      Correct
                    </>
                  ) : (
                    <>
                      <XCircle className="text-rose-300" size={18} />
                      Incorrect
                    </>
                  )}
                </div>

                <p className="mt-2 text-sm text-neutral-200 leading-relaxed">
                  {q.explanation}
                </p>

                {/* Sources */}
                <div className="mt-4 rounded-xl border border-neutral-700 bg-neutral-950/40 p-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-neutral-200">
                    <BookOpen size={14} className="text-yellow-300" />
                    Sources (pour vérifier)
                  </div>

                  <ul className="mt-2 space-y-2">
                    {q.sources.map((s, k) => (
                      <li key={k} className="text-xs text-neutral-300 leading-relaxed flex gap-2">
                        <Link2 size={12} className="mt-0.5 text-neutral-400" />
                        <span>
                          <span className="font-bold text-neutral-200">{s.work}</span>
                          {" — "}
                          <span className="text-neutral-300">{s.ref}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={next}
                className="mt-5 w-full rounded-2xl py-4 font-extrabold shadow-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-neutral-900 hover:shadow-xl hover:scale-[1.01]"
              >
                {idx + 1 < total ? "Question suivante" : "Terminer"}
              </button>
            </>
          )}
        </div>

        <div className="mt-4 text-sm text-neutral-300">
          Score actuel : <span className="font-extrabold text-yellow-300">{correctCount}/{idx + (showFeedback ? 1 : 0)}</span>
        </div>
      </div>
    </div>
  );
}

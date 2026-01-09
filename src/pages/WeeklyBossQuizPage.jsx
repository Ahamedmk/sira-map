import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Crown,
  Timer,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  BookOpen,
  Link2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { WEEKLY_BOSS } from "../data/weeklyBossQuestions.js";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { supabase } from "../lib/supabase.js";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * Shuffle indices [0..n-1] with crypto if available, otherwise Math.random.
 * (Avoids "always same order" feelings on some runtimes.)
 */
function shuffledIndices(n) {
  const arr = Array.from({ length: n }, (_, i) => i);

  // crypto-based Fisher-Yates
  const hasCrypto =
    typeof globalThis !== "undefined" &&
    globalThis.crypto &&
    typeof globalThis.crypto.getRandomValues === "function";

  for (let i = n - 1; i > 0; i -= 1) {
    let r;
    if (hasCrypto) {
      const buf = new Uint32Array(1);
      globalThis.crypto.getRandomValues(buf);
      r = buf[0] / 2 ** 32;
    } else {
      r = Math.random();
    }
    const j = Math.floor(r * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatClock(ms) {
  const s = Math.ceil(ms / 1000);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
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
  const [showFeedback, setShowFeedback] = useState(false);

  // MCQ
  const [selected, setSelected] = useState(null);

  // ORDER
  const [order, setOrder] = useState([]); // array of indices into q.items

  const correctRef = useRef(0);
  const [correctCount, setCorrectCount] = useState(0);

  const startMsRef = useRef(Date.now());
  const [elapsedMs, setElapsedMs] = useState(0);

  const timeLimitMs = boss.timeLimitSec * 1000;
  const remainingMs = Math.max(0, timeLimitMs - elapsedMs);
  const timeUp = remainingMs <= 0;

  const passPct = boss.passPct ?? 80;

  const q = questions[idx];

  // Init per question
  useEffect(() => {
    setSelected(null);
    setShowFeedback(false);

    if (q?.type === "order") {
      const n = Array.isArray(q.items) ? q.items.length : 0;
      // Start shuffled to make it a real exercise
      setOrder(shuffledIndices(n));
    } else {
      setOrder([]);
    }
  }, [idx]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const pct = useMemo(() => {
    if (!total) return 0;
    return Math.round((correctCount / total) * 100);
  }, [correctCount, total]);

  function computeIsCorrect() {
    if (!q) return false;
    if (q.type === "mcq") {
      return selected !== null && selected === q.correctIndex;
    }
    if (q.type === "order") {
      // correctOrder can be indices array (same length as items)
      // Example: correctOrder: [0,1,2,3]
      const expected = Array.isArray(q.correctOrder)
        ? q.correctOrder
        : Array.from({ length: (q.items || []).length }, (_, i) => i);

      return arraysEqual(order, expected);
    }
    return false;
  }

  const isCorrect = computeIsCorrect();

  function canValidate() {
    if (!q) return false;
    if (q.type === "mcq") return selected !== null;
    if (q.type === "order") {
      const n = Array.isArray(q.items) ? q.items.length : 0;
      return Array.isArray(order) && order.length === n;
    }
    return false;
  }

  function validate() {
    if (!canValidate()) return;

    if (isCorrect) {
      correctRef.current += 1;
      setCorrectCount(correctRef.current);
    }

    setShowFeedback(true);
  }

  async function finish() {
    if (attempted) return;

    const timeMs = Math.max(0, Date.now() - startMsRef.current);

    // Score hebdo : score puis tie-break par temps (déjà dans DB)
    const wrong = Math.max(total - correctRef.current, 0);
    const timePenalty = Math.floor((timeMs / 1000) / 5);
    const finalScore = correctRef.current * 10 - timePenalty - wrong * 5;

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
    }

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
    setIdx((x) => x + 1);
  }

  function moveOrderItem(pos, dir) {
    // dir: -1 up, +1 down
    setOrder((prev) => {
      const nextArr = [...prev];
      const target = pos + dir;
      if (target < 0 || target >= nextArr.length) return prev;
      [nextArr[pos], nextArr[target]] = [nextArr[target], nextArr[pos]];
      return nextArr;
    });
  }

  function renderSources() {
    const sources = Array.isArray(q.sources) ? q.sources : [];
    if (!sources.length) return null;

    return (
      <div className="mt-4 rounded-xl border border-neutral-700 bg-neutral-950/40 p-4">
        <div className="flex items-center gap-2 text-xs font-extrabold text-neutral-200">
          <BookOpen size={14} className="text-yellow-300" />
          Sources (pour vérifier)
        </div>

        <ul className="mt-2 space-y-2">
          {sources.map((s, k) => (
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
    );
  }

  function renderQuestionBody() {
    if (q.type === "mcq") {
      return (
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
                  "w-full text-left rounded-2xl border-2 px-5 py-4 text-sm font-bold transition-all",
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
      );
    }

    if (q.type === "order") {
      const items = Array.isArray(q.items) ? q.items : [];
      const expected = Array.isArray(q.correctOrder)
        ? q.correctOrder
        : Array.from({ length: items.length }, (_, i) => i);

      return (
        <div className="mt-5">
          <div className="text-xs text-neutral-300">
            Remets les éléments dans le bon ordre (↑ ↓). À score égal, le temps départage.
          </div>

          <div className="mt-3 space-y-2">
            {order.map((itemIndex, pos) => {
              const label = items[itemIndex];

              return (
                <div
                  key={`${q.id}_${itemIndex}_${pos}`}
                  className={cx(
                    "rounded-2xl border-2 bg-neutral-950/40 border-neutral-700 px-4 py-3",
                    showFeedback && arraysEqual(order, expected) && "border-emerald-400 bg-emerald-900/20",
                    showFeedback && !arraysEqual(order, expected) && "border-rose-400 bg-rose-900/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-extrabold text-neutral-200 w-6 text-center">
                      {pos + 1}
                    </div>

                    <div className="flex-1 text-sm font-bold text-neutral-100">
                      {label}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        disabled={showFeedback || pos === 0}
                        onClick={() => moveOrderItem(pos, -1)}
                        className={cx(
                          "rounded-xl border px-2.5 py-2 transition-all",
                          "border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900",
                          (showFeedback || pos === 0) && "opacity-40 cursor-not-allowed"
                        )}
                        title="Monter"
                      >
                        <ArrowUp size={16} />
                      </button>

                      <button
                        disabled={showFeedback || pos === order.length - 1}
                        onClick={() => moveOrderItem(pos, +1)}
                        className={cx(
                          "rounded-xl border px-2.5 py-2 transition-all",
                          "border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900",
                          (showFeedback || pos === order.length - 1) && "opacity-40 cursor-not-allowed"
                        )}
                        title="Descendre"
                      >
                        <ArrowDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showFeedback && !arraysEqual(order, expected) && (
            <div className="mt-4 rounded-2xl border border-neutral-700 bg-neutral-950/40 p-4">
              <div className="text-xs font-extrabold text-neutral-200">Ordre correct :</div>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-neutral-200">
                {expected.map((i) => (
                  <li key={i}>{items[i]}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      );
    }

    // fallback
    return (
      <div className="mt-4 text-sm text-rose-200">
        Type de question non supporté : <span className="font-extrabold">{q.type}</span>
      </div>
    );
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
          className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-900/70 px-4 py-2.5 text-sm font-bold text-white shadow"
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

          {renderQuestionBody()}

          {!showFeedback ? (
            <button
              onClick={validate}
              disabled={!canValidate()}
              className={cx(
                "mt-5 w-full rounded-2xl py-4 font-extrabold shadow-lg transition-all",
                !canValidate()
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

                {q.explanation && (
                  <p className="mt-2 text-sm text-neutral-200 leading-relaxed">
                    {q.explanation}
                  </p>
                )}

                {renderSources()}
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
          Progression :{" "}
          <span className="font-extrabold text-yellow-300">
            {correctCount}/{total}
          </span>{" "}
          • Réussite actuelle :{" "}
          <span className="font-extrabold text-yellow-300">{pct}%</span>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomNav from "../components/BottomNav.jsx";
import BottomSheet from "../components/BottomSheet.jsx";

import { computeMapUI } from "../data/map.mock.js";
import { loadProgress } from "../lib/progressStore.js";
import { useAuth } from "../lib/context/AuthContext.jsx";
import { isWorldLockedByPaywall } from "../lib/premium.js";

import {
  BookOpen,
  Brain,
  Crown,
  Lock,
  CheckCircle2,
  Sparkles,
  Flame,
  Star,
  Trophy,
  Zap,
  UserPlus,
  ShieldCheck,
  Route, // ✅ AJOUT ICON TIMELINE
} from "lucide-react";

/* ------------------ Icons ------------------ */
function NodeIcon({ type, locked }) {
  const base = locked ? "text-neutral-400" : "";
  const iconProps = { size: 20, strokeWidth: 2 };

  if (type === "lesson") {
    return (
      <BookOpen
        className={`${base} ${!locked ? "text-blue-600" : ""}`}
        {...iconProps}
      />
    );
  }
  if (type === "review") {
    return (
      <Brain
        className={`${base} ${!locked ? "text-purple-600" : ""}`}
        {...iconProps}
      />
    );
  }
  if (type === "boss") {
    return (
      <Crown
        className={`${base} ${!locked ? "text-amber-600" : ""}`}
        {...iconProps}
      />
    );
  }
  return null;
}

/* ------------------ Helpers ------------------ */
function worldNumberFromId(worldId) {
  // world-1 => 1, world6 => 6, "6" => 6
  const m = String(worldId || "").match(/(\d+)/);
  return m ? Number(m[1]) : 1;
}

function scrollTopInstant() {
  try {
    window.scrollTo({ top: 0, behavior: "instant" });
  } catch {
    window.scrollTo(0, 0);
  }
}

/* ------------------ Page ------------------ */
export default function MapPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [progress, setProgress] = useState(() => loadProgress());
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [pulseNode, setPulseNode] = useState(null);

  // ✅ Signup prompt (invité -> compte)
  const [signupOpen, setSignupOpen] = useState(false);

  // ✅ Premium (à brancher plus tard)
  const isPro = true;

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const { worldsUI, activeWorldId, nextPack } = useMemo(
    () => computeMapUI(progress),
    [progress]
  );

  const currentWorld = useMemo(
    () => worldsUI.find((w) => w.id === activeWorldId) || worldsUI[0],
    [worldsUI, activeWorldId]
  );

  const next = nextPack?.node || null;

  // Pulse effect sur le prochain nœud
  useEffect(() => {
    if (next) {
      setPulseNode(next.id);
      const timer = setTimeout(() => setPulseNode(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [next]);

  /* ------------------ Signup Prompt Trigger ------------------ */
  useEffect(() => {
    if (authLoading) return;

    // connecté => jamais de popup
    if (user) return;

    // déjà vu => ne pas re-spam
    const alreadySeen = localStorage.getItem("signup_prompt_seen") === "1";
    if (alreadySeen) return;

    const postBoss = localStorage.getItem("post_boss_prompt"); // "signup"
    if (postBoss === "signup") {
      setSignupOpen(true);
      localStorage.setItem("signup_prompt_seen", "1");
      localStorage.removeItem("post_boss_prompt");
    }
  }, [authLoading, user]);

  /* ------------------ Helpers ------------------ */
  function gotoNode(node) {
    if (!node) return;
    scrollTopInstant();

    if (node.type === "lesson") navigate(`/lesson/${node.id}`);
    if (node.type === "review") navigate(`/bonus/${node.id}`);
    if (node.type === "boss") {
   const wid = node.worldId || activeWorldId;
   navigate(`/quiz/${node.id}?world=${encodeURIComponent(wid)}`);
 }
  }

  function isWorldCompleted(world) {
    const required = world.nodes.filter((n) => n.required);
    if (!required.length) return false;
    return required.every((n) => n.status === "done");
  }

  function getNodeGradient(type, locked) {
    if (locked) return "from-neutral-100 to-neutral-50";
    if (type === "lesson") return "from-blue-50 to-blue-100/50";
    if (type === "review") return "from-purple-50 to-purple-100/50";
    if (type === "boss") return "from-amber-50 to-amber-100/50";
    return "from-neutral-50 to-neutral-100";
  }

  function openNode(rawNode) {
    if (!rawNode || rawNode.status === "locked") return;

    // On récupère le monde du node (injecté plus bas au rendu)
    const worldN = worldNumberFromId(rawNode.worldId || activeWorldId);
    const lockedByPaywall = false;
    // isWorldLockedByPaywall(worldN, isPro);

    // 🔒 Paywall : si non Pro et monde verrouillé
    if (lockedByPaywall) {
      setSelectedNode({
        ...rawNode,
        _paywall: true,
        _worldN: worldN,
      });
      setSheetOpen(true);
      return;
    }

    // ✅ si déjà terminé : leçon relisible, quiz non rejouable
    if (rawNode.status === "done") {
      if (rawNode.type === "lesson") {
        navigate(`/lesson/${rawNode.id}`);
        return;
      }
      // boss/review/quiz => non rejouable
      return;
    }

    setSelectedNode(rawNode);
    setSheetOpen(true);
  }

  function startNode() {
    if (!selectedNode) return;
    setSheetOpen(false);

    // Paywall => vers page d’achat
    if (selectedNode._paywall) {
      navigate("/paywall");
      return;
    }

    gotoNode(selectedNode);
  }

  /* ------------------ Render ------------------ */
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20">
      {/* ================= ANIMATED BACKGROUND ================= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* ================= STICKY HEADER ================= */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm">
        <div className="mx-auto max-w-md px-5 pt-6 pb-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Sîra Map
              </h1>
              <p className="text-sm text-neutral-600 mt-0.5">
                Progresse monde par monde 🚀
              </p>

              {/* ✅ AJOUT : bouton Timeline compact (header) */}
              <button
                onClick={() => navigate("/timeline")}
                className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white/80 px-3 py-2 text-xs font-bold text-neutral-800 shadow-sm hover:bg-white hover:shadow-md active:scale-[0.98] transition-all"
              >
                <Route size={16} className="text-neutral-700" />
                Timeline
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200/50 shadow-sm">
                <Flame size={18} className="text-orange-500" />
                <span className="font-bold text-orange-700">{progress.streak}</span>
                <span className="text-xs text-orange-600/80">jours</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200/50 shadow-sm">
                <Sparkles size={18} className="text-amber-500" />
                <span className="font-bold text-amber-700">{progress.xpToday}</span>
                <span className="text-xs text-amber-600/80">XP</span>
              </div>
            </div>
          </div>

          {/* Active World Card */}
          <div className="mt-5 rounded-3xl bg-gradient-to-br from-white via-white to-neutral-50 border border-neutral-200/50 p-5 shadow-lg shadow-neutral-200/50 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-neutral-700" />
                  <p className="font-bold text-neutral-900">{currentWorld?.title}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full">
                  <Star size={14} className="text-neutral-600" />
                  <span className="text-sm font-bold text-neutral-700">
                    {currentWorld?.progressPct ?? 0}%
                  </span>
                </div>
              </div>

              <div className="relative h-3 w-full bg-neutral-100 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-900 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                  style={{ width: `${currentWorld?.progressPct ?? 0}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>

              <button
                className="mt-4 w-full rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-3.5 font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-neutral-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                disabled={!next}
                onClick={() => openNode({ ...next, worldId: activeWorldId })}
              >
                <Zap size={18} />
                Continuer l'aventure
              </button>

              {/* ✅ AJOUT : Bouton Timeline “grand” (card) */}
              <button
                onClick={() => navigate("/timeline")}
                className="mt-3 w-full rounded-2xl border-2 border-neutral-200 bg-white py-3.5 font-bold hover:bg-neutral-50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Route size={18} className="text-neutral-800" />
                Voir la Timeline
              </button>

              {/* 🔒 CTA Premium (accessible à tout moment) */}
              {!isPro && (
                <button
                  onClick={() => navigate("/paywall")}
                  className="mt-3 w-full rounded-2xl border-2 border-neutral-200 bg-white py-3.5 font-bold hover:bg-neutral-50 active:scale-[0.98] transition-all duration-200"
                >
                  🔒 Débloquer la suite
                </button>
              )}

              <p className="mt-3 text-xs text-neutral-500 text-center flex items-center justify-center gap-1.5">
                <Sparkles size={12} />
                XP total :{" "}
                <span className="font-semibold text-neutral-700">{progress.xp}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLLABLE CONTENT ================= */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <main className="mx-auto max-w-md px-5 space-y-8 pt-6 pb-32">
          {worldsUI.map((w) => {
            const worldCompleted = isWorldCompleted(w);

            return (
              <section key={w.id} className="animate-fadeIn">
                <div className="flex items-center justify-between mb-4 px-1">
                  <h2 className="text-base font-bold text-neutral-800 flex items-center gap-2">
                    {w.unlocked && (
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    )}
                    {w.title}
                  </h2>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      w.unlocked
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    {w.unlocked ? `${w.progressPct}%` : "🔒 Verrouillé"}
                  </span>
                </div>

                <div className={`space-y-4 ${w.unlocked ? "" : "opacity-60"}`}>
                  {w.nodes.map((node, idx) => {
                    const nodeWithWorld = { ...node, worldId: w.id };
                    const locked = node.status === "locked";
                    const isNext = next?.id === node.id;
                    const isPulsing = pulseNode === node.id;

                    return (
                      <button
                        key={node.id}
                        onClick={() => openNode(nodeWithWorld)}
                        className={[
                          "w-full text-left rounded-3xl border bg-white p-5 relative overflow-hidden group",
                          "transition-all duration-300",
                          locked
                            ? "opacity-60 cursor-not-allowed"
                            : "hover:shadow-xl hover:scale-[1.02] hover:border-neutral-300 active:scale-[0.98] shadow-md shadow-neutral-200/50",
                          isNext && !locked && "ring-2 ring-neutral-900 ring-offset-2",
                          isPulsing && "animate-pulse-slow",
                        ].join(" ")}
                      >
                        {!locked && (
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${getNodeGradient(
                              node.type,
                              locked
                            )} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          />
                        )}

                        {!locked && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        )}

                        <div className="flex items-start justify-between gap-4 relative z-10">
                          <div className="flex items-center gap-4 flex-1">
                            <div
                              className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${getNodeGradient(
                                node.type,
                                locked
                              )} border-2 ${
                                locked ? "border-neutral-200" : "border-neutral-300"
                              } flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                            >
                              {locked ? (
                                <Lock size={20} className="text-neutral-400" />
                              ) : (
                                <NodeIcon type={node.type} locked={locked} />
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-neutral-900 mb-1">
                                {idx + 1}. {node.title}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-neutral-600">
                                <span className="flex items-center gap-1">
                                  ⏱️ {node.estMin} min
                                </span>
                                <span className="text-neutral-400">•</span>
                                <span
                                  className={`font-medium ${
                                    node.required ? "text-orange-600" : "text-neutral-500"
                                  }`}
                                >
                                  {node.required ? "Obligatoire" : "Optionnel"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            {node.status === "done" && (
                              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100">
                                <CheckCircle2 className="text-emerald-600" size={14} />
                                <span className="text-[10px] font-bold text-emerald-700">
                                  Terminé
                                </span>
                              </div>
                            )}

                            {node.status === "available" && (
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                                Disponible
                              </span>
                            )}

                            {node.status === "locked" && (
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500">
                                Verrouillé
                              </span>
                            )}

                            {worldCompleted && node.type === "review" && !node.required && (
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 animate-pulse">
                                🎁 BONUS
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </div>

      {/* ================= NODE SHEET ================= */}
      <BottomSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        title={
          selectedNode?._paywall
            ? "Contenu Premium 🔒"
            : selectedNode?.title || "Démarrer"
        }
        description={
          selectedNode?._paywall
            ? `Le Monde ${selectedNode?._worldN} est disponible en Premium.`
            : selectedNode
            ? `≈ ${selectedNode.estMin} min • ${
                selectedNode.type === "boss"
                  ? "Boss Quiz 👑"
                  : selectedNode.type === "review"
                  ? "Révision 🧠"
                  : "Leçon 📖"
              }`
            : ""
        }
      >
        {selectedNode?._paywall ? (
          <div className="space-y-4">
            <div className="rounded-2xl border bg-neutral-50 p-4 text-sm text-neutral-700">
              Tu as accès gratuitement au{" "}
              <span className="font-semibold">Monde 1</span>. Pour continuer la
              Sîra (Monde 2 → …), passe en Premium.
            </div>

            <button
              onClick={() => {
                setSheetOpen(false);
                navigate("/paywall");
              }}
              className="w-full rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-4 font-bold shadow-xl shadow-neutral-900/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Débloquer la suite
            </button>

            <button
              onClick={() => setSheetOpen(false)}
              className="w-full rounded-2xl border-2 border-neutral-200 bg-white py-4 font-bold hover:bg-neutral-50 active:scale-[0.98] transition-all duration-200"
            >
              Plus tard
            </button>
          </div>
        ) : (
          selectedNode && (
            <div className="space-y-4">
              {selectedNode.status !== "done" ? (
                <>
                  <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 p-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Sparkles size={18} className="text-amber-600" />
                      <span className="text-neutral-700">Récompense estimée :</span>
                      <span className="font-bold text-lg text-amber-700">
                        +
                        {selectedNode.type === "boss"
                          ? 60
                          : selectedNode.type === "review"
                          ? 10
                          : 30}{" "}
                        XP
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={startNode}
                    className="w-full rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-4 font-bold shadow-xl shadow-neutral-900/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Zap size={20} />
                    Démarrer maintenant
                  </button>

                  <button
                    onClick={() => setSheetOpen(false)}
                    className="w-full rounded-2xl border-2 border-neutral-200 bg-white py-4 font-bold hover:bg-neutral-50 active:scale-[0.98] transition-all duration-200"
                  >
                    Plus tard
                  </button>
                </>
              ) : (
                <>
                  <div className="rounded-2xl border bg-emerald-50 p-4 text-sm text-emerald-800">
                    ✅ Déjà validé. Tu peux relire sans regagner de récompense.
                  </div>

                  <button
                    onClick={startNode}
                    className="w-full rounded-2xl bg-neutral-900 text-white py-4 font-bold"
                  >
                    Ouvrir
                  </button>

                  <button
                    onClick={() => setSheetOpen(false)}
                    className="w-full rounded-2xl border-2 border-neutral-200 bg-white py-4 font-bold hover:bg-neutral-50"
                  >
                    Fermer
                  </button>
                </>
              )}
            </div>
          )
        )}
      </BottomSheet>

      {/* ================= SIGNUP PROMPT SHEET ================= */}
      <BottomSheet
        open={signupOpen}
        onOpenChange={setSignupOpen}
        title="Sauvegarde ta progression 🔥"
        description="Gratuit — pour ne jamais perdre tes mondes, tes badges et ton streak."
      >
        <div className="space-y-4">
          <div className="rounded-2xl border bg-neutral-50 p-4 text-sm text-neutral-700">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white border flex items-center justify-center">
                <ShieldCheck size={18} className="text-emerald-700" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-neutral-900">Pourquoi créer un compte ?</p>
                <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                  <li>Récupère ta progression sur n’importe quel appareil</li>
                  <li>Ne perds pas tes XP, badges et séries</li>
                  <li>Accède au classement quand il sera activé</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setSignupOpen(false);
              navigate("/login");
            }}
            className="w-full rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-4 font-bold shadow-xl shadow-neutral-900/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <UserPlus size={20} />
            Créer un compte (30 sec)
          </button>

          <button
            onClick={() => setSignupOpen(false)}
            className="w-full rounded-2xl border-2 border-neutral-200 bg-white py-4 font-bold hover:bg-neutral-50 active:scale-[0.98] transition-all duration-200"
          >
            Plus tard
          </button>

          <p className="text-xs text-neutral-500 text-center">
            Tu peux continuer en invité, mais la progression reste sur cet appareil.
          </p>
        </div>
      </BottomSheet>

      <BottomNav />

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out 3; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}

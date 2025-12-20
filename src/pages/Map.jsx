import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";
import BottomSheet from "../components/BottomSheet.jsx";
import { computeMapUI } from "../data/map.mock.js";
import { loadProgress } from "../lib/progressStore.js";
import {
  BookOpen,
  Brain,
  Crown,
  Lock,
  CheckCircle2,
  Sparkles,
  Flame,
} from "lucide-react";

function NodeIcon({ type, locked }) {
  const base = locked ? "text-neutral-400" : "text-neutral-900";
  if (type === "lesson") return <BookOpen className={base} size={18} />;
  if (type === "review") return <Brain className={base} size={18} />;
  if (type === "boss") return <Crown className={base} size={18} />;
  return null;
}

export default function MapPage() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(() => loadProgress());
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

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


  function openNode(node) {
    if (!node || node.status === "locked") return;
    setSelectedNode(node);
    setSheetOpen(true);
  }

  function startNode() {
    if (!selectedNode) return;
    setSheetOpen(false);

    if (selectedNode.type === "lesson") navigate(`/lesson/${selectedNode.id}`);
    if (selectedNode.type === "review") navigate(`/bonus/${selectedNode.id}`); // tu peux aussi pointer vers review/quiz si tu veux
    if (selectedNode.type === "boss") navigate(`/quiz/${selectedNode.id}`);
  }

  function isWorldCompleted(world) {
  const required = world.nodes.filter((n) => n.required);
  if (required.length === 0) return false;
  return required.every((n) => n.status === "done");
}

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <header className="mx-auto max-w-md px-4 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold">Sîra Map</h1>
            <p className="text-sm text-neutral-600">
              Avance monde par monde, comme Duolingo.
            </p>
          </div>

          <div className="text-right space-y-1">
            <div className="inline-flex items-center gap-2 justify-end text-sm">
              <Flame size={16} />
              <span className="font-semibold">{progress.streak}</span>
              <span className="text-neutral-500">streak</span>
            </div>
            <div className="inline-flex items-center gap-2 justify-end text-sm">
              <Sparkles size={16} />
              <span className="font-semibold">{progress.xpToday}</span>
              <span className="text-neutral-500">XP today</span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white border p-4">
          <div className="flex items-center justify-between">
            <p className="font-medium">{currentWorld?.title || "Monde"}</p>
            <p className="text-sm text-neutral-600">
              {currentWorld?.progressPct ?? 0}%
            </p>
          </div>

          <div className="mt-2 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-900"
              style={{ width: `${currentWorld?.progressPct ?? 0}%` }}
            />
          </div>

          <button
            className="mt-3 w-full rounded-xl bg-neutral-900 text-black py-2.5 font-medium disabled:opacity-50"
            disabled={!next}
            onClick={() => openNode(next)}
          >
            Continuer
          </button>

          <p className="mt-2 text-xs text-neutral-500">XP total : {progress.xp}</p>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 space-y-6">
        {worldsUI.map((w) => {
  const worldCompleted = isWorldCompleted(w);

  return (
    <section key={w.id}>

            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-neutral-800">
                {w.title}
              </h2>
              <span className="text-xs text-neutral-500">
                {w.unlocked ? `${w.progressPct}%` : "🔒"}
              </span>
            </div>

            <div className={`space-y-3 ${w.unlocked ? "" : "opacity-70"}`}>
              {w.nodes.map((node, idx) => {
                const locked = node.status === "locked";
                return (
                  <button
                    key={node.id}
                    onClick={() => openNode(node)}
                    className={[
                      "w-full text-left rounded-2xl border bg-white p-4",
                      "active:scale-[0.99] transition",
                      locked ? "opacity-70" : "hover:border-neutral-300",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-neutral-50 border flex items-center justify-center">
                          {locked ? (
                            <Lock size={18} className="text-neutral-400" />
                          ) : (
                            <NodeIcon type={node.type} locked={locked} />
                          )}
                        </div>

                        <div>
                          <p className="font-medium">
                            {idx + 1}. {node.title}
                          </p>
                          <p className="text-xs text-neutral-600">
                            ≈ {node.estMin} min •{" "}
                            {node.required ? "Obligatoire" : "Optionnel"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {node.status === "done" ? (
                          <CheckCircle2 className="text-emerald-600" size={18} />
                        ) : null}

                        <span
                          className={[
                            "text-[11px] px-2 py-1 rounded-full",
                            node.status === "done" && "bg-emerald-100 text-emerald-800",
                            node.status === "available" && "bg-blue-100 text-blue-800",
                            node.status === "locked" && "bg-neutral-100 text-neutral-500",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {node.status === "done"
                            ? "Terminé"
                            : node.status === "available"
                            ? "Disponible"
                            : "Verrouillé"}
                        </span>
                        {worldCompleted && node.type === "review" && !node.required && (
  <span className="text-[11px] px-2 py-1 rounded-full bg-amber-100 text-amber-800">
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

      <BottomSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        title={selectedNode?.title || "Démarrer"}
        description={
          selectedNode
            ? `≈ ${selectedNode.estMin} min • ${
                selectedNode.type === "boss"
                  ? "Boss Quiz"
                  : selectedNode.type === "review"
                  ? "Révision"
                  : "Leçon"
              }`
            : ""
        }
      >
        {selectedNode ? (
          <div className="space-y-3">
            <div className="rounded-2xl border bg-neutral-50 p-3 text-sm text-neutral-700">
              Récompense estimée :{" "}
              <span className="font-semibold">
                +{selectedNode.type === "boss" ? 60 : selectedNode.type === "review" ? 10 : 30} XP
              </span>
            </div>

            <button
              onClick={startNode}
              className="w-full rounded-xl bg-neutral-900 text-black py-3 font-medium"
            >
              Démarrer
            </button>

            <button
              onClick={() => setSheetOpen(false)}
              className="w-full rounded-xl border bg-white py-3 font-medium"
            >
              Plus tard
            </button>
          </div>
        ) : null}
      </BottomSheet>

      <BottomNav />
    </div>
  );
}

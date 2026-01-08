import React from "react";
import { useNavigate } from "react-router-dom";
import { Check, Lock } from "lucide-react";

export default function SubscribePage() {
  const navigate = useNavigate();

  function handleActivate() {
    // MOCK premium
    localStorage.setItem("sira_premium", "1");
    navigate("/map");
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-md px-4 py-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
            <Lock size={22} />
          </div>

          <h1 className="text-2xl font-semibold text-neutral-900">
            Débloquer l’expérience complète
          </h1>

          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Accède à la Sîra du Prophète ﷺ comme jamais auparavant :
            structurée, immersive, progressive et mémorable.
          </p>
        </div>

        {/* Card */}
        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-neutral-900">
            Ce que tu débloques
          </p>

          <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            <li className="flex gap-2">
              <Check size={18} className="text-emerald-600" />
              Accès aux <strong>20+ mondes</strong> de la Sîra
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-emerald-600" />
              Histoires longues, détaillées et vérifiées
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-emerald-600" />
              Quiz intelligents & boss stratégiques
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-emerald-600" />
              Progression sauvegardée sur tous tes appareils
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-emerald-600" />
              Accès à vie aux mises à jour
            </li>
          </ul>

          {/* Price */}
          <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-center">
            <p className="text-xs text-neutral-500">Offre de lancement</p>
            <p className="mt-1 text-3xl font-bold text-neutral-900">9,99 €</p>
            <p className="text-xs text-neutral-500">
              Paiement unique – accès à vie
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleActivate}
            className="mt-6 w-full rounded-2xl bg-neutral-900 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Activer l’accès complet
          </button>

          <p className="mt-3 text-center text-[11px] text-neutral-500">
            (Mock – aucun paiement réel pour l’instant)
          </p>
        </div>

        {/* Back */}
        <button
          onClick={() => navigate("/map")}
          className="mt-6 w-full text-center text-sm text-neutral-600 underline-offset-4 hover:underline"
        >
          Revenir à la carte
        </button>
      </div>
    </div>
  );
}

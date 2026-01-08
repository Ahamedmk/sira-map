// src/pages/Paywall.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Sparkles, Crown, ChevronLeft } from "lucide-react";

export default function PaywallPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20">
      <div className="mx-auto max-w-md px-5 pt-6 pb-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-neutral-700"
        >
          <ChevronLeft size={18} />
          Retour
        </button>

        <div className="mt-4 rounded-3xl bg-white/90 backdrop-blur border border-neutral-200/50 p-6 shadow-lg shadow-neutral-200/40">
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 rounded-2xl bg-neutral-900 flex items-center justify-center">
              <Crown size={22} className="text-amber-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">
                Débloque la suite 🔓
              </h1>
              <p className="text-sm text-neutral-600 mt-1">
                Tu as commencé la Sîra… maintenant, continue jusqu’au bout, avec un parcours complet.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border bg-neutral-50 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-emerald-700 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-900">
                    Progression sauvegardée
                  </p>
                  <p className="text-sm text-neutral-700">
                    Retrouve tes mondes, XP, badges, streak sur n’importe quel appareil.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-neutral-50 p-4">
              <div className="flex items-start gap-3">
                <Sparkles size={18} className="text-amber-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-900">
                    Accès complet (Monde 2 → …)
                  </p>
                  <p className="text-sm text-neutral-700">
                    Histoires immersives + quiz + boss stratégiques + cinématiques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ 1 abonnement */}
          <div className="mt-5 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-white to-neutral-50 p-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-neutral-600">Abonnement</p>
                <p className="text-xl font-extrabold text-neutral-900">
                  Sîra Premium
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-extrabold text-neutral-900">4,99€</p>
                <p className="text-xs text-neutral-500">/ mois</p>
              </div>
            </div>

            <button
              onClick={() => {
                // TODO: Stripe / RevenueCat / etc.
                alert("Paiement à brancher (Stripe).");
              }}
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-4 font-bold shadow-xl shadow-neutral-900/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Débloquer maintenant
            </button>

            <p className="mt-3 text-xs text-neutral-500 text-center">
              Annulable à tout moment. Accès immédiat.
            </p>
          </div>

          <button
            onClick={() => navigate("/map")}
            className="mt-4 w-full rounded-2xl border-2 border-neutral-200 bg-white py-4 font-bold hover:bg-neutral-50 active:scale-[0.98] transition-all duration-200"
          >
            Retour à la map
          </button>
        </div>
      </div>
    </div>
  );
}

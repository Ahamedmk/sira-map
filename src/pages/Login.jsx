import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/context/AuthContext";
import { Mail, Lock, Sparkles, LogIn, UserPlus, Zap, ArrowRight, Shield, Star } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (!loading && user) navigate("/map", { replace: true });
  }, [loading, user, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setInfo("");

    if (!email.trim()) {
      setError("Entre un email.");
      return;
    }

    if ((mode === "signin" || mode === "signup") && password.length < 6) {
      setError("Mot de passe : minimum 6 caractères.");
      return;
    }

    setBusy(true);

    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setInfo("Connexion réussie ✅");
        navigate("/map", { replace: true });
      }

      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setInfo("Compte créé ✅ (vérifie ta boîte mail si confirmation activée).");
      }

      if (mode === "magic") {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: { emailRedirectTo: window.location.origin + "/map" },
        });
        if (error) throw error;
        setInfo("Lien envoyé ✅ Vérifie ton email (et les spams).");
      }
    } catch (err) {
      setError(err?.message || "Erreur inconnue");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20 flex items-center justify-center px-5 py-10 relative overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-md">
        {/* Header avec logo */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-purple-500/30 mb-4 animate-bounce-slow">
            <Sparkles size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-2">
            Bienvenue
          </h1>
          <p className="text-sm text-neutral-600">
            Accède à ta progression Sîra : XP, mondes, badges et plus 🌟
          </p>
        </div>

        {/* Card principale */}
        <div className="rounded-3xl border-2 border-neutral-200 bg-white/95 backdrop-blur-sm p-8 shadow-2xl shadow-neutral-200/50 relative overflow-hidden animate-scaleIn">
          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-slow" />

          <div className="relative z-10">
            {/* Tabs de mode */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-neutral-100 rounded-2xl mb-6">
              <button
                onClick={() => { setMode("signin"); setError(""); setInfo(""); }}
                className={`relative rounded-xl px-3 py-3 text-xs font-bold transition-all duration-300 ${
                  mode === "signin" 
                    ? "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg" 
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {mode === "signin" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl" />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <LogIn size={14} />
                  Connexion
                </span>
              </button>

              <button
                onClick={() => { setMode("signup"); setError(""); setInfo(""); }}
                className={`relative rounded-xl px-3 py-3 text-xs font-bold transition-all duration-300 ${
                  mode === "signup" 
                    ? "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg" 
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {mode === "signup" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl" />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <UserPlus size={14} />
                  Créer
                </span>
              </button>

              <button
                onClick={() => { setMode("magic"); setError(""); setInfo(""); }}
                className={`relative rounded-xl px-3 py-3 text-xs font-bold transition-all duration-300 ${
                  mode === "magic" 
                    ? "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg" 
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {mode === "magic" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl" />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <Zap size={14} />
                  Magique
                </span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <label className="block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-neutral-700">Email</span>
                  <Mail size={14} className="text-neutral-400" />
                </div>
                <div className="relative">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full rounded-2xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    placeholder="toi@email.com"
                    autoComplete="email"
                  />
                </div>
              </label>

              {/* Password */}
              {(mode === "signin" || mode === "signup") && (
                <label className="block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-neutral-700">Mot de passe</span>
                    <Lock size={14} className="text-neutral-400" />
                  </div>
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="w-full rounded-2xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="••••••••"
                      autoComplete={mode === "signup" ? "new-password" : "current-password"}
                    />
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 flex items-center gap-1.5">
                    <Shield size={12} />
                    {mode === "signup"
                      ? "Minimum 6 caractères - tu peux le changer plus tard"
                      : "Oublié ? Utilise le lien magique"}
                  </p>
                </label>
              )}

              {/* Error */}
              {error && (
                <div className="rounded-2xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100/50 p-4 animate-shake">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-xl bg-red-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">!</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-red-900 mb-1">Erreur</p>
                      <p className="text-xs text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Info */}
              {info && (
                <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-4 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-xl bg-emerald-200 flex items-center justify-center flex-shrink-0">
                      <Star size={16} className="text-emerald-700 fill-emerald-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-emerald-900 mb-1">Succès</p>
                      <p className="text-xs text-emerald-700">{info}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 font-bold shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {busy ? (
                    <>
                      <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Chargement...
                    </>
                  ) : (
                    <>
                      {mode === "signin" && <><LogIn size={20} />Se connecter</>}
                      {mode === "signup" && <><UserPlus size={20} />Créer le compte</>}
                      {mode === "magic" && <><Zap size={20} />Envoyer le lien</>}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Guest button */}
              <button
                type="button"
                onClick={() => navigate("/map")}
                className="w-full rounded-2xl border-2 border-neutral-200 bg-white text-neutral-700 py-4 font-bold hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] transition-all duration-200"
              >
                Continuer sans compte
              </button>
            </form>
          </div>
        </div>

        {/* Info dev en bas */}
        <div className="mt-6 rounded-2xl border border-blue-200/50 bg-blue-50/50 backdrop-blur-sm p-4 animate-fadeIn">
          <p className="text-xs text-blue-800 flex items-start gap-2">
            <Sparkles size={14} className="flex-shrink-0 mt-0.5" />
            <span>
              <span className="font-bold">Astuce dev :</span> Dans Supabase → Auth → Providers, active "Email" 
              (et la confirmation si tu veux).
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes shimmer-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 4s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-shake {
          animation: shake 0.4s ease-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
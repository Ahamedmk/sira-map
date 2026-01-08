// src/pages/Presentation.jsx
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Trophy,
  BookOpen,
  Film,
  Cloud,
  CheckCircle2,
  Star,
  Lock,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react";

export default function PresentationPage() {
  const navigate = useNavigate();
  const price = useMemo(() => "4,99 €", []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/20 to-purple-50/20">
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-neutral-200/50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-extrabold text-lg shadow-lg">
              S
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold text-neutral-900">Sîra Map</p>
              <p className="text-xs text-neutral-600 flex items-center gap-1.5">
                <Sparkles size={12} />
                Apprendre • Retenir • Progresser
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="hidden sm:inline-flex items-center justify-center rounded-2xl border-2 border-neutral-200 bg-white px-5 py-2.5 text-sm font-bold text-neutral-800 hover:border-neutral-300 hover:shadow-md transition-all"
            >
              Se connecter
            </button>

            <button
              onClick={() => navigate("/map")}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:shadow-xl hover:scale-105 transition-all shadow-lg"
            >
              Commencer
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-purple-300 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 text-xs font-bold text-purple-900 shadow-md animate-fadeIn">
              <Sparkles size={16} />
              Une Sîra immersive, monde par monde
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight animate-fadeIn">
              Redécouvrez la vie du Prophète ﷺ
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                comme une expérience vivante.
              </span>
            </h1>

            <p className="mt-6 text-lg text-neutral-700 leading-relaxed animate-fadeIn">
              Une map à la Duolingo, des récits longs et captivants, des quiz
              pour ancrer la connaissance, et des cinématiques aux moments clés.
              <span className="font-bold text-neutral-900">
                {" "}
                Rien n'est inventé.
              </span>{" "}
              Objectif : à la fin, tu connais réellement la Sîra, chronologiquement,
              et tu t'en souviens. ✨
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn">
              <button
                onClick={() => navigate("/map")}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-bold text-white hover:shadow-2xl hover:scale-105 transition-all shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Commencer gratuitement (Monde 1)
                  <ArrowRight size={20} />
                </span>
              </button>

              <button
                onClick={() => navigate("/subscribe")}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-amber-100 px-6 py-4 text-base font-bold text-amber-900 hover:shadow-lg hover:scale-105 transition-all"
              >
                Premium — {price}/mois
                <Star size={20} className="ml-2 fill-amber-900" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-600 animate-fadeIn">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
                <ShieldCheck size={14} className="text-emerald-600" /> Sans publicité
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
                <Lock size={14} className="text-blue-600" /> Résiliable
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
                <Cloud size={14} className="text-purple-600" /> Cloud Premium
              </span>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="rounded-3xl border-2 border-neutral-200 bg-white/95 backdrop-blur-sm p-7 shadow-2xl animate-scaleIn">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Ce que tu vas vivre
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Une progression claire, motivante, et mémorable.
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-md">
                <Trophy size={22} className="text-amber-700" />
              </div>
            </div>

            <div className="grid gap-4">
              <Feature
                icon={<BookOpen size={20} className="text-blue-600" />}
                title="Histoires longues et immersives"
                text="Récits racontés comme une histoire, avec dates, contexte, et points marquants."
              />
              <Feature
                icon={<Film size={20} className="text-purple-600" />}
                title="Cinématiques aux moments stratégiques"
                text="Transitions slide, rythme, émotion — pas du texte brusque."
              />
              <Feature
                icon={<CheckCircle2 size={20} className="text-emerald-600" />}
                title="Quiz & Boss pour ancrer"
                text="Une fois validé, c'est verrouillé : pas de farm, juste de la progression réelle."
              />
              <Feature
                icon={<Sparkles size={20} className="text-amber-600" />}
                title="Badges, XP, classement"
                text="Addictif, mais propre : au service de la constance, pas du temps perdu."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-5 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} className="text-amber-700 fill-amber-700" />
                <span className="text-base font-bold text-amber-900">Premium simple</span>
              </div>
              <p className="text-sm text-amber-800 mb-4">
                Accès à tous les mondes + cinématiques + cloud + classement.
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-extrabold text-amber-900">
                    {price}
                    <span className="text-base font-semibold text-amber-700">
                      {" "}
                      / mois
                    </span>
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    Résiliable à tout moment.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/subscribe")}
                  className="rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3 text-sm font-bold text-white hover:shadow-lg hover:scale-105 transition-all shadow-md"
                >
                  Débloquer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl border-2 border-neutral-200 bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <TrendingUp size={20} className="text-blue-700" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Comment ça marche
            </h2>
          </div>
          <p className="text-base text-neutral-600 mb-8">
            Tu progresses comme dans un jeu — mais tu ressors avec une vraie
            connaissance. 🎯
          </p>

          <div className="grid gap-5 md:grid-cols-3 mb-8">
            <Step
              n="1"
              icon={<BookOpen size={18} className="text-blue-600" />}
              title="Lis ou écoute"
              text="Chaque leçon a une illustration en haut, puis une histoire structurée en sous-titres."
            />
            <Step
              n="2"
              icon={<Zap size={18} className="text-amber-600" />}
              title="Valide l'épreuve"
              text="Quiz de leçon, puis Boss à intervalle (ex : 1 monde sur 3)."
            />
            <Step
              n="3"
              icon={<Award size={18} className="text-emerald-600" />}
              title="Garde ta progression"
              text="Local en gratuit. Cloud en Premium pour retrouver tout sur un autre téléphone."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/map")}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-bold text-white hover:shadow-2xl hover:scale-105 transition-all shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2">
                Commencer gratuitement
                <ArrowRight size={20} />
              </span>
            </button>
            <button
              onClick={() => navigate("/subscribe")}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-neutral-200 bg-white px-6 py-4 text-base font-bold text-neutral-900 hover:border-neutral-300 hover:shadow-lg hover:scale-105 transition-all"
            >
              Passer Premium — {price}/mois
            </button>
          </div>
        </div>
      </section>

      {/* TRUST / FOOTER */}
      <footer className="mx-auto max-w-6xl px-5 pb-12">
        <div className="rounded-3xl border-2 border-neutral-200 bg-white/95 backdrop-blur-sm p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
              <ShieldCheck size={20} className="text-emerald-700" />
            </div>
            <h3 className="text-xl font-extrabold text-neutral-900">
              Notre engagement
            </h3>
          </div>
          <p className="text-base text-neutral-700 leading-relaxed mb-6">
            Pas de publicité. Pas de contenu inventé. Respect total. Le but n'est
            pas de faire scroller : c'est de faire progresser. 🎯
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-6 border-t border-neutral-200">
            <div className="text-sm text-neutral-500 flex items-center gap-2">
              <Sparkles size={14} />
              © {new Date().getFullYear()} — Sîra Map
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/login")}
                className="rounded-2xl border-2 border-neutral-200 bg-white px-5 py-2.5 text-sm font-bold text-neutral-800 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                Se connecter
              </button>
              <button
                onClick={() => navigate("/subscribe")}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:shadow-lg transition-all"
              >
                Premium — {price}/mois
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border-2 border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-4 hover:border-neutral-300 hover:shadow-md transition-all">
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-neutral-900 mb-1">{title}</p>
          <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Step({ n, icon, title, text }) {
  return (
    <div className="rounded-2xl border-2 border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 hover:shadow-lg hover:scale-105 transition-all">
      <div className="flex items-start gap-4 mb-3">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white flex items-center justify-center font-extrabold text-lg shadow-md">
          {n}
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white border-2 border-neutral-200 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-base font-bold text-neutral-900 mb-2">{title}</p>
      <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
    </div>
  );
}
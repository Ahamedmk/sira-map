// src/data/map.mock.js
// Map dynamique : plus de status manuels.
// required = true => bloque la progression si non validé (leçons + boss)
// required = false => optionnel (review)

export const WORLDS = [
  {
    id: "world-1",
    title: "Monde 1 — Avant la naissance",
    nodes: [
      { id: "l1", type: "lesson", title: "Arabie : tribus et désert", estMin: 3, required: true },
      { id: "l2", type: "lesson", title: "La Mecque et la Kaaba", estMin: 3, required: true },
      // { id: "r1", type: "review", title: "Révision (rapide)", estMin: 2, required: false },
      { id: "l3", type: "lesson", title: "Valeurs tribales et alliances", estMin: 4, required: true },
      { id: "l4", type: "lesson", title: "Religions présentes", estMin: 4, required: true },
      { id: "b1", type: "boss", title: "Boss Quiz — Monde 1", estMin: 6, required: true },
    ],
  },

  {
  id: "world-2",
  title: "Monde 2 — La lignée et les parents",
  description: "Comprendre la lignée, les parents et l’enfance qui façonne.",
  nodes: [
    {
      id: "l5",
      type: "lesson",
      title: "La lignée : un nom qui pèse",
      estMin: 10,
      required: true,
    },
    {
      id: "l6",
      type: "lesson",
      title: "Les parents : une histoire décisive",
      estMin: 12,
      required: true,
    },
    {
      id: "l7",
      type: "lesson",
      title: "Après la perte : la question du protecteur",
      estMin: 10,
      required: true,
    },
    {
      id: "l8",
      type: "lesson",
      title: "Le désert et la nourrice : une empreinte",
      estMin: 12,
      required: true,
    },

    // Boss (validation du monde)
    {
      id: "b2",
      type: "boss",
      title: "Boss Quiz — Monde 2",
      estMin: 6,
      required: true,
    },
  ],
},
{
  id: "world-3",
  title: "Monde 3 — Naissance, enfance et jeunesse",
  description: "De l’Année de l’Éléphant à la veille de la Révélation (≈ 570 → 610).",
  nodes: [
    {
      id: "l9",
      type: "lesson",
      title: "La naissance — l’Année de l’Éléphant",
      estMin: 14,
      required: true,
    },
    {
      id: "l10",
      type: "lesson",
      title: "Grandir orphelin à La Mecque",
      estMin: 16,
      required: true,
    },
    {
      id: "l11",
      type: "lesson",
      title: "La jeunesse — travail et al-Amīn",
      estMin: 16,
      required: true,
    },
    {
      id: "l12",
      type: "lesson",
      title: "Avant la Révélation — la quête de vérité",
      estMin: 18,
      required: true,
    },

    // Bonus review (optionnel)
    // {
    //   id: "r3",
    //   type: "review",
    //   title: "Révision rapide — Monde 3",
    //   estMin: 5,
    //   required: false,
    // },

    // Boss (validation du monde)
    {
      id: "b3",
      type: "boss",
      title: "Boss Quiz — Monde 3",
      estMin: 7,
      required: true,
    },
  ],
},
{
  id: "world-4",
  title: "Monde 4 — La première Révélation et les débuts",
  description: "De Ḥirāʾ à la phase discrète : le message commence (≈ 610).",
  nodes: [
    { id: "l13", type: "lesson", title: "La première Révélation — ‘Iqraʾ’", estMin: 18, required: true },
    { id: "l14", type: "lesson", title: "Khadījah et Waraqah : le premier refuge", estMin: 18, required: true },
    { id: "l15", type: "lesson", title: "La pause puis l’ordre : ‘Lève-toi et avertis’", estMin: 18, required: true },
    { id: "l16", type: "lesson", title: "Débuts en secret : premiers croyants, premières tensions", estMin: 18, required: true },

    // Bonus review (optionnel)
    // { id: "r4", type: "review", title: "Révision rapide — Monde 4", estMin: 6, required: false },

    // Boss (validation du monde)
    { id: "b4", type: "boss", title: "Boss Quiz — Monde 4", estMin: 8, required: true },
  ],
},
{
  id: "world-5",
  title: "Monde 5 — L’annonce publique et la persécution",
  description: "Du passage au public aux premières persécutions et à l’Hijra vers l’Abyssinie (≈ 613 → 615).",
  nodes: [
    { id: "l17", type: "lesson", title: "L’appel public : le jour où tout change", estMin: 18, required: true },
    { id: "l18", type: "lesson", title: "Moquerie, négociation, pression : la réponse de Quraysh", estMin: 18, required: true },
    { id: "l19", type: "lesson", title: "Quand la foi coûte : les premières persécutions", estMin: 20, required: true },
    { id: "l20", type: "lesson", title: "Hijra vers l’Abyssinie : le premier refuge", estMin: 20, required: true },

    // Bonus review (optionnel)
    // { id: "r5", type: "review", title: "Révision rapide — Monde 5", estMin: 7, required: false },

    // Boss (validation du monde)
    { id: "b5", type: "boss", title: "Boss Quiz — Monde 5", estMin: 9, required: true },
  ],
},
{
  id: "world-6",
  title: "Monde 6 — Le boycott et l’épreuve",
  description:
    "Trois années d’isolement, de faim et de résistance collective au Shiʿb Abī Ṭālib (≈ 616–619).",
  nodes: [
    { id: "l21", type: "lesson", title: "Le boycott : une décision froide", estMin: 22, required: true },
    { id: "l22", type: "lesson", title: "Le pacte dans la Kaʿba : sceller l’injustice", estMin: 20, required: true },
    { id: "l23", type: "lesson", title: "Le Shiʿb Abī Ṭālib : survivre enfermés", estMin: 24, required: true },
    { id: "l24", type: "lesson", title: "La fin du boycott : l’injustice se fissure (≈ 619)", estMin: 22, required: true },
    { id: "b6", type: "boss", title: "Boss Quiz — Monde 6", estMin: 10, required: true },
  ],
},
{
  id: "world-7",
  title: "Monde 7 — ʿĀm al-Ḥuzn : l’Année de la Tristesse",
  description:
    "Perdre ses piliers, affronter l’abandon, puis chercher une porte ailleurs (≈ 619–620).",
  nodes: [
    { id: "l25", type: "lesson", title: "Quand les piliers tombent (≈ 619)", estMin: 24, required: true },
    { id: "l26", type: "lesson", title: "La perte d’Abū Ṭālib : la protection s’effondre (≈ 619)", estMin: 26, required: true },
    { id: "l27", type: "lesson", title: "La perte de Khadījah : le refuge s’éteint (≈ 619)", estMin: 28, required: true },
    { id: "l28", type: "lesson", title: "Ṭāʾif : la porte fermée… et le retour (≈ 620)", estMin: 30, required: true },
    { id: "b7", type: "boss", title: "Boss Quiz — Monde 7", estMin: 10, required: true },
  ],
},
{
  id: "world-8",
  title: "Monde 8 — Al-Isrāʾ wa-l-Miʿrāj : quand le ciel répond (≈ 620)",
  description:
    "Après Ṭāʾif et l’Année de la Tristesse, une ouverture vient d’en haut : le Voyage Nocturne et l’Ascension.",
  nodes: [
    {
      id: "l29",
      type: "lesson",
      title: "La nuit d’Al-Isrāʾ : de La Mecque à Jérusalem (≈ 620)",
      estMin: 30,
      required: true,
    },
    {
      id: "l30",
      type: "lesson",
      title: "Al-Miʿrāj : l’élévation et la rencontre des Prophètes",
      estMin: 32,
      required: true,
    },
    {
      id: "l31",
      type: "lesson",
      title: "Les 50 prières réduites à 5 : le cadeau et la miséricorde",
      estMin: 34,
      required: true,
    },
    {
      id: "l32",
      type: "lesson",
      title: "Retour à La Mecque : choc, accusations… et certitude",
      estMin: 28,
      required: true,
    },
    { id: "b8", type: "boss", title: "Boss Quiz — Monde 8", estMin: 10, required: true },
  ],
},
{
  id: "world-9",
  title: "Monde 9 — ʿAqabah : quand une ville tend la main (≈ 620–622)",
  description:
    "Saisons du pèlerinage, rencontres tribales, Yathrib (Médine) écoute… puis promet. Un tournant silencieux qui va sauver la mission.",
  nodes: [
    {
      id: "l33",
      type: "lesson",
      title: "Les saisons du pèlerinage : chercher des cœurs (≈ 620–621)",
      estMin: 34,
      required: true,
    },
    {
      id: "l34",
      type: "lesson",
      title: "Yathrib : une ville divisée, un besoin de paix (≈ 620–621)",
      estMin: 36,
      required: true,
    },
    {
      id: "l35",
      type: "lesson",
      title: "La 1ʳᵉ ʿAqabah : l’engagement qui change tout (≈ 621)",
      estMin: 38,
      required: true,
    },
    {
      id: "l36",
      type: "lesson",
      title: "La 2ᵉ ʿAqabah : une protection au prix fort (≈ 622)",
      estMin: 42,
      required: true,
    },
    { id: "b9", type: "boss", title: "Boss Quiz — Monde 9", estMin: 10, required: true },
  ],
}





  // Tu pourras ajouter Monde 2, Monde 3 etc.
  // Exemple :
  // {
  //   id: "world-2",
  //   title: "Monde 2 — Enfance et jeunesse",
  //   nodes: [
  //     { id: "l5", type: "lesson", title: "Naissance et premières années", estMin: 4, required: true },
  //     ...
  //     { id: "b2", type: "boss", title: "Boss Quiz — Monde 2", estMin: 6, required: true },
  //   ],
  // },
];

export function getLessonById(lessonId) {
  for (const w of WORLDS) {
    const node = w.nodes.find((n) => n.id === lessonId);
    if (node) return { world: w, node };
  }
  return null;
}

/**
 * Règles de déverrouillage :
 * - Monde 1 : toujours unlocked
 * - Monde N : unlocked si boss du monde N-1 est "done"
 * - Dans un monde :
 *   - done si complété
 *   - available si monde unlocked ET :
 *       - premier node required => available
 *       - une leçon required => available si le required précédent est done
 *       - review (optionnel) => available dès que le required précédent est done
 *       - boss => available si toutes les leçons required du monde (avant boss) sont done
 */
export function computeMapUI(progress) {
  const completed = new Set(progress?.completedNodeIds || []);

  // helper: boss id attendu "b1, b2, b3..." en se basant sur l'index du monde (1-based)
  const bossIdForWorldIndex = (idx1) => `b${idx1}`;

  const worldsUI = WORLDS.map((w, worldIndex0) => {
    const worldIndex1 = worldIndex0 + 1;

    const worldUnlocked =
      worldIndex1 === 1 ? true : completed.has(bossIdForWorldIndex(worldIndex1 - 1));

    // Liste des required (leçons + boss) du monde
    const requiredNodes = w.nodes.filter((n) => n.required);

    // Boss node du monde (si présent)
    const bossNode = w.nodes.find((n) => n.type === "boss");

    // Toutes les leçons required (type lesson) du monde (avant boss)
    const requiredLessons = w.nodes.filter((n) => n.required && n.type === "lesson");

    const allRequiredLessonsDone = requiredLessons.every((n) => completed.has(n.id));

    // progression % : sur required uniquement (leçons + boss)
    const requiredDoneCount = requiredNodes.filter((n) => completed.has(n.id)).length;
    const progressPct =
      requiredNodes.length === 0
        ? 0
        : Math.round((requiredDoneCount / requiredNodes.length) * 100);

    // Pour l’unlock séquentiel : on regarde le "dernier required" précédant un node
    function prevRequiredNodeId(currentIndex) {
      for (let i = currentIndex - 1; i >= 0; i--) {
        const n = w.nodes[i];
        if (n.required) return n.id;
      }
      return null;
    }

    const nodesUI = w.nodes.map((n, idx) => {
      const done = completed.has(n.id);
      if (!worldUnlocked) {
        return { ...n, status: done ? "done" : "locked" };
      }

      if (done) return { ...n, status: "done" };

      // boss : dispo si toutes les leçons required sont done
      if (n.type === "boss") {
        return { ...n, status: allRequiredLessonsDone ? "available" : "locked" };
      }

      const prevReqId = prevRequiredNodeId(idx);

      // si aucun required avant => premier node du monde
      if (!prevReqId) return { ...n, status: "available" };

      const prevReqDone = completed.has(prevReqId);

      // leçons required : gated sur prev required
      if (n.required) {
        return { ...n, status: prevReqDone ? "available" : "locked" };
      }

      // review optionnel : dispo dès que tu as passé le required précédent
      return { ...n, status: prevReqDone ? "available" : "locked" };
    });

    return {
      ...w,
      unlocked: worldUnlocked,
      progressPct,
      nodes: nodesUI,
      bossNode,
    };
  });

  // Prochain node "required" disponible (priorité aux required)
    // Prochain node "required" disponible (priorité aux required)
    // 1) Priorité : trouver un REQUIRED disponible dans n'importe quel monde unlocked
   function isWorldCompleted(worldUI) {
    const required = worldUI.nodes.filter((n) => n.required);
    if (required.length === 0) return false;
    return required.every((n) => n.status === "done");
  }

  // 1) Priorité : REQUIRED disponible (n’importe quel monde unlocked)
  function findNextRequired() {
    for (const w of worldsUI) {
      if (!w.unlocked) continue;
      const n = w.nodes.find((x) => x.status === "available" && x.required);
      if (n) return { node: n, worldId: w.id };
    }
    return null;
  }

  // 2) Sinon : ANY disponible, MAIS on ignore les reviews optionnelles
  // des mondes déjà complétés (pour Continue uniquement)
  function findNextAny() {
    for (const w of worldsUI) {
      if (!w.unlocked) continue;

      const completedWorld = isWorldCompleted(w);

      const n = w.nodes.find((x) => {
        if (x.status !== "available") return false;

        // Si le monde est complété, on ignore les "review" optionnelles pour Continue
        if (completedWorld && x.type === "review" && !x.required) return false;

        return true;
      });

      if (n) return { node: n, worldId: w.id };
    }
    return null;
  }

  const nextPack = findNextRequired() || findNextAny();


  

  // Monde actif = monde du prochain node
  // Fallback = dernier monde unlocked
  const lastUnlocked = [...worldsUI].reverse().find((w) => w.unlocked);
  const activeWorldId = nextPack?.worldId || lastUnlocked?.id || worldsUI[0]?.id;

  return { worldsUI, activeWorldId, nextPack };


}

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
      { id: "r1", type: "review", title: "Révision (rapide)", estMin: 2, required: false },
      { id: "l3", type: "lesson", title: "Valeurs tribales et alliances", estMin: 4, required: true },
      { id: "l4", type: "lesson", title: "Religions présentes", estMin: 4, required: true },
      { id: "b1", type: "boss", title: "Boss Quiz — Monde 1", estMin: 6, required: true },
    ],
  },

  {
  id: "world-2",
  title: "Monde 2 — Enfance & jeunesse",
  nodes: [
    { id: "l5", type: "lesson", title: "Naissance : contexte familial", estMin: 4, required: true },
    { id: "l6", type: "lesson", title: "Orphelinage et protection", estMin: 4, required: true },
    { id: "r2", type: "review", title: "Révision (Monde 2)", estMin: 2, required: false },
    { id: "l7", type: "lesson", title: "Jeunesse : confiance et réputation", estMin: 5, required: true },
    { id: "l8", type: "lesson", title: "Avant la révélation : quête de sens", estMin: 5, required: true },
    { id: "b2", type: "boss", title: "Boss Quiz — Monde 2", estMin: 7, required: true },
  ],
},

{
  id: "world-3",
  title: "Monde 3 — Début de la Révélation",
  nodes: [
    { id: "l9", type: "lesson", title: "La grotte et la première révélation", estMin: 6, required: true },
    { id: "l10", type: "lesson", title: "Les premiers croyants", estMin: 5, required: true },
    { id: "r3", type: "review", title: "Bonus — Début de la Révélation", estMin: 2, required: false },
    { id: "l11", type: "lesson", title: "Les premiers messages : tawḥīd et responsabilité", estMin: 6, required: true },
    { id: "l12", type: "lesson", title: "L’annonce publique", estMin: 5, required: true },
    { id: "b3", type: "boss", title: "Boss Quiz — Monde 3", estMin: 8, required: true },
  ],
},
{
  id: "world-4",
  title: "Monde 4 — La Mecque : opposition et persécutions",
  nodes: [
    { id: "l13", type: "lesson", title: "Pourquoi l’opposition ?", estMin: 6, required: true },
    { id: "l14", type: "lesson", title: "Persécutions et constance", estMin: 6, required: true },
    { id: "r4", type: "review", title: "Bonus — Résister à la pression", estMin: 2, required: false },
    { id: "l15", type: "lesson", title: "Migration en Abyssinie", estMin: 5, required: true },
    { id: "l16", type: "lesson", title: "Le boycott social", estMin: 6, required: true },
    { id: "b4", type: "boss", title: "Boss Quiz — Monde 4", estMin: 9, required: true },
  ],
},
{
  id: "world-5",
  title: "Monde 5 — Tournants : Ṭāʾif et l’Isrāʾ & Miʿrāj",
  nodes: [
    { id: "l17", type: "lesson", title: "L’année de tristesse : pertes et épreuve", estMin: 6, required: true },
    { id: "l18", type: "lesson", title: "Ṭāʾif : rejet et dignité", estMin: 6, required: true },
    { id: "r5", type: "review", title: "Bonus — Patience & reliance", estMin: 2, required: false },
    { id: "l19", type: "lesson", title: "Isrāʾ & Miʿrāj : sens et impact", estMin: 7, required: true },
    { id: "l20", type: "lesson", title: "Pledges : ouverture vers Médine", estMin: 6, required: true },
    { id: "b5", type: "boss", title: "Boss Quiz — Monde 5", estMin: 9, required: true },
  ],
},
{
  id: "world-6",
  title: "Monde 6 — Hijra et construction à Médine",
  nodes: [
    { id: "l21", type: "lesson", title: "Hijra : stratégie et confiance", estMin: 7, required: true },
    { id: "l22", type: "lesson", title: "Médine : fraternité et cohésion", estMin: 6, required: true },
    { id: "r6", type: "review", title: "Bonus — Nouvelle société", estMin: 2, required: false },
    { id: "l23", type: "lesson", title: "La mosquée : centre de vie", estMin: 5, required: true },
    { id: "l24", type: "lesson", title: "La charte : règles et coexistence", estMin: 7, required: true },
    { id: "b6", type: "boss", title: "Boss Quiz — Monde 6", estMin: 10, required: true },
  ],
},
{
  id: "world-7",
  title: "Monde 7 — Conflits majeurs et maturité de la communauté",
  nodes: [
    { id: "l25", type: "lesson", title: "Badr : une victoire fondatrice", estMin: 7, required: true },
    { id: "l26", type: "lesson", title: "Uḥud : leçons de discipline", estMin: 7, required: true },
    { id: "r7", type: "review", title: "Bonus — Discipline & intentions", estMin: 2, required: false },
    { id: "l27", type: "lesson", title: "Al-Aḥzāb : unité sous pression", estMin: 7, required: true },
    { id: "l28", type: "lesson", title: "Ḥudaybiyya : victoire sans bataille", estMin: 7, required: true },
    { id: "b7", type: "boss", title: "Boss Quiz — Monde 7", estMin: 10, required: true },
  ],
},
{
  id: "world-8",
  title: "Monde 8 — Conquête, pardon et fin de mission",
  nodes: [
    { id: "l29", type: "lesson", title: "Conquête de la Mecque : pardon et grandeur", estMin: 7, required: true },
    { id: "l30", type: "lesson", title: "Unification et stabilité", estMin: 6, required: true },
    { id: "r8", type: "review", title: "Bonus — Pardon & vision", estMin: 2, required: false },
    { id: "l31", type: "lesson", title: "Adieux : valeurs finales et priorité du cœur", estMin: 7, required: true },
    { id: "l32", type: "lesson", title: "Derniers jours et héritage", estMin: 7, required: true },
    { id: "b8", type: "boss", title: "Boss Quiz — Monde 8", estMin: 12, required: true },
  ],
},



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

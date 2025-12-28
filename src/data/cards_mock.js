export const CARDS = [
  // 🟢 COMMON (finir le monde)
  {
    id: 1,
    slug: "abdullah-ibn-umm-maktum",
    name_fr: "ʿAbdullāh ibn Umm Maktūm",
    name_ar: "عبد الله بن أم مكتوم رضي الله عنه",
    laqab: "Le muezzin de Médine (avec Bilāl)",
    category: "companion",
    era: "makkah",
    worldKey: "world1_intro",
    rarity: "common",
    short_hook: "Il n’a pas vu… mais il a porté un rôle immense.",
    bio_short:
      "Compagnon aveugle, cité dans le Coran (ʿAbasa). Sa valeur ne dépendait pas du regard des gens.",
    anecdote:
      "Son histoire rappelle que l’honneur auprès d’Allah ne suit pas les critères humains. Il deviendra plus tard un pilier dans l’organisation de la communauté.",
    lessons: [
      "La valeur d’une personne ne se mesure pas à son apparence",
      "La guidance élève ceux que la société sous-estime",
    ],
    tags: ["makkah", "humilité", "valeur"],
    art: {
      imageLocked: "/cards/locked/silhouette-1.png",
      imageUnlocked: "/cards/unlocked/abdullah-umm-maktum.png",
    },
    unlock: {
      type: "finish_world",
      value: { worldKey: "world1_intro" },
    },
    meta: { version: 1 },
  },

  {
    id: 2,
    slug: "bilal-ibn-rabah",
    name_fr: "Bilāl ibn Rabāḥ",
    name_ar: "بلال بن رباح رضي الله عنه",
    laqab: "La voix de l’adhān",
    category: "companion",
    era: "makkah",
    worldKey: "world6_boycott",
    rarity: "common",
    short_hook: "Ils ont tenté de briser sa voix… elle est devenue un symbole.",
    bio_short:
      "Ancien esclave, torturé pour sa foi. Sa constance est devenue une leçon vivante de dignité.",
    anecdote:
      "Dans les périodes d’oppression et d’étau, il incarne la foi qui refuse de se vendre, même quand le corps souffre.",
    lessons: [
      "La foi se prouve quand elle coûte quelque chose",
      "La dignité ne dépend pas du statut social",
    ],
    tags: ["boycott", "patience", "dignité"],
    art: {
      imageLocked: "/cards/locked/silhouette-2.png",
      imageUnlocked: "/cards/unlocked/bilal.png",
    },
    unlock: {
      type: "finish_world",
      value: { worldKey: "world6_boycott" },
    },
    meta: { version: 1 },
  },

  // 🔵 RARE (quiz >= 80%)
  {
    id: 3,
    slug: "khadijah",
    name_fr: "Khadīja bint Khuwaylid",
    name_ar: "خديجة بنت خويلد رضي الله عنها",
    laqab: "Le premier refuge",
    category: "family",
    era: "makkah",
    worldKey: "world4_revelation",
    rarity: "rare",
    short_hook: "Quand il tremble… elle ne doute pas.",
    bio_short:
      "Première croyante. Soutien émotionnel, financier et moral au moment où tout bascule.",
    anecdote:
      "Au retour de la première Révélation, elle incarne la stabilité. Elle protège, rassure, et ancre le Prophète ﷺ dans une certitude calme.",
    lessons: [
      "Les grandes missions ont besoin d’un soutien solide",
      "La foi, c’est aussi soutenir quand l’autre vacille",
    ],
    tags: ["revelation", "foyer", "soutien"],
    art: {
      imageLocked: "/cards/locked/silhouette-3.png",
      imageUnlocked: "/cards/unlocked/khadijah.png",
    },
    unlock: {
      type: "quiz_score",
      value: { worldKey: "world4_revelation", minScore: 80 },
    },
    meta: { version: 1 },
  },

  {
    id: 4,
    slug: "abu-bakr",
    name_fr: "Abū Bakr",
    name_ar: "أبو بكر رضي الله عنه",
    laqab: "As-Ṣiddīq",
    category: "companion",
    era: "both",
    worldKey: "world10_hijrah",
    rarity: "rare",
    short_hook: "Il a tout risqué… sans faire de bruit.",
    bio_short:
      "Compagnon intime. Loyauté discrète, courage calme. Un pilier de la Hijra.",
    anecdote:
      "Dans la nuit de la traque, sa présence n’est pas un détail : c’est une preuve. Il marche avec confiance, même quand l’inconnu est devant.",
    lessons: [
      "La loyauté se prouve dans la pression",
      "Le courage n’est pas toujours bruyant",
    ],
    tags: ["hijrah", "loyauté", "confiance"],
    art: {
      imageLocked: "/cards/locked/silhouette-4.png",
      imageUnlocked: "/cards/unlocked/abu-bakr.png",
    },
    unlock: {
      type: "quiz_score",
      value: { worldKey: "world10_hijrah", minScore: 80 },
    },
    meta: { version: 1 },
  },

  // 🟣 EPIC (quiz 100% + condition)
  {
    id: 5,
    slug: "ali-ibn-abi-talib",
    name_fr: "ʿAlī ibn Abī Ṭālib",
    name_ar: "علي بن أبي طالب رضي الله عنه",
    laqab: "Le courage lucide",
    category: "family",
    era: "both",
    worldKey: "world10_hijrah",
    rarity: "epic",
    short_hook: "Cette nuit-là, il a dormi à la place du danger.",
    bio_short:
      "Jeune, mais déterminé. Présence centrale dans des moments critiques.",
    anecdote:
      "Dans la nuit où tout peut s’effondrer, son geste montre une foi qui ne calcule pas comme le monde calcule.",
    lessons: [
      "La foi donne une force que la logique seule ne donne pas",
      "Parfois, le courage est une décision froide et nette",
    ],
    tags: ["hijrah", "courage", "sacrifice"],
    art: {
      imageLocked: "/cards/locked/silhouette-5.png",
      imageUnlocked: "/cards/unlocked/ali.png",
    },
    unlock: {
      type: "quiz_perfect_plus",
      value: {
        worldKey: "world10_hijrah",
        requiredScore: 100,
        // condition UX: l’utilisateur a relu la leçon (ex: bouton "Relire" ou temps mini)
        requiresLessonReplay: true,
      },
    },
    meta: { version: 1 },
  },

  {
    id: 6,
    slug: "saad-ibn-muadh",
    name_fr: "Saʿd ibn Muʿādh",
    name_ar: "سعد بن معاذ رضي الله عنه",
    laqab: "Le poids d’un choix",
    category: "companion",
    era: "madinah",
    worldKey: "world13_badr",
    rarity: "epic",
    short_hook: "Un seul engagement peut changer le destin d’un peuple.",
    bio_short:
      "Leader respecté à Médine. Ses positions pèsent lourd dans l’histoire de la communauté.",
    anecdote:
      "Dans les tournants décisifs, certaines paroles ne sont pas des discours : ce sont des actes. Son soutien est une charnière morale.",
    lessons: [
      "Le leadership, c’est assumer le prix des décisions",
      "Quand le cœur est droit, il entraîne les autres",
    ],
    tags: ["badr", "leadership", "engagement"],
    art: {
      imageLocked: "/cards/locked/silhouette-6.png",
      imageUnlocked: "/cards/unlocked/saad-ibn-muadh.png",
    },
    unlock: {
      type: "quiz_perfect_plus",
      value: {
        worldKey: "world13_badr",
        requiredScore: 100,
        requiresNoHintsUsed: true,
      },
    },
    meta: { version: 1 },
  },

  // 🟡 LEGACY (streak / long terme)
  {
    id: 7,
    slug: "umar-ibn-al-khattab",
    name_fr: "ʿUmar ibn al-Khaṭṭāb",
    name_ar: "عمر بن الخطاب رضي الله عنه",
    laqab: "Al-Fārūq",
    category: "companion",
    era: "both",
    worldKey: "world11_build",
    rarity: "legacy",
    short_hook: "La justice, quand elle devient une boussole.",
    bio_short:
      "Force de caractère, lucidité, sens de la justice. Une figure qui structure les communautés.",
    anecdote:
      "Cette carte n’est pas donnée pour un simple “finish”. Elle récompense la constance : celle qui construit vraiment, comme à Médine.",
    lessons: [
      "La force sans justice n’est qu’une brutalité",
      "La constance bâtit plus que l’émotion",
    ],
    tags: ["madinah", "justice", "constance"],
    art: {
      imageLocked: "/cards/locked/silhouette-7.png",
      imageUnlocked: "/cards/unlocked/umar.png",
    },
    unlock: {
      type: "streak",
      value: { minDays: 7 }, // simple et très motivant
    },
    meta: { version: 1 },
  },

  {
    id: 8,
    slug: "prophetic-legacy",
    name_fr: "Héritage (Carte spéciale)",
    name_ar: "إرث النبوّة",
    laqab: "Ce que tu emportes",
    category: "figure",
    era: "both",
    worldKey: "world24_final",
    rarity: "legacy",
    short_hook: "L’Histoire n’est pas racontée pour divertir… mais pour transformer.",
    bio_short:
      "Carte “héritage” : elle se mérite sur la durée et clôt le voyage intérieur.",
    anecdote:
      "Elle se débloque non pas par la vitesse, mais par la fidélité. Parce que le vrai changement arrive quand on revient… encore et encore.",
    lessons: [
      "La transformation est un processus, pas un événement",
      "Ce que tu gardes vaut plus que ce que tu consommes",
    ],
    tags: ["final", "héritage", "transformation"],
    art: {
      imageLocked: "/cards/locked/silhouette-8.png",
      imageUnlocked: "/cards/unlocked/heritage.png",
    },
    unlock: {
      type: "streak_plus_completion",
      value: { minDays: 30, requiredWorldKeys: ["world24_final"] },
    },
    meta: { version: 1 },
  },
];

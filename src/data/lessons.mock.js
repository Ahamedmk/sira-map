// Contenu MVP (on étoffera monde par monde)
// IMPORTANT : pas de représentation du Prophète ﷺ, on reste sur contexte/valeurs.

export const LESSONS_CONTENT = {
  l1: {
    title: "Arabie : tribus et désert",
    story: [
      "L’Arabie est composée de tribus : l’appartenance au clan protège, donne une identité et fixe des alliances.",
      "Le désert façonne les habitudes : endurance, sens de l’honneur, importance de la parole donnée.",
      "Les routes commerciales relient les tribus, et la réputation d’un groupe compte autant que sa force.",
    ],
    keyPoints: [
      "La tribu = protection + identité",
      "Le désert influence le caractère et les valeurs",
      "La réputation et la parole donnée sont centrales",
    ],
    reviewQuestions: [
      {
        id: "l1_q1",
        type: "mcq",
        question: "Dans ce contexte, à quoi sert principalement l’appartenance tribale ?",
        options: [
          "À apprendre une langue étrangère",
          "À obtenir protection et identité",
          "À voyager en Europe",
          "À écrire des livres",
        ],
        correctIndex: 1,
        explanation: "Dans l’Arabie tribale, la tribu protège et donne un statut social.",
        difficulty: "easy",
      },
      {
        id: "l1_q2",
        type: "tf",
        question: "Vrai/Faux : Le désert n’influence pas les valeurs sociales.",
        options: ["Vrai", "Faux"],
        correctIndex: 1,
        explanation: "Faux : le désert influence l’endurance, l’honneur et l’organisation tribale.",
        difficulty: "easy",
      },
      {
        id: "l1_q3",
        type: "mcq",
        question: "Quel élément est particulièrement important dans une société tribale ?",
        options: [
          "La réputation et la parole donnée",
          "Le nombre d’écrans par habitant",
          "La météo de Paris",
          "Les réseaux sociaux modernes",
        ],
        correctIndex: 0,
        explanation: "La confiance et la réputation structurent les relations entre tribus.",
        difficulty: "medium",
      },
    ],
  },

  l2: {
    title: "La Mecque et la Kaaba",
    story: [
      "La Mecque occupe une place centrale, notamment grâce au pèlerinage et au rôle spirituel de la Kaaba.",
      "Le commerce et l’accueil des visiteurs renforcent l’importance de la ville.",
      "Les Quraysh jouent un rôle majeur dans l’organisation et l’influence de La Mecque.",
    ],
    keyPoints: [
      "La Kaaba donne une centralité spirituelle",
      "Le pèlerinage et le commerce renforcent l’importance de La Mecque",
      "Quraysh = influence et organisation",
    ],
    reviewQuestions: [
      {
        id: "l2_q1",
        type: "mcq",
        question: "Pourquoi La Mecque est-elle centrale dans ce contexte ?",
        options: [
          "Uniquement pour son climat",
          "Pour la Kaaba et le rôle spirituel",
          "Parce qu’elle est au bord de la mer",
          "Pour ses montagnes enneigées",
        ],
        correctIndex: 1,
        explanation: "La Kaaba et le pèlerinage donnent à La Mecque une importance spirituelle.",
        difficulty: "easy",
      },
      {
        id: "l2_q2",
        type: "mcq",
        question: "Quel duo renforce aussi l’importance de la ville ?",
        options: [
          "Commerce + accueil des visiteurs",
          "Cinéma + football",
          "Neige + ski",
          "Forêts + rivières",
        ],
        correctIndex: 0,
        explanation: "Le commerce et l’accueil des pèlerins/visiteurs renforcent le poids de la Mecque.",
        difficulty: "medium",
      },
      {
        id: "l2_q3",
        type: "tf",
        question: "Vrai/Faux : Les Quraysh n’ont aucune influence à La Mecque.",
        options: ["Vrai", "Faux"],
        correctIndex: 1,
        explanation: "Faux : les Quraysh ont un rôle majeur dans l’organisation et l’influence.",
        difficulty: "easy",
      },
    ],
  },

  l3: {
    title: "Valeurs tribales et alliances",
    story: [
      "Dans une société tribale, les alliances déterminent qui protège qui, et comment les conflits se gèrent.",
      "L’honneur et la solidarité sont des piliers : on défend le clan, parfois même au prix de sacrifices.",
      "Comprendre ces codes aide à saisir pourquoi certains événements seront si difficiles… et si décisifs.",
    ],
    keyPoints: [
      "Alliances = équilibre de pouvoir et protection",
      "Honneur + solidarité = piliers sociaux",
      "Ces codes expliquent des tensions futures",
    ],
    reviewQuestions: [
      {
        id: "l3_q1",
        type: "mcq",
        question: "À quoi servent les alliances tribales ?",
        options: [
          "À créer une monnaie numérique",
          "À organiser protection et rapports de force",
          "À choisir un sport",
          "À écrire des poèmes uniquement",
        ],
        correctIndex: 1,
        explanation: "Les alliances structurent la protection et l’équilibre entre groupes.",
        difficulty: "easy",
      },
      {
        id: "l3_q2",
        type: "mcq",
        question: "Quel couple de valeurs revient le plus dans ce monde ?",
        options: [
          "Honneur + solidarité",
          "Vitesse + bruit",
          "Mode + luxe",
          "Hasard + oubli",
        ],
        correctIndex: 0,
        explanation: "Honneur et solidarité guident les comportements tribaux.",
        difficulty: "easy",
      },
      {
        id: "l3_q3",
        type: "tf",
        question: "Vrai/Faux : Comprendre les codes tribaux aide à comprendre les grands tournants de la Sîra.",
        options: ["Vrai", "Faux"],
        correctIndex: 0,
        explanation: "Vrai : le contexte social explique des choix, des oppositions et des alliances.",
        difficulty: "medium",
      },
    ],
  },

  l4: {
  title: "Religions présentes",
  story: [
    "Avant la révélation, différentes croyances coexistent : polythéisme dominant, mais aussi présence de communautés juives et chrétiennes dans certaines régions.",
    "Cette diversité crée un paysage religieux complexe : pratiques héritées, traditions, et influences extérieures.",
    "Comprendre ce contexte aide à saisir pourquoi l’appel à l’unicité bouleversera autant d’habitudes.",
  ],
  keyPoints: [
    "Diversité religieuse : polythéisme + communautés monothéistes",
    "Paysage spirituel complexe et varié",
    "L’appel à l’unicité viendra bousculer des pratiques enracinées",
  ],
  reviewQuestions: [
    {
      id: "l4_q1",
      type: "mcq",
      question: "Quel est l’élément clé du contexte religieux avant la révélation ?",
      options: [
        "Une seule croyance uniforme partout",
        "Une diversité de croyances et influences",
        "Aucune spiritualité",
        "Une société athée",
      ],
      correctIndex: 1,
      explanation: "On observe plusieurs croyances et influences selon les régions.",
      difficulty: "easy",
    },
    {
      id: "l4_q2",
      type: "tf",
      question: "Vrai/Faux : Comprendre ce contexte aide à comprendre l’impact de l’appel à l’unicité.",
      options: ["Vrai", "Faux"],
      correctIndex: 0,
      explanation: "Vrai : le changement touche des habitudes profondes.",
      difficulty: "easy",
    },
    {
      id: "l4_q3",
      type: "mcq",
      question: "Pourquoi ce paysage est-il dit ‘complexe’ ?",
      options: [
        "Parce que tout le monde suivait la même pratique",
        "Parce qu’il y avait plusieurs traditions et influences",
        "Parce que personne ne croyait",
        "Parce qu’il n’y avait aucune règle sociale",
      ],
      correctIndex: 1,
      explanation: "Différentes traditions coexistent et s’influencent.",
      difficulty: "medium",
    },
  ],
},

l5: {
  title: "Naissance : contexte familial",
  story: [
    "Pour comprendre les débuts, il faut retenir une chose : la société est tribale, et la famille élargie joue un rôle majeur dans la protection.",
    "Dans ce contexte, l’honneur du clan, la solidarité et le respect des liens familiaux ont une importance réelle, concrète, quotidienne.",
    "L’environnement social façonne l’enfance : il peut protéger… ou exposer.",
  ],
  keyPoints: [
    "Famille/tribu = protection concrète",
    "Solidarité et honneur structurent la société",
    "Le contexte social influence directement l’enfance",
  ],
  reviewQuestions: [
    {
      id: "l5_q1",
      type: "mcq",
      question: "Dans une société tribale, quel est le rôle principal de la famille élargie ?",
      options: [
        "Organiser des jeux vidéo",
        "Offrir protection et soutien",
        "Faire de la météo",
        "Créer une banque",
      ],
      correctIndex: 1,
      explanation: "La famille/clan protège et soutient face aux difficultés.",
      difficulty: "easy",
    },
    {
      id: "l5_q2",
      type: "tf",
      question: "Vrai/Faux : L’honneur et la solidarité n’ont aucun impact sur la vie quotidienne.",
      options: ["Vrai", "Faux"],
      correctIndex: 1,
      explanation: "Faux : ce sont des piliers sociaux.",
      difficulty: "easy",
    },
    {
      id: "l5_q3",
      type: "mcq",
      question: "Pourquoi le contexte social est important pour comprendre l’enfance ?",
      options: [
        "Parce qu’il détermine uniquement la nourriture",
        "Parce qu’il peut protéger ou exposer",
        "Parce qu’il interdit toute relation",
        "Parce qu’il supprime les règles",
      ],
      correctIndex: 1,
      explanation: "L’environnement social a un effet direct sur la sécurité et le soutien.",
      difficulty: "medium",
    },
  ],
},

l6: {
  title: "Orphelinage et protection",
  story: [
    "Dans une société où la protection dépend beaucoup du clan, perdre un soutien proche peut changer l’équilibre d’une vie.",
    "La protection passe alors par des figures de référence : membres de la famille, responsables du clan, personnes qui ‘portent’ l’enfant.",
    "Ces étapes montrent une chose : la force d’un avenir ne dépend pas seulement de confort, mais aussi de valeurs, de soutien, et de résilience.",
  ],
  keyPoints: [
    "La protection est liée aux liens familiaux",
    "Des figures de référence assurent la stabilité",
    "Résilience : les épreuves peuvent forger",
  ],
  reviewQuestions: [
    {
      id: "l6_q1",
      type: "mcq",
      question: "Dans ce contexte, pourquoi la protection est-elle si importante ?",
      options: [
        "Parce qu’elle remplace le commerce",
        "Parce qu’elle dépend du clan et structure la sécurité",
        "Parce qu’elle empêche toute alliance",
        "Parce qu’elle supprime l’honneur",
      ],
      correctIndex: 1,
      explanation: "Dans une société tribale, la sécurité est très liée au clan.",
      difficulty: "easy",
    },
    {
      id: "l6_q2",
      type: "mcq",
      question: "Qui peut jouer un rôle de stabilisation pour un enfant ?",
      options: [
        "Des figures de référence dans la famille/clan",
        "Uniquement des inconnus",
        "Seulement des voyageurs",
        "Uniquement des marchands",
      ],
      correctIndex: 0,
      explanation: "La stabilité vient souvent de figures proches et reconnues.",
      difficulty: "easy",
    },
    {
      id: "l6_q3",
      type: "tf",
      question: "Vrai/Faux : Les épreuves peuvent développer la résilience.",
      options: ["Vrai", "Faux"],
      correctIndex: 0,
      explanation: "Vrai : les difficultés peuvent forger la solidité intérieure.",
      difficulty: "medium",
    },
  ],
},

l7: {
  title: "Jeunesse : confiance et réputation",
  story: [
    "Dans une société où la parole donnée vaut beaucoup, la confiance devient un capital.",
    "La réputation se construit lentement : honnêteté, droiture, respect des engagements.",
    "Une bonne réputation ouvre des portes : relations, opportunités, crédibilité.",
  ],
  keyPoints: [
    "La confiance est un capital social",
    "La réputation se construit par la droiture",
    "La crédibilité ouvre des portes",
  ],
  reviewQuestions: [
    {
      id: "l7_q1",
      type: "mcq",
      question: "Dans une société où la parole donnée compte, que représente la confiance ?",
      options: [
        "Un détail sans valeur",
        "Un capital social",
        "Un jeu",
        "Un mythe",
      ],
      correctIndex: 1,
      explanation: "La confiance a une valeur sociale immense.",
      difficulty: "easy",
    },
    {
      id: "l7_q2",
      type: "mcq",
      question: "Comment se construit la réputation ?",
      options: [
        "En changeant d’avis souvent",
        "Par honnêteté et respect des engagements",
        "Par hasard uniquement",
        "En évitant toute responsabilité",
      ],
      correctIndex: 1,
      explanation: "La droiture et la constance construisent la réputation.",
      difficulty: "easy",
    },
    {
      id: "l7_q3",
      type: "mcq",
      question: "Quel effet peut avoir une bonne réputation ?",
      options: [
        "Fermer toutes les portes",
        "Créer de la crédibilité et des opportunités",
        "Supprimer les alliances",
        "Isoler totalement",
      ],
      correctIndex: 1,
      explanation: "Une réputation solide crée des opportunités et de la crédibilité.",
      difficulty: "medium",
    },
  ],
},

l8: {
  title: "Avant la révélation : quête de sens",
  story: [
    "Avant les grands tournants, il y a souvent une phase silencieuse : réflexion, observation, recherche intérieure.",
    "Le contexte social et spirituel est chargé : pratiques installées, habitudes collectives, et questions existentielles.",
    "Cette quête de sens prépare le cœur à recevoir un message qui transformera tout.",
  ],
  keyPoints: [
    "La quête de sens précède souvent les grands tournants",
    "Contexte spirituel chargé et questions profondes",
    "Préparation intérieure avant le changement majeur",
  ],
  reviewQuestions: [
    {
      id: "l8_q1",
      type: "mcq",
      question: "Que précède souvent les grands tournants ?",
      options: [
        "Une phase de réflexion et recherche",
        "Une phase de distraction permanente",
        "Une absence totale de questions",
        "Une rupture de toutes les relations",
      ],
      correctIndex: 0,
      explanation: "Une période de réflexion et de recherche intérieure précède souvent un tournant.",
      difficulty: "easy",
    },
    {
      id: "l8_q2",
      type: "tf",
      question: "Vrai/Faux : Un contexte spirituel ‘chargé’ peut susciter des questions existentielles.",
      options: ["Vrai", "Faux"],
      correctIndex: 0,
      explanation: "Vrai : quand les pratiques sont installées, les questions peuvent émerger fortement.",
      difficulty: "easy",
    },
    {
      id: "l8_q3",
      type: "mcq",
      question: "Pourquoi la ‘préparation intérieure’ est-elle importante ?",
      options: [
        "Parce qu’elle empêche toute évolution",
        "Parce qu’elle prépare à accueillir un changement majeur",
        "Parce qu’elle remplace l’apprentissage",
        "Parce qu’elle supprime les émotions",
      ],
      correctIndex: 1,
      explanation: "La préparation intérieure facilite l’accueil d’un changement profond.",
      difficulty: "medium",
    },
  ],
},

// -------------------- MONDE 3 --------------------
l9: {
  title: "La grotte et la première révélation",
  story: [
    "Un moment de solitude et de réflexion prépare un tournant décisif.",
    "La première révélation marque le début d’une mission : transmettre, éveiller, transformer.",
    "C’est un choc spirituel : ce n’est pas une simple idée, c’est un appel."
  ],
  keyPoints: [
    "Tournant : début de la mission",
    "Révélation = responsabilité, pas seulement émotion",
    "Avant l’action : réflexion et purification intérieure"
  ],
  reviewQuestions: [
    { id:"l9_q1", type:"mcq", question:"Quel est le sens principal de ce moment ?", options:["Un simple voyage","Le début d’une mission","Une fête tribale","Un commerce"], correctIndex:1, explanation:"C’est le début d’une mission de transmission.", difficulty:"easy" },
    { id:"l9_q2", type:"tf", question:"Vrai/Faux : La révélation implique une responsabilité.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : elle oblige à agir et transmettre.", difficulty:"easy" },
    { id:"l9_q3", type:"mcq", question:"Quel élément précède souvent les grands tournants ?", options:["Distraction totale","Solitude et réflexion","Pression sociale","Bruit permanent"], correctIndex:1, explanation:"La réflexion prépare le cœur.", difficulty:"medium" }
  ]
},
l10: {
  title: "Les premiers croyants",
  story: [
    "Au début, la force ne vient pas du nombre mais de la sincérité.",
    "Les premiers croyants forment un noyau : confiance, patience, entraide.",
    "Le message change les priorités : vérité avant confort."
  ],
  keyPoints: [
    "Noyau initial = sincérité et cohésion",
    "Entraide et patience",
    "La vérité demande parfois des sacrifices"
  ],
  reviewQuestions: [
    { id:"l10_q1", type:"mcq", question:"Au début, qu’est-ce qui compte le plus ?", options:["Le nombre","La sincérité","La richesse","La popularité"], correctIndex:1, explanation:"La sincérité construit les fondations.", difficulty:"easy" },
    { id:"l10_q2", type:"tf", question:"Vrai/Faux : L’entraide fait partie des piliers du groupe.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : la cohésion est vitale.", difficulty:"easy" },
    { id:"l10_q3", type:"mcq", question:"Quel est le vrai test au début ?", options:["Gagner vite","Rester constant malgré la pression","Se faire aimer","Se cacher toujours"], correctIndex:1, explanation:"La constance est le test majeur.", difficulty:"medium" }
  ]
},
l11: {
  title: "Les premiers messages : tawḥīd et responsabilité",
  story: [
    "Le cœur du message : l’unicité d’Allah et la purification des valeurs.",
    "Cela implique une responsabilité : justice, vérité, cohérence.",
    "Ce n’est pas un slogan : c’est un changement de vie."
  ],
  keyPoints: [
    "Tawḥīd : unicité et recentrage",
    "Responsabilité morale et sociale",
    "Changement concret de comportements"
  ],
  reviewQuestions: [
    { id:"l11_q1", type:"mcq", question:"Quel est le cœur du message ?", options:["Tribu","Tawḥīd","Commerce","Loisir"], correctIndex:1, explanation:"L’unicité est au centre.", difficulty:"easy" },
    { id:"l11_q2", type:"mcq", question:"Quel effet attend-on du message ?", options:["Rester identique","Changer les valeurs et actes","Devenir célèbre","Éviter toute règle"], correctIndex:1, explanation:"C’est un changement de vie.", difficulty:"easy" },
    { id:"l11_q3", type:"tf", question:"Vrai/Faux : La foi implique aussi une responsabilité.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : justice et cohérence.", difficulty:"medium" }
  ]
},
l12: {
  title: "L’annonce publique",
  story: [
    "Passer du privé au public change tout : la pression augmente.",
    "Les réactions varient : curiosité, rejet, peur du changement.",
    "Un message public révèle qui cherche la vérité… et qui protège ses intérêts."
  ],
  keyPoints: [
    "Annonce publique = hausse de pression",
    "Réactions variées",
    "Le changement menace les intérêts établis"
  ],
  reviewQuestions: [
    { id:"l12_q1", type:"tf", question:"Vrai/Faux : Annoncer publiquement augmente la pression.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : l’opposition devient visible.", difficulty:"easy" },
    { id:"l12_q2", type:"mcq", question:"Pourquoi certains rejettent-ils ?", options:["Ils aiment changer","Ils craignent de perdre leurs intérêts","Ils veulent apprendre","Ils cherchent la justice"], correctIndex:1, explanation:"Le changement menace des équilibres.", difficulty:"medium" },
    { id:"l12_q3", type:"mcq", question:"Quel est un effet du public ?", options:["Tout devient facile","Les positions se clarifient","Personne ne réagit","Le message disparaît"], correctIndex:1, explanation:"Le public révèle les positions.", difficulty:"easy" }
  ]
},

// -------------------- MONDE 4 --------------------
l13: {
  title: "Pourquoi l’opposition ?",
  story: [
    "L’opposition n’est pas seulement religieuse : elle est sociale, économique, symbolique.",
    "Le message remet en cause des hiérarchies et des habitudes.",
    "Quand un système se sent menacé, il réagit."
  ],
  keyPoints: [
    "Opposition multi-facteurs (social/éco)",
    "Remise en cause des hiérarchies",
    "Un système menacé réagit"
  ],
  reviewQuestions: [
    { id:"l13_q1", type:"mcq", question:"L’opposition est surtout…", options:["Uniquement météo","Sociale + économique + symbolique","Un jeu","Sans raison"], correctIndex:1, explanation:"Elle touche plusieurs intérêts.", difficulty:"easy" },
    { id:"l13_q2", type:"tf", question:"Vrai/Faux : Remettre en cause un système peut déclencher une réaction.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : c’est une dynamique classique.", difficulty:"easy" },
    { id:"l13_q3", type:"mcq", question:"Qu’est-ce qui est visé par le message ?", options:["Le cœur et les valeurs","Le sport","La mode","Le hasard"], correctIndex:0, explanation:"Il transforme les valeurs.", difficulty:"medium" }
  ]
},
l14: {
  title: "Persécutions et constance",
  story: [
    "La pression vise à faire reculer : moquerie, isolement, intimidation.",
    "La constance se construit par la solidarité et la patience.",
    "Quand on ne peut pas choisir les épreuves, on choisit la réponse."
  ],
  keyPoints: [
    "Pression = faire reculer",
    "Constance = solidarité + patience",
    "Choisir sa réponse"
  ],
  reviewQuestions: [
    { id:"l14_q1", type:"mcq", question:"But de la pression ?", options:["Encourager","Faire reculer","Récompenser","Informer"], correctIndex:1, explanation:"Elle cherche à stopper l’avancée.", difficulty:"easy" },
    { id:"l14_q2", type:"tf", question:"Vrai/Faux : Solidarité aide à tenir.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : elle donne force.", difficulty:"easy" },
    { id:"l14_q3", type:"mcq", question:"La constance dépend surtout…", options:["Du hasard","D’une réponse choisie","De la mode","Du silence"], correctIndex:1, explanation:"On choisit sa posture.", difficulty:"medium" }
  ]
},
l15: {
  title: "Migration en Abyssinie",
  story: [
    "Face à l’oppression, une solution : chercher un lieu de sécurité.",
    "La migration enseigne : protéger la foi et la dignité peut nécessiter mouvement et sacrifice.",
    "C’est une stratégie : survivre pour continuer."
  ],
  keyPoints: [
    "Migration = protection",
    "Sacrifice pour préserver la foi",
    "Stratégie de continuité"
  ],
  reviewQuestions: [
    { id:"l15_q1", type:"mcq", question:"La migration vise surtout à…", options:["S’amuser","Se protéger","Devenir riche vite","Éviter toute règle"], correctIndex:1, explanation:"Elle protège des persécutions.", difficulty:"easy" },
    { id:"l15_q2", type:"tf", question:"Vrai/Faux : Bouger peut être une stratégie de survie.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : pour continuer la mission.", difficulty:"easy" },
    { id:"l15_q3", type:"mcq", question:"Quel principe ressort ?", options:["La dignité et la foi","Le luxe","Le bruit","La paresse"], correctIndex:0, explanation:"Préserver la dignité et la foi.", difficulty:"medium" }
  ]
},
l16: {
  title: "Le boycott social",
  story: [
    "Quand la force brute ne suffit pas, un système utilise l’isolement : couper liens, commerce, soutien.",
    "Le boycott teste la cohésion : qui reste loyal, qui cède ?",
    "L’endurance collective devient un acte de foi."
  ],
  keyPoints: [
    "Boycott = isolement social/éco",
    "Test de cohésion",
    "Endurance collective"
  ],
  reviewQuestions: [
    { id:"l16_q1", type:"mcq", question:"Le boycott sert à…", options:["Renforcer l’entraide","Isoler et affaiblir","Apprendre","Récompenser"], correctIndex:1, explanation:"Il coupe soutien et ressources.", difficulty:"easy" },
    { id:"l16_q2", type:"tf", question:"Vrai/Faux : Le boycott teste la cohésion.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : il révèle les loyautés.", difficulty:"easy" },
    { id:"l16_q3", type:"mcq", question:"Quelle force est centrale ?", options:["Endurance collective","Hasard","Ornement","Oubli"], correctIndex:0, explanation:"Tenir ensemble est clé.", difficulty:"medium" }
  ]
},

// -------------------- MONDE 5 --------------------
l17: {
  title: "L’année de tristesse : pertes et épreuve",
  story: [
    "Certaines années enlèvent des appuis : pertes, chagrin, fatigue.",
    "Mais l’épreuve peut clarifier : ce qui est essentiel tient au cœur et à la reliance.",
    "La mission continue même quand l’émotion pèse."
  ],
  keyPoints: [
    "Perte d’appuis = épreuve",
    "Reliance et clarté",
    "Continuité malgré la douleur"
  ],
  reviewQuestions: [
    { id:"l17_q1", type:"mcq", question:"Que révèle souvent l’épreuve ?", options:["Le superficiel","L’essentiel","Le hasard","La vitesse"], correctIndex:1, explanation:"Elle clarifie les priorités.", difficulty:"easy" },
    { id:"l17_q2", type:"tf", question:"Vrai/Faux : La douleur peut coexister avec la mission.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : on avance malgré tout.", difficulty:"easy" },
    { id:"l17_q3", type:"mcq", question:"L’appui le plus solide est…", options:["La réputation","La reliance (tawakkul)","Le luxe","L’orgueil"], correctIndex:1, explanation:"La reliance stabilise.", difficulty:"medium" }
  ]
},
l18: {
  title: "Ṭāʾif : rejet et dignité",
  story: [
    "Quand une porte se ferme, la dignité reste : répondre avec hauteur et patience.",
    "Le rejet n’est pas la fin : c’est une étape qui affine la confiance en Allah.",
    "Le cœur apprend à ne pas dépendre de l’approbation des gens."
  ],
  keyPoints: [
    "Rejet ≠ fin",
    "Dignité + patience",
    "Indépendance vis-à-vis de l’approbation"
  ],
  reviewQuestions: [
    { id:"l18_q1", type:"tf", question:"Vrai/Faux : Le rejet peut être une étape, pas une fin.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : il forge et redirige.", difficulty:"easy" },
    { id:"l18_q2", type:"mcq", question:"La dignité se voit dans…", options:["La réaction","La colère brute","Le mépris","Le silence total"], correctIndex:0, explanation:"La réaction choisie est clé.", difficulty:"easy" },
    { id:"l18_q3", type:"mcq", question:"Quel piège évite-t-on ?", options:["Chercher l’approbation à tout prix","Apprendre","Réviser","Comprendre"], correctIndex:0, explanation:"On ne dépend pas des gens.", difficulty:"medium" }
  ]
},
l19: {
  title: "Isrāʾ & Miʿrāj : sens et impact",
  story: [
    "Un événement extraordinaire renforce le cœur dans une période difficile.",
    "Il rappelle : la mission a une dimension céleste, pas seulement terrestre.",
    "L’impact : réancrer la prière et la confiance comme piliers."
  ],
  keyPoints: [
    "Renforcement du cœur",
    "Dimension spirituelle forte",
    "Prière et confiance comme piliers"
  ],
  reviewQuestions: [
    { id:"l19_q1", type:"mcq", question:"Quel effet principal sur le cœur ?", options:["Affaiblir","Renforcer","Divertir","Endormir"], correctIndex:1, explanation:"C’est un soutien spirituel.", difficulty:"easy" },
    { id:"l19_q2", type:"tf", question:"Vrai/Faux : La mission n’est pas uniquement terrestre.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : dimension spirituelle.", difficulty:"easy" },
    { id:"l19_q3", type:"mcq", question:"Deux piliers mis en avant :", options:["Prière + confiance","Mode + luxe","Bruit + vitesse","Colère + orgueil"], correctIndex:0, explanation:"Prière et confiance.", difficulty:"medium" }
  ]
},
l20: {
  title: "Pledges : ouverture vers Médine",
  story: [
    "Quand un blocage persiste, Allah ouvre une autre voie.",
    "Une nouvelle terre peut accueillir le message : c’est une transition stratégique.",
    "Les alliances et promesses fondent une future société."
  ],
  keyPoints: [
    "Ouverture après blocage",
    "Transition stratégique",
    "Promesses = fondations"
  ],
  reviewQuestions: [
    { id:"l20_q1", type:"mcq", question:"Que signifie l’ouverture vers Médine ?", options:["Un hasard","Une transition stratégique","Une fin","Une distraction"], correctIndex:1, explanation:"C’est une voie nouvelle.", difficulty:"easy" },
    { id:"l20_q2", type:"tf", question:"Vrai/Faux : Les promesses fondent la confiance.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : elles structurent l’avenir.", difficulty:"easy" },
    { id:"l20_q3", type:"mcq", question:"Quand un blocage persiste, on…", options:["Abandonne","Cherche la voie qu’Allah ouvre","Insulte","Oublie"], correctIndex:1, explanation:"On suit les ouvertures d’Allah.", difficulty:"medium" }
  ]
},

// -------------------- MONDE 6 --------------------
l21: {
  title: "Hijra : stratégie et confiance",
  story: [
    "La Hijra combine deux forces : planification et tawakkul.",
    "Ce n’est pas fuir : c’est construire un futur viable.",
    "Elle enseigne que la foi agit, organise, avance."
  ],
  keyPoints: [
    "Planification + tawakkul",
    "Construire un futur viable",
    "Foi = action"
  ],
  reviewQuestions: [
    { id:"l21_q1", type:"mcq", question:"La Hijra combine…", options:["Hasard + peur","Planification + tawakkul","Bruit + vitesse","Orgueil + colère"], correctIndex:1, explanation:"Les deux ensemble.", difficulty:"easy" },
    { id:"l21_q2", type:"tf", question:"Vrai/Faux : Ce n’est pas une fuite, c’est une construction.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : c’est un projet.", difficulty:"easy" },
    { id:"l21_q3", type:"mcq", question:"La foi authentique…", options:["Reste passive","Agit et s’organise","Ignore la réalité","Rejette toute cause"], correctIndex:1, explanation:"Action avec reliance.", difficulty:"medium" }
  ]
},
l22: {
  title: "Médine : fraternité et cohésion",
  story: [
    "Une nouvelle société a besoin de liens : fraternité, justice, respect.",
    "On transforme les rivalités en unité par des principes clairs.",
    "Une communauté forte = une communauté solidaire."
  ],
  keyPoints: [
    "Fraternité = base sociale",
    "Unité par principes",
    "Solidarité = force"
  ],
  reviewQuestions: [
    { id:"l22_q1", type:"mcq", question:"Base sociale à Médine :", options:["Fraternité","Divisions","Mépris","Isolement"], correctIndex:0, explanation:"Fraternité et liens.", difficulty:"easy" },
    { id:"l22_q2", type:"tf", question:"Vrai/Faux : Les principes peuvent transformer les rivalités.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : ils unifient.", difficulty:"easy" },
    { id:"l22_q3", type:"mcq", question:"Communauté forte =", options:["Solidaire","Froide","Égoïste","Désorganisée"], correctIndex:0, explanation:"Solidarité.", difficulty:"medium" }
  ]
},
l23: {
  title: "La mosquée : centre de vie",
  story: [
    "La mosquée n’est pas seulement un lieu de prière : elle structure la vie.",
    "On y apprend, on s’organise, on renforce l’unité.",
    "Un centre clair évite la dispersion."
  ],
  keyPoints: [
    "Mosquée = centre de vie",
    "Apprentissage + organisation",
    "Unité et clarté"
  ],
  reviewQuestions: [
    { id:"l23_q1", type:"tf", question:"Vrai/Faux : La mosquée structure aussi l’organisation.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : rôle social.", difficulty:"easy" },
    { id:"l23_q2", type:"mcq", question:"Pourquoi un centre est utile ?", options:["Pour disperser","Pour éviter la dispersion","Pour ignorer","Pour compliquer"], correctIndex:1, explanation:"Il centralise et unit.", difficulty:"easy" },
    { id:"l23_q3", type:"mcq", question:"On y renforce surtout…", options:["L’unité","Le chaos","L’orgueil","La paresse"], correctIndex:0, explanation:"Unité et cohésion.", difficulty:"medium" }
  ]
},
l24: {
  title: "La charte : règles et coexistence",
  story: [
    "Une société a besoin de règles : droits, devoirs, sécurité.",
    "La coexistence demande justice et engagement : chacun connaît sa place.",
    "Un cadre protège la communauté et réduit les conflits."
  ],
  keyPoints: [
    "Règles = stabilité",
    "Justice pour coexistence",
    "Cadre réduit conflits"
  ],
  reviewQuestions: [
    { id:"l24_q1", type:"mcq", question:"Pourquoi des règles ?", options:["Pour créer du chaos","Pour la stabilité","Pour ignorer les droits","Pour diviser"], correctIndex:1, explanation:"Stabilité et sécurité.", difficulty:"easy" },
    { id:"l24_q2", type:"tf", question:"Vrai/Faux : La justice aide la coexistence.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : elle pacifie.", difficulty:"easy" },
    { id:"l24_q3", type:"mcq", question:"Un cadre sert à…", options:["Augmenter conflits","Réduire conflits","Éteindre la foi","Supprimer l’apprentissage"], correctIndex:1, explanation:"Il protège et limite les tensions.", difficulty:"medium" }
  ]
},

// -------------------- MONDE 7 --------------------
l25: {
  title: "Badr : une victoire fondatrice",
  story: [
    "Badr marque un tournant : une victoire qui consolide l’identité et la confiance.",
    "Mais la victoire n’est pas juste militaire : elle est morale et communautaire.",
    "Elle enseigne : unité, discipline, reliance."
  ],
  keyPoints: [
    "Tournant fondateur",
    "Victoire morale et communautaire",
    "Unité + discipline + reliance"
  ],
  reviewQuestions: [
    { id:"l25_q1", type:"mcq", question:"Badr est surtout…", options:["Un détail","Un tournant fondateur","Un festival","Une rumeur"], correctIndex:1, explanation:"C’est un tournant.", difficulty:"easy" },
    { id:"l25_q2", type:"tf", question:"Vrai/Faux : La victoire est aussi morale.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : elle renforce la communauté.", difficulty:"easy" },
    { id:"l25_q3", type:"mcq", question:"Trois leçons :", options:["Unité, discipline, reliance","Mode, luxe, vitesse","Colère, orgueil, peur","Bruit, chaos, oubli"], correctIndex:0, explanation:"Unité, discipline, reliance.", difficulty:"medium" }
  ]
},
l26: {
  title: "Uḥud : leçons de discipline",
  story: [
    "Uḥud montre que l’indiscipline coûte cher.",
    "Même une bonne cause exige règles et constance.",
    "L’épreuve éduque : revenir aux principes."
  ],
  keyPoints: [
    "Indiscipline = conséquence",
    "Règles + constance",
    "Retour aux principes"
  ],
  reviewQuestions: [
    { id:"l26_q1", type:"mcq", question:"Uḥud enseigne surtout…", options:["La distraction","La discipline","La paresse","Le hasard"], correctIndex:1, explanation:"Discipline et obéissance aux principes.", difficulty:"easy" },
    { id:"l26_q2", type:"tf", question:"Vrai/Faux : Une bonne cause suffit sans règles.", options:["Vrai","Faux"], correctIndex:1, explanation:"Faux : il faut constance et règles.", difficulty:"easy" },
    { id:"l26_q3", type:"mcq", question:"Après l’épreuve, on…", options:["Abandonne","Revient aux principes","Se moque","Ignore"], correctIndex:1, explanation:"Revenir aux principes.", difficulty:"medium" }
  ]
},
l27: {
  title: "Al-Aḥzāb : unité sous pression",
  story: [
    "Quand plusieurs forces s’allient contre toi, la cohésion devient vitale.",
    "La pression révèle la solidité interne : confiance, organisation, patience.",
    "La communauté apprend à tenir ensemble."
  ],
  keyPoints: [
    "Pression externe forte",
    "Cohésion vitale",
    "Organisation + patience"
  ],
  reviewQuestions: [
    { id:"l27_q1", type:"tf", question:"Vrai/Faux : La cohésion devient vitale sous pression.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : sans unité, on casse.", difficulty:"easy" },
    { id:"l27_q2", type:"mcq", question:"Sous pression, on a besoin de…", options:["Organisation","Désordre","Moqueries","Oubli"], correctIndex:0, explanation:"Organisation et patience.", difficulty:"easy" },
    { id:"l27_q3", type:"mcq", question:"La pression révèle…", options:["Le style","La solidité interne","Le luxe","La météo"], correctIndex:1, explanation:"Elle teste la solidité.", difficulty:"medium" }
  ]
},
l28: {
  title: "Ḥudaybiyya : victoire sans bataille",
  story: [
    "Parfois, la victoire vient par la patience et la diplomatie.",
    "Un accord intelligent peut ouvrir des portes fermées depuis longtemps.",
    "Le résultat : une expansion plus profonde que la confrontation."
  ],
  keyPoints: [
    "Patience + stratégie",
    "Accord = ouverture",
    "Victoire par sagesse"
  ],
  reviewQuestions: [
    { id:"l28_q1", type:"mcq", question:"Ḥudaybiyya montre que…", options:["Se battre toujours","La patience peut être victoire","La force brute suffit","La diplomatie est inutile"], correctIndex:1, explanation:"Patience et stratégie.", difficulty:"easy" },
    { id:"l28_q2", type:"tf", question:"Vrai/Faux : Un accord peut ouvrir des portes.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : stratégie long terme.", difficulty:"easy" },
    { id:"l28_q3", type:"mcq", question:"La victoire ici est surtout…", options:["Symbolique et stratégique","Un hasard","Une distraction","Une défaite"], correctIndex:0, explanation:"Stratégique et profonde.", difficulty:"medium" }
  ]
},

// -------------------- MONDE 8 --------------------
l29: {
  title: "Conquête de la Mecque : pardon et grandeur",
  story: [
    "Quand la victoire arrive, le vrai test est la manière de l’utiliser.",
    "Le pardon transforme une victoire militaire en victoire morale.",
    "La grandeur se voit quand on pourrait se venger… mais qu’on choisit la miséricorde."
  ],
  keyPoints: [
    "Victoire = test moral",
    "Pardon = transformation",
    "Grandeur = miséricorde"
  ],
  reviewQuestions: [
    { id:"l29_q1", type:"mcq", question:"Le vrai test après la victoire ?", options:["Le bruit","La manière d’agir","La mode","La vitesse"], correctIndex:1, explanation:"Le comportement après victoire.", difficulty:"easy" },
    { id:"l29_q2", type:"tf", question:"Vrai/Faux : Le pardon peut transformer l’histoire.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : il change les cœurs.", difficulty:"easy" },
    { id:"l29_q3", type:"mcq", question:"La grandeur se voit quand…", options:["On se venge","On choisit la miséricorde","On humilie","On détruit"], correctIndex:1, explanation:"Choix de la miséricorde.", difficulty:"medium" }
  ]
},
l30: {
  title: "Unification et stabilité",
  story: [
    "Après les grands conflits, la priorité devient : stabiliser, enseigner, unifier.",
    "L’unification demande justice et pédagogie, pas seulement force.",
    "La stabilité durable se construit sur des valeurs."
  ],
  keyPoints: [
    "Stabiliser et enseigner",
    "Justice + pédagogie",
    "Valeurs = stabilité durable"
  ],
  reviewQuestions: [
    { id:"l30_q1", type:"mcq", question:"Après conflits, priorité :", options:["Diviser","Stabiliser et enseigner","Ignorer","Recommencer"], correctIndex:1, explanation:"Stabiliser et enseigner.", difficulty:"easy" },
    { id:"l30_q2", type:"tf", question:"Vrai/Faux : L’unité se construit seulement par la force.", options:["Vrai","Faux"], correctIndex:1, explanation:"Faux : justice et pédagogie.", difficulty:"easy" },
    { id:"l30_q3", type:"mcq", question:"Stabilité durable =", options:["Valeurs","Hasard","Bruit","Vengeance"], correctIndex:0, explanation:"Valeurs et justice.", difficulty:"medium" }
  ]
},
l31: {
  title: "Adieux : valeurs finales et priorité du cœur",
  story: [
    "Les derniers messages insistent sur l’essentiel : foi, justice, dignité, liens.",
    "Une fin de mission rappelle : ce qui compte, c’est ce qu’on laisse dans les cœurs.",
    "Le message final recentre la communauté sur les principes."
  ],
  keyPoints: [
    "Essentiels : justice, dignité, liens",
    "Héritage = ce qui reste dans les cœurs",
    "Recentrage sur principes"
  ],
  reviewQuestions: [
    { id:"l31_q1", type:"mcq", question:"Les messages finaux insistent sur…", options:["Le luxe","L’essentiel (justice, liens)","La mode","Le hasard"], correctIndex:1, explanation:"Essentiels : justice et liens.", difficulty:"easy" },
    { id:"l31_q2", type:"tf", question:"Vrai/Faux : L’héritage le plus fort est dans les cœurs.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : valeurs transmises.", difficulty:"easy" },
    { id:"l31_q3", type:"mcq", question:"Le but final :", options:["Disperser","Recentrer sur principes","Diviser","Oublier"], correctIndex:1, explanation:"Recentrage sur principes.", difficulty:"medium" }
  ]
},
l32: {
  title: "Derniers jours et héritage",
  story: [
    "Les derniers jours rappellent la fragilité humaine et la permanence du message.",
    "La communauté doit apprendre à continuer : principes, cohésion, responsabilité.",
    "La mission se termine, mais l’héritage commence dans la vie des croyants."
  ],
  keyPoints: [
    "Fragilité humaine, message permanent",
    "Continuer par principes",
    "Héritage vivant"
  ],
  reviewQuestions: [
    { id:"l32_q1", type:"tf", question:"Vrai/Faux : Le message reste, même si la mission terrestre se termine.", options:["Vrai","Faux"], correctIndex:0, explanation:"Vrai : l’héritage continue.", difficulty:"easy" },
    { id:"l32_q2", type:"mcq", question:"Que doit apprendre la communauté ?", options:["Abandonner","Continuer par principes","Se diviser","Oublier"], correctIndex:1, explanation:"Continuer par principes.", difficulty:"easy" },
    { id:"l32_q3", type:"mcq", question:"Héritage vivant =", options:["Valeurs appliquées","Souvenir vide","Mode","Hasard"], correctIndex:0, explanation:"Valeurs mises en pratique.", difficulty:"medium" }
  ]
},


};

export function getLessonContent(lessonId) {
  return LESSONS_CONTENT[lessonId] || null;
}

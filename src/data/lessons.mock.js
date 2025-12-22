// Contenu MVP (on étoffera monde par monde)
// IMPORTANT : pas de représentation du Prophète ﷺ, on reste sur contexte/valeurs.
import world1_l1 from "../assets/illustrations/worlds/world1-l1.png";
import world1_l2 from "../assets/illustrations/worlds/world1-l2.png";
import world1_l3 from "../assets/illustrations/worlds/world1-l3.png";
import world1_l4 from "../assets/illustrations/worlds/world1-l4.png";
import world2_l5 from "../assets/illustrations/worlds/world2-l5.png";
import world2_l6 from "../assets/illustrations/worlds/world2-l6.png";
import world2_l7 from "../assets/illustrations/worlds/world2-l7.png";
import world2_l8 from "../assets/illustrations/worlds/world2-l8.png";

export const LESSONS_CONTENT = {
// --- WORLD 1 (avec sous-titres) ---
l1: {
  title: "Avant la naissance : une péninsule en attente",
  illustration: world1_l1,
  storyBlocks: [
    { type: "subtitle", text: "🟤 Le silence avant le bouleversement" },
    { type: "p", text: "L’Arabie n’est pas un empire. Elle n’a ni trône, ni armée centrale, ni capitale qui impose sa loi à tout le désert." },
    { type: "p", text: "Et pourtant, elle n’est pas isolée. Des caravanes montent vers le Shām et redescendent vers le Yémen, portant marchandises, nouvelles… et visions du monde." },
    { type: "p", text: "Ici, le désert n’est pas un décor : il impose son rythme. Il pèse sur les corps, il façonne les caractères. On y apprend la patience, la résistance, et l’art de survivre avec peu." },

    { type: "subtitle", text: "🏜️ La tribu : le vrai bouclier" },
    { type: "p", text: "Dans un tel environnement, l’homme seul ne pèse pas lourd. Ce qui protège, ce n’est pas une institution : c’est la tribu." },
    { type: "p", text: "La tribu donne un nom, une place, des alliances. Sans elle, on marche sans ombre. Avec elle, on existe, on est défendu, parfois même quand on a tort." },
    { type: "p", text: "L’honneur est central. Une parole engage, un pacte relie, une trahison marque longtemps. Les équilibres tiennent autant à la réputation qu’à la force." },

    { type: "subtitle", text: "🌒 Grandeur et fragilité" },
    { type: "p", text: "Ce monde n’est pas seulement rude. Il a ses grandeurs : hospitalité, générosité, courage, poésie. La langue y est déjà puissante, capable de porter des sens profonds." },
    { type: "p", text: "Mais ces qualités cohabitent avec des fragilités : l’injustice peut devenir normale, les faibles peuvent être exploités, et la morale change selon le poids du clan." },

    { type: "subtitle", text: "🌑 Une attente invisible" },
    { type: "p", text: "Personne ne le formule clairement. Mais quelque chose manque : une lumière stable, une guidance qui ne se tord pas selon l’intérêt." },
    { type: "p", text: "Dans ce silence brûlant — comme un ciel chargé avant l’orage — un destin se prépare. Et il ne commencera pas par un palais… mais par une naissance." },
  ],
  cliffhanger:
    "Le décor est posé. Mais pourquoi La Mecque — plus que toute autre ville — va-t-elle devenir le centre du basculement ?",
  keyPoints: [
    "La société est tribale : protection, identité, alliances.",
    "Le désert façonne les mœurs : endurance, honneur, parole donnée.",
    "Les routes commerciales relient l’Arabie aux régions voisines.",
    "Valeurs fortes (hospitalité, poésie) mais fragilités (loi du plus fort).",
    "Un climat d’attente silencieuse précède un changement majeur.",
  ],
  sources: [{ label: "Sîra (classiques)", note: "Contexte tribal, social et routes commerciales" }],
  reviewQuestions: [
  {
    id: "l1_q1",
    question: "Pourquoi l’appartenance à une tribu est-elle essentielle dans l’Arabie préislamique ?",
    options: [
      "Parce qu’elle garantit richesse et pouvoir politique",
      "Parce qu’elle assure protection, identité et alliances",
      "Parce qu’elle permet de voyager librement en dehors du désert",
      "Parce qu’elle remplace totalement la religion",
    ],
    correctIndex: 1,
    explanation:
      "Dans un environnement rude sans État central, la tribu protège, donne une identité et permet de survivre.",
  },
  {
    id: "l1_q2",
    question: "Quel rôle joue le désert dans la formation des caractères des habitants ?",
    options: [
      "Il favorise uniquement le commerce",
      "Il impose patience, endurance et adaptation",
      "Il empêche toute forme de culture",
      "Il rend la vie religieuse impossible",
    ],
    correctIndex: 1,
    explanation:
      "Le désert impose un mode de vie dur qui façonne patience, résistance et sens de l’honneur.",
  },
  {
    id: "l1_q3",
    question: "Pourquoi peut-on dire que le monde préislamique est en attente ?",
    options: [
      "Parce qu’il est totalement isolé",
      "Parce qu’il possède une guidance claire et stable",
      "Parce qu’il fonctionne mais manque d’une lumière morale constante",
      "Parce qu’il est dominé par un empire étranger",
    ],
    correctIndex: 2,
    explanation:
      "La société fonctionne, mais elle manque d’une guidance stable et universelle.",
  },
  {
  id: "l1_boss_q1",
  question:
    "Quel élément rend la tribu indispensable dans l’Arabie préislamique ?",
  options: [
    "Elle garantit une armée centralisée",
    "Elle remplace totalement la religion",
    "Elle assure protection, identité et alliances",
    "Elle donne des terres agricoles à tous",
  ],
  correctIndex: 2,
  explanation:
    "Sans État central, la tribu protège, donne une identité et permet de survivre.",
  difficulty: "boss",
},
{
  id: "l1_boss_q2",
  question:
    "Pourquoi peut-on dire que ce monde 'fonctionne' tout en étant en attente d’un changement majeur ?",
  options: [
    "Parce qu’il est totalement isolé du monde",
    "Parce qu’il possède une guidance universelle stable",
    "Parce qu’il a des règles et des valeurs, mais sans boussole morale universelle",
    "Parce qu’il est déjà un empire unifié",
  ],
  correctIndex: 2,
  explanation:
    "La société tient debout, mais manque d’une guidance universelle claire et constante.",
  difficulty: "boss",
},

]

},

l2: {
  title: "La Mecque : une ville sans trône, mais au cœur des cœurs",
  illustration: world1_l2,
  storyBlocks: [
    { type: "subtitle", text: "🕋 Une ville debout au milieu du désert" },
    { type: "p", text: "La Mecque n’est pas une capitale politique. Elle n’a ni roi, ni armée. Pourtant, son nom circule, respecté, cité, recherché." },
    { type: "p", text: "La ville vit du commerce : elle accueille, négocie, organise des échanges. Mais sa puissance la plus profonde n’est pas économique." },

    { type: "subtitle", text: "🕋 La Kaʿba : le centre de gravité" },
    { type: "p", text: "Ce qui rend La Mecque unique, c’est la Kaʿba. Autour d’elle, les tribus convergent. On y vient pour marchander, mais aussi pour un sanctuaire ancien, honoré par les Arabes." },
    { type: "p", text: "Au fil du temps, des idoles se sont multipliées autour du sanctuaire. Les pratiques se sont figées. Le rite est devenu habitude." },

    { type: "subtitle", text: "💠 Prestige et influence" },
    { type: "p", text: "Gérer l’accueil des visiteurs, c’est gérer l’honneur, la réputation… et une partie du pouvoir moral. Les Quraysh, au cœur de la ville, tiennent une place centrale dans cet équilibre." },
    { type: "p", text: "La Mecque devient ainsi un centre : pas un centre d’empire, mais un centre de convergence. Et ce qui est au centre attire forcément les grands bouleversements." },

    { type: "subtitle", text: "🌘 Quand l’histoire change d’axe" },
    { type: "p", text: "Ce que peu comprennent encore, c’est que la Kaʿba ne sera bientôt plus seulement un lieu autour duquel on tourne… mais le point autour duquel l’histoire tournera." },
  ],
  cliffhanger:
    "Mais une ville bâtie sur l’honneur et les équilibres tribaux supporte mal ce qui dérange. Que se passera-t-il lorsqu’un message viendra briser l’ordre établi ?",
  keyPoints: [
    "La Mecque est un centre commercial important, sans royaume ni armée.",
    "La Kaʿba donne un prestige religieux et social unique.",
    "Les idoles se multiplient : rites présents, guidance affaiblie.",
    "Les Quraysh jouent un rôle central dans l’équilibre mecquois.",
    "La centralité de La Mecque prépare un basculement majeur.",
  ],
  sources: [{ label: "Sîra (classiques)", note: "Rôle de la Kaʿba, prestige de La Mecque, place des Quraysh" }],
  reviewQuestions: [
  {
    id: "l2_q1",
    question: "Pourquoi La Mecque occupe-t-elle une place centrale malgré l’absence de pouvoir politique ?",
    options: [
      "Grâce à son armée",
      "Grâce à son roi",
      "Grâce à son rôle commercial et religieux autour de la Kaʿba",
      "Grâce à ses ressources agricoles",
    ],
    correctIndex: 2,
    explanation:
      "La Mecque est un centre commercial et surtout religieux grâce à la Kaʿba.",
  },
  {
    id: "l2_q2",
    question: "Quel est le rôle de la Kaʿba dans la société mecquoise ?",
    options: [
      "Un simple bâtiment ancien",
      "Un centre de convergence religieuse et sociale",
      "Un palais politique",
      "Un lieu réservé à une seule tribu",
    ],
    correctIndex: 1,
    explanation:
      "La Kaʿba attire les tribus et donne à La Mecque un prestige unique.",
  },
  {
    id: "l2_q3",
    question: "Pourquoi la centralité de La Mecque la rend-elle vulnérable au changement ?",
    options: [
      "Parce qu’elle est isolée du reste du monde",
      "Parce que tout changement remet en cause ses équilibres et son prestige",
      "Parce qu’elle manque de routes commerciales",
      "Parce qu’elle dépend des empires voisins",
    ],
    correctIndex: 1,
    explanation:
      "Un centre attire les bouleversements, surtout lorsqu’il repose sur des équilibres fragiles.",
  },
  {
  id: "l2_boss_q1",
  question:
    "Pourquoi La Mecque est-elle puissante malgré l’absence d’un pouvoir politique central ?",
  options: [
    "Parce qu’elle contrôle un grand empire militaire",
    "Parce qu’elle combine centre commercial et prestige religieux autour de la Kaʿba",
    "Parce qu’elle possède des ressources agricoles immenses",
    "Parce qu’elle dépend d’un empire voisin",
  ],
  correctIndex: 1,
  explanation:
    "Sa centralité vient du commerce et surtout du prestige religieux de la Kaʿba.",
  difficulty: "boss",
},
{
  id: "l2_boss_q2",
  question:
    "Pourquoi cette centralité rend-elle La Mecque vulnérable lorsqu’un message nouveau apparaît ?",
  options: [
    "Parce qu’elle est isolée des routes commerciales",
    "Parce que tout changement menace prestige, rites et équilibres sociaux",
    "Parce qu’elle manque d’habitants",
    "Parce qu’elle n’a aucun intérêt économique à préserver",
  ],
  correctIndex: 1,
  explanation:
    "Un centre vit d’équilibres : le bouleversement remet en cause prestige, intérêts et ordre social.",
  difficulty: "boss",
},

]

},

l3: {
  title: "L’honneur, la protection et le prix de la tribu",
  illustration: world1_l3,
  storyBlocks: [
    { type: "subtitle", text: "🛡️ La protection n’est pas un droit : c’est un privilège" },
    { type: "p", text: "Dans ce monde, la sécurité n’est pas garantie par une loi neutre. Elle dépend d’un nom, d’une tribu, d’un pacte." },
    { type: "p", text: "Avoir un clan, c’est avoir un bouclier. Ne pas en avoir, c’est devenir une proie facile, exposée à l’arbitraire." },

    { type: "subtitle", text: "⚖️ Honneur et vengeance : la logique d’un équilibre" },
    { type: "p", text: "Lorsqu’un homme est agressé, ce n’est pas seulement lui qu’on touche : c’est son clan. L’honneur devient un territoire qu’on défend." },
    { type: "p", text: "La vengeance apparaît comme un mécanisme social : elle vise à rétablir une balance d’honneur, là où la justice indépendante n’existe pas." },

    { type: "subtitle", text: "🤝 Alliances : paix ou incendie" },
    { type: "p", text: "Les alliances sont vitales. Elles protègent des routes commerciales, sécurisent des familles, évitent des guerres… ou les déclenchent." },
    { type: "p", text: "La parole donnée est précieuse. Mais une trahison peut fermer toutes les portes et condamner un homme à l’isolement." },

    { type: "subtitle", text: "🌋 Une question inévitable" },
    { type: "p", text: "Alors une question se pose : que se passe-t-il quand un message dépasse les clans ? Quand il appelle à une vérité qui ne se négocie pas ?" },
    { type: "p", text: "Dans une ville d’équilibres, la vérité peut devenir une menace… et certains préfèrent briser l’homme plutôt que d’écouter le message." },
  ],
  cliffhanger:
    "Car si la Mecque protège ceux qui entrent dans son système… elle peut se montrer implacable envers celui qui le bouscule. Et très bientôt, quelqu’un va le bousculer.",
  keyPoints: [
    "La protection dépend du clan, pas d’un État.",
    "L’honneur structure les pactes, les conflits et la réputation.",
    "La vengeance fonctionne comme mécanisme social d’équilibre.",
    "Les alliances assurent commerce et sécurité, mais peuvent déclencher des guerres.",
    "Un message universel mettra en crise la logique tribale.",
  ],
  sources: [{ label: "Sîra (classiques)", note: "Système tribal : protection, honneur, alliances, vulnérabilité des faibles" }],
  reviewQuestions: [
  {
    id: "l3_q1",
    question: "Dans l’Arabie tribale, de quoi dépend principalement la sécurité d’un individu ?",
    options: [
      "Des lois écrites",
      "De la richesse personnelle",
      "De l’appartenance à un clan",
      "De la religion",
    ],
    correctIndex: 2,
    explanation:
      "La sécurité dépend du clan, pas d’un État ou d’une loi neutre.",
  },
  {
    id: "l3_q2",
    question: "Pourquoi la vengeance est-elle perçue comme un mécanisme social ?",
    options: [
      "Parce qu’elle encourage la violence gratuite",
      "Parce qu’elle remplace la justice indépendante inexistante",
      "Parce qu’elle est imposée par la religion",
      "Parce qu’elle garantit la richesse",
    ],
    correctIndex: 1,
    explanation:
      "En l’absence de justice neutre, la vengeance sert à rétablir l’honneur.",
  },
  {
    id: "l3_q3",
    question: "Pourquoi un message universel menace-t-il l’ordre tribal ?",
    options: [
      "Parce qu’il supprime le commerce",
      "Parce qu’il dépasse les clans et leurs intérêts",
      "Parce qu’il favorise une seule tribu",
      "Parce qu’il rejette toute valeur morale",
    ],
    correctIndex: 1,
    explanation:
      "Un message universel remet en cause les alliances et hiérarchies tribales.",
  },
  {
  id: "l3_boss_q1",
  question:
    "Pourquoi la vengeance joue-t-elle un rôle social dans un système tribal ?",
  options: [
    "Parce qu’elle est encouragée pour le plaisir",
    "Parce qu’elle remplace une justice neutre inexistante et vise à rétablir l’honneur",
    "Parce qu’elle est imposée par une loi écrite centrale",
    "Parce qu’elle supprime les alliances",
  ],
  correctIndex: 1,
  explanation:
    "Dans l’absence d’autorité neutre, elle sert de mécanisme d’équilibre et de dissuasion.",
  difficulty: "boss",
},
{
  id: "l3_boss_q2",
  question:
    "Pourquoi un message universel dépasse-t-il naturellement la logique tribale ?",
  options: [
    "Parce qu’il favorise une seule tribu",
    "Parce qu’il cherche à renforcer les rivalités",
    "Parce qu’il appelle à une vérité au-dessus des clans et des intérêts",
    "Parce qu’il vise uniquement l’économie",
  ],
  correctIndex: 2,
  explanation:
    "Un message universel n’obéit pas aux alliances : il remet en cause hiérarchies et intérêts tribaux.",
  difficulty: "boss",
},

]

},

l4: {
  title: "Un paysage religieux fragmenté… et une vérité oubliée",
  illustration: world1_l4,
  storyBlocks: [
    { type: "subtitle", text: "🧭 Une Arabie religieuse, mais désorientée" },
    { type: "p", text: "Parler de l’Arabie avant l’islam comme d’un désert spirituel est une erreur. Les croyances existent — nombreuses — mais la guidance est fragmentée." },
    { type: "p", text: "Le polythéisme domine chez beaucoup de tribus. Mais ailleurs, on trouve aussi des communautés juives et chrétiennes, avec des Écritures et une vision du monde structurée." },

    { type: "subtitle", text: "📜 Des Écritures connues… sans transformation" },
    { type: "p", text: "Ces communautés parlent d’un Dieu unique, de responsabilité morale, de prophètes. Elles portent une mémoire religieuse forte." },
    { type: "p", text: "Pourtant, au cœur de La Mecque, ces influences restent limitées. Elles sont connues, parfois discutées, rarement suivies par la majorité." },

    { type: "subtitle", text: "🕋 Le rite sans la lumière" },
    { type: "p", text: "La Mecque demeure centrée sur ses rites et son prestige. Des idoles entourent la Kaʿba, et beaucoup admettent Allah tout en s’accrochant à des intermédiaires." },
    { type: "p", text: "Un souvenir subsiste pourtant : celui d’une voie ancienne liée à Ibrāhīm عليه السلام. Mais ce souvenir s’est affaibli, recouvert par les habitudes." },

    { type: "subtitle", text: "🌙 Le rappel approche" },
    { type: "p", text: "Quand une société a des rites sans boussole, elle finit par confondre spiritualité et tradition. Le décor est posé." },
    { type: "p", text: "Et très bientôt, La Mecque va entendre une parole qu’elle n’a jamais entendue auparavant — une parole qui ne flattera pas ses idoles, mais réveillera sa conscience." },
  ],
  cliffhanger:
    "Le monde est prêt… mais l’événement déclencheur arrive. Et il commence par une naissance dont la Mecque ne mesure pas encore la portée.",
  keyPoints: [
    "Le polythéisme domine, mais d’autres religions existent dans certaines régions.",
    "La Mecque reste attachée à ses rites et à son prestige.",
    "La notion d’Allah existe, mais souvent avec des intermédiaires (association).",
    "Le souvenir d’une voie d’Ibrāhīm subsiste, mais affaibli.",
    "Le contexte est prêt pour un rappel majeur.",
  ],
  sources: [{ label: "Sîra (classiques)", note: "Pluralité religieuse, rites mecquois, souvenir d’Ibrāhīm" }],
  reviewQuestions: [
  {
    id: "l4_q1",
    question: "Pourquoi l’Arabie préislamique n’est-elle pas spirituellement vide ?",
    options: [
      "Parce qu’elle est entièrement monothéiste",
      "Parce qu’elle abrite différentes croyances et religions",
      "Parce qu’elle suit une seule Écriture",
      "Parce qu’elle rejette toute forme de religion",
    ],
    correctIndex: 1,
    explanation:
      "Plusieurs croyances coexistent : polythéisme, judaïsme, christianisme.",
  },
  {
    id: "l4_q2",
    question: "Quel est le problème principal du paysage religieux mecquois ?",
    options: [
      "L’absence totale de rites",
      "La domination d’un empire religieux",
      "La présence de rites sans guidance claire",
      "Le rejet de toute spiritualité",
    ],
    correctIndex: 2,
    explanation:
      "Les rites existent, mais sans boussole morale stable.",
  },
  {
    id: "l4_q3",
    question: "Quel souvenir religieux subsiste malgré le polythéisme ?",
    options: [
      "Celui d’un empire ancien",
      "Celui d’une voie liée à Ibrāhīm عليه السلام",
      "Celui d’un prophète romain",
      "Celui d’un roi mecquois",
    ],
    correctIndex: 1,
    explanation:
      "Le souvenir de la voie d’Ibrāhīm subsiste, mais affaibli.",
  },
  {
  id: "l4_boss_q1",
  question:
    "Quel est le problème central du paysage religieux mecquois avant l’islam ?",
  options: [
    "L’absence totale de rites et de croyances",
    "La domination exclusive d’une seule religion révélée",
    "La présence de rites et croyances sans guidance claire transformant la morale",
    "Le rejet complet de l’idée de Dieu",
  ],
  correctIndex: 2,
  explanation:
    "Il existe des rites et une religiosité, mais la guidance est fragmentée et ne transforme pas durablement la morale.",
  difficulty: "boss",
},
{
  id: "l4_boss_q2",
  question:
    "Quel type de message était nécessaire pour transformer durablement ce monde ?",
  options: [
    "Un message tribal qui renforce les alliances existantes",
    "Un message politique fondé sur la force",
    "Un message universel dépassant clans, rites et intérêts",
    "Un message uniquement commercial",
  ],
  correctIndex: 2,
  explanation:
    "Seul un message universel pouvait dépasser les logiques tribales et restaurer une guidance stable.",
  difficulty: "boss",
},

]

},



l5: {
  title: "La lignée : un nom qui pèse avant même la naissance",
  illustration: world2_l5,
  storyBlocks: [
    { type: "subtitle", text: "🧬 Un monde où le nom est une armure" },
    { type: "p", text: "Dans une société tribale, la lignée n’est pas un détail. C’est une carte d’identité, un bouclier, une histoire." },
    { type: "p", text: "Elle dit d’où tu viens, qui te protège, avec qui tu peux t’allier… et qui te refusera l’accès." },

    { type: "subtitle", text: "🕋 Quraysh : le cœur de La Mecque" },
    { type: "p", text: "Le Prophète ﷺ naîtra au sein de Quraysh, la tribu qui tient une place centrale à La Mecque." },
    { type: "p", text: "Et dans Quraysh, son appartenance à Banû Hâshim n’est pas un détail : c’est une branche respectée, connue pour son rôle et sa dignité." },

    { type: "subtitle", text: "🤝 Honneur, service et responsabilité" },
    { type: "p", text: "À La Mecque, certains rôles liés à l’accueil des pèlerins et au prestige social renforcent la réputation d’un clan." },
    { type: "p", text: "Dans ce monde, la réputation ne se gagne pas avec des mots, mais avec des actes répétés… sur des générations." },

    { type: "subtitle", text: "🌙 Le destin commence souvent par un contexte" },
    { type: "p", text: "Avant même que la prophétie ne commence, Allah prépare un contexte : un lieu, une société, une lignée." },
    { type: "p", text: "Non pas parce que la vérité dépend du sang… mais parce que la société, elle, réagit au nom, au clan, à l’équilibre." },
  ],
  cliffhanger:
    "Mais derrière la lignée, il y a une histoire familiale précise… et une naissance entourée d’événements marquants. Qui sont les parents du futur Prophète ﷺ ?",
  keyPoints: [
    "Dans une société tribale, la lignée protège et positionne socialement.",
    "Le Prophète ﷺ naît chez Quraysh, au cœur de La Mecque.",
    "Il appartient à Banû Hâshim, clan respecté parmi Quraysh.",
    "Le prestige social est lié à des rôles de service et à la réputation.",
    "Allah prépare un contexte historique que la société comprend et respecte.",
  ],
  reviewQuestions: [
    {
      id: "l5_q1",
      question: "Dans la société tribale, pourquoi la lignée est-elle si importante ?",
      options: [
        "Parce qu’elle remplace la foi",
        "Parce qu’elle donne protection, identité et alliances",
        "Parce qu’elle garantit un royaume",
        "Parce qu’elle empêche toute injustice",
      ],
      correctIndex: 1,
      explanation: "La lignée donne un cadre social : protection, statut, alliances.",
    },
    {
      id: "l5_q2",
      question: "Le Prophète ﷺ naît au sein de quelle tribu mecquoise ?",
      options: ["Hudhayl", "Quraysh", "Thaqîf", "Aws"],
      correctIndex: 1,
      explanation: "Il naît au sein de Quraysh, tribu centrale à La Mecque.",
    },
    {
      id: "l5_q3",
      question: "Pourquoi le contexte (lignée/lieu/société) compte-t-il, même si la vérité ne dépend pas du sang ?",
      options: [
        "Parce que la vérité change selon les clans",
        "Parce que la société réagit aux équilibres tribaux et au prestige",
        "Parce que la Kaʿba interdit toute réforme",
        "Parce qu’il n’y a jamais eu de changement historique à La Mecque",
      ],
      correctIndex: 1,
      explanation:
        "La vérité est universelle, mais la société est tribale : elle réagit au nom et aux équilibres.",
    },

    // Boss-eligible (pour alimenter b2)
    {
      id: "l5_boss_q1",
      question: "Pourquoi la mention de la lignée est-elle stratégique dans une société tribale ?",
      options: [
        "Parce qu’elle rend la prophétie héréditaire",
        "Parce qu’elle facilite l’écoute ou le rejet selon le statut social",
        "Parce qu’elle remplace le message",
        "Parce qu’elle supprime la nécessité de preuves",
      ],
      correctIndex: 1,
      explanation:
        "Dans une société tribale, le statut influence l’accueil du message, même si le message est universel.",
      difficulty: "boss",
    },
  ],
},


l6: {
  title: "Les parents : une histoire courte, mais décisive",
  illustration: world2_l6,
  storyBlocks: [
    { type: "subtitle", text: "👣 Avant la mission, une vie humaine" },
    { type: "p", text: "Avant d’être Messager, il y a une histoire humaine : un père, une mère, une famille." },
    { type: "p", text: "La Sîra nous montre un Prophète ﷺ qui connaît très tôt l’épreuve : l’enfance ne commence pas toujours par la stabilité." },

    { type: "subtitle", text: "🧔 ʿAbdullâh : le père" },
    { type: "p", text: "ʿAbdullâh, père du Prophète ﷺ, fait partie de cette lignée de Quraysh et de Banû Hâshim." },
    { type: "p", text: "Et très tôt, la famille est touchée par la perte : le Prophète ﷺ naît orphelin de père — un fait central et unanimement connu dans la Sîra." },

    { type: "subtitle", text: "👩 Âminah : la mère" },
    { type: "p", text: "Âminah bint Wahb est la mère du Prophète ﷺ. Elle porte la responsabilité d’une naissance qui aura un impact sur l’histoire." },
    { type: "p", text: "La Sîra rapporte aussi que la perte la touche ensuite : elle décède alors qu’il est encore enfant." },

    { type: "subtitle", text: "🌙 Une leçon silencieuse" },
    { type: "p", text: "Dans une société où la protection dépend du clan, grandir sans père puis perdre sa mère, c’est traverser très tôt la fragilité humaine." },
    { type: "p", text: "Et pourtant, c’est aussi là que se forge une sensibilité unique : comprendre l’épreuve… avant d’appeler les autres à la patience." },
  ],
  cliffhanger:
    "Après la perte, une question devient urgente : qui protège l’enfant ? Et comment grandit-on dans une Mecque tribale quand on est orphelin ?",
  keyPoints: [
    "Le Prophète ﷺ naît orphelin de père (fait central de la Sîra).",
    "Sa mère Âminah le porte et l’élève au début, puis décède alors qu’il est encore enfant.",
    "Dans une société tribale, l’orphelinat accentue la vulnérabilité sociale.",
    "Ces épreuves précoces façonnent une profondeur humaine et morale.",
  ],
  reviewQuestions: [
    {
      id: "l6_q1",
      question: "Quel fait est unanimement connu concernant la naissance du Prophète ﷺ ?",
      options: [
        "Il naît roi de La Mecque",
        "Il naît orphelin de père",
        "Il naît dans un autre pays",
        "Il naît après avoir voyagé",
      ],
      correctIndex: 1,
      explanation: "Il naît orphelin de père : un fait majeur dans la Sîra.",
    },
    {
      id: "l6_q2",
      question: "Pourquoi l’orphelinat est-il particulièrement lourd dans une société tribale ?",
      options: [
        "Parce que l’agriculture devient impossible",
        "Parce que la protection dépend souvent du clan et des tuteurs",
        "Parce que la Mecque interdit les orphelins",
        "Parce que les alliances n’existent pas",
      ],
      correctIndex: 1,
      explanation:
        "Sans État, la protection est liée aux tuteurs et à la structure tribale.",
    },
    {
      id: "l6_q3",
      question: "Quelle idée centrale cette leçon veut faire ressentir ?",
      options: [
        "La richesse familiale",
        "La fragilité humaine et l’épreuve précoce",
        "La domination militaire",
        "L’absence de relations familiales",
      ],
      correctIndex: 1,
      explanation:
        "La Sîra montre des épreuves précoces qui façonnent une profondeur humaine.",
    },

    // Boss-eligible
    {
      id: "l6_boss_q1",
      question: "Dans l’Arabie tribale, quelle conséquence sociale peut renforcer l’orphelinat ?",
      options: [
        "Une protection automatique par l’État",
        "Une vulnérabilité accrue sans tuteur fort",
        "Une nomination politique immédiate",
        "Un accès garanti au pouvoir",
      ],
      correctIndex: 1,
      explanation:
        "Sans tuteur fort, l’orphelin peut devenir plus exposé dans une société tribale.",
      difficulty: "boss",
    },
  ],
},


l7: {
  title: "Après la perte : la question du protecteur",
  illustration: world2_l7,
  storyBlocks: [
    { type: "subtitle", text: "🛡️ La protection : un besoin immédiat" },
    { type: "p", text: "Dans ce monde, on ne demande pas d’abord : 'Qui aime cet enfant ?' On demande : 'Qui le protège ?'." },
    { type: "p", text: "Un enfant, surtout orphelin, a besoin d’un tuteur : un adulte, un clan, un cercle." },

    { type: "subtitle", text: "👨‍👦 La prise en charge familiale" },
    { type: "p", text: "La Sîra décrit une prise en charge progressive par la famille proche : l’enfant n’est pas abandonné." },
    { type: "p", text: "Chaque étape rappelle une réalité : la miséricorde d’Allah passe aussi par les mains de personnes concrètes." },

    { type: "subtitle", text: "🏛️ Une enfance qui se construit malgré la fragilité" },
    { type: "p", text: "Le Prophète ﷺ grandit dans un environnement où l’honneur et les liens familiaux sont réels." },
    { type: "p", text: "Mais la fragilité reste là, comme une ombre : ce n’est pas l’enfance d’un prince, c’est l’enfance d’un futur guide, formée par l’épreuve et la protection." },

    { type: "subtitle", text: "🌙 Quand la société observe" },
    { type: "p", text: "La Mecque observe. Les clans observent. Dans une société tribale, chaque enfance est un récit public." },
    { type: "p", text: "Et parfois, les gens ne comprennent pas encore… qu’ils regardent grandir quelqu’un qui changera leur histoire." },
  ],
  cliffhanger:
    "Mais il manque une pièce essentielle : la période de nourrice et l’environnement du désert, qui marquera profondément l’enfance. Pourquoi confier l’enfant hors de La Mecque ?",
  keyPoints: [
    "Dans une société tribale, la protection (tuteur/clan) est vitale.",
    "La prise en charge de l’enfant se fait dans le cadre familial.",
    "L’enfance du Prophète ﷺ n’est pas celle d’un prince : elle est marquée par l’épreuve et la protection.",
    "La société observe et juge selon les liens et l’honneur.",
  ],
  reviewQuestions: [
    {
      id: "l7_q1",
      question: "Dans la logique tribale, quelle est la première question après une perte familiale ?",
      options: [
        "Qui va devenir roi ?",
        "Qui va protéger l’enfant ?",
        "Qui va quitter la Mecque ?",
        "Qui va écrire un poème ?",
      ],
      correctIndex: 1,
      explanation:
        "La protection est centrale dans un monde où l’État n’existe pas.",
    },
    {
      id: "l7_q2",
      question: "Quelle idée la leçon insiste-t-elle sur le plan humain ?",
      options: [
        "La célébrité",
        "La miséricorde d’Allah passe aussi par des personnes et des moyens concrets",
        "La domination militaire",
        "La richesse automatique",
      ],
      correctIndex: 1,
      explanation:
        "Allah soutient par des causes : famille, tuteurs, protection.",
    },
    {
      id: "l7_q3",
      question: "Pourquoi dit-on que l’enfance du Prophète ﷺ n’est pas une enfance de 'prince' ?",
      options: [
        "Parce qu’il n’a jamais vécu à La Mecque",
        "Parce qu’elle est marquée par la fragilité et l’épreuve",
        "Parce qu’il a grandi dans un palais",
        "Parce qu’il a été chef militaire enfant",
      ],
      correctIndex: 1,
      explanation:
        "La Sîra présente une enfance marquée par des épreuves réelles.",
    },
  ],
},


l8: {
  title: "Le désert et la nourrice : une enfance qui façonne",
  illustration: world2_l8,
  storyBlocks: [
    { type: "subtitle", text: "🏜️ Pourquoi quitter La Mecque ?" },
    { type: "p", text: "Dans les usages arabes, des familles confiaient parfois leurs enfants à une nourrice dans le désert." },
    { type: "p", text: "Ce n’était pas une fuite : c’était une pratique connue, liée à l’air, au cadre, à la langue, au renforcement." },

    { type: "subtitle", text: "🗣️ Une langue plus pure, un caractère plus solide" },
    { type: "p", text: "Le désert était associé à une langue arabe plus directe, plus robuste, loin des mélanges urbains." },
    { type: "p", text: "Et la vie y forgeait le corps et l’esprit : patience, endurance, simplicité." },

    { type: "subtitle", text: "🤲 Une étape qui laisse une empreinte" },
    { type: "p", text: "Cette période n’est pas un détail décoratif dans la Sîra : elle explique des aspects de force, de clarté, et de présence." },
    { type: "p", text: "Le futur Prophète ﷺ grandit dans un cadre où l’on apprend le courage sans arrogance, et la dignité sans brutalité." },

    { type: "subtitle", text: "🌙 Le début d’un chemin" },
    { type: "p", text: "Tout cela arrive avant les grands événements publics. Avant la Révélation, avant les foules, avant les oppositions." },
    { type: "p", text: "Mais c’est ici qu’on comprend un principe : Allah prépare, étape par étape, longtemps avant que les gens ne voient quoi que ce soit." },
  ],
  cliffhanger:
    "Et bientôt, l’enfant reviendra à La Mecque… puis grandira jusqu’à devenir un jeune homme connu pour une qualité qui surprendra même ses ennemis. Quelle qualité ?",
  keyPoints: [
    "Confier un enfant à une nourrice du désert était une pratique connue.",
    "Le désert est associé à endurance, simplicité et renforcement du caractère.",
    "La langue du désert était considérée comme plus directe et robuste.",
    "Allah prépare les étapes longtemps avant l’apparition publique du message.",
  ],
  reviewQuestions: [
    {
      id: "l8_q1",
      question: "Pourquoi des enfants pouvaient-ils être confiés au désert dans les usages arabes ?",
      options: [
        "Pour devenir rois",
        "Pour renforcer langue et caractère dans un cadre différent",
        "Pour fuir La Mecque par peur",
        "Parce que La Mecque l’interdisait",
      ],
      correctIndex: 1,
      explanation:
        "C’était une pratique connue, associée à l’environnement, la langue et le renforcement.",
    },
    {
      id: "l8_q2",
      question: "Quel est l’effet recherché associé au désert dans cette leçon ?",
      options: [
        "Mélange des dialectes urbains",
        "Endurance, simplicité, robustesse",
        "Vie politique centralisée",
        "Richesse agricole",
      ],
      correctIndex: 1,
      explanation:
        "Le désert forge endurance et simplicité, et une langue plus directe.",
    },
    {
      id: "l8_q3",
      question: "Quel message pédagogique se répète dans cette leçon ?",
      options: [
        "Allah prépare étape par étape avant que les gens ne voient",
        "La vérité dépend des clans",
        "La Mecque est isolée du monde",
        "Le commerce est la prophétie",
      ],
      correctIndex: 0,
      explanation:
        "La Sîra montre une préparation progressive avant l’apparition publique de la mission.",
    },

    // Boss-eligible
    {
      id: "l8_boss_q1",
      question: "Quel lien logique fait la Sîra entre enfance au désert et mission future ?",
      options: [
        "Aucun lien : c’est purement décoratif",
        "Un lien de préparation : langue, endurance, caractère",
        "Un lien politique : conquête militaire",
        "Un lien économique : commerce uniquement",
      ],
      correctIndex: 1,
      explanation:
        "La leçon souligne une préparation progressive : langue, endurance et caractère.",
      difficulty: "boss",
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

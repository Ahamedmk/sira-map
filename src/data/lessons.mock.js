// Contenu MVP (on étoffera monde par monde)
// IMPORTANT : pas de représentation du Prophète ﷺ, on reste sur contexte/valeurs.
import world1_l1 from "../assets/illustrations/worlds/world1_l1.png";
import world1_l2 from "../assets/illustrations/worlds/world1_l2.png";
import world1_l3 from "../assets/illustrations/worlds/world1_l3.png";
import world1_l4 from "../assets/illustrations/worlds/world1_l4.png";
import world2_l5 from "../assets/illustrations/worlds/world2_l5.png";
import world2_l6 from "../assets/illustrations/worlds/world2_l6.png";
import world2_l7 from "../assets/illustrations/worlds/world2_l7.png";
import world2_l8 from "../assets/illustrations/worlds/world2_l8.png";
import world3_l9 from "../assets/illustrations/worlds/world3_l9.png";
import world3_l10 from "../assets/illustrations/worlds/world3_l10.png";
import world3_l11 from "../assets/illustrations/worlds/world3_l11.png";
import world3_l12 from "../assets/illustrations/worlds/world3_l12.png";
import world4_l13 from "../assets/illustrations/worlds/world4_l13.png";
import world4_l14 from "../assets/illustrations/worlds/world4_l14.png";
import world4_l15 from "../assets/illustrations/worlds/world4_l15.png";
import world4_l16 from "../assets/illustrations/worlds/world4_l16.png";
import world5_l17 from "../assets/illustrations/worlds/world5_l17.png";
import world5_l18 from "../assets/illustrations/worlds/world5_l18.png";
import world5_l19 from "../assets/illustrations/worlds/world5_l19.png";
import world5_l20 from "../assets/illustrations/worlds/world5_l20.png";
import world6_l21 from "../assets/illustrations/worlds/world6_l21.png";
import world6_l22 from "../assets/illustrations/worlds/world6_l22.png";
import world6_l23 from "../assets/illustrations/worlds/world6_l23.png";
import world6_l24 from "../assets/illustrations/worlds/world6_l24.png";
import world7_l25 from "../assets/illustrations/worlds/world7_l25.png";
import world7_l26 from "../assets/illustrations/worlds/world7_l26.png";
import world7_l27 from "../assets/illustrations/worlds/world7_l27.png";
import world7_l28 from "../assets/illustrations/worlds/world7_l28.png";


export const LESSONS_CONTENT = {
// --- WORLD 1 (avec sous-titres) ---
l1: {
  title: "Avant la naissance : une péninsule en attente",
  illustration: world1_l1,
  audio: "/audio/lessons/l1.mp3",
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
  title: "La naissance — L’Année de l’Éléphant",
  illustration: world3_l9,
  storyBlocks: [
    { type: "subtitle", text: "📅 Une naissance située dans l’Histoire" },
    { type: "p", text: "La naissance du Prophète ﷺ n’est pas placée dans un flou historique. Elle est traditionnellement située autour de l’année 570 de l’ère chrétienne, connue chez les Arabes comme ‘l’Année de l’Éléphant’." },
    { type: "p", text: "Cette datation repose sur un événement majeur survenu peu avant : l’expédition d’Abraha contre La Mecque." },

    { type: "subtitle", text: "🐘 L’expédition d’Abraha" },
    { type: "p", text: "Abraha, gouverneur d’origine abyssinienne au Yémen, cherche à détourner le pèlerinage arabe vers un sanctuaire qu’il a fait construire à Sanʿāʾ." },
    { type: "p", text: "Devant l’échec de cette stratégie, il marche vers La Mecque avec une armée, comprenant au moins un éléphant de guerre — fait marquant pour les Arabes." },

    { type: "subtitle", text: "🕋 La Mecque sans armée" },
    { type: "p", text: "La Mecque ne dispose pas d’armée capable de résister à une telle expédition. Les Quraysh se retirent, conscients de leur faiblesse militaire." },
    { type: "p", text: "L’événement est resté dans les mémoires arabes comme un signe de protection exceptionnelle de la Kaʿba." },

    { type: "subtitle", text: "👶 Une naissance dans un monde qui observe" },
    { type: "p", text: "C’est dans cette même année que naît Muḥammad ﷺ, au sein de Quraysh, dans le clan des Banû Hâshim." },
    { type: "p", text: "La société n’y voit encore qu’une naissance parmi d’autres… mais l’Histoire, elle, a déjà commencé." },
  ],
  cliffhanger:
    "Mais naître dans une année marquante ne signifie pas grandir dans le confort. Comment se déroule l’enfance d’un enfant orphelin dans la Mecque tribale ?",
  keyPoints: [
    "La naissance du Prophète ﷺ est située vers 570 (Année de l’Éléphant).",
    "L’expédition d’Abraha est un événement historique majeur.",
    "La Mecque n’avait pas de force militaire équivalente.",
    "La naissance s’inscrit dans un contexte historique observé par toute l’Arabie.",
  ],
  reviewQuestions: [
  {
    id: "l9_q1",
    question:
      "À quelle période est traditionnellement située la naissance du Prophète ﷺ ?",
    options: [
      "Vers l’an 600",
      "Vers l’an 570, l’Année de l’Éléphant",
      "Vers l’an 610",
      "Après la conquête de La Mecque",
    ],
    correctIndex: 1,
    explanation:
      "La naissance est traditionnellement située autour de 570, appelée l’Année de l’Éléphant.",
  },
  {
    id: "l9_q2",
    question:
      "Pourquoi l’expédition d’Abraha est-elle restée marquante pour les Arabes ?",
    options: [
      "Parce qu’elle a détruit la Kaʿba",
      "Parce qu’elle impliquait une armée avec des éléphants",
      "Parce qu’elle a duré plusieurs années",
      "Parce qu’elle a converti Quraysh",
    ],
    correctIndex: 1,
    explanation:
      "La présence d’éléphants de guerre était exceptionnelle pour les Arabes.",
  },
  {
    id: "l9_q3",
    question:
      "Quel lien est fait entre l’Année de l’Éléphant et la naissance du Prophète ﷺ ?",
    options: [
      "Un lien religieux direct",
      "Un lien militaire",
      "Un repère historique pour dater la naissance",
      "Un lien politique imposé",
    ],
    correctIndex: 2,
    explanation:
      "L’événement sert de repère chronologique dans la mémoire arabe.",
  },
],

},
l10: {
  title: "Grandir orphelin à La Mecque",
  illustration: world3_l10,
  storyBlocks: [
    { type: "subtitle", text: "👶 Une enfance marquée par la perte" },
    { type: "p", text: "Le Prophète ﷺ perd son père avant sa naissance. Puis, vers l’âge de six ans, il perd également sa mère, Âminah." },
    { type: "p", text: "Ces dates sont unanimement rapportées dans la Sîra et constituent un socle fondamental de son enfance." },

    { type: "subtitle", text: "🧓 La protection dʿAbd al-Muṭṭalib" },
    { type: "p", text: "Après la perte de sa mère, l’enfant est pris en charge par son grand-père, ʿAbd al-Muṭṭalib, figure respectée de Quraysh." },
    { type: "p", text: "Cette protection est déterminante dans une société où l’enfant orphelin est particulièrement exposé." },

    { type: "subtitle", text: "⚖️ Une société qui observe l’orphelin" },
    { type: "p", text: "Dans la Mecque tribale, chacun sait qui protège qui. Être orphelin n’est pas une simple situation familiale, c’est une position sociale." },
    { type: "p", text: "Le jeune Muḥammad ﷺ grandit sous le regard d’une société attentive aux équilibres et aux lignées." },

    { type: "subtitle", text: "🌙 Une sensibilité qui se forge" },
    { type: "p", text: "Cette enfance forge une compréhension profonde de la vulnérabilité humaine." },
    { type: "p", text: "Ce n’est pas une enfance idéalisée, mais une enfance réelle, marquée par la dépendance et la protection." },
  ],
  cliffhanger:
    "Après le grand-père, une autre figure prend le relais. Comment cette protection façonnera-t-elle la jeunesse du futur Prophète ﷺ ?",
  keyPoints: [
    "Le Prophète ﷺ perd ses deux parents très jeune.",
    "Son grand-père ʿAbd al-Muṭṭalib assure sa protection.",
    "L’orphelinat est une réalité sociale lourde dans la Mecque tribale.",
    "Cette période façonne une grande sensibilité humaine.",
  ],
  reviewQuestions: [
  {
    id: "l10_q1",
    question:
      "Quel est le fait central concernant l’enfance du Prophète ﷺ ?",
    options: [
      "Il grandit dans un palais",
      "Il perd ses deux parents très jeune",
      "Il est élevé hors de La Mecque toute sa vie",
      "Il devient chef tribal enfant",
    ],
    correctIndex: 1,
    explanation:
      "Il perd son père avant sa naissance et sa mère vers l’âge de six ans.",
  },
  {
    id: "l10_q2",
    question:
      "Qui assure la protection du Prophète ﷺ après la mort de sa mère ?",
    options: [
      "Un roi étranger",
      "Son oncle uniquement",
      "Son grand-père ʿAbd al-Muṭṭalib",
      "Un gouverneur mecquois",
    ],
    correctIndex: 2,
    explanation:
      "Son grand-père ʿAbd al-Muṭṭalib prend en charge sa protection.",
  },
  {
    id: "l10_q3",
    question:
      "Pourquoi l’orphelinat est-il socialement lourd dans la Mecque tribale ?",
    options: [
      "Parce qu’il empêche toute activité économique",
      "Parce que la protection dépend du clan et du tuteur",
      "Parce que les orphelins sont bannis",
      "Parce que la loi l’interdit",
    ],
    correctIndex: 1,
    explanation:
      "Dans une société sans État, la protection est liée au clan et au tuteur.",
  },
],

},
l11: {
  title: "La jeunesse — le travail et la réputation",
  illustration: world3_l11,
  storyBlocks: [
    { type: "subtitle", text: "🐑 Un jeune homme qui travaille" },
    { type: "p", text: "Comme beaucoup de jeunes de son époque, Muḥammad ﷺ travaille très tôt. Les sources rapportent qu’il garde des troupeaux dans sa jeunesse." },
    { type: "p", text: "Ce travail est courant et valorisé : il enseigne patience, responsabilité et autonomie." },

    { type: "subtitle", text: "🤝 Le commerce et la confiance" },
    { type: "p", text: "Avec le temps, il participe également au commerce, activité centrale à La Mecque." },
    { type: "p", text: "Dans un monde où la parole donnée vaut contrat, sa réputation se distingue." },

    { type: "subtitle", text: "⭐ Al-Amīn — le digne de confiance" },
    { type: "p", text: "Avant même la Révélation, les Mecquois le surnomment ‘al-Amīn’, le digne de confiance." },
    { type: "p", text: "Ce surnom n’est pas symbolique : il est le fruit d’années de comportement constant et honnête." },

    { type: "subtitle", text: "🧠 Une morale avant le message" },
    { type: "p", text: "Ce respect ne repose pas sur une proclamation religieuse, mais sur des actes visibles et répétés." },
    { type: "p", text: "La société reconnaît une droiture avant même de comprendre la mission future." },
  ],
  cliffhanger:
    "Mais cette droiture ne se limite pas au commerce. Que se passe-t-il quand la société elle-même traverse une crise morale ?",
  keyPoints: [
    "Le Prophète ﷺ travaille dès sa jeunesse.",
    "Il participe au commerce mecquois.",
    "Il est surnommé al-Amīn pour sa fiabilité.",
    "Sa réputation précède la Révélation.",
  ],
  reviewQuestions: [
  {
    id: "l11_q1",
    question:
      "Quel type de travail le Prophète ﷺ exerce-t-il dans sa jeunesse ?",
    options: [
      "Chef militaire",
      "Berger et activités liées au travail",
      "Dirigeant politique",
      "Prêtre du sanctuaire",
    ],
    correctIndex: 1,
    explanation:
      "Les sources rapportent qu’il garde des troupeaux dans sa jeunesse.",
  },
  {
    id: "l11_q2",
    question:
      "Quelle activité est centrale à La Mecque et marque sa jeunesse ?",
    options: [
      "L’agriculture",
      "Le commerce",
      "La navigation",
      "La métallurgie",
    ],
    correctIndex: 1,
    explanation:
      "La Mecque est un centre commercial majeur.",
  },
  {
    id: "l11_q3",
    question:
      "Pourquoi les Mecquois surnomment-ils Muḥammad ﷺ ‘al-Amīn’ ?",
    options: [
      "Pour sa richesse",
      "Pour sa force physique",
      "Pour sa fiabilité et son honnêteté",
      "Pour son statut politique",
    ],
    correctIndex: 2,
    explanation:
      "Ce surnom reflète une réputation construite sur la confiance.",
  },
  {
  id: "l11_boss_q1",
  question:
    "Quel lien la Sîra établit-elle entre le travail précoce du Prophète ﷺ et sa formation personnelle ?",
  options: [
    "Aucun lien, c’est un détail anecdotique",
    "Un lien économique uniquement",
    "Un lien éducatif : patience, responsabilité et fiabilité",
    "Un lien militaire direct",
  ],
  correctIndex: 2,
  explanation:
    "Le travail forge patience, responsabilité et fiabilité, qualités reconnues avant la Révélation.",
  difficulty: "boss",
},
{
  id: "l11_boss_q2",
  question:
    "Pourquoi le surnom ‘al-Amīn’ est-il central dans la compréhension de la jeunesse du Prophète ﷺ ?",
  options: [
    "Parce qu’il lui est donné après la Révélation",
    "Parce qu’il résulte d’un décret tribal",
    "Parce qu’il reflète une confiance acquise avant toute mission prophétique",
    "Parce qu’il désigne un rôle politique",
  ],
  correctIndex: 2,
  explanation:
    "La société mecquoise reconnaît sa fiabilité avant même la mission prophétique.",
  difficulty: "boss",
},

],

},
l12: {
  title: "Avant la Révélation — la quête de vérité",
  illustration: world3_l12,
  storyBlocks: [
    { type: "subtitle", text: "🧠 Une société agitée" },
    { type: "p", text: "La Mecque est prospère, mais moralement instable : injustices, idolâtrie, inégalités sociales." },
    { type: "p", text: "Certains individus ressentent un malaise face à cet état du monde." },

    { type: "subtitle", text: "🏔️ Le retrait et la réflexion" },
    { type: "p", text: "Avant la Révélation, Muḥammad ﷺ se retire régulièrement pour réfléchir et méditer." },
    { type: "p", text: "Ces retraits ne sont pas une rupture sociale, mais une recherche de sens." },

    { type: "subtitle", text: "⏳ Une préparation silencieuse" },
    { type: "p", text: "Rien n’est encore public. Rien n’est encore proclamé." },
    { type: "p", text: "Mais intérieurement, une préparation profonde est en cours." },

    { type: "subtitle", text: "🌙 Le seuil d’un bouleversement" },
    { type: "p", text: "À l’approche de la quarantaine, l’histoire personnelle et l’histoire du monde s’apprêtent à se croiser." },
    { type: "p", text: "Un événement va bientôt transformer non seulement une vie… mais le cours de l’Histoire." },
  ],
  cliffhanger:
    "Une nuit, dans un lieu retiré, une parole va être prononcée pour la première fois. Que va-t-il se passer ?",
  keyPoints: [
    "La Mecque traverse une crise morale.",
    "Le Prophète ﷺ se retire pour réfléchir avant la Révélation.",
    "Cette période est une préparation intérieure.",
    "La Révélation approche.",
  ],
  reviewQuestions: [
  {
    id: "l12_q1",
    question:
      "Quel est le contexte moral de La Mecque avant la Révélation ?",
    options: [
      "Une société parfaitement juste",
      "Une société prospère mais moralement instable",
      "Une société sans croyance",
      "Une société gouvernée par un État fort",
    ],
    correctIndex: 1,
    explanation:
      "La Mecque est prospère, mais marquée par des injustices et l’idolâtrie.",
  },
  {
    id: "l12_q2",
    question:
      "Comment comprendre les périodes de retrait avant la Révélation ?",
    options: [
      "Comme une rupture totale avec la société",
      "Comme une recherche de sens et de vérité",
      "Comme une stratégie politique",
      "Comme une obligation tribale",
    ],
    correctIndex: 1,
    explanation:
      "Ces retraits traduisent une quête intérieure, pas une fuite.",
  },
  {
    id: "l12_q3",
    question:
      "À quel âge approximatif commence la Révélation ?",
    options: [
      "Vers 25 ans",
      "Vers 30 ans",
      "Vers 40 ans",
      "Vers 60 ans",
    ],
    correctIndex: 2,
    explanation:
      "La Révélation débute autour de l’âge de 40 ans.",
  },
  {
  id: "l12_boss_q1",
  question:
    "Comment comprendre les périodes de retrait et de méditation du Prophète ﷺ avant la Révélation ?",
  options: [
    "Comme un rejet complet de la société",
    "Comme une fuite politique",
    "Comme une recherche de sens et une préparation intérieure",
    "Comme une pratique religieuse institutionnelle",
  ],
  correctIndex: 2,
  explanation:
    "Ces retraits traduisent une quête de vérité et une préparation intérieure, non une rupture sociale.",
  difficulty: "boss",
},
{
  id: "l12_boss_q2",
  question:
    "Quel est le fil conducteur du Monde 3 dans la Sîra ?",
  options: [
    "Une enfance privilégiée et protégée",
    "Une préparation progressive humaine et morale avant la Révélation",
    "Une domination politique précoce",
    "Une rupture soudaine sans contexte",
  ],
  correctIndex: 1,
  explanation:
    "La Sîra montre une construction progressive avant la mission prophétique.",
  difficulty: "boss",
},

],

},

// -------------------- MONDE 4 --------------------
l13: {
  title: "La première Révélation — ‘Iqraʾ’ (≈ 610)",
  illustration: world4_l13,
  storyBlocks: [
    { type: "subtitle", text: "📅 Un tournant daté par la tradition de la Sîra" },
    { type: "p", text: "Vers l’année 610 (approximation classique), Muḥammad ﷺ a environ quarante ans. La Mecque est prospère, mais l’atmosphère morale est lourde : idolâtrie, injustices sociales, rapports de force tribaux." },
    { type: "p", text: "Dans ce contexte, il prend l’habitude de se retirer pour méditer. Ce retrait n’est pas une fuite : c’est une quête de vérité." },

    { type: "subtitle", text: "🏔️ Ḥirāʾ : solitude et préparation" },
    { type: "p", text: "Les récits de Sîra décrivent un endroit retiré : la grotte de Ḥirāʾ. Un lieu où l’homme est face à lui-même, loin du bruit du marché, loin des idoles, loin des jeux d’influence." },
    { type: "p", text: "Le contraste est saisissant : La Mecque en bas, une ville qui vit au rythme des caravanes et des rites; et, plus haut, une solitude qui oblige à regarder la vie autrement." },

    { type: "subtitle", text: "🌙 La nuit où l’Histoire change" },
    { type: "p", text: "C’est dans ce cadre que survient l’événement fondateur : l’ange Jibrīl (Gabriel) vient à lui. La Sîra rapporte une scène d’une indication forte : la surprise, la pression, l’intensité du moment. Rien n’est ‘confortable’ dans cette première rencontre." },
    { type: "p", text: "Les premiers mots révélés sont connus : « Iqraʾ » — “Lis / Récite”. Et la réponse humaine, immédiate, rapportée dans les récits : « Je ne sais pas lire ». Ce n’est pas un détail : c’est une rupture entre ce que l’homme peut faire… et ce qui le dépasse." },

    { type: "subtitle", text: "📜 Les premiers versets (Sourate al-ʿAlaq, 96:1–5)" },
    { type: "p", text: "La tradition la plus répandue rapporte que les premiers versets révélés sont les cinq premiers de la sourate al-ʿAlaq : un appel à la récitation, au Nom du Seigneur, à la création de l’homme, et au savoir transmis par la plume." },
    { type: "p", text: "Le message commence par un principe : la connaissance, la conscience de Dieu, et la dignité de l’être humain." },

    { type: "subtitle", text: "🏃 Retour à la Mecque : l’homme tremble, la mission commence" },
    { type: "p", text: "Après cet événement, il redescend, bouleversé. La Sîra rapporte qu’il cherche un refuge immédiat. L’expérience n’a rien d’une ‘idée inspirante’ : elle est lourde, réelle, et profondément déstabilisante." },
    { type: "p", text: "Le premier réflexe n’est pas l’annonce publique : c’est le besoin d’être rassuré… par quelqu’un qui le connaît vraiment." },
  ],
  cliffhanger:
    "Et ce quelqu’un, c’est Khadījah. Comment va-t-elle réagir face à un homme qui vient d’entendre ce que personne n’a entendu avant lui ?",
  keyPoints: [
    "La première Révélation est traditionnellement située vers 610, à l’âge d’environ 40 ans.",
    "Le lieu associé est la grotte de Ḥirāʾ, dans un contexte de retraite et de méditation.",
    "L’ange Jibrīl transmet l’ordre « Iqraʾ » (récite/lis).",
    "Les 1ers versets souvent rapportés : al-ʿAlaq (96:1–5).",
    "Le retour est marqué par un bouleversement humain réel : la mission commence dans le tremblement, pas dans la mise en scène.",
  ],
  reviewQuestions: [
    {
      id: "l13_q1",
      question: "À quelle période la première Révélation est-elle traditionnellement située ?",
      options: ["Vers 570", "Vers 610", "Vers 632", "Après l’Hégire"],
      correctIndex: 1,
      explanation: "La tradition situe le début de la Révélation vers 610.",
    },
    {
      id: "l13_q2",
      question: "Où est associée la première rencontre avec Jibrīl selon les récits de Sîra ?",
      options: ["Au marché de La Mecque", "Dans la grotte de Ḥirāʾ", "À Médine", "À Ṭāʾif"],
      correctIndex: 1,
      explanation: "Les récits l’associent à Ḥirāʾ.",
    },
    {
      id: "l13_q3",
      question: "Quels versets sont le plus souvent cités comme premiers révélés ?",
      options: ["Al-Fātiḥa (1:1–7)", "Al-Ikhlāṣ (112)", "Al-ʿAlaq (96:1–5)", "Al-Baqara (2:1–5)"],
      correctIndex: 2,
      explanation: "La tradition la plus répandue cite al-ʿAlaq (96:1–5).",
    },
    {
  id: "l13_boss_q1",
  question:
    "Pourquoi la première Révélation ne peut-elle pas être comprise comme une simple ‘expérience spirituelle personnelle’ ?",
  options: [
    "Parce qu’elle est immédiatement accompagnée d’un message structuré",
    "Parce qu’elle est suivie d’une fuite définitive de La Mecque",
    "Parce qu’elle supprime toute émotion humaine",
    "Parce qu’elle est accueillie par une foule",
  ],
  correctIndex: 0,
  explanation:
    "La Révélation s’accompagne immédiatement d’un message clair et structuré (Iqraʾ), orienté vers une mission.",
  difficulty: "boss",
},

  ],
},
l14: {
  title: "Khadījah : la première à croire, le premier refuge",
  illustration: world4_l14,
  storyBlocks: [
    { type: "subtitle", text: "🏠 Le retour : chercher un refuge humain" },
    { type: "p", text: "Après l’événement de Ḥirāʾ, le Prophète ﷺ revient profondément bouleversé. Les récits décrivent l’intensité émotionnelle : ce n’est pas un récit héroïque fabriqué, c’est une réaction humaine." },
    { type: "p", text: "Il se tourne vers Khadījah bint Khuwaylid : son épouse, connue pour sa sagesse, sa dignité, et sa solidité." },

    { type: "subtitle", text: "🤲 Une réponse qui construit au lieu de briser" },
    { type: "p", text: "La Sîra rapporte que Khadījah ne répond pas par la panique. Elle répond par la lucidité. Elle évoque des qualités concrètes : le lien avec la famille, l’attention aux faibles, l’honnêteté, le respect du dépôt." },
    { type: "p", text: "Elle ne lui promet pas ‘une vie facile’. Elle l’ancre dans un constat : un homme qui vit ainsi ne sera pas abandonné." },

    { type: "subtitle", text: "📜 Waraqah ibn Nawfal : une lecture du phénomène" },
    { type: "p", text: "Khadījah l’emmène voir Waraqah ibn Nawfal, un parent âgé, connu dans les récits pour sa connaissance des Écritures." },
    { type: "p", text: "Les récits rapportent un échange où l’événement est interprété comme une visitation angélique, et annoncent que ce message rencontrera opposition. C’est un point clé : dès le départ, on comprend que la mission ne sera pas accueillie comme un simple discours moral." },

    { type: "subtitle", text: "🌙 La foi commence souvent dans le cercle le plus proche" },
    { type: "p", text: "Le premier soutien n’est pas une foule. C’est une personne. Une maison. Une confiance." },
    { type: "p", text: "Et dans la Sîra, Khadījah occupe cette place unique : elle est la première à croire et à soutenir, au tout début du chemin." },
  ],
  cliffhanger:
    "Mais après ce premier choc… il y aura une période de silence, puis un nouvel ordre. Quand le message reviendra, il ne dira plus seulement ‘lis’… il dira : ‘lève-toi’.",
  keyPoints: [
    "Khadījah est le premier refuge humain après la première Révélation.",
    "Elle répond par la lucidité : elle cite des qualités morales concrètes.",
    "Waraqah ibn Nawfal est consulté et interprète l’événement comme une visitation liée à la Révélation.",
    "Dès le départ, les récits annoncent que l’opposition viendra.",
    "Le début de la mission se construit dans l’intimité : maison, soutien, confiance.",
  ],
  reviewQuestions: [
    {
      id: "l14_q1",
      question: "Qui est la première personne à soutenir le Prophète ﷺ après Ḥirāʾ ?",
      options: ["Abū Jahl", "Khadījah", "Abū Lahab", "ʿUmar"],
      correctIndex: 1,
      explanation: "La Sîra rapporte que Khadījah est son premier soutien.",
    },
    {
      id: "l14_q2",
      question: "Pourquoi Waraqah ibn Nawfal est-il consulté dans les récits ?",
      options: [
        "Pour organiser un voyage",
        "Pour interpréter l’événement à la lumière des Écritures",
        "Pour faire un commerce",
        "Pour choisir un chef tribal",
      ],
      correctIndex: 1,
      explanation: "Il est consulté pour comprendre l’événement et sa nature.",
    },
    {
      id: "l14_q3",
      question: "Quel thème apparaît très tôt dans l’interprétation de l’événement ?",
      options: ["La mission sera facile", "La mission rencontrera opposition", "La Mecque se convertira immédiatement", "Le commerce cessera"],
      correctIndex: 1,
      explanation: "Les récits annoncent tôt que l’opposition viendra.",
    },
    {
  id: "l14_boss_q1",
  question:
    "Pourquoi la réaction de Khadījah est-elle considérée comme décisive dans le début de la mission prophétique ?",
  options: [
    "Parce qu’elle minimise l’événement",
    "Parce qu’elle transforme la peur en lucidité et en soutien concret",
    "Parce qu’elle impose une interprétation politique",
    "Parce qu’elle conseille l’isolement définitif",
  ],
  correctIndex: 1,
  explanation:
    "Khadījah apporte une lecture lucide, fondée sur les qualités morales reconnues du Prophète ﷺ, et un soutien concret.",
  difficulty: "boss",
},

  ],
},
l15: {
  title: "La pause, puis l’ordre : ‘Lève-toi et avertis’",
  illustration: world4_l15,
  storyBlocks: [
    { type: "subtitle", text: "⏳ La ‘fatra’ : une pause rapportée, une durée discutée" },
    { type: "p", text: "Après la première Révélation, les récits rapportent une période de pause (fatra) avant la reprise de la Révélation." },
    { type: "p", text: "La Sîra mentionne ce silence comme une épreuve intérieure : l’homme qui vient d’être traversé par un événement immense se retrouve, un temps, dans l’attente." },

    { type: "subtitle", text: "🌙 La Révélation reprend : une mission, pas une contemplation" },
    { type: "p", text: "La reprise de la Révélation marque un changement de registre : il ne s’agit pas seulement de recevoir. Il s’agit d’agir." },
    { type: "p", text: "Dans les récits, l’ordre se formule dans un sens clair : se lever et avertir. La mission sort de l’intime et se dirige vers la société." },

    { type: "subtitle", text: "🔥 Le message devient responsabilité" },
    { type: "p", text: "À partir de là, la Sîra change de rythme. L’homme ‘al-Amīn’, respecté pour sa fiabilité, devient porteur d’un appel qui remet en cause les équilibres." },
    { type: "p", text: "Ce passage est important : ce n’est pas un ‘projet personnel’, c’est une mission qui va toucher les croyances, les intérêts économiques, l’honneur tribal, et la hiérarchie sociale." },

    { type: "subtitle", text: "🧠 Un tournant psychologique : de la peur à l’obéissance" },
    { type: "p", text: "Le basculement n’est pas un changement de personnalité. C’est un déplacement de posture : accepter le poids d’une responsabilité supérieure, malgré la peur humaine." },
    { type: "p", text: "La Sîra nous apprend ici une règle : ce n’est pas l’absence de peur qui fait avancer, c’est la fidélité à l’ordre reçu." },
  ],
  cliffhanger:
    "Mais comment commencer à avertir sans déclencher immédiatement une guerre sociale ? La mission va d’abord démarrer… en secret.",
  keyPoints: [
    "Les récits rapportent une pause (fatra) après la première Révélation; sa durée exacte varie selon les transmissions.",
    "La reprise de la Révélation oriente vers l’action : se lever et avertir.",
    "La mission devient publique dans son intention, même si elle commence par une phase discrète.",
    "Le message touche les équilibres religieux, sociaux et économiques de La Mecque.",
    "Le courage n’est pas l’absence de peur : c’est l’obéissance malgré la peur.",
  ],
  reviewQuestions: [
    {
      id: "l15_q1",
      question: "Que désigne ‘fatra’ dans le contexte du début de la Révélation ?",
      options: ["Une migration", "Une pause/silence avant reprise", "Une bataille", "Un commerce"],
      correctIndex: 1,
      explanation: "La fatra désigne une période de pause rapportée entre révélations.",
    },
    {
      id: "l15_q2",
      question: "Quel changement de registre apparaît après la reprise de la Révélation ?",
      options: [
        "De l’action vers la contemplation uniquement",
        "De la réception vers la mission et l’avertissement",
        "Du commerce vers l’agriculture",
        "De La Mecque vers Médine immédiatement",
      ],
      correctIndex: 1,
      explanation: "La reprise oriente vers l’action : avertir et porter le message.",
    },

    // Boss-eligible
    {
      id: "l15_boss_q1",
      question: "Pourquoi la reprise de la Révélation est-elle un tournant stratégique ?",
      options: [
        "Parce qu’elle met fin au commerce mecquois",
        "Parce qu’elle transforme une expérience intime en mission sociale",
        "Parce qu’elle rend la prophétie héréditaire",
        "Parce qu’elle supprime toute opposition",
      ],
      correctIndex: 1,
      explanation: "Elle transforme l’intime en responsabilité envers la société.",
      difficulty: "boss",
    },
  ],
},
l16: {
  title: "Les débuts en secret : premiers croyants, premières tensions",
  illustration: world4_l16,
  storyBlocks: [
    { type: "subtitle", text: "🤫 Pourquoi commencer discrètement ?" },
    { type: "p", text: "Au début, l’appel se fait de manière discrète. Ce choix correspond à une réalité : la Mecque est un système tribal où un appel frontal peut déclencher une réaction violente avant même que le message ne soit compris." },
    { type: "p", text: "La Sîra montre une stratégie graduelle : construire une base de foi, former des cœurs, puis affronter l’orage." },

    { type: "subtitle", text: "🌱 Les premiers croyants : une base réelle, pas une légende" },
    { type: "p", text: "Les récits de Sîra mentionnent très tôt des figures connues parmi les premiers croyants : Khadījah en tête. Puis d’autres personnes proches et dignes de confiance, qui entrent dans l’islam à ce stade initial." },
    { type: "p", text: "Ce point est important : le message ne commence pas par une majorité. Il commence par une poignée de personnes convaincues, prêtes à tenir." },

    { type: "subtitle", text: "🕋 Le message touche le cœur de la Mecque" },
    { type: "p", text: "Le message de l’unicité (tawḥīd) n’est pas une simple opinion spirituelle dans ce contexte. Il remet en cause le système de représentation, l’honneur des ancêtres, et les intérêts liés aux rites." },
    { type: "p", text: "Même avant l’annonce publique totale, les tensions se préparent : la Mecque comprend vite qu’il ne s’agit pas d’une “nouvelle poésie” ou d’un simple discours moral." },

    { type: "subtitle", text: "⚠️ Le point de non-retour" },
    { type: "p", text: "À partir de là, la Sîra entre dans une phase où le message va progressivement s’exposer, et l’opposition va progressivement s’organiser." },
    { type: "p", text: "Ce n’est pas une histoire d’‘idées’. C’est une histoire de société qui refuse de se laisser transformer." },
  ],
  cliffhanger:
    "Et quand l’appel quittera le secret pour entrer dans l’espace public, La Mecque ne répondra pas par un débat… mais par une pression. Qui sera visé en premier ?",
  keyPoints: [
    "L’appel commence discrètement pour construire une base solide dans un système tribal sensible.",
    "Les premiers croyants sont peu nombreux au départ, mais déterminants.",
    "Le tawḥīd touche les intérêts et l’identité de la Mecque.",
    "Les tensions se forment avant même l’affrontement public total.",
    "La Sîra passe de l’intime au social : l’opposition devient inévitable.",
  ],
  reviewQuestions: [
    {
      id: "l16_q1",
      question: "Pourquoi l’appel commence-t-il de manière discrète au départ ?",
      options: [
        "Parce que le Prophète ﷺ refuse toute mission sociale",
        "Pour éviter une réaction brutale immédiate et former une base",
        "Parce que La Mecque était vide",
        "Parce qu’il n’y avait personne à convaincre",
      ],
      correctIndex: 1,
      explanation: "La Sîra montre une progression : base solide avant l’exposition totale.",
    },
    {
      id: "l16_q2",
      question: "Pourquoi le message du tawḥīd touche-t-il le cœur du système mecquois ?",
      options: [
        "Parce qu’il parle de commerce uniquement",
        "Parce qu’il remet en cause rites, ancêtres et intérêts liés aux idoles",
        "Parce qu’il impose une langue nouvelle",
        "Parce qu’il supprime les tribus",
      ],
      correctIndex: 1,
      explanation: "Le tawḥīd remet en cause le système religieux et social en place.",
    },

    // Boss-eligible
    {
      id: "l16_boss_q1",
      question: "Quel est le point stratégique de la phase secrète dans la Sîra ?",
      options: [
        "Gagner une majorité immédiate",
        "Construire des individus solides avant la confrontation sociale",
        "Éviter toute opposition pour toujours",
        "Transformer La Mecque sans effort",
      ],
      correctIndex: 1,
      explanation: "Construire une base de foi solide avant l’exposition et l’opposition.",
      difficulty: "boss",
    },
  ],
},

// -------------------- MONDE 5 --------------------
l17: {
  title: "L’appel public : le jour où tout change (≈ 613)",
  illustration: world5_l17,
  storyBlocks: [
    { type: "subtitle", text: "📅 De la phase discrète à l’annonce publique" },
    { type: "p", text: "Après une période où l’appel se construit discrètement, la Sîra rapporte un basculement vers l’annonce publique. Les repères classiques situent cette étape autour de l’année 613 (approx.)." },
    { type: "p", text: "Ce passage est crucial : l’islam ne reste plus une conviction intérieure. Il devient un message qui s’adresse à la société entière." },

    { type: "subtitle", text: "🕋 La Mecque : une ville où tout est lié" },
    { type: "p", text: "À La Mecque, religion, économie et honneur tribal sont imbriqués. Remettre en cause l’idolâtrie, ce n’est pas seulement critiquer un rituel : c’est toucher l’identité des clans et les intérêts liés au pèlerinage." },
    { type: "p", text: "Les Quraysh ne vont pas entendre un simple “discours moral”. Ils vont entendre une remise en cause de leur ordre." },

    { type: "subtitle", text: "📣 Une parole qui traverse la ville" },
    { type: "p", text: "L’annonce publique fait sortir le message de la maison et de petits cercles. La Sîra décrit l’appel à l’unicité d’Allah, à la responsabilité morale, et à l’abandon des idoles." },
    { type: "p", text: "À partir de là, les réactions ne sont plus individuelles. Elles deviennent collectives." },

    { type: "subtitle", text: "⚠️ Premier choc : la société se braque" },
    { type: "p", text: "Les Quraysh comprennent vite que le message ne cherche pas une place à côté des idoles : il les renverse. Et quand un message renverse, il déclenche un mécanisme connu : moquerie, pression, puis violence." },
  ],
  cliffhanger:
    "Au début, la Mecque rit. Puis elle s’inquiète. Et quand elle s’inquiète… elle attaque. Qui sera frappé en premier ?",
  keyPoints: [
    "Le basculement vers l’annonce publique est généralement situé vers 613 (approx.).",
    "À La Mecque, religion, économie et honneur tribal sont liés.",
    "Le tawḥīd remet en cause le système des idoles et les intérêts associés.",
    "L’opposition évolue : moquerie → pression → violence.",
  ],
  reviewQuestions: [
    {
      id: "l17_q1",
      question: "Vers quelle période l’appel devient-il public selon les repères classiques de la Sîra ?",
      options: ["Vers 570", "Vers 610", "Vers 613", "Vers 632"],
      correctIndex: 2,
      explanation: "La phase publique est souvent située autour de 613 (approx.).",
    },
    {
      id: "l17_q2",
      question: "Pourquoi l’annonce du tawḥīd dérange-t-elle fortement Quraysh ?",
      options: [
        "Parce qu’elle parle d’agriculture",
        "Parce qu’elle remet en cause l’ordre religieux, social et économique",
        "Parce qu’elle interdit le commerce uniquement",
        "Parce qu’elle concerne seulement Médine",
      ],
      correctIndex: 1,
      explanation: "Le tawḥīd touche les idoles, l’honneur tribal et les intérêts liés au pèlerinage.",
    },
    {
  id: "l17_boss_q1",
  question:
    "Pourquoi l’annonce publique du message marque-t-elle un point de non-retour à La Mecque ?",
  options: [
    "Parce qu’elle transforme une foi privée en remise en cause de l’ordre social",
    "Parce qu’elle attire immédiatement des armées",
    "Parce qu’elle supprime toute opposition",
    "Parce qu’elle concerne uniquement la famille du Prophète ﷺ",
  ],
  correctIndex: 0,
  explanation:
    "L’annonce publique transforme un message discret en remise en cause directe du système religieux, social et économique.",
  difficulty: "boss",
}

  ],
},
l18: {
  title: "Moquerie, négociation, pression : la réponse de Quraysh",
  illustration: world5_l18,
  storyBlocks: [
    { type: "subtitle", text: "😏 La moquerie : première arme d’un système menacé" },
    { type: "p", text: "Quand un message bouleverse les habitudes, la première défense est souvent le ridicule. La Sîra rapporte que le Prophète ﷺ et les croyants sont tournés en dérision." },
    { type: "p", text: "Le but est clair : isoler socialement, décourager, et empêcher le message d’être pris au sérieux." },

    { type: "subtitle", text: "🤝 La négociation : tenter de contrôler le message" },
    { type: "p", text: "Après la moquerie, vient la tentative de compromis : faire taire l’appel ou le diluer. Les récits rapportent des démarches visant à obtenir une “cohabitation” avec les idoles ou une réduction de l’impact du message." },
    { type: "p", text: "Ce n’est pas un débat honnête : c’est une stratégie de maintien de l’ordre." },

    { type: "subtitle", text: "ضغط اجتماعي : la pression du clan" },
    { type: "p", text: "À La Mecque, l’individu est protégé (ou exposé) par son clan. Quraysh utilise donc la pression tribale : menaces, ruptures, humiliations, boycott social informel." },
    { type: "p", text: "Les croyants les plus faibles socialement deviennent les cibles les plus faciles." },

    { type: "subtitle", text: "⚠️ Le passage au concret" },
    { type: "p", text: "À ce stade, on passe de la parole aux actes. La persécution n’est pas un accident : c’est une phase du conflit." },
  ],
  cliffhanger:
    "Quand la pression ne suffit plus, la violence commence. Et ce sont souvent les plus vulnérables qui paient en premier.",
  keyPoints: [
    "Quraysh commence par ridiculiser et isoler socialement.",
    "Puis tente le compromis pour contrôler l’impact du message.",
    "La pression tribale est un outil central à La Mecque.",
    "Les plus vulnérables socialement sont les plus exposés.",
  ],
  reviewQuestions: [
    {
      id: "l18_q1",
      question: "Quelle est souvent la première réaction d’un système menacé ?",
      options: ["La prière", "La moquerie", "L’acceptation immédiate", "La migration"],
      correctIndex: 1,
      explanation: "Les récits montrent le ridicule comme première arme sociale.",
    },
    {
      id: "l18_q2",
      question: "Pourquoi la pression tribale est-elle si efficace à La Mecque ?",
      options: [
        "Parce que l’État protège tout le monde",
        "Parce que la protection dépend du clan",
        "Parce que personne ne vit en tribu",
        "Parce que La Mecque est isolée",
      ],
      correctIndex: 1,
      explanation: "La sécurité et l’honneur passent par le clan.",
    },
    {
  id: "l18_boss_q1",
  question:
    "Pourquoi Quraysh passe-t-elle de la moquerie à la pression puis à la persécution ?",
  options: [
    "Parce que le message accepte le compromis",
    "Parce que le ridicule échoue à faire taire l’appel",
    "Parce que Médine intervient",
    "Parce que les musulmans attaquent en premier",
  ],
  correctIndex: 1,
  explanation:
    "Quand la moquerie et la pression échouent, le système menacé recourt à la violence.",
  difficulty: "boss",
}

  ],
},
l19: {
  title: "Quand la foi coûte : les premières persécutions (≈ 613–615)",
  illustration: world5_l19,
  storyBlocks: [
    { type: "subtitle", text: "⚠️ La violence n’arrive pas par hasard" },
    { type: "p", text: "La Sîra décrit une montée : moquerie, pression, puis violence. Quand le message refuse le compromis, le système cherche à casser les porteurs du message." },
    { type: "p", text: "Cette phase est souvent située autour de 613–615 (approx.) pour les persécutions les plus visibles." },

    { type: "subtitle", text: "🧱 Qui est le plus visé ?" },
    { type: "p", text: "Les croyants sans protection tribale forte sont les plus vulnérables. Dans une société de clans, être “sans bouclier” expose à l’abus." },
    { type: "p", text: "Les récits de Sîra mentionnent des actes de torture et d’humiliation contre certains premiers musulmans, précisément parce qu’ils n’avaient pas de clan capable de riposter." },

    { type: "subtitle", text: "🧠 Une foi qui n’est plus théorique" },
    { type: "p", text: "À ce moment-là, la foi n’est plus une idée. Elle devient une endurance. Une capacité à tenir, à répéter l’unicité malgré la douleur et la pression sociale." },
    { type: "p", text: "Et c’est ici que la communauté naissante se forge : par la patience et la solidarité." },

    { type: "subtitle", text: "🌙 Le Prophète ﷺ n’a pas le pouvoir, mais il a la constance" },
    { type: "p", text: "Le Prophète ﷺ ne répond pas avec une armée. Il répond par l’appel, la formation, la constance, et le soutien aux croyants. C’est une stratégie de construction, pas de domination." },
  ],
  cliffhanger:
    "La Mecque devient un étau. Alors une question apparaît : faut-il rester… ou partir pour sauver la foi ?",
  keyPoints: [
    "La persécution suit une logique : moquerie → pression → violence.",
    "Les plus vulnérables socialement sont les plus ciblés.",
    "La foi devient endurance et constance.",
    "La communauté se forge par patience et solidarité.",
  ],
  reviewQuestions: [
    {
      id: "l19_q1",
      question: "Qui est le plus vulnérable face à la persécution à La Mecque ?",
      options: [
        "Les personnes sans protection tribale forte",
        "Les plus riches uniquement",
        "Les voyageurs étrangers uniquement",
        "Les chefs de clans uniquement",
      ],
      correctIndex: 0,
      explanation: "Dans un système tribal, la protection dépend du clan.",
    },
    {
      id: "l19_q2",
      question: "Pourquoi cette phase rend-elle la foi 'non théorique' ?",
      options: [
        "Parce qu’elle devient une simple culture",
        "Parce qu’elle exige endurance, patience et constance",
        "Parce qu’elle supprime toute difficulté",
        "Parce qu’elle n’a plus de sens",
      ],
      correctIndex: 1,
      explanation: "La foi devient tenue réelle sous pression.",
    },
    {
      id: "l19_boss_q1",
      question: "Quel mécanisme de confrontation la Sîra met-elle en évidence dans cette phase ?",
      options: [
        "Acceptation immédiate du message par Quraysh",
        "Moquerie → pression → violence quand le compromis échoue",
        "Migration immédiate de toute la communauté",
        "Guerre militaire directe dès le début",
      ],
      correctIndex: 1,
      explanation: "La progression de l’opposition est un schéma récurrent dans les récits.",
      difficulty: "boss",
    },
  ],
},
l20: {
  title: "Le premier refuge : l’Hijra vers l’Abyssinie (≈ 615)",
  illustration: world5_l20,
  storyBlocks: [
    { type: "subtitle", text: "📅 Un repère : la migration avant Médine" },
    { type: "p", text: "Avant l’Hégire vers Médine, la Sîra rapporte une première migration : vers l’Abyssinie (Habasha), généralement située vers 615 (approx.)." },
    { type: "p", text: "Ce choix montre une réalité : quand la persécution écrase, l’islam n’exige pas le suicide social. Il ouvre une porte : chercher un refuge." },

    { type: "subtitle", text: "🛡️ Pourquoi l’Abyssinie ?" },
    { type: "p", text: "Les récits mentionnent un souverain connu pour sa justice (le Négus / Najāshī). C’est un point central : la communauté cherche une terre où l’injustice ne domine pas." },
    { type: "p", text: "Ce n’est pas une migration de confort. C’est une migration de survie spirituelle." },

    { type: "subtitle", text: "🌊 Quitter La Mecque : un arrachement" },
    { type: "p", text: "Pour une société tribale, quitter sa terre, c’est perdre un bouclier. C’est s’exposer au monde. Mais c’est parfois le prix pour préserver la foi." },
    { type: "p", text: "La Sîra présente cette hijra comme une preuve : l’islam ne s’est pas construit sur une facilité, mais sur des sacrifices réels." },

    { type: "subtitle", text: "⚠️ Quraysh ne lâche pas" },
    { type: "p", text: "La Mecque ne voit pas cette migration comme un détail. Car elle comprend : si les croyants trouvent un refuge, le message ne s’éteindra pas." },
    { type: "p", text: "Et quand Quraysh comprend cela… elle tente d’étouffer l’affaire." },
  ],
  cliffhanger:
    "Quraysh va envoyer des émissaires. Et un discours va être prononcé devant un roi. Que dira-t-on de l’islam… face à la justice ?",
  keyPoints: [
    "Première hijra vers l’Abyssinie généralement située vers 615 (approx.).",
    "Motif : refuge face à la persécution.",
    "L’Abyssinie est choisie pour la réputation de justice du souverain (Najāshī).",
    "Quitter La Mecque est un arrachement dans un système tribal.",
    "Quraysh tente d’empêcher la stabilisation du refuge.",
  ],
  reviewQuestions: [
    {
      id: "l20_q1",
      question: "Quelle est la première migration rapportée avant l’Hégire vers Médine ?",
      options: ["Vers Ṭāʾif", "Vers l’Abyssinie (Habasha)", "Vers la Perse", "Vers le Shām"],
      correctIndex: 1,
      explanation: "La Sîra rapporte une hijra vers l’Abyssinie avant Médine.",
    },
    {
      id: "l20_q2",
      question: "Pourquoi l’Abyssinie est-elle choisie selon les récits ?",
      options: [
        "Parce qu’elle est la plus proche",
        "Pour la justice reconnue du souverain",
        "Parce qu’elle est riche en or",
        "Parce que Quraysh y gouverne",
      ],
      correctIndex: 1,
      explanation: "Les récits mentionnent un roi connu pour sa justice.",
    },
    {
      id: "l20_boss_q1",
      question: "Quel message stratégique la hijra vers l’Abyssinie envoie-t-elle ?",
      options: [
        "Que l’islam est un projet de domination militaire",
        "Que préserver la foi peut exiger un sacrifice et un déplacement",
        "Que La Mecque accepte le message",
        "Que l’opposition est terminée",
      ],
      correctIndex: 1,
      explanation: "La hijra montre que la foi se protège parfois par un sacrifice réel.",
      difficulty: "boss",
    },
  ],
},


// -------------------- MONDE 6 --------------------
l21: {
  title: "Le boycott : une décision froide (≈ 616)",
  illustration: world6_l21,
  storyBlocks: [
    { type: "subtitle", text: "🕋 Une Mecque qui n’arrive plus à étouffer" },
    { type: "p", text: "Vers 616 (approx.), Quraysh constate une vérité qui l’irrite : malgré la moquerie, malgré les pressions, malgré les humiliations… le message ne s’éteint pas. Les croyants ne disparaissent pas. Et surtout, le Prophète ﷺ est toujours protégé par son clan." },
    { type: "p", text: "Dans une société tribale, la protection n’est pas un détail : c’est la frontière entre la vie et la mort. Tant que Banū Hāshim tient, Quraysh ne peut pas agir ouvertement." },

    { type: "subtitle", text: "🧊 La stratégie qui ne fait pas de bruit" },
    { type: "p", text: "Alors Quraysh bascule vers une arme silencieuse : l’asphyxie. Pas une bataille, pas une attaque frontale. Un étranglement lent : social, économique, familial." },
    { type: "p", text: "Ils veulent isoler Banū Hāshim et Banū al-Muṭṭalib, musulman ou non, et les pousser à livrer le Prophète ﷺ — ou à le faire taire." },

    { type: "subtitle", text: "🤝 Quand la tribu devient une prison" },
    { type: "p", text: "Ce boycott vise un point précis : la loyauté tribale. Quraysh sait que la communauté ne vit pas seulement de foi… elle vit de liens. Elle vit du commerce. Elle vit des alliances. Elle vit des mariages." },
    { type: "p", text: "Coupe les liens… et tu coupes l’air." },

    { type: "subtitle", text: "⏳ Une décision qui annonce une longue nuit" },
    { type: "p", text: "Ce choix marque un tournant. Quraysh ne cherche plus à convaincre, ni même à ridiculiser. Elle veut briser. Lentement." },
  ],
  cliffhanger:
    "Mais pour que l’injustice devienne totale, Quraysh doit l’écrire… et l’exposer au cœur même de la Kaʿba.",
  keyPoints: [
    "Le boycott est généralement situé vers 616 (approx.).",
    "Quraysh passe à une stratégie d’asphyxie économique et sociale.",
    "Le boycott vise Banū Hāshim et Banū al-Muṭṭalib collectivement.",
    "L’objectif est de briser la protection tribale et isoler la communauté.",
  ],
  reviewQuestions: [
    {
      id: "l21_q1",
      question: "Quel est l’objectif principal du boycott décidé par Quraysh ?",
      options: [
        "Convaincre par le débat",
        "Asphyxier socialement et économiquement",
        "Créer une alliance militaire",
        "Accélérer les échanges commerciaux",
      ],
      correctIndex: 1,
      explanation: "Le boycott vise l’isolement total : commerce, relations, alliances.",
    },
    {
      id: "l21_q2",
      question: "Pourquoi la protection tribale est-elle centrale à ce moment ?",
      options: [
        "Parce qu’elle remplace la foi",
        "Parce qu’elle détermine la sécurité et la survie",
        "Parce qu’elle garantit la richesse",
        "Parce qu’elle supprime l’opposition",
      ],
      correctIndex: 1,
      explanation: "Dans l’Arabie tribale, la protection est le bouclier essentiel.",
    },
    {
      id: "l21_boss_q1",
      question: "Pourquoi Quraysh choisit-elle l’asphyxie plutôt qu’une attaque directe ?",
      options: [
        "Parce qu’elle est faible militairement",
        "Parce que la protection clanique empêche une attaque ouverte",
        "Parce qu’elle veut fuir la Mecque",
        "Parce qu’elle accepte l’islam",
      ],
      correctIndex: 1,
      explanation: "Le clan protège le Prophète ﷺ : Quraysh contourne par la pression collective.",
      difficulty: "boss",
    },
  ],
},
l22: {
  title: "Le pacte dans la Kaʿba : sceller l’injustice",
  illustration: world6_l22,
  storyBlocks: [
    { type: "subtitle", text: "📜 Quand l’injustice devient officielle" },
    { type: "p", text: "Le boycott n’est pas seulement une idée : il devient un texte. Un pacte écrit, détaillé, assumé. Il interdit le commerce, les mariages, les relations sociales et le soutien à Banū Hāshim et Banū al-Muṭṭalib." },
    { type: "p", text: "Dans une ville où les liens font vivre, c’est une condamnation." },

    { type: "subtitle", text: "🕋 Le choix du lieu : un message" },
    { type: "p", text: "Le pacte est suspendu dans la Kaʿba. Ce détail frappe : on accroche l’injustice dans le lieu le plus sacré de la cité." },
    { type: "p", text: "Quraysh veut graver l’hostilité dans le marbre. Faire du boycott une norme." },

    { type: "subtitle", text: "⚠️ Une punition collective assumée" },
    { type: "p", text: "Ce qui rend l’épreuve plus dure encore : elle touche aussi des non-musulmans du clan, simplement parce qu’ils protègent. La logique est froide : “Vous protégez ? Alors vous payez.”" },
    { type: "p", text: "C’est la force brutale du système tribal retournée contre ceux qui y vivent." },

    { type: "subtitle", text: "🌑 Un climat de peur silencieuse" },
    { type: "p", text: "À partir de là, chaque achat devient suspect, chaque aide devient une trahison, chaque relation devient un risque." },
    { type: "p", text: "Quraysh ne veut pas seulement affamer : elle veut isoler psychologiquement." },
  ],
  cliffhanger:
    "Une fois le pacte scellé, il ne reste qu’une étape : enfermer les familles… et attendre que la faim fasse son œuvre.",
  keyPoints: [
    "Le boycott est écrit et officialisé par un pacte.",
    "Le pacte est suspendu dans la Kaʿba (symbolique forte).",
    "La punition vise aussi des non-musulmans du clan protecteur.",
    "L’isolement est économique, social et psychologique.",
  ],
  reviewQuestions: [
    {
      id: "l22_q1",
      question: "Quels aspects le pacte de boycott interdit-il principalement ?",
      options: [
        "Uniquement les prières",
        "Commerce, relations sociales, mariages",
        "La migration vers Médine",
        "Les voyages vers le Shām",
      ],
      correctIndex: 1,
      explanation: "Le boycott vise commerce + relations + alliances.",
    },
    {
      id: "l22_q2",
      question: "Pourquoi suspendre le pacte dans la Kaʿba est-il symboliquement fort ?",
      options: [
        "Parce que c’est un lieu de stockage",
        "Parce que cela sacralise et publicise la décision",
        "Parce que cela empêche les gens de lire",
        "Parce que cela rend le pacte secret",
      ],
      correctIndex: 1,
      explanation: "Le lieu rend la décision visible et “normalisée” aux yeux de la cité.",
    },
    {
      id: "l22_boss_q1",
      question: "Pourquoi le boycott touche-t-il aussi des non-musulmans du clan ?",
      options: [
        "Parce qu’ils sont tous convertis",
        "Parce qu’ils protègent le Prophète ﷺ par loyauté tribale",
        "Parce qu’ils sont étrangers",
        "Parce qu’ils attaquent Quraysh",
      ],
      correctIndex: 1,
      explanation: "Le boycott cible la protection, pas seulement la croyance.",
      difficulty: "boss",
    },
  ],
},
l23: {
  title: "Le Shiʿb Abī Ṭālib : survivre enfermés (≈ 616–619)",
  illustration: world6_l23,
  storyBlocks: [
    { type: "subtitle", text: "⛰️ Un ravin étroit, un horizon fermé" },
    { type: "p", text: "Sous la pression du boycott, Banū Hāshim et Banū al-Muṭṭalib se replient dans un ravin : le Shiʿb Abī Ṭālib. Ce n’est pas un choix de confort. C’est un enfermement forcé." },
    { type: "p", text: "La vie y devient immédiatement rude : peu d’espace, peu de ressources, et une hostilité tout autour." },

    { type: "subtitle", text: "🍞 La faim devient une arme" },
    { type: "p", text: "Les vivres se raréfient. Le commerce est coupé. Les pleurs des enfants, rapportés dans les récits, se font entendre jusque dans la ville." },
    { type: "p", text: "Dans cette épreuve, le quotidien se résume parfois à une question simple : ‘Qu’est-ce qu’on mange aujourd’hui ?’ — et souvent, la réponse est : presque rien." },

    { type: "subtitle", text: "🌙 Des nuits de vigilance" },
    { type: "p", text: "Abū Ṭālib redouble de prudence. On rapporte qu’il changeait parfois la place du Prophète ﷺ la nuit, craignant une attaque surprise." },
    { type: "p", text: "L’épreuve n’est pas seulement la faim. C’est l’attente, la peur, l’incertitude." },

    { type: "subtitle", text: "🧱 Une résistance invisible" },
    { type: "p", text: "Il n’y a pas d’épée brandie. Il y a des corps qui tiennent, des cœurs qui refusent de céder, des familles qui restent unies." },
    { type: "p", text: "C’est une résistance qui ne fait pas de bruit… mais qui forge une communauté." },
  ],
  cliffhanger:
    "Trois années passent. Et à La Mecque, certains commencent à se demander : “Jusqu’où ira cette injustice ?”",
  keyPoints: [
    "Le Shiʿb Abī Ṭālib devient un lieu d’enfermement.",
    "Le boycott cause une faim sévère et une grande souffrance.",
    "La protection du Prophète ﷺ reste une priorité vitale.",
    "La communauté résiste par patience et solidarité.",
  ],
  reviewQuestions: [
    {
      id: "l23_q1",
      question: "Pourquoi les familles se regroupent-elles dans le Shiʿb Abī Ṭālib ?",
      options: [
        "Pour une retraite spirituelle volontaire",
        "Pour fuir une guerre extérieure",
        "À cause du boycott et de l’isolement imposés",
        "Pour lancer le commerce vers Médine",
      ],
      correctIndex: 2,
      explanation: "Le boycott force l’isolement et coupe les ressources.",
    },
    {
      id: "l23_q2",
      question: "Quelle est une dimension majeure de l’épreuve dans le Shiʿb ?",
      options: [
        "Le luxe",
        "La faim et la peur",
        "La conquête",
        "La fête annuelle",
      ],
      correctIndex: 1,
      explanation: "Les récits décrivent une souffrance liée à la faim et à l’insécurité.",
    },
    {
      id: "l23_boss_q1",
      question: "Quel est l’objectif profond de l’enfermement dans le Shiʿb ?",
      options: [
        "Former des savants",
        "Briser la communauté par asphyxie progressive",
        "Créer une nouvelle économie",
        "Préparer l’Hégire",
      ],
      correctIndex: 1,
      explanation: "Quraysh vise à briser par l’épuisement social et économique.",
      difficulty: "boss",
    },
  ],
},
l24: {
  title: "La fin du boycott : l’injustice se fissure (≈ 619)",
  illustration: world6_l24,
  storyBlocks: [
    { type: "subtitle", text: "🧠 Une injustice trop lourde même pour ses auteurs" },
    { type: "p", text: "Avec le temps, l’injustice du boycott devient difficile à porter, même pour certains Quraysh. Les liens de sang sont piétinés, des enfants souffrent, des familles sont brisées." },
    { type: "p", text: "Dans une société tribale, couper la parenté est un acte violent. Et plus le boycott dure, plus la conscience de certains s’agite." },

    { type: "subtitle", text: "📜 Le pacte remis en cause" },
    { type: "p", text: "Les récits rapportent que le pacte suspendu dans la Kaʿba est retrouvé détérioré, rongé, sauf ce qui mentionne le nom d’Allah." },
    { type: "p", text: "Que l’on insiste sur le symbole ou sur le fait historique, l’idée est claire : l’injustice n’est pas éternelle. Elle se fissure." },

    { type: "subtitle", text: "🚪 Sortir… mais sortir brisés" },
    { type: "p", text: "Vers 619 (approx.), le boycott est levé. Les familles sortent du ravin. Le corps est affaibli. Les traces sont visibles. Les cœurs sont marqués." },
    { type: "p", text: "Mais la communauté n’a pas cédé. Elle a tenu." },

    { type: "subtitle", text: "🌑 Une fin qui annonce une autre épreuve" },
    { type: "p", text: "Et pourtant… à peine cette épreuve terminée, une autre arrive. Car deux piliers vont tomber, et l’année qui suit portera un nom lourd : l’Année de la Tristesse." },
  ],
  cliffhanger:
    "Ils sortent du ravin… mais ce n’est pas la délivrance. C’est la transition vers une tristesse plus intime encore.",
  keyPoints: [
    "Le boycott est levé vers 619 (approx.).",
    "L’opposition interne à l’injustice grandit à La Mecque.",
    "La sortie du Shiʿb laisse la communauté affaiblie mais intacte dans sa foi.",
    "La suite mène vers l’Année de la Tristesse (perte des piliers).",
  ],
  reviewQuestions: [
    {
      id: "l24_q1",
      question: "Pourquoi le boycott finit-il par être levé ?",
      options: [
        "À cause d’une victoire militaire",
        "À cause de fissures morales et sociales au sein de Quraysh",
        "À cause d’un commerce nouveau",
        "À cause d’un traité avec Rome",
      ],
      correctIndex: 1,
      explanation: "L’injustice prolongée finit par créer des oppositions internes.",
    },
    {
      id: "l24_q2",
      question: "Quel état décrit la sortie du Shiʿb ?",
      options: [
        "Une richesse retrouvée immédiatement",
        "Un triomphe militaire",
        "Une faiblesse physique mais une foi intacte",
        "Une disparition totale de la communauté",
      ],
      correctIndex: 2,
      explanation: "Ils sortent affaiblis, mais sans avoir cédé.",
    },
    {
      id: "l24_boss_q1",
      question: "Quelle leçon centrale ressort de la fin du boycott ?",
      options: [
        "La violence est la seule voie",
        "L’endurance collective peut fissurer l’injustice",
        "La fuite est préférable",
        "Le commerce domine tout",
      ],
      correctIndex: 1,
      explanation: "La solidarité et la patience permettent de tenir jusqu’à la rupture de l’injustice.",
      difficulty: "boss",
    },
  ],
},

// -------------------- MONDE 7 --------------------
l25: {
  title: "Quand les piliers tombent (≈ 619)",
  illustration: world7_l25,
  storyBlocks: [
    { type: "subtitle", text: "🌑 Après le boycott : sortir… sans respirer" },
    { type: "p", text: "Le boycott a été levé (≈ 619), mais la communauté ne sort pas d’un tunnel vers la lumière. Elle sort vers une autre forme d’obscurité : l’épuisement, les blessures invisibles, la fragilité." },
    { type: "p", text: "La Mecque n’a pas changé. Les regards sont toujours durs. Les pressions reprennent, parfois plus cruelles, parce que Quraysh comprend que la stratégie lente n’a pas éteint le message." },

    { type: "subtitle", text: "🧱 Deux piliers : protection et refuge" },
    { type: "p", text: "Dans la réalité mecquoise, le Prophète ﷺ tient sur deux piliers fondamentaux : la protection tribale (qui empêche l’assassinat ouvert) et le refuge intime (qui répare le cœur). Ces deux piliers ont des noms. Et bientôt… ils vont tomber." },
    { type: "p", text: "Ce monde n’est pas seulement une suite d’événements. C’est une bascule intérieure : comment porter la mission quand la terre retire tout appui ?" },

    { type: "subtitle", text: "⏳ ʿĀm al-Ḥuzn : un nom qui dit tout" },
    { type: "p", text: "Les sources appellent cette période l’« Année de la Tristesse » (ʿĀm al-Ḥuzn). Le mot n’est pas décoratif. Il décrit une succession de pertes et de pressions, dans un contexte où l’opposition se sent plus libre que jamais." },
    { type: "p", text: "Et quand les ennemis sentent une faille… ils s’y engouffrent." },

    { type: "subtitle", text: "⚠️ Le danger devient plus concret" },
    { type: "p", text: "Plus les protections faiblissent, plus la violence se rapproche. Les limites tribales, autrefois frein, deviennent moins sûres. La mission continue, mais la marge de sécurité se réduit." },
  ],
  cliffhanger:
    "Le premier pilier tombe bientôt : celui qui, même sans accepter l’islam, protégeait le Prophète ﷺ face à Quraysh…",
  keyPoints: [
    "Après la levée du boycott (≈ 619), la pression ne disparaît pas.",
    "La protection tribale et le refuge intime sont deux piliers majeurs.",
    "ʿĀm al-Ḥuzn (Année de la Tristesse) désigne une période de pertes et d’épreuves.",
    "Le danger se rapproche quand la protection sociale s’affaiblit.",
  ],
  reviewQuestions: [
    {
      id: "l25_q1",
      question: "Pourquoi la fin du boycott ne signifie-t-elle pas la fin des épreuves ?",
      options: [
        "Parce que Quraysh devient soudainement musulmane",
        "Parce que la pression et l’hostilité reprennent rapidement",
        "Parce que la Mecque est détruite",
        "Parce que le Prophète ﷺ quitte immédiatement la ville",
      ],
      correctIndex: 1,
      explanation: "La levée du boycott ne change pas l’hostilité de fond de Quraysh.",
    },
    {
      id: "l25_q2",
      question: "Que symbolise l’expression ʿĀm al-Ḥuzn ?",
      options: [
        "Une année de commerce prospère",
        "Une année de pertes et de tristesse profonde",
        "Une année de conquêtes militaires",
        "Une année sans opposition",
      ],
      correctIndex: 1,
      explanation: "Elle décrit une période marquée par de lourdes pertes et une pression accrue.",
    },
    {
      id: "l25_boss_q1",
      question: "Pourquoi la protection tribale est-elle vitale à La Mecque à cette période ?",
      options: [
        "Parce qu’elle remplace la foi",
        "Parce qu’elle empêche une agression ouverte sans conséquences",
        "Parce qu’elle assure des richesses",
        "Parce qu’elle rend Quraysh neutre",
      ],
      correctIndex: 1,
      explanation: "Dans un système tribal, la protection du clan est un bouclier contre l’attaque directe.",
      difficulty: "boss",
    },
  ],
},
l26: {
  title: "La perte d’Abū Ṭālib : la protection s’effondre (≈ 619)",
  illustration: world7_l26,
  storyBlocks: [
    { type: "subtitle", text: "🛡️ Un bouclier… même sans conversion" },
    { type: "p", text: "Abū Ṭālib n’est pas simplement un proche. Il est le chef de clan qui, par loyauté familiale et tribale, a protégé le Prophète ﷺ des attaques directes. Tant qu’il tient, Quraysh hésite : une agression ouverte serait un conflit tribal." },
    { type: "p", text: "Cette protection n’est pas un luxe : c’est une ligne rouge." },

    { type: "subtitle", text: "⚠️ Le vide qui attire les prédateurs" },
    { type: "p", text: "Quand Abū Ṭālib meurt (≈ 619), un changement immédiat se produit : Quraysh se sent plus libre. Les limites se déplacent. La violence devient plus possible, plus proche, plus arrogante." },
    { type: "p", text: "Le Prophète ﷺ n’a pas seulement perdu un oncle. Il a perdu un bouclier social visible." },

    { type: "subtitle", text: "🏙️ La Mecque devient plus étroite" },
    { type: "p", text: "Ce n’est pas que les rues changent. C’est que l’atmosphère change. Les regards se durcissent. Les provocations deviennent plus directes. La marge de sécurité se réduit." },
    { type: "p", text: "Dans cette ville, le poids d’un nom et d’un clan protège. Quand ce poids disparaît, la réalité devient brutale." },

    { type: "subtitle", text: "🧠 Une leçon historique" },
    { type: "p", text: "La Sîra nous montre ici une vérité : la mission est divine, mais elle traverse des structures humaines. Et parfois, Allah fait passer Son messager ﷺ par des pertes qui semblent insoutenables — non pour l’écraser, mais pour préparer une ouverture ailleurs." },
  ],
  cliffhanger:
    "Mais le second pilier tombe à son tour : celui qui n’était pas un bouclier social… mais un refuge intérieur. Et la douleur devient plus silencieuse encore.",
  keyPoints: [
    "Abū Ṭālib assure une protection tribale cruciale.",
    "Sa mort (≈ 619) affaiblit la sécurité sociale du Prophète ﷺ à La Mecque.",
    "Quraysh devient plus agressive lorsque la protection clanique disparaît.",
    "La Sîra montre l’interaction entre mission divine et contexte humain.",
  ],
  reviewQuestions: [
    {
      id: "l26_q1",
      question: "Quel rôle majeur jouait Abū Ṭālib dans la période mecquoise ?",
      options: [
        "Chef militaire de Médine",
        "Protecteur tribal du Prophète ﷺ",
        "Roi du Shām",
        "Chef d’une armée étrangère",
      ],
      correctIndex: 1,
      explanation: "Il protégeait le Prophète ﷺ via la structure tribale.",
    },
    {
      id: "l26_q2",
      question: "Que se passe-t-il socialement après la mort d’Abū Ṭālib ?",
      options: [
        "Quraysh devient plus prudente",
        "La pression s’intensifie et les limites reculent",
        "La Mecque devient musulmane",
        "Le boycott recommence automatiquement",
      ],
      correctIndex: 1,
      explanation: "La protection s’affaiblit, Quraysh se sent plus libre d’attaquer.",
    },
    {
      id: "l26_boss_q1",
      question: "Pourquoi la mort d’un protecteur tribal change-t-elle la nature du danger ?",
      options: [
        "Parce que la foi diminue",
        "Parce que les représailles tribales deviennent moins probables",
        "Parce que l’économie s’effondre",
        "Parce que Médine attaque",
      ],
      correctIndex: 1,
      explanation: "Sans bouclier tribal, l’agression directe devient moins coûteuse pour Quraysh.",
      difficulty: "boss",
    },
  ],
},
l27: {
  title: "La perte de Khadījah : le refuge s’éteint (≈ 619)",
  illustration: world7_l27,
  storyBlocks: [
    { type: "subtitle", text: "🤍 Le premier soutien… dès le premier choc" },
    { type: "p", text: "Khadījah (رضي الله عنها) n’est pas un personnage secondaire dans la Sîra : elle est le premier refuge. Dans les débuts, quand le Prophète ﷺ revient bouleversé, c’est elle qui apaise, confirme, rassure, soutient." },
    { type: "p", text: "Elle porte la mission avec une discrétion immense : par le cœur, par la parole, par la stabilité." },

    { type: "subtitle", text: "🌑 Une perte qui ne fait pas de bruit… mais qui vide une maison" },
    { type: "p", text: "Quand Khadījah meurt (≈ 619), la douleur n’est pas politique. Elle est intime. Elle traverse la maison, les silences, les habitudes. On peut être entouré… et sentir un vide immense." },
    { type: "p", text: "À la Mecque, l’hostilité est publique. Mais ici, c’est autre chose : c’est l’absence de celle qui comprenait sans expliquer." },

    { type: "subtitle", text: "🧠 Quand l’épreuve devient intérieure" },
    { type: "p", text: "Le Prophète ﷺ affronte désormais une double réalité : plus de protection tribale forte… et plus de refuge intérieur au quotidien." },
    { type: "p", text: "La mission continue, mais le cœur porte plus lourd." },

    { type: "subtitle", text: "🌱 Et pourtant… la mission ne s’arrête pas" },
    { type: "p", text: "C’est ici que la Sîra enseigne une endurance rare : continuer sans les piliers habituels. Ne pas confondre tristesse et arrêt. La douleur existe… mais la mission continue." },
  ],
  cliffhanger:
    "À La Mecque, l’étau se resserre. Alors une idée se forme : chercher un appui ailleurs. Une ville va être visitée… et la porte va claquer violemment.",
  keyPoints: [
    "Khadījah (ra) est un refuge et un soutien majeur dès les débuts.",
    "Sa mort (≈ 619) est une perte intime, profonde et structurante.",
    "La période combine perte de protection sociale et perte de soutien personnel.",
    "La mission continue malgré la douleur.",
  ],
  reviewQuestions: [
    {
      id: "l27_q1",
      question: "Quel rôle central Khadījah (ra) joue-t-elle dans la mission au début ?",
      options: [
        "Opposante principale",
        "Premier refuge et soutien",
        "Chef d’armée",
        "Ambassadrice de Médine",
      ],
      correctIndex: 1,
      explanation: "Elle soutient dès les premiers moments et apaise le Prophète ﷺ.",
    },
    {
      id: "l27_q2",
      question: "Pourquoi sa perte est-elle décrite comme une épreuve intérieure ?",
      options: [
        "Parce qu’elle concerne la politique de Quraysh",
        "Parce qu’elle touche le foyer, le quotidien et le cœur",
        "Parce qu’elle déclenche une bataille",
        "Parce qu’elle provoque l’Hégire immédiate",
      ],
      correctIndex: 1,
      explanation: "C’est une perte personnelle qui change la stabilité du quotidien.",
    },
    {
      id: "l27_boss_q1",
      question: "Quel est l’impact combiné des pertes d’Abū Ṭālib et de Khadījah (≈ 619) ?",
      options: [
        "Plus de richesse et de prestige",
        "Affaiblissement social ET blessure intime",
        "Fin immédiate de l’opposition",
        "Début des grandes batailles",
      ],
      correctIndex: 1,
      explanation: "La protection sociale diminue et le refuge personnel disparaît : double épreuve.",
      difficulty: "boss",
    },
  ],
},
l28: {
  title: "Ṭāʾif : la porte fermée… et le retour (≈ 620)",
  illustration: world7_l28,
  storyBlocks: [
    { type: "subtitle", text: "🚶‍♂️ Chercher une terre qui écoute" },
    { type: "p", text: "Après les pertes de ≈ 619, la réalité mecquoise devient plus dangereuse. L’idée d’une ouverture ailleurs prend une dimension urgente. Ṭāʾif apparaît comme une possibilité : une ville, une influence, des alliances potentielles." },
    { type: "p", text: "Le Prophète ﷺ ne cherche pas un confort. Il cherche un espace où le message peut être entendu et protégé." },

    { type: "subtitle", text: "🧊 Une réception dure, sans douceur" },
    { type: "p", text: "À Ṭāʾif, l’accueil ne ressemble pas à une discussion. Le refus devient humiliant, blessant. Et l’hostilité se transforme en violence : le Prophète ﷺ est repoussé brutalement." },
    { type: "p", text: "Ce moment est l’un des plus douloureux de la période mecquoise : la porte ne se ferme pas poliment. Elle claque." },

    { type: "subtitle", text: "💔 La douleur et la dignité" },
    { type: "p", text: "Il y a une douleur physique, une douleur morale, et une solitude immense. Après avoir perdu ses piliers, il cherche une ouverture… et se heurte à un rejet violent." },
    { type: "p", text: "Mais la mission ne se transforme pas en colère. Elle reste guidée." },

    { type: "subtitle", text: "🌙 Le retour : La Mecque n’est pas sûre" },
    { type: "p", text: "Revenir à La Mecque n’est pas simple. Sans protection forte, l’entrée elle-même est un risque. La situation exige prudence, stratégie, et protection de fait." },
    { type: "p", text: "Et c’est dans ce contexte, après l’une des nuits les plus lourdes… qu’une réponse du ciel se prépare." },
  ],
  cliffhanger:
    "Après Ṭāʾif, il semble n’y avoir aucune porte… mais c’est justement là que le ciel s’ouvre : Al-Isrāʾ wa-l-Miʿrāj arrive.",
  keyPoints: [
    "Ṭāʾif est recherché comme ouverture possible après ≈ 619.",
    "L’accueil y est hostile et violent : une épreuve majeure.",
    "Le retour vers La Mecque est dangereux sans protection forte.",
    "La suite mène directement vers Al-Isrāʾ wa-l-Miʿrāj (≈ 620).",
  ],
  reviewQuestions: [
    {
      id: "l28_q1",
      question: "Pourquoi le Prophète ﷺ se rend-il vers Ṭāʾif ?",
      options: [
        "Pour fuir définitivement la mission",
        "Pour chercher une ouverture et un soutien hors de La Mecque",
        "Pour commercer uniquement",
        "Pour déclencher une guerre",
      ],
      correctIndex: 1,
      explanation: "Il cherche un espace d’écoute et de protection pour la mission.",
    },
    {
      id: "l28_q2",
      question: "Quelle caractéristique décrit le mieux l’accueil à Ṭāʾif ?",
      options: [
        "Chaleureux et immédiat",
        "Neutre et silencieux",
        "Hostile, humiliant et violent",
        "Respectueux et politique",
      ],
      correctIndex: 2,
      explanation: "Les sources décrivent un rejet très dur.",
    },
    {
      id: "l28_boss_q1",
      question: "Pourquoi le retour à La Mecque après Ṭāʾif est-il particulièrement risqué ?",
      options: [
        "Parce que Médine attaque La Mecque",
        "Parce que la protection tribale est affaiblie après ≈ 619",
        "Parce que Quraysh s’est convertie",
        "Parce que le boycott reprend automatiquement",
      ],
      correctIndex: 1,
      explanation: "La protection clanique a été fragilisée, la violence devient plus probable.",
      difficulty: "boss",
    },
  ],
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

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
import world8_l29 from "../assets/illustrations/worlds/world8_l29.png";
import world8_l30 from "../assets/illustrations/worlds/world8_l30.png";
import world8_l31 from "../assets/illustrations/worlds/world8_l31.png";
import world8_l32 from "../assets/illustrations/worlds/world8_l32.png";
import world9_l33 from "../assets/illustrations/worlds/world9_l33.png";
import world9_l34 from "../assets/illustrations/worlds/world9_l34.png";
import world9_l35 from "../assets/illustrations/worlds/world9_l35.png";
import world9_l36 from "../assets/illustrations/worlds/world9_l36.png";
import world10_l37 from "../assets/illustrations/worlds/world10_l37.png";
import world10_l38 from "../assets/illustrations/worlds/world10_l38.png";
import world10_l39 from "../assets/illustrations/worlds/world10_l39.png";
import world10_l40 from "../assets/illustrations/worlds/world10_l40.png";
import world11_l41 from "../assets/illustrations/worlds/world11_l41.png";
import world11_l42 from "../assets/illustrations/worlds/world11_l42.png";
import world11_l43 from "../assets/illustrations/worlds/world11_l43.png";
import world11_l44 from "../assets/illustrations/worlds/world11_l44.png";
import world12_l45 from "../assets/illustrations/worlds/world12_l45.png";
import world12_l46 from "../assets/illustrations/worlds/world12_l46.png";
import world12_l47 from "../assets/illustrations/worlds/world12_l47.png";
import world12_l48 from "../assets/illustrations/worlds/world12_l48.png";


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
  audio: "/audio/lessons/l2.mp3",
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
  audio: "/audio/lessons/l3.mp3",
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
  audio: "/audio/lessons/l4.mp3",
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
  audio: "/audio/lessons/l5.mp3",
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
  audio: "/audio/lessons/l6.mp3",
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
  title: "La nuit d’Al-Isrāʾ : de La Mecque à Jérusalem (≈ 620)",
  illustration: world8_l29,
  storyBlocks: [
    { type: "subtitle", text: "🌙 Après Ṭāʾif : quand la terre se ferme" },
    {
      type: "p",
      text:
        "Le contexte est lourd. Nous sommes autour de l’an ≈ 620. Après l’Année de la Tristesse (≈ 619), après Ṭāʾif et son rejet violent, La Mecque n’offre plus de respiration. La mission continue, mais l’étau se resserre. C’est dans cette période, précisément quand les portes humaines semblent se refermer, qu’Allah ouvre une porte que personne ne peut verrouiller.",
    },
    {
      type: "p",
      text:
        "Al-Isrāʾ wa-l-Miʿrāj n’est pas présenté comme un “moment de confort”. C’est une réponse : une preuve, un renforcement, une consolation, et aussi une préparation pour ce qui vient.",
    },

    { type: "subtitle", text: "🕋 → 🕌 Al-Aqṣā : le Voyage Nocturne" },
    {
      type: "p",
      text:
        "Le récit du Voyage Nocturne (Al-Isrāʾ) évoque un déplacement de la Mosquée Sacrée à La Mecque vers Al-Masjid al-Aqṣā, à Jérusalem. La Sîra et les récits transmis décrivent un événement extraordinaire, survenu en une nuit : ce qui est humainement impossible devient possible par la permission d’Allah.",
    },
    {
      type: "p",
      text:
        "Le lien entre La Mecque et Jérusalem n’est pas anodin : Jérusalem représente une terre de prophéties, un héritage spirituel ancien. Al-Isrāʾ n’est pas seulement un déplacement : c’est un pont entre la mission finale et la chaîne prophétique.",
    },

    { type: "subtitle", text: "🧭 Une dimension de “signe”" },
    {
      type: "p",
      text:
        "Dans une période où Quraysh se moque, attaque et accuse, cet événement devient un signe. Mais il devient aussi un test : qui croit quand la vérité dépasse l’habitude ? Qui s’accroche quand l’explication rationnelle ne suffit plus ?",
    },
    {
      type: "p",
      text:
        "Ici, on n’est pas dans la “légende”. On est dans la logique de la Révélation : Allah élève, éprouve, puis guide. Al-Isrāʾ introduit l’étape suivante : Al-Miʿrāj.",
    },
  ],
  cliffhanger:
    "Le voyage ne s’arrête pas à Jérusalem… la nuit continue, et l’élévation commence : une rencontre au-dessus du monde.",
  keyPoints: [
    "Al-Isrāʾ survient autour de ≈ 620, après une période d’épreuves lourdes.",
    "Le Voyage Nocturne relie La Mecque à Al-Masjid al-Aqṣā (Jérusalem).",
    "L’événement sert de consolation, de signe et aussi de test de foi.",
    "La suite immédiate est Al-Miʿrāj (l’ascension).",
  ],
  reviewQuestions: [
    {
      id: "l29_q1",
      question: "Dans quel contexte survient Al-Isrāʾ wa-l-Miʿrāj (≈ 620) ?",
      options: [
        "Pendant une période de conquêtes militaires",
        "Après une période d’épreuves, de pertes et de rejet",
        "Après l’Hégire à Médine",
        "Après la bataille de Badr",
      ],
      correctIndex: 1,
      explanation:
        "Le récit se situe après l’Année de la Tristesse (≈ 619) et les difficultés, dans une phase mecquoise très dure.",
    },
    {
      id: "l29_q2",
      question: "Quel lien symbolique majeur représente Jérusalem dans ce récit ?",
      options: [
        "Une simple ville commerciale",
        "Un héritage prophétique et spirituel ancien",
        "Un lieu sans signification religieuse",
        "Un lieu de bataille à cette époque",
      ],
      correctIndex: 1,
      explanation:
        "Jérusalem est associée à l’histoire des prophètes et à un héritage spirituel.",
    },
    {
      id: "l29_boss_q1",
      question: "Pourquoi Al-Isrāʾ est-il aussi un “test” pour la communauté ?",
      options: [
        "Parce qu’il impose une taxe",
        "Parce qu’il confronte à l’acceptation d’un événement extraordinaire",
        "Parce qu’il annonce une bataille",
        "Parce qu’il supprime la prière",
      ],
      correctIndex: 1,
      explanation:
        "Il teste la sincérité de la foi lorsque l’événement dépasse les habitudes.",
      difficulty: "boss",
    },
  ],
},
l30: {
  title: "Al-Miʿrāj : l’élévation et la rencontre des Prophètes",
  illustration: world8_l30,
  storyBlocks: [
    { type: "subtitle", text: "⬆️ L’Ascension : au-delà des repères" },
    {
      type: "p",
      text:
        "Après Al-Isrāʾ, le récit évoque Al-Miʿrāj : l’ascension. Ce passage est décrit comme une élévation exceptionnelle, qui place le Prophète ﷺ face à une réalité que personne ne peut “fabriquer” par effort humain. Ici, ce n’est pas une performance : c’est un honneur accordé.",
    },
    {
      type: "p",
      text:
        "La Sîra rapporte une dimension centrale : la rencontre avec des prophètes. Ce point est essentiel, car il montre que la mission de Muhammad ﷺ n’est pas une rupture isolée, mais l’aboutissement d’une continuité.",
    },

    { type: "subtitle", text: "🤝 Continuité prophétique" },
    {
      type: "p",
      text:
        "La rencontre des prophètes, telle qu’elle est transmise dans les récits, souligne un message : la foi n’est pas un phénomène local, ni un projet tribal. C’est une voie portée de génération en génération. Et ce soir-là, cette chaîne est rappelée avec force.",
    },
    {
      type: "p",
      text:
        "Pour une communauté humiliée et pressée à La Mecque, cette nuit n’est pas une “échappée”. C’est une réorientation : ce qui se passe sur terre ne résume pas la vérité.",
    },

    { type: "subtitle", text: "🧠 Consolation et préparation" },
    {
      type: "p",
      text:
        "Al-Miʿrāj est une consolation après Ṭāʾif, mais aussi une préparation : il va en sortir une obligation majeure. Une pratique quotidienne qui deviendra le centre de la vie musulmane : la Ṣalāh.",
    },
  ],
  cliffhanger:
    "Dans cette élévation, un ordre va être donné : d’abord lourd… puis transformé en miséricorde. Et c’est là que l’Histoire bascule encore.",
  keyPoints: [
    "Al-Miʿrāj est l’ascension décrite après Al-Isrāʾ (≈ 620).",
    "Le récit souligne la continuité prophétique : la mission s’inscrit dans une chaîne.",
    "L’événement est consolation et préparation, pas simple “échappée”.",
    "Il mène directement à l’obligation de la Ṣalāh.",
  ],
  reviewQuestions: [
    {
      id: "l30_q1",
      question: "Quel message central renforce la rencontre des prophètes lors d’Al-Miʿrāj ?",
      options: [
        "Que la mission est isolée et locale",
        "Que la mission s’inscrit dans une continuité prophétique",
        "Que la foi dépend des tribus",
        "Que la prière disparaît",
      ],
      correctIndex: 1,
      explanation:
        "Les récits mettent en avant la continuité : même voie, même origine, même appel à Dieu.",
    },
    {
      id: "l30_q2",
      question: "Al-Miʿrāj est décrit comme…",
      options: [
        "Une performance sportive",
        "Un honneur accordé et un signe",
        "Une simple rumeur politique",
        "Un événement après Badr",
      ],
      correctIndex: 1,
      explanation:
        "Le récit souligne un honneur divin et un signe, pas un exploit humain.",
    },
    {
      id: "l30_boss_q1",
      question: "Pourquoi Al-Miʿrāj prépare-t-il la communauté pour l’avenir ?",
      options: [
        "Parce qu’il annonce une richesse immédiate",
        "Parce qu’il ancre une obligation centrale : la Ṣalāh",
        "Parce qu’il supprime l’opposition de Quraysh",
        "Parce qu’il impose une migration immédiate",
      ],
      correctIndex: 1,
      explanation:
        "La Ṣalāh deviendra l’axe quotidien : un socle de stabilité et de lien avec Allah.",
      difficulty: "boss",
    },
  ],
},
l31: {
  title: "Les 50 prières réduites à 5 : le cadeau et la miséricorde",
  illustration: world8_l31,
  storyBlocks: [
    { type: "subtitle", text: "🕊️ Une obligation révélée… puis allégée" },
    {
      type: "p",
      text:
        "Parmi les éléments les plus marquants rapportés dans les récits d’Al-Miʿrāj : l’obligation de la prière. Le récit évoque un nombre initial très élevé (50), puis une réduction progressive jusqu’à 5, tout en gardant la récompense comme si elles étaient 50.",
    },
    {
      type: "p",
      text:
        "Ce passage est central parce qu’il montre deux choses à la fois : la grandeur de la Ṣalāh (elle est donnée dans un contexte unique) et la miséricorde (Allah n’écrase pas la communauté).",
    },

    { type: "subtitle", text: "🤝 Dialogue, retour, réduction" },
    {
      type: "p",
      text:
        "Le récit transmis mentionne un échange et des retours successifs, jusqu’à ce que le nombre soit réduit. Ici, le cœur du message n’est pas “la quantité” : c’est l’idée que la Ṣalāh est un lien vital, quotidien, et que la miséricorde d’Allah accompagne l’obligation.",
    },

    { type: "subtitle", text: "🧭 La Ṣalāh : un pilier pour survivre aux tempêtes" },
    {
      type: "p",
      text:
        "Si tu replaces cela dans le contexte (≈ 620), c’est puissant : la communauté subit pressions et humiliations. Et Allah offre un acte répété chaque jour, qui recentre, purifie, stabilise. Comme si la réponse au chaos n’était pas seulement une stratégie sociale… mais un rendez-vous avec le ciel.",
    },
  ],
  cliffhanger:
    "Mais quand le Prophète ﷺ revient parler de cette nuit… La Mecque ne répond pas par l’écoute. Elle répond par la moquerie. Et là, un homme va devenir un symbole : As-Siddīq.",
  keyPoints: [
    "Les récits d’Al-Miʿrāj mentionnent l’obligation initiale de 50 prières puis réduction à 5.",
    "La Ṣalāh est présentée comme un lien central, donné dans un contexte unique.",
    "Le passage souligne la miséricorde d’Allah et l’allègement pour la communauté.",
    "Dans le contexte mecquois, la Ṣalāh devient un socle de stabilité.",
  ],
  reviewQuestions: [
    {
      id: "l31_q1",
      question: "Quel est le message majeur derrière la réduction de 50 à 5 prières ?",
      options: [
        "La prière est secondaire",
        "La miséricorde accompagne l’obligation",
        "La prière doit être abandonnée",
        "La prière dépend de Quraysh",
      ],
      correctIndex: 1,
      explanation:
        "Le récit souligne à la fois l’importance de la Ṣalāh et la miséricorde pour la communauté.",
    },
    {
      id: "l31_q2",
      question: "Dans le contexte mecquois (≈ 620), la Ṣalāh sert aussi à…",
      options: [
        "Remplacer la foi",
        "Stabiliser et recentrer la communauté au quotidien",
        "Gagner de l’argent",
        "Annuler l’opposition",
      ],
      correctIndex: 1,
      explanation:
        "La Ṣalāh est un rendez-vous régulier qui renforce le lien avec Allah.",
    },
    {
      id: "l31_boss_q1",
      question: "Pourquoi l’obligation de la Ṣalāh est-elle considérée comme un “cadeau” dans ce contexte ?",
      options: [
        "Parce qu’elle supprime les difficultés",
        "Parce qu’elle crée un lien quotidien avec Allah au cœur de l’épreuve",
        "Parce qu’elle rend la Mecque musulmane",
        "Parce qu’elle évite toute critique",
      ],
      correctIndex: 1,
      explanation:
        "Elle apporte un ancrage quotidien et un lien vivant avec Allah dans une période de pression.",
      difficulty: "boss",
    },
  ],
},
l32: {
  title: "Retour à La Mecque : choc, accusations… et certitude",
  illustration: world8_l32,
  storyBlocks: [
    { type: "subtitle", text: "🗣️ Le récit devient une épreuve publique" },
    {
      type: "p",
      text:
        "Le retour à La Mecque ne se transforme pas en triomphe. Il se transforme en débat, en moquerie, en accusation. Quraysh cherche à utiliser l’événement contre lui : “Comment croire une chose pareille ?”",
    },
    {
      type: "p",
      text:
        "Et c’est là que la Sîra montre une réalité : certaines vérités ne seront jamais “acceptées” par ceux qui ont décidé de refuser. L’enjeu devient donc : la foi est-elle conditionnée par l’approbation des gens ?",
    },

    { type: "subtitle", text: "⭐ As-Siddīq : la loyauté dans l’impossible" },
    {
      type: "p",
      text:
        "Dans les récits, Abū Bakr (رضي الله عنه) devient une figure majeure : sa réaction face à l’annonce incarne la certitude et la confiance. Ce moment marque un repère : la foi ne dépend pas du ridicule des autres, mais de la vérité et de la confiance en Allah et en Son Messager ﷺ.",
    },

    { type: "subtitle", text: "🧭 Préparer la sortie : chercher un autre horizon" },
    {
      type: "p",
      text:
        "Cette nuit n’efface pas l’opposition de Quraysh. Mais elle prépare quelque chose : la mission ne restera pas enfermée à La Mecque. Les saisons du pèlerinage approchent, les tribus viennent, et la recherche d’un appui ailleurs va prendre une tournure décisive.",
    },
  ],
  cliffhanger:
    "Bientôt, au milieu des tribus venues au pèlerinage, des cœurs vont écouter autrement… et une ville va changer le destin : Yathrib se profile.",
  keyPoints: [
    "Le retour à La Mecque entraîne moquerie et accusations de Quraysh.",
    "La foi devient un test public : croire même face au ridicule.",
    "Abū Bakr (ra) incarne la certitude (As-Siddīq dans les récits).",
    "La suite prépare la recherche d’un appui ailleurs : Yathrib (Médine) arrive.",
  ],
  reviewQuestions: [
    {
      id: "l32_q1",
      question: "Quelle est la réaction de Quraysh face au récit d’Al-Isrāʾ wa-l-Miʿrāj ?",
      options: [
        "Acceptation immédiate",
        "Moquerie et accusation",
        "Alliance politique",
        "Migration vers Médine",
      ],
      correctIndex: 1,
      explanation:
        "Quraysh utilise l’événement pour ridiculiser et attaquer le Prophète ﷺ.",
    },
    {
      id: "l32_q2",
      question: "Que symbolise la certitude d’Abū Bakr (ra) dans ce moment ?",
      options: [
        "Une foi conditionnée par l’opinion publique",
        "Une confiance et une loyauté face à l’impossible",
        "Un rejet total",
        "Une neutralité politique",
      ],
      correctIndex: 1,
      explanation:
        "La Sîra met en avant la certitude et la loyauté, même quand les gens se moquent.",
    },
    {
      id: "l32_boss_q1",
      question: "Quel est l’enjeu spirituel principal lorsque Quraysh ridiculise cet événement ?",
      options: [
        "Gagner un débat",
        "Conditionner la foi à l’approbation sociale",
        "Abolir la prière",
        "Préparer Badr",
      ],
      correctIndex: 1,
      explanation:
        "Le test est : la foi dépend-elle de l’opinion des gens ou de la vérité ?",
      difficulty: "boss",
    },
  ],
},
l33: {
  title: "Les saisons du pèlerinage : chercher des cœurs (≈ 620–621)",
  illustration: world9_l33,
  storyBlocks: [
    { type: "subtitle", text: "🕋 Un rendez-vous annuel… et une stratégie de survie" },
    {
      type: "p",
      text:
        "À La Mecque, l’opposition ne faiblit pas. Les années passent, et Quraysh maintient la pression. Dans ce contexte, les saisons du pèlerinage deviennent plus qu’un événement religieux et commercial : elles deviennent une opportunité. Les tribus arabes arrivent, écoutent, discutent, évaluent. Et le Prophète ﷺ se présente à elles — non pas comme un chef cherchant un trône, mais comme un Messager porteur d’un appel.",
    },
    {
      type: "p",
      text:
        "Les sources de Sîra rapportent que ces démarches existent : rencontrer les tribus, exposer le message, demander protection (nusrah) afin que l’appel puisse être transmis librement. C’est une période où l’effort est constant : convaincre sans flatter, appeler sans céder, rester digne face aux refus.",
    },

    { type: "subtitle", text: "🗣️ La parole face au rejet" },
    {
      type: "p",
      text:
        "Il ne s’agit pas de quelques tentatives isolées. L’idée est claire : La Mecque est devenue un espace étroit, et le message ne peut pas rester enfermé. Mais la plupart des tribus hésitent : peur de Quraysh, peur de l’isolement, peur de l’engagement. L’Arabie tribale calcule. Et c’est précisément là que le contraste apparaît : la foi demande parfois un saut que la prudence refuse.",
    },
    {
      type: "p",
      text:
        "Dans cette foule, certains viennent écouter par curiosité… et repartent. D’autres écoutent et se taisent… comme s’ils étaient en train de mesurer les conséquences. Mais un petit groupe, venu d’une ville au nord, va entendre autrement. Cette ville, c’est Yathrib.",
    },

    { type: "subtitle", text: "🌱 Un détail qui annonce une bascule" },
    {
      type: "p",
      text:
        "Les récits montrent un motif récurrent dans la Sîra : Allah prépare les tournants avant qu’ils ne deviennent visibles. Sur le moment, personne ne voit “la carte du futur”. Mais les rencontres du pèlerinage vont devenir la porte d’entrée d’un nouveau chapitre : la sortie de La Mecque.",
    },
  ],
  cliffhanger:
    "Mais pourquoi Yathrib serait-elle différente ? Qu’est-ce qu’une ville divisée peut chercher… au point d’écouter un homme que Quraysh veut faire taire ?",
  keyPoints: [
    "Les saisons du pèlerinage deviennent un moment clé pour rencontrer des tribus.",
    "Le Prophète ﷺ cherche un appui (nusrah) pour protéger la transmission du message.",
    "Beaucoup refusent par peur des conséquences tribales et politiques.",
    "Un groupe venu de Yathrib va écouter différemment : début d’un tournant.",
  ],
  reviewQuestions: [
    {
      id: "l33_q1",
      question: "Pourquoi les saisons du pèlerinage deviennent-elles cruciales dans cette période ?",
      options: [
        "Pour organiser une armée",
        "Pour rencontrer des tribus et présenter le message",
        "Pour quitter immédiatement La Mecque",
        "Pour éviter toute discussion",
      ],
      correctIndex: 1,
      explanation:
        "Les tribus viennent au pèlerinage : c’est une occasion d’exposer le message et de chercher protection.",
    },
    {
      id: "l33_q2",
      question: "Pourquoi de nombreuses tribus hésitent-elles à s’engager ?",
      options: [
        "Parce qu’elles ignorent Quraysh",
        "Par peur des conséquences et des représailles",
        "Parce qu’elles veulent la guerre",
        "Parce que la Mecque est déjà paisible",
      ],
      correctIndex: 1,
      explanation:
        "Dans un monde tribal, soutenir le message implique des risques politiques et sociaux.",
    },
    {
      id: "l33_boss_q1",
      question: "Quel est l’objectif de la demande de “nusrah” (protection) dans ce contexte ?",
      options: [
        "Imposer une religion par la force",
        "Permettre au message d’être transmis sans étouffement",
        "Supprimer le pèlerinage",
        "Créer une alliance commerciale uniquement",
      ],
      correctIndex: 1,
      explanation:
        "La protection vise à permettre la transmission du message face à l’étouffement de Quraysh.",
      difficulty: "boss",
    },
  ],
},
l34: {
  title: "Yathrib : une ville divisée, un besoin de paix (≈ 620–621)",
  illustration: world9_l34,
  storyBlocks: [
    { type: "subtitle", text: "🏘️ Yathrib : pas un paradis… une ville qui saigne" },
    {
      type: "p",
      text:
        "Yathrib (future Médine) n’est pas décrite comme une ville “parfaite”. Au contraire : les sources de Sîra évoquent une société fracturée. Deux grandes tribus arabes y dominent : Aws et Khazraj. Et leur rivalité a produit des cycles de tensions, jusqu’à des affrontements majeurs — dont la bataille de Buʿāth, survenue peu avant l’Hégire (souvent située vers ≈ 617).",
    },
    {
      type: "p",
      text:
        "Cette réalité change tout : une ville fatiguée par la division cherche une issue. Les élites n’ont pas réussi à stabiliser durablement. Les rancunes existent, les alliances sont fragiles. Yathrib a besoin d’une figure qui peut rassembler — ou d’un projet plus grand que les querelles.",
    },

    { type: "subtitle", text: "📜 Un terrain préparé… même sans le savoir" },
    {
      type: "p",
      text:
        "Les récits rapportent aussi la présence de communautés juives à Yathrib. Cela compte dans l’atmosphère : on y entend parler de prophétie, d’Écriture, d’attente. Sans entrer dans des détails non sûrs, l’idée générale est claire : le vocabulaire religieux et la notion d’un messager attendu ne sont pas inconnus.",
    },
    {
      type: "p",
      text:
        "Et c’est là que le contraste apparaît : à La Mecque, Quraysh se moque et étouffe. À Yathrib, certains cœurs sont prêts à écouter, parce qu’ils sont blessés par la division et ouverts à une solution qui dépasse la tribu.",
    },

    { type: "subtitle", text: "👂 Écouter autrement" },
    {
      type: "p",
      text:
        "Quand un petit groupe de Yathrib rencontre le Prophète ﷺ, ce n’est pas seulement de la curiosité. C’est une recherche. Une ville divisée entend l’appel à l’unicité et à la justice… et y perçoit peut-être la seule chose qui peut dépasser Aws et Khazraj : un lien plus haut que le sang.",
    },
  ],
  cliffhanger:
    "Et si cet accord naissait dans l’ombre, loin des regards de Quraysh ? Dans un lieu précis… une colline… un rendez-vous secret : ʿAqabah.",
  keyPoints: [
    "Yathrib est marquée par la rivalité Aws/Khazraj et des conflits anciens.",
    "La bataille de Buʿāth (≈ 617) fait partie des événements marquants avant l’Hégire.",
    "La ville est fatiguée des divisions et cherche une solution unificatrice.",
    "Le climat religieux (présence de communautés juives) rend l’idée prophétique moins étrangère.",
  ],
  reviewQuestions: [
    {
      id: "l34_q1",
      question: "Pourquoi Yathrib est-elle décrite comme “fatiguée” avant l’Hégire ?",
      options: [
        "Parce qu’elle est trop riche",
        "À cause des divisions et conflits internes",
        "Parce qu’elle refuse toute spiritualité",
        "Parce qu’elle est contrôlée par Quraysh",
      ],
      correctIndex: 1,
      explanation:
        "Les tensions entre Aws et Khazraj et les conflits ont fragilisé la ville.",
    },
    {
      id: "l34_q2",
      question: "Quel événement est souvent mentionné comme conflit majeur avant l’Hégire ?",
      options: ["Badr", "Buʿāth", "Khandaq", "Hunayn"],
      correctIndex: 1,
      explanation:
        "La bataille de Buʿāth est souvent située avant l’Hégire et liée au contexte de division.",
    },
    {
      id: "l34_boss_q1",
      question: "Pourquoi ce contexte rend-il certains habitants plus réceptifs au message ?",
      options: [
        "Parce qu’ils veulent une guerre immédiate",
        "Parce qu’ils cherchent un projet unificateur au-delà des tribus",
        "Parce qu’ils veulent renverser Quraysh",
        "Parce qu’ils refusent toute morale",
      ],
      correctIndex: 1,
      explanation:
        "Une ville divisée peut être prête à entendre un appel qui dépasse les rivalités tribales.",
      difficulty: "boss",
    },
  ],
},
l35: {
  title: "La 1ʳᵉ ʿAqabah : l’engagement qui change tout (≈ 621)",
  illustration: world9_l35,
  storyBlocks: [
    { type: "subtitle", text: "🌌 Une rencontre discrète… un engagement immense" },
    {
      type: "p",
      text:
        "Autour de ≈ 621, les récits évoquent un moment décisif : un engagement pris à ʿAqabah, près de Minā, pendant la saison du pèlerinage. Ce n’est pas une scène publique. C’est presque l’inverse : un rendez-vous discret, loin des regards, parce que Quraysh surveille et cherche à étouffer toute ouverture.",
    },
    {
      type: "p",
      text:
        "Ce qui se joue ici n’est pas “un accord politique classique”. C’est un engagement religieux et moral. La Sîra rapporte que ce pacte (la 1ʳᵉ ʿAqabah) marque un tournant : des hommes de Yathrib se lient à l’islam et s’engagent sur des principes.",
    },

    { type: "subtitle", text: "📌 Un pacte de foi et de conduite" },
    {
      type: "p",
      text:
        "Les récits rapportent que l’engagement inclut des principes : ne pas associer, ne pas voler, ne pas commettre l’adultère, ne pas tuer leurs enfants, ne pas mentir, et obéir dans le bien. Ce n’est pas un détail : c’est la preuve que la première base est morale et spirituelle, avant d’être “institutionnelle”.",
    },
    {
      type: "p",
      text:
        "La mission trouve enfin un espace où le message peut respirer. Une ville commence à se dessiner comme refuge — non pas parce que ses habitants sont parfaits, mais parce qu’ils sont prêts à se lier à un principe plus grand.",
    },

    { type: "subtitle", text: "🌱 Le début d’un déplacement du centre" },
    {
      type: "p",
      text:
        "À La Mecque, le message est bloqué. À Yathrib, il peut s’enraciner. Et quand la foi s’enracine, elle crée une communauté. C’est à partir de là que tout s’accélère : enseignement, transmission, consolidation.",
    },
  ],
  cliffhanger:
    "Mais un engagement moral ne suffit pas face à Quraysh… bientôt, une demande plus lourde apparaîtra : protéger le Prophète ﷺ comme on protège sa propre famille.",
  keyPoints: [
    "La 1ʳᵉ ʿAqabah a lieu autour de ≈ 621 pendant la saison du pèlerinage.",
    "Rendez-vous discret, car Quraysh surveille et combat toute ouverture.",
    "Le pacte met l’accent sur foi + conduite morale (principes concrets).",
    "Il marque le début d’un basculement : Yathrib devient un refuge possible.",
  ],
  reviewQuestions: [
    {
      id: "l35_q1",
      question: "Pourquoi la rencontre de ʿAqabah est-elle discrète ?",
      options: [
        "Pour éviter les tribus de Yathrib",
        "Parce que Quraysh surveille et cherche à étouffer l’appel",
        "Parce que La Mecque est déjà musulmane",
        "Parce que ce n’est pas important",
      ],
      correctIndex: 1,
      explanation:
        "Quraysh surveille et combat toute ouverture : la discrétion protège la démarche.",
    },
    {
      id: "l35_q2",
      question: "Quel est le cœur de la 1ʳᵉ ʿAqabah ?",
      options: [
        "Un pacte commercial",
        "Un engagement religieux et moral",
        "Un pacte militaire complet",
        "Une déclaration de conquête",
      ],
      correctIndex: 1,
      explanation:
        "Les récits mettent en avant un engagement de foi et de conduite morale.",
    },
    {
      id: "l35_boss_q1",
      question: "Pourquoi ce pacte est-il un tournant stratégique pour la mission ?",
      options: [
        "Parce qu’il garantit une armée immédiate",
        "Parce qu’il ouvre une ville prête à accueillir et transmettre le message",
        "Parce qu’il supprime Quraysh",
        "Parce qu’il annule la prière",
      ],
      correctIndex: 1,
      explanation:
        "Yathrib devient un espace où le message peut respirer et s’enraciner.",
      difficulty: "boss",
    },
  ],
},
l36: {
  title: "La 2ᵉ ʿAqabah : une protection au prix fort (≈ 622)",
  illustration: world9_l36,
  storyBlocks: [
    { type: "subtitle", text: "🛡️ Un pacte plus lourd : protéger comme sa propre famille" },
    {
      type: "p",
      text:
        "Autour de ≈ 622, les récits mentionnent une 2ᵉ rencontre à ʿAqabah. L’enjeu est plus lourd : ce n’est plus seulement s’engager moralement. C’est offrir protection (nusrah) — une protection réelle, concrète, risquée. Dans un monde tribal, protéger quelqu’un, c’est accepter les conséquences : conflits, représailles, rupture d’alliances.",
    },
    {
      type: "p",
      text:
        "C’est là qu’on mesure la gravité de l’instant. Ceux qui s’engagent savent que Quraysh ne laissera pas faire. Et pourtant, ils choisissent de porter ce risque. Pas pour une richesse, pas pour un pouvoir, mais pour une foi et une mission.",
    },

    { type: "subtitle", text: "🌃 Une nuit, un pacte… et un futur qui s’ouvre" },
    {
      type: "p",
      text:
        "La Sîra rapporte que ce pacte implique de défendre le Prophète ﷺ comme on défend ses proches. Cette formulation est puissante, parce qu’elle transforme la mission : ce n’est plus une voix isolée à La Mecque. C’est une communauté prête à porter un coût.",
    },
    {
      type: "p",
      text:
        "À partir d’ici, l’horizon change. Les musulmans auront bientôt une direction, une ville, un refuge. Et Quraysh, en comprenant que le message peut s’échapper de La Mecque, va durcir encore son plan.",
    },

    { type: "subtitle", text: "⚡ Le danger se précise" },
    {
      type: "p",
      text:
        "C’est souvent ici que la tension monte : si la protection est acceptée, alors la sortie de La Mecque devient plausible. Mais ce pas est aussi une alarme pour Quraysh. Et quand Quraysh se sent menacée, elle ne discute plus : elle complote.",
    },
  ],
  cliffhanger:
    "Le piège se referme : Quraysh prépare un plan… et la route vers Yathrib va devenir une course contre la mort. Le Monde 10 commence.",
  keyPoints: [
    "La 2ᵉ ʿAqabah (≈ 622) porte sur une protection réelle (nusrah), à haut risque.",
    "Dans le monde tribal, protéger = accepter représailles et conflits possibles.",
    "Ce pacte transforme la mission : une communauté se prépare à accueillir et défendre.",
    "Quraysh comprend le danger et durcit sa stratégie : le complot approche.",
  ],
  reviewQuestions: [
    {
      id: "l36_q1",
      question: "Quel est l’enjeu principal de la 2ᵉ ʿAqabah (≈ 622) ?",
      options: [
        "Un pacte de commerce",
        "Une protection réelle et risquée (nusrah)",
        "Une conquête militaire immédiate",
        "La suppression de la prière",
      ],
      correctIndex: 1,
      explanation:
        "Le cœur de la 2ᵉ ʿAqabah est l’offre de protection concrète, au prix fort.",
    },
    {
      id: "l36_q2",
      question: "Pourquoi cet engagement est-il risqué dans la logique tribale ?",
      options: [
        "Parce qu’il annule les alliances automatiquement",
        "Parce qu’il implique des représailles et conflits possibles",
        "Parce que Quraysh ne s’en soucie pas",
        "Parce que Yathrib est une île",
      ],
      correctIndex: 1,
      explanation:
        "Protéger quelqu’un signifie accepter la réaction de ses ennemis et l’impact social.",
    },
    {
      id: "l36_boss_q1",
      question: "Quel est l’effet stratégique immédiat de ce pacte sur Quraysh ?",
      options: [
        "Quraysh se convertit",
        "Quraysh comprend que le message peut sortir et durcit son plan",
        "Quraysh ignore totalement",
        "Quraysh annule le pèlerinage",
      ],
      correctIndex: 1,
      explanation:
        "Le pacte ouvre une sortie réelle : Quraysh durcit sa stratégie et le complot approche.",
      difficulty: "boss",
    },
  ],
},
l37: {
  title: "Le complot : une nuit décisive à La Mecque (≈ 622)",
  illustration: world10_l37,
  storyBlocks: [
    { type: "subtitle", text: "🕯️ Quand Quraysh comprend que l’étau se desserre" },
    {
      type: "p",
      text:
        "Autour de ≈ 622, après les engagements de ʿAqabah, Quraysh réalise un danger : le message ne restera plus enfermé à La Mecque. Yathrib (Médine) peut devenir un refuge. Et si cela arrive, la mission gagne un espace où elle peut respirer, s’organiser, s’étendre.",
    },
    {
      type: "p",
      text:
        "Les récits de Sîra rapportent alors une escalade : Quraysh passe du harcèlement à un plan radical. L’idée : frapper au cœur, avant que la sortie ne devienne irréversible.",
    },

    { type: "subtitle", text: "⚔️ Le plan : neutraliser d’un seul coup" },
    {
      type: "p",
      text:
        "Le complot rapporté vise à tuer le Prophète ﷺ de manière à répartir la responsabilité entre plusieurs clans, pour que Banū Hāshim ne puisse pas se venger d’un seul groupe. C’est la logique tribale utilisée comme arme : diluer le sang pour éviter la guerre totale.",
    },
    {
      type: "p",
      text:
        "À ce stade, le danger n’est plus “moral” ou “social”. Il devient physique. Et c’est là que l’Hégire prend une autre couleur : ce n’est pas un voyage. C’est une sortie sous menace.",
    },

    { type: "subtitle", text: "🌙 La nuit de la sortie" },
    {
      type: "p",
      text:
        "La Sîra évoque que le Prophète ﷺ quitte La Mecque alors que des hommes sont postés. Et dans ce moment, un rôle crucial apparaît : ʿAlī ibn Abī Ṭālib (رضي الله عنه), qui reste derrière pour des raisons mentionnées par les récits (notamment liées aux dépôts/biens confiés), assumant un risque réel.",
    },
    {
      type: "p",
      text:
        "Ce moment est une leçon : la foi n’est pas seulement un discours. Elle devient courage, planification, confiance en Allah… et sacrifice humain.",
    },
  ],
  cliffhanger:
    "Mais sortir de La Mecque n’est que la première étape. Quraysh lance la chasse… et la route commence par un endroit inattendu : une grotte.",
  keyPoints: [
    "Vers ≈ 622, Quraysh comprend le danger d’un refuge à Yathrib.",
    "Les récits rapportent un complot visant à tuer le Prophète ﷺ en diluant la responsabilité tribale.",
    "La sortie de La Mecque se fait sous menace réelle : ce n’est pas un simple voyage.",
    "ʿAlī (ra) joue un rôle important dans la nuit de la sortie (selon les récits de Sîra).",
  ],
  reviewQuestions: [
    {
      id: "l37_q1",
      question: "Pourquoi Quraysh durcit-elle sa stratégie vers ≈ 622 ?",
      options: [
        "Parce que La Mecque devient musulmane",
        "Parce qu’un refuge à Yathrib rend la mission difficile à étouffer",
        "Parce qu’il n’y a plus de pèlerinage",
        "Parce que Quraysh veut déménager",
      ],
      correctIndex: 1,
      explanation:
        "Le refuge à Yathrib ouvre un espace de protection et d’organisation : Quraysh veut empêcher cette bascule.",
    },
    {
      id: "l37_q2",
      question: "Quel est le principe du complot rapporté (logique tribale) ?",
      options: [
        "Confier le meurtre à un seul clan",
        "Répartir la responsabilité entre plusieurs clans",
        "Demander la paix officiellement",
        "Quitter la ville",
      ],
      correctIndex: 1,
      explanation:
        "L’idée est de diluer la responsabilité pour éviter une vengeance tribale ciblée.",
    },
    {
      id: "l37_boss_q1",
      question: "Pourquoi l’Hégire n’est-elle pas un simple déplacement géographique dans ce contexte ?",
      options: [
        "Parce qu’elle n’a pas de destination",
        "Parce qu’elle est une sortie sous menace et une bascule historique",
        "Parce qu’elle supprime la prière",
        "Parce qu’elle interdit le commerce",
      ],
      correctIndex: 1,
      explanation:
        "C’est une sortie sous menace, qui transforme l’histoire de la communauté.",
      difficulty: "boss",
    },
  ],
},
l38: {
  title: "Thawr : la grotte et la poursuite (≈ 622)",
  illustration: world10_l38,
  storyBlocks: [
    { type: "subtitle", text: "🏔️ Une direction surprenante" },
    {
      type: "p",
      text:
        "Quand la poursuite commence, l’itinéraire ne suit pas forcément l’attente immédiate d’une route “directe”. Les récits mentionnent la grotte de Thawr (Jabal Thawr) comme étape : un refuge temporaire alors que la pression monte.",
    },
    {
      type: "p",
      text:
        "Dans cette période, Quraysh ne cherche pas seulement à retrouver une personne. Elle cherche à stopper une bascule. Et quand une bascule menace un ordre social, la traque devient féroce.",
    },

    { type: "subtitle", text: "👣 Les poursuivants au plus près" },
    {
      type: "p",
      text:
        "Le récit évoque que les poursuivants s’approchent de la grotte. C’est l’un de ces moments où l’histoire devient presque silencieuse : pas de bataille, pas de discours… juste l’instant où une vie tient à un souffle.",
    },
    {
      type: "p",
      text:
        "Là, la leçon est double : (1) les moyens sont utilisés (planification, refuge), (2) la confiance en Allah demeure. Cette combinaison revient souvent dans la Sîra : effort réel + reliance réelle.",
    },

    { type: "subtitle", text: "🧠 Une fuite… mais pas une panique" },
    {
      type: "p",
      text:
        "L’Hégire n’est pas un abandon. C’est une stratégie sous contrainte. Elle montre que parfois, préserver la mission passe par quitter un endroit, pour sauver l’avenir.",
    },
  ],
  cliffhanger:
    "La grotte n’est qu’un répit. La route vers Yathrib est encore longue… et Quraysh met un prix sur la tête du Prophète ﷺ. Un nom va surgir : Suraqah.",
  keyPoints: [
    "Les récits mentionnent un passage par la grotte de Thawr pendant la poursuite.",
    "Les poursuivants s’en approchent : moment de tension extrême rapporté par la Sîra.",
    "La leçon récurrente : efforts concrets + confiance en Allah.",
    "L’Hégire est une stratégie sous contrainte, pas une fuite panique.",
  ],
  reviewQuestions: [
    {
      id: "l38_q1",
      question: "Pourquoi la grotte (Thawr) est-elle importante dans le récit ?",
      options: [
        "Parce que c’est la destination finale",
        "Parce qu’elle sert de refuge temporaire pendant la traque",
        "Parce qu’elle est à Jérusalem",
        "Parce que Quraysh y vit",
      ],
      correctIndex: 1,
      explanation:
        "Les récits la décrivent comme un refuge temporaire alors que la traque se resserre.",
    },
    {
      id: "l38_q2",
      question: "Quelle leçon ressort du passage par Thawr ?",
      options: [
        "Aucun effort n’est nécessaire",
        "Efforts concrets + confiance en Allah",
        "Se battre immédiatement",
        "Ne jamais planifier",
      ],
      correctIndex: 1,
      explanation:
        "La Sîra montre souvent la combinaison : moyens + tawakkul.",
    },
    {
      id: "l38_boss_q1",
      question: "Pourquoi la traque de Quraysh est-elle si intense à ce moment ?",
      options: [
        "Parce qu’elle veut un débat public",
        "Parce qu’elle veut empêcher la bascule vers un refuge à Yathrib",
        "Parce que Médine est déjà conquise",
        "Parce que le pèlerinage est annulé",
      ],
      correctIndex: 1,
      explanation:
        "Quraysh comprend qu’un refuge rend la mission impossible à étouffer : elle veut stopper la bascule.",
      difficulty: "boss",
    },
  ],
},
l39: {
  title: "Sur la route : Suraqah, promesse et protection (≈ 622)",
  illustration: world10_l39,
  storyBlocks: [
    { type: "subtitle", text: "💰 Une prime… et une chasse" },
    {
      type: "p",
      text:
        "Les récits rapportent que Quraysh offre une récompense importante pour capturer le Prophète ﷺ (et son compagnon). Dans une société tribale et commerçante, une prime n’est pas un détail : elle transforme des hommes en poursuivants.",
    },
    {
      type: "p",
      text:
        "C’est dans ce contexte que la Sîra mentionne Suraqah ibn Mālik : un homme qui s’engage dans la poursuite, attiré par la récompense. La route devient alors une course où chaque bruit, chaque trace, peut être décisif.",
    },

    { type: "subtitle", text: "⚡ Quand la poursuite se retourne" },
    {
      type: "p",
      text:
        "Le récit de Suraqah est marquant parce qu’il montre un renversement. Là où l’homme pense maîtriser la situation, il se heurte à une réalité qui le dépasse. Et ce renversement ne se termine pas par une vengeance, mais par une forme de garantie et, dans les récits, une promesse.",
    },
    {
      type: "p",
      text:
        "Ce passage est souvent retenu comme preuve d’un futur qui s’écrit déjà : au moment même où la mission semble la plus fragile, la Sîra rapporte des paroles qui portent vers l’avenir. Comme si l’histoire te disait : 'Ce n’est pas la fin. Ce n’est même pas le sommet. Ce n’est que le début.'",
    },

    { type: "subtitle", text: "🧭 La route continue" },
    {
      type: "p",
      text:
        "Après cet épisode, la route vers Yathrib continue. Et plus on se rapproche, plus l’Histoire change de rythme : on ne parle plus seulement d’endurer. On parle de construire.",
    },
  ],
  cliffhanger:
    "À l’horizon, un village apparaît : Qubāʾ. Et là, pour la première fois, la communauté va poser les fondations d’un nouveau monde.",
  keyPoints: [
    "Quraysh met une récompense importante : la poursuite devient une chasse.",
    "La Sîra mentionne l’épisode de Suraqah ibn Mālik pendant la route.",
    "Le récit souligne un renversement et une dimension de promesse/avenir.",
    "Après la tension, la route mène vers Qubāʾ puis Médine : début d’une nouvelle ère.",
  ],
  reviewQuestions: [
    {
      id: "l39_q1",
      question: "Quel effet a la prime de Quraysh dans cette période ?",
      options: [
        "Aucun effet",
        "Elle transforme la poursuite en chasse motivée par l’argent",
        "Elle annule la migration",
        "Elle convertit immédiatement les tribus",
      ],
      correctIndex: 1,
      explanation:
        "Une prime attire des poursuivants : c’est un moteur puissant dans ce contexte.",
    },
    {
      id: "l39_q2",
      question: "Pourquoi l’épisode de Suraqah est-il marquant dans les récits ?",
      options: [
        "Parce qu’il n’y a aucune tension",
        "Parce qu’il montre un renversement et une dimension de promesse",
        "Parce que c’est une bataille",
        "Parce qu’il se déroule à Jérusalem",
      ],
      correctIndex: 1,
      explanation:
        "Le récit est marquant par son retournement et l’idée d’un avenir déjà annoncé.",
    },
    {
      id: "l39_boss_q1",
      question: "Quel message spirituel ressort de l’épisode de Suraqah dans le contexte de l’Hégire ?",
      options: [
        "Le désespoir est logique",
        "L’avenir peut être annoncé au moment même où la fragilité est maximale",
        "La force vient uniquement de l’argent",
        "La fuite est une humiliation",
      ],
      correctIndex: 1,
      explanation:
        "Les récits soulignent une confiance et une perspective d’avenir même au cœur du danger.",
      difficulty: "boss",
    },
  ],
},
l40: {
  title: "Qubāʾ puis Médine : une nouvelle ère commence (≈ 622)",
  illustration: world10_l40,
  storyBlocks: [
    { type: "subtitle", text: "🏡 Qubāʾ : la première halte d’un nouveau monde" },
    {
      type: "p",
      text:
        "En ≈ 622, l’arrivée à Qubāʾ (près de Yathrib) marque une transition : on passe de la survie à la fondation. Les récits rapportent que Qubāʾ est une étape significative avant l’entrée dans Médine, et qu’une mosquée y est associée comme premier repère collectif de la communauté naissante.",
    },
    {
      type: "p",
      text:
        "Après la tension de la route, le décor change : l’accueil, la fraternité, l’espérance. Ce n’est pas encore l’État, ni l’organisation complète. Mais c’est le souffle d’un endroit où l’islam peut être vécu sans étouffement.",
    },

    { type: "subtitle", text: "🌿 Entrée à Yathrib : une ville devient Médine" },
    {
      type: "p",
      text:
        "L’entrée à Yathrib n’est pas un simple 'arriver quelque part'. C’est un basculement historique : la communauté musulmane quitte la phase mecquoise d’oppression pour entrer dans une phase de construction. Yathrib deviendra Médine, et cette migration deviendra un repère central de l’histoire islamique.",
    },
    {
      type: "p",
      text:
        "Mais il faut retenir une chose : Médine n’est pas un paradis tombé du ciel. C’est un chantier. Une ville divisée, avec ses tribus, ses tensions, ses équilibres. La différence, c’est qu’un principe plus haut vient y donner une direction.",
    },

    { type: "subtitle", text: "🧱 Le chantier commence" },
    {
      type: "p",
      text:
        "À partir d’ici, la Sîra change de rythme : organisation communautaire, liens de fraternité, établissement de règles de vie, préparation aux défis extérieurs. Et Quraysh, qui a perdu le contrôle de la scène, ne restera pas passive.",
    },
  ],
  cliffhanger:
    "La construction commence… mais bientôt, la confrontation arrive. Quraysh ne laissera pas cette communauté grandir sans frapper. Monde 11 : la route vers Badr se dessine.",
  keyPoints: [
    "En ≈ 622, l’arrivée à Qubāʾ marque une transition : de la survie à la fondation.",
    "L’entrée à Yathrib (future Médine) ouvre la phase de construction de la communauté.",
    "La migration (Hijrah) devient un repère historique majeur.",
    "Médine est un chantier : la communauté doit se structurer face aux défis.",
  ],
  reviewQuestions: [
    {
      id: "l40_q1",
      question: "Pourquoi l’arrivée à Qubāʾ est-elle une étape importante (≈ 622) ?",
      options: [
        "Parce que la mission s’arrête",
        "Parce qu’elle marque une transition vers la fondation communautaire",
        "Parce que Quraysh y gouverne",
        "Parce que c’est Jérusalem",
      ],
      correctIndex: 1,
      explanation:
        "Après la route, Qubāʾ marque l’entrée dans une phase de fondation et de respiration communautaire.",
    },
    {
      id: "l40_q2",
      question: "Quel est le sens historique de l’entrée à Yathrib ?",
      options: [
        "Un simple déplacement",
        "Un basculement vers la construction de la communauté",
        "La fin de toute opposition",
        "La suppression des tribus",
      ],
      correctIndex: 1,
      explanation:
        "L’Hégire ouvre une phase nouvelle : construire une communauté organisée.",
    },
    {
      id: "l40_boss_q1",
      question: "Pourquoi dit-on que “Médine est un chantier” et non un paradis immédiat ?",
      options: [
        "Parce qu’il n’y a aucun musulman",
        "Parce que la ville a ses tribus, tensions et équilibres à structurer",
        "Parce que la prière y est interdite",
        "Parce que Quraysh y a déjà gagné",
      ],
      correctIndex: 1,
      explanation:
        "La ville a des réalités tribales et sociales : la communauté doit se structurer et gérer les défis.",
      difficulty: "boss",
    },
  ],
},
l41: {
  title: "Qubāʾ et la Mosquée : poser la première pierre (≈ 622)",
  illustration: world11_l41,
  storyBlocks: [
    { type: "subtitle", text: "🏡 Qubāʾ : la halte qui change le rythme" },
    {
      type: "p",
      text:
        "En ≈ 622, après la route et la traque, la première respiration forte se trouve à Qubāʾ. La Sîra mentionne cette halte comme un moment fondateur avant l’entrée dans Médine. Ce n’est pas un simple arrêt : c’est le début d’un territoire où l’islam peut se vivre publiquement, sans être étouffé comme à La Mecque.",
    },
    {
      type: "p",
      text:
        "Le ton change. À La Mecque, on survivait sous pression. Ici, on peut commencer à bâtir. Et bâtir, ce n’est pas seulement construire des murs : c’est donner une forme visible à la communauté.",
    },

    { type: "subtitle", text: "🕌 La mosquée : cœur spirituel et centre social" },
    {
      type: "p",
      text:
        "Très tôt, les récits de Sîra associent cette phase à l’établissement d’un lieu de prière — une mosquée — qui devient naturellement un centre. Dans la vision prophétique, la mosquée n’est pas un décor : elle est un cœur. On y prie, on y apprend, on s’y rassemble, on y organise la vie.",
    },
    {
      type: "p",
      text:
        "Et cela a un sens profond : dans une société tribale, chacun a son clan, ses priorités, ses loyautés. La mosquée devient un espace où l’identité principale n’est plus la tribu, mais la foi.",
    },

    { type: "subtitle", text: "🌿 Entrer à Médine : de l’exil à la mission" },
    {
      type: "p",
      text:
        "L’entrée à Médine ouvre une phase nouvelle : l’exil ne se vit plus comme une perte, mais comme une ouverture. Pourtant, rien n’est “magique”. Une ville, c’est des équilibres, des attentes, des susceptibilités. Et la communauté musulmane, encore jeune, doit trouver sa stabilité.",
    },
    {
      type: "p",
      text:
        "La première pierre posée n’est pas seulement matérielle : elle est symbolique. Elle annonce : 'Ici, on ne va pas seulement tenir. Ici, on va construire.'",
    },
  ],
  cliffhanger:
    "Mais construire demande plus qu’un lieu : il faut unir des vies brisées. Comment relier les exilés sans rien… avec ceux qui ont déjà une terre ?",
  keyPoints: [
    "En ≈ 622, Qubāʾ apparaît dans la Sîra comme une halte fondatrice avant Médine.",
    "La mosquée devient un centre : prière, apprentissage, rassemblement, organisation.",
    "La communauté passe d’une logique tribale à une identité centrée sur la foi.",
    "L’entrée à Médine ouvre la phase de construction, mais avec de vrais défis sociaux.",
  ],
  reviewQuestions: [
    {
      id: "l41_q1",
      question: "Pourquoi Qubāʾ est-elle un moment fondateur (≈ 622) dans la Sîra ?",
      options: [
        "Parce que l’Hégire s’arrête là",
        "Parce que c’est une première respiration et une transition vers la construction",
        "Parce que Quraysh y gouverne",
        "Parce que c’est une bataille",
      ],
      correctIndex: 1,
      explanation:
        "Après la traque, Qubāʾ symbolise l’entrée dans une phase où l’islam peut être vécu publiquement et où l’on commence à bâtir.",
    },
    {
      id: "l41_q2",
      question: "Quel est le rôle central de la mosquée dans la phase médinoise ?",
      options: [
        "Un simple bâtiment décoratif",
        "Un centre spirituel et social : prière, apprentissage, organisation",
        "Un marché commercial",
        "Un fort militaire uniquement",
      ],
      correctIndex: 1,
      explanation:
        "La mosquée est un cœur : lieu de prière, de savoir et de rassemblement communautaire.",
    },
    {
      id: "l41_boss_q1",
      question: "Pourquoi la mosquée aide-t-elle à dépasser la logique tribale ?",
      options: [
        "Parce qu’elle interdit les tribus",
        "Parce qu’elle crée un espace commun centré sur la foi",
        "Parce qu’elle supprime les familles",
        "Parce qu’elle remplace la ville",
      ],
      correctIndex: 1,
      explanation:
        "Elle rassemble autour de l’adoration et de l’enseignement, au-delà des appartenances tribales.",
      difficulty: "boss",
    },
  ],
},
l42: {
  title: "Les Muhājirūn et les Anṣār : la fraternité qui sauve (≈ 622–623)",
  illustration: world11_l42,
  storyBlocks: [
    { type: "subtitle", text: "🧳 Des exilés sans terre… mais pas sans foi" },
    {
      type: "p",
      text:
        "Les Muhājirūn arrivent à Médine après avoir quitté La Mecque. Beaucoup ont laissé derrière eux maison, biens, sécurité. L’Hégire n’est pas une migration confortable : elle est un arrachement. On ne comprend pas Médine sans comprendre ça : certains arrivent légers en bagages… mais lourds en souvenirs.",
    },
    {
      type: "p",
      text:
        "Et pourtant, l’accueil des Anṣār (les habitants de Médine qui soutiennent) devient l’une des images les plus marquantes de la Sîra : une ville qui ouvre ses portes à des gens qui n’ont plus rien, uniquement parce qu’ils partagent la foi.",
    },

    { type: "subtitle", text: "🤝 Muʾākhāh : une fraternité organisée" },
    {
      type: "p",
      text:
        "Les récits rapportent l’établissement d’une fraternité (muʾākhāh) entre Muhājirūn et Anṣār. L’idée n’est pas seulement émotionnelle : elle est pratique. Elle vise à empêcher que l’exil crée une classe de pauvres isolés. Elle crée des liens, des responsabilités, un tissu social.",
    },
    {
      type: "p",
      text:
        "C’est un point clé : l’islam ne se contente pas d’un idéal spirituel. Il organise une solidarité réelle. La communauté apprend que la foi se prouve aussi dans le partage, l’accueil, la prise en charge.",
    },

    { type: "subtitle", text: "💡 La fraternité comme antidote aux fractures" },
    {
      type: "p",
      text:
        "Médine est déjà une ville marquée par des tensions tribales (Aws/Khazraj). La fraternité islamique devient un antidote : elle propose une identité qui dépasse les rivalités. Mais c’est aussi un test : est-ce que les cœurs acceptent vraiment de mettre la foi avant l’ancien ordre ?",
    },
    {
      type: "p",
      text:
        "Cette fraternité est l’une des raisons pour lesquelles la communauté tient : sans elle, l’exil aurait pu devenir une crise sociale. Avec elle, il devient une force.",
    },
  ],
  cliffhanger:
    "Mais une communauté unie attire forcément des regards. Et autour de Médine, certains observent… en calculant déjà la prochaine étape.",
  keyPoints: [
    "Les Muhājirūn arrivent souvent après avoir laissé biens et sécurité à La Mecque.",
    "Les Anṣār accueillent et soutiennent : un tournant humain majeur.",
    "La muʾākhāh (fraternité) vise aussi une stabilité sociale, pas seulement émotionnelle.",
    "La fraternité islamique aide à dépasser les fractures tribales, mais c’est un vrai test.",
  ],
  reviewQuestions: [
    {
      id: "l42_q1",
      question: "Pourquoi l’arrivée des Muhājirūn crée-t-elle un défi social ?",
      options: [
        "Ils arrivent avec une armée",
        "Beaucoup ont laissé biens et sécurité derrière eux",
        "Ils refusent de travailler",
        "Ils contrôlent la ville",
      ],
      correctIndex: 1,
      explanation:
        "L’exil implique souvent une perte matérielle : il faut éviter l’isolement et la précarité.",
    },
    {
      id: "l42_q2",
      question: "Quel est l’objectif pratique de la muʾākhāh ?",
      options: [
        "Créer un concours de poésie",
        "Tisser des liens et responsabilités pour stabiliser la communauté",
        "Séparer les tribus",
        "Annuler les relations sociales",
      ],
      correctIndex: 1,
      explanation:
        "La fraternité organise une solidarité réelle et évite une crise sociale liée à l’exil.",
    },
    {
      id: "l42_boss_q1",
      question: "Pourquoi la fraternité islamique est-elle un antidote aux anciennes rivalités ?",
      options: [
        "Parce qu’elle efface la mémoire",
        "Parce qu’elle place la foi au-dessus de la tribu",
        "Parce qu’elle supprime Médine",
        "Parce qu’elle interdit l’accueil",
      ],
      correctIndex: 1,
      explanation:
        "Elle propose une identité commune centrée sur la foi, au-dessus des appartenances tribales.",
      difficulty: "boss",
    },
  ],
},
l43: {
  title: "Une ville plurielle : accords, tribus, équilibres (≈ 622–623)",
  illustration: world11_l43,
  storyBlocks: [
    { type: "subtitle", text: "🏙️ Médine : une société, pas une page blanche" },
    {
      type: "p",
      text:
        "Médine n’est pas un désert vide. C’est une ville avec ses tribus, ses alliances, ses intérêts. Les musulmans arrivent dans un tissu social déjà complexe. Cela signifie une chose : pour que la communauté survive, il faut des règles et des équilibres.",
    },
    {
      type: "p",
      text:
        "Les récits de la période médinoise montrent une dynamique d’organisation : la communauté doit coexister, structurer sa vie, définir des responsabilités et des protections. Sans cadre, la ville replongerait facilement dans ses fractures anciennes.",
    },

    { type: "subtitle", text: "📜 Construire un ordre sans tyrannie" },
    {
      type: "p",
      text:
        "L’objectif n’est pas d’écraser les autres. L’objectif est d’éviter le chaos. La phase médinoise met en évidence un principe : la justice et l’ordre doivent protéger la vie collective. Une communauté qui ne sait pas se structurer devient fragile et manipulable.",
    },
    {
      type: "p",
      text:
        "Dans ce contexte, tout devient plus sensible : un conflit local peut embraser une tribu, une rumeur peut provoquer une rupture, un incident peut être exploité par des ennemis externes.",
    },

    { type: "subtitle", text: "👀 Le regard extérieur" },
    {
      type: "p",
      text:
        "Pendant que Médine s’organise, Quraysh observe. Elle n’a pas seulement perdu une ville : elle a perdu le contrôle de la scène. Et quand une puissance perd le contrôle, elle cherche à reprendre l’avantage par l’économie, la pression, la peur.",
    },
    {
      type: "p",
      text:
        "C’est ici que tu sens la suite : l’organisation interne n’est pas une option. Parce que la menace externe se prépare déjà.",
    },
  ],
  cliffhanger:
    "Et dans cette nouvelle société, un danger apparaît de l’intérieur : des visages sourient… mais leurs cœurs calculent.",
  keyPoints: [
    "Médine est une société complexe : tribus, alliances, équilibres.",
    "La communauté doit se structurer pour éviter le chaos et la manipulation.",
    "Justice et ordre servent à protéger la vie collective, pas à écraser.",
    "Quraysh observe et prépare une reprise d’avantage par pression et stratégie.",
  ],
  reviewQuestions: [
    {
      id: "l43_q1",
      question: "Pourquoi Médine n’est-elle pas une “page blanche” ?",
      options: [
        "Parce qu’elle est vide",
        "Parce qu’elle possède déjà un tissu social : tribus, alliances, intérêts",
        "Parce qu’il n’y a aucune tribu",
        "Parce qu’elle dépend de Quraysh",
      ],
      correctIndex: 1,
      explanation:
        "La ville a déjà ses équilibres : la communauté doit composer avec une réalité sociale complexe.",
    },
    {
      id: "l43_q2",
      question: "Pourquoi l’organisation interne est-elle vitale à ce stade ?",
      options: [
        "Pour écrire de la poésie",
        "Pour éviter chaos, rumeurs et manipulations (internes/externe)",
        "Pour supprimer la prière",
        "Pour quitter Médine",
      ],
      correctIndex: 1,
      explanation:
        "Une communauté fragile est facilement manipulable. L’ordre protège la cohésion et la justice.",
    },
    {
      id: "l43_boss_q1",
      question: "Quel risque majeur existe si la société médinoise replonge dans ses fractures ?",
      options: [
        "Aucun risque",
        "Une fragilité exploitable par ennemis internes et externes",
        "Une augmentation du commerce",
        "La fin des alliances",
      ],
      correctIndex: 1,
      explanation:
        "Les fractures rendent la communauté vulnérable et ouvrent la porte à la manipulation.",
      difficulty: "boss",
    },
  ],
},
l44: {
  title: "Les premiers nuages : hypocrisie et tensions (≈ 623)",
  illustration: world11_l44,
  storyBlocks: [
    { type: "subtitle", text: "🌫️ Quand l’islam devient visible… certains s’adaptent" },
    {
      type: "p",
      text:
        "À La Mecque, être musulman pouvait coûter cher : torture, boycott, humiliation. À Médine, la communauté commence à gagner un poids social. Et c’est ici qu’un phénomène apparaît dans les récits : certains rejoignent extérieurement, non par conviction profonde, mais par calcul.",
    },
    {
      type: "p",
      text:
        "Ce phénomène, souvent appelé “hypocrisie” dans le vocabulaire religieux, devient un défi nouveau : ce n’est plus un ennemi frontal. C’est un ennemi discret, qui parle comme toi, mais pense contre toi.",
    },

    { type: "subtitle", text: "🧨 Le danger intérieur" },
    {
      type: "p",
      text:
        "Le danger intérieur est plus dur à gérer que le danger extérieur. Un ennemi ouvert te pousse à la vigilance. Un ennemi masqué peut casser la confiance, semer des rumeurs, diviser en silence. Dans une ville déjà complexe, c’est explosif.",
    },
    {
      type: "p",
      text:
        "La communauté doit donc apprendre une nouvelle compétence : la lucidité. Pas la paranoïa. La lucidité. La capacité de distinguer, de garder l’unité sans être naïf.",
    },

    { type: "subtitle", text: "⚖️ Une communauté qui grandit" },
    {
      type: "p",
      text:
        "Le vrai signe de maturité d’une communauté, ce n’est pas l’absence d’épreuves. C’est sa capacité à les traverser sans se détruire. Médine entre dans cette phase : construire malgré les tensions.",
    },
    {
      type: "p",
      text:
        "Et pendant que la ville apprend à se protéger de l’intérieur… Quraysh prépare le choc de l’extérieur.",
    },
  ],
  cliffhanger:
    "Le calme se fissure. Et bientôt, la confrontation ne sera plus une possibilité… mais une réalité. Monde 12 : les menaces se rapprochent.",
  keyPoints: [
    "À Médine, l’islam devient visible : certains peuvent se rapprocher par calcul.",
    "L’hypocrisie est un défi : danger intérieur, rumeurs, division silencieuse.",
    "La communauté doit apprendre la lucidité sans tomber dans la paranoïa.",
    "Pendant que Médine grandit, Quraysh prépare une confrontation extérieure.",
  ],
  reviewQuestions: [
    {
      id: "l44_q1",
      question: "Pourquoi un danger intérieur est-il plus difficile à gérer ?",
      options: [
        "Parce qu’il est toujours plus fort",
        "Parce qu’il est discret et peut diviser sans être frontal",
        "Parce qu’il n’existe pas",
        "Parce qu’il empêche de prier",
      ],
      correctIndex: 1,
      explanation:
        "Un danger masqué peut semer la division, la rumeur et la méfiance de l’intérieur.",
    },
    {
      id: "l44_q2",
      question: "Quelle attitude doit adopter la communauté face à cela ?",
      options: [
        "La paranoïa permanente",
        "La lucidité : unité + prudence",
        "L’ignorance totale",
        "La fuite",
      ],
      correctIndex: 1,
      explanation:
        "La Sîra met en avant la lucidité : protéger l’unité sans naïveté.",
    },
    {
      id: "l44_boss_q1",
      question: "Pourquoi l’apparition de ce phénomène est-elle liée au changement de contexte ?",
      options: [
        "Parce que l’islam disparaît",
        "Parce que l’islam gagne une visibilité sociale à Médine",
        "Parce que Quraysh devient musulmane",
        "Parce que Médine est vide",
      ],
      correctIndex: 1,
      explanation:
        "Quand l’islam devient visible et influent, certains peuvent s’y associer par intérêt plutôt que conviction.",
      difficulty: "boss",
    },
  ],
},
l45: {
  title: "Quraysh n’a pas abandonné (≈ 623)",
  illustration: world12_l45,
  storyBlocks: [
    { type: "subtitle", text: "👀 Une puissance blessée observe" },
    {
      type: "p",
      text:
        "Après l’Hégire, Quraysh n’est pas apaisée. Elle est blessée. Elle a perdu le contrôle de la scène, mais pas sa puissance. Et une puissance blessée ne pardonne pas facilement.",
    },
    {
      type: "p",
      text:
        "Depuis La Mecque, Quraysh observe Médine. Elle voit une communauté qui s’organise, qui ne disparaît pas comme prévu. Et plus le temps passe, plus une question devient dangereuse : que se passera-t-il si cette communauté devient stable ?",
    },

    { type: "subtitle", text: "⚖️ Un nouvel équilibre régional" },
    {
      type: "p",
      text:
        "La présence musulmane à Médine modifie l’équilibre de la région. Les alliances tribales, les routes commerciales, les rapports de force… tout est impacté. Même sans bataille, l’existence de Médine est déjà une provocation stratégique.",
    },
    {
      type: "p",
      text:
        "Dans ce contexte, la confrontation ne naît pas d’un désir de guerre, mais d’un choc d’intérêts. Quraysh ne veut pas laisser émerger une force qui pourrait remettre en cause son statut.",
    },

    { type: "subtitle", text: "⏳ Le temps joue contre la paix" },
    {
      type: "p",
      text:
        "Plus le temps passe, plus la tension monte. Et dans l’Histoire, certaines périodes ne permettent pas de rester immobile. Soit une puissance agit… soit elle accepte de décliner.",
    },
  ],
  cliffhanger:
    "Mais frapper frontalement serait risqué. Alors Quraysh choisit une autre arme : l’économie.",
  keyPoints: [
    "Après l’Hégire, Quraysh reste une puissance blessée mais active.",
    "L’existence de Médine modifie les équilibres régionaux sans combat.",
    "La tension est stratégique avant d’être militaire.",
    "Le temps rend la confrontation de plus en plus probable.",
  ],
  reviewQuestions: [
    {
      id: "l45_q1",
      question: "Pourquoi Quraysh est-elle qualifiée de “puissance blessée” ?",
      options: [
        "Parce qu’elle est pauvre",
        "Parce qu’elle a perdu le contrôle du message mais pas sa puissance",
        "Parce qu’elle est isolée",
        "Parce qu’elle a quitté La Mecque",
      ],
      correctIndex: 1,
      explanation:
        "Quraysh a perdu le contrôle idéologique mais conserve ses réseaux et sa force.",
    },
    {
      id: "l45_q2",
      question: "Pourquoi la présence musulmane à Médine est-elle stratégique ?",
      options: [
        "Parce qu’elle est cachée",
        "Parce qu’elle modifie routes, alliances et rapports de force",
        "Parce qu’elle ne concerne personne",
        "Parce qu’elle supprime le commerce",
      ],
      correctIndex: 1,
      explanation:
        "Même sans combat, une nouvelle force régionale change l’équilibre.",
    },
    {
      id: "l45_boss_q1",
      question: "Pourquoi le temps rend-il la confrontation plus probable ?",
      options: [
        "Parce que Médine disparaît",
        "Parce qu’une puissance doit agir ou accepter de perdre son influence",
        "Parce que la guerre est obligatoire",
        "Parce que la paix est interdite",
      ],
      correctIndex: 1,
      explanation:
        "Dans l’Histoire, une puissance qui voit son influence menacée finit par réagir.",
      difficulty: "boss",
    },
  ],
},
l46: {
  title: "La pression économique : frapper sans combattre (≈ 623)",
  illustration: world12_l46,
  storyBlocks: [
    { type: "subtitle", text: "💰 Quand l’économie devient une arme" },
    {
      type: "p",
      text:
        "Quraysh comprend qu’une guerre ouverte peut être risquée. Alors elle active une autre arme : l’économie. Les routes commerciales reliant La Mecque au nord passent près de Médine. Et ces routes sont vitales.",
    },
    {
      type: "p",
      text:
        "Dans le monde arabe de l’époque, couper une route commerciale n’est pas un simple désagrément. C’est menacer la survie économique d’une cité entière.",
    },

    { type: "subtitle", text: "⚔️ Une pression sans bataille" },
    {
      type: "p",
      text:
        "La tension monte sans qu’aucune bataille ne soit lancée. Chaque caravane devient un message politique. Chaque mouvement est observé. La guerre n’a pas commencé… mais elle est déjà dans les esprits.",
    },
    {
      type: "p",
      text:
        "Pour la communauté musulmane, la situation est délicate : rester passif, c’est accepter l’asphyxie. Réagir, c’est risquer l’escalade.",
    },

    { type: "subtitle", text: "🧠 Dissuasion plutôt qu’agression" },
    {
      type: "p",
      text:
        "À ce stade, l’objectif n’est pas la conquête. Il s’agit de dissuader, de montrer que Médine n’est pas vulnérable. C’est une logique défensive dans un monde où la faiblesse attire l’attaque.",
    },
  ],
  cliffhanger:
    "Mais quand deux puissances se surveillent trop longtemps… un incident suffit pour tout faire basculer.",
  keyPoints: [
    "Quraysh utilise l’économie comme arme stratégique.",
    "Les routes commerciales sont vitales pour La Mecque.",
    "La pression précède la bataille : la guerre commence dans les esprits.",
    "La dissuasion vise à éviter l’asphyxie sans déclencher une guerre totale.",
  ],
  reviewQuestions: [
    {
      id: "l46_q1",
      question: "Pourquoi les routes commerciales sont-elles cruciales pour Quraysh ?",
      options: [
        "Parce qu’elles servent à voyager",
        "Parce qu’elles assurent la survie économique de La Mecque",
        "Parce qu’elles sont religieuses",
        "Parce qu’elles sont secrètes",
      ],
      correctIndex: 1,
      explanation:
        "La Mecque dépend fortement du commerce caravannier.",
    },
    {
      id: "l46_q2",
      question: "Pourquoi parle-t-on de “pression sans bataille” ?",
      options: [
        "Parce qu’il n’y a aucun conflit",
        "Parce que l’économie est utilisée comme moyen de pression",
        "Parce que Médine attaque",
        "Parce que Quraysh se retire",
      ],
      correctIndex: 1,
      explanation:
        "La pression économique est une forme de conflit indirect.",
    },
    {
      id: "l46_boss_q1",
      question: "Quel est l’objectif principal de la dissuasion à ce stade ?",
      options: [
        "Conquérir La Mecque",
        "Montrer que Médine n’est pas vulnérable",
        "Forcer une conversion",
        "Déclencher la guerre",
      ],
      correctIndex: 1,
      explanation:
        "La dissuasion vise à éviter l’asphyxie et à prévenir l’attaque.",
      difficulty: "boss",
    },
  ],
},
l47: {
  title: "Surveiller, dissuader, se préparer (≈ 623–624)",
  illustration: world12_l47,
  storyBlocks: [
    { type: "subtitle", text: "🛡️ Une communauté en apprentissage" },
    {
      type: "p",
      text:
        "Médine apprend une réalité nouvelle : la foi seule ne protège pas des agressions. Il faut anticiper, surveiller, comprendre les mouvements autour de soi.",
    },
    {
      type: "p",
      text:
        "La communauté ne se prépare pas à dominer, mais à ne pas être écrasée. C’est une nuance essentielle pour comprendre la suite.",
    },

    { type: "subtitle", text: "📊 Observer avant d’agir" },
    {
      type: "p",
      text:
        "Les récits montrent une phase d’observation : comprendre les routes, les alliances, les intentions. Une erreur de lecture peut coûter très cher.",
    },
    {
      type: "p",
      text:
        "Dans ce climat, chaque décision devient lourde. Rien n’est improvisé. Et pourtant, tout reste fragile.",
    },

    { type: "subtitle", text: "⏰ Le point de non-retour approche" },
    {
      type: "p",
      text:
        "Quand la pression dure trop longtemps, une sortie devient inévitable. Et cette sortie, bientôt, portera un nom qui marquera l’Histoire.",
    },
  ],
  cliffhanger:
    "Une caravane se prépare à passer. Et ce qui devait être une dissuasion va devenir… une confrontation.",
  keyPoints: [
    "La communauté médinoise apprend l’anticipation stratégique.",
    "La préparation est défensive, pas expansionniste.",
    "Observer et comprendre précède toute action.",
    "La tension prolongée rend la confrontation inévitable.",
  ],
  reviewQuestions: [
    {
      id: "l47_q1",
      question: "Pourquoi la communauté doit-elle apprendre la stratégie ?",
      options: [
        "Pour dominer",
        "Pour éviter d’être écrasée",
        "Pour attaquer sans raison",
        "Pour quitter Médine",
      ],
      correctIndex: 1,
      explanation:
        "La préparation vise la protection et la survie.",
    },
    {
      id: "l47_q2",
      question: "Pourquoi l’observation est-elle essentielle à ce stade ?",
      options: [
        "Pour retarder indéfiniment",
        "Pour éviter des erreurs coûteuses",
        "Pour ignorer Quraysh",
        "Pour provoquer",
      ],
      correctIndex: 1,
      explanation:
        "Une mauvaise lecture stratégique peut déclencher une catastrophe.",
    },
    {
      id: "l47_boss_q1",
      question: "Quel danger naît d’une pression prolongée sans résolution ?",
      options: [
        "Aucun",
        "Une confrontation inévitable",
        "La paix durable",
        "La disparition de Quraysh",
      ],
      correctIndex: 1,
      explanation:
        "Quand la tension dure, un incident peut faire basculer vers l’affrontement.",
      difficulty: "boss",
    },
  ],
},
l48: {
  title: "La route de Badr : quand la confrontation devient possible (≈ 624)",
  illustration: world12_l48,
  storyBlocks: [
    { type: "subtitle", text: "🛣️ Une caravane, un choix" },
    {
      type: "p",
      text:
        "En ≈ 624, une caravane de Quraysh revient du nord. Ce qui semblait être un épisode de dissuasion devient soudain un point de décision. Ignorer ? Intervenir ?",
    },
    {
      type: "p",
      text:
        "À ce moment précis, personne ne parle encore de grande bataille. Mais l’engrenage est lancé.",
    },

    { type: "subtitle", text: "⚖️ Entre prudence et nécessité" },
    {
      type: "p",
      text:
        "La communauté ne cherche pas l’affrontement massif. Mais laisser passer le signal serait accepter la pression économique sans réponse. L’équilibre est fragile.",
    },
    {
      type: "p",
      text:
        "Ce choix n’est pas glorieux. Il est lourd. Et c’est justement ce poids qui rend la suite si humaine.",
    },

    { type: "subtitle", text: "🌪️ Le calme avant la tempête" },
    {
      type: "p",
      text:
        "Personne ne sait encore que ce pas mènera à un champ appelé Badr. Mais l’Histoire, elle, a déjà tourné la page.",
    },
  ],
  cliffhanger:
    "Ils ne sont pas venus pour une bataille… mais la bataille arrive. Monde 13 : Badr.",
  keyPoints: [
    "En ≈ 624, une caravane de Quraysh devient un point de bascule.",
    "La confrontation naît d’une logique de pression et de réponse.",
    "Le choix est stratégique et lourd, pas glorieux.",
    "Badr se profile sans que personne n’en mesure encore l’ampleur.",
  ],
  reviewQuestions: [
    {
      id: "l48_q1",
      question: "Pourquoi la caravane devient-elle un point décisif ?",
      options: [
        "Parce qu’elle est religieuse",
        "Parce qu’elle cristallise la pression économique",
        "Parce qu’elle transporte des armes",
        "Parce qu’elle annonce la victoire",
      ],
      correctIndex: 1,
      explanation:
        "Elle symbolise la pression économique exercée par Quraysh.",
    },
    {
      id: "l48_q2",
      question: "Pourquoi le choix est-il décrit comme “lourd” ?",
      options: [
        "Parce qu’il est facile",
        "Parce qu’il peut déclencher une confrontation majeure",
        "Parce qu’il est symbolique",
        "Parce qu’il est inutile",
      ],
      correctIndex: 1,
      explanation:
        "Toute réponse peut entraîner une escalade irréversible.",
    },
    {
      id: "l48_boss_q1",
      question: "Quel est le sens historique de ce moment (≈ 624) ?",
      options: [
        "Un détail sans importance",
        "Le point d’entrée vers la bataille de Badr",
        "La fin des tensions",
        "Le début de la paix",
      ],
      correctIndex: 1,
      explanation:
        "Ce moment ouvre directement la voie à Badr.",
      difficulty: "boss",
    },
  ],
},



};

export function getLessonContent(lessonId) {
  return LESSONS_CONTENT[lessonId] || null;
}

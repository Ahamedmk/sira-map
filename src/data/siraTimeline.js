// src/data/siraTimeline.js
// ✅ Patch unlockAtWorld aligné sur ta map (24 mondes)

export const SIRA_TIMELINE = [
  {
    id: "birth",
    dateLabel: "12 Rabīʿ al-Awwal (≈ 570)",
    title: "Naissance du Prophète ﷺ",
    phase: "before",
    unlockAtWorld: 3,
    summary:
      "Un enfant naît dans une Arabie tribale. Rien, en apparence, n’annonce ce qui va suivre.",
    story: [
      "La Mecque n’est pas une capitale impériale. C’est une cité tribale, où la protection dépend du clan, et où l’honneur se défend comme une frontière.",
      "Dans ce monde rude, un enfant naît au sein des Banû Hâshim. Il arrive sans fortune, sans armée, sans “plan humain” visible… mais avec un destin qui va transformer l’histoire.",
      "Ce qui frappe dès le départ : la fragilité. Pas de père pour porter son nom et le protéger. Très tôt, la vie lui enseigne que l’appui d’Allah ne ressemble pas toujours à l’appui des hommes.",
    ],
    keyMoments: [
      "Naissance dans un contexte tribal où la protection dépend du clan.",
      "Une enfance qui commence dans la vulnérabilité, pas dans le confort.",
      "Un rappel : la valeur d’une vie ne se mesure pas à ses débuts.",
    ],
    after:
      "Les premières années vont construire une personnalité endurante : apprendre à avancer sans s’accrocher aux sécurités habituelles.",
    reflectionQuestion:
      "Quand tout commence “petit” ou fragile, qu’est-ce que ça peut produire de grand avec le temps ?",
  },

  {
    id: "mother_death",
    dateLabel: "≈ 576",
    title: "Décès de sa mère Āmina",
    phase: "before",
    unlockAtWorld: 3,
    summary:
      "Très tôt, l’épreuve. Une enfance marquée par la séparation et la fragilité humaine.",
    story: [
      "Perdre sa mère enfant, ce n’est pas juste une douleur : c’est perdre l’endroit où le monde est “stable”.",
      "Dans une société où la sécurité se négocie par les liens et les protections, grandir sans père puis sans mère n’est pas seulement une tristesse : c’est une exposition.",
      "Mais cette épreuve façonne une chose rare : une maturité intérieure. Quand tu comprends tôt que rien n’est garanti, tu apprends à ne pas t’endormir dans l’illusion.",
    ],
    keyMoments: [
      "Une séparation qui ancre l’expérience de la perte très tôt.",
      "Une leçon de détachement : le monde n’est pas un lieu de permanence.",
      "Une sensibilité qui se transforme en force intérieure.",
    ],
    after:
      "Cette étape prépare un cœur capable de porter la mission : comprendre les douleurs humaines sans les mépriser.",
    reflectionQuestion:
      "Comment une épreuve précoce peut-elle transformer ta vision de la vie (et pas seulement te briser) ?",
  },

  {
    id: "marriage_khadija",
    dateLabel: "≈ 595",
    title: "Mariage avec Khadīja (ra)",
    phase: "before",
    unlockAtWorld: 3,
    summary:
      "Stabilité, confiance, et un foyer qui deviendra le premier refuge de la Révélation.",
    story: [
      "Après une jeunesse marquée par l’instabilité, arrive une étape de construction : un foyer.",
      "Khadīja (ra), connue pour sa dignité et sa clairvoyance, devient une présence qui rassure et soutient. Ce n’est pas juste un mariage : c’est un appui émotionnel, une stabilité, un refuge.",
      "Dans les grandes missions, on imagine toujours des scènes publiques. Mais souvent, le socle se construit dans le privé : dans la confiance, dans la loyauté, dans un endroit où l’on peut poser le masque.",
    ],
    keyMoments: [
      "Un foyer stable après des années marquées par la fragilité.",
      "La confiance comme carburant des grandes étapes.",
      "La force du soutien invisible (à la maison).",
    ],
    after:
      "Quand la Révélation commencera, le premier “abri” ne sera pas une armée… mais une maison.",
    reflectionQuestion:
      "Dans ta vie, qui est ton “refuge” quand le monde devient lourd ? Et est-ce que toi, tu l’es pour quelqu’un ?",
  },

  {
    id: "revelation",
    dateLabel: "Ramadan (≈ 610)",
    title: "Début de la Révélation",
    phase: "revelation",
    unlockAtWorld: 4,
    summary: "Dans le silence, la Parole descend. Le monde bascule.",
    story: [
      "Tout change sans bruit. Pas de trompettes. Pas de foule. Pas de décor héroïque. Juste le silence… et une vérité qui descend.",
      "À partir de cet instant, la vie n’est plus “à lui”. Chaque pas devient responsabilité, chaque choix devient message, chaque douleur devient enseignement.",
      "Ce moment marque aussi une réalité : la guidance ne vient pas toujours quand tout est prêt. Elle arrive parfois au moment où le cœur apprend à trembler… et à tenir.",
    ],
    keyMoments: [
      "Un basculement intérieur avant un basculement public.",
      "Une responsabilité qui commence dans l’intimité.",
      "La vérité transforme d’abord la personne avant de transformer le monde.",
    ],
    after:
      "Ce qui était personnel devient mission : la patience et la constance vont devenir un mode de vie.",
    reflectionQuestion:
      "Quand une vérité te touche, est-ce que tu la protèges… ou est-ce que tu la fuis ?",
  },

  {
    id: "public_call",
    dateLabel: "≈ 613",
    title: "Début de l’appel public",
    phase: "revelation",
    unlockAtWorld: 5,
    summary: "Ce qui était intime devient public. La vérité commence à déranger.",
    story: [
      "Il y a une différence immense entre croire en silence… et parler en plein jour.",
      "À partir de l’appel public, la vérité ne dérange plus seulement les habitudes : elle dérange les intérêts, les réputations, les équilibres sociaux.",
      "C’est là que commence une pression nouvelle : pas seulement sur les idées, mais sur l’identité. Parce qu’une société accepte mieux un croyant discret qu’une parole qui réorganise tout.",
    ],
    keyMoments: [
      "Passage du privé au public.",
      "La vérité commence à menacer des intérêts établis.",
      "Le courage devient une obligation, pas une option.",
    ],
    after:
      "La résistance va s’intensifier : moqueries, pression, isolement… et pourtant la mission continue.",
    reflectionQuestion:
      "Qu’est-ce qui te fait peur : être rejeté… ou rester silencieux alors que tu sais ?",
  },

  {
    id: "quraysh_boycott",
    dateLabel: "≈ 617–619",
    title: "Boycott / embargo de Quraysh",
    phase: "trial",
    unlockAtWorld: 6,
    summary: "Isolement, faim, pression… et pourtant une foi qui ne s’éteint pas.",
    story: [
      "Quand l’argumentation ne suffit plus, certains passent au siège : couper les liens, étrangler la vie, isoler socialement.",
      "Le boycott, ce n’est pas juste une “période difficile”. C’est une stratégie : faire craquer par la faim, par la fatigue, par l’humiliation.",
      "Et c’est là que tu vois la différence entre l’émotion du moment et la conviction profonde : ce qui est construit pour Allah ne s’effondre pas au premier hiver.",
    ],
    keyMoments: [
      "Une pression organisée, sociale et économique.",
      "La foi testée dans le concret : nourriture, sécurité, dignité.",
      "La constance quand rien ne récompense immédiatement.",
    ],
    after:
      "Cette étape fabrique des croyants solides : ceux qui ne suivent pas un confort, mais une vérité.",
    reflectionQuestion:
      "Dans ta vie, qu’est-ce qui te fait abandonner le plus vite : la fatigue… ou l’absence de résultat immédiat ?",
  },

  {
    id: "year_of_sorrow",
    dateLabel: "≈ 619",
    title: "Décès de Khadīja & Abū Ṭālib",
    phase: "trial",
    unlockAtWorld: 7,
    summary: "Deux pertes immenses. Le cœur saigne… mais le chemin continue.",
    story: [
      "Perdre une personne, c’est perdre une présence. Perdre deux piliers presque en même temps, c’est perdre une stabilité.",
      "Khadīja (ra) représentait le refuge du foyer. Abū Ṭālib, la protection sociale dans un monde tribal. Les deux tombent… et la route devient plus exposée, plus dure, plus solitaire.",
      "Et pourtant, c’est là que se révèle une loi de vie : parfois, Allah enlève des appuis pour t’apprendre que l’appui ultime n’a jamais été humain.",
    ],
    keyMoments: [
      "Perte émotionnelle (foyer) + perte sociale (protection).",
      "Une étape de vulnérabilité extrême.",
      "Le cœur souffre, mais la direction ne change pas.",
    ],
    after:
      "La période suivante sera marquée par une recherche de soutien et un tournant vers de nouveaux horizons.",
    reflectionQuestion:
      "Quand tes repères tombent, est-ce que tu t’arrêtes… ou est-ce que tu avances avec une foi plus pure ?",
  },

  {
    id: "taif",
    dateLabel: "≈ 619",
    title: "Sortie vers Ṭā’if",
    phase: "trial",
    unlockAtWorld: 7,
    summary: "Rejet, douleur, humiliation… et une dignité qui ne flanche pas.",
    story: [
      "Après des pertes immenses, il cherche un nouvel espace pour porter le message. Mais parfois, la porte que tu frappes te répond par la brutalité.",
      "Ṭā’if, c’est l’épreuve du rejet. Pas seulement un “non”. Un non accompagné d’humiliation. Comme si on voulait écraser l’idée et la personne.",
      "Et là, une leçon crue : tu peux être dans la vérité et être maltraité. Ton rôle n’est pas d’être applaudi. Ton rôle est de rester droit.",
    ],
    keyMoments: [
      "Une tentative de sortie… qui se transforme en rejet.",
      "L’humiliation comme test du cœur.",
      "La dignité maintenue malgré l’injustice.",
    ],
    after:
      "Quand la terre devient étroite, Allah ouvre des portes là où on ne s’y attend pas.",
    reflectionQuestion:
      "Quand tu es humilié, est-ce que tu deviens dur… ou est-ce que tu deviens meilleur ?",
  },

  {
    id: "isra_miraj",
    dateLabel: "≈ 620 (ou 10 ans après la mission)",
    title: "Al-Isrā’ & Al-Miʿrāj",
    phase: "trial",
    unlockAtWorld: 8,
    summary: "Quand la terre se ferme, le ciel s’ouvre. Consolation et élévation.",
    story: [
      "Il y a des moments où tu as l’impression que tout se ferme : les gens, les routes, les solutions, l’énergie.",
      "Et dans cette fermeture, arrive une ouverture qui ne vient pas d’en bas… mais d’en haut. Comme un message : “Tu n’es pas oublié. Tu n’es pas seul.”",
      "Cette étape, c’est une réponse à l’usure : un souffle, une élévation, une remise en perspective. Quand l’âme fatigue, Allah la relève.",
    ],
    keyMoments: [
      "Consolation après une période de douleur.",
      "Une élévation spirituelle qui redonne du sens.",
      "Une preuve : l’épreuve n’est pas la fin du chemin.",
    ],
    after:
      "Après la consolation, vient le tournant : des alliances se forment, et une nouvelle ville se prépare.",
    reflectionQuestion:
      "Quand tu te sens au bout, où cherches-tu la force : dans les gens… ou dans Allah ?",
  },

  {
    id: "aqabah_1",
    dateLabel: "≈ 621",
    title: "1ʳᵉ ʿAqabah",
    phase: "hijra",
    unlockAtWorld: 9,
    summary: "Un engagement discret… qui prépare un tournant historique.",
    story: [
      "Les grandes révolutions commencent souvent par des accords discrets, pas par des grandes scènes.",
      "La 1ʳᵉ ʿAqabah, c’est l’idée que la vérité commence à trouver un endroit où respirer. Quelques cœurs, une promesse, une graine.",
      "À ce stade, rien n’est “grand” en apparence. Mais tout est immense en réalité : parce qu’un petit groupe sincère peut changer l’équilibre d’une époque.",
    ],
    keyMoments: [
      "Un engagement discret, mais décisif.",
      "La vérité trouve des cœurs prêts à porter.",
      "Une graine qui annonce la migration.",
    ],
    after:
      "Cette promesse prépare une protection plus forte : la 2ᵉ ʿAqabah va sceller le tournant.",
    reflectionQuestion:
      "As-tu déjà sous-estimé une petite décision… qui a tout changé après ?",
  },

  {
    id: "aqabah_2",
    dateLabel: "≈ 622",
    title: "2ᵉ ʿAqabah",
    phase: "hijra",
    unlockAtWorld: 9,
    summary: "Des cœurs prêts à protéger. Une nouvelle ville attend.",
    story: [
      "Cette fois, l’engagement n’est plus seulement “moral”. Il devient protection, responsabilité, risque.",
      "Des hommes et des femmes acceptent de défendre, d’accueillir, de porter les conséquences. C’est un passage de foi “théorique” à foi “qui coûte”.",
      "Et c’est là que l’histoire change : quand une communauté décide de se lever, pas seulement de croire.",
    ],
    keyMoments: [
      "Engagement renforcé : protection et responsabilité.",
      "Foi qui implique un risque réel.",
      "Préparation directe à la Hijra.",
    ],
    after:
      "La Hijra devient possible : ce qui était impossible à La Mecque peut naître ailleurs.",
    reflectionQuestion:
      "Dans ta foi, qu’est-ce qui prouve que tu es sérieux : tes mots… ou tes sacrifices ?",
  },

  {
    id: "hijra",
    dateLabel: "Rabīʿ I (1 AH / ≈ 622)",
    title: "Hijra vers Médine",
    phase: "madinah",
    unlockAtWorld: 10,
    summary: "Ce n’est pas une fuite. C’est une renaissance.",
    story: [
      "La Hijra n’est pas une défaite. C’est une stratégie de survie et de construction.",
      "Quitter une ville aimée, c’est laisser derrière soi des souvenirs, une histoire, des repères. Mais parfois, la foi demande un déplacement : pas pour fuir… pour renaître.",
      "C’est ici que commence une nouvelle page : la foi ne sera plus seulement “résistante”, elle deviendra “organisée”.",
    ],
    keyMoments: [
      "Départ difficile, mais nécessaire.",
      "Une foi qui se transforme en projet de société.",
      "Le début d’une construction durable.",
    ],
    after:
      "À Médine, il faudra bâtir : une mosquée, une fraternité, une cité.",
    reflectionQuestion:
      "Quel est ton “départ” à toi : qu’est-ce que tu dois quitter pour grandir spirituellement ?",
  },

  {
    id: "masjid",
    dateLabel: "1 AH",
    title: "Construction de la mosquée",
    phase: "madinah",
    unlockAtWorld: 11,
    summary: "Une communauté se construit : prière, fraternité, fondations.",
    story: [
      "La première chose à bâtir, ce n’est pas un palais. C’est un centre.",
      "La mosquée devient un lieu de prière, mais aussi un lieu d’unité, d’éducation, de décisions. Un espace où l’identité musulmane prend forme.",
      "Ça montre une règle : si tu veux que ta foi dure, il lui faut un endroit (et une routine) où elle se nourrit.",
    ],
    keyMoments: [
      "Priorité : bâtir un centre spirituel et communautaire.",
      "Unité et discipline : la foi devient structurée.",
      "La spiritualité se vit aussi collectivement.",
    ],
    after:
      "Une fois les fondations posées, la communauté va faire face à des défis extérieurs majeurs.",
    reflectionQuestion:
      "Qu’est-ce que tu dois “construire” dans ta vie pour que ta foi arrête d’être instable ?",
  },

  // --- Les événements suivants : je te laisse le même format (déjà prêt),
  // tu peux enrichir progressivement. Je t’en mets quelques-uns complets pour l’exemple :

  {
    id: "badr",
    dateLabel: "Ramadan 2 AH",
    title: "Badr",
    phase: "madinah",
    unlockAtWorld: 13,
    summary: "Minorité, foi, courage. Une victoire qui dépasse les chiffres.",
    story: [
      "Badr, c’est le moment où une petite communauté comprend que la survie n’est pas seulement spirituelle : elle est aussi stratégique.",
      "Le rapport de force n’est pas favorable, et pourtant la constance, la discipline et la foi font tenir.",
      "Ce n’est pas une glorification de la guerre : c’est une leçon sur la préparation, l’unité et le courage quand l’avenir est incertain.",
    ],
    keyMoments: [
      "Minorité face à un adversaire mieux équipé.",
      "Discipline et unité comme facteur central.",
      "Victoire qui change la perception de la communauté.",
    ],
    after:
      "Après Badr, la pression augmente : les ennemis s’organisent davantage, et les tests deviennent plus complexes.",
    reflectionQuestion:
      "Quand tu es en “minorité” (dans un choix, une valeur), qu’est-ce qui te fait tenir ?",
  },

  {
    id: "uhud",
    dateLabel: "Shawwāl 3 AH",
    title: "Uḥud",
    phase: "madinah",
    unlockAtWorld: 15,
    summary: "Une leçon dure : l’obéissance, l’endurance, la lucidité.",
    story: [
      "Uḥud est une étape qui casse l’illusion : la foi n’empêche pas les blessures.",
      "C’est un moment d’apprentissage collectif : quand la discipline se fissure, les conséquences peuvent être lourdes.",
      "Mais la leçon est aussi une miséricorde : tomber ne veut pas dire finir. Une communauté grandit aussi par ses erreurs, quand elle accepte d’en tirer une vérité.",
    ],
    keyMoments: [
      "Épreuve difficile et blessures.",
      "Leçon de discipline et de lucidité.",
      "Apprentissage : se relever, se corriger, continuer.",
    ],
    after:
      "La communauté devient plus mature : elle apprend à ne pas confondre spiritualité et naïveté.",
    reflectionQuestion:
      "Quand tu fais une erreur, est-ce que tu t’effondres… ou est-ce que tu en fais une marche ?",
  },

  {
    id: "khandaq",
    dateLabel: "Shawwāl 5 AH",
    title: "Al-Khandaq",
    phase: "madinah",
    unlockAtWorld: 17,
    summary: "Quand la coalition se rassemble, la stratégie et la constance tiennent.",
    story: [
      "Cette fois, ce n’est pas un duel : c’est une coalition. Un rassemblement de forces qui veut finir l’histoire.",
      "La réponse n’est pas seulement le courage. C’est la stratégie, l’intelligence, et la résistance sur la durée.",
      "Quand la pression est longue, ce n’est pas l’intensité d’un jour qui compte : c’est la constance de plusieurs jours.",
    ],
    keyMoments: [
      "Coalition massive contre la communauté.",
      "Stratégie et endurance : tenir dans la durée.",
      "La constance devient une arme.",
    ],
    after:
      "Après cette épreuve, l’équilibre change : la communauté gagne en stabilité et en confiance.",
    reflectionQuestion:
      "Dans les épreuves longues, qu’est-ce qui te fait craquer le plus : la peur… ou la durée ?",
  },

  // --- Je garde tes autres objets tels quels pour ne pas te faire un pavé énorme,
  // mais tu peux leur ajouter story/keyMoments/reflectionQuestion exactement pareil.

  {
    id: "hudaybiya",
    dateLabel: "Dhū al-Qaʿdah 6 AH",
    title: "Hudaybiyah",
    phase: "madinah",
    unlockAtWorld: 19,
    summary: "Un “traité” qui ressemble à une concession… mais qui ouvre les portes.",
    story: [
      "Hudaybiyah apprend une leçon rare : parfois, la victoire ressemble à une concession.",
      "Ce moment enseigne la patience stratégique : accepter un accord qui apaise, qui ouvre des routes, qui prépare des conversions et une stabilité.",
      "Ce n’est pas un recul : c’est une vision longue. Et peu de cœurs supportent la vision longue.",
    ],
    keyMoments: [
      "Accord difficile à accepter émotionnellement.",
      "Patience stratégique et vision long terme.",
      "Ouverture de nouvelles portes sans confrontation directe.",
    ],
    after:
      "La période suivante verra une expansion plus large : les frontières du message s’ouvrent.",
    reflectionQuestion:
      "Est-ce que tu sais accepter une “victoire lente”… ou tu veux toujours une victoire immédiate ?",
  },

  {
    id: "khaybar",
    dateLabel: "Muḥarram 7 AH",
    title: "Khaybar",
    phase: "madinah",
    unlockAtWorld: 20,
    summary: "Une étape militaire et politique. La région change d’équilibre.",
  },
  {
    id: "letters_kings",
    dateLabel: "7 AH",
    title: "Lettres aux rois et dirigeants",
    phase: "madinah",
    unlockAtWorld: 20,
    summary: "Le message dépasse les frontières. L’appel devient universel.",
  },
  {
    id: "umrah_qada",
    dateLabel: "Dhū al-Qaʿdah 7 AH",
    title: "ʿUmrah al-Qaḍā’",
    phase: "madinah",
    unlockAtWorld: 20,
    summary: "Retour à La Mecque, avec dignité. Un signe fort.",
  },

  {
    id: "fath_makkah",
    dateLabel: "Ramadan 8 AH",
    title: "Conquête de La Mecque",
    phase: "madinah",
    unlockAtWorld: 22,
    summary: "Puissance sans vengeance. Le pardon comme sommet du triomphe.",
  },
  {
    id: "tabuk",
    dateLabel: "Rajab 9 AH",
    title: "Tabūk",
    phase: "madinah",
    unlockAtWorld: 23,
    summary: "Une expédition éprouvante, un test de sincérité et d’endurance.",
  },
  {
    id: "year_of_delegations",
    dateLabel: "9 AH",
    title: "ʿĀm al-Wufūd (Année des délégations)",
    phase: "madinah",
    unlockAtWorld: 23,
    summary: "Les tribus viennent. L’islam s’étend et s’organise.",
  },

  {
    id: "farewell_hajj",
    dateLabel: "10 AH",
    title: "Ḥajj d’adieu",
    phase: "ending",
    unlockAtWorld: 24,
    summary: "Les paroles finales, la transmission, l’héritage.",
  },
  {
    id: "death",
    dateLabel: "Rabīʿ I 11 AH / ≈ 632",
    title: "Décès du Prophète ﷺ",
    phase: "ending",
    unlockAtWorld: 24,
    summary: "Fin d’une vie… mais pas fin du message. Une Umma continue.",
  },
];

export const PHASES = [
  { key: "before", label: "Avant la Révélation" },
  { key: "revelation", label: "Révélation & Appel" },
  { key: "trial", label: "Épreuves & Consolation" },
  { key: "hijra", label: "Aqabah & Hijra" },
  { key: "madinah", label: "Construction à Médine" },
  { key: "ending", label: "Derniers moments" },
];

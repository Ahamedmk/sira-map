// src/data/siraTimeline.js
// Timeline basée sur ton tableau (et les événements majeurs).
// unlockAtWorld : à quel "monde" l'événement devient visible (débloqué).
// Tu peux ajuster les mondes ensuite selon ton découpage réel.

export const SIRA_TIMELINE = [
  {
    id: "birth",
    dateLabel: "12 Rabīʿ al-Awwal (≈ 570)",
    title: "Naissance du Prophète ﷺ",
    phase: "before",
    unlockAtWorld: 1,
    summary:
      "Un enfant naît dans une Arabie tribale. Rien, en apparence, n’annonce ce qui va suivre.",
  },
  {
    id: "mother_death",
    dateLabel: "≈ 576",
    title: "Décès de sa mère Āmina",
    phase: "before",
    unlockAtWorld: 1,
    summary:
      "Très tôt, l’épreuve. Une enfance marquée par la séparation et la fragilité humaine.",
  },
  {
    id: "marriage_khadija",
    dateLabel: "≈ 595",
    title: "Mariage avec Khadīja (ra)",
    phase: "before",
    unlockAtWorld: 2,
    summary:
      "Stabilité, confiance, et un foyer qui deviendra le premier refuge de la Révélation.",
  },
  {
    id: "revelation",
    dateLabel: "Ramadan (≈ 610)",
    title: "Début de la Révélation",
    phase: "revelation",
    unlockAtWorld: 3,
    summary:
      "Dans le silence, la Parole descend. Le monde bascule.",
  },
  {
    id: "public_call",
    dateLabel: "≈ 613",
    title: "Début de l’appel public",
    phase: "revelation",
    unlockAtWorld: 3,
    summary:
      "Ce qui était intime devient public. La vérité commence à déranger.",
  },
  {
    id: "quraysh_boycott",
    dateLabel: "≈ 617–619",
    title: "Boycott / embargo de Quraysh",
    phase: "trial",
    unlockAtWorld: 4,
    summary:
      "Isolement, faim, pression… et pourtant une foi qui ne s’éteint pas.",
  },
  {
    id: "year_of_sorrow",
    dateLabel: "≈ 619",
    title: "Décès de Khadīja & Abū Ṭālib",
    phase: "trial",
    unlockAtWorld: 4,
    summary:
      "Deux pertes immenses. Le cœur saigne… mais le chemin continue.",
  },
  {
    id: "taif",
    dateLabel: "≈ 619",
    title: "Sortie vers Ṭā’if",
    phase: "trial",
    unlockAtWorld: 5,
    summary:
      "Rejet, douleur, humiliation… et une dignité qui ne flanche pas.",
  },
  {
    id: "isra_miraj",
    dateLabel: "≈ 620 (ou 10 ans après la mission)",
    title: "Al-Isrā’ & Al-Miʿrāj",
    phase: "trial",
    unlockAtWorld: 5,
    summary:
      "Quand la terre se ferme, le ciel s’ouvre. Consolation et élévation.",
  },
  {
    id: "aqabah_1",
    dateLabel: "≈ 621",
    title: "1ʳᵉ ʿAqabah",
    phase: "hijra",
    unlockAtWorld: 6,
    summary:
      "Un engagement discret… qui prépare un tournant historique.",
  },
  {
    id: "aqabah_2",
    dateLabel: "≈ 622",
    title: "2ᵉ ʿAqabah",
    phase: "hijra",
    unlockAtWorld: 6,
    summary:
      "Des cœurs prêts à protéger. Une nouvelle ville attend.",
  },
  {
    id: "hijra",
    dateLabel: "Rabīʿ I (1 AH / ≈ 622)",
    title: "Hijra vers Médine",
    phase: "madinah",
    unlockAtWorld: 7,
    summary:
      "Ce n’est pas une fuite. C’est une renaissance.",
  },
  {
    id: "masjid",
    dateLabel: "1 AH",
    title: "Construction de la mosquée",
    phase: "madinah",
    unlockAtWorld: 7,
    summary:
      "Une communauté se construit : prière, fraternité, fondations.",
  },
  {
    id: "badr",
    dateLabel: "Ramadan 2 AH",
    title: "Badr",
    phase: "madinah",
    unlockAtWorld: 8,
    summary:
      "Minorité, foi, courage. Une victoire qui dépasse les chiffres.",
  },
  {
    id: "uhud",
    dateLabel: "Shawwāl 3 AH",
    title: "Uḥud",
    phase: "madinah",
    unlockAtWorld: 9,
    summary:
      "Une leçon dure : l’obéissance, l’endurance, la lucidité.",
  },
  {
    id: "khandaq",
    dateLabel: "Shawwāl 5 AH",
    title: "Al-Khandaq",
    phase: "madinah",
    unlockAtWorld: 10,
    summary:
      "Quand la coalition se rassemble, la stratégie et la constance tiennent.",
  },
  {
    id: "hudaybiya",
    dateLabel: "Dhū al-Qaʿdah 6 AH",
    title: "Hudaybiyah",
    phase: "madinah",
    unlockAtWorld: 11,
    summary:
      "Un “traité” qui ressemble à une concession… mais qui ouvre les portes.",
  },
  {
    id: "khaybar",
    dateLabel: "Muḥarram 7 AH",
    title: "Khaybar",
    phase: "madinah",
    unlockAtWorld: 12,
    summary:
      "Une étape militaire et politique. La région change d’équilibre.",
  },
  {
    id: "letters_kings",
    dateLabel: "7 AH",
    title: "Lettres aux rois et dirigeants",
    phase: "madinah",
    unlockAtWorld: 12,
    summary:
      "Le message dépasse les frontières. L’appel devient universel.",
  },
  {
    id: "umrah_qada",
    dateLabel: "Dhū al-Qaʿdah 7 AH",
    title: "ʿUmrah al-Qaḍā’",
    phase: "madinah",
    unlockAtWorld: 12,
    summary:
      "Retour à La Mecque, avec dignité. Un signe fort.",
  },
  {
    id: "fath_makkah",
    dateLabel: "Ramadan 8 AH",
    title: "Conquête de La Mecque",
    phase: "madinah",
    unlockAtWorld: 13,
    summary:
      "Puissance sans vengeance. Le pardon comme sommet du triomphe.",
  },
  {
    id: "tabuk",
    dateLabel: "Rajab 9 AH",
    title: "Tabūk",
    phase: "madinah",
    unlockAtWorld: 14,
    summary:
      "Une expédition éprouvante, un test de sincérité et d’endurance.",
  },
  {
    id: "year_of_delegations",
    dateLabel: "9 AH",
    title: "ʿĀm al-Wufūd (Année des délégations)",
    phase: "madinah",
    unlockAtWorld: 14,
    summary:
      "Les tribus viennent. L’islam s’étend et s’organise.",
  },
  {
    id: "farewell_hajj",
    dateLabel: "10 AH",
    title: "Ḥajj d’adieu",
    phase: "ending",
    unlockAtWorld: 15,
    summary:
      "Les paroles finales, la transmission, l’héritage.",
  },
  {
    id: "death",
    dateLabel: "Rabīʿ I 11 AH / ≈ 632",
    title: "Décès du Prophète ﷺ",
    phase: "ending",
    unlockAtWorld: 16,
    summary:
      "Fin d’une vie… mais pas fin du message. Une Umma continue.",
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

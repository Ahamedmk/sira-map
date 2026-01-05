// src/data/weeklyBossQuestions.js

/**
 * Weekly Boss (local MVP)
 * - 1 thème par semaine
 * - difficulté progressive
 * - chaque question a une liste de sources (livre / chapitre / référence)
 *
 * NOTE IMPORTANT :
 * Les numéros exacts de hadith peuvent varier selon éditions/apps.
 * Ici on privilégie "ouvrage + livre/chapitre" quand c’est plus stable.
 */

export const WEEKLY_BOSS = {
  version: 1,
  current: {
    // WeekStart (lundi) au format YYYY-MM-DD
    weekStart: "2026-01-05",
    theme: "Famille du Prophète ﷺ — bases",
    difficulty: 1, // 1..3
    timeLimitSec: 7 * 60,
    passPct: 80,
    questions: [
      {
        id: "wk01_q01",
        type: "mcq",
        difficulty: 1,
        question:
          "Qui est le grand-père du Prophète ﷺ qui a pris en charge l’enfant après la mort de sa mère Âminah ?",
        options: ["Abû Tâlib", "ʿAbd al-Muttalib", "Hamzah", "Al-ʿAbbâs"],
        correctIndex: 1,
        explanation:
          "Après la mort d’Âminah, la tutelle revient à son grand-père ʿAbd al-Muttalib avant de passer à Abû Tâlib.",
        sources: [
          {
            kind: "sira",
            work: "Ibn Hishâm (Sîra)",
            ref: "Passages sur l’enfance et la tutelle (après le décès d’Âminah).",
          },
          {
            kind: "sira",
            work: "Ar-Raheeq al-Makhtum (Le Nectar Cacheté) — al-Mubarakpuri",
            ref: "Chapitre sur l’enfance du Prophète ﷺ (prise en charge par le grand-père).",
          },
        ],
      },

      {
        id: "wk01_q02",
        type: "mcq",
        difficulty: 1,
        question:
          "Après la mort de ʿAbd al-Muttalib, qui a pris en charge le Prophète ﷺ ?",
        options: ["Al-ʿAbbâs", "Abû Lahab", "Abû Tâlib", "ʿUmar"],
        correctIndex: 2,
        explanation:
          "La tutelle passe à son oncle Abû Tâlib, qui le protège et l’accompagne.",
        sources: [
          {
            kind: "sira",
            work: "Ibn Hishâm (Sîra)",
            ref: "Passages sur la tutelle après ʿAbd al-Muttalib.",
          },
          {
            kind: "sira",
            work: "Ibn Kathîr — Al-Bidâyah wa an-Nihâyah",
            ref: "Partie Sîra : enfance / prise en charge par Abû Tâlib.",
          },
        ],
      },

      {
        id: "wk01_q03",
        type: "mcq",
        difficulty: 1,
        question:
          "Laquelle de ces personnes est l’épouse du Prophète ﷺ ?",
        options: [
          "Âminah bint Wahb",
          "Khadîjah bint Khuwaylid",
          "Fâtimah bint Asad",
          "Sumayyah bint Khayyât",
        ],
        correctIndex: 1,
        explanation:
          "Khadîjah bint Khuwaylid est la première épouse du Prophète ﷺ.",
        sources: [
          {
            kind: "sira",
            work: "Ar-Raheeq al-Makhtum",
            ref: "Chapitre sur le mariage avec Khadîjah.",
          },
          {
            kind: "sira",
            work: "Ibn Hishâm (Sîra)",
            ref: "Passages sur le mariage avec Khadîjah.",
          },
        ],
      },

      {
        id: "wk01_q04",
        type: "mcq",
        difficulty: 1,
        question:
          "Parmi les filles du Prophète ﷺ, laquelle a été l’épouse de ʿAlî رضي الله عنه ?",
        options: ["Zaynab", "Ruqayyah", "Fâtimah", "Umm Kulthûm"],
        correctIndex: 2,
        explanation:
          "Fâtimah رضي الله عنها est l’épouse de ʿAlî رضي الله عنه.",
        sources: [
          {
            kind: "bio",
            work: "Ibn Saʿd — At-Tabaqât al-Kubrâ",
            ref: "Section Ahl al-Bayt : Fâtimah et son mariage.",
          },
          {
            kind: "sira",
            work: "Ibn Kathîr — Al-Bidâyah wa an-Nihâyah",
            ref: "Partie Sîra : biographies et famille du Prophète ﷺ.",
          },
        ],
      },

      {
        id: "wk01_q05",
        type: "mcq",
        difficulty: 1,
        question:
          "Abû Lahab est :",
        options: [
          "Le père de Khadîjah",
          "Un oncle paternel du Prophète ﷺ",
          "Un cousin du Prophète ﷺ",
          "Un chef médinois",
        ],
        correctIndex: 1,
        explanation:
          "Abû Lahab est un oncle paternel du Prophète ﷺ.",
        sources: [
          {
            kind: "quran",
            work: "Coran — Sourate Al-Masad (111)",
            ref: "Traditionnellement liée à Abû Lahab (voir tafsîr).",
          },
          {
            kind: "sira",
            work: "Ibn Hishâm (Sîra)",
            ref: "Passages sur l’opposition d’Abû Lahab.",
          },
        ],
      },

      {
        id: "wk01_q06",
        type: "mcq",
        difficulty: 1,
        question:
          "Quel est le lien entre Hamzah et le Prophète ﷺ ?",
        options: ["Cousin", "Oncle paternel", "Beau-frère", "Neveu"],
        correctIndex: 1,
        explanation:
          "Hamzah ibn ʿAbd al-Muttalib est un oncle paternel du Prophète ﷺ.",
        sources: [
          {
            kind: "bio",
            work: "Biographies des compagnons (Sîra / Tabaqât)",
            ref: "Hamzah ibn ʿAbd al-Muttalib : lien familial.",
          },
        ],
      },

      {
        id: "wk01_q07",
        type: "mcq",
        difficulty: 2,
        question:
          "Qui est Zayd ibn Hârithah dans la Sîra ?",
        options: [
          "Un oncle du Prophète ﷺ",
          "Un fils biologique du Prophète ﷺ",
          "Un compagnon proche lié à l’adoption avant son abolition",
          "Un ennemi de Quraysh",
        ],
        correctIndex: 2,
        explanation:
          "Zayd fut appelé 'fils' avant l’abolition de l’adoption légale telle qu’elle existait.",
        sources: [
          {
            kind: "quran",
            work: "Coran — 33:4–5",
            ref: "Passages sur l’attribution des filiations (abolition de l’adoption légale).",
          },
          {
            kind: "sira",
            work: "Ibn Hishâm (Sîra)",
            ref: "Épisode de Zayd et son statut.",
          },
        ],
      },

      {
        id: "wk01_q08",
        type: "mcq",
        difficulty: 2,
        question:
          "Ibrâhîm (fils du Prophète ﷺ) est né de :",
        options: ["ʿÂishah", "Hafsah", "Mâriyah al-Qibtiyyah", "Zaynab bint Jahsh"],
        correctIndex: 2,
        explanation:
          "Ibrâhîm est né de Mâriyah al-Qibtiyyah (et son décès est mentionné avec l’épisode de l’éclipse).",
        sources: [
          {
            kind: "hadith",
            work: "Sahih al-Bukhari",
            ref: "Chapitres sur l’éclipse (Kusûf) : mention de la mort d’Ibrâhîm et clarification.",
          },
          {
            kind: "hadith",
            work: "Sahih Muslim",
            ref: "Chapitres sur l’éclipse (Kusûf) : même événement.",
          },
        ],
      },

      {
        id: "wk01_q09",
        type: "mcq",
        difficulty: 2,
        question:
          "“Les Mères des croyants” désigne :",
        options: [
          "Les filles du Prophète ﷺ",
          "Les épouses du Prophète ﷺ",
          "Les femmes des compagnons",
          "Les femmes de Quraysh",
        ],
        correctIndex: 1,
        explanation:
          "Le Coran désigne les épouses du Prophète ﷺ comme 'mères des croyants'.",
        sources: [
          {
            kind: "quran",
            work: "Coran — 33:6",
            ref: "« …et ses épouses sont leurs mères… » (voir tafsîr).",
          },
        ],
      },

      {
        id: "wk01_q10",
        type: "mcq",
        difficulty: 2,
        question:
          "Après une réponse correcte, qu’est-ce qui départage deux joueurs ayant le même score au Boss hebdo ?",
        options: [
          "Le nombre de revisites de leçons",
          "Le temps total (plus rapide gagne)",
          "Le nombre de connexions",
          "Le nombre d’amis",
        ],
        correctIndex: 1,
        explanation:
          "À score égal, on départage par le temps total (plus rapide est devant).",
        sources: [
          {
            kind: "app",
            work: "Règle de l’application",
            ref: "Boss hebdo : classement = score puis temps (départage).",
          },
        ],
      },
    ],
  },
};

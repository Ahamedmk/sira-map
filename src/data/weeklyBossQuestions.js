// src/data/weeklyBossQuestions.js

/**
 * Weekly Boss (local MVP)
 * - Multi semaines (WEEKS[])
 * - Auto selection selon weekStart (lundi)
 * - Chaque question inclut des sources vérifiables
 *
 * NOTE : certaines références de hadith varient selon éditions/apps,
 * donc on privilégie "ouvrage + chapitre/section" (plus stable).
 */

/** Week start Monday (YYYY-MM-DD) */
export function getWeekStartMondayISO(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = date.getUTCDay(); // 0=Sun
  const diff = day === 0 ? 6 : day - 1; // Monday start
  date.setUTCDate(date.getUTCDate() - diff);
  return date.toISOString().slice(0, 10);
}

/** Compare YYYY-MM-DD strings safely */
function cmpISO(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

/**
 * Return the boss config for current week.
 * - If exact week exists => return it
 * - Else return latest available week <= current
 * - Else fallback to first week in list
 */
export function getCurrentWeeklyBoss(now = new Date()) {
  const weekStart = getWeekStartMondayISO(now);

  // Exact match
  const exact = WEEKS.find((w) => w.weekStart === weekStart);
  if (exact) return exact;

  // Latest week <= current weekStart
  const sorted = [...WEEKS].sort((a, b) => cmpISO(a.weekStart, b.weekStart));
  let latest = null;
  for (const w of sorted) {
    if (cmpISO(w.weekStart, weekStart) <= 0) latest = w;
  }

  return latest || sorted[0];
}

/**
 * Return a boss config for a specific weekStart (YYYY-MM-DD).
 * Useful if you later want to let users "browse past bosses" (read-only).
 */
export function getWeeklyBossByWeekStart(weekStartISO) {
  const exact = WEEKS.find((w) => w.weekStart === weekStartISO);
  if (exact) return exact;

  const sorted = [...WEEKS].sort((a, b) => cmpISO(a.weekStart, b.weekStart));
  let latest = null;
  for (const w of sorted) {
    if (cmpISO(w.weekStart, weekStartISO) <= 0) latest = w;
  }
  return latest || sorted[0];
}

/* -----------------------------------------
   WEEK 1 — Famille
------------------------------------------ */
export const WEEK1_FAMILY = {
  weekStart: "2026-01-05",
  theme: "Famille du Prophète ﷺ — bases",
  difficulty: 1,
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
          work: "Ibn Hishâm — Sîra",
          ref: "Passages sur l’enfance : décès d’Âminah et prise en charge par le grand-père.",
        },
        {
          kind: "sira",
          work: "Ar-Raheeq al-Makhtum (Le Nectar Cacheté) — al-Mubarakpuri",
          ref: "Chapitre sur l’enfance : tutelle par ʿAbd al-Muttalib.",
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
        "La tutelle passe à son oncle Abû Tâlib, qui le protège durablement.",
      sources: [
        {
          kind: "sira",
          work: "Ibn Hishâm — Sîra",
          ref: "Passages sur la tutelle après ʿAbd al-Muttalib : Abû Tâlib.",
        },
        {
          kind: "sira",
          work: "Ibn Kathîr — Al-Bidâyah wa an-Nihâyah",
          ref: "Partie Sîra : enfance / protection par Abû Tâlib.",
        },
      ],
    },
    {
      id: "wk01_q03",
      type: "mcq",
      difficulty: 1,
      question: "Laquelle de ces personnes est l’épouse du Prophète ﷺ ?",
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
          ref: "Chapitre : mariage avec Khadîjah.",
        },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode du mariage." },
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
          ref: "Partie Sîra : famille et Ahl al-Bayt.",
        },
      ],
    },
    {
      id: "wk01_q05",
      type: "mcq",
      difficulty: 1,
      question: "Abû Lahab est :",
      options: [
        "Le père de Khadîjah",
        "Un oncle paternel du Prophète ﷺ",
        "Un cousin du Prophète ﷺ",
        "Un chef médinois",
      ],
      correctIndex: 1,
      explanation:
        "Abû Lahab est un oncle paternel du Prophète ﷺ (famille de Banû Hâshim).",
      sources: [
        {
          kind: "quran",
          work: "Coran — Sourate Al-Masad (111)",
          ref: "Associée à Abû Lahab dans la tradition (voir tafsîr).",
        },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Opposition d’Abû Lahab." },
      ],
    },
    {
      id: "wk01_q06",
      type: "mcq",
      difficulty: 1,
      question: "Quel est le lien entre Hamzah et le Prophète ﷺ ?",
      options: ["Cousin", "Oncle paternel", "Beau-frère", "Neveu"],
      correctIndex: 1,
      explanation:
        "Hamzah ibn ʿAbd al-Muttalib est un oncle paternel du Prophète ﷺ.",
      sources: [
        {
          kind: "bio",
          work: "Ouvrages de Sîra / biographies des compagnons",
          ref: "Hamzah ibn ʿAbd al-Muttalib : lien familial.",
        },
      ],
    },
    {
      id: "wk01_q07",
      type: "mcq",
      difficulty: 1,
      question: "Quelle est la tribu du Prophète ﷺ (au sens large) ?",
      options: ["Quraysh", "Thaqîf", "Aws", "Khazraj"],
      correctIndex: 0,
      explanation:
        "Le Prophète ﷺ appartient à Quraysh (et plus précisément aux Banû Hâshim).",
      sources: [
        {
          kind: "sira",
          work: "Ar-Raheeq al-Makhtum",
          ref: "Début de la Sîra : lignée et appartenance à Quraysh / Banû Hâshim.",
        },
        {
          kind: "sira",
          work: "Ibn Hishâm — Sîra",
          ref: "Généalogie et contexte mecquois (Quraysh).",
        },
      ],
    },
    {
      id: "wk01_q08",
      type: "mcq",
      difficulty: 2,
      question: "Qui est Zayd ibn Hârithah dans la Sîra ?",
      options: [
        "Un oncle du Prophète ﷺ",
        "Un fils biologique du Prophète ﷺ",
        "Un compagnon proche lié à l’adoption avant son abolition",
        "Un ennemi de Quraysh",
      ],
      correctIndex: 2,
      explanation:
        "Zayd fut appelé 'fils' avant que le Coran ne rétablisse les filiations réelles.",
      sources: [
        { kind: "quran", work: "Coran — 33:4–5", ref: "Règles sur la filiation." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode de Zayd." },
      ],
    },
    {
      id: "wk01_q09",
      type: "mcq",
      difficulty: 2,
      question: "Ibrâhîm (fils du Prophète ﷺ) est né de :",
      options: ["ʿÂishah", "Hafsah", "Mâriyah al-Qibtiyyah", "Zaynab bint Jahsh"],
      correctIndex: 2,
      explanation:
        "Ibrâhîm est né de Mâriyah ; l’épisode de l’éclipse lié à son décès est rapporté dans les Sahîh.",
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
      id: "wk01_q10",
      type: "mcq",
      difficulty: 1,
      question: "“Les Mères des croyants” désigne :",
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
        { kind: "quran", work: "Coran — 33:6", ref: "Désignation des épouses." },
      ],
    },
    {
      id: "wk01_q11",
      type: "mcq",
      difficulty: 1,
      question: "Le Prophète ﷺ fait partie de quel clan au sein de Quraysh ?",
      options: ["Banû Hâshim", "Banû Umayyah", "Banû Makhzûm", "Banû Zuhrah"],
      correctIndex: 0,
      explanation: "Il appartient aux Banû Hâshim, un clan de Quraysh.",
      sources: [
        {
          kind: "sira",
          work: "Ar-Raheeq al-Makhtum",
          ref: "Début de la Sîra : Quraysh et Banû Hâshim (généalogie).",
        },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Lignée / Banû Hâshim." },
      ],
    },
    {
      id: "wk01_q12",
      type: "mcq",
      difficulty: 2,
      question:
        "Dans la Sîra, qui est connue comme la nourrice (allaitement) du Prophète ﷺ dans le désert ?",
      options: [
        "Asma bint Abî Bakr",
        "Halimah as-Saʿdiyyah",
        "Umm Ayman",
        "Safiyyah bint ʿAbd al-Muttalib",
      ],
      correctIndex: 1,
      explanation:
        "Halimah as-Saʿdiyyah est mentionnée comme sa nourrice parmi les Banû Saʿd.",
      sources: [
        {
          kind: "sira",
          work: "Ibn Hishâm — Sîra",
          ref: "Épisode de l’allaitement chez les Banû Saʿd (Halimah).",
        },
        {
          kind: "sira",
          work: "Ar-Raheeq al-Makhtum",
          ref: "Chapitre enfance : Halimah et le séjour au désert.",
        },
      ],
    },
    {
      id: "wk01_q13",
      type: "mcq",
      difficulty: 2,
      question:
        "Quel compagnon est aussi le père de ʿÂishah رضي الله عنها ?",
      options: [
        "ʿUmar ibn al-Khattâb",
        "Abû Bakr as-Siddîq",
        "ʿUthmân ibn ʿAffân",
        "ʿAlî ibn Abî Tâlib",
      ],
      correctIndex: 1,
      explanation:
        "ʿÂishah رضي الله عنها est la fille d’Abû Bakr as-Siddîq.",
      sources: [
        {
          kind: "hadith",
          work: "Sahih al-Bukhari & Sahih Muslim",
          ref: "Nombreuses narrations de ʿÂishah (biographie).",
        },
        {
          kind: "bio",
          work: "Ouvrages de biographies (Siyar / Tabaqât)",
          ref: "Notice de ʿÂishah : fille d’Abû Bakr.",
        },
      ],
    },
    {
      id: "wk01_q14",
      type: "mcq",
      difficulty: 2,
      question:
        "Quel verset indique clairement que les épouses du Prophète ﷺ ont un statut particulier auprès des croyants ?",
      options: ["Coran 33:6", "Coran 2:255", "Coran 1:1", "Coran 112:1"],
      correctIndex: 0,
      explanation:
        "Le verset 33:6 mentionne le statut des épouses ('mères des croyants').",
      sources: [
        { kind: "quran", work: "Coran — 33:6", ref: "Statut des épouses." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Explication du passage." },
      ],
    },
    {
      id: "wk01_q15",
      type: "mcq",
      difficulty: 2,
      question:
        "Règle du Boss hebdo : en cas d’égalité de score, quel critère départage ?",
      options: [
        "Nombre d’amis",
        "Temps total (le plus rapide est devant)",
        "Nombre de connexions",
        "Nombre de mondes terminés",
      ],
      correctIndex: 1,
      explanation:
        "À score égal, on départage par le temps total (plus rapide = mieux classé).",
      sources: [
        {
          kind: "app",
          work: "Règle interne de l’application",
          ref: "Boss hebdo : classement = score DESC, puis time_ms ASC.",
        },
      ],
    },
  ],
};

/* -----------------------------------------
   WEEK 2 — Épouses
------------------------------------------ */
export const WEEK2_WIVES = {
  weekStart: "2026-01-12",
  theme: "Épouses du Prophète ﷺ — bases",
  difficulty: 1,
  timeLimitSec: 7 * 60,
  passPct: 80,
  questions: [
    {
      id: "wk02_q01",
      type: "mcq",
      difficulty: 1,
      question: "Quelle est la première épouse du Prophète ﷺ ?",
      options: ["ʿÂishah", "Khadîjah", "Hafsah", "Zaynab bint Jahsh"],
      correctIndex: 1,
      explanation: "Khadîjah bint Khuwaylid est la première épouse du Prophète ﷺ.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : mariage avec Khadîjah." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode du mariage." },
      ],
    },
    {
      id: "wk02_q02",
      type: "mcq",
      difficulty: 1,
      question: "Quel verset parle du statut des épouses du Prophète ﷺ comme “mères des croyants” ?",
      options: ["33:6", "2:255", "112:1", "1:1"],
      correctIndex: 0,
      explanation: "Le verset 33:6 mentionne notamment le statut des épouses.",
      sources: [
        { kind: "quran", work: "Coran — 33:6", ref: "Statut des épouses (mères des croyants)." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Explication du statut de 33:6." },
      ],
    },
    {
      id: "wk02_q03",
      type: "mcq",
      difficulty: 1,
      question: "Qui est la fille d’Abû Bakr et une épouse du Prophète ﷺ ?",
      options: ["Hafsah", "ʿÂishah", "Umm Salamah", "Maymûnah"],
      correctIndex: 1,
      explanation: "ʿÂishah رضي الله عنها est la fille d’Abû Bakr et épouse du Prophète ﷺ.",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari & Sahih Muslim", ref: "Nombreuses narrations de ʿÂishah (biographie)." },
        { kind: "bio", work: "Ouvrages de biographies (Siyar / Tabaqât)", ref: "Notice de ʿÂishah : fille d’Abû Bakr." },
      ],
    },
    {
      id: "wk02_q04",
      type: "mcq",
      difficulty: 1,
      question: "Quelle épouse du Prophète ﷺ est la fille de ʿUmar ibn al-Khattâb ?",
      options: ["Hafsah", "Zaynab bint Khuzaymah", "Safiyyah", "Juwayriyah"],
      correctIndex: 0,
      explanation: "Hafsah bint ʿUmar رضي الله عنها est la fille de ʿUmar.",
      sources: [{ kind: "bio", work: "Ouvrages de biographies (Siyar / Tabaqât)", ref: "Notice de Hafsah bint ʿUmar." }],
    },
    {
      id: "wk02_q05",
      type: "mcq",
      difficulty: 1,
      question: "Quelle épouse est connue pour avoir rapporté beaucoup de hadiths (parmi les plus prolifiques) ?",
      options: ["ʿÂishah", "Safiyyah", "Juwayriyah", "Rayhânah"],
      correctIndex: 0,
      explanation: "ʿÂishah رضي الله عنها fait partie des plus grands rapporteurs de hadiths.",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari & Sahih Muslim", ref: "Nombreux hadiths rapportés par ʿÂishah." },
        { kind: "bio", work: "Biographies des rapporteurs", ref: "Statut de ʿÂishah parmi les narrateurs." },
      ],
    },
    {
      id: "wk02_q06",
      type: "mcq",
      difficulty: 1,
      question: "Quel titre est couramment utilisé pour désigner les épouses du Prophète ﷺ ?",
      options: ["Ahl al-Bayt", "Ummahât al-Mu’minîn", "Ansâr", "Muhâjirûn"],
      correctIndex: 1,
      explanation: "Les épouses du Prophète ﷺ sont appelées “Ummahât al-Mu’minîn” (mères des croyants).",
      sources: [
        { kind: "quran", work: "Coran — 33:6", ref: "Fondement du statut." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Usage et sens du titre." },
      ],
    },
    {
      id: "wk02_q07",
      type: "mcq",
      difficulty: 2,
      question: "Zaynab bint Jahsh رضي الله عنها est associée à quel passage coranique (contexte de Sîra) ?",
      options: ["33:37", "2:183", "24:35", "112:1"],
      correctIndex: 0,
      explanation: "Son contexte est lié à l’épisode de Zayd et au verset 33:37 (voir tafsîr).",
      sources: [
        { kind: "quran", work: "Coran — 33:37", ref: "Contexte lié à Zayd et au mariage de Zaynab (voir tafsîr)." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode Zayd / Zaynab." },
      ],
    },
    {
      id: "wk02_q08",
      type: "mcq",
      difficulty: 2,
      question: "Safiyyah bint Huyayy رضي الله عنها est issue de quel milieu (selon les biographies) ?",
      options: ["Quraysh (La Mecque)", "Banû an-Nadîr (milieu juif)", "Aws", "Khazraj"],
      correctIndex: 1,
      explanation: "Safiyyah est issue d’un milieu juif (Banû an-Nadîr), mentionné dans les biographies et la Sîra.",
      sources: [
        { kind: "bio", work: "Biographies des épouses (Siyar / Tabaqât)", ref: "Notice de Safiyyah bint Huyayy." },
        { kind: "sira", work: "Ibn Kathîr — Al-Bidâyah wa an-Nihâyah", ref: "Épisodes liés à Safiyyah." },
      ],
    },
    {
      id: "wk02_q09",
      type: "mcq",
      difficulty: 2,
      question: "Juwayriyah bint al-Hârith رضي الله عنها est souvent associée à quel impact social dans la Sîra ?",
      options: [
        "Libérations et amélioration des relations avec son peuple",
        "Début de la révélation",
        "Émigration en Abyssinie",
        "Conquête de La Mecque"
      ],
      correctIndex: 0,
      explanation: "La Sîra mentionne un impact social (alliances, libérations) lié à son mariage.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Sections sur Juwayriyah et l’impact social." },
        { kind: "bio", work: "Ouvrages de biographies", ref: "Notice de Juwayriyah." },
      ],
    },
    {
      id: "wk02_q10",
      type: "mcq",
      difficulty: 1,
      question: "Umm Salamah رضي الله عنها est connue dans la Sîra pour :",
      options: ["Sa sagesse et ses conseils", "Être chef de Quraysh", "Être l’épouse de Abû Jahl", "Être la fille de Abû Lahab"],
      correctIndex: 0,
      explanation: "Umm Salamah est souvent mentionnée pour sa sagesse et ses avis.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Épisodes mentionnant Umm Salamah et sa sagesse." },
        { kind: "bio", work: "Biographies des épouses", ref: "Notice d’Umm Salamah." },
      ],
    },
    {
      id: "wk02_q11",
      type: "mcq",
      difficulty: 2,
      question: "Quel verset contient des directives spécifiques aux épouses du Prophète ﷺ (dans le passage 33:28–34) ?",
      options: ["33:33", "24:35", "5:3", "9:40"],
      correctIndex: 0,
      explanation: "Le verset 33:33 fait partie des directives adressées aux épouses (voir contexte).",
      sources: [
        { kind: "quran", work: "Coran — 33:33", ref: "Directives aux épouses (voir tafsîr du passage)." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Contexte du passage 33:28–34." },
      ],
    },
    {
      id: "wk02_q12",
      type: "mcq",
      difficulty: 2,
      question: "Quelle affirmation est correcte concernant Khadîjah رضي الله عنها ?",
      options: [
        "Elle a épousé le Prophète ﷺ après l’Hégire",
        "Elle est la première épouse et l’a soutenu au début de la révélation",
        "Elle était une épouse médinoise",
        "Elle est connue comme fille de ʿUmar"
      ],
      correctIndex: 1,
      explanation: "Khadîjah est la première épouse et un soutien majeur au début de la Révélation.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Début de la révélation + rôle de Khadîjah." },
        { kind: "hadith", work: "Sahih al-Bukhari / Sahih Muslim", ref: "Hadiths sur les débuts de la révélation (rôle de Khadîjah/Waraqah)." },
      ],
    },
    {
      id: "wk02_q13",
      type: "mcq",
      difficulty: 2,
      question: "Quel passage coranique évoque un choix proposé aux épouses (vie d’ici-bas ou Allah et Son Messager) ?",
      options: ["33:28–29", "2:183", "5:90", "12:31"],
      correctIndex: 0,
      explanation: "Les versets 33:28–29 évoquent ce choix (voir tafsîr).",
      sources: [
        { kind: "quran", work: "Coran — 33:28–29", ref: "Choix proposé aux épouses." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Contexte du passage 33:28–34." },
      ],
    },
    {
      id: "wk02_q14",
      type: "mcq",
      difficulty: 2,
      question: "Pourquoi l’app affiche une section “Sources” après chaque question ?",
      options: ["Pour faire joli", "Pour vérifier que la réponse n’est pas inventée", "Pour remplacer les explications", "Pour augmenter le temps de jeu"],
      correctIndex: 1,
      explanation: "L’utilisateur peut vérifier dans le Coran, les recueils de hadith, et la Sîra.",
      sources: [
        { kind: "app", work: "Règle interne de l’application", ref: "Boss hebdo : transparence (sources par question)." },
      ],
    },
    {
      id: "wk02_q15",
      type: "mcq",
      difficulty: 2,
      question: "Règle du Boss hebdo : en cas d’égalité de score, quel critère départage ?",
      options: ["Mondes terminés", "Temps total (plus rapide devant)", "Nombre d’amis", "Nombre de connexions"],
      correctIndex: 1,
      explanation: "Classement : score DESC, puis temps ASC (le plus rapide gagne à score égal).",
      sources: [
        { kind: "app", work: "Règle interne de l’application", ref: "Classement boss : score DESC, time_ms ASC." },
      ],
    },
  ],
};

/* -----------------------------------------
   WEEK 3 — Enfants
------------------------------------------ */
export const WEEK3_CHILDHOOD = {
  weekStart: "2026-01-19",
  theme: "Enfance & jeunesse du Prophète ﷺ — repères & chronologie",
  difficulty: 2,
  timeLimitSec: 7 * 60,
  passPct: 80,
  questions: [
    {
      id: "wk03_q01",
      type: "mcq",
      difficulty: 1,
      question: "Le Prophète ﷺ est né dans quelle ville ?",
      options: ["Médine", "La Mecque", "Taïf", "Jérusalem"],
      correctIndex: 1,
      explanation: "La Sîra situe la naissance du Prophète ﷺ à La Mecque.",
      sources: [
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Passages sur la naissance et le contexte mecquois." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre sur la naissance à La Mecque." },
      ],
    },

    {
      id: "wk03_q02",
      type: "mcq",
      difficulty: 1,
      question: "Le Prophète ﷺ est né orphelin de :",
      options: ["Père", "Mère", "Deux parents", "Oncle"],
      correctIndex: 0,
      explanation: "Son père ʿAbdullâh est décédé avant sa naissance (selon les récits de Sîra).",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre sur la naissance : décès du père avant la naissance." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Passages sur ʿAbdullâh et l’enfance." },
      ],
    },

    {
      id: "wk03_q03",
      type: "mcq",
      difficulty: 1,
      question: "Qui est la mère du Prophète ﷺ ?",
      options: ["Khadîjah bint Khuwaylid", "Âminah bint Wahb", "Hafsah bint ʿUmar", "Safiyyah bint Huyayy"],
      correctIndex: 1,
      explanation: "Sa mère est Âminah bint Wahb.",
      sources: [
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Généalogie et naissance : Âminah bint Wahb." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre sur la naissance : Âminah." },
      ],
    },

    {
      id: "wk03_q04",
      type: "mcq",
      difficulty: 1,
      question: "Qui est la nourrice (allaitement) la plus connue du Prophète ﷺ dans le désert ?",
      options: ["Umm Ayman", "Halimah as-Saʿdiyyah", "Asma bint Abî Bakr", "Zaynab bint Jahsh"],
      correctIndex: 1,
      explanation: "Halimah as-Saʿdiyyah est la nourrice mentionnée dans la Sîra chez les Banû Saʿd.",
      sources: [
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode Halimah et Banû Saʿd." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre enfance : Halimah." },
      ],
    },

    {
      id: "wk03_q05",
      type: "mcq",
      difficulty: 1,
      question: "Après le décès d’Âminah, qui prend d’abord en charge le Prophète ﷺ ?",
      options: ["Abû Tâlib", "ʿAbd al-Muttalib", "Hamzah", "Al-ʿAbbâs"],
      correctIndex: 1,
      explanation: "La tutelle revient à son grand-père ʿAbd al-Muttalib avant de passer à Abû Tâlib.",
      sources: [
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Tutelle après le décès d’Âminah." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre enfance : prise en charge par le grand-père." },
      ],
    },

    {
      id: "wk03_q06",
      type: "mcq",
      difficulty: 2,
      question: "Après la mort de ʿAbd al-Muttalib, qui protège et élève le Prophète ﷺ ?",
      options: ["Abû Tâlib", "Abû Lahab", "ʿUmar", "Abû Bakr"],
      correctIndex: 0,
      explanation: "Abû Tâlib devient son protecteur et le soutient à La Mecque.",
      sources: [
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Tutelle d’Abû Tâlib." },
        { kind: "sira", work: "Ibn Kathîr — Al-Bidâyah wa an-Nihâyah", ref: "Partie Sîra : protection par Abû Tâlib." },
      ],
    },

    {
      id: "wk03_q07",
      type: "mcq",
      difficulty: 2,
      question: "Dans la jeunesse du Prophète ﷺ, quel surnom lié à l’honnêteté lui est attribué dans la Sîra ?",
      options: ["Al-Fârûq", "As-Siddîq", "Al-Amîn", "Dhu n-Nûrayn"],
      correctIndex: 2,
      explanation: "La Sîra rapporte qu’il était connu comme “Al-Amîn” (le digne de confiance).",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Passages sur sa réputation (Al-Amîn)." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Éléments sur sa réputation avant la révélation." },
      ],
    },

    {
      id: "wk03_q08",
      type: "mcq",
      difficulty: 2,
      question: "Avant la prophétie, le Prophète ﷺ a travaillé notamment comme :",
      options: ["Forgeron", "Berger", "Médecin", "Scribe du gouverneur"],
      correctIndex: 1,
      explanation: "Des narrations indiquent que les prophètes ont gardé des troupeaux et que Muhammad ﷺ l’a fait aussi.",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Chapitres mentionnant que les prophètes ont gardé des moutons (et que le Prophète ﷺ l’a fait)." },
      ],
    },

    {
      id: "wk03_q09",
      type: "mcq",
      difficulty: 2,
      question: "Quel événement de sa jeunesse est souvent cité dans la Sîra comme preuve de son sens de la justice ?",
      options: [
        "La bataille de Badr",
        "Le Hilf al-Fudûl (pacte de vertu)",
        "Le traité de Hudaybiyyah",
        "La conquête de Khaybar"
      ],
      correctIndex: 1,
      explanation:
        "Le Hilf al-Fudûl est un pacte préislamique pour défendre les opprimés, apprécié dans les récits de Sîra.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Épisode du Hilf al-Fudûl." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Mention du pacte (Hilf al-Fudûl) dans le contexte mecquois." },
      ],
    },

    {
      id: "wk03_q10",
      type: "mcq",
      difficulty: 2,
      question: "Quel événement lié à la Kaʿbah est souvent raconté avant la prophétie (jeunesse) ?",
      options: [
        "La pose de la Pierre Noire (Al-Hajar al-Aswad) et l’arbitrage",
        "Le voyage à Taïf",
        "L’hégire vers Médine",
        "La bataille de Uhud"
      ],
      correctIndex: 0,
      explanation:
        "La Sîra rapporte l’épisode de la reconstruction de la Kaʿbah et la dispute sur la Pierre Noire résolue par son arbitrage.",
      sources: [
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode de la reconstruction de la Kaʿbah et la Pierre Noire." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Récit de l’arbitrage autour d’Al-Hajar al-Aswad." },
      ],
    },

    {
      id: "wk03_q11",
      type: "mcq",
      difficulty: 2,
      question: "Le Prophète ﷺ a épousé Khadîjah رضي الله عنها avant ou après la prophétie ?",
      options: ["Avant", "Après", "Pendant l’hégire", "Après Badr"],
      correctIndex: 0,
      explanation: "Le mariage avec Khadîjah a lieu avant le début de la Révélation.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre mariage : chronologie avant la révélation." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode du mariage (avant la prophétie)." },
      ],
    },

    {
      id: "wk03_q12",
      type: "mcq",
      difficulty: 2,
      question: "Quel est l’un des voyages célèbres de jeunesse souvent mentionné dans la Sîra ?",
      options: [
        "Voyage en Chine",
        "Voyage commercial vers le Shâm (Syrie) avec une caravane",
        "Voyage à Rome",
        "Voyage à l’Andalousie"
      ],
      correctIndex: 1,
      explanation:
        "La Sîra mentionne des voyages commerciaux vers le Shâm, notamment en contexte caravanier.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Passages sur les voyages commerciaux vers le Shâm." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Éléments sur la jeunesse et les voyages commerciaux." },
      ],
    },

    {
      id: "wk03_q13",
      type: "mcq",
      difficulty: 2,
      question: "Dans l’app, une question “chronologie” sert surtout à tester :",
      options: [
        "La chance",
        "La mémoire des repères et l’ordre des événements",
        "Le nombre d’amis",
        "Les préférences personnelles"
      ],
      correctIndex: 1,
      explanation: "Le but est de mémoriser des repères solides : qui / quand / avant / après.",
      sources: [
        { kind: "app", work: "Règle pédagogique de l’application", ref: "Boss hebdo : progression = repères + compréhension." },
      ],
    },

    {
      id: "wk03_q14",
      type: "mcq",
      difficulty: 2,
      question: "Pourquoi afficher des sources en Sîra est important ?",
      options: [
        "Pour faire joli",
        "Pour pouvoir vérifier la narration dans des ouvrages reconnus",
        "Pour rallonger le texte",
        "Pour éviter les quiz"
      ],
      correctIndex: 1,
      explanation: "L’utilisateur peut vérifier dans des ouvrages de Sîra/hadith et ne pas dépendre d’une “réponse inventée”.",
      sources: [
        { kind: "app", work: "Règle interne de l’application", ref: "Transparence : sources par question." },
      ],
    },

    {
      id: "wk03_q15",
      type: "mcq",
      difficulty: 2,
      question: "Règle du Boss hebdo : en cas d’égalité de score, quel critère départage ?",
      options: ["Nombre de mondes", "Temps total (plus rapide devant)", "Nombre d’amis", "Nombre de connexions"],
      correctIndex: 1,
      explanation: "Classement : score DESC puis temps ASC (le plus rapide gagne à score égal).",
      sources: [
        { kind: "app", work: "Règle interne de l’application", ref: "Classement boss : score DESC, time_ms ASC." },
      ],
    },
  ],
};

/* -----------------------------------------
   WEEK 4 — La révélation
------------------------------------------ */
export const WEEK4_REVELATION = {
  weekStart: "2026-01-26",
  theme: "Début de la révélation — Ghar Ḥirāʾ, Jibrîl et les premiers pas",
  difficulty: 2,
  timeLimitSec: 7 * 60,
  passPct: 80,
  questions: [
    {
      id: "wk04_q01",
      type: "mcq",
      difficulty: 1,
      question: "Où le Prophète ﷺ avait-il l’habitude de se retirer pour méditer avant la révélation ?",
      options: ["Grotte de Ḥirāʾ", "Grotte de Thawr", "Masjid al-Aqsa", "Mont Uhud"],
      correctIndex: 0,
      explanation: "Les sources de Sîra et les hadiths mentionnent le retrait au mont Ḥirāʾ (grotte) avant la révélation.",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Livre du Début de la Révélation (Badʾ al-Waḥy) : mention du retrait à Ḥirāʾ." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : préparations et retraite à Ḥirāʾ." },
      ],
    },

    {
      id: "wk04_q02",
      type: "mcq",
      difficulty: 1,
      question: "Qui est l’ange venu au Prophète ﷺ au début de la révélation ?",
      options: ["Mîkâ’îl", "Isrâfîl", "Jibrîl", "Malik (gardien de l’Enfer)"],
      correctIndex: 2,
      explanation: "Les récits du début de la révélation identifient l’ange comme Jibrîl (Gabriel).",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : récit de la première rencontre." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Récit des premiers événements de la révélation." },
      ],
    },

    {
      id: "wk04_q03",
      type: "mcq",
      difficulty: 2,
      question: "Quels sont les premiers versets révélés (selon la narration la plus connue du début de la révélation) ?",
      options: [
        "Sourate Al-Fâtiḥah",
        "Début de Sourate Al-ʿAlaq (96:1–5)",
        "Sourate Al-Ikhlâṣ",
        "Sourate Al-Kawthar"
      ],
      correctIndex: 1,
      explanation: "Le récit le plus connu relie le début à “Iqra’…” (96:1–5) — voir hadiths et tafsîr.",
      sources: [
        { kind: "quran", work: "Coran — 96:1–5 (Al-ʿAlaq)", ref: "Passage “Iqra’…” (début de la sourate)." },
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : mention de “Iqra’…” dans le récit." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Contexte des premiers versets révélés (selon les narrations)." },
      ],
    },

    {
      id: "wk04_q04",
      type: "mcq",
      difficulty: 1,
      question: "Après l’événement à Ḥirāʾ, vers qui le Prophète ﷺ se tourne en premier à la maison ?",
      options: ["Abû Bakr", "ʿUmar", "Khadîjah", "Abû Tâlib"],
      correctIndex: 2,
      explanation: "Les hadiths décrivent son retour bouleversé et le soutien immédiat de Khadîjah رضي الله عنها.",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : retour auprès de Khadîjah et soutien." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : réaction de Khadîjah et premiers pas." },
      ],
    },

    {
      id: "wk04_q05",
      type: "mcq",
      difficulty: 2,
      question: "Quel proche de Khadîjah, connaisseur des Écritures, est consulté après la première révélation ?",
      options: ["Waraqah ibn Nawfal", "Abû Lahab", "Abû Jahl", "Al-ʿAbbâs"],
      correctIndex: 0,
      explanation: "Le récit mentionne la consultation de Waraqah ibn Nawfal, lié à la connaissance des Écritures.",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : mention de Waraqah et de son avis." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Épisode de la consultation de Waraqah." },
      ],
    },

    {
  id: "wk04_order_01",
  type: "order",
  difficulty: 2,
  question: "Remets dans l’ordre : les étapes clés du début de la Révélation (version simplifiée).",
  items: [
    "Retraite du Prophète ﷺ à la grotte de Ḥirāʾ (méditation)",
    "Première rencontre avec Jibrîl et révélation de « Iqra’… »",
    "Retour bouleversé auprès de Khadîjah رضي الله عنها",
    "Consultation de Waraqah ibn Nawfal"
  ],
  // L’ordre correct correspond exactement à l’ordre des items ci-dessus :
  correctOrder: [0, 1, 2, 3],
  explanation:
    "Les récits les plus connus décrivent le retrait à Ḥirāʾ, la première rencontre et « Iqra’… », puis le retour chez Khadîjah et la consultation de Waraqah.",
  sources: [
    {
      kind: "hadith",
      work: "Sahih al-Bukhari",
      ref: "Livre du Début de la Révélation (Badʾ al-Waḥy) : retraite à Ḥirāʾ, « Iqra’… », retour chez Khadîjah, puis Waraqah."
    },
    {
      kind: "quran",
      work: "Coran — 96:1–5 (Al-ʿAlaq)",
      ref: "Passage « Iqra’… » associé au début de la révélation dans les narrations."
    },
    {
      kind: "sira",
      work: "Ar-Raheeq al-Makhtum (Le Nectar Cacheté) — al-Mubarakpuri",
      ref: "Chapitre sur le début de la révélation : récit et enchaînement des étapes."
    }
  ]
    },

    {
      id: "wk04_q06",
      type: "mcq",
      difficulty: 2,
      question: "Dans le récit de Bukhari, que dit Khadîjah pour rassurer le Prophète ﷺ (idée principale) ?",
      options: [
        "Tu vas devenir riche",
        "Allah ne t’abandonnera pas car tu aides les gens et dis la vérité",
        "Tu dois quitter La Mecque immédiatement",
        "Tu dois te taire et oublier"
      ],
      correctIndex: 1,
      explanation: "L’idée centrale : Allah ne le déshonorera pas car il a des qualités morales (liens familiaux, aide, vérité…).",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : paroles de Khadîjah pour rassurer." },
      ],
    },

    {
      id: "wk04_q07",
      type: "mcq",
      difficulty: 2,
      question: "Qu’annonce Waraqah au sujet de l’ange/expérience (dans le récit) ?",
      options: [
        "Ce n’est qu’un rêve",
        "C’est le même messager (ange) venu aux prophètes précédents",
        "C’est de la magie de Quraysh",
        "C’est une maladie"
      ],
      correctIndex: 1,
      explanation: "Waraqah relie l’événement à la continuité prophétique (ange/mission).",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : propos de Waraqah." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : l’avis de Waraqah." },
      ],
    },

    {
      id: "wk04_q08",
      type: "mcq",
      difficulty: 2,
      question: "Quel terme désigne la période de “pause” entre deux révélations, mentionnée dans la Sîra ?",
      options: ["Hijra", "Fatrah", "Bayʿah", "Isrâ’"],
      correctIndex: 1,
      explanation: "La “fatrah” est souvent mentionnée comme une interruption/pause au début de la révélation.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Passage sur la fatrah (pause de révélation)." },
        { kind: "sira", work: "Ibn Kathîr — Al-Bidâyah wa an-Nihâyah", ref: "Partie Sîra : mention de la fatrah." },
      ],
    },

    {
      id: "wk04_q09",
      type: "mcq",
      difficulty: 2,
      question: "Selon beaucoup de récits, quel appel suit la reprise de la révélation (idée) ?",
      options: [
        "Annonce publique immédiate sans préparation",
        "Appel à se lever, avertir et se purifier (idée de Q 74)",
        "Migration directe à Médine",
        "Construction de la mosquée"
      ],
      correctIndex: 1,
      explanation: "Le début de l’appel est associé à l’ordre de se lever et d’avertir (sens de Sourate Al-Muddaththir).",
      sources: [
        { kind: "quran", work: "Coran — 74:1–7 (Al-Muddaththir)", ref: "Ordres : se lever, avertir, se purifier (sens général)." },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Contexte du passage au début de la mission." },
      ],
    },

    {
      id: "wk04_q10",
      type: "mcq",
      difficulty: 2,
      question: "Quel verset résume l’ordre : “Lis / récite au nom de ton Seigneur” ?",
      options: ["96:1", "1:1", "2:255", "112:1"],
      correctIndex: 0,
      explanation: "Le verset 96:1 commence par l’ordre “Iqra’…” (lis/récite).",
      sources: [
        { kind: "quran", work: "Coran — 96:1", ref: "« Iqra’ bismi rabbika… »" },
        { kind: "tafsir", work: "Tafsîr classiques", ref: "Sens de “Iqra’…” et contexte." },
      ],
    },

    {
      id: "wk04_q11",
      type: "mcq",
      difficulty: 2,
      question: "Au tout début, l’appel à l’islam est d’abord :",
      options: [
        "Un appel discret (cercle proche)",
        "Un appel politique public au marché",
        "Un appel militaire",
        "Un appel réservé aux étrangers"
      ],
      correctIndex: 0,
      explanation: "La Sîra décrit d’abord une phase d’appel discret, concentré sur les proches et personnes de confiance.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : phase secrète de la daʿwah (appel)." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Début de l’appel et premiers croyants." },
      ],
    },

    {
      id: "wk04_q12",
      type: "mcq",
      difficulty: 2,
      question: "Parmi ces personnes, qui fait partie des tout premiers croyants (selon la Sîra) ?",
      options: ["Abû Bakr", "Abû Jahl", "Abû Lahab", "Umayyah ibn Khalaf"],
      correctIndex: 0,
      explanation: "La Sîra mentionne Abû Bakr parmi les premiers à croire et soutenir l’appel.",
      sources: [
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : premiers croyants et rôle d’Abû Bakr." },
        { kind: "sira", work: "Ibn Hishâm — Sîra", ref: "Début de la daʿwah et premières conversions." },
      ],
    },

    {
      id: "wk04_q13",
      type: "mcq",
      difficulty: 2,
      question: "Pourquoi afficher des sources dans cette semaine “Révélation” est essentiel ?",
      options: [
        "Parce que ça rend le quiz plus long",
        "Parce que le sujet est sensible et doit être vérifiable",
        "Parce que ça remplace les explications",
        "Pour augmenter le score"
      ],
      correctIndex: 1,
      explanation: "Le début de la révélation est central : l’utilisateur doit pouvoir vérifier dans hadiths/Sîra/Coran.",
      sources: [
        { kind: "app", work: "Règle interne de l’application", ref: "Boss hebdo : transparence et vérification (sources par question)." },
      ],
    },

    {
  id: "wk04_order_02",
  type: "order",
  difficulty: 3,
  question: "Remets dans l’ordre : les grandes étapes du lancement de la mission prophétique à La Mecque.",
  items: [
    "Phase d’appel discret (cercle proche et personnes de confiance)",
    "Premiers croyants (Khadîjah, Abû Bakr, ʿAlî, Zayd…)",
    "Commandement : « Lève-toi et avertis » (Sourate Al-Muddaththir)",
    "Début de l’opposition ouverte de Quraysh"
  ],
  correctOrder: [0, 1, 2, 3],
  explanation:
    "Après la révélation, l’appel commence discrètement, puis les premiers croyants apparaissent. Ensuite vient l’ordre d’avertir publiquement (74), ce qui entraîne l’opposition de Quraysh.",
  sources: [
    {
      kind: "quran",
      work: "Coran — 74:1–7 (Al-Muddaththir)",
      ref: "« Ô toi qui es enveloppé ! Lève-toi et avertis… » — commandement du passage à l’appel."
    },
    {
      kind: "sira",
      work: "Ar-Raheeq al-Makhtum (Le Nectar Cacheté) — al-Mubarakpuri",
      ref: "Chapitre : phase secrète de l’appel, premiers croyants, puis proclamation."
    },
    {
      kind: "sira",
      work: "Ibn Hishâm — Sîra",
      ref: "Récits de la daʿwah discrète puis de l’opposition de Quraysh."
    },
    {
      kind: "tafsir",
      work: "Tafsîr Ibn Kathîr",
      ref: "Contexte de la sourate Al-Muddaththir et début de l’appel public."
    }
  ]
    },
    
    {
      id: "wk04_q14",
      type: "mcq",
      difficulty: 2,
      question: "Dans les sources, quelle est l’idée clé du rôle de Khadîjah au début de la mission ?",
      options: [
        "Elle s’oppose au Prophète ﷺ",
        "Elle le soutient et le rassure, puis l’aide à chercher conseil",
        "Elle part immédiatement en Médine",
        "Elle nie la révélation"
      ],
      correctIndex: 1,
      explanation: "Les hadiths et la Sîra soulignent son soutien, son apaisement, et la recherche de conseil (Waraqah).",
      sources: [
        { kind: "hadith", work: "Sahih al-Bukhari", ref: "Badʾ al-Waḥy : soutien de Khadîjah et consultation de Waraqah." },
        { kind: "sira", work: "Ar-Raheeq al-Makhtum", ref: "Chapitre : rôle de Khadîjah au début." },
      ],
    },

    {
      id: "wk04_q15",
      type: "mcq",
      difficulty: 2,
      question: "Règle du Boss hebdo : en cas d’égalité de score, quel critère départage ?",
      options: ["Nombre de mondes", "Temps total (plus rapide devant)", "Nombre d’amis", "Nombre de connexions"],
      correctIndex: 1,
      explanation: "Classement : score DESC puis temps ASC (le plus rapide gagne à score égal).",
      sources: [
        { kind: "app", work: "Règle interne de l’application", ref: "Classement boss : score DESC, time_ms ASC." },
      ],
    },
  ],
};



/* -----------------------------------------
   Weeks Registry
------------------------------------------ */
export const WEEKS = [WEEK1_FAMILY, WEEK2_WIVES, WEEK3_CHILDHOOD,  WEEK4_REVELATION];

/** Convenience: current boss (auto) */
export const WEEKLY_BOSS = {
  version: 1,
  get current() {
    return getCurrentWeeklyBoss(new Date());
  },
};

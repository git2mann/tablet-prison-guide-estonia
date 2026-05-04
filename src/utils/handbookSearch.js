import handbookContent from '../constants/handbookContent.json';

const SECTION_TITLES = {
  'arrival.search':       { ET: '1.1 Otsing ja dokumendid',        EN: '1.1 Search & Documents' },
  'arrival.health':       { ET: '1.2 Tervisekontroll',              EN: '1.2 Health Check' },
  'arrival.needs':        { ET: '1.2 Esmavajadused',                EN: '1.2 Basic Needs' },
  'daily.schedule':       { ET: '2.1 Päevakava ja loendus',         EN: '2.1 Schedule & Count' },
  'daily.account':        { ET: '2.2 Isikuarve',                    EN: '2.2 Personal Account' },
  'daily.phone':          { ET: '2.3 Telefonikõned',                EN: '2.3 Phone Calls' },
  'daily.eating':         { ET: '2.4 Söömine ja toit',              EN: '2.4 Eating & Food' },
  'daily.eshop':          { ET: '2.5 E-pood',                       EN: '2.5 E-Shop' },
  'daily.living':         { ET: '2.6 Eluruumid',                    EN: '2.6 Living Quarters' },
  'daily.hygiene':        { ET: '2.7 Hügieen ja riietus',           EN: '2.7 Hygiene & Clothing' },
  'daily.laundry':        { ET: '2.8 Pesemine ja remont',           EN: '2.8 Washing & Repair' },
  'daily.meetings':       { ET: '2.9 Kohtumised lähedastega',       EN: '2.9 Visits from Loved Ones' },
  'daily.letters':        { ET: '2.10 Kirjavahetus',                EN: '2.10 Correspondence' },
  'daily.movement':       { ET: '2.11 Vanglas liikumine',           EN: '2.11 Movement in Prison' },
  'daily.leisure':        { ET: '2.12 Vaba aeg ja sport',           EN: '2.12 Leisure & Sports' },
  'rules.process':        { ET: '3.1 Rikkumise menetlus',           EN: '3.1 Violation Process' },
  'rules.punishments':    { ET: '3.2 Karistused',                   EN: '3.2 Punishments' },
  'rules.solitary':       { ET: '3.3 Kartser',                      EN: '3.3 Solitary Confinement' },
  'health.services':      { ET: '4.1 Tervishoiuteenused',           EN: '4.1 Medical Services' },
  'health.doctor':        { ET: '4.2 Arstile pääsemine',            EN: '4.2 Seeing a Doctor' },
  'health.meds':          { ET: '4.3 Ravimite reeglid',             EN: '4.3 Medication Rules' },
  'health.psych':         { ET: '4.4 Psühholoog',                   EN: '4.4 Psychologist' },
  'health.chaplain':      { ET: '4.5 Kaplan',                       EN: '4.5 Chaplain' },
  'activities.risk':      { ET: '5.1 Riskihindamine ja ITK',        EN: '5.1 Risk Assessment & ITK' },
  'activities.programs':  { ET: '5.2 Sotsiaalprogrammid',           EN: '5.2 Social Programs' },
  'activities.learn':     { ET: '5.3 Õppimine',                     EN: '5.3 Education' },
  'activities.work':      { ET: '5.4 Töötamine',                    EN: '5.4 Working' },
  'release.open':         { ET: '6.1 Avavangla',                    EN: '6.1 Open Prison' },
  'release.etev':         { ET: '6.2 Elektrooniline valve',         EN: '6.2 Electronic Monitoring' },
  'release.tev':          { ET: '6.3 Kriminaalhooldus (TEV)',       EN: '6.3 Probation (TEV)' },
  'staff.roles':          { ET: '8. KES-ON-KES — Vangla töötajad ja nende ülesanded', EN: '8. WHO\'S WHO — Prison Staff and Their Roles' },
};

// Common words that carry no topical signal and should not affect scoring
const STOP_WORDS = new Set([
  // English
  'the','and','for','are','but','not','this','that','from','with','have','has','had',
  'its','you','your','they','their','them','about','into','than','then','also','been',
  'were','was','will','can','may','should','would','could','shall','might','does','did',
  'how','what','when','where','who','which','why','there','here','just','very','more',
  'all','any','some','each','one','two','get','make','take','give','come','know',
  'want','need','use','like','able','going','being','having','doing','can\'t','don\'t',
  // Estonian
  'kas','mis','kus','kes','kui','mida','miks','kuidas','millal','milline',
  'see','seda','need','neid','selle','nende','oma','sinu','minu','tema','meie',
  'teie','neil','sellel','sinul','minul','temale','meile','teile','neile',
  'ja','või','ning','aga','kuid','ent','vaid','siis','nii','ka','veel',
  'juba','ainult','just','kohe','alles','väga','kõik','iga','mõni','üks','kaks',
  'saab','saad','saan','saame','saate','saavad','olema','oled','olen','oleme',
  'olete','on','oli','pole','seda','selle','seal','siia','seal','sealt',
  'tuleb','tulema','viib','viima','läheb','minema','tulema',
]);

// Tokenise text into lowercase words, stripping punctuation
function tokenise(text, removeStopWords = false) {
  const words = text
    .toLowerCase()
    .replace(/[«»„""\-–—•\t]/g, ' ')
    .split(/\s+/)
    .map(w => w.replace(/[.,!?;:()'"\[\]{}]/g, ''))
    .filter(w => w.length > 2);
  return removeStopWords ? words.filter(w => !STOP_WORDS.has(w)) : words;
}

// Build per-language inverted indices: lang → { word → Set<sectionIndex> }
const tokensByLang = { ET: [], EN: [] };
const indexByLang  = { ET: {}, EN: {} };

handbookContent.forEach((section, i) => {
  for (const lang of ['ET', 'EN']) {
    const words = tokenise(section[lang] ?? '');
    tokensByLang[lang][i] = words;
    words.forEach(w => {
      if (!indexByLang[lang][w]) indexByLang[lang][w] = new Set();
      indexByLang[lang][w].add(i);
    });
  }
});

// English: only match exact word + common inflectional suffixes.
// Avoids false positives like "person" → "personal", "call" → "called" ≠ "calling" etc.
const EN_SUFFIXES = ['s', 'es', 'ed', 'ing', 'er', 'ers', 'ly', 'ment', 'tion', 'ions', 'ness'];

function looseMatchEN(w, qw) {
  if (w === qw) return true;
  for (const sfx of EN_SUFFIXES) {
    if (w === qw + sfx || qw === w + sfx) return true;
  }
  return false;
}

// Estonian: prefix matching handles agglutinative case inflections.
// "töö" (3 chars) correctly matches "töötamine", "töökoht", "tööle" etc.
function looseMatchET(w, qw) {
  if (w === qw) return true;
  const [shorter, longer] = w.length <= qw.length ? [w, qw] : [qw, w];
  return shorter.length >= 3 && longer.startsWith(shorter);
}

function looseMatch(w, qw, lang) {
  return lang === 'ET' ? looseMatchET(w, qw) : looseMatchEN(w, qw);
}

// Intent-based additive boosts for queries whose meaning is contextual rather than
// topical — e.g. "I am new here" leaves only "new" after stop-word removal, which
// scores higher in activities.risk than in the arrival sections. We detect arrival
// intent from the raw (pre-filter) query and add a flat score to arrival sections.
const INTENT_BOOSTS = [
  {
    testEN: words =>
      words.has('arrived') || words.has('arriving') || words.has('arrival') ||
      (words.has('new') && (words.has('here') || words.has('first') || words.has('just') || words.has('today') || words.has('start') || words.has('prison'))),
    testET: words =>
      [...words].some(w => w.startsWith('saabun') || w.startsWith('saabus')) ||
      ([...words].some(w => w.startsWith('uus') || w.startsWith('uue') || w.startsWith('uut')) &&
       (words.has('siin') || [...words].some(w => w.startsWith('esim')))),
    sections: new Set(['arrival.search', 'arrival.health', 'arrival.needs']),
    addScore: 0.03,
  },
  {
    // "contact person/officer", "who works here", "guard", "staff", "chaplain" → staff guide
    testEN: words =>
      (words.has('contact') && (words.has('person') || words.has('officer') || words.has('who'))) ||
      words.has('guard') || words.has('chaplain') || words.has('psychologist') ||
      (words.has('staff') && !words.has('medical')) ||
      words.has('warden') || words.has('inspector'),
    testET: words =>
      (words.has('kontaktisik') || [...words].some(w => w.startsWith('kontaktisik'))) ||
      words.has('valvur') || words.has('kaplan') || words.has('psühholoog') ||
      ([...words].some(w => w.startsWith('kontakt')) && words.has('isik')),
    sections: new Set(['staff.roles']),
    addScore: 0.04,
  },
  {
    // "video call" / "video visit" → meetings section, not phone calls
    testEN: words => words.has('video'),
    testET: words => [...words].some(w => w.startsWith('video')),
    sections: new Set(['daily.meetings']),
    addScore: 0.05,
  },
  {
    // "wear", "clothes", "clothing", "uniform", "dress" → hygiene & clothing section
    testEN: words =>
      words.has('wear') || words.has('wearing') || words.has('wore') ||
      words.has('clothes') || words.has('clothing') || words.has('dress') ||
      words.has('outfit') || words.has('uniform') || words.has('uniform'),
    testET: words =>
      [...words].some(w =>
        w.startsWith('riiet') || w.startsWith('riietu') ||
        w.startsWith('kanda') || w.startsWith('kandm') || w.startsWith('kant')
      ),
    sections: new Set(['daily.hygiene']),
    addScore: 0.05,
  },
];

// TF-IDF-like score for one section in a given language
function scoreSection(lang, sectionIdx, queryWords) {
  const sectionWords = tokensByLang[lang][sectionIdx];
  const total = sectionWords.length;
  if (total === 0) return 0;
  let s = 0;
  for (const qw of queryWords) {
    const tf = sectionWords.filter(w => looseMatch(w, qw, lang)).length;
    const df = indexByLang[lang][qw]?.size ?? 1;
    s += (tf / total) * Math.log(handbookContent.length / df + 1);
  }
  return s;
}

// Strip chapter/section heading lines from the start of a paragraph.
// Content from PDFs often begins with several heading lines before the body text.
// Loops until no more leading heading patterns are found.
function stripHeadingLines(text) {
  let result = text;
  let prev;
  do {
    prev = result;
    result = result
      .replace(/^\d+[\.\d]*\.?\s+[^\n]{3,150}\n/, '') // "8. WHO'S WHO..." / "1.2 ESMAVAJADUSED..."
      .replace(/^\d+\n/, '')                            // bare page numbers like "15\n"
      .replace(/^[A-ZÄÖÜÕ][A-ZÄÖÜÕ\s\d\.—–\-']{8,}\n/, '') // all-caps heading lines
      .trim();
  } while (result !== prev);
  return result;
}

// Extract the best-matching paragraph for display
function extractSnippet(text, queryWords, lang, maxLen = 400) {
  const paragraphs = text.split(/\n{2,}/).filter(p => p.trim().length > 30);
  let bestPara = paragraphs[0] ?? text;
  let bestScore = 0;

  for (const para of paragraphs) {
    const paraWords = tokenise(para);
    let s = 0;
    for (const qw of queryWords) {
      s += paraWords.filter(w => looseMatch(w, qw, lang)).length;
    }
    if (s > bestScore) {
      bestScore = s;
      bestPara = para;
    }
  }

  const cleaned = stripHeadingLines(bestPara).replace(/\n/g, ' ').replace(/\s{2,}/g, ' ').trim();
  return cleaned.length > maxLen ? cleaned.slice(0, maxLen).replace(/\s\S+$/, '') + '…' : cleaned;
}

/**
 * Search handbook content for a query in the given language.
 * @param {string} query
 * @param {'ET'|'EN'} lang
 * @param {number} topN
 * @returns {{ id, titleET, titleEN, snippet }[]}
 */
export function searchHandbook(query, lang = 'ET', topN = 2) {
  let queryWords = tokenise(query, true);
  if (queryWords.length === 0) queryWords = tokenise(query);
  if (queryWords.length === 0) return [];

  const rawWordSet = new Set(tokenise(query));

  function runSearch(searchLang) {
    return handbookContent
      .map((section, i) => {
        let score = scoreSection(searchLang, i, queryWords);
        for (const boost of INTENT_BOOSTS) {
          const triggered = searchLang === 'ET' ? boost.testET(rawWordSet) : boost.testEN(rawWordSet);
          if (triggered && boost.sections.has(section.id)) score += boost.addScore;
        }
        return { id: section.id, score, text: section[lang] ?? '' };
      })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);
  }

  // Search primary language first; fall back to the other if the query language differs from the UI language
  let results = runSearch(lang);
  if (results.length === 0) {
    results = runSearch(lang === 'ET' ? 'EN' : 'ET');
  }

  return results.map(r => ({
    id: r.id,
    titleET: SECTION_TITLES[r.id]?.ET ?? r.id,
    titleEN: SECTION_TITLES[r.id]?.EN ?? r.id,
    snippet: extractSnippet(r.text, queryWords, lang),
  }));
}

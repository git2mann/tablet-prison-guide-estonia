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

const SYNONYMS = {
  ET: {
    'raha': 'isikuarve',
    'kool': 'õppimine',
    'haridus': 'õppimine',
    'töö': 'VEK töötamine',
    'karistus': 'rikkumine kartser',
    'pakk': 'saadetised esemed',
    'riided': 'hügieen riietus',
    'söök': 'toit söömine',
    'arst': 'tervis meditsiin',
    'mure': 'abi psühholoog',
  },
  EN: {
    'money': 'personal account',
    'school': 'education study',
    'work': 'working job',
    'punishment': 'violation solitary',
    'package': 'shipment items',
    'clothes': 'hygiene clothing',
    'food': 'eating diet',
    'doctor': 'health medical',
    'problem': 'help psychologist',
  }
};

// Common words that carry no topical signal
const STOP_WORDS = new Set([
  // English
  'the','and','for','are','but','not','this','that','from','with','have','has','had',
  'its','you','your','they','their','them','about','into','than','then','also','been',
  // Estonian
  'kas','mis','kus','kes','kui','mida','miks','kuidas','millal','milline',
  'see','seda','need','neid','selle','nende','oma','sinu','minu','tema','meie',
]);

function tokenise(text) {
  return text.toLowerCase()
    .replace(/[«»„""\-–—•\t]/g, ' ')
    .split(/\s+/)
    .map(w => w.replace(/[.,!?;:()'"\[\]{}]/g, ''))
    .filter(w => w.length > 2);
}

function stripHeadingLines(text) {
  let result = text;
  let prev;
  do {
    prev = result;
    result = result
      .replace(/^\d+[\.\d]*\.?\s+[^\n]{3,150}\n/, '')
      .replace(/^\d+\n/, '')
      .replace(/^[A-ZÄÖÜÕ][A-ZÄÖÜÕ\s\d\.—–\-']{8,}\n/, '')
      .replace(/^[A-ZÄÖÜÕ][a-zA-ZÄÖÜÕäöüõ\s]{2,50}\n/, '')
      .trim();
  } while (result !== prev);
  return result;
}

function extractSnippet(text, queryWords, lang, maxLen = 400) {
  const paragraphs = text.split(/\n{2,}/).filter(p => p.trim().length > 30);
  let bestPara = paragraphs[0] ?? text;
  let bestScore = 0;

  for (const para of paragraphs) {
    const paraWords = tokenise(para);
    let s = 0;
    for (const qw of queryWords) {
      if (paraWords.some(pw => pw.includes(qw) || qw.includes(pw))) s++;
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
 * Custom Lightweight Fuzzy Search
 */
function scoreSection(section, query, lang) {
  const content = (section[lang] || section.ET || '').toLowerCase();
  const tokens = tokenise(query);
  if (tokens.length === 0) return 0;

  let score = 0;
  for (const token of tokens) {
    // Exact match boost
    if (content.includes(token)) score += 1;
    // Prefix match (fuzzy-ish)
    else if (content.split(/\s+/).some(word => word.startsWith(token))) score += 0.5;
    // ID match (high priority)
    if (section.id.toLowerCase().includes(token)) score += 2;
  }
  
  return score / tokens.length;
}

export function searchHandbook(query, lang = 'ET', topN = 2) {
  if (!query.trim()) return [];

  const rawWords = tokenise(query);
  const cleanWords = rawWords.filter(w => !STOP_WORDS.has(w));
  const searchTerm = cleanWords.length > 0 ? cleanWords.join(' ') : query;

  // Check synonyms
  let expandedQuery = searchTerm;
  let suggestedTerm = null;
  const langSyns = SYNONYMS[lang];
  
  for (const [word, syn] of Object.entries(langSyns)) {
    if (searchTerm.includes(word)) {
      expandedQuery = searchTerm + ' ' + syn;
      suggestedTerm = syn.split(' ')[0];
      break;
    }
  }

  const results = handbookContent
    .map(section => ({
      section,
      score: scoreSection(section, expandedQuery, lang)
    }))
    .filter(r => r.score > 0.1)
    .sort((a, b) => b.score - a.score);

  return results.slice(0, topN).map(r => ({
    id: r.section.id,
    titleET: SECTION_TITLES[r.section.id]?.ET ?? r.section.id,
    titleEN: SECTION_TITLES[r.section.id]?.EN ?? r.section.id,
    snippet: extractSnippet(r.section[lang] ?? r.section.ET ?? '', cleanWords, lang),
    suggestion: suggestedTerm ? suggestedTerm : null
  }));
}

import handbookContent from '../constants/handbookContent.json';

const SECTION_TITLES = {
  'arrival.search':       { ET: '1.1 Otsing ja dokumendid',        EN: '1.1 Search & Documents' },
  'arrival.health':       { ET: '1.2 Tervisekontroll',              EN: '1.2 Health Check' },
  'arrival.needs':        { ET: '1.3 Esmavajadused',                EN: '1.3 Basic Needs' },
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
  'act.risk':             { ET: '5.1 Riskihindamine ja ITK',        EN: '5.1 Risk Assessment & ITK' },
  'act.programs':         { ET: '5.2 Sotsiaalprogrammid',           EN: '5.2 Social Programs' },
  'act.learn':            { ET: '5.3 Õppimine',                     EN: '5.3 Education' },
  'act.work':             { ET: '5.4 Töötamine',                    EN: '5.4 Working' },
  'rel.open':             { ET: '6.1 Avavangla',                    EN: '6.1 Open Prison' },
  'rel.etev':             { ET: '6.2 Elektrooniline valve',         EN: '6.2 Electronic Monitoring' },
  'rel.tev':              { ET: '6.3 Kriminaalhooldus (TEV)',       EN: '6.3 Probation (TEV)' },
  'prep.steps':           { ET: '7.1 Olulised sammud vabanemiseks', EN: '7.1 Important Steps for Release' },
  'staff.roles':          { ET: '8. KES-ON-KES — Vangla töötajad ja nende ülesanded', EN: '8. WHO\'S WHO — Prison Staff and Their Roles' },
  'journey.overview':     { ET: '9. Kinnipeetava teekond',           EN: '9. Inmate Journey' },
};

// Map search IDs to actual Router/Page IDs (only for many-to-one mappings)
const SEARCH_ID_TO_PAGE_ID = {
  'arrival.search': 'arrival.procedures',
  'arrival.health': 'arrival.procedures',
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

/**
 * Canonical-topic overrides — when a query is "about" one of these topics,
 * route it to the chapter or tool page that actually *defines* / *delivers*
 * the topic, regardless of how many incidental mentions exist elsewhere.
 *
 * Triggers are lowercase substrings matched against the cleaned query.
 * - `id` is the route id (handbook section id, or special page id like
 *   'calculator' / 'assistant' / 'glossary' / 'faq').
 * - For tool pages, set `isTool: true` and provide `title` + `snippet` so the
 *   search result can be rendered without a matching entry in handbookContent.
 */
const TOPIC_OVERRIDES = [
  // Staff roles — all live in the "Who's Who" chapter
  { triggers: ['contact person', 'contact officer', 'kontaktisik', 'inspektor', 'inspector', 'case manager', 'juhtumikorraldaja', 'guard', 'valvur', 'social worker', 'sotsiaaltöötaja'], id: 'staff.roles' },
  // Probation officer is also defined in staff.roles (plus release.tev for the supervision flow)
  { triggers: ['probation officer', 'kriminaalhooldusametnik'], id: 'staff.roles' },

  // Tool pages — not in handbookContent.json, surfaced as direct shortcuts
  {
    triggers: ['calculator', 'kalkulaator', 'release fund', 'vabanemisfond', 'fund split', 'isikuarve calculator'],
    id: 'calculator',
    isTool: true,
    title: { ET: 'Kalkulaator', EN: 'Calculator' },
    snippet: {
      ET: 'Vabanemisfondi kalkulaator — arvuta, kuidas Sinu isikuarvele laekuv raha jaotub vabanemisfondi, võlgade tasumiseks ja Sinu kasutuseks.',
      EN: 'Release fund calculator — see how money credited to your personal account splits between the release fund, debt repayment, and your personal use.'
    }
  },
  {
    triggers: ['glossary', 'sõnastik', 'sonastik', 'mõisted', 'moisted', 'terminid'],
    id: 'glossary',
    isTool: true,
    title: { ET: 'Sõnastik', EN: 'Glossary' },
    snippet: {
      ET: 'Sõnastik — otsi vanglas kasutatavate mõistete ja lühendite selgitusi (nt ITK, VEK, kontaktisik, vabanemisfond).',
      EN: 'Glossary — look up explanations of prison terms and abbreviations (e.g. ITK, VEK, contact officer, release fund).'
    }
  },
  {
    triggers: ['faq', 'kkk', 'frequently asked', 'korduma kippuvad'],
    id: 'faq',
    isTool: true,
    title: { ET: 'KKK', EN: 'FAQ' },
    snippet: {
      ET: 'Korduma kippuvad küsimused — kiired vastused kõige sagedasematele vanglaeluga seotud küsimustele.',
      EN: 'Frequently asked questions — quick answers to the most common questions about prison life.'
    }
  },
  {
    triggers: ['assistant', 'abiline', 'help me', 'aita mind', 'guided help', 'juhendaja'],
    id: 'assistant',
    isTool: true,
    title: { ET: 'Abiline', EN: 'Assistant' },
    snippet: {
      ET: 'Abiline — sammhaaval juhend levinud taotluste jaoks: tööle kandideerimine, lähedastega kohtumine, õppimine ja muu.',
      EN: 'Assistant — a step-by-step guide for common requests: applying for work, family visits, studying, and more.'
    }
  },
];

function findTopicOverride(query) {
  const q = query.toLowerCase();
  for (const entry of TOPIC_OVERRIDES) {
    if (entry.triggers.some(t => q.includes(t))) return entry;
  }
  return null;
}

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

  // Canonical-topic routing — force certain queries to their defining chapter
  // or tool page. When an override fires, return ONLY that result so irrelevant
  // runner-ups are suppressed.
  const override = findTopicOverride(searchTerm);
  if (override) {
    // Tool pages (calculator, glossary, faq, assistant) — not in handbookContent
    if (override.isTool) {
      return [{
        id: override.id,
        titleET: override.title.ET,
        titleEN: override.title.EN,
        snippet: override.snippet[lang] ?? override.snippet.EN,
        suggestion: suggestedTerm ? suggestedTerm : null
      }];
    }
    // Handbook section override
    const section = handbookContent.find(s => s.id === override.id);
    if (section) {
      return [{
        id: section.id,
        titleET: SECTION_TITLES[section.id]?.ET ?? section.id,
        titleEN: SECTION_TITLES[section.id]?.EN ?? section.id,
        snippet: extractSnippet(section[lang] ?? section.ET ?? '', cleanWords, lang),
        suggestion: suggestedTerm ? suggestedTerm : null
      }];
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
    id: SEARCH_ID_TO_PAGE_ID[r.section.id] || r.section.id,
    titleET: SECTION_TITLES[r.section.id]?.ET ?? r.section.id,
    titleEN: SECTION_TITLES[r.section.id]?.EN ?? r.section.id,
    snippet: extractSnippet(r.section[lang] ?? r.section.ET ?? '', cleanWords, lang),
    suggestion: suggestedTerm ? suggestedTerm : null
  }));
}

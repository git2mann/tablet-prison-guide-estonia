/**
 * Hazard detection for handbook assistant queries.
 *
 * Some questions should never be answered with handbook excerpts — they ask
 * for help doing something that endangers the detainee, staff, or the
 * institution (escape attempts, violence, smuggling). For these, we return a
 * firm but supportive refusal and point the user toward legitimate channels.
 *
 * Categories:
 *  - escape    : escape attempts / circumventing custody
 *  - violence  : attacks on staff or other detainees, weapon-making
 *  - contraband: smuggling, hiding prohibited items
 *  - selfharm  : suicidal / self-injury queries — treated supportively, not as a refusal
 */

const HAZARD_PATTERNS = [
  {
    category: 'escape',
    triggers: [
      // EN
      'escape', 'break out', 'breakout', 'jailbreak', 'climb the fence',
      'climb fence', 'cut the fence', 'cut fence', 'over the wall', 'over wall',
      'run away from prison', 'flee prison', 'sneak out', 'get out of prison',
      'leave without permission', 'bust out',
      // ET
      'põgenema', 'pogenema', 'põgenemine', 'pogenemine', 'pageda', 'pagemine',
      'üle aia', 'ule aia', 'üle müüri', 'ule muuri', 'läbi aia', 'labi aia',
      'lahkuda loata', 'vanglast välja saada', 'vanglast valja saada',
    ],
  },
  {
    category: 'violence',
    triggers: [
      // EN
      'make a weapon', 'make weapon', 'craft a weapon', 'craft weapon',
      'how to shiv', 'how to shank', 'attack a guard', 'attack guard',
      'hurt a guard', 'hurt guard', 'kill a guard', 'kill guard',
      'kill someone', 'kill another', 'attack another inmate',
      'attack inmate', 'hurt inmate', 'beat up', 'stab someone',
      'poison someone',
      // ET
      'tee relv', 'teha relv', 'teen relva', 'relva teha', 'valmista relv',
      'rünnata valvur', 'runnata valvur', 'rünnak valvuri', 'lüüa valvur',
      'luua valvur', 'tappa valvur', 'tappa kedagi', 'vigastada valvur',
      'vigastada kinnipeetava', 'pussitada', 'mürgitada',
    ],
  },
  {
    category: 'contraband',
    triggers: [
      // EN
      'smuggle', 'smuggling', 'sneak in drugs', 'sneak drugs in',
      'hide drugs', 'hide a weapon', 'hide weapon', 'hide phone',
      'hide a phone', 'bring in drugs', 'bring drugs in', 'contraband',
      'get drugs into prison', 'get phone into prison', 'sneak in a phone',
      'sneak in phone',
      // ET
      'salakaup', 'salaja sisse', 'salaja vanglasse', 'narkootikum sisse',
      'narkootikume sisse', 'peita relv', 'peita telefon', 'peita narkootikum',
      'tuua sisse narkootikum', 'tuua sisse relv', 'tuua sisse telefon',
      'keelatud esemed sisse',
    ],
  },
  {
    category: 'selfharm',
    triggers: [
      // EN
      'kill myself', 'killing myself', 'suicide', 'commit suicide',
      'end my life', 'end it all', 'hurt myself', 'cut myself',
      'self harm', 'self-harm', 'want to die',
      // ET
      'tappa end', 'tappa ennast', 'enesetapp', 'enesetapu',
      'ennast vigastada', 'enda vigastamine', 'lõpetada elu',
      'lopetada elu', 'tahan surra',
    ],
  },
];

const HAZARD_RESPONSES = {
  escape: {
    EN: "I can't help with that. Attempting escape is a criminal offence (Penal Code §326) and will add years to your sentence. If you have a concern about your case, sentence, or treatment, talk to your contact officer or file a written application — and in serious cases the Chancellor of Justice can be contacted. If you want to leave prison legally, look at the chapters on Open Prison, Electronic Monitoring, and Probation (TEV).",
    ET: "Ma ei saa selle küsimusega aidata. Põgenemiskatse on kuritegu (KarS §326) ja pikendab Sinu karistust märkimisväärselt. Kui Sul on mure oma karistuse, kohtlemise või vangistustingimuste pärast, pöördu oma kontaktisiku poole või esita kirjalik avaldus — tõsisematel juhtudel saab pöörduda ka õiguskantsleri poole. Kui soovid vanglast seaduslikult lahkuda, tutvu avavangla, elektroonilise valve ja kriminaalhoolduse (TEV) peatükkidega.",
    suggestedChapters: ['release.open', 'release.etev', 'release.tev'],
  },
  violence: {
    EN: "I can't help with that. Violence against staff or another detainee is a serious criminal offence — it extends your sentence and leads to solitary confinement. If you're feeling angry, threatened, or unsafe, please talk to the psychologist or your contact officer — they're trained for exactly this. If your safety is at immediate risk, tell a guard right away.",
    ET: "Ma ei saa selle küsimusega aidata. Vägivald töötajate või teiste kinnipeetavate vastu on raske kuritegu, mis pikendab Sinu karistust ja viib kartserisse. Kui tunned viha, end ohustatuna või ebakindlana, pöördu palun psühholoogi või oma kontaktisiku poole — nad on selleks väljaõpetatud. Kui Sinu turvalisus on otseses ohus, anna valvurile kohe teada.",
    suggestedChapters: ['health.psych', 'staff.roles', 'rules.solitary'],
  },
  contraband: {
    EN: "I can't help with that. Bringing prohibited items into prison or hiding them is a disciplinary violation and may be a separate criminal offence. There are legitimate ways to get what you need: the e-shop, authorised packages from family, and prison-issued hygiene and clothing items. If something you genuinely need is missing, ask your contact officer.",
    ET: "Ma ei saa selle küsimusega aidata. Keelatud esemete vanglasse toomine või peitmine on distsiplinaarrikkumine ja võib olla eraldi kuritegu. Vajalikke asju saab seaduslikult: e-poest, lubatud saadetistest lähedastelt ning vangla väljastatavate hügieeni- ja riietusesemete kaudu. Kui Sul on midagi tõeliselt vaja, mida ei saa, küsi oma kontaktisikult.",
    suggestedChapters: ['daily.eshop', 'rules.process', 'staff.roles'],
  },
  selfharm: {
    EN: "I'm sorry you're feeling this way — please don't go through it alone. Tell a guard or your contact officer now so the psychologist can be reached as soon as possible. You can also ask for a private conversation with the chaplain. Mental health support is free and confidential in prison, and staff are trained to help with exactly this.",
    ET: "On väga raske kuulda, et Sa nii tunned — palun ära jää sellega üksi. Anna kohe valvurile või oma kontaktisikule teada, et psühholoog saaks Sinuga võimalikult kiiresti kohtuda. Soovi korral saad paluda ka privaatset vestlust kaplaniga. Vaimse tervise tugi on vanglas tasuta ja konfidentsiaalne ning töötajad on selleks väljaõpetatud.",
    suggestedChapters: ['health.psych', 'health.chaplain', 'staff.roles'],
  },
};

/**
 * Detect whether a query is asking about a security hazard or crisis topic.
 * Matches lowercase substrings — robust to surrounding words and casing.
 *
 * @param {string} query - raw user query
 * @returns {{ category: string, message: { EN: string, ET: string }, suggestedChapters: string[] } | null}
 */
export function detectHazard(query) {
  if (!query || typeof query !== 'string') return null;
  const q = query.toLowerCase();

  for (const { category, triggers } of HAZARD_PATTERNS) {
    if (triggers.some(t => q.includes(t))) {
      const r = HAZARD_RESPONSES[category];
      return {
        category,
        message: { EN: r.EN, ET: r.ET },
        suggestedChapters: r.suggestedChapters,
      };
    }
  }
  return null;
}

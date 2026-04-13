import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function RelOpen({ language = 'ET' }) {
  const content = {
    ET: 'Avavanglas on rohkem vabadust: vaba liikumine territooriumil, õppimine/töötamine väljaspool, kojusõidud (kuni 21 päeva aastas). Kojusõidu taotlus esitatakse 3 päeva ette.\n\nElu avavanglas: Võite ise süüa teha. Isiklikud riided lubatud. Pikaajalisi kohtumisi pole (asendatakse kojusõitudega). Erakorraline väljasõit perehaiguse korral (kuni 7 päeva).',
    EN: 'Open prison offers more freedom: free movement on grounds, study/work outside, outings (up to 21 days/year). Outing requests submitted 3 days in advance.\n\nLife: You can cook for yourself. Personal clothing allowed. No long-term meetings (replaced by outings). Emergency outings for family illness (up to 7 days).'
  };

  const warnings = {
    ET: ['Reeglite rikkumine (uimastid, loata lahkumine) → tagasi kinnisesse vanglasse.'],
    EN: ['Breaking rules (drugs, leaving without permission) → return to closed prison.']
  };

  const tips = {
    ET: ['Eluaegsed vangid, kes on istunud vähemalt 23 aastat, võivad küsida avavanglasse pääsemise kohta.'],
    EN: ['Life sentence inmates who have served at least 23 years may inquire about open prison eligibility.']
  };

  const title = { ET: 'Avavangla', EN: 'Open Prison' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Vabanemine' : 'Release'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(warnings[language]).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}

      {(tips[language]).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

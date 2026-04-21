import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function HealthMeds({ language = 'ET' }) {
  const content = {
    ET: 'Ravimeid jagab valvurite meeskond (hommikul ja õhtul). Psühhotroopsed ravimid antakse meditsiinitöötaja poolt ja need tuleb võtta tema juuresolekul. Ravimid tuleb alla neelata ametniku ees.',
    EN: 'Medications are distributed by guards (morning and evening). Psychotropic meds are given by a medical professional and must be taken in their presence. Meds must be swallowed in front of an officer.'
  };

  const warnings = {
    ET: ['Ravimite kogumine, jagamine, müümine või vahetamine on rangelt KEELATUD. Võõra nime all ravimite võtmine toob kaasa karistuse.'],
    EN: ['Do NOT collect, share, sell, or exchange medications. Taking medication under a false name is prohibited. Violations result in disciplinary action.']
  };

  const tips = {
    ET: ['Võite küsida arstilt, kui kaua ravi kestab ja kas ravimid toimivad. Saate taotleda uut vastuvõttu.'],
    EN: ['You can ask your family doctor how long treatment is prescribed and whether medications are working. You can request to see the doctor again.']
  };

  const title = { ET: 'Ravimite reeglid', EN: 'Medication Rules' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tervis ja heaolu' : 'Health & Wellbeing'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

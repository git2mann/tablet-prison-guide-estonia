import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";

export default function ActPrograms({ language = 'ET' }) {
  const content = {
    ET: 'Sotsiaalprogrammid aitavad tegeleda sõltuvuste, viha ja sotsiaalsete oskustega. Osavõtt parandab võimalusi avavanglasse saamiseks ja ennetähtaegseks vabanemiseks. Toimumine tavaliselt 1–2 korda nädalas rühmades või individuaalselt.',
    EN: 'Social programs help with addiction, anger, and social skills. Participation improves chances for open prison and early release. Sessions usually 1-2 times/week in groups or individually.'
  };

  const table = {
    headers: { ET: ['Programm', 'Sessioone', 'Fookus'], EN: ['Program', 'Sessions', 'Focus'] },
    rows: {
      ET: [
        ["Viha juhtimine","9","Emotsioonide kontroll"],
        ["ART (agressiivsuse asendamine)","18","Sotsiaalsed oskused, konfliktid"],
        ["Elustiil 24/7","Muutuv","Sõltuvuskäitumise muutmine"],
        ["Liiklusohutus","Muutuv","Joobes juhtimise probleemid"],
      ],
      EN: [
        ["Anger Management","9","Controlling emotions"],
        ["ART","18","Social skills, conflict resolution"],
        ["Lifestyle 24/7","Varies","Changing addictive behavior"],
        ["Traffic Safety","Varies","Drunk driving problems"],
      ]
    }
  };

  const warnings = {
    ET: ['Osalemisest keeldumine võib mõjutada teie riskiskoori. Osalemine üksi ei garanteeri vabanemist — loeb üldine käitumine.'],
    EN: ['Refusal may affect your risk score. Participation alone doesn\'t guarantee early release — it\'s based on overall behavior.']
  };

  const title = { ET: 'Sotsiaalprogrammid', EN: 'Social Programs' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tegevused' : 'Activities'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language]}
        rows={table.rows[language]}
      />

      {(warnings[language]).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

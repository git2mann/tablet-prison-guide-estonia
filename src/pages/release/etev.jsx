import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";

export default function RelETEV({ language = 'ET' }) {
  const content = {
    ET: 'ETEV võimaldab ennetähtaegset vabanemist koos jala-võruga. See kestab 1–12 kuud. Peate viibima kohtu määratud kodus ja järgima ranget ajakava. Kodus peab olema elekter ja mobiililevi ning teiste elanike nõusolek.\n\nKuidas toimib: Pärast kohut saate kutse kriminaalhooldaja juurde. Seadmed paigaldatakse koju. Võite lahkuda ainult loaga määratud tegevusteks.',
    EN: 'ETEV allows early release with an ankle bracelet. Lasts 1–12 months. Stay at court-designated home and follow strict schedule. Home needs electricity, mobile coverage, and resident consent.\n\nProcess: After court, meet probation officer. Devices installed at home. Only leave with permission for specific tasks.'
  };

  const table = {
    headers: { ET: ['Karistus', 'ETEV võimalus pärast'], EN: ['Sentence', 'ETEV Eligible After'] },
    rows: {
      ET: [
        ["Kuni 5 aastat","1/3 karistusest (min 4 kuud)"],
        ["Üle 5 aasta","1/2 karistusest (min 4 kuud)"],
      ],
      EN: [
        ["Up to 5 years","1/3 of sentence (min 4 months)"],
        ["Over 5 years","1/2 of sentence (min 4 months)"],
      ]
    }
  };

  const warnings = {
    ET: ['ETEV tingimuste rikkumine → karistus jätkub vanglas. ETEV aega ei arvestata karistuse hulka.'],
    EN: ['Violating ETEV conditions → sentence continues in prison. ETEV time will NOT be deducted from your sentence.']
  };

  const title = { ET: 'Elektrooniline valve', EN: 'Electronic Monitoring' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Vabanemine' : 'Release'}>
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

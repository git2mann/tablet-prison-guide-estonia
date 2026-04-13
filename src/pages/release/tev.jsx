import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip";

export default function RelTEV({ language = 'ET' }) {
  const content = {
    ET: 'Kriminaalhooldus tähendab vabadust järelevalve all. Peate elama määratud kodus, käima kohtumistel, läbima teste ja vajadusel ravi või programme.\n\nRikkumised: Esmalt vestlus hooldajaga. Tõsise rikkumise korral erakorraline ettekanne kohtule — võib tuua uusi kohustusi, pikendada hooldust (+1a) või saata tagasi vanglasse.',
    EN: 'Probation means freedom under supervision. Live at designated home, attend meetings, pass tests, and undergo treatment/programs if needed.\n\nViolations: First, a meeting with the officer. Serious violations lead to a court report — may result in new obligations, extension (+1y), or return to prison.'
  };

  const table = {
    headers: { ET: ['Karistus', 'TEV võimalus pärast'], EN: ['Sentence', 'TEV Eligible After'] },
    rows: {
      ET: [
        ["Kuni 5 aastat","1/2 karistusest (min 4 kuud)"],
        ["Üle 5 aasta","2/3 karistusest (min 4 kuud)"],
      ],
      EN: [
        ["Up to 5 years","1/2 of sentence (min 4 months)"],
        ["Over 5 years","2/3 of sentence (min 4 months)"],
      ]
    }
  };

  const tips = {
    ET: ['Raskuste korral rääkige oma hooldajaga koheselt — varajane reageerimine hoiab ära suuremad probleemid.'],
    EN: ['If you encounter difficulties, talk to your officer early — early action prevents bigger problems.']
  };

  const title = { ET: 'Kriminaalhooldus', EN: 'Probation (TEV)' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Vabanemine' : 'Release'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language]}
        rows={table.rows[language]}
      />

      {(tips[language]).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

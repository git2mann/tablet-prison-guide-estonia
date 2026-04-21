import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";

export default function ActWork({ language = 'ET' }) {
    const content = {
    ET: 'Töötamine on vanglas kohustuslik (erandiks pensionärid, haiged ja õppurid). Miinimumpalk on 0.74€/tund. Palk kantakse isikuarvele ja jagatakse standardse valemi järgi.\n\nOhutus: Vangla annab kõik tööriistad ja kaitsevahendid (kindad, prillid). Enne algust toimub ohutuskoolitus.',
    EN: 'Working is mandatory (except retirement age, medical, or students). Minimum salary: €0.74/hour. Pay is credited to personal account and split per standard formula.\n\nSafety: Prison provides tools and protective equipment. Safety training occurs before starting.'
  };

  const table = {
    headers: { ET: ['Samm', 'Tegevus'], EN: ['Step', 'What Happens'] },
    rows: {
      ET: [
        ["1. ITK planeerimine","Töötegevuste arutamine kontaktisikuga"],
        ["2. Majandustöö","Esimene ülesanne (koristamine, köök) — tööharjumus"],
        ["3. VEK (Tööstus)","Proovipäev → tööleping (tisler, keevitaja jne)"],
        ["4. Avavangla","Töö leidmine väljaspool vanglat"],
      ],
      EN: [
        ["1. ITK Planning","Discuss work with contact person"],
        ["2. Economic Work","First assignment (cleaning, cooking) — work habit"],
        ["3. VEK (Industry)","Trial day → employment contract"],
        ["4. Open Prison","Find a job outside"],
      ]
    }
  };

  const warnings = {
    ET: ['Tööriistade kaotamine või lõhkumine toob kaasa hüvitamise ja võimaliku karistuse. Kaitsevahendite kandmata jätmine toob kaasa töölt eemaldamise.'],
    EN: ['Losing or damaging tools results in compensation and possible punishment. Refusing safety equipment leads to removal.']
  };

  const title = { ET: 'Töötamine', EN: 'Working' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tegevused' : 'Activities'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
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

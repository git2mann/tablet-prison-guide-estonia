import React from 'react';
import Section from "../../components/ui/Section";
import BodyChart from "../../components/ui/BodyChart";
import Keyword from "../../components/ui/keyword";

export default function HealthDoctor({ language = 'ET' }) {
  const title = { ET: 'Arsti vastuvõtt', EN: 'Seeing a Doctor' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tervis ja heaolu' : 'Health & Wellbeing'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {language === 'ET' ? (
          <>
            Mittekiirete murede korral täitke avaldus tahvlis või paberil. Teid vaatab esmalt üle üksuse pereõde (kohal tööpäeviti), kes suunab vajadusel <Keyword word="family doctor" language={language}>perearsti</Keyword> juurde.
            {"\n\n"}
            <Keyword word="family doctor" language={language}>Perearst</Keyword> käib vähemalt kord nädalas. Eriarstide ooteajad võivad olla pikad, sarnaselt vabadusele. Digilugu on kättesaadav. Avavanglas olles käite arsti juures jätkuvalt kinnises vanglas.
            {"\n\n"}
            Erakorralised mured (tugev valu, verejooks, hingamisraskused) — pöörduge koheselt valvuri poole (abi 24/7).
          </>
        ) : (
          <>
            For non-urgent concerns, fill out an application. Your unit's family nurse reviews your case first (available on weekdays). She refers you to the <Keyword word="family doctor" language={language}>family doctor</Keyword> if needed.
            {"\n\n"}
            The <Keyword word="family doctor" language={language}>family doctor</Keyword> visits at least once a week. Specialist wait times may take months. Digital health record is available. In open prison, you still see the doctor in the closed prison.
            {"\n\n"}
            For emergencies (severe pain, bleeding, breathing difficulties), contact the guard immediately (24/7 availability).
          </>
        )}
      </div>

      <div className="mt-12">
        <BodyChart language={language} />
      </div>
    </Section>
  );
}

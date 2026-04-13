import React from 'react';
import Section from "../../components/ui/Section";

export default function HealthDoctor({ language = 'ET' }) {
  const content = {
    ET: 'Mittekiirete murede korral täitke avaldus tahvlis või paberil. Teid vaatab esmalt üle üksuse pereõde (kohal tööpäeviti), kes suunab vajadusel perearsti juurde.\n\nPerearst käib vähemalt kord nädalas. Eriarstide ooteajad võivad olla pikad, sarnaselt vabadusele. Digilugu on kättesaadav. Avavanglas olles käite arsti juures jätkuvalt kinnises vanglas.\n\nErakorralised mured (tugev valu, verejooks, hingamisraskused) — pöörduge koheselt valvuri poole (abi 24/7).',
    EN: 'For non-urgent concerns, fill out an application. Your unit\'s family nurse reviews your case first (available on weekdays). She refers you to the family doctor if needed.\n\nThe family doctor visits at least once a week. Specialist wait times may take months. Digital health record is available. In open prison, you still see the doctor in the closed prison.\n\nFor emergencies (severe pain, bleeding, breathing difficulties), contact the guard immediately (24/7 availability).'
  };

  const title = { ET: 'Arsti vastuvõtt', EN: 'Seeing a Doctor' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tervis ja heaolu' : 'Health & Wellbeing'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>
    </Section>
  );
}

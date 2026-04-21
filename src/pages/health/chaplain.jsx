import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";

export default function HealthChaplain({ language = 'ET' }) {
  const content = {
    ET: 'Igas vanglas on kaplan, kes pakub hingelist tuge sõltumata usutunnistusest. Vestlused on vabatahtlikud ja konfidentsiaalsed.\n\nTeenused: hingehoid, leinanõustamine, sakramendid, usuline kirjandus (Piibel, Koraan, palvematid — tellimine läbi kaplani).',
    EN: 'Every prison has a chaplain who provides spiritual support regardless of denomination. Conversations are voluntary and confidential.\n\nServices: spiritual conversation, grief counseling, sacraments, religious literature (Bible, Quran, prayer mat — ordered through chaplain).'
  };

  const tips = {
    ET: ['Kaplani poole pöördumiseks kirjutage sooviavaldus kontaktisikule või valvurile. Võite küsida ka konkreetset kaplanit nime järgi.'],
    EN: ['To contact the chaplain, write a request to your contact person or guard. You can specify a particular chaplain by name if you wish.']
  };

  const title = { ET: 'Kaplan', EN: 'Chaplain' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tervis ja heaolu' : 'Health & Wellbeing'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

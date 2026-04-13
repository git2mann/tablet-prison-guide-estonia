import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function HealthPsych({ language = 'ET' }) {
  const content = {
    ET: 'Psühholoog aitab stressi, kriiside ja kohanemisega. Vestlused on konfidentsiaalsed. Psühholoogi juurde pääsemiseks kirjutage avaldus kontaktisikule (võite lisada põhju: ärevus, uni, lein). Ooteajad sõltuvad nõudlusest.',
    EN: 'The psychologist helps with stress, crises, and adjustment. Conversations are confidential. To see a psychologist, write a request to your contact person (you can state the reason: anxiety, sleep, grief). Wait times depend on demand.'
  };

  const warnings = {
    ET: ['Kriisiolukorras (suitsiidimõtted, paanika) — teavitage koheselt valvurit. Valveõde reageerib esimesel võimalusel.'],
    EN: ['In crisis (suicidal thoughts, panic) — inform the guard immediately. The duty nurse will respond as soon as possible.']
  };

  const tips = {
    ET: ['Muude kui psühholoogiliste muredega pöörduge esmalt oma kontaktisiku poole — tema suunab õige spetsialistini.'],
    EN: ['For non-psychological concerns, contact your contact person first — they\'ll direct you to the right specialist.']
  };

  const title = { ET: 'Psühholoog', EN: 'Psychologist' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tervis ja heaolu' : 'Health & Wellbeing'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
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

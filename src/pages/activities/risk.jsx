import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";

export default function ActRisk({ language = 'ET' }) {
  const content = {
    ET: 'Riskihindamisega hinnatakse uue kuriteo toimepanemise tõenäosust. See koostatakse lausepõhiselt (üle 1a karistus) saabumisel ja ennetähtaegse vabanemise eel.\n\nITK: Isiklik täitmiskava paneb paika vajalikud tegevused ja kuupäevad. Seda koostate koos kontaktisikuga ja seda vaadatakse kord kuus üle ning kord aastas uuendatakse.',
    EN: 'Risk assessment evaluates re-offending likelihood. It\'s conducted for sentences over 1 year upon arrival and before early release.\n\nITK: Personal action plan outlining needs and dates. It\'s prepared with your contact person and reviewed monthly/updated yearly.'
  };

  const steps = {
    ET: [
      'Ajalugu: kuriteo raskus, varasem käitumine, sõltuvused.',
      'Karistuse ajal: õppimine/töötamine, programmid, käitumine ametnikega.',
      'Vabanemisel: ITK täitmine, ohtlikkus väljaspool, distsiplinaar-ajalugu.'
    ],
    EN: [
      'History: crime severity, previous behavior, substance problems.',
      'During sentence: learning/working, programs, behavior with staff.',
      'For release: ITK completion, danger to others, disciplinary record.'
    ]
  };

  const tips = {
    ET: ['ITK täitmine on kriitiline, kui kohus arutab avavanglat või ennetähtaegset vabanemist.'],
    EN: ['ITK completion significantly matters when court discusses early release or open prison placement.']
  };

  const title = { ET: 'Riskihindamine ja ITK', EN: 'Risk Assessment & ITK' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tegevused' : 'Activities'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <div className="bg-slate-900 rounded-[60px] p-16 text-white space-y-12 my-12">
        <div className="flex items-center gap-8 text-blue-400">
          <h3 className="text-4xl font-black uppercase tracking-tight italic">PROCESS</h3>
        </div>
        <ul className="grid gap-8">
          {(steps[language]).map((step, idx) => (
            <li key={idx} className="flex items-start gap-8 bg-white/5 p-8 rounded-[40px] border border-white/10"> 
              <span className="flex items-center justify-center w-16 h-16 rounded-[24px] bg-blue-600 text-white text-3xl font-black shrink-0">{idx + 1}</span> 
              <p className="text-2xl font-bold text-slate-200 leading-relaxed">{step}</p> 
            </li>
          ))}
        </ul>
      </div>

      {(tips[language]).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

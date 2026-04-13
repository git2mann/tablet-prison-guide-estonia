import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";

export default function RulesSolitary({ language = 'ET' }) {
  const content = {
    ET: 'Distsiplinaarkambris olete üksi, kannate kartsariietust ja teil pole isiklikke asju. Kambrit jälgitakse. Liikumine on piiratud 1 tunniga õues.\n\nKohtumised on lubatud ainult pereliikmetega. Telefonikõned ja meedia võivad olla piiratud. Televiisorit ei ole.',
    EN: 'In solitary confinement: you are alone, wearing solitary clothing, with no personal belongings. The cell is monitored. Movement restricted to 1 hour outside.\n\nVisits only with family. Phone calls and media may be restricted. No television.'
  };

  const warnings = {
    ET: ['Kartsa paigutamisel hoiustatakse teie isiklikud asjad eraldi kuni karistuse lõpuni.'],
    EN: ['If placed in solitary, your personal items will be stored separately until the period ends.']
  };

  const title = { ET: 'Distsiplinaarkamber', EN: 'Solitary Confinement' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Reeglid ja kord' : 'Rules & Discipline'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

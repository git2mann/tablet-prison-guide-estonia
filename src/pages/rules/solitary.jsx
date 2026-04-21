import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Keyword from "../../components/ui/keyword";

export default function RulesSolitary({ language = 'ET' }) {
  const content = {
    ET: <><Keyword word="solitary confinement" language={language}>Distsiplinaarkambris</Keyword> olete üksi, kannate kartsariietust ja teil pole isiklikke asju. Kambrit jälgitakse. Liikumine on piiratud 1 tunniga õues.{"\n\n"}Kohtumised on lubatud ainult pereliikmetega. Telefonikõned ja meedia võivad olla piiratud. Televiisorit ei ole.</>,
    EN: <>In <Keyword word="solitary confinement" language={language}>solitary confinement</Keyword>: you are alone, wearing solitary clothing, with no personal belongings. The cell is monitored. Movement restricted to 1 hour outside.{"\n\n"}Visits only with family. Phone calls and media may be restricted. No television.</>
  };

  const warnings = {
    ET: [<><Keyword word="solitary confinement" language={language}>Kartsa</Keyword> paigutamisel hoiustatakse teie isiklikud asjad eraldi kuni karistuse lõpuni.</>],
    EN: [<>If placed in <Keyword word="solitary confinement" language={language}>solitary</Keyword>, your personal items will be stored separately until the period ends.</>]
  };

  const title = { ET: 'Distsiplinaarkamber', EN: 'Solitary Confinement' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Reeglid ja kord' : 'Rules & Discipline'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

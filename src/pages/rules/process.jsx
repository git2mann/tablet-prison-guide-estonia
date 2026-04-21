import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";

export default function RulesProcess({ language = 'ET' }) {
  const content = {
    ET: <>Reeglitest kinnipidamine annab teile rohkem õigusi. Rikkumised võivad edasi lükata <Keyword word="open prison" language={language}>avavanglasse</Keyword> saamist või ennetähtaegset vabanemist. Karistused kehtivad tavaliselt 1 aasta.{"\n\n"}Menetlus: Esimesena teatab ametnik rikkumisest. Kui asi on tõsine, algatab <Keyword word="contact person" language={language}>kontaktisik</Keyword> menetluse. Kogutakse tõendid (video, fotod). Otsus tehakse varasemat käitumist arvestades.</>,
    EN: <>Adhering to rules gives you more rights. Violations may delay <Keyword word="open prison" language={language}>open prison</Keyword> or early release. Penalties generally last 1 year.{"\n\n"}Process: First, the officer informs you of the violation. If serious, the <Keyword word="contact person" language={language}>contact person</Keyword> initiates proceedings. Evidence is collected (video, photos). Decision is made considering previous behavior.</>
  };

  const tips = {
    ET: ['Lugege otsus rahulikult läbi. Seal on kirjas ka see, kuidas seda vajadusel vaidlustada.'],
    EN: ['Take time to read the decision calmly. It states how to contest it if you wish.']
  };

  const title = { ET: 'Rikkumiste menetlemine', EN: 'Violation Process' };
  const sub = { ET: 'Reeglid ja kord', EN: 'Rules & Discipline' };

  return (
    <Section title={title[language]} sub={sub[language]}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12 text-balance">
        {content[language]}
      </div>

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

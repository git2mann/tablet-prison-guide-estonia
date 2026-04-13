import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";

export default function RulesProcess({ language = 'ET' }) {
  const content = {
    ET: 'Reeglitest kinnipidamine annab teile rohkem õigusi. Rikkumised võivad edasi lükata avavanglasse saamist või ennetähtaegset vabanemist. Karistused kehtivad tavaliselt 1 aasta.\n\nMenetlus: Esimesena teatab ametnik rikkumisest. Kui asi on tõsine, algatab kontaktisik menetluse. Kogutakse tõendid (video, fotod). Otsus tehakse varasemat käitumist arvestades.',
    EN: 'Adhering to rules gives you more rights. Violations may delay open prison or early release. Penalties generally last 1 year.\n\nProcess: First, the officer informs you of the violation. If serious, the contact person initiates proceedings. Evidence is collected (video, photos). Decision is made considering previous behavior.'
  };

  const tips = {
    ET: ['Lugege otsus rahulikult läbi. Seal on kirjas ka see, kuidas seda vajadusel vaidlustada.'],
    EN: ['Take time to read the decision calmly. It states how to contest it if you wish.']
  };

  const title = { ET: 'Rikkumiste menetlemine', EN: 'Violation Process' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Reeglid ja kord' : 'Rules & Discipline'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

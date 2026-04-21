import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Keyword from "../../components/ui/keyword";

export default function RulesPunishments({ language = 'ET' }) {
  const content = {
    ET: <>Karistusi saab määrata ka katseajaga (1–6 kuud). Kui te selle aja jooksul uut rikkumist ei tee, siis karistust ei täideta. Mitme <Keyword word="solitary confinement" language={language}>kartsa</Keyword>-karistuse vahel peab olema vähemalt 48 tundi.</>,
    EN: <>Punishments can be assigned with a probation period (1–6 months). If you don't violate rules during that time, the punishment won't be enforced. Multiple <Keyword word="solitary confinement" language={language}>solitary</Keyword> sentences must have at least 48 hours between them.</>
  };

  const table = {
    headers: { ET: ['Karistus', 'Detailid'], EN: ['Punishment', 'Details'] },
    rows: {
      ET: [
        ["Kirjalik noomitus","Ametlik hoiatus isikutoimikus"],
        ["Seadme äravõtmine","TV, keetja jne — kuni 45 päevaks"],
        ["Kohtumiste keelamine","Lühi- või pikaajalised kohtumised"],
        ["Töölt eemaldamine","Kuni 1 kuuks"],
        [<Keyword word="solitary confinement" language={language}>Distsiplinaarkamber</Keyword>,"Kuni 14 päevaks (3 päeva alla 21a)"],
      ],
      EN: [
        ["Written reprimand","Formal warning on record"],
        ["Device confiscation","TV, kettle, etc. — up to 45 days"],
        ["Visit deprivation","Short or long-term visits removed"],
        ["Removed from work","Up to 1 month"],
        [<Keyword word="solitary confinement" language={language}>Solitary confinement</Keyword>,"Up to 14 days (3 if under 21)"],
      ]
    }
  };

  const title = { ET: 'Karistused', EN: 'Punishments' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Reeglid ja kord' : 'Rules & Discipline'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language]}
        rows={table.rows[language]}
      />
    </Section>
  );
}

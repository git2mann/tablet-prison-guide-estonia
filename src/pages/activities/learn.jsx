import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";

export default function ActLearn({ language = 'ET' }) {
  const content = {
    ET: 'Vanglas saab omandada põhiharidust, gümnaasiumiharidust ja kutseharidust. Koolipäev on tavaliselt 9–17. Õppevahendid on tasuta. Saate liituda aastaringselt. Gümnaasiumi/kutseõppe ajal peate osalema ka majandustöödel.',
    EN: 'In prison you can obtain basic, secondary, and vocational education. School day: 9–17. Learning materials provided free. You can join year-round. High school/vocational requires participation in economic work.'
  };

  const table = {
    headers: { ET: ['Tüüp', 'Keel', 'Märkused'], EN: ['Type', 'Language', 'Notes'] },
    rows: {
      ET: [
        ["Põhikool","Eesti/Vene","Kohustuslik alla 17a ilma põhihariduseta"],
        ["Gümnaasium","Eesti","Vajalik B1 tase"],
        ["Kutseõpe","Eesti","Vajalik A2; ainult süüdimõistetutele"],
        ["Eesti keel","Kõik tasemed","Hinnatakse ITK käigus"],
      ],
      EN: [
        ["Basic School","EST/RUS","Mandatory if under 17 without basic education"],
        ["Gymnasium","EST","B1 proficiency required"],
        ["Vocational","EST","A2 required; convicted only"],
        ["EST Language","All levels","Assessed during ITK"],
      ]
    }
  };

  const warnings = {
    ET: ['Puudumine on lubatud ainult haiguse, arsti või vangla põhjustel. Põhjuseta puudumine on rikkumine.'],
    EN: ['Absence is justified only for illness, doctor, or prison reasons. Unexcused absence is not allowed.']
  };

  const title = { ET: 'Haridus', EN: 'Education' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tegevused' : 'Activities'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language]}
        rows={table.rows[language]}
      />

      {(warnings[language]).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

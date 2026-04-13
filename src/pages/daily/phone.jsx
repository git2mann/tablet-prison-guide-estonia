import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function DailyPhone({ language = 'ET' }) {
  const content = {
    ET: 'Esimesel nädalal märkige üles kõik inimesed ja numbrid, kellele soovite helistada. Helistamine on tasuline — kandke raha oma isikuarvelt telefonikaardile. Ühe sessiooni ajal saate helistada mitmele inimesele.\n\nUue kontakti lisamiseks esitage vorm eelmise päeva õhtuseks loenduseks: nimi, sünniaeg, kamber, kellele helistate, number ja suhe.',
    EN: 'During the first week, write down all people and numbers you wish to call on a form given to prison staff. Calling costs money — transfer funds from your personal account to your phone card. You can call multiple people per session.\n\nTo call someone new, submit a form by evening count the previous day with: your name, DOB, cell number, who you\'re calling, their number, and your relationship.'
  };

  const table = {
    headers: { ET: ['Üksus', 'Limiit', 'Märkused'], EN: ['Setting', 'Allowance', 'Notes'] },
    rows: {
      ET: [
        ["Avavangla","60 min/päevas","Graafikujärgsetel aegadel. Sisaldab ooteaega."],
        ["Kinnine üksus","≥10 min/nädalas","Kirjalik taotlus eelneva päeva õhtuks."],
      ],
      EN: [
        ["Open department","60 min/day","During scheduled hours. Includes wait time."],
        ["Closed unit","≥10 min/week","Must request in writing by evening count the day before."],
      ]
    }
  };

  const warnings = {
    ET: ['Ärge kunagi jagage oma telefonikaardi PIN-koodi, kasutage teise vangi kaarti, lahkuge telefonist välja logimata ega andke telefoni teisele vangile.'],
    EN: ['Never share your phone card PIN, use another inmate\'s card, leave the phone without logging out, or pass the phone to another inmate.']
  };

  const tips = {
    ET: ['Helistamisõiguse taotlus on vajalik, kui helistate väljaspool graafikut, osakond on lukus või helistate uuele kontaktile.'],
    EN: ['A call request is needed if: calling outside scheduled hours, the department is locked, you have limited communication rights, or calling a new contact.']
  };

  const title = { ET: 'Telefonikõned', EN: 'Phone Calls' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language] || table.headers.EN}
        rows={table.rows[language] || table.rows.EN}
      />

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

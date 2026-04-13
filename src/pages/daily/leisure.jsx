import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function DailyLeisure({ language = 'ET' }) {
  const content = {
    ET: 'Raamatukogu: Avavanglas on raamatud riiulitel. Võite taotleda konkreetseid raamatuid. Tagastage raamatud üleviimisel või vabanemisel. Kahjustatud raamatute eest tuleb maksta.\n\nMeedia: Riiklikud lehed on kättesaadavad. Saate tellida teisi oma kulul vangla aadressile. Vägivaldne sisu keelatud.\n\nHuviringid: Kunst, muusika jne — küsige kontaktisikult. Valmistatud esemed jäävad vanglasse (väljasaatmine kokkuleppel). Uhkeid hasartmänge raha peale ei toimu.',
    EN: 'Library: In open departments, books are on shelves. Request specific books if needed. Return books when transferring or releasing. Damaged books must be paid for.\n\nMedia: National papers available. Subscribe to others at your own expense. No violent content allowed.\n\nHobbies: Art, music, etc. — ask your contact person. Items made stay in prison (sending out by agreement). No gambling for money.'
  };

  const warnings = {
    ET: ['Kasutage spordivarustust heaperemehelikult. Rikkumistest teatage koheselt. Reeglite rikkumine lõpetab treeningu.'],
    EN: ['Use equipment properly. Report breakages immediately. Rule violations end the session.']
  };

  const tips = {
    ET: ['Kui teil on oskusi (muusika, käsitöö), öelge seda kontaktisikule — võite hakata ringijuhendajaks!'],
    EN: ['If you have a skill (music, crafts, art), tell your contact person — you might lead a hobby group!']
  };

  const title = { ET: 'Vaba aeg ja sport', EN: 'Leisure & Sports' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
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

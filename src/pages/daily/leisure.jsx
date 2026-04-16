import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

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
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl prose-slate max-w-full font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12">
            {content[language]}
          </div>

          {(warnings[language] || warnings.EN).map((w, i) => (
            <Warning key={i}>{w}</Warning>
          ))}

          {(tips[language] || tips.EN).map((t, i) => (
            <Tip key={i}>{t}</Tip>
          ))}
        </Section>
      </motion.div>
    </motion.div>
  );
}

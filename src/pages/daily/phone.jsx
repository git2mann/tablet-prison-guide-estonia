import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailyPhone({ language = 'ET' }) {
  const title = { ET: 'Telefonikõned', EN: 'Phone Calls' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl text-balance  prose-slate max-w-full font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12">
            {language === 'ET' ? (
              <>
                Esimesel nädalal märkige üles kõik inimesed ja numbrid, kellele soovite helistada. Helistamine on tasuline — kandke raha oma <Keyword word="personal account" language={language}>isikuarvelt</Keyword> <Keyword word="phone card" language={language}>telefonikaardile</Keyword>. Ühe sessiooni ajal saate helistada mitmele inimesele.
                {"\n\n"}
                Uue kontakti lisamiseks esitage vorm eelmise päeva õhtuseks loenduseks: nimi, sünniaeg, kamber, kellele helistate, number ja suhe.
              </>
            ) : (
              <>
                During the first week, write down all people and numbers you wish to call on a form given to prison staff. Calling costs money — transfer funds from your <Keyword word="personal account" language={language}>personal account</Keyword> to your <Keyword word="phone card" language={language}>phone card</Keyword>. You can call multiple people per session.
                {"\n\n"}
                To call someone new, submit a form by evening count the previous day with: your name, DOB, cell number, who you're calling, their number, and your relationship.
              </>
            )}
          </div>

          <Table 
            headers={table.headers[language] || table.headers.EN}
            rows={table.rows[language] || table.rows.EN}
          />

          <Warning>
            {language === 'ET' ? (
              <>Ärge kunagi jagage oma <Keyword word="phone card" language={language}>telefonikaardi</Keyword> PIN-koodi, kasutage teise vangi kaarti, lahkuge telefonist välja logimata ega andke telefoni teisele vangile.</>
            ) : (
              <>Never share your <Keyword word="phone card" language={language}>phone card</Keyword> PIN, use another inmate's card, leave the phone without logging out, or pass the phone to another inmate.</>
            )}
          </Warning>

          <Tip>
            {language === 'ET' ? (
              <>Helistamisõiguse taotlus on vajalik, kui helistate väljaspool graafikut, osakond on lukus või helistate uuele kontaktile.</>
            ) : (
              <>A call request is needed if: calling outside scheduled hours, the department is locked, you have limited communication rights, or calling a new contact.</>
            )}
          </Tip>
        </Section>
      </motion.div>
    </motion.div>
  );
}

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

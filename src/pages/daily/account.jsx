import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailyAccount({ language = 'ET' }) {
  const content = {
    ET: 'Teile avatakse isikuarve. Teie palk, perelt saadud raha ja kõik muud vahendid laekuvad siia. Jääki saate kontrollida tahvlist.\n\nVabanemisfondi maksimumsumma on 3-kordne Eesti miinimumpalk. Kui fond on täis, saate raha edasi säästa või kasutada. Perelt saadud raha jagatakse samamoodi — nt kui saadetakse 12€, saate kasutada 3.60€.\n\nSaate teha pangaülekandeid (nt riigilõivud) ja maksta teenuste (pesu, koopiad) ning kambri seadmete elektri eest.',
    EN: 'A personal account will be opened for you. Your salary, money from family, and all other funds go here. You can check your balance on the tablet.\n\nThe release fund maximum is 3x Estonian minimum wage. Once full, you can use or keep saving. Money from family is split the same way — e.g. if someone sends €12, you can use €3.60.\n\nYou can make bank transfers from your account (e.g. state fees) and pay for services (laundry, copies). You must also pay for electricity for devices in your cell.'
  };

  const table = {
    headers: { ET: ['Olukord', 'Jaotus'], EN: ['Situation', 'Distribution'] },
    rows: {
      ET: [
        ["Võlgnevusi pole","70% → vabanemisfond · 30% → vabalt kasutatav"],
        ["On võlgnevusi","50% → võlad · 20% → vabanemisfond · 30% → vabalt kasutatav"],
      ],
      EN: [
        ["No debts","70% → release fund · 30% → yours"],
        ["Has debts","50% → debts · 20% → release fund · 30% → yours"],
      ]
    }
  };

  const warnings = {
    ET: ['Planeerige e-poe oste hoolikalt — veenduge, et teil jätkub raha kohustuslike kulude (nt elekter) jaoks.'],
    EN: ['Plan e-shop purchases carefully — ensure you have enough for mandatory expenses like electricity.']
  };

  const title = { ET: 'Isikuarve', EN: 'Personal Account' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl prose-slate max-w-full font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12">
            {content[language].split('isikuarve').map((part, i, arr) => (
                <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <Keyword word="personal account">{language === 'ET' ? 'isikuarve' : 'personal account'}</Keyword>}
                </React.Fragment>
            ))}
          </div>

          <Table 
            headers={table.headers[language] || table.headers.EN}
            rows={table.rows[language] || table.rows.EN}
          />

          {(warnings[language] || warnings.EN).map((w, i) => (
            <Warning key={i}>{w}</Warning>
          ))}
        </Section>
      </motion.div>
    </motion.div>
  );
}

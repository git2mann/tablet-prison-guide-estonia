import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailySchedule({ language = 'ET' }) {
  const title = { ET: 'Päevakava ja loendus', EN: 'Schedule & Count' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl text-balance max-w-full font-bold whitespace-pre-wrap leading-relaxed mb-12">
            {language === 'ET' ? (
              <>
                Vanglas kehtib range päevakava. Peate olema oma kambris, kui ajakava seda nõuab. Ajakava muutustest teavitatakse helisüsteemi, <Keyword word="cell terminal" language={language}>kambriterminali</Keyword> või ametniku kaudu.
              </>
            ) : (
              <>
                Prison has a strict daily schedule. You must be in your cell when the schedule requires it. Schedule changes will be communicated via sound system, <Keyword word="cell terminal" language={language}>cell terminal</Keyword>, or officer.
              </>
            )}
          </div>

          <Table 
            headers={table.headers[language] || table.headers.EN}
            rows={table.rows[language] || table.rows.EN}
          />

          {(warnings[language] || warnings.EN).map((w, i) => (
            <Warning key={i}>{w}</Warning>
          ))}

          <div className="relative my-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1.5 h-10 bg-[var(--color-brand-gold)] rounded-full shrink-0" />
              <h3 className="text-3xl md:text-4xl font-black text-[var(--color-brand-blue)] uppercase tracking-tighter italic">{language === 'ET' ? 'PROTSEDUUR' : 'PROCEDURE'}</h3>
            </div>
            
            <div className="space-y-6 relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-[var(--color-brand-blue)]/5 rounded-full" />
              {(language === 'ET' ? [
                <>{'Olge korrektselt riides, '}<Keyword word="name tag" language={language}>nimesilt</Keyword>{' nähtaval.'}</>,
                'Seiske oma tehtud voodi ees.',
                'Hoidke käed nähtaval — ärge nõjatuge ega istuge.',
                'Lülitage kõik seadmed välja või hääletule režiimile.',
                'Küsimisel öelge selgelt oma nimi.',
                <>{'Ärge sööge, lugege, rääkige ega häirige '}<Keyword word="count" language={language}>loendust</Keyword>{'.'}</>
              ] : [
                <>{'Be properly dressed with your '}<Keyword word="name tag" language={language}>name tag</Keyword>{' visible.'}</>,
                'Stand in front of your made bed.',
                'Keep hands visible — don\'t lean or sit.',
                'Turn off all devices or set to silent.',
                'If asked, clearly state your name.',
                <>{'Don\'t eat, read, talk, or disturb the '}<Keyword word="count" language={language}>count</Keyword>{'.'}</>
              ]).map((step, idx) => (
                <div key={idx} className="relative pl-16 md:pl-20 group">
                  <div className="absolute left-4 md:left-6 top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-bg-surface)] border-4 border-[var(--color-brand-gold)] z-10" />
                  <div className="bg-[var(--color-bg-surface)] p-6 md:p-8 rounded-[32px] border-2 border-[var(--color-border-subtle)] shadow-sm">
                    <div className="flex items-start gap-6">
                      <span className="text-4xl md:text-5xl font-black text-[var(--color-border-subtle)] italic leading-none select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg md:text-2xl font-bold leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tip>
            {language === 'ET' ? (
              <><Keyword word="count" language={language}>Loendused</Keyword> toimuvad hommikul ja õhtul teie kambris. Kui olete tööl, toimub <Keyword word="count" language={language}>loendus</Keyword> seal.</>
            ) : (
              <><Keyword word="count" language={language}>Counts</Keyword> happen morning and evening in your cell. If you're at work, <Keyword word="count" language={language}>count</Keyword> happens there.</>
            )}
          </Tip>
        </Section>
      </motion.div>
    </motion.div>
  );
}

const warnings = {
  ET: ['Peate olema oma kambris, kui ajakava seda nõuab.'],
  EN: ['You must be in your cell when the schedule requires it.']
};

const table = {
  headers: { ET: ['Aeg', 'Tegevus'], EN: ['Time', 'Activity'] },
  rows: {
    ET: [
      ["06:00","Äratus — elekter sisse, kambri korrastamine, hügieen"],
      ["06:20–07:15","Hommikusöök, hommikune loendus, ravimid"],
      ["08:00–17:00","Tegevused — õppimine, töö, programmid, huvialad"],
      ["11:30–12:30","Lõuna — tuuakse kambrisse või töökohal"],
      ["17:30–18:30","Õhtusöök — õhtune loendus, ravimid"],
      ["22:00","Öörahu — elekter välja (erandkorras kuni südaööni)"],
    ],
    EN: [
      ["06:00","Wake up — electricity on, tidy cell, hygiene"],
      ["06:20–07:15","Breakfast served, morning count, medication"],
      ["08:00–17:00","Activities — study, work, programs, hobbies"],
      ["11:30–12:30","Lunch — brought to cell or at workplace"],
      ["17:30–18:30","Dinner — evening count, medication"],
      ["22:00","Night rest — electricity off (exception: unit manager may allow until midnight)"],
    ]
  }
};

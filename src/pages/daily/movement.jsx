import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailyMovement({ language = 'ET' }) {
  const content = {
    ET: 'Vangla territooriumil liikumine toimub alati koos ametnikuga. Avavanglas on liikumine vabam.\n\nJalutuskäik: kord päevas, vähemalt 1 tund. Kandke ilmastikukindlaid riideid. Lubatud: taskurätik, kuni 0.5L vett plastikpudelis, käekell, usuline ese, abielusõrmus.\n\nLäbiotsimine: Toimub osakonnast lahkumisel/sisenemisel. Seiske näoga seina poole, käed pinnal.',
    EN: 'Movement on prison territory always requires an officer. In open departments, movement is freer.\n\nWalks: Once daily, at least 1 hour. Wear weather-appropriate clothing. Allowed: handkerchief, up to 0.5L water in plastic bottle, wristwatch, religious item, wedding ring.\n\nSearches: Done when leaving/entering the department. Stand facing the wall with hands on the surface.'
  };

  const warnings = {
    ET: ['Jalutusalal ei tohi midagi maha visata ega üles korjata. Teiste jalutusaladega suhtlemine keelatud.'],
    EN: ['Nothing may be thrown, left, or picked up in the walking area. No communicating with inmates outside your area.']
  };

  const steps = {
    ET: [
      'Liikumine paaris ja kolonnis (Tallinn).',
      'Ei tohi asju maast võtta ega visata.',
      'Füüsiline kontakt teistega keelatud.',
      'Ukseaugust sissekiikamine keelatud.',
      'Ärge puudutage lukke ega punaseid jooni.',
      'Väljudes võtke kaasa ainult vajalik (kooliasjad lubatud).'
    ],
    EN: [
      'Walk in pairs in a column (Tallinn).',
      'Don\'t take things from the ground or throw things.',
      'No physical contact with others.',
      'Don\'t peek through door peepholes.',
      'Don\'t touch locks or red lines.',
      'Take only necessary approved items when leaving.'
    ]
  };

  const title = { ET: 'Liikumine ja jalutuskäigud', EN: 'Movement & Walks' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl text-balance max-w-full font-bold whitespace-pre-wrap leading-relaxed mb-12">
            {content[language]}
          </div>

          <div className="relative my-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1.5 h-10 bg-[var(--color-brand-gold)] rounded-full shrink-0" />
              <h3 className="text-3xl md:text-4xl font-black text-[var(--color-brand-blue)] uppercase tracking-tighter italic">REŽIIM</h3>
            </div>
            
            <div className="space-y-6 relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-[var(--color-brand-blue)]/5 rounded-full" />
              {(steps[language] || steps.EN).map((step, idx) => (
                <div key={idx} className="relative pl-16 md:pl-20 group">
                  <div className="absolute left-4 md:left-6 top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-bg-surface)] border-4 border-[var(--color-brand-gold)] z-10" />
                  <div className="bg-[var(--color-bg-surface)] p-6 md:p-8 rounded-[32px] border-2 border-[var(--color-border-subtle)] shadow-sm">
                    <p className="text-lg md:text-2xl font-bold leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {(warnings[language] || warnings.EN).map((w, i) => (
            <Warning key={i}>{w}</Warning>
          ))}
        </Section>
      </motion.div>
    </motion.div>
  );
}

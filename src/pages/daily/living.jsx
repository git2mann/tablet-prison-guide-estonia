import React from 'react';
import Section from "../../components/ui/Section";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailyLiving({ language = 'ET' }) {
  const content = {
    ET: 'Jagate kambrit teise vangiga. Teile määratakse voodi, riiul ja koht külmkapis. Arst võib tervislikel põhjustel määrata alumise nari. Kambri kõrval on terminal raadio ja valvuriga suhtlemiseks.\n\nSisustus: Narivoodi, laud, toolid, tualett ja kraanikauss. Kasutada tohib ainult vangla määratud mööblit. Väljastatakse voodipesu, rätik ja koristusvahendid.\n\nLubatud asjad: TV, keetja, pardel (e-poest), hügieenitarbed, kirjutusvahendid, õppematerjalid ja kuni 5 raamatut. Kokku tohib olla maksimaalselt 30 kg asju (kamber + ladu).',
    EN: 'You share a cell with another inmate. You\'ll be assigned a bed, shelf, and refrigerator spot. The doctor may assign a lower bunk for health reasons. Next to the cell is the cell terminal for radio and guard communication.\n\nFurnishings: Bunk bed, table, two chairs, two shelves, coat rack, toilet, and faucet. Only prison-designated furniture is allowed. Bedding and towel are provided, plus cleaning supplies.\n\nAllowed items: TV, kettle, razor (from prison shop). Daily-use items: hygiene tools, writing instruments, learning materials, up to 5 books. Maximum 30 kg total in room and storage.'
  };

  const steps = {
    ET: [
      'Mööbli muutmine ja peeglite paigaldamine on keelatud.',
      'Seintele kleepimine keelatud (kasutage stendi).',
      'Lampide, kaamerate ja toiduluukide katmine keelatud.',
      'Toidu kääritamine keelatud.',
      'Isetehtud elektriseadmed ja tööriistad keelatud.',
      'Ärge vahetage voodikohti ilma loata.',
      'Ärge andke/võtke asju teistelt vangidelt.'
    ],
    EN: [
      'No changes to furnishings or putting up mirrors.',
      'Nothing stuck to walls (use the sticky board).',
      'No covering lamps, cameras, or food hatches.',
      'No fermenting food.',
      'No homemade electrical devices or tools.',
      'Don\'t swap beds/shelves without permission.',
      'Don\'t accept/give items to other inmates.'
    ]
  };

  const title = { ET: 'Eluruumid', EN: 'Living Quarters' };

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
              <h3 className="text-3xl md:text-4xl font-black text-[var(--color-brand-blue)] uppercase tracking-tighter italic">REEGLID</h3>
            </div>
            
            <div className="space-y-6 relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-[var(--color-brand-blue)]/5 rounded-full" />
              {(steps[language] || steps.EN).map((step, idx) => (
                <div key={idx} className="relative pl-16 md:pl-20 group">
                  <div className="absolute left-4 md:left-6 top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-bg-surface)] border-4 border-[var(--color-brand-gold)] z-10" />
                  <div className="bg-[var(--color-bg-surface)] p-6 md:p-8 rounded-[32px] border-2 border-[var(--color-border-subtle)] shadow-sm">
                    <p className="text-lg md:text-2xl font-bold leading-relaxed italic">
                      "{step}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </motion.div>
    </motion.div>
  );
}

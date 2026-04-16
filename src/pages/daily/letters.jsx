import React from 'react';
import Section from "../../components/ui/Section";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailyLetters({ language = 'ET' }) {
  const content = {
    ET: 'Kirju saab saata ja vastu võtta tavapostiga. Postikulud tasute oma isikuarvelt. Erandkorras (riigiasutustele) võib vangla kulud katta.\n\nSisu kontroll: Kirja sisu loetakse ainult kohtumäärusega. Kuid vangla võib ümbrikke teie juuresolekul avada, et kontrollida keelatud esemeid. Järelevalveorganitele saadetavaid kirju ei kontrollita.\n\nKellele võib kirjutada: Perele, tuttavatele, advokaatidele. Ei tohi kirjutada isikutele, kelle aadressi pole või kes on ametnike hinnangul ohtlikud.',
    EN: 'Letters are sent and received via regular mail. Postage costs are paid from your personal account. In exceptional cases (to government agencies), the prison may cover postage.\n\nContent: Letter content can only be read with a court order. However, the prison may open envelopes in your presence to check for prohibited items. Letters to supervisory bodies cannot be inspected.\n\nWho: Family members, acquaintances, lawyers. You cannot write to someone whose address cannot be verified or who is considered dangerous.'
  };

  const title = { ET: 'Kirjavahetus', EN: 'Correspondence' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl prose-slate max-w-full font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12">
            {content[language]}
          </div>
        </Section>
      </motion.div>
    </motion.div>
  );
}

import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function ArrivalSearch({ language = 'ET' }) {
  const content = {
    ET: 'Olete saabunud vanglasse. On arusaadav, kui tunnete ebakindlust või ärevust. Meie eesmärk on teie turvalisus ja toetamine.\n\nSaabumisel läbiotsitakse teid samast soost ametniku poolt. Teil palutakse riided seljast võtta, kuid mitte kunagi täiesti alasti — läbiotsimine toimub pool keha korraga privaatses alas. Teilt võetakse sõrmejäljed ja fotod (sh eritunnused nagu tätoveeringud ja armid).\n\nTeie kohta avatakse isikutoimik, mis sisaldab isikut tõendavat dokumenti, kohtudokumente ja karistusega seotud dokumente. Teie isikutunnistust hoitakse turvaliselt ja see tagastatakse vabanemisel.',
    EN: "You have arrived at the prison. It's understandable to feel uncertain or anxious. The goal is your safety and support.\n\nUpon arrival, you will be searched by an officer of the same gender. You will be asked to undress but never completely naked — the search is done half-body at a time in a private area. Your fingerprints and photos (including distinguishing features like tattoos and scars) will be taken.\n\nA personal file will be opened containing your identification document, court documents, and sentence-related documents. Your ID will be securely stored and returned upon release."
  };

  const tips = {
    ET: ['Isiklikud asjad, mis pole vanglas lubatud, hoiustatakse. Saate need kätte vabanemisel.'],
    EN: ["Personal belongings not allowed in prison will be stored. You'll get them back upon release."]
  };

  const title = { ET: 'Otsing ja dokumendid', EN: 'Search & Documents' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Saabumine' : 'Arrival'}>
          <div className="prose prose-lg md:prose-2xl text-balance max-w-full font-bold whitespace-pre-wrap leading-relaxed mb-12">
            {content[language]}
          </div>

          {(tips[language] || tips.EN).map((t, i) => (
            <Tip key={i}>{t}</Tip>
          ))}
        </Section>
      </motion.div>
    </motion.div>
  );
}

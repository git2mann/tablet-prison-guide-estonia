import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function ArrivalHealth({ language = 'ET' }) {
  const content = {
    ET: <>Teid testitakse alkoholi ja uimastite tarvitamise suhtes ning võetakse DNA-proov. Meditsiinitöötaja hindab teie üldist tervist, kaardistab haigused (sh kroonilised) ja tagab ravi jätkumise.{"\n\n"}Hinnatakse ka teie vaimset seisundit. Kui teil on vaimse tervise probleeme — sealhulgas alkoholi-/uimastisõltuvus või suitsiidimõtted — teavitage sellest viivitamatult oma <Keyword word="contact person" language={language}>kontaktisikut</Keyword> või valvurit. Töötajad on koolitatud aitama ja suunavad teid spetsialistide juurde.</>,
    EN: <>You will be tested for alcohol and drug use, and a DNA sample will be taken. A medical professional will assess your overall health, map out illnesses (including chronic ones), and ensure treatment continues.{"\n\n"}Your mental state will also be assessed. If you have mental health issues — including alcohol/drug addiction or suicidal thoughts — inform your <Keyword word="contact person" language={language}>contact person</Keyword> or guard immediately. Staff are trained to help and will refer you to specialists.</>
  };

  const warnings = {
    ET: ['Isiklikud ravimid on vanglas keelatud. Teavitage meditsiinitöötajaid kõigist käimasolevatest ravidest koheselt, et vangla saaks teile vajalikud ravimid tagada.'],
    EN: ['Personal medications are prohibited in prison. Inform medical staff about all ongoing treatments immediately so the prison can provide your medications.']
  };

  const tips = {
    ET: ['Kui te ei valda eesti või vene keelt piisavalt hästi, paluge tõlki — vangla korraldab tõlke või kasutab videotõlketeenust.'],
    EN: ["If you don't speak Estonian or Russian well enough, request a translator — the prison will arrange one or use a video translation service."]
  };

  const title = { ET: 'Tervisekontroll', EN: 'Health Check' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Saabumine' : 'Arrival'}>
          <div className="prose prose-lg md:prose-2xl text-balance max-w-full font-bold whitespace-pre-wrap leading-relaxed mb-12">
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

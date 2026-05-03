import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function ArrivalNeeds({ language = 'ET' }) {
  const title = { ET: 'Baasvajad', EN: 'Basic Needs' };
  const sub = { ET: 'Saabumine', EN: 'Arrival' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={sub[language]}>
          <div className="prose prose-lg md:prose-2xl text-balance max-w-full font-bold whitespace-pre-wrap leading-relaxed mb-12 text-balance">
            {language === 'ET' ? (
              <>
                Teile luuakse <Keyword word="personal account" language={language}>isikuarve</Keyword> — ametnik või <Keyword word="contact person" language={language}>kontaktisik</Keyword> annab teile arvenumbri. Teile väljastatakse 1-eurose krediidiga <Keyword word="phone card" language={language}>telefonikaart</Keyword> (~10–20 min), et saaksite lähedastele helistada.
                {"\n\n"}
                Sularaha ei ole vanglas lubatud. Isiklikud riided ei ole süüdimõistetutele lubatud (vahistatud võivad kanda oma riideid). Vanglas kehtivad ranged reeglid ja päevakava — tutvuge nendega järgmistes jaotistes.
              </>
            ) : (
              <>
                A <Keyword word="personal account" language={language}>personal account</Keyword> will be created for you — the officer or <Keyword word="contact person" language={language}>contact person</Keyword> will provide the account number. A <Keyword word="phone card" language={language}>phone card</Keyword> with €1 credit (~10–20 min) will be issued so you can call loved ones.
                {"\n\n"}
                Cash is not allowed in prison. Personal clothing is not allowed for convicts (arrested persons may wear their own). There are strict rules and a daily schedule — familiarize yourself with them in the following sections.
              </>
            )}
          </div>

          <Table 
            headers={table.headers[language] || table.headers.EN}
            rows={language === 'ET' ? [
              [<span key="icon">📞</span>, <Keyword key="kw" word="phone card">Telefonikaart (1€ krediiti)</Keyword>],
              [<span key="icon">🆔</span>, <Keyword key="kw" word="personal account">Isikukood ja arvenumber</Keyword>],
              ['🧴','Hügieenikomplekt (seep, hambahari, raseerija)'],
              ['👕','Vanglariided (jakk, püksid, särk)'],
              ['👟','Jalatsid (kui teil endal pole)'],
              ['🛏️','Voodipesu, padi ja rätik'],
              ['🍽️','Söögiriistad'],
            ] : [
              [<span key="icon">📞</span>, <Keyword key="kw" word="phone card">Phone card (€1 credit)</Keyword>],
              [<span key="icon">🆔</span>, <Keyword key="kw" word="personal account">Personal ID number</Keyword>],
              ['🧴','Hygiene pack (soap, toothbrush, razor)'],
              ['👕','Prison clothing (jacket, pants, T-shirt)'],
              ['👟',"Shoes (if you don't have any)"],
              ['🛏️','Bedding, pillow & towel'],
              ['🍽️','Eating utensils'],
            ]}
          />
        </Section>
      </motion.div>
    </motion.div>
  );
}

const table = {
  headers: { ET: ['Ikoon', 'Väljastatav ese'], EN: ['Icon', 'Item Issued'] }
};

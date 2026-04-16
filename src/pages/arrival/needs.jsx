import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function ArrivalNeeds({ language = 'ET' }) {
  const content = {
    ET: 'Teile luuakse isikuarve — ametnik või kontaktisik annab teile arvenumbri. Teile väljastatakse 1-eurose krediidiga telefonikaart (~10–20 min), et saaksite lähedastele helistada.\n\nSularaha ei ole vanglas lubatud. Isiklikud riided ei ole süüdimõistetutele lubatud (vahistatud võivad kanda oma riideid). Vanglas kehtivad ranged reeglid ja päevakava — tutvuge nendega järgmistes jaotistes.',
    EN: 'A personal account will be created for you — the officer or contact person will provide the account number. A phone card with €1 credit (~10–20 min) will be issued so you can call loved ones.\n\nCash is not allowed in prison. Personal clothing is not allowed for convicts (arrested persons may wear their own). There are strict rules and a daily schedule — familiarize yourself with them in the following sections.'
  };

  const table = {
    headers: { ET: ['Ikoon', 'Väljastatav ese'], EN: ['Icon', 'Item Issued'] },
    rows: {
      ET: [
        ['📞','Telefonikaart (1€ krediiti)'],
        ['🆔','Isikukood ja arvenumber'],
        ['🧴','Hügieenikomplekt (seep, hambahari, raseerija)'],
        ['👕','Vanglariided (jakk, püksid, särk)'],
        ['👟','Jalatsid (kui teil endal pole)'],
        ['🛏️','Voodipesu, padi ja rätik'],
        ['🍽️','Söögiriistad'],
      ],
      EN: [
        ['📞','Phone card (€1 credit)'],
        ['🆔','Personal ID number'],
        ['🧴','Hygiene pack (soap, toothbrush, razor)'],
        ['👕','Prison clothing (jacket, pants, T-shirt)'],
        ['👟',"Shoes (if you don't have any)"],
        ['🛏️','Bedding, pillow & towel'],
        ['🍽️','Eating utensils'],
      ]
    }
  };

  const title = { ET: 'Baasvajad', EN: 'Basic Needs' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Saabumine' : 'Arrival'}>
          <div className="prose prose-lg md:prose-2xl prose-slate max-w-full font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12">
            {content[language]}
          </div>

          <Table 
            headers={table.headers[language] || table.headers.EN}
            rows={table.rows[language] || table.rows.EN}
          />
        </Section>
      </motion.div>
    </motion.div>
  );
}

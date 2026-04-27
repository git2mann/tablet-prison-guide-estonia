import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function DailyEshop({ language = 'ET' }) {
  const title = { ET: 'E-pood', EN: 'E-Shop' };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
          <div className="prose prose-lg md:prose-2xl text-balance max-w-full font-bold whitespace-pre-wrap leading-relaxed mb-12">
            {language === 'ET' ? (
              <>
                Tooteid saab vaadata ja tellimusi esitada vangla tahvlis. Tellimusi saab esitada teatud päevadel (tavaliselt kaks korda kuus). Kaup saabub järgmisel nädalal. Hinnale lisandub teenustasu. Logimisel kontrollitakse teie isikut.
                {"\n\n"}
                Saadaval on toit, riided, hügieenitarbed, kirjatarbed, mängud ja elektroonika (TV, keetja). Mõned tooted on ainult naistele. Elektroonikaseadmed saavad enne väljastamist turvakleebise.
              </>
            ) : (
              <>
                Products can be viewed and orders placed on the prison tablet. Orders can be placed on certain days (usually twice a month per unit schedule). Goods arrive the following week. A service fee is added to prices. Your identity is verified upon login.
                {"\n\n"}
                Available items: food, clothing (socks, T-shirts, underwear), hygiene products, stationery (notebooks, pens, batteries), games, and electronics (TVs, kettles). Some products are women-only. Electronic devices receive a security sticker before delivery.
              </>
            )}
          </div>

          <Warning>
            {language === 'ET' ? (
              <>Kui tellimus on esitatud, peate selle eest maksma isegi siis, kui kaubast loobute. Kogusepiirangute ületamisel kaupa ei väljastata, kuid raha peetakse kinni.</>
            ) : (
              <>Once ordered, you must pay even if you refuse the goods. Exceeding quantity limits means no goods but money still deducted.</>
            )}
          </Warning>

          <Tip>
            {language === 'ET' ? (
              <>Kui soovite midagi, mida kataloogis pole, esitage kirjalik taotlus. Tarneviivitustest teatage <Keyword word="e-shop" language={language}>e-poe</Keyword> rakenduses.</>
            ) : (
              <>If you want something not in the catalog, submit a written request for prison approval. Report delivery problems in the <Keyword word="e-shop" language={language}>e-shop</Keyword> app.</>
            )}
          </Tip>
        </Section>
      </motion.div>
    </motion.div>
  );
}

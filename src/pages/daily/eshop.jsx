import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function DailyEshop({ language = 'ET' }) {
  const content = {
    ET: 'Tooteid saab vaadata ja tellimusi esitada vangla tahvlis. Tellimusi saab esitada teatud päevadel (tavaliselt kaks korda kuus). Kaup saabub järgmisel nädalal. Hinnale lisandub teenustasu. Logimisel kontrollitakse teie isikut.\n\nSaadaval on toit, riided, hügieenitarbed, kirjatarbed, mängud ja elektroonika (TV, keetja). Mõned tooted on ainult naistele. Elektroonikaseadmed saavad enne väljastamist turvakleebise.',
    EN: 'Products can be viewed and orders placed on the prison tablet. Orders can be placed on certain days (usually twice a month per unit schedule). Goods arrive the following week. A service fee is added to prices. Your identity is verified upon login.\n\nAvailable items: food, clothing (socks, T-shirts, underwear), hygiene products, stationery (notebooks, pens, batteries), games, and electronics (TVs, kettles). Some products are women-only. Electronic devices receive a security sticker before delivery.'
  };

  const warnings = {
    ET: ['Kui tellimus on esitatud, peate selle eest maksma isegi siis, kui kaubast loobute. Kogusepiirangute ületamisel kaupa ei väljastata, kuid raha peetakse kinni.'],
    EN: ['Once ordered, you must pay even if you refuse the goods. Exceeding quantity limits means no goods but money still deducted.']
  };

  const tips = {
    ET: ['Kui soovite midagi, mida kataloogis pole, esitage kirjalik taotlus. Tarneviivitustest teatage e-poe rakenduses.'],
    EN: ['If you want something not in the catalog, submit a written request for prison approval. Report delivery problems in the e-shop app.']
  };

  const title = { ET: 'E-pood', EN: 'E-Shop' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

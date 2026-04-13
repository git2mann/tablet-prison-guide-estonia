import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";

export default function DailyHygiene({ language = 'ET' }) {
  const content = {
    ET: 'Isiklik puhtus on teie vastutus. Kasutage ühist duširuumi või kambri dušši. Juuksuriteenus on tasuta. Tätoveerimine on keelatud.\n\nTasuta pakk: Saabumisel saate seebi, hambaharja, pasta ja raseerijad. Hiljem saab seda taotleda iga 3 kuu tagant, kui teie vabad vahendid on olnud alla 15€ kuus.\n\nRiietus: Süüdimõistetud peavad kandma vanglariideid (pruunid püksid ja jakk). Vahistatud ja avavangla vangid võivad kanda isiklikke riideid. Lubatud on isiklik soe aluspesu, sokid ja jalatsid (kuni 4 paari).',
    EN: 'Personal cleanliness is your responsibility. Use only the shared shower room or cell shower. Barber service is free. Tattooing is prohibited.\n\nFree pack: On arrival you receive soap, toothbrush, toothpaste, disposable razors. After that, you can apply every 3 months if your average free funds were below €15/month.\n\nClothing: Convicts must wear prison clothing (usually brown pants and jacket). Arrested individuals and open prison inmates may wear personal clothing. Allowed personal items: warm underwear, socks, shoes (up to 4 pairs).'
  };

  const warnings = {
    ET: ['Humanitaarabi keeldutakse, kui teil on asjad olemas, vahendeid piisavalt või olete sarnaseid asju vanglast välja saatnud.'],
    EN: ['Humanitarian aid is denied if: you already have the item, your average 3-month balance exceeds the item cost, or you previously sent similar items out of prison.']
  };

  const title = { ET: 'Hügieen ja riietus', EN: 'Hygiene & Clothing' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

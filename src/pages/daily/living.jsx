import React from 'react';
import Section from "../../components/ui/Section";

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
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <div className="bg-slate-900 rounded-[60px] p-16 text-white space-y-12 my-12">
        <div className="flex items-center gap-8 text-blue-400">
          <h3 className="text-4xl font-black uppercase tracking-tight italic">RULES</h3>
        </div>
        <ul className="grid gap-8">
          {(steps[language] || steps.EN).map((step, idx) => (
            <li key={idx} className="flex items-start gap-8 bg-white/5 p-8 rounded-[40px] border border-white/10"> 
              <span className="flex items-center justify-center w-16 h-16 rounded-[24px] bg-blue-600 text-white text-3xl font-black shrink-0">{idx + 1}</span> 
              <p className="text-2xl font-bold text-slate-200 leading-relaxed">{step}</p> 
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

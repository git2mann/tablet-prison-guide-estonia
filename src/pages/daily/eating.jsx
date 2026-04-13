import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function DailyEating({ language = 'ET' }) {
  const content = {
    ET: 'Söök on kolm korda päevas ja see tuuakse kambrisse. Lõunat saab süüa ka koolis või tööl. Peate toidu ise vastu võtma ja nõud tagastama (Tallinn) või pesema (Viru). Toidujäägid võib panna lubatud anumatesse.\n\nEridieedid: Tervislikel põhjustel võib arst määrata eridieedi või lisatoidu. Kui te ei söö liha (usulistel või muudel põhjustel), võite taotleda taimetoitu või sealiha vaba toitu — kuid siis ei tohi te e-poest lihatooteid osta.\n\nVõite vanglatoidust täielikult loobuda põhjendatud taotlusega, kuid ei saa loobuda ainult ühest toidukorrast.',
    EN: 'Food is provided three times a day and brought to the cell. Lunch can also be taken at school or work. You must pick up food yourself, return dishes after eating (Tallinn) or wash them (Viru). Leftover food can be transferred to approved containers.\n\nSpecial Diets: For health reasons, a doctor can prescribe a special diet or supplementary food. If you don\'t eat meat (religious or other reasons), apply for vegetarian or pork-free food — but you must not purchase meat products from the e-shop, or the option is revoked.\n\nYou can refuse prison food entirely by submitting a justified request. However, you cannot refuse just one meal.'
  };

  const warnings = {
    ET: ['Kui toidu kvaliteet on halb, teavitage töötajaid koheselt — hilisemaid kaebusi ei saa kontrollida.'],
    EN: ['If food quality is poor, inform prison staff immediately — later complaints cannot be verified.']
  };

  const tips = {
    ET: ['Täiendavat toitu (juust, konservid, maiustused, kohv, vürtsid) saate osta e-poest.'],
    EN: ['You can buy additional food (bread, cheese, canned goods, sweets, coffee, tea, spices) from the e-shop.']
  };

  const title = { ET: 'Söömine ja toit', EN: 'Eating & Food' };

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

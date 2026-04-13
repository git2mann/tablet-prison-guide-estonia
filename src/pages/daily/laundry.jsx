import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";

export default function DailyLaundry({ language = 'ET' }) {
  const content = {
    ET: 'Vanglariideid ja voodipesu pestakse tasuta. Käterätid ja linad iga 14 päeva tagant. Isiklike riiete pesemine on tasuline (pesuvahendid e-poest või pesula hinnakirja alusel).\n\nRemont: Vanglariiete ja tööriiete remont on tasuta. Isiklike riiete remont pesulas on tasuline (1.50€–4€ ese). Jalatsite remont 1€ (tasuta, kui vahendeid on alla 9€).',
    EN: 'Prison clothes and bed linens are washed free of charge. Hand towels and linens every 14 days. Personal clothes washing is paid (buy tools from e-shop or pay per laundry list).\n\nRepair: Prison clothing and work clothes: repaired free. Personal clothes: paid service via laundry (€1.50–€4/item). Shoe repair costs €1 (free if funds below €9).'
  };

  const warnings = {
    ET: ['Aluspesu, sokke ja nahkesemeid pesulas ei pesta — need peate ise pesema. Remonditöödel puudub garantii.'],
    EN: ['Underwear, socks, and leather items must NOT go to the laundry — wash these yourself. No warranty on repairs.']
  };

  const title = { ET: 'Pesemine ja remont', EN: 'Washing & Repair' };

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

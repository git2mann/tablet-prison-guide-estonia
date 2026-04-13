import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";

export default function DailyMovement({ language = 'ET' }) {
  const content = {
    ET: 'Vangla territooriumil liikumine toimub alati koos ametnikuga. Avavanglas on liikumine vabam.\n\nJalutuskäik: kord päevas, vähemalt 1 tund. Kandke ilmastikukindlaid riideid. Lubatud: taskurätik, kuni 0.5L vett plastikpudelis, käekell, usuline ese, abielusõrmus.\n\nLäbiotsimine: Toimub osakonnast lahkumisel/sisenemisel. Seiske näoga seina poole, käed pinnal.',
    EN: 'Movement on prison territory always requires an officer. In open departments, movement is freer.\n\nWalks: Once daily, at least 1 hour. Wear weather-appropriate clothing. Allowed: handkerchief, up to 0.5L water in plastic bottle, wristwatch, religious item, wedding ring.\n\nSearches: Done when leaving/entering the department. Stand facing the wall with hands on the surface.'
  };

  const warnings = {
    ET: ['Jalutusalal ei tohi midagi maha visata ega üles korjata. Teiste jalutusaladega suhtlemine keelatud.'],
    EN: ['Nothing may be thrown, left, or picked up in the walking area. No communicating with inmates outside your area.']
  };

  const steps = {
    ET: [
      'Liikumine paaris ja kolonnis (Tallinn).',
      'Ei tohi asju maast võtta ega visata.',
      'Füüsiline kontakt teistega keelatud.',
      'Ukseaugust sissekiikamine keelatud.',
      'Ärge puudutage lukke ega punaseid jooni.',
      'Väljudes võtke kaasa ainult vajalik (kooliasjad lubatud).'
    ],
    EN: [
      'Walk in pairs in a column (Tallinn).',
      'Don\'t take things from the ground or throw things.',
      'No physical contact with others.',
      'Don\'t peek through door peepholes.',
      'Don\'t touch locks or red lines.',
      'Take only necessary approved items when leaving.'
    ]
  };

  const title = { ET: 'Liikumine ja jalutuskäigud', EN: 'Movement & Walks' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <div className="bg-slate-900 rounded-[60px] p-16 text-white space-y-12 my-12">
        <div className="flex items-center gap-8 text-blue-400">
          <h3 className="text-4xl font-black uppercase tracking-tight italic">PROCEDURE</h3>
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

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

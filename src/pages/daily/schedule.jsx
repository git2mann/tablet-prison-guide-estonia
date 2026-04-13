import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function DailySchedule({ language = 'ET' }) {
  const content = {
    ET: 'Vanglas kehtib range päevakava. Peate olema oma kambris, kui ajakava seda nõuab. Ajakava muutustest teavitatakse helisüsteemi, kambriterminali või ametniku kaudu.',
    EN: 'Prison has a strict daily schedule. You must be in your cell when the schedule requires it. Schedule changes will be communicated via sound system, cell terminal, or officer.'
  };

  const table = {
    headers: { ET: ['Aeg', 'Tegevus'], EN: ['Time', 'Activity'] },
    rows: {
      ET: [
        ["06:00","Äratus — elekter sisse, kambri korrastamine, hügieen"],
        ["06:20–07:15","Hommikusöök, hommikune loendus, ravimid"],
        ["08:00–17:00","Tegevused — õppimine, töö, programmid, huvialad"],
        ["11:30–12:30","Lõuna — tuuakse kambrisse või töökohal"],
        ["17:30–18:30","Õhtusöök — õhtune loendus, ravimid"],
        ["22:00","Öörahu — elekter välja (erandkorras kuni südaööni)"],
      ],
      EN: [
        ["06:00","Wake up — electricity on, tidy cell, hygiene"],
        ["06:20–07:15","Breakfast served, morning count, medication"],
        ["08:00–17:00","Activities — study, work, programs, hobbies"],
        ["11:30–12:30","Lunch — brought to cell or at workplace"],
        ["17:30–18:30","Dinner — evening count, medication"],
        ["22:00","Night rest — electricity off (exception: unit manager may allow until midnight)"],
      ]
    }
  };

  const warnings = {
    ET: ['Peate olema oma kambris, kui ajakava seda nõuab.'],
    EN: ['You must be in your cell when the schedule requires it.']
  };

  const steps = {
    ET: [
      'Olge korrektselt riides, nimesilt nähtaval.',
      'Seiske oma tehtud voodi ees.',
      'Hoidke käed nähtaval — ärge nõjatuge ega istuge.',
      'Lülitage kõik seadmed välja või hääletule režiimile.',
      'Küsimisel öelge selgelt oma nimi.',
      'Ärge sööge, lugege, rääkige ega häirige loendust.'
    ],
    EN: [
      'Be properly dressed with your name tag visible.',
      'Stand in front of your made bed.',
      'Keep hands visible — don\'t lean or sit.',
      'Turn off all devices or set to silent.',
      'If asked, clearly state your name.',
      'Don\'t eat, read, talk, or disturb the count.'
    ]
  };

  const tips = {
    ET: ['Loendused toimuvad hommikul ja õhtul teie kambris. Kui olete tööl, toimub loendus seal.'],
    EN: ['Counts happen morning and evening in your cell. If you\'re at work, count happens there.']
  };

  const title = { ET: 'Päevakava ja loendus', EN: 'Schedule & Count' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language] || table.headers.EN}
        rows={table.rows[language] || table.rows.EN}
      />

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}

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

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

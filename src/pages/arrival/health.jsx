import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";

export default function ArrivalHealth({ language = 'ET' }) {
  const content = {
    ET: 'Teid testitakse alkoholi ja uimastite tarvitamise suhtes ning võetakse DNA-proov. Meditsiinitöötaja hindab teie üldist tervist, kaardistab haigused (sh kroonilised) ja tagab ravi jätkumise.\n\nHinnatakse ka teie vaimset seisundit. Kui teil on vaimse tervise probleeme — sealhulgas alkoholi-/uimastisõltuvus või suitsiidimõtted — teavitage sellest viivitamatult oma kontaktisikut või valvurit. Töötajad on koolitatud aitama ja suunavad teid spetsialistide juurde.',
    EN: 'You will be tested for alcohol and drug use, and a DNA sample will be taken. A medical professional will assess your overall health, map out illnesses (including chronic ones), and ensure treatment continues.\n\nYour mental state will also be assessed. If you have mental health issues — including alcohol/drug addiction or suicidal thoughts — inform your contact person or guard immediately. Staff are trained to help and will refer you to specialists.'
  };

  const warnings = {
    ET: ['Isiklikud ravimid on vanglas keelatud. Teavitage meditsiinitöötajaid kõigist käimasolevatest ravidest koheselt, et vangla saaks teile vajalikud ravimid tagada.'],
    EN: ['Personal medications are prohibited in prison. Inform medical staff about all ongoing treatments immediately so the prison can provide your medications.']
  };

  const tips = {
    ET: ['Kui te ei valda eesti või vene keelt piisavalt hästi, paluge tõlki — vangla korraldab tõlke või kasutab videotõlketeenust.'],
    EN: ["If you don't speak Estonian or Russian well enough, request a translator — the prison will arrange one or use a video translation service."]
  };

  const title = { ET: 'Tervisekontroll', EN: 'Health Check' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Saabumine' : 'Arrival'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language].split('kontaktisikut').map((part, i, arr) => (
            <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <Keyword word="contact person">{language === 'ET' ? 'kontaktisikut' : 'contact person'}</Keyword>}
            </React.Fragment>
        ))}
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

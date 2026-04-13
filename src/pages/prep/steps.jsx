import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Card from "../../components/ui/Card";

export default function PrepSteps({ language = 'ET' }) {
  const content = {
    ET: 'Alustage ettevalmistustega mitu kuud enne vabanemist. Teie kontaktisik aitab vajalike taotlustega.',
    EN: 'Start preparations several months before release. Your contact person will help with necessary applications.'
  };

  const steps = {
    ET: [
      'Dokumendid & Pank: kontrolli ID kehtivust, uuenda vanglas. Kinnita arve vabanemisfondi jaoks.',
      'Elukoht: võta ühendust omavalitsusega eluaseme või sotsiaalabi saamiseks.',
      'Tervishoid: taga ravi jätkumine, leia perearst, telli digiretseptid.',
      'Rahaseis: koosta võlgade tasumise kava, lepi kohtutäituriga kokku graafik.',
      'Töö: helista Töötukassasse enne vabanemist, registreeri kohe pärast vabanemist.',
      'Toetusvõrgustik: suhtle perega, küsi abi kontaktisikult ja meedikutelt.'
    ],
    EN: [
      'Documents & Bank: check ID validity, renew in prison. Verify account for release funds.',
      'Housing: contact municipality for residence or social assistance.',
      'Healthcare: ensure treatment continues, find family doctor, get digital prescriptions.',
      'Finances: create debt repayment plan, agree on schedule with bailiff.',
      'Employment: call Unemployment Fund before release, register immediately after.',
      'Support: contact family, ask contact person and medics for help.'
    ]
  };

  const warnings = {
    ET: ['Vabanemisel tagastage kogu vangla vara. Isiklikke asju ei tohi maha jätta. Kui teil pole riideid, annab vangla need.'],
    EN: ['Return all prison property upon release. Personal items must not be left behind. If you lack clothing, the prison will provide it.']
  };

  const title = { ET: 'Olulised sammud', EN: 'Important Steps' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Vabanemise ettevalmistus' : 'Preparation'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {(steps[language]).map((step, idx) => (
          <Card key={idx} className="border-l-[12px] border-teal-600">
            <p className="text-xl font-bold text-slate-700">{step}</p>
          </Card>
        ))}
      </div>

      {(warnings[language]).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}
    </Section>
  );
}

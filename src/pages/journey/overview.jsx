import React from 'react';
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";

export default function JourneyOverview({ language = 'ET' }) {
  const content = {
    ET: 'Teie teekond vanglas koosneb etappidest: saabumine, igapäevaelu, tegevused ja tee vabadusse.',
    EN: 'Your journey in prison consists of stages: arrival, daily life, activities, and the path to freedom.'
  };

  const steps = {
    ET: [
      'Saabumine: läbiotsimine, tervisekontroll, baasvajad, isikuarve.',
      'Igapäevaelu: päevakava, telefon, kirjad, söömine, hügieen, liikumine.',
      'Reintegratsioon: riskihindamine, ITK, sotsiaalprogrammid, haridus, töö.',
      'Vabaduse tee: avavangla, ETEV (elektrooniline), TEV (hooldus).',
      'Ettevalmistus: dokumendid, elukoht, töö, tervishoid, toetus.'
    ],
    EN: [
      'Arrival: search, health check, basic needs, account.',
      'Daily Life: schedule, phone, letters, eating, hygiene, movement.',
      'Reintegration: risk assessment, ITK, social programs, education, employment.',
      'Freedom Path: open prison, ETEV (electronic), TEV (probation).',
      'Preparation: documents, housing, employment, healthcare, support.'
    ]
  };

  const table = {
    headers: { ET: ['Olulised kuupäevad'], EN: ['Important Dates'] },
    rows: {
      ET: [
        ['📅 Saabumise kuupäev'],
        ['📅 Avavangla (AVO) kuupäev ITK järgi'],
        ['📅 AVO kuupäev seaduse järgi'],
        ['📅 ETEV kuupäev'],
        ['📅 TEV kuupäev'],
        ['📅 Vabanemise kuupäev'],
      ],
      EN: [
        ['📅 Arrival date'],
        ['📅 Open prison (AVO) date from ITK'],
        ['📅 AVO date from sentence'],
        ['📅 ETEV date'],
        ['📅 TEV date'],
        ['📅 Release date'],
      ]
    }
  };

  const title = { ET: 'Teekonna etapid', EN: 'Journey Stages' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Minu teekond' : 'My Journey'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {(steps[language]).map((step, idx) => (
          <Card key={idx} className="border-l-[12px] border-cyan-600">
            <p className="text-xl font-bold text-slate-700">{step}</p>
          </Card>
        ))}
      </div>

      <Table 
        headers={table.headers[language]}
        rows={table.rows[language]}
      />
    </Section>
  );
}

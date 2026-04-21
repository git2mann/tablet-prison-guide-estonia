import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";

export default function HealthServices({ language = 'ET' }) {
  const content = {
    ET: 'Teie terviseandmed on konfidentsiaalsed — neile pääsevad ligi ainult meditsiinitöötajad. Teil on õigus samaväärsele ravile kui vabaduses viibivatel isikutel.',
    EN: 'Your health data is confidential — only medical staff can access it. You have the right to equivalent care as a free person.'
  };

  const table = {
    headers: { ET: ['Teenus', 'Detailid', 'Maksumus'], EN: ['Service', 'Details', 'Cost'] },
    rows: {
      ET: [
        ["Perearst & õde","Igapäevane tervis, retseptid","Tasuta"],
        ["Erakorraline 24/7","Tugev valu, traumad — valvur kutsub õe","Tasuta"],
        ["Eriarstid","Psühhiaater, neurolog jne — suunamisega","Tasuta"],
        ["Hambaravi","Valu leevendamine, paratamatud tööd","Valu tasuta; proteesid omaosalusega"],
        ["Psühholoogiline abi","Nõustamine, kriisiabi","Tasuta"],
        ["Nägemine","Kontroll, baasprillid","Tasuta; erisoovid omaosalusega"],
      ],
      EN: [
        ["Nurse & Family Doctor","Daily health, prescriptions","Free"],
        ["Emergency 24/7","Severe pain, trauma — guard calls nurse","Free"],
        ["Specialists","Psychiatrist, neurologist, etc. — referral needed","Free"],
        ["Dental","Pain management, essential repairs","Pain free; dentures at cost"],
        ["Psychological","Counseling, crisis intervention","Free"],
        ["Vision","Eye exam, basic glasses","Standard free; special at cost"],
      ]
    }
  };

  const title = { ET: 'Meditsiiniteenused', EN: 'Medical Services' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Tervis ja heaolu' : 'Health & Wellbeing'}>
      <div className="prose prose-lg md:prose-2xl text-balance  prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language]}
        rows={table.rows[language]}
      />
    </Section>
  );
}

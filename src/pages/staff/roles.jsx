import React from 'react';
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Tip from "../../components/ui/Tip";

export default function StaffRoles({ language = 'ET' }) {
  const content = {
    ET: 'Iga töötaja tegeleb erinevate ülesannetega. Õige inimese poole pöördumine tähendab kiiremat abi.',
    EN: 'Each employee handles different tasks. Approaching the right person means faster help.'
  };

  const roles = {
    ET: [
      { t: 'Valvur', d: 'päevaringid, loendused, režiimi tagamine, toit, ravimid, telefon/tahvel.' },
      { t: 'Kontaktisik', d: 'peamine tugi, karistuse planeerimine, tegevused (õpe, töö), kirjad, taotlused.' },
      { t: 'Sotsiaaltöötaja', d: 'programmid, pere-töö, motivatsiooni hindamine, soovitused kontaktisikule.' },
      { t: 'Psühholoog', d: 'vaimne tugi, kuulamine, stressiga toimetulek, teraapia, suunamine eriarstile.' },
      { t: 'Kaplan', d: 'hingehoid, palvused, usuline tugi (Lutheri, Õigeusu jne), piiblid/koraanid.' },
      { t: 'Kriminaalhooldaja', d: 'järelevalve pärast vabanemist, riskihindamine, koostöö kohtuga.' }
    ],
    EN: [
      { t: 'Guard', d: 'rounds, counts, regime enforcement, food, meds, phone/tablet assistance.' },
      { t: 'Contact Person', d: 'main support, sentence planning, activities (study, work), letters, applications.' },
      { t: 'Social Worker', d: 'programs, family work, motivation assessment, recommendations.' },
      { t: 'Psychologist', d: 'mental support, listening, stress coping, therapy, referrals.' },
      { t: 'Chaplain', d: 'spiritual care, prayers, religious support, Bibles/Qurans.' },
      { t: 'Probation Officer', d: 'supervision after release, risk assessment, court collaboration.' }
    ]
  };

  const tips = {
    ET: ['Kõik töötajad on siin teid toetamas. Ärge kartke küsida abi või nõu!'],
    EN: ['All employees are here to support you. Don\'t hesitate to ask for help or advice!']
  };

  const title = { ET: 'Rollid ja ülesanded', EN: 'Roles & Tasks' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Töötajate teejuht' : 'Staff Guide'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <div className="space-y-6 mb-12">
        {(roles[language]).map((role, idx) => (
          <Card key={idx} className="border-l-[12px] border-indigo-600">
            <h4 className="text-2xl font-black text-indigo-900 uppercase mb-2">{role.t}</h4>
            <p className="text-xl font-bold text-slate-600">{role.d}</p>
          </Card>
        ))}
      </div>

      {(tips[language]).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

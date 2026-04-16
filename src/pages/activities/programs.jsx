import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Accordion from '../../components/ui/Accordion';

export default function ActPrograms({ language = 'ET' }) {
  const content = {
  ET: {
    title: "SOTSIAALPROGRAMMID",
    sub: "Kui Sul on probleeme sõltuvusainetega, viha ohjamisega või kalduvus vägivaldsele käitumisele, on Sul võimalik osaleda sotsiaalprogrammides, mis aitavad nendega paremini toime tulla. Programmid on loodud selleks, et toetada isiklikku arengut, parandada toimetulekut ja arendada sotsiaalseid oskusi. Lisaks aitavad need mõista oma käitumist ja õppida uusi, kasulikke viise igapäevaelus toimetulekuks.",
    
    pros: "Sotsiaalprogrammides osalemine tasub end mitmel viisil ära – see võib parandada võimalust pääseda avavanglasse või vabaneda ennetähtaegselt.",
    
    proTip: "Täpsemat infot osalemise kohta saad oma kontaktisikult.",
    
    participateTitle: "Kuidas saan osaleda?",
    
    participateContent: [
      "Sinu jaoks sobivad programmid lepitakse kokku individuaalse täitmiskava (ITK) koostamisel koos kontaktisikuga ning vaadatakse regulaarselt üle.",
      "Kui näed vajadust, võid ise esitada taotluse mõne programmiga liitumiseks. Lõplik valik tugineb aga Sinu riskiteguritel ning kogu senisel käitumisel."
    ],
    
    warning: "Sotsiaalprogrammides osalemine on üldjuhul vabatahtlik, kuid keeldumine võib mõjutada Sinu riskiskoori ning vähendada võimalust pääseda avavanglasse või ennetähtaegselt vabaneda.",
    
    programP: "Sotsiaalprogrammid koos töötamise ja õppimisega moodustavad vangla taasühiskonnastava tegevuse tuumiku ning on osa Sinu individuaalsest täitmiskavast (ITK).",
    
    programInformationTitle: "Oluline teada",
    
    programInfomation: [
      "Sotsiaaltöötaja ei registreeri Sind programmi – ta jagab nende kohta infot või viib neid läbi. Kui soovid programmis osaleda, anna sellest teada otse oma kontaktisikule.",
      "Programmis osalemine ei too automaatselt kaasa avavanglasse pääsu või ennetähtaegset vabanemist. Otsus tehakse kogu Sinu käitumise põhjal, sealhulgas õppimise ja töötamise alusel.",
      "Narkosõltuvuse korral liitu tugigrupiga esimesel võimalusel – eriti oluline on seda teha enne vabanemist."
    ],
    
    programWarning: "Kui oled juba sotsiaalprogrammi registreerunud, siis ära puudu ilma mõjuva põhjuseta."
  },

  EN: {
    title: "Social programs",
    sub: "These are programs designed to support personal development, improve coping skills, and develop social skills. Additionally, they help you understand your behavior and learn new, useful ways to cope in everyday life.",
    pros: "Partipation in social programs can improve your chances of being released to an open prison or being granted early release.",
    proTip: " You can get more detailed information about participation from your contact person.",
    participateTitle: "How to participate?",
    participateContent: [
      "The programs suitable for you are agreed upon during the preparation of the individual implementation plan (ITK) together with the contact person and are reviewed regularly.",
      "If you see the need, you can submit an application to join a program yourself. However, the final choice depends on your risk factors and your overall behavior so far"
    ],
    warning: "Participation in social programs is generally voluntary, but refusal may affect your risk score, reduce the chance of gaining access to open prison or being released early.",
    programP: "The selection of social programs offered in prison is wide and covers very different areas:",
    programInformationTitle: "Important things to note",
    programInfomation: [
      "The social worker does not register you for the program - they share only information about them or they will conduct it. If you wish to participate in the program, please inform the contact person directly",
      "Participation in the program does not automatically lead to access to parole or early release. This decision is made based on your overall behavior, including learning and working, not just participation in the programs.",
      "Join a support group for addiction as soon as possible. It is especially important to join before your release."
    ],
    programWarning: "If you are already registered for the social program, do not miss it without a valid reason."
  }
};
    const table = {
    headers: { ET: ['Programm', 'Sessioone', 'Fookus'], EN: ['Program', 'Sessions', 'Focus'] },
    rows: {
      ET: [
        ["Viha juhtimine","9","Emotsioonide kontroll"],
        ["ART (agressiivsuse asendamine)","18","Sotsiaalsed oskused, konfliktid"],
        ["Pere- ja paarisuhte vägivalla vähendamine","Muutuv","Lähisuhete turvalisus ja vägivaldsete mustritega toimetulek"],
        ["Elustiil 24/7","Muutuv","Sõltuvuskäitumise muutmine"],
        ["Liiklusohutus","Muutuv","Joobes juhtimise probleemid"],
        ["Kristlikud väärtused","Muutuv","Kristlikud väärtused ja hoiakud"]
      ],
      EN: [
        ["Anger Management","9","Focuses on controlling emotions"],
        ["Aggression Replacement Training (ART)","18","Teaches social skills and conflict resolution methods"],
        ["Reducing Family and Partner Violence","Varies","Addresses the safety of intimate relationships and coping with violent patterns"],
        ["Lifestyle 24/7","Varies","Helps change addictive behavior"],
        ["Traffic Safety","Varies","Addresses problem of driving under influence"],
        ["Christian Values","Varies","Focuses on Christian values and attitudes"]
      ]
    }
  };
  const copy= content [language] || content.EN;

  return (
    <Section title={copy.title} sub={copy.sub}>
      <p style={{fontSize:"1.9rem", lineHeight:1.7}}>{copy.pros}</p>

      <Tip>
        {copy.proTip}
      </Tip>
      <Accordion title={copy.participateTitle}>
        <ul style={{ listStyleType: "disc", paddingLeft: 20, color:"#666" , lineHeight: 1.7 }}>
          {copy.participateContent.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Accordion>
      <Warning>
        {copy.warning}
      </Warning>
      <p style={{fontSize:"1.9rem", fontWeight:"bold"}}>{copy.programP}</p>
      <Table headers={table.headers[language]} rows={table.rows[language]} />
      <Accordion title={copy.programInformationTitle}>
        <ul style={{ listStyleType: "disc", paddingLeft: 20, color:"#666" , lineHeight: 1.7 }}>
          {copy.programInfomation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Accordion>
      <Warning>
        {copy.programWarning}
      </Warning>



    </Section>
  );
}

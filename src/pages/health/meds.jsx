import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Accordion from '../../components/ui/Accordion';
export default function HealthMeds({ language = 'ET' }) {
  const content={
    EN:{
      title:"Taking Medication",
      sub:"In prison, you may only possess and take medications according to the applicable regulations. ",
      generalInfo:[
        "Generally, the guard team will distribute medications to you, and they are usually taken twice a day: in the morning and in the evening",
        "Medications containing psychotropic substances will be provided to you by a medical professional, and you must take them in their presence."
      ],
      ruleTitle:"Rules",
      rules:[
        "Shared medications must be swallowed in front of a prison officer. They have the right to check that you have done so",
        "You are not allowed to bring personal medications into the prison – these will be provided on-site by the prison.",
        "Do not collect, share, sell, or exchange your medications with others. ",
        " Taking medication under a false name is prohibited."
      ],
      lastWords:[
        "You can always ask your family doctor how long your treatment is prescribed for and when it will end",
        "You can also inform your family doctor whether the medications are helping or if you need to see a doctor again"
      ],
      rulesWarning: "Giving or exchanging your tablet with others is strictly prohibited and may result in disciplinary action",
    },
    ET:{
      title:"Ravimite võtmine",
      sub:"Vanglas tohib ravimeid omada ja võtta vaid kehtiva korra järgi.",
      generalInfo:[
        "Sulle jagab ravimeid üldjuhul valvemeeskond ning nende võtmine toimub tavaliselt kaks korda päevas: hommikul ja õhtul.",
        "Psühhotroopseid aineid sisaldavaid ravimeid toob Sulle meditsiinitöötaja, kelle juuresolekul tuleb Sul need manustada."
      ],
      ruleTitle:"Reeglid",
      rules:[
        "Jagatud ravimid tuleb alla neelata vanglaametniku ees. Tal on õigus kontrollida, et Sa seda ka tegid.",
        "Isiklikke ravimeid vanglasse kaasa võtta ei tohi – need tagab vangla kohapeal.",
        "Ära kogu, jaga, müü ega vaheta teistega oma ravimeid.",
        "Ravimi võtmine vale nime alt on keelatud."
      ],
      lastWords:[
        "Sul on alati võimalik uurida enda pereõelt, kui kauaks Sulle ravi määrati ja millal see hakkab lõppema",
        "Samuti anda pereõele infot, kas ravimid aitavad või vajad uuesti arsti vastuvõttu."
      ],
      rulesWarning:"Teistele enda tableti andmine või vahetamine on rangelt keelatud ja võib tuua distsiplinaarkaristusa",
    }
  }
  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title} sub={copy.sub}>
        <ul style={{listStyleType:"none"}}>{copy.generalInfo.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <Accordion title={copy.ruleTitle}>
          <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.rules.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        </Accordion>
        <Warning>{copy.rulesWarning}</Warning>
        <ul style={{listStyleType:"none"}}>{copy.lastWords.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
    </Section>
  );
}

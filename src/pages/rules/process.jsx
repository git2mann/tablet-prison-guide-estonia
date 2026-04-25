import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { q } from 'framer-motion/client';
import Accordion from "../../components/ui/Accordion"
export default function RulesProcess({ language = 'ET' }) {
  const content={
    EN:{
      title:"RULES DETENTION",
      sub:"There are a number of rules in prison that you are required to follow.",
      eventTitle:"What happens in the event of a rule violation?",
      events:[
        "The prison officer informs you that the behavior or conduct is inappropriate and orders you to change it or to cease the activity immediately.",
        "If the violation is serious or you do not stop the prohibited activity, the prison officer may terminate your participation in the activity or your transfer. For example, you may not be taken to work or a meeting, or you may be removed from the interest group or the classroom."
      ],
      violationTitle:" How is the violation responded to?",
      violations:[
        "A report will be prepared regarding the violation, which will be forwarded to the contact person.",
        "The contact person will ask you for explanations about what happened and will decide whether to limit the response to a conversation or to initiate proceedings.",
        "This primarily depends on the severity of the act, your previous behavior, and your attitude towards the given violation."
      ],
      importantTitle:"Important things to note.",
      imNote:[
        "By adhering to the rules, you have more rights and opportunities in prison.",
        "Violating the rules may result in the loss of rights and significantly delay your chances of moving to open prison or being released early.",
        "Generally, a disciplinary penalty lasts for 1 year, but it can be terminated earlier for good behavior.",
        "Remember that both actions and inactions can be considered violations. For example, if you do not participate in work activities."
      ],
      decisionTitle:"How is a disciplinary violation processed and a decision made?",
      decisions:[
          "During the disciplinary proceedings, detailed explanations will be taken from all parties involved and witnesses. You will also have the opportunity to explain your position.",
          "Other evidence will be collected, such as video recordings, photos of the damaged items, etc.",
          "All details and participant certificates will be recorded in the disciplinary proceedings materials, and a decision and applicable punishment will be determined based on them.",
          "In determining the punishment, your previous behavior will be taken into account, as well as whether you have violated the rules before. Additionally, consideration will be given to how you regard the current violation and whether you see yourself avoiding new violations in the future",
          " The contact person will present the collected materials and the decision made based on them to you and will obtain your signature regarding this.",
        ],
      decisionTip:"Take your time and read the decision calmly. It states what to do if you wish to contest the decision."
    
    },
    ET:{
      title:"REEGLITEST KINNIPIDAMINE",
      sub:"Vanglas kehtib terve hulk reegleid, millest kinni pidamine on Sulle kohustuslik.",
      eventTitle:"Mis juhtub reeglite rikkumise korral?",
      events:[
        "Vanglaametnik annab Sulle teada, et teguviis või käitumine ei ole sobilik ning annab korralduse seda muuta või see tegevuse koheselt lõpetada.",
        "Kui rikkumine on raske või Sa ei lõpeta keelatud tegevust, võib vanglaametnik katkestada tegevusel osalemise või Sinu saatmise. Näiteks ei viida Sind tööle või kokkusaamisele, eemaldatakse huviringist või klassiruumist."
      ],
      violationTitle:"Kuidas rikkumisele reageeritakse?",
      violations:[
        " Rikkumise kohta koostatakse ettekanne, mis edastatakse kontaktisikule.",
        "Kontaktisik küsib Sinu käest toimunu kohta selgitusi ning otsustab, kas piirdutakse vestlusega või algatatakse menetlus.",
        "See oleneb eelkõige teo raskusest, Sinu varasemast käitumisest ja suhtumisest antud rikkumisse."
      ],
      importantTitle:"Olulised märkused.",
      imNote:[
        "Reeglitest kinnipidamisel on Sul vanglas rohkem õigusi ja võimalusi.",
        "Reeglite rikkumisel võid õigusi kaotada ning need lükkavad oluliselt edasi Sinu võimalust liikuda edasi avavanglasse või ennetähtaegselt vabaneda.",
        "Üldjuhul kehtib iga distsiplinaarkaristus 1 aasta, kuid hea käitumise korral on võimalik seda ka varem lõpetada.",
        "Pea meeles, et rikkumiseks võidakse pidada nii tegevus kui ka millegi tegemata jätmist. Näiteks, kui Sa ei osale majandustöödel."
      ],
      decisionTitle:"Kuidas distsiplinaarrikkumist menetletakse ja otsust langetatakse?",
      decisions:[
          "Distsiplinaarmenetluse käigus võetakse kõigilt asjaosalistelt ja pealtnägijatelt põhjalikud selgitused. Ka Sul on võimalus selgitada oma seisukohta.",
          "Kogutakse muid tõendeid, näiteks videosalvestisi, fotosid lõhutud asjadest vms",
          "Kõik detailid ja osalejate tunnistused pannakse kirja distsiplinaarmenetluse materjalidesse ning kujundatakse nende pinnalt otsus ja määratav karistus.",
          "Karistuse määramisel arvestatakse Sinu eelnevat käitumist ja seda, kas oled ka varem korda rikkunud. Samuti võetakse arvesse, kuidas suhtud praegusesse rikkumisse ja kas näed edaspidi ennast uutest rikkumistest pigem eemale hoidvat.",
          "Kontaktisik tutvustab sulle kogutud materjale ja nende põhjal tehtud otsust ja võtab Sinult selle kohta allkirja.",
        ],
      decisionTip:"Võta aeg ja loe otsus rahulikult läbi. Seal on kirjas, mida teha, kui soovid otsuse vaidlustada."
    
    }
  }
  const copy = content[language] || content.ET;

  return (
   <Section title={copy.title} sub={copy.sub}>
    <Accordion title={copy.eventTitle}>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.events.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
    </Accordion>
    <Accordion title={copy.violationTitle}>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.violations.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
    </Accordion>
    <Accordion title={copy.importantTitle}>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.imNote.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
    </Accordion>
    <Accordion title={copy.decisionTitle}>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.decisions.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
    </Accordion>
    <Tip>{copy.decisionTip}</Tip>


   </Section>
  );
}

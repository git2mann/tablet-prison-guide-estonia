import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from '../../components/ui/Accordion';

export default function DailyEating({ language = 'ET' }) {
  const content={
    ET:{
      title:"SÖÖMINE",
      sub:"Vanglas saad süüa kolm korda päevas. Toit tuuakse kambrisse. Lõunaajal võib söömine toimuda ka koolis või töökohal.",
      eatLine:"Kui Sa lahkud ajutiselt vanglast, saad vajaduse korral kuivtoidupaki kaasa.",
      eatingRulesTitle:"Reeglid söömisel",
      eatingRules:[
        "Väljaspool kambrit ei ole lubatud süüa, välja arvatud siis, kui vangla seda korraldab.",
        "Sa pead söögi ise vastu võtma",
        "Toitu ei tohi jagada teiste kinnipeetavatega.",
        "Pärast söömist pead toidunõud ja kandiku tagasi andma (Tallinna vanglas) või nõud ise ära pesema (Viru vanglas). Järele jäänud toidu võid tõsta ümber enda nõudesse",
        "Toidunõud, mis on kambris lubatud, hoiad puhtana ise."
      ],
      purchaseTitle:"Toidu ostmise võimalused",
      purchasing:[
        "Sul on võimalik vangla e-poest osta toiduaineid, samuti kohvi ja teed.",
        "Vanglas on piirangud sellele, kui palju saad korraga osta.",
        "Kui Sa oled vahistatu, siis on vanglal õigus distsiplinaarkaristusena keelata Sul osta lisatoitu e-poest kuni kaheks kuuks."
      ],
      specialFoodTitle:"Mida teha, kui vajan või soovin eritoitu?",
      specialFood:[
        "Eritoitu on võimalik saada, kui Sul on terviseprobleem ja vangla arst määrab Sulle näiteks dieettoidu või lisatoidu. ",
        "Lisatoitu võidakse määrata ka muudel põhjustel, näiteks kui oled keskmisest pikemat kasvu.",
        "Kui Sa ei söö liha, võid taotleda lihavaba või sealihavaba toitu.",
        "Sellisel juhul ei tohi Sa samal ajal osta vangla poest lihatooteid. Kui seda teed, võetakse lihavaba toidu võimalus ära.",
        "Kui Sa ei söö liha või teatud toiduaineid oma usu või veendumuse tõttu, teavita sellest enda kontaktisikut, kelle kaudu määratakse sulle lihavaba menüü.",
      ],
      refuseTitle:"Kas mul on õigus vangla toidust keelduda?",
      refuse:[
        "Kui mõne toidu kvaliteet on halb, ütle seda kohe vangla töötajale. ",
        "Kui ütled hiljem, ei saa enam kontrollida ega parandada.",
        "Sul on õigus vangla toidust üleüldse loobuda. Selleks esita põhjendusega taotlus.",
        "Võta arvesse, et Sa ei saa loobuda ainult ühest toidukorrast (nt ainult hommikusöögist) –loobuda tuleb kõigist korraga.",
        "Kui soovid hiljem uuesti vangla toitu, pead tegema uue avalduse."
      ]
    },
    EN:{
      title:"EATING",
      sub:"In prison, you can eat three times a day. Food is brought to the cell. Lunch can also be taken at school or at work.",
      eatLine:"If you leave the prison temporarily, you can take a dry food package with you if necessary",
      eatingRulesTitle:"Rules for eating",
      eatingRules:[
        "It is not allowed to eat outside the cell, except when the prison organizes it.",
        "You have to pick up the food yourself.",
        "One should not share the toilet with other detainees.",
        "After eating, you need to return the dishes and tray (in Tallinn prison) or wash the dishes yourself (in Viru prison). You can transfer the leftover food to meet the requirements",
        "You keep the utensils allowed in the chamber clean yourself."
      ],
      purchaseTitle:"Food purchasing options",
      purchasing:[
        "It is possible to buy food items, as well as coffee and tea, from the prison's online store.",
        "There are restrictions on how much you can buy at once.",
        " If you are arrested, the prison has the right to prohibit you from purchasing additional food from the online store for up to two months as a disciplinary punishment."
      ],
      specialFoodTitle:" What to do if I need or want special food?",
      specialFood:[
        "Special food can be obtained if you have a health problem and the prison doctor prescribes you, for example, a special diet or supplementary food.",
        "Supplementary food may also be prescribed for other reasons, such as if you are taller than average.",
        "If you do not eat meat, you can apply for vegetarian or pork-free food",
        "In this case, you must not purchase meat products from the prison store at the same time. If you do, the option for vegetarian food will be revoked",
        "If you do not eat meat or certain foods due to your religion or beliefs, inform your contact person, through whom a vegetarian menu will be arranged for you.",
      ],
      refuseTitle:"Do I have the right to refuse prison food?",
      refuse:[
        "If the quality of any food is poor, inform the prison staff immediately.",
        "If you report it later, it cannot be checked or corrected.",
        "You have the right to refuse prison food altogether.",
        "To do this, submit a request with justification. Keep in mind that you cannot refuse just one meal (e.g., only breakfast) – you must refuse all meals at once",
        "If you wish to have prison food again later, you must submit a new application."
      ]

    }
  }
  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
      <p>{copy.eatLine}</p>
      <Accordion title={copy.eatingRulesTitle}>
         <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.eatingRules.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      
      </Accordion>
      <Accordion title={copy.purchaseTitle}>
          <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.purchasing.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
      <Accordion title={copy.specialFoodTitle}>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.specialFood.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
      <Accordion title={copy.refuseTitle}>
           <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.refuse.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
    </Section>
  );
}

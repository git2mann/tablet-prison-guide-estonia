import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Accordion from '../../components/ui/Accordion';
export default function HealthPsych({ language = 'ET' }) {
  const content = {
    ET:{
      title:"Psühholoog",
      sub:"Psühholoog aitab Sul toime tulla vangistusega seotud stressi, kriiside ja kohanemisraskustega",
      notes:[
        "Psühholoog soovitab Sul vajadusel pöörduda vaimse tervise õe, psühhiaatri või kliinilise psühholoogi vastuvõtule.",
        "Kuid ta teeb ka ise nendega koostööd ning võtab vajadusel ise nendega ühendust.",
        "Psühholoogiga räägitud vestlused arvestavad alati eetika- ja konfidentsiaalsuse nõudeid ja nende sisu jagatakse teistega ainult Sinu nõusolekul (näiteks vajaliku spetsialisti või tervishoiutöötajaga).",
        "Psühholoogile saamiseks kirjuta taotlus kontaktisikule, märkides soovi korral sinna ka põhjuse, miks Sa soovid psühholoogi juurde pöörduda (näiteks ärevus, uneprobleemid, lein vmt).",
        "Ooteaeg psühholoogile sõltub vanglast ja nõudlusest."
      ],
      psychTip:"Kui Sul on kriis (enesetapumõtted, paanika), siis teavita kindlasti valvurit kohe. Valveõde reageerib esimesel võimalusel",
      discussTitle:"Mida saab psühholoogiga arutada?",
      discussNotes:[
        "Kuidas stressiga paremini toime tulla.",
        "Rääkida meeleolumuutustest",
        "Küsida soovitusi harjutusteks ärevuse vähendamiseks."
      ],
      lastLine:"Kui Sul on muud mured või probleemid, siis pöördu kõigepealt oma kontaktisiku poole, kes oskab Sulle soovitada või Sind suunata kõige õigema erialaspetsialisti poole.",
    
    },
    EN:{
      title:"Psychologist",
      sub:"The psychologist helps you cope with stress related to imprisonment, crises, and adjustment difficulties",
      notes:[
        "The psychologist may recommend that you consult a mental health nurse, psychiatrist, or clinical psychologist if necessary.",
        "However, they also collaborate with these professionals and will contact them directly if needed.",
        "Conversations with the psychologist always take into account ethical and confidentiality requirements, and their content is shared with others only with your consent (for example, with the necessary specialist or healthcare worker)",
        "To see a psychologist, write a request to the contact person, optionally stating the reason why you wish to consult a psychologist (for example, anxiety, sleep problems, grief, etc.).",
        "The waiting time for a psychologist depends on the prison and demand."
      ],
      psychTip:"If you are in crisis (having suicidal thoughts, panic), be sure to inform the guard immediately. The duty nurse will respond as soon as possible.",
      discussTitle:"What can be discussed with the psychologist?",
      discussNotes:[
        "How to better cope with stress.",
        "Talk about mood changes",
        "Ask for recommendations for exercises to reduce anxiety."
      ],
      lastLine:"If you have other concerns or problems, please first contact your contact person, who can advise you or direct you to the most appropriate specialist.",
    }
  };
    
  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
       <ul style={{listStyleType:"none"}}>{copy.notes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <Tip>{copy.psychTip}</Tip>
        <Accordion title={copy.discussTitle}>
           <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.discussNotes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        </Accordion>  
        <p>{copy.lastLine}</p>  
    </Section>
  );
}

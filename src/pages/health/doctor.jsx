import React from 'react';
import Section from "../../components/ui/Section";
import BodyChart from "../../components/ui/BodyChart";
import Keyword from "../../components/ui/keyword";
import Tip from '../../components/ui/Tip';
import Accordion from '../../components/ui/Accordion'
export default function HealthDoctor({ language = 'ET' }) {
  const content={
    ET:{
      title:"Kuidas pääsen arstile?",
      firstLine:"Kui Su mure ei ole erakorraline, täida avaldus arsti vastuvõtule saamiseks pabervormil, tahvelarvutis või pöördu valvuri või kontaktisiku poole.",
      secondLine:"Sind viib arstile valvur. Tavaliselt teavitatakse Sind arstile minemise ajast samal päeval.",
      emergencyTip:[
        "Esmaabi saab vanglas ööpäev ringi.",
        "Kui Sul tekib erakorraline abivajadus, näiteks äge valu, verejooks, hingamisraskused vms, pöördu otsekohe üksuse valvuri poole",
        "Vajadusel viiakse Sind väljapoole vanglat ravile või uuringutele."
      ],
      familyTitle:"Perearst",
      familyContent:[
        "Tööpäevadel vaatab Su kõigepealt üle pereõde (nimetatakse ka üksuse õeks).",
        "Vanglas on alaliselt kohapeal pereõed. Pereõde suunab Su vajaduse korral edasi üldarsti või perearsti vastuvõtule.",
        "Vanglas on Sul perearst. Teda nimetatakse ka üldarstiks. Ta määratakse Sulle vanglasse saabumisel ja tema poole võid pöörduda kõigi oma igapäevaste tervisemuredega.",
        "Perearst käib vanglas vastuvõttu tegemas vähemalt üks kord nädalas, kuid kohalkäimise aeg ja sagedus võib vanglates veidi erineda.",
        "Avavanglas olles käid Sa arstil edasi kinnises vanglas.",
        "Perearst suunab vajaduse korral Sind edasi eriarsti (nt neuroloog, psühhiaater, kardioloog jt) vastuvõtule.",
        "Ravimite määramise korral väljastab perearst Sulle digiretsepti.",
        "Vangla apteek tellib ravimid ja valvemeeskond jagab neid Sulle või väljastab sulle ravimipinalist ette nähtud aegadel."
      ],
      familyTip:"Oma digilugu näed Sa perearsti kaudu. Sinu varasemad diagnoosid ja retseptid ei kao kuhugi.",
   
    },
    EN:{
      title:"Seeing a doctor",
      firstLine:"If your concern is not urgent, fill out the application for a doctor's appointment on paper, on a tablet, or contact the guard or contact person",
      secondLine:"The guard will take you to the doctor. Usually, you will be informed of the time for your doctor's visit on the same day.",
      emergencyTip:[
        "Emergency medical assistance is available in the prison around the clock.",
        "If you experience an emergency need, such as severe pain, bleeding, breathing difficulties, etc., immediately contact the unit guard. ",
        "If necessary, you will be taken outside the prison for treatment or examinations."
      ],
      familyTitle:"Family doctor",
      familyContent:[
        "On weekdays, your family nurse (also referred to as the unit nurse) will first review your case.",
        "There are family nurses permanently on-site in the prison. The family nurse will refer you to a general practitioner or family doctor if necessary.",
        "You have a family doctor in prison. He is also referred to as a general practitioner. He will be assigned to you upon your arrival at the prison, and you can turn to him for all your daily health concerns.",
        "The family doctor visits the prison at least once a week, but the time and frequency of visits may vary slightly between prisons.",
        "While in an open prison, you will continue to see the doctor in a closed prison",
        "The family doctor will refer you to a specialist (e.g., neurologist, psychiatrist, cardiologist, etc.) if necessary.",
        "If medication is prescribed, the family doctor will issue you a digital prescription.",
        "The prison pharmacy will order the medications, and the guard team will distribute them to you or provide them to you at the scheduled times."
      ],
      familyTip:"You can see your digital health record through your family doctor. Your previous diagnoses and prescriptions will not disappear.",
    }
  }
  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title}>
      <p>{copy.firstLine}</p>
      <p>{copy.secondLine}</p>
      <Tip><ul style={{listStyleType:"disc"}}>{copy.emergencyTip.map((item, index) => (
        <li key={index} style={{ marginBottom: "0.5rem" }}>
          {item}
        </li>
      ))}
    </ul></Tip>
    <Accordion title={copy.familyTitle}>
      <ul style={{listStyleType:"circle",marginLeft:"2rem"}}>{copy.familyContent.map((item, index) => (
        <li key={index} style={{ marginBottom: "0.5rem" }}>
          {item}
        </li>
      ))}
    </ul>

    </Accordion>
    <Tip>{copy.familyTip}</Tip>
    </Section>
  );
}

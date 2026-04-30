import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import Accordion from '../../components/ui/Accordion';

export default function HealthChaplain({ language = 'ET' }) {
  const content={
    ET:{
      title:"Kaplan, usuline tegevus ja hingehoid",
      sub:"Vanglas viibides on Sul õigus järgida enda usutavasid.",
      Inotes:[
        "Igas Eesti vanglas töötab kaplan, kes on vangla vaimulik või hingehoiu töötaja..",
        "Tema ülesanne on pakkuda kinnipeetavatele usulist ja vaimset tuge. Ta teeb seda olenemata Sinu konfessioonist või usulisest kuuluvusest.",
        "Kaplaniga vestlused on alati vabatahtlikud ja konfidentsiaalsed.",
        "Vanglates teenivad eri konfessioonide kaplanid: peamiselt luteri usk ja õigeusk, võimaluse korral ka katoliku usk ja teised usud.",
        "Nende kättesaadavus võib Eesti vanglates veidi erineda.",
    
      ],
      chapTip:[
        "Kaplani juurde pöördumiseks kirjuta taotlus kontaktisikule või valvurile.",
        "Kui tead ja soovid, võid märkida juurde ka konkreetse kaplani nime, kelle poole soovid pöörduda."
      ],
      mattersTitle:"Millistes küsimustes kaplani poole pöörduda?",
      matters:[
        "hingehoidlik vestlus või usuline nõustamine: lein, kriis, vangistusega toimetulek või mõni usualane küsimu.",
        "sakramendid: ristimine, armulaud, piht või muu vastavalt Sinu usu või konfessiooni tavadele; kaplan korraldab vajaduse ja võimaluse korral ka teise vaimuliku külastuse.",
        "Religioosne kirjandus või sümboolika: Piibel, Koraan, palveraamatud, kaelarist, palvematt jms – neid saab turvareegleid järgides tellida kaplani kaudu."
      ],
      mattersTip:"Kui tunned, et vajad vaimset või usulist tuge, kirjuta avaldus esimesel võimalusel. Abi on tasuta ning kättesaadav kõigile kinnipeetavatele keelest, rahvusest ja usust sõltumata.",
      imNote:"Important things to note.",
      notes:[
        "Vältimatu ehk erakorraline arstiabi on Sinu põhiõigus. Sul on õigus saada vanglas samaväärset arstiabi nagu vabaduses viibival inimesel.",
        "Vanglasse ei saa kaasa võtta isiklikke ravimeid ja meditsiinilisi abivahendeid vms. Need tagab Sulle vajaduse korral vangla.",
        "Arstile pääsemise järjekorrad ja ooteajad võivad olla pikad. Nagu ka väljaspool vanglat, võib eriarsti juurde pääsemine aega võtta mitu kuud.",
        "Sinu terviseandmed on konfidentsiaalsed. Neile pääseb ligi vaid meditsiinitöötaja ja need ei jõua valvurite või teiste kinnipeetavateni.",
      ]
    },
    EN:{
      title:" Chaplain, religious activities, and spiritual care",
      sub:"While in prison, you have the right to follow your religious practices",
      Inotes:[
        "Every prison in Estonia has a chaplain who is a prison minister or spiritual care worker.",
        "Their task is to provide detainees with religious and spiritual support. They do this regardless of your denomination or religious affiliation. ",
        "Conversations with the chaplain are always voluntary and confidential.",
        "Prisons have chaplains from different denominations: primarily Lutheran and Orthodox, and, if possible, also Catholic and other faiths.",
        "Their availability may vary slightly in Estonian prisons.",
    
      ],
      chapTip:[
        "To contact the chaplain, write a request to the contact person or guard.",
        "If you know and wish, you can also specify the name of the specific chaplain you want to reach out to."
      ],
      mattersTitle:"In what matters can you turn to the chaplain?",
      matters:[
        "Spiritual conversation or religious counseling: grief, crisis, coping with imprisonment, or any religious question.",
        "Sacraments: baptism, communion, confession, or other practices according to your faith or denomination; the chaplain will arrange for a visit from another clergy member if needed and possible.",
        "Religious literature or symbolism: Bible, Quran, prayer books, cross, prayer mat, etc. – these can be ordered through the chaplain while following security rules."
      ],
      mattersTip:"If you feel that you need spiritual or religious support, write a request as soon as possible. Help is free and available to all detainees, regardless of language, nationality, or religion.",
      imNote:"Important things to note.",
      notes:[
        "Emergency or urgent medical care is your fundamental right. You have the right to receive equivalent medical care in prison as a person in freedom.",
        "You cannot bring personal medications and medical aids, etc., into prison. The prison will provide these for you if necessary.",
        "Waiting lists and wait times to see a doctor can be long. As outside of prison, accessing a specialist may take several months.",
        "Your health data is confidential. Only medical staff can access it, and it will not reach guards or other detainees.",
      ]
    }
  };
  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title} sub={copy.sub}>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.Inotes.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      <Tip>
        <ul style={{listStyleType:"circle",marginLeft:"2rem"}}>{copy.chapTip.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Tip>
      <Accordion title={copy.mattersTitle}>
        <ul style={{listStyleType:"numbered",marginLeft:"2rem"}}>{copy.matters.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
      <Accordion title={copy.imNote}>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.notes.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
    </Section>
  );
}

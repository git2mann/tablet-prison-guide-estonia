import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Keyword from "../../components/ui/keyword";
import Accordion from "../../components/ui/Accordion"
export default function RulesPunishments({ language = 'ET' }) {
  const content={
    ET:{
      title:"Karistused vanglas.",
      notes:[
        "Karistuse kandmine algab tavaliselt sellest hetkest, kui seda on Sulle tutvustatud.",
        "Karistus kustub tavaliselt 1 aasta peale määramist.",
        "Karistusi võib aga määrata katseajaga — kui Sa selle ajal reegleid ei riku, ei viida karistust ellu. Katseaja pikkus võib olla 1-6 kuud.",
        "Kui Sulle on määratud mitu kartserikaristust, siis nende vahe peab olema vähemalt 48 tundi.",
      ],
      punishmenttitle:"Erinevad karistused vanglas",
      convictTitle:"Kui oled süüdimõistetud:",
      convictNotes:[
        "Sulle võidakse määrata kirjalik noomitus.",
        "Sinult võidakse ära võtta Sinu isiklik televiisor, veekeetja või muu isiklik elektriseade kuni 45 päevaks.",
        "Sa võid ilma jääda lühi- või pikaajalisest kokkusaamisest lähedastega.",
        "Sind võidakse hoida töölt eemal kuni 1 kuu.",
        "Sulle võidakse määrata kartserikaristus kuni 14 ööpäeva; (kuni 21-aastastel maksimaalselt 3 ööpäeva)."
      ],
      arrestTitle:"Kui oled vahistatud:",
      arrestNotes:[
        "Sulle võidakse määrata kirjalik noomitus.",
        "Sul võidakse keelata osta e-poest lisatoitu kuni 2 kuud.",
        "Sulle võidakse määrata kartserikaristus kuni 14 ööpäeva (kuni 21-aastastel maksimaalselt 3 ööpäeva)."
      ],
    },
    EN:{
      title:"Punishments in prison.",
      notes:[
        "The serving of the punishment usually begins from the moment it is presented to you.",
        "The punishment typically expires one year after it is imposed.",
        "However, punishments can be assigned with a probation period—if you do not violate the rules during this time, the punishment will not be enforced. The length of the probation period can be 1-6 months.",
        "If you have been assigned multiple solitary confinement punishments, there must be at least 48 hours between them.",
      ],
      punishmentTitle:"Different punishments in prison",
      convictTitle:"If you are convicted:",
      convictNotes:[
        "You may receive a written reprimand",
        "Your personal television, kettle, or other personal electrical device may be confiscated for up to 45 days.",
        "You may be deprived of short- or long-term visits with relatives.",
        "You may be kept away from work for up to 1 month.",
        " You may be sentenced to solitary confinement for up to 14 days; (for those under 21, a maximum of 3 days)"
      ],
      arrestTitle:"If you are arrested:",
      arrestNotes:[
        "You may receive a written reprimand.",
        "You may be prohibited from purchasing additional food from the online store for up to 2 months.",
        "You may be sentenced to solitary confinement for up to 14 days (for those under 21, a maximum of 3 days)."
      ],

    }
  }
  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title}>
       <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.notes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
      }}>{copy.punishmentTitle}</h3>
      <Accordion title={copy.arrestTitle}>
         <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.arrestNotes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </Accordion>
       <Accordion title={copy.convictTitle}>
         <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.convictNotes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </Accordion>

    </Section>
  );
}

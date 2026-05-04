import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";

export default function ArrivalSearch({ language = 'ET' }) {
  const content = {
    ET:{
      title:"Sissejuhatus",
      receptionNotes:[
        "Kinnipeetava teekond algab ootekambris. Ootekambrisse ei ole lubatud kaasa võtta isiklikke asju.",
        "Need asjad, mis on vanglas lubatud, saad kätte vanglas sees.",
        "Need asjad, mis ei ole vanglas lubatud, pannakse hoiule ning need saad tagasi vabanemisel.",
        "Kui esmased toimingud on tehtud ning Sulle on leitud sobiv kamber eluosakonnas, viiakse Sind sinna"
          ],
      endLine:"Siin peatükis on välja toodud lühike ülevaade esimestest protseduuridest.",
    
    },
    EN:{
      title:"Introduction",
      receptionNotes:[
        "The detainee's journey begins in the waiting room. Personal belongings are not allowed in the waiting room",
        "Items that are permitted in the prison will be provided to you inside the prison",
        "Items that are not permitted will be stored, and you will get them back upon your release",
        "Once the initial procedures are completed and a suitable cell in the living unit has been found for you, you will be taken there",
      ],
      endLine:"A brief overview of the initial procedures is presented in this chapter",
    }
     };
    const copy= content [language] || content.EN;
  
 
  return (
    <Section title={copy.title} >
       <ul style={{listStyleType:"none",marginLeft:"2rem"}}>{copy.receptionNotes.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      <p>{copy.endLine}</p>
    </Section>
  );
}

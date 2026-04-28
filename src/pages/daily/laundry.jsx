import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from '../../components/ui/Accordion';

export default function DailyLaundry({ language = 'ET' }) {
  const content={
    ET:{
      title:"PESU PESEMINE JA PARANDAMINE",
      prisonTitle:"Vanglarõivad",
      prisonClothes:[
        "Vanglariiete ja voodipesu pesemine on tasuta.",
        "Käterätte ja voodipesu pestakse iga 14 päeva tagant.",
        "Vanglariietust ja tööriideid pestakse vastavalt vajadusele."
      ],
      personalTitle:"Isiklike asjade pesemine on tasuline",
      personalClothes:[
        "Oma isiklike riiete puhtana hoidmise eest vastutad ise.",
        "Sul on selleks kaks võimalust:",
        [
          "Ostad pesemiseks vajalikud vahendid vangla poest.",
          "Saadad riided pesumajja ja maksad vastavalt hinnakirjale. Neilt on võimalik tellida ka triikimist."
      ]
      ],
      noteTitle:"Olulised asjad, mida tuleb meeles pidada",
      notes:[
        "Korraga võid pessu anda poole oma vanglariiete komplektist.",
        "Kui Sind ei ole pesuvahetuse ajal kambris, aseta must pesu kokkuvoldituna oma voodi jalutsisse.",
        "Pesumajja ei tohi anda aluspesu, sokke ega nahkesemeid. Need pead ise pesema ja parandama.",
        " Pesumaja teenuste kasutamiseks esita taotlus."
      ],
      breakTitle:"Mis saab siis, kui midagi läheb katki?",
      break:[
        "Kui vajad padja, teki või madratsi vahetust, siis küsi vanglaametnikult.",
        "Vangla riietust ja tööriideid parandatakse tasuta. Selleks esita taotlus vanglaametnikule.",
        "Isiklikke riideid saab saata parandusse vangla pesumajja. See on tasuline. Riiete parandamine maksab keskmiselt 1,5 - 4 € ühe eseme kohta.",
        "Jalanõude parandamist korraldab vangla. Teenuse hind on 1 €, mille tasud Sina. Teenus on tasuta, kui Su viimase 3 kuu keskmine vaba raha on alla 9 €. Vajadusel saad taotleda ka asendusjalanõusid.",
        "Parandustöödele ei kehti garantii ehk kui asi läheb peale parandust uuesti katki, siis selle eest vangla ei vastuta"
        ]
    },
    EN:{
      title:"WASHING AND REPAIRING CLOTHES",
      prisonTitle:"Prison clothes",
      prisonClothes:[
        "Washing prison clothes and bed linens is free of charge",
        "Hand towels and bed linens are washed every 14 days",
        "Prison uniforms and work clothes are washed as needed."
      ],
      personalTitle:"Personal Items",
            personalClothes: [
        "You are responsible for keeping your personal clothes clean.",
        "There are two options for this:",
        {
          type: "sub",
          items: [
            "Necessary tools for washing clothes from the prison shop.",
            "You send the clothes to the laundry and pay according to the price list. It is also possible to order ironing from them"
          ]
        }
      ],
      noteTitle:"Important things to note",
      notes:[
        "You can give half of your prison clothes set for washing.",
        "If you are not in the cell during the laundry exchange, place the dirty laundry folded at the foot of your bed.",
        "Underwear, socks, and leather items must not be given to the laundry. You must wash and repair these yourself.",
        "Submit a request to use the laundry services."
      ],
      breakTitle:"What happens if something breaks?",
      break:[
        "If you need a replacement for a pillow, blanket, or mattress, ask the prison officer.",
        "Prison clothing and work clothes are repaired for free. To do this, submit a request to the prison officer.",
        "Personal clothes can be sent for repair to the prison laundry. This is a paid service. The cost of repairing clothes is on average €1.5 - €4 per item",
        "Shoe repairs are organized by the prison. The service costs €1, which you pay. The service is free if your average available funds in the last 3 months are below €9. If necessary, you can also request replacement shoes.",
        "There is no warranty on repairs, meaning if the item breaks again after repair, the prison is not responsible for it."
      ]
    }
  };
  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title} sub={copy.sub}>
            <div
        style={{
          gap: "1.5rem",
          marginTop: "2rem"
        }}
      >

        
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "2px solid #E5E7EB",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h3
            style={{
              fontSize: "1.7rem",
              fontWeight: 800,
              color: "#003B71",
              marginBottom: "0.8rem"
            }}
          >
            {copy.prisonTitle}
          </h3>

          <ul style={{ paddingLeft: "1.6rem", fontSize: "1.5rem", lineHeight: 1.6 }}>
            {copy.prisonClothes.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.4rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        
        
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "2px solid #E5E7EB",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            
          }}
        >
          <h3
            style={{
              fontSize: "1.7rem",
              fontWeight: 800,
              color: "#003B71",
              marginBottom: "0.8rem"
            }}
          >
            {copy.personalTitle}
          </h3>

          <div style={{ fontSize: "1.5rem", lineHeight: 1.6}}>
            {copy.personalClothes.map((item, i) => {
              
             
              if (typeof item === "string") {
                return <p key={i} style={{ marginBottom: "0.5rem" }}>{item}</p>;
              }

            
              if (item.type === "sub") {
                return (
                  <ul key={i} style={{ paddingLeft: "1.6rem", marginTop: "0.3rem",listStyleType:"disc" }}>
                    {item.items.map((sub, j) => (
                      <li key={j} style={{ marginBottom: "0.4rem" }}>
                        {sub}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </div>

      </div>
      <Accordion title={copy.noteTitle}>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6,listStyleType:"disc" }}>
            {copy.notes.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            ))}
        </ul>
      </Accordion>
      <Accordion title={copy.breakTitle}>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6,listStyleType:"disc" }}>
            {copy.break.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            ))}
        </ul>
      </Accordion>
    </Section>
  );
}

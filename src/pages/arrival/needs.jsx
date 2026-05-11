import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from '../../components/ui/Accordion';
export default function ArrivalNeeds({ language = 'ET' }) {
  const content={
    ET:{
      title:" ESMAVAJADUSED",
      callTitle:"teie isiklikud asjad",
      callNotes:[
        "Sinu isiklikud esemed, sealhulgas mobiiltelefon, on pandud hoiule.",
        "Helistamiseks väljastatakse Sulle vanglas telefonikaart, isiklikku telefoni vanglas kasutada ei saa.",
        "Saad esimesel võimalusel oma telefonikaardilt teha kõne lähedastele.",
        "Selle ja muu helistamisega seonduva kohta saad rohkem lugeda peatükist 2.3.",
        "Vanglas olles saad jätkuvalt suhelda oma lähedastega telefoni või kirja teel"
         ],
      financialTitle:"Finantskonto",
      financialNotes:[
        "Vanglas tehakse Sulle oma rahaarve. Seda nimetatakse isikuarveks. ",
        "Selle kaudu saad teha raha ja maksmisega seotud toiminguid.",
        "Sularaha ei ole vanglas lubatud.",
        "Isikuarve avamine võtab veidi aega, Sinuga tegelev vanglaametnik ehk kontaktisik annab Sulle arvenumbri ja ütleb, millal saad seda kasutama hakata. Isikuarve kohta saad rohkem lugeda peatükist 2.2."
        ],
      hygieneTitle:"Isiklikud riided",
      hygieneNotes:[
        "Vangla annab Sulle esmased hügieenitarbed, hiljem saad võimaluse neid ka ise osta.",
        "Isiklikud riided ei ole vanglas lubatud, Sulle antakse kasutada vanglariided, välja arvatud, kui oled vahistatud. Riietusest ja esmatarvetest loe palun rohkem peatükist 2.7."
          ],
      essentialTitle:"Esmatarbed",
      essentials:[
        "Telefonikaart ja -number",
        "Isikuarve number",
        "Hügieenipakk (seep, hambahari ja –pasta, raseerija jt)",
        "Vanglariietus (jakk, püksid, T-särk jne)",
        "Jalanõud (kui Sul pole)",
        "Voodipesu ja rätik",
        "Sööginõud"

      ],
    },
    EN:{
      title:"Essentials",
      callTitle:"Your personal items",
      callNotes:[
        "Your personal items, including your mobile phone, have been placed in storage",
        "You will be issued a phone card for making calls in prison; personal phones cannot be used in prison.",
        "You can make a call to your loved ones from your phone card as soon as possible.",
        " You can read more about this and other calling-related matters in Chapter 2.3.",
        "While in prison, you can continue to communicate with your loved ones via phone or letter."
      ],
      financialTitle:"Financial Account",
      financialNotes:[
        "The prison will create a financial account for you. This is called a personal account.",
        " Through this account, you can perform money-related transactions",
        "Cash is not allowed in prison.",
        "Opening a personal account takes some time; the prison officer or contact person dealing with you will provide you with the account number and inform you when you can start using it. You can read more about the personal account in Chapter 2.2.",
      ],
      hygieneTitle:"Personal clothing",
      hygieneNotes:[
        "The prison will provide you with basic hygiene items, and later you will have the opportunity to purchase them yourself.",
        "Personal clothing is not allowed in prison; you will be given prison clothing to wear, except when you are arrested. Please read more about clothing and hygiene items in Chapter 2.7.",
      ],
      essentialTitle:"Lists of essentials",
      essentials:[
        "Telephone card and number",
        "Personal identification number",
        "Hygiene pack (soap, toothbrush and toothpaste, razor, etc.)",
        "Prison clothing (jacket, pants, T-shirt, etc.)",
        "Shoes (if you don't have any)",
        "Bedding and towel",
        "Eating utensils"

      ],
    }
  }
    const copy = content[language] || content.ET;
  return (
    <Section title={copy.title}>
      <h3 style={{
                     fontSize: "2rem",
                    fontWeight: 900,
                    color: "#003B71",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                    fontStyle: "italic",
                    marginTop:"2rem"
                  }}>{copy.callTitle}
      </h3>
      <ul style={{listStyleType:"disc"}}>{copy.callNotes.map((item, index) => (
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
                    marginTop:"2rem"
                  }}>{copy.financialTitle}
      </h3>
      <ul style={{listStyleType:"disc"}}>{copy.financialNotes.map((item, index) => (
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
                    marginTop:"2rem"
                  }}>{copy.hygieneTitle}
      </h3>
      <ul style={{listStyleType:"disc"}}>{copy.hygieneNotes.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}

      </ul>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem"
      }}>
        <div style={{
          background: "#1CD8D8",
          color: "#fff",
          padding: "0.8rem 1.5rem",
          borderRadius: "999px",
          fontWeight: 800,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          fontSize: "1.8rem"
        }}>
          Your Essentials Kit
        </div>
      </div>

      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
        marginTop: "2rem"
      }}>

        {copy.essentials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            style={{
              background: "#F9FAFB",
              padding: "0.9rem 1rem",
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "1.7rem"
            }}
          >
            <span style={{
              color: "#1CD8D8",
              fontWeight: 900
            }}>
              ✓
            </span>
            {item}
          </motion.div>
        ))}

      </div>


    </Section>
  );
}


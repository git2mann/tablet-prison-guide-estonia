import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from '../../components/ui/Accordion';

export default function DailyEshop({ language = 'ET' }) {
  const content={
    ET:{
      title:"E-POOD",
      sub:"Vanglas olles on Sul võimalik e-poest osta seal müügiks olevaid esemeid ja toidukaupu. Selleks peab Sinu isikuarvel olema vajalik summa raha",
      eItemsTitle:"E-poes müüakse asju, mida võid vanglas vajada või soovida:",
      eItems:[
      "Toiduaineid nagu leiba, juustu, konserve, maiustusi, kohvi, teed, maitsaineid",  
      "Riideid nagu sokke, T-särke, aluspesu",
      "Hügieenitarbeid nagu seepi, šampooni, hambapastat, raseerijaid",
      "kirjutustarbeid ja väiksemaid esemeid nagu vihikuid, pastakaid, patareisid, kamme, mänge",
      "elektroonikaseadmeid, mis on kambrites lubatud nagu televiisor ja veekeedukann."
      ],
      orderingTitle:"Tellimisprotsess",
      ordering:[
        {
          title:"Tellimuse esitamine",
          content:"Vaata tooteid ja esita tellimus vangla tahvelarvutis."
        },
        {
          title:"Tellimuse ajakava",
          content:"Tellimusi saab esitada teatud päevadel vastavalt üksuse graafikule, tavaliselt 2 korda kuus."
        },
        {
          title:"Kauba kohaletoimetamine",
          content:"Kaup saabub tavaliselt järgmisel nädalal."
        },
        {
          title:"Isiku tuvastamine",
          content:"Sinu isiku tuvastatakse ja kontroliitakse seadmesse sisenemisel."
        },
        {
          title:"Teenustasud",
          content:"Kauba hinnale lisandub teenustasu."
        }
      ],
      rulesTitle:"Millised on reeglid ja piirangud ostmisel?",
      rules:[
        "Mõnede toodete ostmine on lubatud ainult naistele, nt hügieenisidemed, ripsmetušš.",
        " Ostmisel kehtivad kaupadele mitmesugused piirangud - kui palju korraga või kui sageli on neid võimalik osta. Täpse info leiad vangla kodukorrast.",
        "Kui ostad elektroonikaseadme (nt televiisori), saad selle kätte pärast seda, kui vangla on pannud sellele turvakleebise.",
        "Kui ületad koguste piirmäära, ei anta Sulle kaupa kätte, kuid sellele kulunud raha võetakse ikkagi kontolt maha.",
        "Kui oled tellimuse esitanud, pead kauba välja ostma. Kui keeldud kaupa vastu võtmast, tuleb selle eest ikkagi tasuda",
        "Kui Sul on kehtiv karistus, mis keelab lisatoidu ostmise, saad osta ainult tarbekaupu.",
        "Kui oled kartseris, saad osta e-poe valikust ainult asju, mis on kartseris lubatud.",
        "Kui tahad osta midagi, mida e-poe kataloogis ei ole, on vaja teha kirjalik taotlus. Vangla peab selle eelnevalt heaks kiitma.",
        "Kui toodud kaubaga on probleeme, kirjuta kaebus e-poe rakenduses."
      ]
    },
    EN:{
      title:"E-SHOP",
      sub:"As a registered user, you can purchase items and groceries available for sale in the online store. To do this, you must have the necessary amount of money in your personal account.",
      eItemsTitle:"E-items are sold that you may need or want in prison:",
      eItems:[
      "Food items such as bread, cheese, canned goods, sweets, coffee, tea, spices",  
      "Clothing items such as socks, T-shirts, underwear",
      "Hygiene products such as soap, shampoo, toothpaste, razors",
      "Stationery and smaller items such as notebooks, pens, batteries, combs, games",
      "Electronic devices that are allowed in the cells, such as televisions and electric kettles."
      ],
      orderingTitle:"Ordering process",
      ordering:[
        {
          title:" Placing an order",
          content:"View products and place an order on the prison tablet."
        },
        {
          title:"Order schedule",
          content:"Orders can be placed on certain days according to the unit's schedule, usually twice a month."
        },
        {
          title:" Delivery of goods",
          content:"The goods usually arrive next week"
        },
        {
          title:" Identity Verification",
          content:"Your identity will be verified and checked upon entering the device."
        },
        {
          title:" Service Fees",
          content:"A service fee is added to the price of the goods."
        }
      ],
      rulesTitle:"What are the rules and restrictions for purchasing?",
      rules:[
        "The purchase of certain products is allowed only for women, such as hygiene products and mascara.",
        "There are various restrictions on the purchase of goods - how much can be bought at once or how often they can be purchased. You can find detailed information in the prison's house rules.",
        "If you buy an electronic device (e.g., a television), you will receive it after the prison has placed a security sticker on it",
        "If you exceed the quantity limit, you will not receive the goods, but the money spent on them will still be deducted from your account.",
        "Once you have placed an order, you must purchase the goods. If you refuse to accept the goods, you will still have to pay for them",
        "If you have a valid sentence that prohibits the purchase of additional food, you can only buy essential goods",
        "If you are in solitary confinement, you can only purchase items from the online store selection that are permitted in solitary confinement.",
        "If you want to buy something that is not in the online store catalog, you need to submit a written request. The prison must approve it in advance. ",
        "If there are problems with the delivered goods, write a complaint in the online store application."
      ]
    }
  }
  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
      <h3 style={{
         fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop:"2rem"
      }}>{copy.eItemsTitle}</h3>
      <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.eItems.map((item, index) => (
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
      }}>{copy.orderingTitle}</h3>
      <div style={{ position: "relative", marginTop: "1.5rem", paddingLeft: "2rem" }}>

  <div style={{
    position: "absolute",
    left: "48px",
    top: 0,
    bottom: 0,
    width: "3px",
    background: "#D1D5DB"
  }} />

  {copy.ordering.map((step, index) => (
    <div key={index} style={{ position: "relative", marginBottom: "1.5rem" }}>
      
      
      <div style={{
        position: "absolute",
        left: "-2px",
        top: "5px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#14B8A6",
        color: "white",
        fontSize: "1.7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold"
      }}>
        {index + 1}
      </div>


      <div style={{ marginLeft: "3rem" }}>
        <h4 style={{ fontWeight: 700,fontSize:"1.9rem" }}>{step.title}</h4>
        <p style={{ marginTop: "0.25rem", color: "#374151" }}>
          {step.content}
        </p>
      </div>
    </div>
  ))}
</div>
      <Accordion title={copy.rulesTitle}>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.rules.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

        </ul>
      </Accordion>
    </Section>
  );
}

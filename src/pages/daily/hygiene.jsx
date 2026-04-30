import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from '../../components/ui/Accordion';
import Tip from '../../components/ui/Tip';

export default function DailyHygiene({ language = 'ET' }) {
  const content={
    ET:{
      title:"ISIKLIK HÜGIEEN, RIIDED JA PESEMINE",
      sub:"Vanglas on oluline hoida end ja oma elukeskkonda puhtana – see on iga kinnipeetava kohustus. See on vajalik nii Sinu enda kui ka teiste tervise hoidmiseks.",
      line:[
        "Kui Sul ei ole piisavalt riideid või hügieenitarbeid ja puudub raha, et neid osta, võid esitada taotluse vanglalt abi saamiseks.",
        "Vangla annab vaid kõige hädavajalikuma ning otsustab iga juhtumi eraldi, võttes arvesse Sinu vajadusi ja rahalist seisu",
      ],
      personalTitle:"Isiklik puhtus",
      rules:[
        "Pesemiseks kasuta ainult ühiskasutatavat duširuumi või dušši oma kambris. Mujal pole enda pesemine lubatud",
        "Juuksuriteenus on vanglas tasuta.",
        "Vanglas on keelatud tätoveerimine mistahes vahenditega.",
        
      ],
      personalTip:"Hügieenitarbeid (nt seep, šampoon, hambahari, raseerimisvahendid jms) saad osta vangla e-poest.",
      hygienePack:"Kui Sul ei ole raha, et hügieenitarbeid osta, siis saad vanglalt taotleda tasuta hügieenipakki.",
      essentialsTitle:"Hügieenipakis sisaldub:",
      essentials:[
        "tualettseep ja majapidamisseep, hambahari ja hambapasta",
        "ühekordsed raseerijad.",
        "Naistele hügieenisidemed"
      ],
      hygieneTip:[
        "Esmakordsel vanglasse saabumisel saad hügieenitarbed vangla poolt tasuta.",
        "Edaspidi saad taotleda hügieenipakki iga 3 kuu tagant ehk neli korda aastas",
        "Taotlus rahuldatakse vaid siis, kui sinu vanglasisesel isikuarvel on viimase 3 kalendrikuu jooksul olnud keskmiselt alla 15 euro kuus vaba raha, arvestades selle perioodi algsaldot ja sissetulekuid."
      ],
      clotheTitle:"Riided, jalanõud ja voodipesu",
      cloLine:"Vanglas tuleb kanda vangla antud riietust, enamasti on selleks pruunides toonides püksid ja jakk. Vahistatud ja avavangla kinnipeetavad võivad kanda isiklikke riideid.",
      line2:"Vanglasse saabudes saad vajalikud vooditarbed.",
      allowedTitle:"Lubatud isiklikud asjad:",
      itemsAllowed:[
        "Aluspesu ja soe pesu",
        "Sokid",
        "Jalanõusid kuni 4 paari",
        "Kindad ja sall;",
        "3 juuksekummi, kui sul Sul on pikad juuksed või habe.",
      ],
      clothesTitle:"Vangla annab Sulle järgmised riided ja tarbed:",
      clothes:[
        {
          title:"Vanglariided:",
          clothe:[
            "T-särk",
            "Pikad ja lühikesed püksid",
            "Naistel soovi korral seelikd",
            "Jakk ja jope",
            "Talvemüts ja suvemüts",
            "Labakindad ja kaelussall",
            "Tööriided (kui vanglas töötad)"
          ]
        },
        {
          title:"Vooditarbed ja pesu:",
          clothe:[
            "Voodipesu (lina, padjapüür, tekikott)",
            "Tekk ja padi",
            "Käterätik ja saunalina"
             ]
        },
      
      ],
      underTitle:"Vangla annab Sulle vajadusel järgmised jalanõud ja tarbed:",
      shoesTitle:"Jalanõud:", 
      shoes:[
        "üks paar sisejalanõusid (nt plätud)",
        "üks paar välisjalanõusid (nt tossud või saapad)"
         ],
      socksTitle:"Aluspesu ja sokid:",
      socks:[
        "Kuni 2 paari sokke",
        "Kuni 2 paari aluspükse"
      ],
      faqsTitle:"Korduma kippuvad küsimused",
      faqs:[
          {
            Question:"Kuidas saan edaspidi riideid või jalanõusid?",
            Answer:[
              "Sul on võimalus riideid ja jalanõusid osta e-poest.",
              "Lubatud asju võivad teatud aja tagant vahistatutele pakiga saata ka lähedased."
            ]    
          },
          {
            Question:"Mida teha, kui mul pole vajalikke riideid või raha, et neid endale osta?",
            Answer:[
              "Sul on võimalus taotleda riideid vanglalt. ",
              "Selleks esita taotlus, kuhu pane kirja riideese või jalanõu ja oma mõõdud."
                ]
          },
          {
            Question: "Mida teha, kui vangla antud riided ära kuluvad?",
            Answer:[
              "Üldjuhul saab riideid vahetada iga 6 kuu tagant taotluse põhjal.",
              " Kui vajad riideid varem, need on kulunud või katki, siis pane see taotlusesse kirja."
              ]
          }],
          warning:"Vangla võib keelduda Sulle nende andmisest, kui oled varem saadud riided või jalanõud vanglast välja saatnud",
          noteTitle:"Muud märkused",
          notes:[
            " Kui Sul on juba palutud riideese või jalanõupaar olemas, siis teist humanitaarabi korras ei anta. Näiteks, kui Sul on juba sisejalanõud, siis teist paari vangla enda poolt ei anta",
            "Riideid ja jalanõusid humanitaarabi korras ei anta, kui Sinu 3 kuu keskmine rahajääk on suurem kui taotletava asja hind. Näiteks, kui Sinu 3 kuu keskmine rahajääk on 28 €, aga jalanõud maksavad 20 €, siis vangla neid tasuta ei anna."
             ]
    },
    EN:{
      title:"PERSONAL HYGIENE, CLOTHING, AND WASHING",
      sub:"It is important to keep yourself and your living environment clean in prison – this is the responsibility of every inmate. It is necessary for both your own health and the health of others",
      line:[
        "If you do not have enough clothing or hygiene items and lack the money to buy them, you can submit a request for assistance from the prison.",
        " The prison only provides the most essential items and decides on each case individually, taking into account your needs and financial situation.",
      ],
      personalTitle:"Personal cleanliness",
      rules:[
        "Use only the shared shower room or the shower in your cell for washing. Washing in other areas is not allowed",
        "The barber service in the prison is free of charge.",
        "Tattooing with any tools is prohibited in the prison.",
        
      ],
      personalTip:"Hygiene products (e.g., soap, shampoo, toothbrush, shaving supplies, etc.) can be purchased from the prison's online store.",
      hygienePack:"If you do not have money to buy hygiene products, you can apply to the prison for a free hygiene pack.",
      essentialsTitle:"The hygiene pack includes:",
      essentials:[
        "Toilet soap and household soap, toothbrush and toothpaste.",
        "Disposable razors",
        "For women hygiene pads"
      ],
      hygieneTip:[
        "Upon your first arrival at the prison, you will receive hygiene products for free from the prison.",
        "After that, you can apply for a hygiene pack every 3 months, or four times a year.",
        "The application will only be approved if your prison account has had an average of less than 15 euros in free funds per month over the last 3 calendar months, considering the initial balance and income during that period."
      ],
      clotheTitle:"Clothes, shoes, and bedding",
      cloLine:"Prisoners must wear the clothing provided by the prison, which is usually brown pants and a jacket. Arrested individuals and inmates in open prisons may wear personal clothing.",
      line2:" When the van arrives, you will receive the necessary bedding.",
      allowedTitle:"Allowed personal items",
      itemsAllowed:[
        "Soft washing and warm washing.",
        "Socks",
        "Shoes up to 4 pairs",
        "Gloves and a scarf",
        "3 hair ties, if you have long hair or a beard",
      ],
      clothesTitle:"The prison gives you the following clothes and items:",
      clothes:[
        {
          title:"Prison clothes:",
          clothe:[
            "T-shirt",
            "Long and short pants",
            "Skirt for women if desired",
            "Jacket and coat",
            "Winter hat and summer hat",
            "Mittens and summer hat",
            "Work clothes(if working in prison)"
          ]
        },
        {
          title:"Bedding and laundry:",
          clothe:[
            "Bedding(sheet, pillowcase,duvet cover)",
            "Blanket and pillow",
            "Bath towel and sauna towel"
             ]
        },
      
      ],
      underTitle:" The prison will provide you with the following shoes and items if necessary:",
      shoesTitle:"Shoes:",
      shoes:[
        "One pair of indoor shoes e.g slippers",
        "One pair of outdoor shoes (e.g., sneakers or boots)"
      ],
      socksTitle:"Underwear and socks:",
      socks:[
        "Up to 2 pairs of socks",
        "Up to 2 pairs of underwear"
      ],
      faqsTitle:"Frequently asked Questions",
      faqs:[
          {
            Question:"How can I get clothes or shoes in the future?",
            Answer:[
              "You have the option to buy clothes and shoes from the online store.",
              "Allowed items can also be sent to inmates by their relatives at certain times."
            ]    
          },
          {
            Question:"What should I do if I don't have the necessary clothes or money to buy them?",
            Answer:[
              "You have the option to request clothes from the prison.",
              "To do this, submit a request stating the clothing item or shoes and your measurements.",
               ]
          },
          {
            Question: "What should I do if the clothes provided by the prison wear out?",
            Answer:[
              "In general, clothes can be exchanged every 6 months based on a request.",
              "If you need clothes sooner, if they are worn out or damaged, please mention this in your request"
              ]
          }],
          warning:"The prison may refuse to provide you with these items if you have previously sent clothes or shoes out of the prison",
          noteTitle:"Other notes",
          notes:[
            "If you already have the requested clothing item or pair of shoes, a second one will not be provided as humanitarian aid. For example, if you already have indoor shoes, a second pair will not be given by the prison",
            "Clothes and shoes are not provided as humanitarian aid if your average cash balance over the past 3 months is greater than the price of the requested item. For example, if your average cash balance over 3 months is €28, but the shoes cost €20, then the prison will not provide them for free"
          ]
    }
  }
  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
      <ul style={{listStyleType:"disc"}}>{copy.line.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}

      </ul>
      <Accordion title={copy.personalTitle}>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.rules.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

        </ul>
      <p>{copy.hygienePack}</p>
      </Accordion>
      <Tip>
        {copy.personalTip}
      </Tip>
      <Accordion title={copy.essentialsTitle}>
           <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.essentials.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

        </ul>
      </Accordion>
      <Tip>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.hygieneTip.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

        </ul>
      </Tip>
      <h3 style={{
         fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop:"2rem"
      }}>{copy.clotheTitle}</h3>
      <p>{copy.cloLine}</p>
      <p>{copy.line}</p>
      <Accordion title={copy.allowedTitle}>
        <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.itemsAllowed.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

        </ul>
      </Accordion>
      <h3 style={{
  fontSize: "2rem",
  fontWeight: 900,
  color: "#003B71",
  letterSpacing: "-0.025em",
  lineHeight: 1.2,
  fontStyle: "italic",
  marginTop: "2rem"
}}>
  {copy.clothesTitle}
</h3>

<div style={{ marginTop: "1.5rem" }}>
  {copy.clothes.map((section, index) => (
    <Accordion key={index} title={section.title}>
      <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
        {section.clothe.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </Accordion>
  ))}
</div>
      <h3 style={{
  fontSize: "2rem",
  fontWeight: 900,
  color: "#003B71",
  letterSpacing: "-0.025em",
  lineHeight: 1.2,
  fontStyle: "italic",
  marginTop: "2rem"
}}>
  {copy.underTitle}
</h3>

{/* Shoes FAQ */}
<Accordion title={copy.shoesTitle}>
  <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
    {copy.shoes.map((item, index) => (
      <li key={index} style={{ marginBottom: "0.5rem" }}>
        {item}
      </li>
    ))}
  </ul>
</Accordion>


<Accordion title={copy.socksTitle}>
  <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
    {copy.socks.map((item, index) => (
      <li key={index} style={{ marginBottom: "0.5rem" }}>
        {item}
      </li>
    ))}
  </ul>
</Accordion>
      <h3 style={{
                          fontSize: "2rem",
                          fontWeight: 900,
                          color: "#003B71",
                          letterSpacing: "-0.025em",
                          lineHeight: 1.2,
                          fontStyle: "italic",
                        }}>{copy.faqsTitle}</h3>
      <div style={{ marginTop: "1.5rem" }}>
                          {copy.faqs.map((faq, index) => (
                            <Accordion
                              key={index}
                              title={faq.Question}
                            >
                              <div style={{ fontSize: "1.5rem", lineHeight: 1.7 }}>
                        
                                {faq.Line && (
                                  <p style={{ marginBottom: "0.8rem", fontWeight: 600 }}>
                                    {faq.Line}
                                  </p>
                                )}
                        
                               
                                {Array.isArray(faq.Answer) ? (
                                  <ul style={{ paddingLeft: "1.8rem",listStyleType: "disc" }}>
                                    {faq.Answer.map((item, i) => (
                                      <li key={i} style={{ marginBottom: "0.4rem" }}>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>{faq.Answer}</p>
                                )}
                        
                              </div>
                            </Accordion>
                             ))}
                      </div>
                      
    </Section>
  );
}

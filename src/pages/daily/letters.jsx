import React from 'react';
import Section from "../../components/ui/Section";
import Accordion from '../../components/ui/Accordion';
import Tip from '../../components/ui/Tip';
export default function DailyLetters({ language = 'ET' }) {
  const content={
    ET:{
      title:"KIRJAVAHETUS",
      sub: "Vanglas saad saata ja vastu võtta kirju. See on üks viis, kuidas hoida sidet pereliikmete ja sõpradega või ajada asju advokaadi ja ametiasutustega",
      line:"Kirjavahetusel on teatud reeglid. Nende järgimine aitab tagada turvalisust ja õiglust nii Sinu kui ka teiste jaoks.",
      lettersTitle:"Kirjade saatmine ja kättesaamine",
      letters:[
        "Kirju saab saata ja kätte saada ainult vangla kaudu, mitte otse inimeste vahel",
        "Kirju saadetakse vanglast välja tavalise postiga. Samamoodi saabuvad Sulle ka väljastpoolt saadetud kirjad.",
        "Kirjade saatmisega seotud postikulude eest tasud oma isikuarvelt.",
        "Kui Sul raha ei ole, võib vangla erandjuhtudel postikulud katta. Seda saab teha näiteks juhul, kui Sa kirjutad ametiasutusele (nt Õiguskantslerile, vanglatele, Presidendi Kantseleile, prokurörile, uurijale, vanglakomisjonile või kohtule)."
          ],
      lettersTip:"Lähedastele mõeldud kirjade saatmiseks üldjuhul postikulusid ei kaeta.",
      faqsTitle:"Olulised asjad, mida meeles pidada",
      faqs:[
          {
            Question:"Kellele võin kirjutada?",
            Answer:"Sa võid kirjutada oma pereliikmetele, tuttavatele, advokaadile, ametiasutustele ja teistele isikutele, kellega suhtlemine ei ole seadusega piiratud."
          },
          {
            Question:"Kellele ma ei või kirjutada?",
            Answer:[
              "Isikule, kellega suhtlemine on keelatud kohtu või vangla otsusega",
              "isikutele, kelle aadressi ei ole võimalik tuvastada või kellega suhtlemine võib vangla ametnike hinnangul olla ohtlik."
              ]
          },
          {
            Question: "Kas minu kirju loetakse või avatakse?",
            Answer:[
              "Sinu kirjade sisu võib lugeda ainult siis, kui selleks on kohtu luba seoses kriminaalmenetluse protsessiga.",
              "Vanglal on aga õigus Sinu juuresolekul avada Sulle saadetud või Sinu poolt saadetavate kirjade ümbrikke ning kontrollida, et need ei sisaldaks keelatud esemeid.",
              "Vangla ei tohi kontrollida neid kirju, mille Sa saadad kaitsjale, advokaadile, prokuratuurile, kohtule, õiguskantslerile, Justiitsministeeriumile või vanglakomisjonile."
            ]
          }
        ],
    },
    EN:{
      title:"Correspondence",
      sub: "In prison, you can send and receive letters. This is one way to maintain contact with family members and friends or to conduct business with your lawyer and authorities.",
      line:"Correspondence has certain rules. Following these helps ensure safety and fairness for both you and others.",
      lettersTitle:"Sending and receiving letters",
      letters:[
        "Letters can only be sent and received through the prison, not directly between individuals.",
        "Letters are sent out of the prison via regular mail. Similarly, letters sent to you from outside will also arrive.",
        "You will pay for the postage costs related to sending letters from your personal account",
        "If you do not have money, the prison may cover the postage costs in exceptional cases. This can be done, for example, if you are writing to a government agency (e.g., the Chancellor of Justice, prisons, the Presidential Chancellery, the prosecutor, the investigator, the prison commission, or the court).",
      ],
      lettersTip:"Generally, postage costs for sending letters to loved ones are not covered.",
      faqsTitle:"Frequently asked Questions",
      faqs:[
          {
            Question:"Who can I write to?",
            Answer:"You can write to your family members, acquaintances, lawyer, government agencies, and other individuals with whom communication is not legally restricted."
          },
          {
            Question:"Who am I not allowed to write to?",
            Answer:[
              "To a person with whom communication is prohibited by a court or prison decision.",
              "To individuals whose address cannot be verified or with whom communication may be deemed dangerous by prison officials.",
               ]
          },
          {
            Question: "Are my letters read or opened?",
            Answer:[
              "The content of your letters can only be read if there is a court order related to a criminal procedure.",
              "Vanglal has the right to open the envelopes of letters sent to you or sent by you in your presence and to check that they do not contain prohibited items",
              "You are not allowed to control the letters you send to the guardian, lawyer, prosecutor, court, Chancellor of Justice, Ministry of Justice, or prison commission."
              ]
          }
        ],

    }
    
  }
  const copy = content[language] || content.ET;
  return (
  <Section title={copy.title} sub={copy.sub}>
    <p>{copy.line}</p>
    <Accordion title={copy.lettersTitle}>
       <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6,listStyleType:"disc" }}>
            {copy.letters.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            ))}
          </ul>

    </Accordion>
    <Tip>{copy.lettersTip}</Tip>
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

import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Accordion from "../../components/ui/Accordion"
import { Clock, Users, Video } from "lucide-react";

export default function DailyMeetings({ language = 'ET' }) {
  const content={
    ET:{
       title:"LÄHEDASTEGA KOKKUSAAMINE",
      sub:"Kohtumistele on ette nähtud kindlad toimumisajad ning nende pikkusele ja sagedusele on piirangud. Kokkusaamiste kord vanglates võib veidi erineda, seega vaata täpsemalt järele vangla kodukorrast või küsi kontaktisikult.",
      shortTitle:"Lühiajaline kokkusaamine",
      short:[
        "Kohtumine lähedaste või teiste Sulle oluliste inimestega.",
        "Kestab 2 tundi.",
        "Üldjuhul olete klaasiga eraldatud. Juhul kui soovid kohtuda ilma klaasita, pead seda eraldi taotlema."
      ],
      longTitle:"Pikaajaline kokkusaamine",
      long:[
        "Kohtumine vanglas eraldi ruumis lähedaste, tugiisiku või teiste kooskõlastatud külalistega",
        "Kestab üldjuhul 24 tundi. Toimub teatud nädalapäevadel ja aegadel.",
        "Kohtumine on tasuline, selle eest saab tasuda pangakaardi või ülekandega. Tavaliselt tasub selle külaline, kuid kui soovid kokkusaamise kulud tasuda ise, sel juhul esita vastav taotlus.",
        "Kaasa tohib võtta ainult vangla e-poest ostetud asju. Näiteks kodust või mujalt pärinevaid asju kokkusaamisele kaasa võtta ei ole lubatud."
        ],
      linkTitle:"Kohtumine videosilla vahendusel",
      links:[
        "Videokõne lähedastega või asjaajamise eesmärgil, näiteks advokaadi, kaitsja, kaplani, konsulaartöötaja, notari, kohaliku omavalitsuse töötajaga vms.",
        "Kestab 1–2 tundi."
      ],
      requestTitle:"Kohtumise taotlemine",
      requestContent:[
        "Kõik kokkusaamised tuleb eelnevalt registreerida telefoni teel või taotlust esitades.",
        "Hakka kohtumist piisavalt varakult ette valmistama ja varu selleks piisavalt aega, sest kohtumistele võivad olla pikad järjekorrad."
      ],
      prohibitedTitle:"Keelatud tegevused:",
      prohibited:[
        "Ebaviisakas käitumine, solvamine või ähvardamine",
        "Alkoholijoobes või narkootikumide mõju all viibimine",
        "Keelatud asjade toomine vanglasse",
        "Külalise toodud esemete jätmine kinnipeetavale",
        "Intiimsete piirkondade katsumine või muud seksuaalsed tegevused lühiajalisel kohtumisel või videokõnes"
        ],
      faqsTitle:"Olulised asjad, mida meeles pidada",
      faqs:[
          {
            Question:"Mida peaks minu lähedane külastuste kohta teadma?",
            Answer:[
              "Sinuga kohtuv inimene peab saabuma vangla pääslasse piisava ajavaruga enne kohtumise algusaega. Täpse aja leiad vangla kodukorrast.",
              "Vanglas keelatud asjad tuleb panna hoiule pääslas. Lubatud asjade nimekirja leiad vanglateenistuse kodulehelt.",
              "Nii kinnipeetav kui kokkusaaja otsitakse läbi, et vältida keelatud asjade toomist vanglasse.",
              "Kohtumisele tulevatele isikutele võidakse teha alkoholi- ja narkotest.",
               ]
          },
          
          {
            Question: "Millised reeglid kehtivad kohtumisel?",
            Answer:[
              "Kohtumisel kehtivad reeglid, millest pead kinni pidama nii Sina kui ka inimene, kellega kohtud",
              "Juhul, kui te neid ei järgi, võib vanglaametnik kohtumise katkestada."
              ]
          }
        ],
        visitorTip:[
          "Kokkusaaja esitab kehtiva isikut tõendava dokumendi ja täidab avalduse külastamiseks",
          "Kui Sind külastab alaealine laps, tuleb esitada lapse sünnitunnistus (kuni 8 a lapse puhul), fotoga dokument (8–15-aastase lapse puhul) või ID-kaart või pass (16-aastase või vanema lapse puhul)."
         ]
    },
    EN:{
      title:"Meeting with Relatives",
      sub:"Meetings are scheduled for specific times, and there are restrictions on their duration and frequency. The rules for meetings in prisons may vary slightly, so please check the prison regulations or ask the contact person for more details.",
      shortTitle:"Short-term meeting",
      short:[
        "A meeting with relatives or other important people in your life.",
        "Lasts for 2 hours.",
        "Generally, you will be separated by glass. If you wish to meet without glass, you must apply for this separately."
      ],
      longTitle:"Long-term meeting",
      long:[
        "A meeting in a separate room in the prison with relatives, a support person, or other approved guests",
        "Generally lasts 24 hours. Takes place on certain days of the week and at specific times.",
        "The meeting is paid, and payment can be made by bank card or transfer.",
        "Usually, the guest pays for it, but if you wish to pay for the meeting costs yourself, please submit a corresponding request.",
        "Only items purchased from the prison's online store are allowed to be taken. For example, it is not permitted to bring items from home or elsewhere to the meeting"
      ],
      linkTitle:"Meeting via video link",
      links:[
        "Video calls with relatives or for official purposes, such as with a lawyer, defender, chaplain, consular officer, notary, local government employee, etc.",
        "Lasts 1–2 hours."
      ],
      requestTitle:" Requesting a meeting",
      requestContent:[
        "All meetings must be registered in advance by phone or by submitting a request.",
        "Start preparing for the meeting well in advance and allow enough time for it, as there may be long queues for meetings."
      ],
      prohibitedTitle:"Prohibited activities are:",
      prohibited:[
        "Rude behavior, insults, or threats",
        "Being under the influence of alcohol or drugs",
        "Bringing prohibited items to prison",
        "Leaving items brought by visitors for the detainee",
        "Touching intimate areas or other sexual activities during a brief meeting or video call."
      ],
      faqsTitle:"Frequently asked Questions",
      faqs:[
          {
            Question:"What should my relative know about visits?",
            Answer:[
              "The person meeting with you must arrive at the prison entrance with sufficient time before the meeting starts. You can find the exact time in the prison's regulations.",
              "Prohibited items in the prison must be stored at the entrance. You can find the list of prohibited items on the website of the prison service.",
              "Both the detainee and the visitor will be searched to prevent the introduction of prohibited items into the prison",
              "Individuals attending the meeting may be subjected to alcohol and drug tests."
               ]
          },
          
          {
            Question: "What rules apply during the meeting?",
            Answer:[
              "There are rules that you and the person you are meeting must adhere to during the meeting.",
              "If you do not follow them, the prison officer may terminate the meeting."
              ]
          }
        ],
        visitorTip:[
          "The visitor must present a valid identification document and complete a request for the visit",
          "If a minor child is visiting you, a birth certificate of the child must be provided (for children up to 8 years old), a photo document (for children aged 8 to 15), or an ID card or passport (for children aged 16 or older).",
        ]
    }
  };
  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
          <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        marginTop: "1.5rem"
      }}
    >

      <div
        style={{
          background: "#EFF6FF",
          borderRadius: "20px",
          padding: "1.5rem",
          border: "2px solid #3B82F6"
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "1.4rem",
            fontWeight: "800",
            color: "#1E3A8A",
            marginBottom: "1rem"
          }}
        >
          <Clock size={22} />
          {copy.shortTitle}
        </h3>

        <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6 }}>
          {copy.short.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

     
      <div
        style={{
          background: "#F0FDF4",
          borderRadius: "20px",
          padding: "1.5rem",
          border: "2px solid #22C55E"
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "1.4rem",
            fontWeight: "800",
            color: "#166534",
            marginBottom: "1rem"
          }}
        >
          <Users size={22} />
          {copy.longTitle}
        </h3>

        <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6,listStyleType:"disc" }}>
          {copy.long.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Video meeting */}
      <div
        style={{
          background: "#F5F3FF",
          borderRadius: "20px",
          padding: "1.5rem",
          border: "2px solid #8B5CF6"
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "1.4rem",
            fontWeight: "800",
            color: "#5B21B6",
            marginBottom: "1rem"
          }}
        >
          <Video size={22} />
          {copy.linkTitle}
        </h3>

        <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6 }}>
          {copy.links.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
      <h3 style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#003B71",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                    fontStyle: "italic",
      }}>{copy.requestTitle}</h3>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.requestContent.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
      </ul>
      <Accordion title={copy.prohibitedTitle}>
      <ul style={{listStyleType:"numbered", marginLeft:"2rem"}}>{copy.prohibited.map((item, index) => (
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
                <Tip>
                  <ul style={{listStyleType:"numbered", marginLeft:"2rem"}}>{copy.visitorTip.map((item, index) => (
                      <li key={index} style={{ marginBottom: "0.5rem" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tip>
            
            
    </Section>
  );
}

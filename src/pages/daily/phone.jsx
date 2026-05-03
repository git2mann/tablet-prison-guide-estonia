import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from "../../components/ui/Accordion"
export default function DailyPhone({ language = 'ET' }) {
  const content={
    ET:{
      title:"HELISTAMINE",
      sub:"Helistamine ei ole vanglas iseenesest-mõistetav, vaid see on õigus, millele kehtivad kindlad reeglid. Need reeglid sõltuvad sellest, millises osakonnas Sa oled ja kuidas käitud. ",
      callInfo:[
        "Esimese nädala jooksul tuleb Sul kirja panna nende inimeste andmed ja numbrid, kellele soovid vanglas olles helistada, näiteks lähedased või advokaat",
        "Selleks pead täitma vormi, mille annad vanglapersonalile",
        "Helistamine on tasuline. Selleks antakse Sulle telefonikaart, millele saad oma isikuarvelt ise raha kanda",
        "Üldiselt ei piirata seda, mitu numbrit Sa ühe helistamisaja jooksul valid.",
        "Seega võid helistada oma telefoni kasutamise ajal mitmele inimesele."
         ],
      callInfoTip:"Kui Sa vanglasse saabud, kantakse Sinu kaardile 1 euro, millega saad rääkida umbes 10 kuni 20 minutit. See sõltub sellest, kuhu Sa helistad ja milline on teenusepakkuja hind.",
      procedureTitle:"Helistamise kord",
      openPrisonProcedureTitle:"Avatud osakonnas",
      openPrisonProcedure:[
        "Sa tohid helistada päevakavas määratud aegadel.",
        "Kui soovid helistada väljaspool seda aega riigiasutusse, omavalitsusse või advokaadile, esita põhjendatud taotlus eelneval päeval õhtuse loenduse ajal",
        "Telefoni kasutamise aeg ühes päevas on 60 minutit. See aeg sisaldab:"
          ],
      openPrisonProcedureList:[
        "Numbrite valimis",
        "Ooteaega - kuni teine pool vastab",
        "Kõne enda kestust"
      ],
      closedPrisonProcedureTitle:"Suletud osakonnas",
      closedPrisonProcedure:[
        "Kui Sa viibid kartseris või eraldatud lukustatud kambris (näiteks julgeolekuabinõuna), siis Sul on piiratud suhtlemisõigus. Samad reeglid kehtivad ka suletud osakonnas.",
        "Tavaliselt saad helistada vähemalt üks kord nädalas vähemalt 10minutit.",
        "Kui Sa tahad helistada, siis pead sellest vanglaametnikule kirjalikult teada andma. Seda tuleb teha õhtuse loenduse ajal päev enne helistamis",
        "Kõigi taotluste põhjal tehakse järgmiseks päevaks helistamise ajakava.",
        " Pane tähele, et vanglal ei pruugi olla võimalust tagada Sulle helistamisaega just soovitud kellaajal."
        ],
      limitedRights:"Piiratud suhtlemisõigusega",
      limitedNotes1:"Piiratud suhtlemisõiguse ajal tuuakse Sulle telefon kambrisse eelnevalt kokkulepitud ajal.",
      limitedNotes2:"See on mõeldud turvalisuse tagamiseks ning see",
      securityNotes:[
        "Välistab olukorrad, kus Sa võiksid teistega keelatud viisil infot vahetada",
        "Tagab ametnikele kontrolli Sinu liikumise ja telefoni kasutamise üle",
        "Hoiab ära võimalikud konfliktid teiste kinnipeetavatega."
      ],
      faqsTitle:"Korduma kippuvad küsimused",
      faqs:[
          {
            Question:"Kellele tohin helistada? ",
            Answer:[
              "Kui Sa helistad kellelegi, kelle kohta Sa pole varem andmeid esitanud, siis pead eelmise päeva õhtuse loenduse ajaks täitma vormi.",
              "Vormile tuleb kirjutada:",
              [
                "Oma nimi, sünniaeg ja kambri number",
                "Kellele Sa helistada soovid ja mis on tema telefoninumber",
                "Kuidas see inimene või asutus Sinuga seotud on (nt pereliige, sõber, advokaat)"
              ]
              ],
                
          },
          {
            Question:"Mida ei tohi helistamisel teha?",
            Answer:[
              "Jagada oma kõnekaardi numbrit ja PIN-koodi teiste kinnipeetavatega",
              "Kasutada teiste kinnipeetavate kõnekaarti või logida sisse võõraste andmetega",
              "Telefoni juurest ilma välja logimata lahkuda",
              "Anda oma kõne ajal telefonitoru edasi teisele kinnipeetavale."
              ]
          },
          {
            Question: "Millal pean helistamiseks taotluse esitama?",
            Answer:"Avatud osakonnas ei pea Sa alati esitama taotlust, kui helistad päevakavas ette nähtud aja"
          }],
          callRequestTitle:"Aga taotlus on vajalik, kui",
          callRequestNotes:[
            "Soovid helistada päevakavavälisel ajal, näiteks riigiasutusele, omavalitsusele või advokaadile",
            "Osakond on ajutiselt lukustatud, näiteks turvakaalutlustel",
            "Sul on piiratud suhtlemisõigus",
            "Tahad helistada inimesele, kelle kontaktandmeid Sa pole veel vanglale andnud"
            ],
          callRequestLine:"Pea meeles! Nendel juhtudel tuleb helistamistaotlus tavaliselt esitada hiljemalt eelneva tööpäeva õhtusel loendusel."
    },
    EN:{
      title:"CALLING",
      sub:"Making phone calls is not a given in prison, but rather a right that is subject to specific rules. These rules depend on which department you are in and how you behave.",
      callInfo:[
        "During the first week, you must write down the details and numbers of the people you wish to call while in prison, such as relatives or a lawyer",
        "To do this, you need to fill out a form, which you will give to the prison staff.",
        "Making phone calls is chargeable. You will be given a phone card to which you can transfer money from your personal account.",
        "In general, there is no limit to the number of numbers you can choose during one calling session.",
        "Therefore, you can call multiple people during your phone usage time.",
      ],
      callInfoTip:"When you arrive at the prison, 1 euro will be credited to your card, which allows you to talk for about 10 to 20 minutes. This depends on where you are calling and what the service provider's rates are. ",
      procedureTitle:"Phone Calling Procedure",
      openPrisonProcedureTitle:"In the open department",
      openPrisonProcedure:[
        "You are allowed to make calls at the times specified in the daily schedule. ",
        "If you wish to call a government agency, municipality, or lawyer outside of these times, you must submit a justified request the day before during the evening count.",
        "If you have made 3 calls, for example — one lasting 15 minutes, another 20 minutes, and the third 25 minutes, then your daily limit is reached.",
        "If necessary, the prison officer can grant you a longer calling time if you need to speak with a lawyer, relatives, or an official, but a request form with justification must be submitted for this.",
        "The time spent using the phone in one day is 60 minutes. This time includes:"
      ],
      openPrisonProcedureList:[
        "Making a phone call",
        "Waiting time - until the other party responds",
        "The duration of the call itself."
      ],
      closedPrisonProcedureTitle:"In a closed unit",
      closedPrisonProcedure:[
        "If you are in solitary confinement or in a separate locked cell (for example, as a security measure), your communication rights are limited. The same rules apply in a closed unit.",
        "Usually, you can make a call at least once a week for at least 10 minutes.",
        "If you want to make a call, you must inform the prison officer in writing. This must be done during the evening count the day before the all.",
        "Based on all requests, a calling schedule will be made for the next day",
        " Please note that the prison may not have the ability to grant you a calling time at the exact desired hour.",
      ],
      limitedRights:" Limited communication rights",
      limitedNotes1:"During the limited communication rights period, your phone will be brought to your cell at a previously agreed time.",
      limitedNotes2:"This is intended to ensure security and it:",
      securityNotes:[
        "Excludes situations where you could exchange information with others in prohibited ways;",
        "Ensures officials have control over your movement and phone usage",
        "Prevents possible conflicts with other detainees.",
      ],
      faqsTitle:"Frequently asked Questions",
      faqs:[
          {
            Question:"Who can I call?",
            Answer:[
              "If you call someone for whom you have not previously provided information, you must fill out the form by the evening count of the previous day.",
              "Forms must be written:",
              [
                "Your name, date of birth, and cell number",
                "Who you wish to call and what their phone number is",
                "How this person or organization is related to you (e.g., family member, friends, lawyer)"
              ]
              ],
                
          },
          {
            Question:"What should you not do when making a call?",
            Answer:[
              "Share your calling card number and PIN code with other inmates",
              "Use another inmate's calling card or log in with someone else's data",
              "Leave the phone without logging out",
              "Pass the phone to another inmate during your call"
               ]
          },
          {
            Question: "When do I need to submit a request to make a call?",
            Answer:"In the open unit, you do not always need to submit a request when you call at the scheduled time."
          }],
          callRequestTitle:"A call request is necessary if",
          callRequestNotes:[
            "You wish to call outside of scheduled hours, for example, to a government agency, a local authority, or a lawyer.",
            "The department is temporarily locked, for example, for security reasons.",
            "You have limited communication rights",
            "You want to call a person whose contact details you have not yet provided to the prison.",
          ],
          callRequestLine:"Remember! In these cases, the call request usually needs to be submitted by the evening count of the previous working day"
    }
  }
  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
      <ul style={{listStyleType:"none",marginLeft:"2rem"}}>{copy.callInfo.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      <Tip>
        {copy.callInfoTip}
      </Tip>
      <h3 style={{
         fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop:"2rem"
      }}>{copy.procedureTitle}</h3>
      <Accordion title={copy.openPrisonProcedureTitle}>
      <ul style={{listStyleType:"numbered",marginLeft:"2rem"}}>{copy.openPrisonProcedure.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      <ul style={{listStyleType:"disc",marginLeft:"3rem"}}>{copy.openPrisonProcedureList.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
      <Accordion title={copy.closedPrisonProcedureTitle}>
      <ul style={{listStyleType:"numbered",marginLeft:"2rem"}}>{copy.closedPrisonProcedure.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </Accordion>
      <Accordion title={copy.limitedRights}>
        <p>{copy.limitedNotes1}</p>
        <p>{copy.limitedNotes2}</p>
           <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.securityNotes.map((item, index) => (
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
              marginTop:"2rem"
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
  )}
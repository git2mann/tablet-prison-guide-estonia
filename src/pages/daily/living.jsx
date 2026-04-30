import React from 'react';
import Section from "../../components/ui/Section";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Tip from '../../components/ui/Tip';
import Accordion from '../../components/ui/Accordion';

export default function DailyLiving({ language = 'ET' }) {
  const content={
    ET:{
      title:"ELUKAMBER",
      placementTitle:"Kambrisse paigutamine",
      placement:[
        "Vanglas jagad kambrit teise kinnipeetavaga. Vangla poolt määratakse sulle kamber.",
        "Samuti määratakse Sulle kambris voodi ja riiul. ",
        "Päevaruumis asub ühine külmkapp, millesse määratakse sulle kindel asukoht asjade hoidmiseks.",

      ],
      placementTip:"Arst võib määrata Sulle alumise magamiskoha tervislikel põhjustel, näiteks kui Sul on seljavigastused, kipsis või vigastatud jalg, oled vanem inimene vms.",
      furnishingsTitle:"Kambri sisustus",
      furnishingsLine:"Kambris tohivad olla ainult vangla poolt määratud mööbel ja lubatud asjad. Kambris on lubatud ka isiklikud asjad.",
      furnishingsLine2:"Kambri sisustus on",
      furnishings:[
        "Narivoodi",
        "Laud",
        "Kaks tooli",
        "Kaks riiulit",
        "Nagi",
        "WC",
        "Kraanikauss"
      ],
      furnMoreLines:[
        "Kambriukse kõrval asub kambriterminal, mille kaudu saab kuulata raadiot ja helistada valvuriruumi",
        " Selle kaudu saad Sina suhelda vangla personaliga ja personal Sinuga.",
        "Raadio ja telekanalite pakett on tellitud vangla poolt ning see on kogu vanglas ühesugune. Paketid võivad olla vanglati erinevad."
      ],
      maintenanceTitle:"Kambri korrashoid",
      maintenance:[
        "Vangla poolt saad voodi varustuse ja käterätiku.",
        {
          title:" Sellele lisaks saad koristustarbed ja pesemisvahendid, millega tuleb hoida puhtana:",
          details:[
            "Oma voodi ja isiklikud esemed",
            "Kogu kamber, kaasa arvatud WC",
            "Osakonna üldruumid"
          ]
        },
        "Koristustarbed paiknevad väljaspool kambrit asuvas koristusruumis, kust saad neid koristamise ajaks võtta.",
        "Loenduse ajal peab Sinu voodi olema korras. Päeva jooksul võid voodis puhata, kuid seejärel tee see jälle korda.",
        "Kambrisse ei tohi koguneda kasutuid asju - tühjad pakendid, ümbrised ja muu sarnase pead ära viskama või ära andma.",
        "Kambris ja laos tohib Sul olla kokku kuni 30 kg asju."
      ],
      commonTitle:"Reeglid üldruumides",
      common:[
        "Kui liigutad päevaruumis toole, laudu või muud sisustust, tõsta need pärast tagasi.",
        "Üldruumidest ei ole lubatud viia asju oma kambrisse. Erandiks on raamatud ja spordivahendid.",
        "Need vii kohe peale kasutamist tagasi, et ka teised saaksid neid võtta."
      ],
      behaviourTitle:"Käitumine kambris",
      behaviourLine:"Loenduse ajal pead katkestama muud tegevused ja seisma püsti.",
      behaviourLine2:"Kambris ei ole lubatud:",
      behaviour:[
        "Vahetada kaaskinnipeetavaga voodikohta, riiulit ega külmkapi sahtlit",
        "Karjuda, häirida teisi ega rikkuda vaikust või öörahu",
        "Kuulatsa või panna mängima raadiot või televiisorit liiga valjult, kui see segab kambrikaaslasi.",
        "Kambriterminali ja muud tehnikat tuleb kasutada teistega arvestades",
        "Teistelt kinnipeetavatelt vastu võtta ega neile anda asju ega sööki",
        "Visata midagi kambrist välja ega võtta teistelt kinnipeetavatelt asju vastu läbi akna, ukse või luugi",
        "viia isiklikke asju teiste kinnipeetavate kambritesse, välja arvatud ametniku loal.",
        "Sinu toiduained võivad olla külmkapis ja riided kuivatusruumis või -kapis"
      ],
      cellRulesTitle:"Reeglid kambris",
      cellLine:"Need on vajalikud turvalisuse, järelevalve ja korra tagamiseks. Kõiki kambreid kontrollitakse regulaarselt.",
      cellLine2:"Kambris ei ole lubatud:",
      cellRules:[
        "teha muudatusi kambri sisustuses, näiteks panna üles peegleid",
        "Kleepida asju seintele - selleks on liimtahvel.",
        "tuua kambrisse mööblit, mis ei kuulu kambri algsesse sisustusse.",
        "katta kinni lampe, kaameraid, toiduluuke ega muud, mis segab kambri kontrollimist",
        "kasutada laual, riiulil või põrandal katteid, mis võivad segada kambri kontrollimist",
        "Kääritada või hapendada toitu",
        "Omada isetehtud elektriseadmeid või tööriistu",
        "Muuta väljaspool kambrit uste juures olevat infot",
        "panna kambris või mujal üles pilte, mis kujutavad alasti inimesi, on ebasündsad, häirivad või vaenu õhutavad."
      ],
      faqsTitle:"Olulised asjad, mida tuleb meeles pidada",
      faq:[
        {
          question:"Millised isiklikud asjad on kambris lubatud?",
          answer:[
            "Vangla poest ostetud televiisor, veekeedukann ja pardel",
            "asjad, mida igapäevaselt kasutad, näiteks hügieeni- ja kehahooldusvahendid, kirjutusvahendid, õppimismaterjalid ja kuni 5 raamatut",
            "Vaba aja veetmise vahendid, nagu mängud, raamatud jms",
            "Isiklikud riided, mida on lubatud vanglas kanda, näiteks soe pesu, jalanõud jms",
            "Vanglas lubatud söök ja jook, aga piiratud kogustes",
            "Kui Sind paigutatakse kartserisse, on Sinu isiklikud asjad sellel ajal eraldi hoiukohas.",
            "Kuna Sinu isiklikud asjad on arvel, ei tohi Sa neid lihtsalt ära visata (välja arvatud aluspesu ja sokid). Selle kohta tuleb teha avaldus ja asjad koos kontaktisikuga ära visata."

          ]
        },
        {
          question:"Mis on isiklike asjade ladu ja kuidas saan seda kasutada?",
          answer:[
            "Lisaks kambrile on Sul võimalus anda isiklikud asjad hoiule lattu.",
            "Sinna ei võeta vastu hügieeni-, kehahooldus- ega puhastusvahendeid, toiduaineid, ravimeid, süütamisvahendeid, sokke, sukki, sukkpükse, põlvikuid, aluspükse ega rinnahoidjaid. Isiklikud riided peavad olema puhtad."
          ],
        },
        {
          question:"Kui soovid asju lattu panna või kätte saada",
          answer:[
            "Kirjuta taotlus.",
            "Asjad saad ära anda või tagasi graafikus määratud nädalal üks kord kuus",
            "Ametnik kontrollib taotluse sisu ning otsustab väljastamise üle."
            ]
        },
        {
          question:"Mida teha, kui kambris läheb midagi katki?",
          answer:"Sellest tuleb Sul kohe ametnikule teada anda, näidata katkist asja või see üle anda. Katkist ja lahtist mööblit ei tohi edasi kasutada."
        }
      ]
    },
    EN:{
      title:" LIVING QUARTERS",
      placementTitle:"Placement in a cell",
      placement:[
        "The prison will assign you a cell. In prison, you will share a cell with another inmate. ",
        "You will also be assigned a bed and a shelf in the cell.",
        "The common room has a shared refrigerator, where you will be assigned a specific location for storing your items.",

      ],
      placementTip:"The doctor may assign you a lower bunk for health reasons, such as if you have back injuries, a cast or injured leg, are an older person, etc.",
      furnishingsTitle:"Cell furnishings",
      furnishingsLine:"Only furniture and items designated by the prison are allowed in the cell. Personal items are also permitted in the cell.",
      furnishingsLine2:"The furnishings in the cell are:",
      furnishings:[
        "Bunk bed",
        "Table",
        "Two chairs",
        "Two shelves",
        "Coat rack",
        "Toilet",
        "Faucet"
      ],
      furnMoreLines:[
        "Next to the cell is the cell terminal, through which you can listen to the radio and call the guard room.",
        "This allows you to communicate with the prison staff and the staff to communicate with you.",
        "The radio and television channel package is ordered by the prison and is the same throughout the prison. The packages may vary from prison to prison."
      ],
      maintenanceTitle:"Cell Maintenance",
      maintenance:[
        "The prison provides bedding and a towel.",
        {
          title:"In addition, you will receive cleaning supplies and washing agents, which must be used to keep clean:",
          details:[
            "Your bed and personal items",
            "The entire cell, including the toilet",
            "The common areas of the department"
          ]
        },
        "Cleaning supplies are located in the cleaning room outside the cell, from where you can take them during cleaning time.",
        "During the count, your bed must be tidy. You may rest in bed during the day, but then you must make it tidy again",
        "You should not accumulate useless things in your room - empty packages, wrappers, and other similar items should be thrown away or given away",
        " You are allowed to have a maximum of 30 kg of items in your room and storage."
      ],
      commonTitle:" Rules for common areas",
      common:[
        "If you move chairs, tables, or other furniture in the common area, please return them afterwards.",
        "Items are not allowed to be taken from the common areas to your room. The exception is books and sports equipment.",
        ". Please return them immediately after use so that others can also use them."
      ],
      behaviourTitle:"Behavior in the room",
      behaviourLine:"During the count, you must stop other activities and stand up.",
      behaviourLine2:"The following is not allowed in the room:",
      behaviour:[
        "To change beds, shelves, or refrigerator drawers with another detainee",
        "To disturb others or disrupt the peace or night time quiet",
        "Do not play the radio or television too loudly if it disturbs your cellmates",
        "The cell terminal and other equipment must be used with consideration for others",
        "Do not accept or give items or food to other detainees",
        "Do not throw anything out of the cell or accept items from other detainees through the window, door, or hatch",
        "Do not bring personal items into other detainees' cells, except with the permission of an officer.",
        "Your food can be stored in the refrigerator, and your clothes can be in the drying room or cabinet."
      ],
      cellRulesTitle:"Rules in the cell",
      cellLine:"These are necessary to ensure safety, supervision, and order. All cells are regularly checked.",
      cellLine2:" The following is not allowed in the room:",
      cellRules:[
        "Do not make changes to the cell's furnishings, such as putting up mirrors,",
        "Do not stick things to the walls - there is a sticky board for that.",
        "Do not bring furniture into the cell that does not belong to the original furnishings of the cell.",
        "Do not cover lamps, cameras, food hatches, or anything else that interferes with the monitoring of the cell",
        "Use covers on the table, shelf, or floor that may interfere with the inspection of the chamber",
        "Ferment or sour food",
        "Possess homemade electrical devices or tools",
        "Alter information outside the chamber at the doors",
        "Display pictures in the chamber or elsewhere that depict naked individuals, are indecent, disturbing, or incite hatred"
      ],
      faqsTitle:"Important things to note",
      faqs:[
        {
          Question:"What personal items are allowed in the chamber?",
          Answer:[
            "A television, kettle, and razor purchased from the prison shop",
            "Items that you use daily, such as hygiene and body care tools, writing instruments, learning materials, and up to 5 books",
            "Leisure activities, such as games, books, etc.",
            "Personal clothing that is allowed to be worn in prison, such as warm underwear, footwear, etc.",
            "Food and drink allowed in prison, but in limited quantities",
            "If you are placed in solitary confinement, your personal items will be stored separately at that time.",
            "Since your personal items are recorded, you cannot simply throw them away (except for underwear and socks). An application must be made for this, and the items must be disposed of with a contact person."

          ]
        },
        {
          Question:"What is the personal belongings storage and how can I use it?",
          Answer:[
            "In addition to the cell, you have the option to store personal items in the storage.",
            "Hygiene products, body care products, cleaning agents, food items, medicines, ignition devices, socks, stockings, tights, leggings, underwear, or bras will not be accepted. Personal clothing must be clean."
          ],
        },
        {
          Question:"If you want to store or retrieve items",
          Answer:[
            "Write an application.",
            "Items can be given away or returned once a month during the week specified in the schedule.",
            "The officer checks the content of the application and decides on the issuance."
            ]
        },
        {
          Question:"What to do if something breaks in the cell?",
          Answer:"You must inform the officer immediately, show the broken item or hand it over. Broken and loose furniture must not be used further."
        }
      ]
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
      }}>{copy.placementTitle}</h3>
      <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.placement.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      <Tip>
        {copy.placementTip}
      </Tip>
      <h3 style={{
         fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop:"2rem"
      }}>{copy.furnishingsTitle}</h3>
      <p>{copy.furnishingsLine}</p>
      <p>
          <ul style={{listStyleType:"none"}}>{copy.furnMoreLines.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      </p>
      <Accordion title={copy.furnishingsLine2}>
       <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.furnishings.map((item, index) => (
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
      }}>{copy.maintenanceTitle}</h3>
      

      <div style={{ marginTop: "1rem" }}>
        {copy.maintenance.map((item, index) => {


          if (typeof item === "string") {
            return (
              <p key={index} style={{ marginBottom: "0.8rem" }}>
                {item}
              </p>
            );
          }

  
          if (typeof item === "object") {
            return (
              <Accordion key={index} title={item.title}>
                <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
                  {item.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Accordion>
            );
          }

          return null;
        })}
      </div>
      <h3 style={{
         fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop:"2rem"
      }}>{copy.commonTitle}</h3>
      <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.placement.map((item, index) => (
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
      }}>{copy.behaviourTitle}</h3>
      <p>{copy.behaviourLine}</p>
      <Accordion title={copy.behaviourLine2}>
      <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.behaviour.map((item, index) => (
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
      }}>{copy.cellRulesTitle}</h3>
      <p>{copy.cellLine}</p>
      <Accordion title={copy.cellLine2}>
      <ul style={{listStyleType:"disc",marginLeft:"2rem"}}>{copy.cellRules.map((item, index) => (
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
  );
}

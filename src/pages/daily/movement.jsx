import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Accordion from "../../components/ui/Accordion"
import { Unlock, Lock } from "lucide-react";
export default function DailyMovement({ language = 'ET' }) {
  const content={
    ET:{
      title:"VANGLAS LIIKUMINE",
      sub: "Vangla on jagatud üksusteks ja osakondadeks, kus Sa elad ja liigud. Osakonnad on avatud, kuid Sind võidakse paigutada suletud kambrisse (näiteks julgeoleku kaalutlustel).",
      openTitle:"Avatud osakond",
      openContent:[
        "Päevasel ajal on kambriuksed avatud ja Sa tohid osakonna piires vabalt liikuda.",
        "Päevaruumis saad aega veeta, seal on televiisor, raamatud, mängud ja raadio."
      ],
      closedTitle:"Suletud kamber",
      closedContent:[
        "Siin oled Sa 23 tundi ööpäevas oma kambris.",
        "Kambriuks on enamiku ajast suletud ning liikumine toimub ainult vanglaametnike saatmisel ja graafiku alusel.",
      ],
      movementTitle:" Movement on prison territory",
      movementContent:[
        "Vangla territooriumil liigud Sa alati koos vanglaametnikuga ja tema loal - see käib saatmiskava alusel.",
        "Liikuda tuleb ettenähtud teekonnal ja ametniku juhiste järgi.",
        "Kui rikud reegleid, võib vanglaametnik saatmise katkestada ja Sind tegevusele mitte lubada. Halvimal juhul toob see kaasa karistuse.",
        "Kui liigud koos teiste kinnipeetavatega, siis peate kõndima kahekaupa kolonnis (Tallinna vanglas)."
      ],
      ruleTitle:"Liikumise ajal ei ole lubatud:",
      rules:[
        "Võtta asju maast või mujalt ega asju maha visata",
        "Kellelgi kätt suruda või muul moel füüsiliselt kontaktis olla",
        "Tegeleda kõrvaliste asjadega",
        "Vaadata uksesilmadest sisse või kalduda teekonnalt kõrvale.",
        "Siseneda ruumidesse, kuhu Sul pole luba minna",
        "ületada punast joont trellukse ees ega puudutada uste lukke",
        "Vajutada ühtegi nuppu ega lülitit ilma mõjuva põhjuseta."
      ],
      walksTitle:"Jalutuskäigud",
      walks:"Jalutuskäigule värskes õhus saad minna kord päevas vähemalt üheks tunniks selleks ettenähtud kohas. Jalutuskäigule minnakse graafiku alusel.",
      permittedTitle:"Jalutuskäigul lubatud asjad",
      permittedNotes:[
        "Käekell",
        "Kaelaskantav usuline ese või palvehelmed",
        "Abielusõrmus",
        "Taskurätt",
        "Kuni 0,5 liitrit vett plastpudelis",
        "üks kord kuus tekk ja padi õues kloppimiseks"
      ],
      permittedContent:"Jalutusaiast ei tohi midagi välja visata, sinna maha jätta ega midagi üles korjata. Samuti ei tohi suhelda teiste kinnipeetavatega, kes viibivad väljaspool sinu jalutusala. Reeglite rikkumise korral võib ametnik jalutuskäigu katkestada.",
      faqsTitle:"Olulised asjad, mida meeles pidada",
        faqs:[
          {
            Question:"Kuidas pean liikumise ajal riietuma?",
            Answer:[
              "Kambris võid olla oma riietega. Väljaspool kambrit pead kandma vangla riietust.",
              "Väljaspool kambrit pead kandma nähtaval kohal kaelas nimesilti, mis on kinnitatud vangla antud paelaga. Nimesilt võib olla riiete all, kui valmistad toitu või töötad masinatega.",
              "Sa ei tohi liikuda poolpaljalt ega palja ülakehaga.",
              "Jalutama saad minna ainult ilmale sobiva riietusega."
               ]
          },
          {
            Question:"Mille tohin liikumisel kaasa võtta?",
            Answer:[
              "Kui liigud osakonnast näiteks tööle, kooli või arsti juurde, võid kaasa võtta ainult need asjad, mis on vajalikud ja eelnevalt ametnikuga kooskõlastatud.",
              "Tagasi tulles ei tohi Sul olla kaasas asju, mida Sul minnes kaasas ei olnud.",
              "Erandiks on õppematerjalid, mis Sulle koolist antakse."
              ]
          },
          {
            Question: "Miks ja millal mind läbi otsitakse?",
            Answer:[
              "Läbiotsimisi tehakse kõikide turvalisuse tagamiseks ning selle eesmärk on ohtlike esemete leidmine.",
              "Kui osakonnast lahkud või sinna sisened, on ametnikel õigus Sind läbi otsida.",
              "Sellel ajal pead seisma näoga seina poole ja panema käed seinale või muule pinnale vastavalt ametniku korraldusele.",
              "Vajadusel võib vanglaametnik korraldada lahti riietumisega läbiotsimise, mille ajal tuleb Sul võtta riided seljast.",
              " Seda tehakse ainult pool keha korraga, mitte kunagi täielikult. Seda tehakse alati privaatselt ja eraldi ruumis."
                 ]
          }
        ],
    },
    EN:{
      title:"Movement in prison",
      sub: "The prison is divided into units and departments where you live and move. The departments are open, but you may be placed in a closed cell (for example, for security reasons).",
      openTitle:"Open department",
      openContent:[
        "During the day, the cell doors are open, and you are allowed to move freely within the department",
        "You can spend time in the day room, which has a television, books, games, and a radio."
      ],
      closedTitle:"Closed cell",
      closedContent:[
        "Here you are in your cell for 23 hours a day.",
        "The cell door is closed most of the time, and movement occurs only under the escort of prison staff and according to a schedule.",
      ],
      movementTitle:" Movement on prison territory",
      movementContent:[
        "In the prison territory, you will always move with a prison officer and with their permission - this is according to the escort plan.",
        " You must move along the designated route and according to the official's instructions.",
        "If you break the rules, the prison officer may terminate the sending and not allow you to participate in the activity. In the worst case, this will result in a penalty.",
        " When you move with other detainees, you must walk in pairs in a column. (Tallinna vanglas)."
      ],
      ruleTitle:" During movement, the following is not allowed:",
      rules:[
        "To take things from the ground or elsewhere and not to throw things away.",
        "To push someone away or to be physically in contact in some other way",
        "To deal with trivial matters",
        "To peek through the door peepholes or to stray from the path",
        "In rooms where you are not allowed to go",
        "You must not cross the red line in front of the cell door or touch the locks of the doors",
        "Do not press any buttons or switches without a valid reason"
      ],
      walksTitle:"Walks",
      walks:"You can go for a walk in the fresh air once a day for at least one hour in the designated area. Walks are scheduled according to a timetable.",
      permittedTitle:"Permitted items during a walk",
      permittedNotes:[
        "Wristwatch",
        "Wearable religious item or prayer beads",
        "Wedding ring",
        "Handkerchief",
        "Up to 0.5 liters of water in a plastic bottle",
        "one blanket and pillow for outdoor shaking once a month"
      ],
      permittedContent:" Nothing may be thrown out, left behind, or picked up from the walking area. You are also not allowed to communicate with other detainees who are outside your walking area. In case of rule violations, the official may terminate the walk",
      faqsTitle:"Frequently asked Questions",
      faqs:[
          {
            Question:"How should I dress during movement?",
            Answer:[
              "You can wear your own clothes in the cell. Outside the cell, you must wear prison clothing.",
              "Outside the cell, you must also wear a name tag around your neck, which is attached with a strap provided by the prison",
              "The name tag may be under your clothes when you are preparing food or working with machines.",
              "You must not move half-naked or with your upper body bare.",
              "You can only go for a walk in weather-appropriate clothing.",
        
               ]
          },
          {
            Question:"What can you take with you when moving around?",
            Answer:[
              "When you move from the department to work, school, or a doctor's appointment, you can only take those items that are necessary and have been previously coordinated with the official.",
              "Upon returning, you must not have with you items that you did not have when you left.",
              "Exceptions are educational materials provided to you by the school."
              ]
          },
          {
            Question: "Why and when will I be searched?",
            Answer:[
              "Searches are conducted for the purpose of ensuring security, and their aim is to find dangerous items.",
              "When you leave or enter the department, officials have the right to search you.",
              "During this time, you must stand facing the wall and place your hands on the wall or another surface as directed by the official.",
              "If necessary, a prison officer may arrange for a strip search, during which you will need to remove your clothes.",
              "This is done only half of the body at a time, never completely. It is always conducted privately and in a separate room"
            ]
          }
        ],

    }
  }

    const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem"
        }}
      >
        
        <div
          style={{
            background: "#ECFDF5",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "2px solid #10B981"
          }}
        >
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "1.5rem",
              fontWeight: "800",
              color: "#065F46",
              marginBottom: "1rem"
            }}
          >
            <Unlock size={24} />
            {copy.openTitle}
          </h3>

          <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6 }}>
            {copy.openContent.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: "#FEF2F2",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "2px solid #EF4444"
          }}
        >
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "1.5rem",
              fontWeight: "800",
              color: "#7F1D1D",
              marginBottom: "1rem"
            }}
          >
            <Lock size={24} />
            {copy.closedTitle}
          </h3>

          <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6 }}>
            {copy.closedContent.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
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
      }}>{copy.movementTitle}</h3>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.movementContent.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
      </ul>
      <Accordion title={copy.ruleTitle}>
      <ul style={{listStyleType:"numbered", marginLeft:"2rem"}}>{copy.rules.map((item, index) => (
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
      }}>{copy.walksTitle}</h3>
      <p>{copy.walks}</p>
      <Accordion title={copy.permittedTitle}>
        <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.permittedNotes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
      </ul>
      
      </Accordion>
      <Tip>{copy.permittedContent}</Tip>
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

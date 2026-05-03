import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";
import Accordion from '../../components/ui/Accordion';
import { useState } from "react";

export default function DailySchedule({ language = 'ET' }) {
  const content={
    ET:{
      title:" PÄEVAKAVA JA LOENDUS",
      sub:"Vanglas kehtib päevakava — kindlad ajad, millal kinnipeetavad ärkavad, söövad, pesevad, ringi liiguvad ja puhkavad",
      scheduleBegin:[
        "Päevakava on korra, turvalisuse ja Sinu päeva sisustamise huvides.",
        "Täpse päevakava leiad vangla kodukorrast.",
        "Enamasti algab päev vanglas kell 06:00 ning lõpeb kell 22:00.",
        "Nende kahe kellaaja vahel toimuvad kõik põhitegevused: õppimine, töötamine, osalemine programmides, huvitegevus jm."
      
      ],
      mainActivitiesTitle:"Põhitegevused päeva jooksul:",
      mainActivities:[
        "Päev täidetakse õppimise, töö, sotsiaalprogrammide ja vaba aja tegevustega.",
        "Hommikul ja õhtul toimuvad loendused, mõlemad kambris.",
        "Süüa tuuakse kolm korda päevas ja süüakse samuti kambris.",
        "Jalutuskäik õues toimub üks kord päevas, graafiku alusel.",
        "Helistamine on võimalik tegevustevälisel ajal.",
        "Duši all pesemine väljaspool kambrit toimub graafiku alusel.",
        "Kooli või tööle saadetakse valvuri või kontaktisiku korralduse alusel."
        ],
      typicalTitle:"Milline näeb välja tavaline päev vanglas?",
      typicalday:[
        {
          time:"06:00 AM",
          title:"Äratus",
          content:"Äratus on tavaliselt kell 06:00. Sel ajal lülitub sisse elekter. Saad korrastada kambri ja tegeleda hügieenitoimingutega.",
        },
        {
          time:"07:15 AM",
          title:"Hommikusöök and Hommikune loendus",
          content:"Hommikusöök toimub vahemikus kell 06:20 kuni 07:15. Seejärel toimub hommikune loendus ja ravimite jagamine.",
        },
        {
          time:"08:00 AM -17:00 PM",
          title:"Tegevused",
          content:"Päeva jooksul oled hõivatud põhitegevusega: õppimine, töötamine, osalemine programmides, huvitegevus jm",
        },
        {
          time:"11:30 AM-12:30 PM",
          title:"Lõunasöök",
          content:"Lõunasöök toimub vahemikus kell 11:30 kuni 12:30. Üldjuhul tuuakse toit Sulle kambrisse. Vangla võib korraldada söömise ka töökohal.",
        },
        {
          time:"17:30 PM-18:30 PM",
          title:"Õhtusöök ja Õhtune loendus",
          content:"Õhtusöök toimub vahemikus kell 17.30- 18.30. Seejärel toimub õhtune loendus ja ravimite jagamine.",
        },
        {
          time:"22:00 PM",
          title:"Öörahu",
          content:"Kell 22.00 lülitatakse välja elekter. Erandina võib üksuse juht lubada elektrit kasutada kuni keskööni. Sõltuvalt aastaajast jääb kambrisse põlema öö valgustus.",
        },
      ],
      scheduleTip:"Avavangla päevakavas võib olla erisusi nendele, kes töötavad ja õpivad väljaspool vanglat. ",
      importantNoteTitle:"Pange tähele, et:",
      importantNotes:[
        "Sa pead olema oma kambris siis, kui päevakava seda ette näeb – näiteks söögikordadel ja kambriuste sulgemise ajal.",
        "Päevakava sündmustest teavitatakse Sind helisüsteemi, kambriterminali või vanglaametniku kaudu",
        "Vanglal on õigus teha päevakavas ajutisi või erakorralisi muudatusi, sh Sinu und öösel häirida, kui see on vajalik turvalisuse või korra huvides",
        "Võimalusel teavitatakse Sind neist muudatustest ette."
       ],
      countTitle:"Loendus",
      countNotes:[
        "Loendus on igapäevane kontroll, mille ajal vangla ametnik veendub, et oled õiges kohas ja kõik on korras.",
        "Ametnik hindab Sinu tervislikku seisundit ning kambri olukorda. Vajadusel esitab ta lisaküsimusi.",
      ],
      countWorkTitle:"Kuidas loendus toimib?",
      countWork:[
        "Sind teavitatakse 10 minutit enne loendust, kas suuliselt või helisüsteemi kaudu.",
        "Tavaliselt toimub loendus Sinu kambris. Kui Sa oled parasjagu viidud mujale, siis toimub loendus seal (näiteks töökohal).",
        " Kui oled pikaajalisel kokkusaamisel, siis Sind loenduse ajal ei kontrollita. Sel juhul kontrollitakse Sinu kohalolekut toitlustamise ajal."
         ],
      censusTitle:"Mida pean tegema loenduse ajal?",
      census:[
        "Olema korrektselt riides ja nimesildiga.",
        "Seisma oma korrastatud voodi ees või ametniku juhisel mujal.",
        "Hoidma käed nähtaval, mitte toetuma ega mitte istuma.",
        "Lülitama välja kõik elektriseadmed või panema hääletule režiimile.",
        "Kui ametnik palub, ütlema selgelt oma ees- ja perekonnanime.",
        "Loenduse ajal ära söö, loe, räägi ega sega muul moel loendust."
        ],
      
    },
    EN:{
      title:"SCHEDULE AND ROLL CALL",
      sub:"There is a schedule in the prison — specific times when inmates wake up, eat, wash, move around, and rest. The schedule is in the interest of order, security, and structuring your day.",
      scheduleBegin:[
        "Most days in prison start at 06:00 and end at 22:00.",
        "You can find the exact schedule in the prison regulations.",
        "All main activities take place between these two times: studying, working, participating in programs, recreational activities, etc.",
        
      ],
      mainActivitiesTitle:"Main activities during the day:",
      mainActivities:[
        "The day is filled with learning, work, social programs, and leisure activities.",
        "Counts are conducted in the morning and evening, both in the chamber.",
        "Food is brought three times a day and is also eaten in the chamber",
        "Outdoor walks take place once a day, according to a schedule",
        "Calling is possible during off-duty hours.",
        "Washing in the shower outside the chamber occurs according to a schedule.",
        " Transportation to school or work is arranged based on the order of the guard or contact person."
      ],
      typicalTitle:"What does a typical day in prison look like?",
      typicalday:[
        {
          time:"06:00 AM",
          title:"Alarm",
          content:"The alarm usually goes off at 06:00. At this time, the electricity is turned on. You can tidy up your cell and attend to hygiene activities.",
        },
        {
          time:"07:15 AM",
          title:"Breakfast and Morning count",
          content:"Breakfast is served between 06:20 and 07:15. After that, there is a morning count and distribution of medications.",
        },
        {
          time:"08:00 AM -17:00 PM",
          title:"Activities",
          content:"During the day, you are occupied with main activities: studying, working, participating in programs, hobbies, etc.",
        },
        {
          time:"11:30 AM-12:30 PM",
          title:"Lunch",
          content:"Generally, food is brought to your cell. The prison may also arrange meals at the workplace.",
        },
        {
          time:"17:30 PM-18:30 PM",
          title:"Dinner and Evening Count",
          content:"Dinner is served between 17:30 and 18:30. After that, there is an evening count and distribution of medications.",
        },
        {
          time:"22:00 PM",
          title:"Night rest",
          content:"At 22:00, the electricity is turned off. As an exception, the unit manager may allow the use of electricity until midnight. Depending on the season, the night lighting remains on in the cell.",
        },
      ],
      scheduleTip:"The schedule in an open prison may have variations for those who work and study outside the prison",
      importantNoteTitle:"Note that:",
      importantNotes:[
        "You must be in your cell when the schedule requires it for example, during meal times and when the cell doors are closed.",
        "You will be informed of schedule events through the sound system, the cell terminal, or a prison officer.",
        "The prison has the right to make temporary or emergency changes to the schedule, including disturbing your sleep at night if necessary for security or order.",
        "You will be informed of these changes in advance if possible."
      ],
      countTitle:"Count",
      countNotes:[
        "The count is a daily check during which a prison officer ensures that you are in the right place and that everything is in order",
        " The officer assesses your health condition and the state of your cell. If necessary, they will ask additional questions.",
      ],
      countWorkTitle:"How does the count work?",
      countWork:[
        "You will be notified 10 minutes before the count, either verbally or through the sound system.",
        "Usually, the count takes place in your cell. If you have been taken elsewhere, the count will take place there (for example, at your workplace)",
        " If you are in a long-term meeting, you will not be checked during the roll call. In this case, your presence will be checked during the catering time.",
      ],
      censusTitle:"What should I do during the census?",
      census:[
        "Be properly dressed and wear a name tag.",
        "Stand in front of your made bed or in another location as directed by the official.",
        "Keep your hands visible, do not lean or sit",
        "Turn off all electrical devices or set them to silent mode.",
        "If asked by the official, clearly state your first and last name.",
        "Do not eat, read, talk, or otherwise disturb the census during the count."
      ],


    }
  }
  const copy = content[language] || content.ET;

function TimelineItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: "relative",
      marginBottom: "2rem"
    }}>
      
      <div style={{
        position: "absolute",
        left: "-2px",
        top: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: open ? "#14B8A6" : "#D1D5DB",
        transition: "0.3s"
      }} />

      <div
        onClick={() => setOpen(!open)}
        style={{
          marginLeft: "1.5rem",
          padding: "1rem 1.2rem",
          borderRadius: "16px",
          background: "#F9FAFB",
          border: "2px solid #E5E7EB",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: open ? "scale(1.02)" : "scale(1)"
        }}
      >
        
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              fontSize: "1.9rem",
              color: "#6B7280",
              fontWeight: 600
            }}>
              {item.time}
            </div>

            <div style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "#06772f"
            }}>
              {item.title}
            </div>
          </div>

          <div style={{
            fontSize: "1.9rem",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "0.3s"
          }}>
            ▶
          </div>
        </div>

        {open && (
          <div style={{
            marginTop: "0.8rem",
            fontSize: "1.9rem",
            color: "#374151",
            lineHeight: 1.5
          }}>
            {item.content}
          </div>
        )}
      </div>
    </div>
      );
    }
  return (
    <Section title={copy.title} sub={copy.sub}>
       <ul style={{listStyleType:"none",marginLeft:"2rem"}}>{copy.scheduleBegin.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                      </li>
                  ))}

      </ul>
      <Accordion title={copy.mainActivitiesTitle}>
        <ul style={{listStyleType:"square",marginLeft:"2rem"}}>{copy.mainActivities.map((item, index) => (
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
      }}>{copy.typicalTitle}</h3>
      <div style={{
        position: "relative",
        marginTop: "2rem",
        paddingLeft: "2.5rem"
      }}>
        {/* vertical line */}
        <div style={{
          position: "absolute",
          left: "14px",
          top: 0,
          bottom: 0,
          width: "4px",
          background: "#E5E7EB"
        }} />

        {copy.typicalday.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
      <Tip>{copy.scheduleTip}</Tip>
      <Accordion title={copy.importantNoteTitle}>
        <ul style={{listStyleType:"square",marginLeft:"2rem"}}>{copy.importantNotes.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
          ))}

        </ul>
        
      </Accordion>
       <h3 style={{
         fontSize: "3rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        marginTop:"2rem"
      }}>{copy.countTitle}</h3>
      <ul style={{listStyleType:"none",marginLeft:"2rem"}}>{copy.countNotes.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
          ))}

        </ul>
        <Accordion title={copy.countWorkTitle}>
          <ul style={{listStyleType:"none",marginLeft:"2rem"}}>{copy.countWork.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
          ))}

        </ul>
        </Accordion>
        <Accordion title={copy.censusTitle}>
          <ul style={{listStyleType:"none",marginLeft:"2rem"}}>{copy.census.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
          ))}

        </ul>
        </Accordion>
    </Section>
  );
}

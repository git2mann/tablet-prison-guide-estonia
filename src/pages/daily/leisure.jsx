import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import Accordion from "../../components/ui/Accordion"
export default function DailyLeisure({ language = 'ET' }) {
  const content={
    ET:{
      title:"VABA AJA VEETMINE VANGLAS",
      sub:"Vanglas on Sul võimalik vaba aega veeta mitmel moel: lugedes, sportides või osaledes huvitegevuses. Need tegevused aitavad Sul hoida igapäevast rütmi ja valmistuda eluks pärast vabanemist.",
      libraryTitle:"Raamatukogu kasutamine",
      libraryLine:"Kui oled avatud osakonnas, leiad raamatud osakonna riiulitelt.",
      libraryPoints:[
        "Raamatuid vahetatakse aeg-ajalt. Tagasta need selleks ettenähtud riiulisse.",
        "Kui Sa ei leia sobivat, võid esitada taotluse, et saada endale muu meelepärane raamat.",
        "Kui sind viiakse teise osakonda või vanglast välja, pead kõik raamatud tagasi andma.",
        "Teiste kinnipeetavate raamatuid ei tohi kasutada ega edasi anda.",
        "Kui Sa raamatu ära kaotad või rikutud kujul tagastad, pead selle kinni maksma."
      ],
      libraryTip:"Kui oled varem raamatuid rikkunud või õigel ajal tagasi andmata jätnud, võib vangla keelduda Sulle uusi raamatuid laenutamast.",
      subscriptionTitle: "Ajakirjade ja ajalehtede tellimine",
      subscriptions:[
        "Vanglas on Sul võimalik lugeda peamisi üleriigilisi päevalehti ning ajakirju.",
        "Kui soovid lugeda muid ajalehti või ajakirju, saad neid tellida oma raha eest. Tellimuse pead tegema ise ja oma nimele, teavita sellest oma kontaktisikut.",
        "Kui ajalehe või ajakirja eest maksab keegi väljaspool vanglat (näiteks pereliige), siis tuleb tellimus teha Sinu nimele ja vangla aadressile.",
        "Sa ei tohi tellida ajalehti või ajakirju, mis vanglasse ei sobi (näiteks vägivaldsed või muud keelatud sisuga). Kui Sa ei ole kindel, mida tohib, küsi oma kontaktisikult.",
        "Kui ajakiri või ajaleht on kohale jõudnud ja selle sisu on lubatud, toob vangla töötaja Selle sulle kätte."
      ],
      participationTitle:"Huvitegevuses osalemine",
      participationNotes:[
        "Huvitegevuseks on vanglates erinevaid võimalusi. Teatud tegevusi võid teha ka oma kambris.",
        " Huvitegevusteks võib olla näiteks kunsti või muusikaga tegelemine. Infot huviringide kohta küsi enda kontaktisikult või vangla huvijuhilt",
        "Kui tahad osaleda või ise huvitegevust korraldada, räägi oma kontaktisikuga.",
        "Enne huviringis osalemist võib olla vajalik allkirjastada kokkuleppe selles osalemiseks, kus on kirjas selles osalemise reeglid.",
        "Huviringis või huvitegevuses tehtud asju hoitakse vanglas. Kui soovid midagi neist saata väljaspoole vanglat, siis pöördu kontaktisiku poole, kes selgitab Sulle reegleid. Selleks pead maksma ka materjalide ja saatmise eest.",
        "Osakonnas võid mängida ka lauamänge, aga mängida ei tohi raha ega asjade peale.",
        "Hasartmängud on rangelt keelatud.", 
      ],
      participationTip:"Mõnikord võib vangla lubada ka kinnipeetaval ise huviringi või huvitegevust juhtida. Kui Sul on mõni oskus (nt muusika, käsitöö või kunst), räägi sellest oma kontaktisikule. Vangla otsustab, kas Sinu algatust toetatakse.",
      sportsTitle:"Sportimisvõimalused",
      sportsContent:[
        "Sa saad käia spordisaalis, jalgpalliväljakul või muudel spordiplatsidel.",
        "Tavaliselt toimub sportimine grupis koos teiste kinnipeetavatega.",
        "Spordigraafik näitab, millal ja kui kaua saad sportida. Seda näed osakonna teadetetahvlilt."
      ],
      sportsTip:"Kui sul on sportimise osas erisoove või tervislikud piirangud, räägi sellest oma kontaktisikule või vanglaametnikule. Võimalusel leitakse sulle sobiv lahendus.",
      doSportsTitle:"Millist sporti saan teha?",
      doSports:[
        "Spordisaalis: jõutreening, pallimängud (nt korvpall, võrkpall), kehalised harjutused.",
        "Välisväljakutel: näiteks jalgpall, jooks, muud liikumismängud.",
        "Osakonna päevaruumis või jalutusboksis: võid teha iseseisvaid harjutusi (nt venitused, jooga, keharaskusega treeningud). Jooga jaoks saab küsida ka vajalikke vahendeid.",
        "Kui soovid, võid iseseisvalt tegeleda ka liikumise ja kehalise aktiivsusega – näiteks teha harjutusi või venitusi."
      ],
      exerciseTitle:"Kui kaua saan sportida?",
      exerciseContent:[
        "Tavaliselt kestab üks treening umbes 1 tund.",
             {
          title:"Sportimise kestus sõltub:",
          Content:[
            "Vangla päevakavast",
            "Spordigraafikust",
            "sellest, millises osakonnas sa oled"
          ]
        },
        " Avatud osakonnas võib sportimiseks olla rohkem aega ja võimalusi.",
        "Suletud osakonnas ja kartseris on sportimisvõimalused piiratud või ajutiselt keelatud.",
        
      ],
      mindTitle:"Mida meeles pidada?",
      mindNotes:[
        " Kasuta spordivahendeid korralikult, eesmärgipäraselt ja heaperemehelikult.",
        "Kui midagi läheb katki või juhtub õnnetus, ütle kohe ametnikule.",
        "Kui Sa reegleid rikud, võidakse sportimine lõpetada ja Sind viiakse tagasi osakonda.",
        "Sporti teed omal vastutusel – kui Sa ei järgi ohutusreegleid ja saad viga, vastutad ise.",
        "Spordiväljakule võid kaasa võtta ühe pudeli vett."
      ]
    
    },
    EN:{
      title:"Spending free time in prison",
      sub:"In prison, you can spend your free time in several ways: reading, exercising, or participating in recreational activities. These activities help you maintain a daily rhythm and prepare for life after your release.",
      libraryTitle:"Use of the library",
      libraryLine:"If you are in the open department, you will find books on the department's shelves.",
      libraryPoints:[
        "Books are exchanged from time to time. Please return them to the designated shelf.",
        "If you cannot find a suitable one, you can submit a request to receive another book of your choice.",
        "If you are transferred to another department or released from prison, you must return all books.",
        "You are not allowed to use or pass on books belonging to other inmates.",
        "If you lose a book or return it in a damaged condition, you will have to pay for it"
      ],
      libraryTip:"If you have previously damaged books or failed to return them on time, the prison may refuse to lend you new books.",
      subscriptionTitle: "Subscription to magazines and newspapers",
      subscriptions:[
        " In prison, you can read major national daily newspapers and magazines.",
        "If you wish to read other newspapers or magazines, you can subscribe to them at your own expense. You must make the subscription yourself and in your name, and inform your contact person about it.",
        "If someone outside the prison (for example, a family member) pays for a newspaper or magazine, the subscription must be made in your name and to the prison address",
        "You are not allowed to order newspapers or magazines that are not suitable for prison (for example, those with violent or other prohibited content). If you are unsure about what is allowed, ask your contact person.",
        "If the magazine or newspaper has arrived and its content is permitted, a prison staff member will deliver it to you."
      ],
      participationTitle:"Participation in Activities",
      participationNotes:[
        "There are various options for activities in prisons. Certain activities can also be done in your cell.",
        "Activities may include engaging in art or music. For information about hobby groups, ask your contact person or the prison's activity coordinator.",
        "If you want to participate or organize an activity yourself, talk to your contact person.",
        "Before participating in a hobby group, it may be necessary to sign an agreement outlining the rules for participation.",
        "Items made in a hobby group or during activities are kept in the prison. If you wish to send something outside the prison, contact your contact person, who will explain the rules to you. You will also need to pay for materials and shipping",
        "In the department, you can also play board games, but you are not allowed to play for money or items",
        " Gambling is strictly prohibited.", 
      ],
      participationTip:"Sometimes the prison may also allow an inmate to lead a hobby group or activity. If you have a skill (e.g., music, crafts, or art), tell your contact person about it. The prison will decide whether to support your initiative.",
      sportsTitle:"Sports Opportunities",
      sportsContent:[
        "You can go to the gym, football field, or other sports facilities",
        " Usually, sports activities take place in groups with other inmates.",
        "The sports schedule shows when and for how long you can participate in sports. You can find this on the department's bulletin board."
      ],
      sportsTip:"If you have special requests regarding sports or health restrictions, talk to your contact person or prison officer about it. A suitable solution will be found for you if possible.",
      doSportsTitle:"What sports can I do?",
      doSports:[
        "In the gym: strength training, ball games (e.g., basketball, volleyball), physical exercises.",
        "In outdoor fields: for example, football, running, other movement games.",
        "In the department's day room or walking box: you can do independent exercises (e.g., stretching, yoga, bodyweight training).",
        "If you wish, you can also engage in movement and physical activity independently – for example, doing exercises or stretches."
      ],
      exerciseTitle:"How long can I exercise?",
      exerciseContent:[
        "Typically, one training session lasts about 1 hour.",
             {
          title:"The duration of exercise depends on:",
          Content:[
            "From the prison schedule",
            "From the sports schedule",
            "From which department are you in"
          ]
        },
        "In the open department, there may be more time and opportunities for sports.",
        "In the closed department and in solitary confinement, sports opportunities are limited or temporarily prohibited.",
        
      ],
      mindTitle:"What should I keep in mind?",
      mindNotes:[
        "Use sports equipment properly, purposefully, and responsibly.",
        "If something breaks or an accident happens, tell the officer immediately.",
        "If you break the rules, your sports activities may be terminated and you will be taken back to your department.",
        "You participate in sports at your own risk – if you do not follow safety rules and get injured, you are responsible.",
        "You may bring one bottle of water to the sports field."
      ]
    }

  };
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
      }}>{copy.libraryTitle}</h3>
      <p>{copy.libraryLine}</p>
      <ul style={{listStyleType:"none"}}>{copy.libraryPoints.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
      </ul>
      <Tip>{copy.libraryTip}</Tip>
      <Accordion title={copy.subscriptionTitle}>
        <ul style={{listStyleType:"disc",marginLeft:"2.9rem"}}>{copy.subscriptions.map((item, index) => (
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
      }}>{copy.participationTitle}</h3>
      <ul style={{listStyleType:"numbered"}}>{copy.participationNotes.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
      </ul>
      <Tip>
        {copy.participationTip}
      </Tip>
      <h3 style={{
         fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop:"2rem"
      }}>{copy.sportsTitle}</h3>
      <ul style={{listStyleType:"none"}}>{copy.sportsContent.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
      </ul>
      <Tip>
        {copy.sportsTip}
      </Tip>
      <Accordion title={copy.doSportsTitle}>
        <ul style={{listStyleType:"none"}}>{copy.doSports.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
        </ul>
      </Accordion>
      <Accordion title={copy.exerciseTitle}>
        <ul style={{ listStyleType: "numbered", paddingLeft: "2rem" }}>
          {copy.exerciseContent.map((item, index) => {
            
            if (typeof item === "string") {
              return (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {item}
                </li>
              );
            }

          
            if (typeof item === "object") {
              return (
                <li key={index} style={{ marginBottom: "1rem" }}>
                  <p>{item.title}</p>

                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
                    {item.Content.map((subItem, subIndex) => (
                      <li key={subIndex} style={{ marginBottom: "0.3rem" }}>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return null;
          })}
        </ul>
    </Accordion>
      <Accordion title={copy.mindTitle}>
        <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.mindNotes.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
      </ul>
      </Accordion>
    </Section>
  );
}

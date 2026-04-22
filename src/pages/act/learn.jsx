import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Accordion from "../../components/ui/Accordion";
import Tip from '../../components/ui/Tip';
export default function ActLearn({ language = 'ET' }) {
  const content = {
    ET:{
      title:"Õppimine ja haridus",
      reasonsTitle: "Miks võiks õppida?",
      reasons:[
        "Vanglas on õppimiseks aega, nii lähevad päevad kiiremini.",
        "Saad teadmisi ja oskusi, mis on abiks pärast vabanemist.",
        "Klassid on väikesed ja õpetajad arvestavad õppijate vajadustega.",
        "Pärast vabanemist saad kohe jätkata õppimist mõnes täiskasvanute gümnaasiumis või kutsekoolis",
        " Õppimine iseloomustab Sind positiivselt ka kohtuniku silmis, kui Sul tekib võimalus ennetähtegseks vabanemiseks."
      ],
      optionsTitle: "Mida saan õppida?",
      options:[
        {
          Title:"Põhikool",
          Content:[
            "Põhikool kestab kuni 9. klassini",
            "Võimalik õppida eesti ja vene keeles."
          ]
        },
        {
          Title:"Gümnaasium",
          Content:[
            " Gümnaasium on 10.-12. klass.",
            "Võimalik õppida vaid eesti keeles, Sinu keeleoskuse tase peab olema vähemalt B1."
          ]
        },
        {
          Title:"Kutseõpe",
          Content:[
            "Vanglas saab õppida mitmesuguseid erialasid peamiselt ehitusvaldkonnast ja teenindusest. Kursused koosnevad moodulitest.",
            "Õppida saab vaid eesti keeles, Sinu keeleoskuse tase peab olema vähemalt A2.",
            "Eri vanglates pakutakse erinevaid kursusi. Info leiad teadetetahvlilt ja sisetelerist."
          ]
        },
        {
          Title: "Eesti keele õppimine",
          Content:[
            "Eesti keele õppimise vajadust ja võimalust hinnatakse peale süüdimõistvat otsust või individuaalse täitmiskava koostamisel",
            "Ka vahistatutel on võimalik keelt õppida."
          ]

        }
      ],
      learningTitle:"Kuidas pääsen õppima?",
      learningSteps:[
        "Õppima saad siis, kui riskihindamise vestluse ja ITK koostamise käigus oled jõudnud koos kontaktisikuga arusaamale, et Sul on tõsine soov õppida ja vastavad oskused omandada.",
        "Kontaktisik ja hariduskorraldaja saavad Sulle selgitada õppimisvõimalusi, tingimusi ja erialasid, mida vanglas õppida saab. Nad annavad nõu, milliseid avaldusi on vaja täita.",
        "Liituda saad aastaringselt, ka õppeaasta keskel.",
        "Kui soovid õppida gümnaasiumis või kutseõppes, on tingimuseks majandustöödes osalemine.",
        " Kui Sa varem õppisid, saad jätkata samast kohast, kus Sinu koolitee pooleli jäi."
      ],
      specialCoursesTip:"Spetsiaalsetele kursustele registreerides on kohtade arv piiratud ja peaaegu alati on rohkem soovijaid kui vabu kohti ning osalejad valitakse intervjuu alusel.",
      placeLearningTitle:"Kuidas toimub õppimine?",
      placeLearning:[
        {
          Title:"Koolipäev",
          Content:[
            "Tavaline koolipäev põhikoolis ja gümnaasiumis toimub vastavalt tunniplaanile, üldjuhul ajavahemikus kell 9-17. .",
            "Erialakursused ja praktika toimuvad väljakuulutatud aegadel."
          ]
        },
        {
          Title:"Kooli liikumine",
          Content:[
            "Kinnipeetavad lähevad õpperuumidesse valvuri saatel.",
            " Õppeklassidest või praktikaruumidest ei tohi ilma loata lahkuda."

          ]
        },
        {
          Title:"Õppematerjalid",
          Content:[
            "Õpikud, vihikud ja töölehed saad koolist. Need on tasuta.",
            "Õppimisega seotud raamatuid ja materjale on lubatud Sulle vanglasse saata."
          ]
        },
        {
          Title:"Töövahendid",
          Content:"Kutseõppes ja praktikal saab kasutada vajalikke tööriistu ja töövahendeid."
        },
        {
          Title: "Kodutööd",
          Content:[
            "Ka vanglas antakse õppijatele kodutöid.",
            "Õppematerjalid saad võtta kambrisse kaasa ja seal ka õppida."

          ]

        }
      ],
      rulesTitle:" Reeglid koolis ja kursustel",
      rules:[
        {
          Title:"Käitumine",
          Content:[
            "Õppides on kohustuslik täita õpetaja antud ülesandeid.",
            "Tundi ei tohi segada. Kui Sind segamise pärast tunnist ära viiakse, loetakse see põhjuseta puudumiseks.",
            "Praktika ajal tootmishoones viibides tohid suhelda vaid vangla töötaja või tööandjaga."
          ]
        },
        {
          Title:"Puudumine",
          Content:[
            "Põhjuseta puudumine ei ole lubatud.",
            "Koolist puudumine on põhjendatud, kui Sa oled haige, Sul on samal ajal kokkusaamine, arsti külastus või mõni vanglast tulenev põhjus."
          ]
        },
        {
          Title:"Asjad ja töövahendid",
          Content:[
            " Kooli tohib kaasa võtta ainult need asjad, mida on õppimiseks vaja.",
            " Koolist ei tohi ilma loata mitte midagi kaasa võtta.",
            " Kui töövahend on kadunud või katki, pead seda kohe õpetajale ütlema.",
            "Veepudel on koolis lubatud, aga see tuleb kaasa võtta ja tagasi viia tühjana."
          ]
        }
      ],
      faqsTitle:"Olulised asjad, mida meeles pidada",
      faqs:[
        {
          Question:"Kas ma pean vanglas olles õppima?",
          Answer:[
            "Jah, kui Sa oled selle koos kontaktisikuga planeerinud enda ITK-sse tegevusena, mida soovid vangistuse jooksul teha ning see toetab Sinu edasisi võimalusi ",
            "Sul on õigus õppida ka üksikuid aineid.",
            "Eestis on põhiharidus kohustuslik kui Sa oled noorem kui 17-aastane ja Sul ei ole põhiharidust."
          ]
        },
        {
          Question:"Kas vahistatuna saan ka õppida?",
          Answer:[
            "Jah, ka vahistatuna võid põhiharidust või keskharidust omandada. Samuti võid õppida eesti keelt.",
            "Kutseõpe on ette nähtud vaid süüdimõistetutele.",
          ]
        },
        {
          Question: "Millised piirangud on õppimisele?",
          Line:"Koolis, kursustel ja praktikal ei saa käia, kui:",
          Answer:[
            "Sa oled isolatsioonis",
            "Sa ei tohi uurimise ajal kuriteokaaslasega kokku puutuda,",
            "vangla hinnagul on Sinu osalemine julgeolekurisk."
          ]
        },
        {
          Question:"Mis saab siis, kui mulle ITK-dei tehta?",
          Answer:[
            "Õppetöös saad osaleda ka juhul kui Sul puudub ITK ja kui oled alla aastase vangistusajaga.",
            "Liituda võid aastaringselt."
          ]
        },
        {
          Question:"Kas saan vanglas olles teha sisseastumiseksameid mõnda kooli väljaspool vanglat?",
          Answer:"Küsi kontaktisikult, kas ja kuidas see võimalik oleks.",
        
        },
        {
          Question:"Kuidas toimub õppimine avavanglas?",
          Answer:"Avavanglas saad õppimas käia väljaspool vanglat asuvas piirkondlikus õppeasutuses.",
        },
        {
          Question:"Kuidas saan peale vabanemist edasi õppida?",
          Answer:"Põhikooli või gümnaasiumiga saad jätkata pärast vabanemist ka muus koolis. Kutseõpet saad jätkata õppeasutuses, mis vastavat eriala õpetab."
        },
        {
          Question:"Kas ma saan kursuselt kutsetunnistuse?",
          Answer:[
            "Kursuse lõpus saad Sa tunnistuse. ",
            "Kuid Sul on võimalik saada ka kutsetunnistus, kui Sinu oskused on nõutud tasemel ja Sa täidad kutse saamiseks vajalikud tingimused või testid.",
          ]
        }
      ],
    
    },
    EN:{
      title: "Learning and Education",
      reasonsTitle: "Why should I learn?",
      reasons:[
        "There is time for learning in prison, so the days go by faster.",
        "You gain knowledge and skills that will help after your release.",
        "Classes are small, and teachers take into account the needs of the learners",
        "After your release, you can immediately continue your studies in some adult high schools or vocational schools.",
        " Learning positively characterizes you in the eyes of the judge when you have the opportunity for early release."
      ],
      optionsTitle: "What can I learn?",
      options:[
        {
          Title:"Basic School",
          Content:[
            "Basic School lasts until the 9th grade",
            "It is possible to study in Estonian and Russian languages."
          ]
        },
        {
          Title:"Gymnasium",
          Content:[
            " Gymnasium is from the 10th to the 12th grade.",
            "It is possible to study only in Estonian language, your language proficiency level must be at least B1."
          ]
        },
        {
          Title:"Vocational education",
          Content:[
            "In prison, various fields can be studied, mainly in construction and services. The courses consist of modules",
            "Study can only be conducted in Estonian, your language proficiency level must be at least A2.",
            "Different courses are offered in different prisons. You can find information on the bulletin board and the internal television"
          ]
        },
        {
          Title: "Learning Estonian",
          Content:[
            "The need and opportunity for learning Estonian is assessed after the conviction decision or when preparing an individual implementation plan.",
            "Even those who are detained have the opportunity to learn the language."
          ]

        }
      ],
      learningTitle:"How can I start learning?",
      learningSteps:[
        "You can start learning if, during the risk assessment interview and the preparation of the individual treatment plan, you have reached an understanding with the contact person that you have a serious desire to learn and acquire the necessary skills.",
        "The contact person and the education organizer can explain the learning opportunities, conditions, and subjects available for study in prison. They will advise you on which applications need to be filled out",
        "If you wish to study in high school or vocational education, participation in economic work is a requirement",
        " If you studied before, you can continue from where your school journey was left off.",
        " You can join year-round, even in the middle of the academic year."
      ],
      specialCoursesTip:"When registering for specialized courses, The number of places is limited, and there are almost always more applicants than available spots and  Participants are selected based on an interview ",
      placeLearningTitle:"How does learning take place",
      placeLearning:[
        {
          Title:"School Day",
          Content:[
            "A typical school day in primary and secondary school takes place according to the timetable, generally between 9 AM and 5 PM.",
            "Specialized courses and practical training occur at announced times."
          ]
        },
        {
          Title:"Movement within the school",
          Content:[
            "Inmates are escorted to classrooms by a guard.",
            " Students are not allowed to leave the classrooms or practical rooms without permission."

          ]
        },
        {
          Title:"Learning materials",
          Content:[
            "Textbooks, notebooks, and worksheets can be obtained from the school. They are free of charge.",
            "Books and materials related to learning are allowed to be sent to you in prison"
          ]
        },
        {
          Title:"Tools and Equipment",
          Content:"In vocational education and practice, necessary tools and equipment can be used."
        },
        {
          Title: "Homework",
          Content:[
            "Even in prison, learners are given homework.",
            " You can take learning materials to your cell and study there."

          ]

        }
      ],
      rulesTitle:" Rules in school and courses",
      rules:[
        {
          Title:"Behaviour",
          Content:[
            " While studying, it is mandatory to complete the tasks assigned by the teacher",
            "Disrupting the class is not allowed. If you are removed from the class for disruption, it will be considered an unexcused absence.",
            " During practice in the production facility, you may only communicate with prison staff or the employer."
          ]
        },
        {
          Title:"Absence",
          Content:[
            "UNEXCUSED ABSENCE IS NOT ALLOWED.",
            "Absence from school is justified if you are sick, have a meeting at the same time, a doctor's appointment, or some reason arising from prison"
          ]
        },
        {
          Title:"Things and Tools",
          Content:[
            "Only those items necessary for learning are allowed to be brought to school.",
            "Nothing may be taken from school without permission.",
            " If a tool is lost or broken, you must inform the teacher immediately.",
            "A water bottle is allowed at school, but it must be brought back and returned empty."
          ]
        }
      ],
      faqsTitle:"Important things to note",
      faqs:[
        {
          Question:"Do I have to study while in prison?",
          Answer:[
            "Yes, if you have planned it as an activity in your ITK with your contact person, and it supports your future opportunities to cope in the labor market during your imprisonment.",
            "You have the right to study individual subjects as well",
            "In Estonia, basic education is mandatory if you are younger than 17 years old and do not have basic education."
          ]
        },
        {
          Question:"Can I study while being detained?",
          Answer:[
            "Yes, even while detained, you can obtain basic education or secondary education. You can also learn Estonian.",
            "Vocational education is only intended for those who have been convicted.",
          ]
        },
        {
          Question: "What restrictions are there on studying?",
          Line:"You cannot attend school, courses, or internships if:",
          Answer:[
            "You are in isolation",
            "You are not allowed to come into contact with a co-offender during the investigation",
            "The prison considers your participation a security risk"
          ]
        },
        {
          Question:"What happens if I am not given ITK?",
          Answer:[
            "You can participate in the training even if you do not have an ITK and if you are under a sentence of imprisonment of less than one year.",
            "You can join year-round."
          ]
        },
        {
          Question:"Can I take entrance exams for a school outside the prison while I am incarcerated?",
          Answer:"Ask the contact person if and how this would be possible.",
        
        },
        {
          Question:"How does learning take place in an open prison?",
          Answer:"In an open prison, you can attend a regional educational institution located outside the prison.",
        },
        {
          Question:"How can I continue my studies after my release?",
          Answer:"You can continue your basic education or high school at another school after your release. You can continue vocational education at an institution that offers the relevant field of study."
        },
        {
          Question:"Can I receive a vocational certificate from the course?",
          Answer:[
            "At the end of the course, you will receive a certificate.",
            "However, you can also obtain a vocational certificate if your skills are at the required level and you meet the necessary conditions or tests for obtaining the qualification",
          ]
        }
      ],
    
    }

    };

    const copy=content[language] || content['ET'];

  return (
    <Section title={copy.title} sub={copy.sub}>
      <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
      }}>{copy.reasonsTitle}</h3>
      <ul style={{paddingLeft: 50, fontSize: "1.9rem", listStyleType: "disc" }}>
        {copy.reasons.map((item)=>(
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
      }}>{copy.optionsTitle}</h3>
      
      <div style={{ marginTop: "1.5rem" }}>
  {copy.options.map((option, index) => (
    <div
      key={index}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "1.5rem 2rem",
        marginBottom: "1.5rem",
        border: "2px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      
  
      <h4 style={{
        fontSize: "1.7rem",
        fontWeight: 900,
        color: "#003B71",
        marginBottom: "0.8rem",
      }}>
        {option.Title}
      </h4>

    
      <div style={{
        height: "3px",
        width: "50px",
        background: "#FFD000",
        borderRadius: "10px",
        marginBottom: "1rem"
      }} />

      
      <ul style={{
        paddingLeft: "1.8rem",
        fontSize: "1.5rem",
        lineHeight: 1.7,
        listStyleType: "disc",
      }}>
        {option.Content.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.4rem" }}>
            {item}
          </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
        <Accordion title={copy.learningTitle}>
      <ul style={{
                paddingLeft: "1.8rem",
                fontSize: "1.5rem",
                lineHeight: 1.7,
                listStyleType: "disc",
              }}>
        {copy.learningSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </Accordion>
    <Tip>{copy.specialCoursesTip}</Tip>
     <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
      }}>{copy.placeLearningTitle}</h3>
      <Table
        headers={["Aspect", "Details"]}
        rows={copy.placeLearning.map((item) => [        item.Title,     Array.isArray(item.Content) ? (                      <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>                          {item.Content.map((point, i) => (                            <li key={i} style={{ marginBottom: "0.4rem" }}>                              {point}                            </li>                          ))}                        </ul>                      ) : (                        item.Content                      )])}
      />
      <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,      color: "#003B71",       letterSpacing: "-0.025em",    lineHeight: 1.2,  fontStyle: "italic",    }}>{copy.rulesTitle}</h3>         
                 
         <div style={{ marginTop: "1.5rem" }}>
  {copy.rules.map((rule, index) => (
    <div
      key={index}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "1.5rem 2rem",
        marginBottom: "1.5rem",
        border: "2px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      
  
      <h4 style={{
        fontSize: "1.7rem",
        fontWeight: 900,
        color: "#003B71",
        marginBottom: "0.8rem",
      }}>
        {rule.Title}
      </h4>

    
      <div style={{
        height: "3px",
        width: "50px",
        background: "#FFD000",
        borderRadius: "10px",
        marginBottom: "1rem"
      }} />

      
      <ul style={{
        paddingLeft: "1.8rem",
        fontSize: "1.5rem",
        lineHeight: 1.7,
        listStyleType: "disc",
      }}>
        {rule.Content.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.4rem" }}>
            {item}
          </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
    <h3 style={{
  fontSize: "2rem",
  fontWeight: 900,
  color: "#003B71",
  letterSpacing: "-0.025em",
  lineHeight: 1.2,
  fontStyle: "italic",
}}>
  {copy.faqsTitle}
</h3>

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

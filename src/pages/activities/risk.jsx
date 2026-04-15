import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";

function CharacterizationSteps({ copy }) {
  const green = "#16a34a";

  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ position: "relative" }}>
        
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "20px",
            width: 2,
            background: green,
            opacity: 0.7,
          }}
        />

        {copy.characterizationSteps.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: green,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                zIndex: 1,
              }}
            >
              {i + 1}
            </div>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: green,
                  marginBottom: "0.5rem",
                }}
              >
                {step.Title}
              </h3>

              <ul
                style={{
                  paddingLeft: "1.5rem",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  listStyleType: "disc",
                }}
              >
                {step.Content.map((item) => (
                  <li style={{ marginBottom: "0.5rem", fontSize: "1.8rem" }} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ActRisk({ language = 'ET' }) {
  const content = {
    ET: {
      title:"Riskihindamine",
      sub:"Riskihindamisega püütakse aru saada, kui tõenäoliselt võid toime panna uue kuriteo. Kui Sa oled põhjustest teadlik ja saad oskused nende lahendamiseks, siis väheneb ka tõenäosus uute kuritegude toime panemiseks ehk Sinu riskitase väheneb.",
      assessmentTitle:"Kuidas minu riske hinnatakse?",
      assessmentContent:[
        "Riskihindamise intervjuu ajal püütakse koos Sinuga arutledes mõista Sinu senist elu terviklikumalt ja välja selgitada põhjused, mis kuritegudeni viisid",
        "Need põhjused võivad olla näiteks rahalised probleemid, alkoholi- võinarkosõltuvus või hoopis konfliktid ja oskamatus neid muul moel lahendada.",
        "Lisaks kogutakse infot erinevatest allikatest: kohtuotsus, karistussregister, töötamise register jne. Intervjueeritakse ka Sinuga kokku puutunud spetsialiste. ",
        "Riskihindamine koostatakse neile süüdimõistetutele, kelle karistus on pikem kui üks aasta.",
        " Sinu riske hinnatakse vanglasse saabumisel, samuti hinnatakse neid kohtus ennetähtaegse vabanemise üle otsustamise"
      ],
      assessmentTips:[
        "On oluline mõista, et kuna riskide hindamine põhineb suures osas varasemal elul, siis seda Sa palju muuta ei saa. Ei saa olematuks teha Sinu tegude raskust või ohtlikkust.",
        "Küll aga on tulevikus kohtus ennetähtaegse vabanemise üle otsustamisel riskihinnangu kõrval olulisel kohal ka iseloomustus, kus kirjeldatakse Sinu tegevusi ning käitumist vanglas veedetud aja jooksul.",
        "Sa saad muuta enda harjumusi, käitumist ja mõtteviisi ning vangla saab omalt poolt pakkuda Sulle tuge uute oskuste õppimisel."
      ],
      characterizationTitle:"Mis mõjutab minu riskiskoori ja iseloomustust?",
      characterizationSteps:[
      {
        Title:"Varasema põhjal võetakse muuhulgas arvesse:",
        Content:[
          "Kuriteo raskus",
          "Kas Sa oled olnud tagaotsitav või hoidnud kõrvale karistuse täitmisest",
          "Varasemat kuritegelikku käitumist",
          "kui Sul on olnud probleeme sõltuvusainetega (alkohol, narkootikumid)"],
      },
      { 
        Title:"Karistuse kandmise ajal hinnatakse:",
          Content:[
            "õppimist või töötamist vanglas",
            "Osalemist sotsiaalprogrammides ja nõustamistel",
            "Käitumist vanglas, sh suhtlemist ametnike ja kaaskinnipeetavatega",
            "Vangla reeglitest kinnipidamist",
            "Hoiakuid ja mõtlemist"]},
         
       { 
          Title:"Ennetähtaegse vabanemise ja avavanglasse paigutamise taotlemisel hinnatakse eelnevale lisaks:",
          Content:[
            "Edukat ITK täitmist",
            "Sinu ohtlikkust teistele väljaspool vanglat",
            "Vanglas läbitud programme ja tegevusi",
            "Sinu kehtivaid distsiplinaarkaristusi"
          ]}
      ]
    },
    EN: {
      title: "Risk Assessment",
      sub:"Risk assessment aims to understand how likely you are to commit a new crime. If you are aware of the causes and acquire the skills to address them, then the likelihood of committing new offenses decreases, meaning your risk level decreases",
      assessmentTitle:"How are risks assessed?",
      assessmentContent:[
        "During the risk assessment interview, we will try to understand your life more comprehensively through discussion with you and identify the reasons that led to the crimes.",
        " The reasons for need may include financial problems, alcohol or drug addiction, or conflicts and the inability to resolve them in other ways.",
        "Additionally, information is collected from various sources: court decisions, criminal records, employment registers, etc. Specialists who have interacted with you are also interviewed.",
        " Risk assessment is conducted for those convicted whose sentence is longer than one year. ",
        "Your risks are assessed upon arrival at the prison, and they are also evaluated when deciding on early release in court."
      ],
      assessmentTips:[
        "It is important to understand that since the risk assessment is largely based on your past life, you cannot change it much. You cannot make the severity or danger of your actions disappear.",
        "When deciding on early release in the future, the risk assessment will be significantly complemented by a character reference, which describes your actions and behavior during your time spent in prison.",
        "You can change your habits, behavior, and mindset, and the prison can provide you with support in learning new skills."
      ],
      characterizationTitle:"What affects risk score and characterization?",
      characterizationSteps:[
        {
        Title:"Based on previous information, the following is taken into account:",
        Content:[
          "The severity of the crime",
          "Whether you have been wanted or evaded serving your sentence",
          "Previous criminal behaviour",
          "If you have had problems with substances (alcohol, drugs)"]},
       {
          Title:"During the serving of the sentence, the following will be assessed:",
          Content:[
            "Learning or working in prison",
            "Participation in social programs and counseling",
            "Behaviour in prison, including communication with officials and other inmates",
            "Compliance with prison rules and regulations",
            "Thinking and reflection"]},
        {
          Title:"When applying for early release and placement in an open prison, the folowing will be assessed:",
          Content:[
            "Successful completion of the ITK",
            "Whether you pose a danger to others outside the prison",
            "Programs and activities completed in prison",
            "Your current disciplinary sanctions"
          ]}
      ]}
  };
  const copy=content[language] || content['ET'];

  return (
    <Section title={copy.title} sub={copy.sub}>
     <p
      style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
      }}
    >
      {copy.assessmentTitle}
    </p>
     <p style={{fontSize:"1.9rem"}}>{copy.assessmentContent[0]}</p>
      <p style={{fontSize:"1.9rem"}}>{copy.assessmentContent[1]}</p>
      <p style={{fontSize:"1.9rem"}}>{copy.assessmentContent[2]}</p>
      <p style={{fontSize:"1.9rem", fontStyle:"italic"}}>{copy.assessmentContent[3]}</p>
      <Tip>
        <ul style={{paddingLeft: 50, fontSize: "1.9rem", listStyleType: "disc" }}>
          {copy.assessmentTips.map((item)=>(
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Tip>
      <p
      style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
        marginTop: "4rem",
      }}

    >
      {copy.characterizationTitle}
    </p>
    <CharacterizationSteps copy={copy} />
    </Section>
   
  );
}

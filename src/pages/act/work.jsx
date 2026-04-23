import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Accordion from "../../components/ui/Accordion";
import Tip from "../../components/ui/Tip";
export default function ActWork({ language = 'ET' }) {
    const content = {
      ET:{
        title:"TÖÖTAMINE",
        reasonsTitle: 'Miks tasub tööle minna?',
        reasons:[
          "Töötamine aitab Sul sisustada oma päeva.",
          "Säilitad olemasolevaid tööoskusi või omandad uusi.",
          "Teenid raha, kuna töötamise eest saab palka. Nii kasvatad ka oma rahalist sõltumatust.",
          "Teenitud rahaga saad toetada vajadusel oma lähedasi.",
          "Töötamine näitab Sind positiivsest küljest ning võib mõjutada Sinu võimalust liikuda avavanglasse või vabaneda ennetähtaegselt."
        ],
        acc1Title:'Kas kõik peavad töötama?',
        accContent:[
          "Vanglas töötamine on kohustuslik kõikidele kinnipeetavatele.",
          "Töötamisest on vabastatud vaid pensioniealised kinnipeetavad, vahistatud ja need, kes pole meditsiinilistel põhjustel võimelised tööd tegema.",
          "Tööst on vabastatud ka õppivad kinnipeetavad õppetöö toimumise ajal, kuid sel juhul on kohustus töötada koolivaheaegadel."
        ],
        jobTitle:"Kuidas pääsen tööle?",
        jobs:[
          {
            title:"Töötamise planeerimine ITK-s",
            content:[
              "ITK-d koostades arutate kontaktisikuga läbi tegevused vanglas, nende hulgas ka töötamise.",
              "Tööle määramisel arvestatakse Sinu oskustega ja nendega, mille Sa vangistuse jooksul omandad."
            ],
            next:"Kontaktisik koostab Sinu tööle määramise käskkirja."
          },
          {
            title:"Majandustööle määramine",
            content:"Kõikidel kinnipeetavatel on esimene tööülesanne majandustööde tegemine",
            next:[
              "Vanglas nimetatakse seda ülesannet tööharjumuse tekitamiseks.",
              "Selle põhjal hinnatakse Sinu suhtumist ja valmisolekut töötada.",
              "Vastavalt erialaoskustele ja töökohtade olemasolule ning Sinu motivatsioonile ja käitumisele, on Sul võimalus mingi hetk edasi liikuda Vangla ettevõtluskeskusesse (VEK)."
            ]
          },
          {
            title:"Erialane töötamine (majandustööd või VEK)",
            content:[
              "Vangla ettevõtluskeskusesse (VEK) liikumisel pakutakse Sulle kõigepealt proovipäeva, et saaksid tutvuda pakutava tööga ning tööandja tutvuda Sinu oskustega.",
              "Juhul, kui mõlemapoolselt leitakse, et töö sobib, siis sõlmitakse Sinuga tööleping."
            ],
            next:"Palgaraha liigub Sinu vangla isikuarvele."
          },
          {
            title:"Töökoha vahetamine",
            content:[
              "Esita kirjalik taotlus kontaktisikule ja põhjenda oma soovi.",
              "Näiteks, kui soovid vahetada töökohta, eriala või Sul on mõnes muus valdkonnas paremad kogemused või ka nt tervislikel põhjustel."
              ],
            next:[
              "Otsuse teevad VEK ja kontaktisik.",
              "Otsuse puhul arvestatakse ka seda, kas leidub vabasid töökohti."
              ]
          },
           {
            title:"Töötamine avavanglas olles",
            content:[
              "Avavanglas viibides saad töötada ka väljaspool vanglat",
              "Vaata avavanglas töötamise kohta täpsemalt avavangla peatükist."
            ],
            next:"Sa otsid ise endale Sinu oskustele vastava töökoha või aitab seda Sul leida Töötukassa või vangla."
          },
        ],
        fieldTitle:"Millises valdkonnas saan töötada?",
        fieldLine:"Eesti vanglates on töötamiseks erinevad võimalused ja töövaldkonnad. Üldiselt jaotuvad töövõimalused kolme valdkonna vahel:",
        fields:[
          {
            title:"Majandustööd",
            content:"Koristaja, toidujagaja, nõudepesija, kokk/abikokk, pagar, köögitööline, laotööline, juuksur, raamatukoguhoidja, õmbleja jne.",
            howWork:"See on üldjuhul esimene töökoht. Soovi korral võid nendes töötada ka pikemalt või kogu oma vangistuse aja."
          },
          {
            title:"Vanglatööstus (vangla ettevõtluskeskus, VEK",
            content:"Tisler, keevitaja, värvija, pakkija puidu-, metalli-, komplekteerimisvõi üldtöödetsehhis. Masinõmbleja, pesumasina operaator pesumajas või õmblustsehhis",
            howWork:"Neis töötamine vajab kindlat oskust või vanglas omandatavat väljaõpet. Kandideerimiseks räägi oma kontaktisikuga."
          },
          {
            title:"Tööd avavanglas olles",
            content:"Ehitus, logistika, tootmine, teenindusettevõtted jmt.",
            howWork:"Sinu tööandja peab nõustuma vangla tingimustega."
          }
        ],
        fieldTip:[
          "Pea silmas, et tööle saamine sõltub väga paljudest asjaoludest ning enne seda viib vangla läbi erinevaid toiminguid.",
          "Seetõttu võtab reaalselt tööle saamine aega. Samuti sõltub tööle saamine sellest, millised töökohad on parasjagu saadaval."
        ],
        wagesTitle:"Töötasu ehk palk.",
        wagesTitle2:"Töötasu",
        wagesContent:[
          "Töötasu laekub Sinu vanglasisesele isikuarvele",
          "Sularaha vanglas (nii kinnises kui ka avavanglas) hoida ei tohi",
          "Sulle makstava töötasu ehk palga miinimum peab olema vähemalt 10% Eesti riiklikust alampalgast, kuid tegelik suurus sõltub ametist ja tulemustest."
        ],
        wagesTip:"Töötasud vanglas algavad 0,74 eurost tunnis.",
        salaryHeading:"Töötasu arvestus/laekumine",
        salarySub:"öötasu arvestus ja jagunemine Sinu isikuarvel on järgmine:",
        claimsTitle:"Kui Sinu vastu ON nõudeid",
        claimsContent:[
          "50% läheb Sinu võlgade eest tasumiseks",
          "20% läheb vabanemisfondi",
          "Ülejäänud raha saad kasutada vanglas olles, näiteks poest ostmiseks või teenuste eest maksmiseks"
        ],
        noClaimsTitle:"Kui Sinu vastu EI OLE nõudeid",
        noClaimsContent:[
          "70% läheb vabanemisfondi",
          "Ülejäänud raha saad kasutada vanglas olles, näiteks poest ostmiseks või teenuste eest maksmiseks"
        ],
        claimsTip: "Kui vabanemisfond saab täis, saad ise otsustada, kas kanda jätkuvalt osa raha edasi vabanemisfondi või kasutada vanglas",
        contractTitle:"Tööleping ",
        contractContent:[
          "Sinu tööle määramisel tehakse Sulle kas tööle määramise käskkiri või tööleping.",
          " Kui Sa töötad vanglas näiteks majandustöödel, siis tehakse Sulle tööle määramise käskkiri.",
          "Kui Sa töötad vanglatööstuses ehk vangla ettevõtluskeskuses (VEK) või avavanglas, siis sõlmitakse Sinuga tööleping.",
          "Sinu tööandja on sel juhul kas vangla, ettevõtluskeskus või väljaspool vanglat olev tööandja.",
          "Kõikidel juhtudel laekub töötasu Sinu vangla isikuarvele, kust tehakse mahaarvamised nii, nagu eespool joonisel näidatud.",
        ],
        contractTip:"Hoia oma isikuarve summal silm peal vangla tahvelarvutis. Nii saad planeerida oma e-poe oste ja veenduda, et ka Sinu vabanemistoetus kasvab.",
        behaviourTitle:"Käitumine töökohal",
        knowWorkTitle:"Mida Sul tuleb töökohal olles teada?",
        knowWorkContent:[
          "Sa pead täitma tööjuhendaja korraldusi, hoidma head töötempot ja suhtuma töövahenditesse heaperemehelikult.",
          "Sa ei tohi töökohal ega ka mujal minna konflikti kaaskinnipeetavatega ega häirida vanglatöötajaid. ",
          "Sa pead kandma nimesilti ning järgima vangla üldisi käitumisreegleid (viisakus, puhtus, alkoholikeeld ja narkootikumikeeld)."
        ],
        violateTitle:"Mis juhtub, kui Sa neid reegleid rikud?",
        violateContent:[
          "Sulle koostatakse ettekanne ja olenevalt rikkumise raskusest määratakse Sulle karistus.",
          " Sellega võib kaasneda palga vähendamine või töölt eemaldamine.",
          "Reeglite rikkumisi arvestatakse ka soodustuste, avavanglasse üleviimise või ennetähtaegse vabastamise otsuste tegemisel."
        ],
        absenceTitle:"Puudumine ja hilinemine",
        absenceContent:[
          "Kui Sa näiteks haigestud, siis teavita sellest valvurit, VEK-i või tööandjat kohe esimesel võimalusel (näiteks sõnumiga tahvelarvutis või suuliselt). ",
          "Kui tead enda puudumisest ette (näiteks Sul on arst, kohtuistung), tuleb puudumine töökohal kooskõlastada vähemalt 24 tundi varem juhtumikorraldaja kaudu.",
        ],
        faqsTitle:"Olulised asjad, mida meeles pidada",
        faqs:[
          {
            Question:"Kuidas saan väljaõppe ja töövahendid?",
            Answer:[
              "Vangla annab Sulle kõik tööriistad ja kaitsevahendid (kindad, prillid, kõrvaklapid jm) ",
              "Enne tööle asumist läbid lühikese ohutusja töökorralduse koolituse.",
              "Keerukamate masinate puhul õpetatakse Sind personaalselt. ",
              "Pea silmas, et tööriistu ja töövahendeid ei tohi kambrisse viia ega teistega vahetada.",
              "Kui Sa peaksid töövahendi või tööriista kaotama, rikkuma või kasutama seda keelatud viisil, siis toob see Sulle kaasa kahju hüvitamise ja võimaliku töölt kõrvaldamise või karistuse.",
              "Töölt võidakse Sind kõrvaldada ka juhul, kui keeldud töökoha ohutusvahenditest."
            ]
          },
          {
            Question:"Kas hea käitumine on vajalik?",
            Answer:[
              "Hea käitumine tööl tagab Sulle kindla palga ja võib kiirendada Sinu liikumist avavanglasse või ennetähtaegsele vabanemisele.",
              "Reeglite rikkumine on aga kahjulik - see kajastub Sinu iseloomustuses ja vähendab võimalusi varasemaks vabanemiseks."
              ]
          },
          {
            Question: "Kas ma pean oma tulusid deklareerima?",
            Answer:[
              "Jah, see sõltub Sinu tulude suurusest: kui Sinu töötasu on alla maksuvaba tulu määra (nt 2025. aastal oli see 654 eurot kuus), siis deklaratsiooni esitama ei pea.",
              "Tuludeklaratsiooni kohta küsi oma kontaktisikult - vangla laseb Maksu- ja Tolliametil (EMTA) saata Sulle paberkandjal eeltäidetud deklaratsiooni. Sellel on näidatud Sinu tulud ja muud vajalikud andmed.",
              " Eeltäidetud dekalaratsiooni saad ka ise EMTAst küsida. Seejärel täidad selle ära ja saadad postiga EMTA-le tagasi."
            ]
          }
        ],
      },
      EN:{
        title:"WORKING",
        reasonsTitle: ' Why is it worth going to work?',
        reasons:[
          " Working helps you fill your day.",
          "You maintain existing work skills or acquire new ones",
          " You earn money, as you receive a salary for working. This also increases your financial independence.",
          "With the money you earn, you can support your loved ones if needed.",
          "Working shows you in a positive light and may affect your chances of moving to an open prison or being released early"
        ],
        acc1Title:'Does everyone have to work?',
        accContent:[
          " Working in prison is mandatory for all inmates.",
          "Only inmates of retirement age, those detained, and those who are unable to work for medical reasons are exempt from working. ",
          "Inmates who are studying are also exempt during their studies, but in this case, they are required to work during school breaks."
        ],
        jobTitle:"How do I get a job?",
        jobs:[
          {
            title:"Planning for work in ITK",
            content:[
              "When preparing the ITK, you will discuss the activities in the prison with the contact person, including work",
              "When assigning work, your skills and those you acquire during your imprisonment will be taken into account."
            ],
            next:"The contact person will prepare your work assignment order."
          },
          {
            title:"Assignment to economic work",
            content:"All detainees have the first task of performing economic work.",
            next:[
              "This task is referred to in the prison as creating a work habit",
              "Based on this, your attitude and willingness to work will be assessed.",
              "Depending on your professional skills, the availability of job positions, and your motivation and behavior, you will have the opportunity to advance at some point to the prison entrepreneurship center (VEK)."
            ]
          },
          {
            title:"Professional Work or VEK",
            content:[
              "First, there will be a trial day, and you will have the opportunity to get acquainted with the offered work and for the employer to get to know your skills.",
              " If both parties find that the job is suitable, a work contract will be signed with you."
            ],
            next:"Palgaraha is transferred to your prison personal account."
          },
          {
            title:"Job changing",
            content:[
              "Submit a written application to the contact person and explain your request",
              "For example, if you want to change your workplace, profession, or if you have better experience in some other field or, for instance, for health reasons."
            ],
            next:[
              "The decision is made by the VEK and the contact person. ",
              " The decision also takes into account whether there are vacant job positions."
            ]
          },
           {
            title:"Professional Work or VEK",
            content:[
              "While staying in prison, you can also work outside the prison.",
              "For more details on working in the open prison, see the open prison chapter."
            ],
            next:"You will look for a job that matches your skills yourself, or the employment Office or the prison will help you find one."
          },
        ],
        fieldTitle:"In which field can I work?",
        fieldLine:"There are various opportunities and fields of work in Estonian prisons. In general, job opportunities are divided among three areas:",
        fields:[
          {
            title:"Economic work",
            content:"Cleaner, food distributor, dishwasher, cook/assistant cook, baker, kitchen worker, warehouse worker, hairdresser, librarian, seamstress, etc.",
            howWork:"This is generally the first job. If desired, you can work here longer or during your entire time in prison"
          },
          {
            title:"Prison industry (prison entrepreneurship center, VEK)",
            content:"Carpenter, welder, painter, packer in wood, metal, assembly, or general work shop. Machine seamstress, washing machine operator in a laundry or sewing workshop.",
            howWork:"Working in these jobs requires specific skills or training obtained in prison. To apply, talk to your contact person."
          },
          {
            title:"Jobs in the open prison include",
            content:"Construction, logistics, manufacturing, service companies, etc.",
            howWork:"Your employer must agree to the prison conditions."
          }
        ],
        fieldTip:[
          "Keep in mind that getting a job depends on many circumstances, and before that, the prison conducts various procedures. ",
          "Therefore, it takes time to actually get a job. The availability of jobs also depends on which positions are currently open."
        ],
        wagesTitle:"Wages or Salary",
        wagesTitle2:"Salary",
        wagesContent:[
          "The salary is credited to your personal account within the prison.",
          "Cash is not allowed to be kept in prison (both in closed and open prisons). ",
          "The minimum salary you receive must be at least 10% of the Estonian national minimum wage, but the actual amount depends on the position and performance."
        ],
        wagesTip:"Salaries in prison start at €0.74 per hour.",
        salaryHeading:"Salary calculation/crediting",
        salarySub:"The calculation and distribution of your salary in your personal account is as follows:",
        claimsTitle:"If there are claims against you:",
        claimsContent:[
          "50% goes towards paying off your debts",
          "20% goes to the release fund",
          "The remaining money can be used while in prison, for example, for purchases from the store or to pay for services."
        ],
        noClaimsTitle:" If there are no claims against you",
        noClaimsContent:[
          "70% goes to the release fund",
          "You can use the remaining money while in prison, for example, for purchasing items or paying for services"
        ],
        claimsTip: "When the release fund is full, you can decide whether to continue transferring part of the money to the release fund or use it in prison.",
        contractTitle:"Employment Contract",
        contractContent:[
          "When you are assigned to work, you will receive either a work assignment order or an employment contract",
          "If you work in the prison, for example, in economic tasks, then a work assignment order will be issued to you",
          "If you work in the prison industry, that is, in the prison business center (VEK) or in an open prison, then an employment contract will be signed with you.",
          "In this case, your employer is either the prison, the business center, or an employer outside the prison",
          "In all cases, your salary will be credited to your prison personal account, from which deductions will be made as shown in the diagram above",
        ],
        contractTip:"Keep an eye on your personal account balance on the prison tablet. This way, you can plan your online shopping and ensure that your release support also increases.",
        behaviourTitle:" Behavior at the workplace",
        knowWorkTitle:"What do you need to know while at work?",
        knowWorkContent:[
          "You must follow the instructions of the work supervisor, maintain a good work pace, and treat the tools responsibly",
          "You must not engage in conflict with fellow inmates at work or disturb prison staff.",
          " You must wear a name tag and adhere to the general behavior rules of the prison (politeness, cleanliness, alcohol prohibition, and drug prohibition)."
        ],
        violateTitle:" What happens if you violate these rules?",
        violateContent:[
          "A report will be prepared for you, and depending on the severity of the violation, a penalty will be imposed.",
          "This may include a reduction in pay or removal from work.",
          "Violations of the rules will also be taken into account when making decisions regarding benefits, transfer to open prison, or early release."
        ],
        absenceTitle:" Absence and lateness",
        absenceContent:[
          "If you become ill, inform the guard, VEK, or your employer as soon as possible (for example, by sending a message on the tablet or verbally).",
          "If you know in advance about your absence (for example, you have a doctor's appointment or a court hearing), you must coordinate your absence from work at least 24 hours in advance through the case manager.",
        ],
        faqsTitle:"Important things to note",
        faqs:[
          {
            Question:"How can I get training and tools?",
            Answer:[
              "The prison will provide you with all the tools and protective equipment (gloves, glasses, headphones, etc.). ",
              "Before starting work, you will undergo a short safety and work organization training",
              "For more complex machines, you will be taught personally.",
              "Keep in mind that tools and work equipment must not be taken into the cell or exchanged with others.",
              "If you lose, damage, or use a tool or work equipment in a prohibited manner, it will result in compensation for damages and possible removal from work or punishment.",
              "You may also be removed from work if you refuse to use the workplace safety equipment."
            ]
          },
          {
            Question:"Is good behaviour necessary?",
            Answer:[
              "Your behavior at work ensures you a steady salary and may accelerate your movement to parole or early release",
              "However, violating the rules is harmful - it reflects on your character and reduces the chances of an earlier release."
              ]
          },
          {
            Question: "Do I need to declare my income?",
            Answer:[
              "Yes, it depends on the size of your income: if your salary is below the tax-free income threshold (e.g., in 2025; If the income was 654 euros per month that year, then there is no need to submit a declaration.",
              "For inquiries regarding the tax declaration, please contact the designated person - the prison allows the Tax and Customs Board (EMTA) will send you the document on paper a pre-filled declaration.",
              "You can also obtain the declaration from EMTA- to ask. Then you fill it out and send it back to EMTA by mail."
            ]
          }
        ],
      }
  };
  const copy= content[language] || content['ET'];
  const getColor = (percent) => {
  if (percent === 50 || percent === 70) return "#16a34a"; // green
  if (percent === 30) return "#0ea5e9"; // blue (usable money)
  return "#9CA3AF"; 
  };

  const ProgressBlock = ({ title, data }) => (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "1.5rem",
        border: "2px solid #E5E7EB",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <h3
        style={{
          color: "#16a34a",
          fontSize: "1.7rem",
          fontWeight: 800,
          marginBottom: "1rem"
        }}
      >
        {title}
      </h3>

      {data.map((item, i) => (
        <div key={i} style={{ marginBottom: "1.2rem" }}>
          
        
          <div style={{ fontSize: "1.6rem", marginBottom: "0.4rem" }}>
            {item.text}
          </div>

          
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem"
            }}
          >
            
           
            <div
              style={{
                flex: 1,
                height: "12px",
                background: "#E5E7EB",
                borderRadius: "999px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: `${item.percent}%`,
                  height: "100%",
                  background: getColor(item.percent),
                  borderRadius: "999px",
                  transition: "width 0.4s ease"
                }}
              />
            </div>

            
            <div
              style={{
                minWidth: "50px",
                textAlign: "right",
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "#003B71"
              }}
            >
              {item.percent}%
            </div>

          </div>
        </div>
      ))}
    </div>
  );


  return (
    <Section title={copy.title}>
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
      <Accordion title={copy.acc1Title}>
         <ul style={{paddingLeft: 50, fontSize: "1.9rem", listStyleType: "disc" }}>
        {copy.accContent.map((item)=>(
          <li key={item}>{item}</li>
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
      }}>{copy.jobTitle}</h3>
      <div style={{ marginTop: "2rem" }}>
      {copy.jobs.map((job, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1.5rem",
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "2px solid #E5E7EB",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          
        
          <h4
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "#003B71",
              marginBottom: "0.6rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem"
            }}
          >
            <span
              style={{
                background: "#003B71",
                color: "white",
                borderRadius: "8px",
                padding: "0.2rem 0.6rem",
                fontSize: "1.3rem"
              }}
            >
              {index + 1}
            </span>
            {job.title}
          </h4>

          
          {Array.isArray(job.content) ? (
            <ul style={{ paddingLeft: "1.6rem", fontSize: "1.5rem", listStyleType: "disc" }}>
              {job.content.map((item, i) => (
                <li key={i} style={{ marginBottom: "0.3rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: "1.5rem", lineHeight: 1.6 }}>
              {job.content}
            </p>
          )}

       
          <div
            style={{
              marginTop: "1rem",
              padding: "0.8rem 1rem",
              background: "#E6F0FA",
              borderLeft: "4px solid #003B71",
              borderRadius: "10px",
              fontSize: "1.4rem"
            }}
          >
            <strong style={{ color: "#003B71" }}>Next:</strong>

            {Array.isArray(job.next) ? (
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.4rem", listStyleType: "inherit" }}>
                {job.next.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            ) : (
              <p style={{ marginTop: "0.3rem" }}>{job.next}</p>
            )}
          </div>
        </div>
      ))}
    </div>
      <Tip>
        <ul>
          {copy.fieldTip.map((item)=>(
            <li key={item} style={{fontSize: "1.5rem", lineHeight: 1.7}}>{item}</li>
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
    }}>
      {copy.fieldTitle}
    </h3>

    <p style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
      {copy.fieldLine}
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        marginTop: "1rem"
      }}
    >
      {copy.fields.map((field, index) => (
        <div
          key={index}
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "2px solid #E5E7EB",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h4
            style={{
              fontSize: "1.7rem",
              fontWeight: 800,
              color: "#003B71",
              marginBottom: "0.5rem"
            }}
          >
            {field.title}
          </h4>

          <p style={{ fontSize: "1.9rem", marginBottom: "0.8rem" }}>
            {field.content}
          </p>

          <div
            style={{
              background: "#E6FFFA",
              padding: "0.6rem 0.8rem",
              borderRadius: "10px",
              fontSize: "1.8rem"
            }}
          >
            {field.howWork}
          </div>
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
    }}>{copy.wagesTitle}</h3>
    <h4 style={{
      fontSize: "1.9rem",
      fontWeight: 900,
      color: "#003B71",
      letterSpacing: "-0.025em",
      lineHeight: 1.2
    }} >{copy.wagesTitle2}</h4>
    <ul style={{ paddingLeft: "1.8rem", fontSize: "1.5rem", listStyleType: "disc" }}>
      {copy.wagesContent.map((item, index) => (
        <li key={index} style={{ marginBottom: "0.5rem" }}>
          {item}
        </li>
      ))}
    </ul>
   <Tip>{copy.wagesTip}</Tip>
   <h4 style={{
      fontSize: "1.9rem",
      fontWeight: 900,
      color: "#003B71",
      letterSpacing: "-0.025em",
      lineHeight: 1.2
    }} >{copy.salaryHeading}</h4>
    <p style={{ fontSize: "1.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
      {copy.salarySub}
    </p>
     <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
      marginTop: "2rem"
    }}
  >
    <ProgressBlock
      title={copy.claimsTitle}
      data={[
        { percent: 50, text: copy.claimsContent[0] },
        { percent: 20, text: copy.claimsContent[1] },
        { percent: 30, text: copy.claimsContent[2] }
      ]}
    />

    <ProgressBlock
      title={copy.noClaimsTitle}
      data={[
        { percent: 70, text: copy.noClaimsContent[0] },
        { percent: 30, text: copy.noClaimsContent[1] }
      ]}
    />
  </div>
    <Tip>{copy.claimsTip}</Tip>
    <Accordion title={copy.contractTitle}>
      <ul style={{ paddingLeft: "1.8rem", fontSize: "1.5rem", listStyleType: "disc" }}>
        {copy.contractContent.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </Accordion>
    <Tip>{copy.contractTip}</Tip>
   
    <Accordion title={copy.knowWorkTitle}>
      <ul style={{ paddingLeft: "1.8rem", fontSize: "1.5rem", listStyleType: "disc" }}>
        {copy.knowWorkContent.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>))}
      </ul>
    </Accordion>
    <Accordion title={copy.violateTitle}>
      <ul style={{ paddingLeft: "1.8rem", fontSize: "1.5rem", listStyleType: "disc" }}>
        {copy.violateContent.map((item, index) => (
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
        lineHeight: 1.2,        fontStyle: "italic",

    }}>{copy.absenceTitle}</h3>
    <ul style={{ paddingLeft: "1.8rem", fontSize: "1.5rem", listStyleType: "disc" }}>
      {copy.absenceContent.map((item, index) => (
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

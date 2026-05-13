import React,{useState} from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Keyword from "../../components/ui/keyword";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion,AnimatePresence } from "framer-motion";
import Warning from '../../components/ui/Warning';
import Tip from '../../components/ui/Tip';

export default function ArrivalNeeds({ language = 'ET' }) {
  const content={
    EN:{
     title: "INITIAL PROCEDURES",
     searchTitle:"Search and documents",
     searchNotes:[
        "Upon arrival at the prison, you will be searched by an officer of the same gender.",
        "All detainees will be searched. The purpose of the search is to find prohibited items that can ensure your safety and the safety of others in the prison",
        "You will be asked to undress for the search, but you will never be completely naked during the search. The search will be conducted in a private area.",
        "Your fingerprints will be taken.",
        "Photos will be taken of you and your distinguishing features (e.g., tattoos, scars, etc.).",
        "When you arrive at the prison, a personal file will be opened for you. Necessary documents will be securely stored there, including:",
        [
            "Identification document",
            "Court documents",
            "Documents related to the execution of the sentence",

        ],
        "Your identification document will be returned to you upon your release from prison."
     ],
     mentalWarning:"There are strict rules and a daily schedule in prison, and following them will help you adapt to life here. You will be able to learn more about them in detail later.",
     healthTitle:"Health check",
     healthLine:"Upon arrival at the prison, a health check will be conducted to assess your physical and mental condition and to provide assistance if necessary",
     physicalTitle:"Physical health check",
     physicalNotes:[
        "You will be tested for alcohol and drug use.",
        "A DNA sample will be taken from you.",
        "A medical professional will assess your overall health status, map out any illnesses (including chronic ones), and ensure the continuation of treatment if necessary.",
        "Personal medications are prohibited in prison",
        "It is very important that you inform the medical staff about your ongoing treatment as soon as possible.",
        "This way, the prison medical personnel can ensure you receive the necessary medications to continue your treatment.",

     ],
     mentalTitle:"Mental health",
     mentalNotes:[
        "The medical staff will assess your mental state.",
        "If you feel that you have mental health issues (e.g., alcohol or drug addiction, suicidal thoughts), be sure to inform your contact person or guard",
        "The people working in the prison have received training to deal with such issues and will refer you to specialists for further assistance.",
        "If you have questions or need additional information, please contact the prison staff."
     ],
     mentalTip:"We recommend that you remain calm and attentive during procedures and when receiving initial information. If anything is unclear to you, feel free to ask the prison staff."
    
    },
    ET:{
     title: "ESIMESED TOIMINGUD",
     searchTitle:"Läbiotsimine ja dokumendid",
     searchNotes:[
        "Vanglasse saabumisel otsib Sind läbi Sinuga samast soost ametnik.",
        "Läbi otsitakse kõik kinnipeetavad.",
        "Läbiotsimise eesmärk on leida keelatud asjad, millega saame tagada Sinu ja teiste turvalisuse vanglas.",
        "Läbiotsimiseks palutakse Sul lahti riietuda, kuid mitte kordagi ei ole Sa läbiotsimise ajal täielikult alasti. Läbiotsimist viiakse läbi privaatses ruumis.",
        "Sinult võetakse sõrmejäljed.",
         [
            "Isikut tõendav dokument",
            "Kohtudokumendid",
            "Karistuse täideviimisega seotud dokumendid.",

        ],
        "Sinu isikut tõendav dokument antakse Sulle tagasi vanglast vabanemisel."
     ],
     mentalWarning:"Vanglas kehtivad kindlad reeglid ja päevakava, mille järgimine aitab Sul kohaneda siinse eluga. Edaspidi saad tutvuda nendega lähemalt ja põhjalikumalt.",
     healthTitle:"Tervisekontroll",
     healthLine:"Vanglasse saabumise järel tehakse Sulle tervisekontroll, et hinnata Sinu füüsilist ja vaimset seisundit ning tagada vajaduse korral abi.",
     physicalTitle:"Füüsiline tervisekontroll",
     physicalNotes:[
        "Sulle tehakse alkoholi ja narkootikumide tarvitamise testid.",
        "Sinult võetakse DNA-proov.",
        "Meditsiinitöötaja hindab Sinu üldist tervislikku seisundit, kaardistab haigused (sh kroonilised) ning vajadusel tagab ravi jätkumise.",
        "Isiklikud ravimid on vanglas keelatud.",
        "On väga oluline, et Sa teavitaksid meditsiinitöötajat oma pooleliolevast ravist esimesel võimalusel",
        "Nii on vangla meditsiinipersonalil võimalik tagada Sulle vajalikud ravimid, et saaksid ravikuuri jätkata.",

     ],
     mentalTitle:"Vaimne tervis",
     mentalNotes:[
        "Meditsiinitöötaja hindab Sinu psüühilist seisundit.",
        "Kui tunned, et Sul on probleeme vaimse tervisega (nt alkoholi- või uimastisõltuvus, enesetapumõtted), teavita sellest kindlasti enda kontaktisikut või valvurit.",
        "Vanglas töötavad inimesed on saanud väljaõppe selliste probleemidega tegelemiseks ning nad suunavad Sind spetsialistide vastuvõtule.",
        "Kui Sul tekib küsimusi või vajad lisainfot, pöördu vangla personali poole."
         ],
     mentalTip:"Soovitame toimingute ajal ja esmase info saamisel säilitada rahu ning olla tähelepanelik. Kui miski on Sulle selle juures arusaamatu, siis küsi julgelt vangla personalilt."
    }
  }
   const copy = content[language] || content.ET;
   const steps = [
    { title: copy.searchTitle, content: copy.searchNotes, type: "list" },
    { title: copy.healthTitle, content: [copy.healthLine], type: "text" },
    { title: copy.physicalTitle, content: copy.physicalNotes, type: "list" },
    { title: copy.mentalTitle, content: copy.mentalNotes, type: "list" }
  ];
  
   const [activeStep, setActiveStep] = useState(0);
   const [direction, setDirection] = useState(0);

   const handleStepChange = (index) => {
   setDirection(index > activeStep ? 1 : -1);
   setActiveStep(index);
   };
  return (
    <Section title={copy.title}>

      <div style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: "2rem",
        position: "relative"
      }}>


        <div style={{
          position: "absolute",
          top: "20px",
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--color-border-subtle)",
          zIndex: 0,
          transform: "translateY(-50%)"
        }} />

        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => handleStepChange(index)}
            style={{
              cursor: "pointer",
              zIndex: 1,
              textAlign: "center",
              width: "100%"
            }}
          >

            <div style={{
              margin: "0 auto",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: index === activeStep ? "#1CD8D8" : "var(--color-bg-elevated)",
              color: index === activeStep ? "#fff" : "var(--color-text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              transition: "0.3s",
              border: index === activeStep ? "none" : "1px solid var(--color-border-subtle)"
            }}>
              {index + 1}
            </div>


            <p style={{
              marginTop: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: index === activeStep ? "700" : "500",
              color: index === activeStep ? "var(--color-text-primary)" : "var(--color-text-secondary)"
            }}>
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
      <motion.div
         key={activeStep}
         initial={{
            opacity: 0,
            x: direction === 1 ? 40 : -40,
            scale: 0.97,
            filter: "blur(4px)"
         }}
         animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)"
         }}
         exit={{
            opacity: 0,
            x: direction === 1 ? -40 : 40,
            scale: 0.97,
            filter: "blur(4px)"
         }}
         transition={{
            x: { type: "spring", stiffness: 140, damping: 18 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.35 },
            filter: { duration: 0.35 }
         }}
         style={{
            marginTop: "3rem",
            background: "var(--color-bg-card)",
            padding: "2rem",
            borderRadius: "20px",
            border: "2px solid var(--color-border-subtle)",
            color: "var(--color-text-body)"
         }}
      >


         <h3 style={{
            fontSize: "2rem",
            fontWeight: 900,
            color: "var(--color-text-primary)",
            marginBottom: "1rem"
         }}>
            {steps[activeStep].title}
         </h3>

         
         {steps[activeStep].type === "list" ? (
            <ul style={{ listStyleType: "square", paddingLeft: "1rem" }}>
            {steps[activeStep].content.map((item, i) => {

               if (Array.isArray(item)) {
                  return (
                  <ul key={i} style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
                     {item.map((sub, j) => (
                        <li key={j}>{sub}</li>
                     ))}
                  </ul>
                  );
               }

               return <li key={i}>{item}</li>;
            })}
            </ul>
         ) : (
            <p>{steps[activeStep].content[0]}</p>
         )}

         
         {activeStep === 0 && (
            <div style={{ marginTop: "1.5rem" }}>
            <Warning>{copy.mentalWarning}</Warning>
            </div>
         )}


         {activeStep === steps.length - 1 && (
            <div style={{ marginTop: "1.5rem" }}>
            <Tip>{copy.mentalTip}</Tip>
            </div>
         )}

      </motion.div>
      </AnimatePresence>
    </Section>
  );
}
import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip"
export default function HealthServices({ language = 'ET' }) {
  const content = {
    ET:{
      title: "MINU FUUSILINE JA VAIMNE TERVIS",
      sub:[
        "Vangla tervishoid ja arstiabi toimub selgete reeglite järgi, et iga kinnipeetav saaks vajaliku abi õigel ajal ja turvaliselt. ",
        "Esmase tervisekontrolli läbid tavaliselt esimese 24–72 tunni jooksul pärast saabumist – seal selgitatakse välja Sinu varasemad haigused ja pooleliolevad ravikuurid (näiteks diabeet või muud haigused).",
        "Teavita neist arsti või meditsiinitöötajat kohe esimese tervisekontrolli ajal - see on vajalik selleks, et Sulle vajalik ravi ei katkeks."
      ],
      line:"Vanglas on Sul pereõde ja perearst. Nemad suunavad Sind edasi eriarstide või spetsialistide poole.",
      healthTip:"Kui Sa ei valda eesti või vene keelt piisavalt hästi, küsi tõlgi abi – vangla otsib tõlgi või kasutab selleks videoteenust.",
      assistTitle:"Millisele arstiabile on mul ligipääs?",
      services:[
        {
          service:"Pereõde ja perearst",
          include:"Igapäevased tervisemured, krooniliste haiguste jälgimine, retseptid.",
          work:"Pereõde võtab vastu tööpäeviti; vajadusel suunab vangla perearsti juurde, kes saab omakorda anda saatekirja eriarstile.",
          fees:"Tasuta"
        },
         {
          service:"Erakorraline abi 24/7",
          include:"Äge valu, trauma, äkiline haigus, hingamisraskused jmt.",
          work:"Valvur kutsub valveõe; vajadusel kutsutakse kiirabi või viiakse vanglavälisesse haiglasse.",
          fees:"Tasuta"
        },
        {
          service:"Eriarst (nt psühhiaater, neuroloog, kardioloog, günekoloog ja teised)",
          include:"Spetsiifilised uuringud, diagnostika ja ravi.",
          work:"Perearst kirjutab saatekirja; visiidid toimuvad vanglas või väljaspool vanglat asuvas raviasutuses; osa konsultatsioone võib toimuda videokõne kaudu.",
          fees:"Tasuta"
        },
        {
          service:"Hambaravi",
          include:"Valuravi, hädavajalik hammaste parandamine; põhihooldus pikema karistuse puhul.",
          work:"Aja broneerib pereõde; vajadusel viiakse hambakliinikusse.",
          fees:"Valuravi tasuta; proteesid jm oma kulul. Hinnakirja saad pereõelt"
        },
        {
          service:"Psühholoogiline ja vaimse tervise tugi",
          include:"Psühholoogiline nõustamine, enesetapumõtete kriisiabi.",
          work:"Pöördu pereõe või kontaktisiku poole.",
          fees:"Tasuta"
        },
        {
          service:"Sõltuvusest loobumise toetamine",
          include:"Ravimid. Grupiprogrammide osas (nt AA) vaata taasühiskonnastamise peatükki.",
          work:"Pöördu pereõe või kontaktisiku poole.",
          fees:"Tasuta"
        },
        {
          service:"Nägemisuuring ja prillid",
          include:"Silmakontroll, põhiprillid.",
          work:"Taotlus pereõele",
          fees:"Standardprillid tasuta, erimudelid oma kulul."
        },
        {
          service:"Abi erivajadustega kinnipeetavatele",
          include:"Abivahendid (nt ratastoolvmt), keeleline, nägemisvõi muu erivajadus",
          work:"Teavita pereõde või kontaktisikut. Lahendused leitakse individuaalselt.",
          fees:"Üldjuhul tasuta"
        },     
      ],
    },
    EN:{
      title: "YOUR PHYSICAL AND MENTAL HEALTH",
      sub:[
        "Healthcare and medical assistance in Vangla are conducted according to clear rules, ensuring that every detainee receives the necessary help in a timely and safe manner. ",
        " The initial health check is usually completed within the first 24–72 hours after arrival – during this, your previous illnesses and ongoing treatments (such as diabetes or other conditions) will be assessed.",
        "Inform the doctor or medical staff about these during the initial health check – this is necessary to ensure that your required treatment is not interrupted."
      ],
      line:"Vanglas is your family sister and family doctor. They will refer you to specialists or specialists.",
      healthTip:"If you do not have a sufficient command of Estonian or Russian, ask for the assistance of a translator –the prison will seek a translator or use a video service for this purpose",
      assistTitle:"What medical assistance do I have access to?",
      services:[
        {
          service:"Sister and family doctor",
          include:"Daily health concerns, monitoring of chronic diseases, prescriptions.",
          work:"The nurse is available on working days; if necessary, she refers the inmate to the prison doctor, who can in turn provide a referral to a specialist.",
          fees:"For free"
        },
         {
          service:"Emergency Assistance 24/7",
          include:"Severe pain, trauma, sudden illness, breathing difficulties and more",
          work:"The guard calls the duty nurse; if necessary, an ambulance is called or the patient is taken to an offsite hospital.",
          fees:"For Free"
        },
        {
          service:"Specialist(e.g., psychiatrist, neurologist, cardiologist, gynecologist, and others)",
          include:"Specific examinations, diagnostics, and treatment.",
          work:"The family doctor writes a referral;visits take place in the prison or at a healthcare facility outside the prison; some consultations may occur via video call.",
          fees:"For Free"
        },
        {
          service:"Dental care",
          include:"Pain management, essential dental repairs; primary care for longer incarceration periods",
          work:"Appointments are booked by the family nurse; if necessary, you will be taken to the dental clinic.",
          fees:"Pain management is free; dentures and others at your own expense. You can get the price list from the family nurse."
        },
        {
          service:"Psychological and mental health support",
          include:"Psychological counseling, suicide crisis intervention.",
          work:"Contact the family nurse or contact person.",
          fees:"For free"
        },
        {
          service:"Support for giving up addiction",
          include:"Medications.For information on group programs (e.g.,AA), see the rehabilitation chapter.",
          work:"Contact the family nurse or contact person.",
          fees:"For free"
        },
        {
          service:"Vision examination and glasses",
          include:"Eye examination, basic glasses",
          work:"Application to the family nurse",
          fees:"Standard glasses are free, special models at your own expense."
        },
        {
          service:"Assistance for detainees with special needs",
          include:"Assistive devices (e.g., wheelchair mobility), language, visual, or other special needs.",
          work:"Inform the family nurse or contact person. Solutions will be found individually.",
          fees:"Generally free of charge."
        },

        

      ],
    }
    };
  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title} sub={<ul style={{ paddingLeft: "1.5rem" }}>
      {copy.sub.map((item, index) => (
        <li key={index} style={{ marginBottom: "0.5rem" }}>
          {item}
        </li>
      ))}
    </ul>
  }>
      <p>{copy.line}</p>
      <Tip>{copy.healthTip}</Tip>
            <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        letterSpacing: "-0.025em",
        lineHeight: 1.2,
        fontStyle: "italic",
      }}>
        {copy.assistTitle}
      </h3>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem"
  }}
>
  {copy.services.map((item, index) => (
    <div
      key={index}
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "1.5rem",
        border: "2px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.25s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      <h4
        style={{
          fontSize: "1.95rem",
          fontWeight: "700",
          color: "#003B71",
          marginBottom: "0.5rem",
          textDecoration: "underline"
        }}
      >
        {item.service}
      </h4>

      <p style={{ marginBottom: "0.5rem" }}>
        <strong>Includes:</strong> {item.include}
      </p>

      <p style={{ marginBottom: "0.5rem" }}>
        <strong>How it works:</strong> {item.work}
      </p>

      <p style={{ color: "#16a34a", fontWeight: "600" }}>
        {item.fees}
      </p>
    </div>
  ))}
</div>
    </Section>
  );
}

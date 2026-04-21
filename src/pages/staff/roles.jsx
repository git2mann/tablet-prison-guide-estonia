import React, {useState} from "react";
import { FaUserShield, FaUserFriends, FaBrain, FaPrayingHands, FaBalanceScale } from "react-icons/fa";
import Section from "../../components/ui/Section";
import Accordion from "../../components/ui/Accordion";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";

export default function StaffRoles({ language = "ET" }) {
    const roleStyles = [
    { icon: <FaUserShield />, color: "#DC2626" },   
    { icon: <FaUserFriends />, color: "#2563EB" }, 
    { icon: <FaUserFriends />, color: "#16A34A" }, 
    { icon: <FaBrain />, color: "#9333EA" },       
    { icon: <FaPrayingHands />, color: "#F59E0B" }, 
    { icon: <FaBalanceScale />, color: "#0D9488" }, 
  ];
  const content = {
    EN: {
      title: "Roles & Tasks",
      sub: "Each employee handles different tasks. Approaching the right person means faster help.",

      roles: [
        {
          title: "Guard",
          intro: "The guard is the employee you see most often in the prison.",
          duties: [
            "Makes rounds and counts",
            "Ensures rules and the schedule are followed",
            "Monitors cameras and maintains order",
            "Searches cells and areas",
            "Ensures food and medication distribution",
            "Helps with phone and tablet use",
            <>Relays your needs to the <Keyword word="contact person" language={language}>contact person</Keyword> if necessary</>,
          ],
          questions: [
            "How can I use the phone?",
            "How do I apply to see a doctor?",
          ],
        },

        {
          title: "Contact Person",
          intro: <>The <Keyword word="contact person" language={language}>contact person</Keyword> is your main support in prison. For most questions, you should first turn to them if possible</>,
          duties: [
            "Meets you at the start of imprisonment and listen to your questions and concerns",
            "Plans to discuss with you the course of the penalty period and release",
            "Organizes your participation in various activities, such as learning activities, hobbies, programs, therapies",
            "Helps you, if necessary, to send letters and applications (for example, if you want to go to the doctor, you can retrieve things from the warehouse)",
            "Handles  case-specific issues, such as in the event of violations",
            <>Communicates with relatives and <Keyword word="probation officer" language={language}>probation officer</Keyword></>,
            <>Monitors together with you whether the activities and the activities planned for you in the <Keyword word="ITK" language={language}>ITK</Keyword> are functioning; it has the right to initiate changes to your ITK as well</>
          ],
          questions: [
            "How can I apply for a short-term meeting?",
            "How can I get a job?",
            "When will I get a response to my application?",
          ],
        },

        {
          title: "Social Worker",
          intro: <> Conducts interviews and group activities that help you prepare for release. If you want to communicate with the social worker, you must first contact your designated <Keyword word="contact person" language={language}>contact person</Keyword></>,
          duties: [
            <>Organizes and conducts <Keyword word="social programs" language={language}>social programs</Keyword> and other activities (e.g., restorative practices, family-centered work);</>,
            "Holds a conversation with you to assess your motivation and support your development goals in prison",
            "Supports you in understanding the consequences of your actions through group work and individual work",
            <>Collaborates with other professionals in the prison, for example, providing recommendations to your <Keyword word="contact person" language={language}>contact person</Keyword> for further work</>,
          ],
          questions: [
            "How will this program help me?",
            "How do I apply skills learned?",
            "Who supports me in applying these skills?",
            "How can I prepare for release?",
            "Questions related to your feelings of guilt or need for emotional support"

          ],
        },

        {
          title: "Psychologist",
          intro: "Supports you mentally and emotionally.",
          duties: [
            "Will listen to you and help you understand your feelings",
            "Will talk to you and assess your psychological state",
            "May use various forms of therapy, such as individual and group therapy",
            "Will advise you on how to cope with stress and provide recommendations for better self-management",
            "Will give feedback about you to the designated person and, if necessary, refer you to other specialists",
          ],
          questions: [
            "How can I cope with stress?",
            "Can we talk about my mood swings?",
            "What exercises do you recommend for reducing anxiety?"

          ],
        },

        {
          title: "Chaplain",
          intro: <>Offers spiritual and pastoral conversations via the <Keyword word="chaplain" language={language}>chaplain</Keyword>.</>,
          duties: [
            "Meets with you privately if you need religious or spiritual support",
            "Organizes religious services and ceremonies",
            "Conducts prayer meetings and religious education",
            "Listens to your story and respects your religious beliefs",
          ],
          questions: [
            "How can I participate in a religious ceremony?",
            "How can I get into the church?"
          ],
        },

        {
          title: "Probation Officer",
          intro: <>The <Keyword word="probation officer" language={language}>probation officer</Keyword> supports you after release.</>,
          duties: [
            "Meets with you regularly and discusses how to prevent new crimes, make amends for damages caused, and how to adjust to society after release",
            "Shares success experiences and development with you; in case of setbacks or violations, discusses the next steps with you",
            "collaborates with the court, prosecutor's office, and other professionals (psychologist, social worker, etc.) to ensure you receive the best suppor",
            "Supports you in communication with family and employers",
            "It is necessary to fulfill the requirements and obligations set forth in the court ruling, and to monitor their compliance",
            "Assesses your needs, strengths, and risks – a risk assessment and action plan will be developed in collaboration with you"
          ],
          questions: [
            "Where to turn or what to do to resolve issues related to debts?",
            "Which programs help avoid substance abuse?",
            "who and how should I inform if there are changes in my living arrangements (e.g., residence, workplace, or phone number)?"
          ],
        },
      ],

      contactTitle: "How to Contact Staff",
      contact: [
        "Think about what you want to ask and phrase your question clearly",
        "Use the specialist's time purposefully",
        "Respect each employee's role and do not ask them questions or requests that fall outside their responsibilities or capabilities",
        <>Ask the <Keyword word="contact person" language={language}>contact person</Keyword> or guard if unsure</>,
      ],

      tip: <>If you are unsure whom to approach, ask the <Keyword word="contact person" language={language}>contact person</Keyword> or the guard who can direct you. Briefly explain your question to ensure a quick and accurate referral</>,
    },
    ET: {
  title: "Rollid ja ülesanded",
  sub: "Õige inimese poole pöördumine tähendab kiiremat abi.",

  roles: [
    {
      title: "Valvur",
      intro: "Valvur on töötaja, keda näed vanglas kõige sagedamini.",
      duties: [
        <><Keyword word="count" language={language}>Teeb ringkäike ja loendusi</Keyword></>,
        "Vastutab, et kõik järgiksid päevakava ja reegleid",
        "Jälgib kaameraid ja hoiab korda",
        "Otsib läbi kambreid ja teisi ruume",
        "Jälgib, et toit ja ravimid oleksid välja jagatud",
        "Abistab telefoni ja tahvelarvuti kasutamisel",
        <><Keyword word="contact person" language={language}>Vahendab vajadusel infot kontaktisikule</Keyword></>,
      ],
      questions: [
        "Kuidas saan telefoni kasutada?",
        "Kuidas täita avaldust arstile minekuks?",
      ],
    },

    {
      title: "Kontaktisik",
      intro: <><Keyword word="contact person" language={language}>Kontaktisik</Keyword> on Sinu peamine tugi vanglas.</>,
      duties: [
        "Kohtub Sinuga vangistuse alguses",
        "Planeerib Sinuga karistusaja ja vabanemise",
        "Korraldab tegevusi (õppimine, programmid, töö)",
        "Aitab kirjade ja avaldustega",
        "Lahendab juhtumipõhiseid küsimusi",
        <><Keyword word="probation officer" language={language}>Suhtleb lähedaste ja kriminaalhooldusametnikuga</Keyword></>,
        <><Keyword word="ITK" language={language}>Jälgib ITK tegevuste toimimist</Keyword></>,
      ],
      questions: [
        "Kuidas saan taotleda lühiajalist kokkusaamist?",
        "Kuidas saaksin tööle?",
        "Millal saan vastuse oma avaldusele?",
      ],
    },

    {
      title: "Sotsiaaltöötaja",
      intro: "Aitab Sul valmistuda vabanemiseks.",
      duties: [
        <><Keyword word="social programs" language={language}>Korraldab sotsiaalprogramme</Keyword></>,
        "Toetab Sinu arengueesmärke",
        "Aitab mõista oma tegude tagajärgi",
        "Teeb koostööd teiste spetsialistidega",
      ],
      questions: [
        "Kuidas see programm mind aitab?",
        "Kuidas saan õpitud oskusi rakendada?",
        "Kes mind toetab nende oskuste kasutamisel?",
      ],
    },

    {
      title: "Psühholoog",
      intro: "Toetab Sind vaimselt ja emotsionaalselt.",
      duties: [
        "Vestleb Sinuga ja hindab Sinu seisundit",
        "Aitab mõista Sinu tundeid",
        "Pakub teraapiat",
        "Annab nõu stressiga toimetulekuks",
      ],
      questions: [
        "Kuidas saan stressiga paremini toime tulla?",
        "Kas saaksime rääkida mu meeleolumuutustest?",
        "Milliseid harjutusi soovitate ärevuse vähendamiseks?",
      ],
    },

    {
      title: "Kaplan",
      intro: <><Keyword word="chaplain" language={language}>Kaplan</Keyword> pakub vaimulikku ja hingelist tuge.</>,
      duties: [
        "Kohtub Sinuga privaatselt",
        "Viib läbi palvusi ja teenistusi",
        "Toetab Sind raskustes",
        "Austab Sinu usulisi tõekspidamisi",
      ],
      questions: [
        "Kuidas saan osaleda usutseremoonial?",
        "Kuidas pääsen kirikusse?",
      ],
    },

    {
      title: "Kriminaalhooldusametnik",
      intro: <><Keyword word="probation officer" language={language}>Kriminaalhooldusametnik</Keyword> toetab Sind pärast vabanemist.</>,
      duties: [
        "Kohtub Sinuga regulaarselt",
        "Aitab ennetada uusi rikkumisi",
        "Jälgib kohustuste täitmist",
        <><Keyword word="risk assessment" language={language}>Koostab riskihindamise ja tegevuskava</Keyword></>,
        "Teeb koostööd teiste spetsialistidega",
      ],
      questions: [
        "Kuhu pöörduda võlgadega seotud probleemide korral?",
        "Millised programmid aitavad sõltuvust vältida?",
        "Kuidas teavitada muutustest elukorralduses?",
      ],
    },
  ],

  contactTitle: "Kuidas pöörduda",
  contact: [
    "Mõtle oma küsimus selgelt läbi",
    "Kasuta spetsialisti aega eesmärgipäraselt",
    "Austa iga töötaja rolli",
    <><Keyword word="contact person" language={language}>Kui oled ebakindel, küsi kontaktisikult või valvurilt</Keyword></>,
  ],

  tip: <><Keyword word="contact person" language={language}>Kõik töötajad on siin, et Sind toetada. Ära kõhkle abi küsimast!</Keyword></>,
}
    
  };

  const copy = content[language] || content.EN;
  const labels = {
    questions: { ET: "Küsimused, mida saad küsida:", EN: "Questions you can ask:" }
  };
  const [openIndex, setOpenIndex] = useState(null);
  return (
  <Section
    title={copy.title}
    sub={copy.sub}
  >
    {copy.roles.map((role, idx) => {
      const style = roleStyles[idx] || {};
      const isOpen = openIndex === idx;

      return (
        <Accordion
          key={role.title}
          open={isOpen}
          onClick={() => setOpenIndex(isOpen ? null : idx)}
          color={style.color}
          title={
            <div className={`flex items-center gap-3 md:gap-4 transition-all duration-300 ${isOpen ? '' : 'text-slate-600'}`} style={{ color: isOpen ? style.color : undefined }}>
              <span className={`text-2xl md:text-3xl transition-transform duration-300 ${isOpen ? 'scale-110' : 'scale-100'}`}>
                {style.icon}
              </span>

              <span className="font-black uppercase tracking-tight text-lg md:text-xl">
                {role.title}
              </span>
            </div>
          }
        >
          <div className={`pl-4 md:pl-8 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-70 -translate-y-1'}`}>
            <p className="text-[clamp(1.125rem,3vw,1.5rem)] font-bold text-slate-700 mb-4">{role.intro}</p>

            <ul className="pl-6 md:pl-10 list-disc text-[clamp(1rem,2.5vw,1.35rem)] text-slate-600 space-y-2 mb-8">
              {role.duties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <p className="font-black uppercase tracking-wider text-sm text-[#003B71] mb-4 opacity-60">
              {labels.questions[language] || labels.questions.EN}
            </p>

            <ul className="pl-6 md:pl-10 list-disc text-[clamp(1rem,2.5vw,1.35rem)] text-slate-500 space-y-2">
              {role.questions.map((q) => (
                <li
                  key={q}
                  className="italic opacity-90"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </Accordion>
      );
    })}

    <Accordion title={copy.contactTitle}>
      <ul className="pl-6 md:pl-10 list-disc text-[clamp(1.125rem,3vw,1.5rem)] text-slate-600 space-y-4 py-4">
        {copy.contact.map((c) => (
          <li key={c} className="italic font-medium">
            {c}
          </li>
        ))}
      </ul>
    </Accordion>

    <Tip>{copy.tip}</Tip>
  </Section>
);
}

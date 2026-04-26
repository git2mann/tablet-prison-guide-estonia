import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import Accordion from "../../components/ui/Accordion";

export default function DailyLiving({ language = 'ET' }) {
  const content={
    ET:{
        
        title:"TAHVELARVUTI KASUTAMINE",
        sub:"Tahvelarvutit kasutatakse enamasti õppimiseks ja vanglasisese info vaatamiseks. Sa ei saa sellega vabalt internetti minna.",
        tabletTip:"Tahvelarvuti kasutamine on privileeg, mitte kõigile antud õigus – seda tuleb kasutada vastutustundlikult ja ainult lubatud tegevusteks.",
        tabletUseTitle:"Milleks saad tahvelarvutit kasutada?",
        tabletUse:[
            {
                title:"Tahvelarvutit saad kasutada näiteks:",
                content:[
                    "kui osaled õpingutes (nt üldharidus, kutseõpe või koolitused);",
                    "kui oled kaasatud tööharjutustesse või osaled mõnes vangla programmis",
                    "kui vajad ligipääsu vanglasisesele infole, näiteks päevakava, kodukord või õppematerjalid",
                    "oma toimikute vaatamiseks ja seaduse lugemiseks."
                ]
            },
            {line:"Lisaks on võimalik tahvelarvutit kasutada selleks, et teha oste e-poes ja vaadata oma isikuarve kontojääki.",}

        ], 
        rulesTitle:"Tahvelarvuti kasutamise reeglid",
        rules:[
            "Tahvelarvuti ei ole Sinu oma, vaid ühine vangla vara",
            "Tahvelarvuti kasutamiseks on päevakavas oma aeg ja selleks tuleb täita taotlus.",
            "Tahvelarvuti kasutamine toimub järelevalve all. Kõik, mida Sa teed, salvestatakse ja vajadusel kontrollitakse.",
            "Kui oled oma tegevuse tahvelarvutis lõpetanud, siis pead seadme ette nähtud kohta tagastama."
        ],
        dontTitle:"Sa ei tohi:",
        dont:[
            " tahvelarvutit lahti võtta või seadeid muuta",
            "anda seda teisele kinnipeetavale.",
            "salvestada, levitada või vaadata keelatud sisu."
        ],
        intTip:[
            "Internetti ei saa vabalt kasutada. Ligipääsu kontrollib ja piirab vangla.",
            "Kõiki Su tegevusi tahvelarvutis jälgitakse. Kui rikud reegleid, siis võid kaotada oma kasutusõiguse.",
            "Hoia tahvelarvutit korralikult. Kui teed tahvelarvuti katki, siis vastutad parandamiskulude eest."
        ]
    },
    EN:{
        title:"USE OF TABLETS",
        sub:"Tablets are mostly used for learning and viewing internal information in prisons. You cannot freely access the internet with them",
        tabletTip:"The use of a tablet computer is a privilege, not a right granted to everyone – it must be used responsibly and only for permitted activities.",
        tabletUseTitle:"What can you use a tablet for?",
        tableLine1:"You can use tablets, for example:",
        tabletContent:[
                    "If you participate in studies (e.g. general education, vocational training, or training courses);",
                    "If you are involved in work exercises or participating in some prison programmis",
                    "If you need access to internal prison information, such as the schedule, study materials or learning materials",
                    "for viewing the documents and reading the law."
                ],
            
        tabletLine:"Additionally, it is possible to use the tablet to make purchases in the online store and to check your personal account balance.",

        
        rulesTitle:" Tablet Usage Rules",
        rules:[
            "The tablet is not yours, but a shared property of the prison",
            "There is a designated time in the schedule for using the tablet, and you must submit a request for it",
            "Tablet usage is under supervision. Everything you do is recorded and may be checked if necessary",
            "When you have finished your activities on the tablet, you must return the device to the designated location"
        ],
        dontTitle:"You must not:",
        dont:[
            "Disassemble the tablet computers or change the settings",
            "Store, distribute, or view prohibited content"
        ],
        intTip:[
            "Internet access is not freely available. Access is controlled and restricted by the prison.",
            "All your activities on the tablet are monitored. If you violate the rules, you may lose your usage rights.",
            "Take good care of the tablet. If you break the tablet, you will be responsible for the repair costs."
        ]

    }
  }

  const copy = content[language] || content.ET;
  return (
    <Section title={copy.title} sub={copy.sub}>
        <Tip>{copy.tabletTip}</Tip>
        <Accordion title={copy.tabletUseTitle}>
            <p>{copy.tableLine1}</p>
            <ul style={{listStyleType:"disc",marginLeft:"2.9rem"}}>{copy.tabletContent.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
            </ul>
            <p>{copy.tabletLine}</p>
        </Accordion>
        <Accordion title={copy.rulesTitle}>
            <ul style={{listStyleType:"disc",marginLeft:"2.9rem"}}>{copy.rules.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
            </ul>
        </Accordion>
        <Accordion title={copy.dontTitle}>
            <ul style={{listStyleType:"disc",marginLeft:"2.9rem"}}>{copy.dont.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
            </ul>
        </Accordion>
        <Tip>
            <ul style={{listStyleType:"disc",marginLeft:"2.9rem"}}>{copy.intTip.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}
            </ul>
        </Tip>
    </Section>
  );
}

import React from 'react';
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";

export default function ActITK({ language = 'ET' }) {
    const content={
        ET:{
            title: "Individuaalne täitmiskava (ITK)",
            sub:"ITK on Sinu isiklik tegevusplaan vanglas viibimise ajaks. See aitab Sul toetada sinu elu vanglas ja õiguskuulekaks tulevikuks paremini valmistuda.",
            outlineLead: "ITK-s on kirjas Sinu vajadused ja Sulle pakutavad võimalused:",
            outline:[
                "Mida Sul on vaja teha, et vabanemiseks valmistuda",
                "Sind toetavad tegevused vanglas, näiteks õppimine, töötamine, osalemine nõustamistes, programmides",
                "Kuupäevad, millal Sul avaneb võimalus edasi liikuda avavanglasse või ennetähtaegselt vabaneda ning mis tingimustel on see kõige tõenäolisem."

            ],
            outlineTip:
                "ITK täitmisel on oluline tähendus, kui kohus arutab edaspidi sinu võimalikku ennetähtaegset vabanemist või avavanglasse paigutamist. "
            ,
            content:[
                "ITK teeb kontaktisik koostöös Sinuga. See tähendab, et Sa saad kaasa rääkida – öelda, mida Sa vajad või soovid",
                "Edaspidi toimuvad vestlused selle täitmise üle üks kord kuus koos kontaktisikuga, kus te arutate tulemuste üle.",
                "ITK uuendatakse üks kord aastas. Hinnatakse Sinu arenguid ning takistusi, vajadusel uuendatakse plaani uute tegevustega.."

            ],
            contentTip:[
                "ITK koostatakse süüdimõistetutele, kelle karistus on pikem kui üks aasta.",
                "Kui Sul ei ole lühema karistusaja tõttu ITK-d, võib Sul siiski olla võimalusi osaleda erinevates tegevustes (näiteks õppimine) või sotsiaalprogrammides, kui seal on vabu kohti."

            ]
        },
        EN:{
            title: "Individual Perfomance Plan (IPP)",
            sub:"ITK is your personal action plan for your time in prison. It helps you support your life in prison and better prepare for a law-abiding future.",
            outlineLead: "ITK outlines your needs and the opportunities available to you:",
            outline:[
                "What you need to do to prepare for your release",
                "Activities that support you in prison, such as studying, working, participating in counseling, and programs",
                "Dates when you will have the opportunity to move to an open prisonor be released early, and under what conditions this is most likely."

            ],
           outlineTip:
                " The completion of the ITK is significant when the court discusses your case in the future, your possible early release or placement in an open prison."
            ,
            content:[
                "ITK is created in cooperation with your contact person. This means that you can have a say – to express what you need or want.",
                "Future discussions about its implementation will take place once a month with the contact person, where you will discuss the results.",
                "ITK is updated once a year. Your developments and obstacles are assessed, and the plan is updated with new activities if necessary."

            ],
            contentTip:[
                "ITK is prepared for convicts whose sentence is longer than one year.",
                "If you do not have an ITK due to a shorter sentence, you may still have opportunities to participate in various activities (such as studying) or social programs if there are available spots."

            ]



        }
    }
    const copy = content[language] || content['ET'];
    return(
        <Section title={copy.title} sub={copy.sub}>
            <p style={{fontSize:"1.9rem"}}>{copy.outlineLead}</p>
            <ul style={{fontSize:"1.8rem",listStyleType:"disc", paddingLeft:"6rem"}}>
                {copy.outline.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Tip>{copy.outlineTip}</Tip>
            <p style={{fontSize:"1.9rem"}}>{copy.content[0]}</p>
            <p style={{fontSize:"1.8rem"}}>{copy.content[1]}</p>
            <p style={{fontSize:"1.8rem"}} >{copy.content[2]}</p>
            <Tip>
                <p>{copy.contentTip[0]}</p>
                <p>{copy.contentTip[1]}</p>
            </Tip>
        </Section>
    );
   
}
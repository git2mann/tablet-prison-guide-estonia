import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Keyword from "../../components/ui/keyword";

export default function RulesSolitary({ language = 'ET' }) {
  const content={
    ET:{
      title:"Kartserikaristus",
      sub:"Rangete või korduvate vanglaeeskirjade rikkumiste korral kohaldatav range distsiplinaarkaristus",
      noteTitle:"Mida tuleks silmas pidada?",
      notes:[
        "Kartseris oled Sa üksi.",
        "Sulle väljastatakse ja Sa oled kohustatud kandma kartseri riideid.",
        "Sulle ei ole isiklikud asjad lubatud.",
        "Kambrit jälgitakse visuaalselt.",
        "Liikumine vangla territooriumil on piiratud. Päeva jooksul on Sul õigus olla 1 tund värskes õhus.",
        "Sinu tööl käimist võidakse piirata ja teatud juhtudel ei lubata Sul sel ajal õppida ega osaleda sotsiaalprogrammis.",
        "Lühiajalisi kokkusaamisi lubatakse vaid perekonnaliikmetega ja vanglal on õigus keelduda pikaajalise kokkusaamise võimalusest.",
        " Ka Sinu muid õigusi võidakse piirata, näiteks helistamist",
        "Sul on piiratud ligipääs ajalehtedele ja raamatutele. Samuti ei ole kartseris lubatud televiisor.",
      ]
    },
    EN:{
      title: "Solitary confinement",
      sub:"A severe disciplinary sanction used for serious or repeated prison rule violations",
      noteTitle:"What to note?",
      notes:[
        "In solitary confinement, you are alone.",
        "You will be issued and are required to wear solitary confinement clothing.",
        "You are not allowed personal belongings.",
        "The cell is monitored visually.",
        "Movement within the prison grounds is restricted. During the day, you have the right to be outside for 1 hour.",
        "Your access to work may be restricted, and in certain cases, you may not be allowed to study or participate in social programs at this time.",
        "Visits are only allowed with family members, and the prison has the right to refuse the possibility of long-term visits.",
        " Your other rights may also be restricted, such as making phone calls",
        "You have limited access to newspapers and books. Additionally, a television is not allowed in solitary confinement.",
      ]
    }
  }
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
      }}>{copy.noteTitle}</h3>
      <ul style={{listStyleType:"disc", marginLeft:"2rem"}}>{copy.notes.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>

   </Section>
  );
}

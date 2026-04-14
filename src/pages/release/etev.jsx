import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Accordion from "../../components/ui/Accordion";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip";

export default function RelETEV({ language = 'ET' }) {
  const content = {
    ET: {
      title: "Elektrooniline valve (ETEV)",
      sub: [
        "Elektrooniline valve on võimalus vabaneda vanglast varem kui tavapärase tingimisi ennetähtaegse vabastamise korral. Sel juhul kannad jalavõru, mis jälgib Sinu asukohta vabaduses.",
        "Sul on võimalus avaldada soovi, kui Sinu ETEV tähtaeg on saabunud. Vabastamise otsustab kohus vangla poolt esitatud iseloomustuse põhjal, arvestades Sinu tegevusi ja käitumist vanglas.",
        "Elektroonilise valve taotlemiseks esita sooviavaldus kontaktisikule pärast valve tähtaja saabumist.",
      ],
      eligibilityTitle: "Millal on tingimuslik ennetähtaegne vabastamine võimalik",
      tableHeaders: ["Karistus", "ETEV tähtaeg pärast"],
      tableRows: [
        ["Kõik karistused <= 5 aastat", "Pärast 1/3 karistuse kandmist (vähemalt 4 kuud)"],
        ["Kõik karistused > 5 aastat", "Pärast 1/2 karistuse kandmist (vähemalt 4 kuud)"],
      ],
      tipItems: [
        "Elukohast lahkuda tohid ainult kriminaalhooldaja loal ja piiratud tegevusteks.",
        "Elektroonilise valve kestus võib olla 1-12 kuud.",
      ],
      bodyParas: [
        "Sulle paigaldatakse jalavõru, mis jälgib Sinu asukohta. Seadmed paigaldatakse Sinu elukohta.",
        "Koos kriminaalhooldusametnikuga lepitakse kokku kindel ajakava, millal ja kus viibida võid. Pead sellest kinni pidama ega tohi rikkuda reegleid ega lahkuda lubatud alalt.",
      ],
      conditionsTitle: "Elektroonilise valve paigaldamise tingimused",
      conditions: [
        "Elukoha omanik peab kinnitama, et Sul on luba seal elada.",
        "Seal peab olema elekter ja mobiililevi.",
        "Elukoht peab olema lukustatav.",
        "Kõik teised täiskasvanud, kes elavad samas kohas, peavad nõustuma jalavõru ja seadmete paigaldamisega.",
      ],
      timelineTitle: "Kuidas elektrooniline valve paigaldatakse",
      timelineHeading: "Kuidas elektrooniline valve paigaldatakse?",
      steps: [
        "Kui kohus otsustab, et saad kanda karistust kodus elektroonilise valve all, antakse vanglas Sulle kutse. Kutse ütleb, et pead 3 tööpäeva jooksul pärast vanglast vabanemist minema kriminaalhooldusametniku juurde ja selgitab reeglid, mida pead järgima.",
        "Kriminaalhooldusametnik lepib Sinuga kokku täpse kuupäeva ja kellaaja, millal seadmed paigaldatakse.",
        "Kriminaalhooldusametnik tuleb Sinu koju ja valib sobiva koha seadmete paigaldamiseks.",
        "Seadmed pannakse paika nii, et need Sinu elu võimalikult vähe häiriks. Jalavõru kinnitatakse kindlalt ja kontrollitakse, et see püsiks paigas.",
        "Sinu elektroonilise valve aeg algab hetkest, kui seadmed on Sinu koju ja jalale paigaldatud.",
        "Kui valveperiood lõpeb, tuleb ametnik seadmed eemaldama ja Sinu elektrooniline valve lõpeb.",
      ],
      warningPrefix: "Kui rikud elektroonilise valve tingimusi (näiteks lahkud elukohast ilma loata või ei järgi ajakava), võib tagajärjeks olla karistuse jätkamine vanglas. Elektroonilise valve all oldud aega ",
      warningStrong: "ei",
      warningSuffix: " arvutata Sinu määratud karistusest maha.",
    },
    EN: {
      title: "Electronic Monitoring (ETEV)",
      sub: [
        "Electronic monitoring is an opportunity to be released from prison earlier than the usual conditions of early release on parole. In this case, you will wear an ankle bracelet that monitors your location while living in freedom.",
        "You have the option to request this when your parole term has arrived. The decision for electronic monitoring release is made by the court based on the report submitted by the prison. The court will consider your activities and behavior while in prison.",
        "To apply for electronic monitoring, submit a request to the contact person when your electronic monitoring eligibility date has arrived.",
      ],
      eligibilityTitle: "When conditional early release is possible",
      tableHeaders: ["Sentence", "ETEV is eligible after"],
      tableRows: [
        ["All sentences <= 5 years", "After serving 1/3 of your sentence (at least 4 months)"],
        ["All sentences > 5 years", "After serving 1/2 of your sentence (at least 4 months)"],
      ],
      tipItems: [
        "You may only leave your residence with the permission of your probation officer and for limited activities.",
        "The duration of electronic monitoring can be from 1 to 12 months.",
      ],
      bodyParas: [
        "An ankle bracelet will be installed on you to monitor your location. Devices related to the ankle bracelet will be set up at your residence.",
        "Together with your probation officer, you will establish a specific schedule for when and where you may be present. You must adhere to this schedule. You must not violate the agreed-upon rules or leave the permitted area.",
      ],
      conditionsTitle: "Conditions for installation of electronic monitoring",
      conditions: [
        "The owner of the residence must confirm that you have permission to live there.",
        "There must be electricity and mobile coverage.",
        "The residence must be lockable.",
        "All other adults living in that place must agree to the ankle bracelet and the installation of its equipment.",
      ],
      timelineTitle: "How the electronic monitoring device is installed",
      timelineHeading: "How is the electronic monitoring device installed?",
      steps: [
        "If the judge decides that you can serve your sentence at home under electronic monitoring, you will receive a summons in prison. The summons states that you must go to the probation officer within 3 working days after your release and explains the rules you need to follow.",
        "The probation officer agrees with you on the exact day and time when the monitoring devices will be installed.",
        "The probation officer comes to your home and chooses a suitable place to install the devices.",
        "The devices are set up so that they disturb you as little as possible. The ankle bracelet is secured and checked to make sure it stays in place.",
        "Your electronic monitoring period starts from the moment the devices are installed in your home and on your ankle.",
        "When the monitoring period is over, the officer comes to remove the devices and your electronic monitoring ends.",
      ],
      warningPrefix: "If you violate the conditions of electronic monitoring (for example, leaving your residence without permission or not adhering to the schedule), the consequence may be the continuation of your sentence in prison. The time spent under electronic monitoring will ",
      warningStrong: "NOT",
      warningSuffix: " be deducted from your assigned sentence.",
    },
  };

  const copy = content[language] || content.ET;

  return (
    <Section title={copy.title} sub={language === 'ET' ? 'Vabanemine' : 'Release'}>
      
        <p style={{ fontSize: "1.9rem", lineHeight: 1.6 }}>{copy.sub[0]}</p>
        <p style={{ fontSize: "1.9rem", lineHeight: 1.6, marginTop: 10 }}>{copy.sub[1]}</p>
        <p style={{ fontSize: "1.9rem", margin: "10px 0" }}><i>{copy.sub[2]}</i></p>
     

      <p style={{ fontSize: "1.9rem", fontWeight: 700, marginTop: 20 }}>{copy.eligibilityTitle}</p>
      <Table
        headers={copy.tableHeaders}
        rows={copy.tableRows}
      />

      <Tip>
        <ul style={{ marginTop: 8, paddingLeft: 50, listStyleType: "disc", fontSize: "1.9rem" }}>
          {copy.tipItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Tip>

      {copy.bodyParas.map((text) => (
        <p key={text} style={{ color: "#475569", fontSize: "1.9rem", lineHeight: 1.7, margin: "10px 0" }}>{text}</p>
      ))}

      <Accordion title={copy.conditionsTitle} open>
        <ul style={{ marginTop: 8, paddingLeft: 50, listStyleType: "disc", fontSize: "1.9rem" }}>
          {copy.conditions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Accordion>

      <Accordion title={copy.timelineTitle}>
        <p style={{ fontSize: "1.9rem", marginBottom: 8 }}><strong>{copy.timelineHeading}</strong></p>
        <ol style={{ marginTop: 8, paddingLeft: 50, listStyleType: "decimal", fontSize: "1.9rem" }}>
          {copy.steps.map((item) => <li key={item} style={{ marginBottom: 10 }}>{item}</li>)}
        </ol>
      </Accordion>

      <Warning>
        {copy.warningPrefix}
        <strong>{copy.warningStrong}</strong>
        {copy.warningSuffix}
      </Warning>
    </Section>
  );
}

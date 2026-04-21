import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Accordion from "../../components/ui/Accordion";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip";
import Keyword from "../../components/ui/keyword";

export default function RelETEV({ language = 'ET' }) {
  const content = {
    ET: {
      title: "Elektrooniline valve (ETEV)",
      sub: [
        "Elektrooniline valve on võimalus vabaneda vanglast varem kui tavapärase tingimisi ennetähtaegse vabastamise korral. Sel juhul kannad jalavõru, mis jälgib Sinu asukohta vabaduses.",
        "Sul on võimalus avaldada soovi, kui Sinu ETEV tähtaeg on saabunud. Vabastamise otsustab kohus vangla poolt esitatud iseloomustuse põhjal, arvestades Sinu tegevusi ja käitumist vanglas.",
        <>Elektroonilise valve taotlemiseks esita sooviavaldus <Keyword word="contact person" language={language}>kontaktisikule</Keyword> pärast valve tähtaja saabumist.</>,
      ],
      eligibilityTitle: "Millal on tingimuslik ennetähtaegne vabastamine võimalik",
      tableHeaders: ["Karistus", "ETEV tähtaeg pärast"],
      tableRows: [
        ["Kõik karistused <= 5 aastat", "Pärast 1/3 karistuse kandmist (vähemalt 4 kuud)"],
        ["Kõik karistused > 5 aastat", "Pärast 1/2 karistuse kandmist (vähemalt 4 kuud)"],
      ],
      tipItems: [
        <>Elukohast lahkuda tohid ainult <Keyword word="probation officer" language={language}>kriminaalhooldaja</Keyword> loal ja piiratud tegevusteks.</>,
        "Elektroonilise valve kestus võib olla 1-12 kuud.",
      ],
      bodyParas: [
        "Sulle paigaldatakse jalavõru, mis jälgib Sinu asukohta. Seadmed paigaldatakse Sinu elukohta.",
        <>Koos <Keyword word="probation officer" language={language}>kriminaalhooldusametnikuga</Keyword> lepitakse kokku kindel ajakava, millal ja kus viibida võid. Pead sellest kinni pidama ega tohi rikkuda reegleid ega lahkuda lubatud alalt.</>,
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
        <>Kui kohus otsustab, et saad kanda karistust kodus elektroonilise valve all, antakse vanglas Sulle kutse. Kutse ütleb, et pead 3 tööpäeva jooksul pärast vanglast vabanemist minema <Keyword word="probation officer" language={language}>kriminaalhooldusametniku</Keyword> juurde ja selgitab reeglid, mida pead järgima.</>,
        <><Keyword word="probation officer" language={language}>Kriminaalhooldusametnik</Keyword> lepib Sinuga kokku täpse kuupäeva ja kellaaja, millal seadmed paigaldatakse.</>,
        <><Keyword word="probation officer" language={language}>Kriminaalhooldusametnik</Keyword> tuleb Sinu koju ja valib sobiva koha seadmete paigaldamiseks.</>,
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
        <>To apply for electronic monitoring, submit a request to the <Keyword word="contact person" language={language}>contact person</Keyword> when your electronic monitoring eligibility date has arrived.</>,
      ],
      eligibilityTitle: "When conditional early release is possible",
      tableHeaders: ["Sentence", "ETEV is eligible after"],
      tableRows: [
        ["All sentences <= 5 years", "After serving 1/3 of your sentence (at least 4 months)"],
        ["All sentences > 5 years", "After serving 1/2 of your sentence (at least 4 months)"],
      ],
      tipItems: [
        <>You may only leave your residence with the permission of your <Keyword word="probation officer" language={language}>probation officer</Keyword> and for limited activities.</>,
        "The duration of electronic monitoring can be from 1 to 12 months.",
      ],
      bodyParas: [
        "An ankle bracelet will be installed on you to monitor your location. Devices related to the ankle bracelet will be set up at your residence.",
        <>Together with your <Keyword word="probation officer" language={language}>probation officer</Keyword>, you will establish a specific schedule for when and where you may be present. You must adhere to this schedule. You must not violate the agreed-upon rules or leave the permitted area.</>,
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
        <>If the judge decides that you can serve your sentence at home under electronic monitoring, you will receive a summons in prison. The summons states that you must go to the <Keyword word="probation officer" language={language}>probation officer</Keyword> within 3 working days after your release and explains the rules you need to follow.</>,
        <>The <Keyword word="probation officer" language={language}>probation officer</Keyword> agrees with you on the exact day and time when the monitoring devices will be installed.</>,
        <>The <Keyword word="probation officer" language={language}>probation officer</Keyword> comes to your home and chooses a suitable place to install the devices.</>,
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
      <div className="space-y-6">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-balance">{copy.sub[0]}</p>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-balance">{copy.sub[1]}</p>
        <p className="text-lg md:text-xl italic text-slate-500 text-balance">{copy.sub[2]}</p>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-[#003B71] mt-12 mb-6">{copy.eligibilityTitle}</h3>
      <Table
        headers={copy.tableHeaders}
        rows={copy.tableRows}
      />

      <Tip>
        <ul className="list-disc pl-8 md:pl-12 space-y-4 text-lg md:text-xl text-slate-700">
          {copy.tipItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </Tip>

      <div className="space-y-6">
        {copy.bodyParas.map((text, i) => (
          <p key={i} className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">{text}</p>
        ))}
      </div>

      <Accordion title={copy.conditionsTitle} open>
        <ul className="list-disc pl-8 md:pl-12 space-y-4 text-lg md:text-xl text-slate-700">
          {copy.conditions.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </Accordion>

      <Accordion title={copy.timelineTitle}>
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-bold text-slate-800">{copy.timelineHeading}</p>
          <ol className="list-decimal pl-8 md:pl-12 space-y-6 text-lg md:text-xl text-slate-700">
            {copy.steps.map((item, i) => <li key={i} className="pl-2">{item}</li>)}
          </ol>
        </div>
      </Accordion>

      <Warning>
        <div className="text-lg md:text-xl leading-relaxed">
          {copy.warningPrefix}
          <strong className="font-black underline decoration-[#FFD000] decoration-4 underline-offset-4 mx-1">{copy.warningStrong}</strong>
          {copy.warningSuffix}
        </div>
      </Warning>
    </Section>
  );
}

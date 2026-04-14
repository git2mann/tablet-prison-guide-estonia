import React from "react";
import Section from "../../components/ui/Section";
import Tip from "../../components/ui/Tip";
import Accordion from "../../components/ui/Accordion";
import Table from "../../components/ui/Table";
import Keyword from "../../components/ui/keyword";

export default function RelTEV({ language = "ET" }) {
  const content = {
    EN: {
      title: "Probation (TEV)",
      sub: "Many prisoners get the opportunity to be released from prison early and continue serving their sentence in freedom under probation supervision.",

      intro:
        "Serving a sentence on probation means that you do not have to serve your sentence in prison, but can be in freedom. You are subject to certain rules (control requirements) and obligations, you will be in regular contact, and a care plan or sentence plan will be developed for you in cooperation with your probation officer during the probation period.",

      eligibilityTitle: "When conditional early release is possible",
      tableHeaders: ["Sentence", "TEV Eligible After"],
      tableRows: [
        ["All sentences ≤ 5 years", "After serving 1/2 of your sentence (at least 4 months)"],
        ["All sentences > 5 years", "After serving 2/3 of your sentence (at least 4 months)"],
      ],

      requirementsTitle: "Requirements",
      requirements: [
        "You must live in a place designated by the court as your permanent residence.",
        "You must attend all scheduled meetings with your probation officer.",
        "Alcohol or drug tests must be satisfactory.",
        "You may be required to work, study, undergo treatment, or participate in social programs.",
        "During the probation period, compliance with rules will be monitored.",
      ],

      violationsTitle: "What Happens If You Violate Rules of Probation?",
      violationsSteps: [
        "The probation officer will meet with you immediately to understand what happened.",
        "You may be referred to support programs.",
        "You may need more frequent meetings.",
      ],

      violationsLead:
        "If violations are serious or repeated, a report will be submitted to the court. The court may:",
      violationsResults: [
        "Impose additional obligations.",
        "Extend your probation period by up to 1 year.",
        "Send you back to prison.",
      ],

      tip: "If you encounter difficulties, always talk to your probation officer early.",
    },

    ET: {
      title: "Karistuse kandmine kriminaalhooldusel (TEV)",
      sub: "Paljudel kinnipeetavatel tekib võimalus vabaneda vanglast ennetähtaegselt ning jätkata karistuse kandmist vabaduses kriminaalhooldusel.",

      intro:
        "Kriminaalhooldusel karistuse kandmine tähendab, et Sa ei pea viibima vanglas, vaid saad olla vabaduses. Sulle kehtivad reeglid ja kohustused ning Sinuga suheldakse regulaarselt.",

      eligibilityTitle: "Millal on tingimuslik ennetähtaegne vabastamine võimalik",
      tableHeaders: ["Karistus", "TEV võimalik pärast"],
      tableRows: [
        ["Kõik karistused ≤ 5 aastat", "Pärast 1/2 karistuse kandmist (vähemalt 4 kuud)"],
        ["Kõik karistused > 5 aastat", "Pärast 2/3 karistuse kandmist (vähemalt 4 kuud)"],
      ],

      requirementsTitle: "Nõuded",
      requirements: [
        "Sul tuleb elada kohas, mille kohus on määranud.",
        "Sul tuleb käia kõikidel kohtumistel.",
        "Testid peavad olema korras.",
        "Sul võib olla kohustus töötada või õppida.",
        "Jälgitakse, kas pead reeglitest kinni.",
      ],

      violationsTitle: "Mis juhtub, kui rikud reegleid?",
      violationsSteps: [
        "Ametnik kohtub Sinuga kohe.",
        "Sind võidakse suunata programmi.",
        "Võid hakata sagedamini kohtuma.",
      ],

      violationsLead:
        "Kui rikkumised on tõsised, esitatakse kohtule ettekanne. Kohus võib:",
      violationsResults: [
        "Lisada kohustusi.",
        "Pikendada katseaega.",
        "Saata tagasi vanglasse.",
      ],

      tip: "Kui Sul tekib raskusi, räägi varakult ametnikuga.",
    },
  };

  const copy = content[language] || content.EN;

  return (
    <Section title={copy.title}  sub={
    <p style={{ fontSize: "1.5rem", lineHeight: 1.6, color: "#555" }}>
      {copy.sub}
    </p>
  }>
      <Tip>
        {copy.intro.replace(
          "probation officer",
          ""
        )}{" "}
        <Keyword word="probation officer" />
      </Tip>

      <p style={{ fontSize: "1.9rem", fontWeight: 600 }}>
        {copy.eligibilityTitle}
      </p>

      <Table headers={copy.tableHeaders} rows={copy.tableRows} />

      <Accordion title={copy.requirementsTitle} open>
        <ul style={{ paddingLeft: 50, fontSize: "1.9rem", listStyleType: "disc" }}>
          {copy.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={copy.violationsTitle}>
        <ul style={{ paddingLeft: 50, fontSize: "1.9rem", listStyleType: "disc" }}>
          {copy.violationsSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p style={{ fontSize: "1.9rem" }}>{copy.violationsLead}</p>

        <ul style={{ paddingLeft: 50, fontSize: "1.9rem", listStyleType: "disc" }}>
          {copy.violationsResults.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Tip>{copy.tip}</Tip>
    </Section>
  );
}
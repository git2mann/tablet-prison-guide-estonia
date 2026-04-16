import React from "react";
import Accordion from "../../components/ui/Accordion";
import Section from "../../components/ui/Section";

export default function ActReintegration({language="ET"}) {
const content = {
  EN: {
    title: "Reintegration",
    sub: "There are several activities and steps in prison that help prepare you for release, and this is called reintegration. Reintegration is the prison's support and activities to help you live a law-abiding life after imprisonment. These activities are planned together with you. Participating in these activities affects whether and when you may move to an open prison or be granted early release.",
    activitiesTitle: "Reintegration Activities",
    activities: [
      "Social programs",
      "Education",
      "Work",
      "Addiction treatment and psychological counseling",
      "Maintaining or improving relationships with loved ones",
      "Completing necessary pre-release steps to obtain documents and services (for example: work ability assessment, applying for housing or benefits from local government)",
    ],
  },
  ET: {
    title: "Taasühiskonnastamine",
    sub: "Vanglas on mitmeid tegevusi ja samme, mis aitavad Sind viia vabanemiseni ning seda nimetatakse taasühiskonnastamiseks. Taasühiskonnastamine on vanglapoolne tugi ja tegevused selleks, et Sul oleks peale vangistust võimalik elada õiguskuulekat elu. Need tegevused planeeritakse Sinuga koos. Nendes tegevustes osalemine mõjutab seda, kas ja millal Sul on võimalik pääseda avavanglasse või vabaneda ennetähtaegselt.",
    activitiesTitle: "Taasühiskonnastamise tegevused",
    activities: [
      "Sotsiaalprogrammid",
      "Õppimine",
      "Töötamine",
      "Sõltuvusravi ja psühholoogiline nõustamine",
      "Suhete hoidmine või parandamine lähedastega",
      "Enne vabanemist vajalike toimingute tegemine dokumentide ja teenuste saamiseks (nt töövõime hindamine, eluaseme või toetuste taotlemine kohalikust omavalitsusest)",
    ],
  },
};

  const copy= content [language] || content.EN;

  return (
    <Section title={copy.title} sub={copy.sub}>
      <Accordion title={copy.activitiesTitle}>
        <ul style={{ listStyleType: "disc", paddingLeft: 20, color:"#666" , lineHeight: 1.7 }}>
          {copy.activities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Accordion>
    </Section>
  );
}

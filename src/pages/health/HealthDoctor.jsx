import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Kw from "../../components/ui/keyword";

export default function HealthDoctor() {
  const t = useT();
  return (
    <Sec title="Seeing a Doctor" sub="How to get medical attention">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>For non-urgent concerns, fill out an application on paper/tablet or contact the guard. Your unit's family nurse reviews your case first (available on weekdays, permanently on-site). She refers you to the <Kw word="family doctor">family doctor</Kw> (general practitioner) if needed.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>The family doctor visits at least once a week and can refer you to specialists. Specialist wait times may take months, similar to outside prison. You can view your digital health record through your doctor — previous diagnoses and prescriptions remain.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7 }}>While in an open prison, you continue seeing the doctor in the closed prison. For emergencies (severe pain, bleeding, breathing difficulties), contact the unit guard immediately — 24/7 availability. You may be transported to an outside hospital.</p>
    </Sec>
  );
}

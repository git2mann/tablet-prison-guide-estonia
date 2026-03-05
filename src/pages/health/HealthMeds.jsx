import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";

export default function HealthMeds() {
  const t = useT();
  return (
    <Sec title="Medication Rules" sub="How medicines are managed">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Medications are distributed by the guard team, usually twice daily (morning and evening). Psychotropic medications are given by a medical professional and must be taken in their presence. Shared medications must be swallowed in front of an officer who may verify.</p>
      <W>Do NOT collect, share, sell, or exchange medications. Taking medication under a false name is prohibited. Violations result in disciplinary action.</W>
      <Tp>You can ask your family doctor how long your treatment is prescribed, when it ends, and whether medications are working. You can request to see the doctor again if needed.</Tp>
    </Sec>
  );
}

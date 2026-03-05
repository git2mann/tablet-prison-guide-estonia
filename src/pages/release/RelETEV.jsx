import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

export default function RelETEV() {
  const t = useT();
  return (
    <Sec title="Electronic Monitoring (ETEV)" sub="Early release with ankle bracelet">
      <Tbl
        headers={["Sentence","ETEV Eligible After"]}
        rows={[
          ["Up to 5 years","1/3 of sentence (min 4 months)"],
          ["Over 5 years","1/2 of sentence (min 4 months)"],
        ]}
      />
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, margin:"10px 0" }}><Kw word="ETEV">ETEV</Kw> allows early release with an ankle bracelet monitoring your location. Duration: 1–12 months. Court decides based on prison's report of your activities and behavior.</p>
      <Acc title="Residence Requirements" open>
        <p>Owner must confirm permission to live there. Must have electricity and mobile coverage. Residence must be lockable. All other adults must agree to the bracelet and equipment installation.</p>
      </Acc>
      <Acc title="How It Works">
        <p>After court approval, you receive a summons. Within 3 working days of release, visit probation officer for rules. They agree on installation day — come to your home, choose a spot, install devices. Your ETEV time starts when devices are active. At the end, officer removes devices.</p>
        <p style={{ marginTop:6 }}>You may only leave home with probation officer's permission for limited activities. A specific schedule is established for when and where you may be.</p>
      </Acc>
      <W>Violating ETEV conditions (leaving without permission, not following schedule) → sentence continues in prison. ETEV time will NOT be deducted from your sentence.</W>
    </Sec>
  );
}

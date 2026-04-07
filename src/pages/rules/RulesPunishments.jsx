import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";

export default function RulesPunishments() {
  const t = useT();
  return (
    <Sec title="Punishments" sub="What penalties can be imposed">
      <Acc title="If Convicted" open>
        <Tbl
          headers={["Punishment","Details"]}
          rows={[
            ["Written reprimand","Formal warning on record"],
            ["Device confiscation","TV, kettle, etc. — up to 45 days"],
            ["Visit deprivation","Short or long-term visits removed"],
            ["Removed from work","Up to 1 month"],
            ["Solitary confinement","Up to 14 days (3 if under 21)"],
          ]}
        />
      </Acc>
      <Acc title="If Arrested">
        <Tbl
          headers={["Punishment","Details"]}
          rows={[
            ["Written reprimand","Formal warning"],
            ["E-shop food ban","No additional food purchases up to 2 months"],
            ["Solitary confinement","Up to 14 days (3 if under 21)"],
          ]}
        />
      </Acc>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginTop:10 }}>Punishments can be assigned with a probation period (1–6 months). If you don't violate rules during that time, the punishment won't be enforced. Multiple solitary sentences must have at least 48 hours between them.</p>
    </Sec>
  );
}

import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Kw from "../../components/ui/keyword";

export default function RulesSolitary() {
  const t = useT();
  return (
    <Sec title="Solitary Confinement" sub="What it means and your rights">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>In <Kw word="solitary confinement">solitary confinement</Kw>: you are alone, wearing solitary clothing, with no personal belongings. The cell is visually monitored. Movement restricted — 1 hour outside per day. Work may be restricted; studying and programs may be suspended.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Visits only with family (long-term may be refused). Phone calls may be restricted. Limited newspapers and books. No television.</p>
      <W>If placed in solitary, your personal items will be stored separately until the period ends.</W>
    </Sec>
  );
}

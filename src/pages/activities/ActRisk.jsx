import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Acc from "../../components/ui/Accordion";
import Tp from "../../components/ui/Tip";
import Kw from "../../components/ui/keyword";

export default function ActRisk() {
  const t = useT();
  return (
    <Sec title="Risk Assessment & ITK" sub="Your personal action plan">
      <Card style={{ borderLeft:`3px solid ${t.blue}`, marginBottom:14 }}>
        <p style={{ fontSize:16, color:t.dim, lineHeight:1.7 }}><Kw word="reintegration">Reintegration</Kw> includes social programs, education, work, addiction treatment, counseling, maintaining relationships, and obtaining documents/services before release.</p>
      </Card>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>A <Kw word="risk assessment">risk assessment</Kw> evaluates re-offending likelihood through an interview exploring your life comprehensively — financial problems, addiction, conflicts. Information is also collected from court decisions, criminal records, employment registers, and specialists.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Risk assessment is conducted for sentences longer than 1 year, upon arrival and when deciding early release. Your <Kw word="ITK">ITK</Kw> is then compiled — outlining needs, activities, and dates for open prison or early release eligibility.</p>
      <Acc title="What Affects Your Score">
        <p><strong style={{ color:t.text }}>Based on history:</strong> crime severity, whether you've been wanted/evaded, previous criminal behavior, substance problems.</p>
        <p style={{ marginTop:6 }}><strong style={{ color:t.text }}>During sentence:</strong> learning/working, program participation, behavior (with staff and inmates), rule compliance, thinking and reflection.</p>
        <p style={{ marginTop:6 }}><strong style={{ color:t.text }}>For early release:</strong> ITK completion, danger to others outside, programs completed, current disciplinary record.</p>
      </Acc>
      <Acc title="ITK Details">
        <p>ITK is prepared with your <Kw word="contact person">contact person</Kw> — you can have a say. Reviewed monthly, updated yearly. If your sentence is under 1 year, no ITK is created, but you may still participate in activities if spots are available.</p>
        <Tp>ITK completion significantly matters when court discusses early release or open prison placement.</Tp>
      </Acc>
    </Sec>
  );
}

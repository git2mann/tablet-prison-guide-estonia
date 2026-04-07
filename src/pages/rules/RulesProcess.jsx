import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Acc from "../../components/ui/Accordion";
import Tp from "../../components/ui/Tip";
import Kw from "../../components/ui/keyword";

export default function RulesProcess() {
  const t = useT();
  return (
    <Sec title="Violation Process" sub="What happens when rules are broken">
      <Card style={{ borderLeft:`3px solid ${t.accent}`, marginBottom:14 }}>
        <p style={{ fontSize:16, color:t.dim, lineHeight:1.7 }}>By adhering to rules, you have more rights. Violations may delay <Kw word="open prison">open prison</Kw> or early release. Penalties generally last 1 year but can end earlier for good behavior. Both actions and inactions count (e.g. not participating in work).</p>
      </Card>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>First, the officer informs you the behavior is inappropriate and orders you to stop. If serious, your participation in the activity is terminated. A report goes to your <Kw word="contact person">contact person</Kw>, who asks for your explanation and decides whether to respond with a conversation or initiate <Kw word="disciplinary proceedings">disciplinary proceedings</Kw>.</p>
      <Acc title="Disciplinary Proceedings">
        <p>Detailed explanations taken from all parties and witnesses. Evidence collected (video, photos). Everything recorded. Decision and punishment determined considering your previous behavior, prior violations, your attitude toward the current violation, and your outlook on avoiding future violations.</p>
        <Tp>Take time to read the decision calmly. It states how to contest it if you wish.</Tp>
      </Acc>
    </Sec>
  );
}

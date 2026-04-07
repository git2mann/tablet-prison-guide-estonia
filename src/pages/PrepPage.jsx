import { useT } from "../context/ThemeContext";
import Sec from "../components/ui/Section";
import Card from "../components/ui/Card";
import W from "../components/ui/Warning";
import Tp from "../components/ui/Tip";
import Kw from "../components/ui/keyword";

export default function PrepPage() {
  const t = useT();
  return (
    <Sec title="Release Preparation" sub="Start a few months in advance">
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:10, marginBottom:14 }}>
        {[
          ["📄","Documents & Bank","Check ID/driver's license validity — renew in prison. Verify bank account for release funds.", t.blue],
          ["🏠","Housing & Municipality","Contact local municipality for residence/temporary accommodation. They ensure initial social assistance.", t.green],
          ["💊","Healthcare","Ensure treatment plan continues. Find post-release family doctor. Inform prison medical staff for digital prescriptions.", t.red],
          ["💰","Finances & Debt","Receive release fund upon release. Create debt repayment plan and agree on schedule with bailiff.", t.accent],
          ["💼","Employment","Call Unemployment Insurance Fund before release. Register immediately after (can't register while in prison). Apply for work ability assessment if needed.", t.purple],
          ["👥","Support Network","Contact family for primary support. Your contact person and medical professional can assist with applications.", t.pink],
        ].map(([ic, ti, d, c]) => (
          <Card key={ti} style={{ borderLeft:`3px solid ${c}` }}>
            <div style={{ fontSize:22, marginBottom:6 }}>{ic}</div>
            <div style={{ fontWeight:700, fontSize:16, color:t.text, marginBottom:4 }}>{ti}</div>
            <div style={{ fontSize:15, color:t.dim, lineHeight:1.6 }}>{d}</div>
          </Card>
        ))}
      </div>
      <W>Return all prison property upon release. Personal items must not be left behind. If you lack suitable clothing, the prison will provide it.</W>
      <Tp>Meet with your <Kw word="contact person">contact person</Kw> before release — they'll advise on all preparation steps.</Tp>
    </Sec>
  );
}

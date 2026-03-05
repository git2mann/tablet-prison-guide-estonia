import { useT } from "../context/ThemeContext";
import Sec from "../components/ui/Section";
import Card from "../components/ui/Card";

export default function JourneyPage() {
  const t = useT();
  return (
    <Sec title="My Journey" sub="Your prison journey at a glance">
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))", gap:10, marginBottom:20 }}>
        {[
          { p:"ARRIVAL", c:t.accent, items:["Search & documents","Health check","Basic needs","Personal account"] },
          { p:"DAILY LIFE", c:t.blue, items:["Schedule & count","Phone, letters","Eating, e-shop","Hygiene, movement"] },
          { p:"REINTEGRATION", c:t.purple, items:["Risk assessment & ITK","Social programs","Education","Employment"] },
          { p:"FREEDOM PATH", c:t.green, items:["Open prison","ETEV (electronic)","TEV (probation)"] },
          { p:"PREPARATION", c:t.teal, items:["Documents & ID","Housing","Employment","Healthcare","Support network"] },
        ].map(s => (
          <Card key={s.p} style={{ borderTop:`3px solid ${s.c}` }}>
            <div style={{ fontWeight:700, fontSize:11, color:s.c, marginBottom:8, letterSpacing:1.5 }}>{s.p}</div>
            {s.items.map(i => (
              <div key={i} style={{ fontSize:12, color:t.dim, marginBottom:3, display:"flex", gap:6, alignItems:"center" }}>
                <span style={{ width:3, height:3, borderRadius:"50%", background:s.c, flexShrink:0 }}/>
                {i}
              </div>
            ))}
          </Card>
        ))}
      </div>
      <Card>
        <h3 style={{ fontWeight:700, fontSize:16, color:t.text, marginBottom:14 }}>Important Dates</h3>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          {["Arrival date","Open prison (AVO) date from ITK","AVO date from sentence","ETEV date","TEV date","Release date"].map(d => (
            <div key={d} style={{ padding:12, background:t.card2, borderRadius:8, border:`1px solid ${t.border}`, fontSize:15, color:t.dim }}>📅 {d}</div>
          ))}
        </div>
      </Card>
    </Sec>
  );
}

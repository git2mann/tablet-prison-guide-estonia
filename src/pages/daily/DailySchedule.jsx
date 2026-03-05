import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailySchedule() {
  const t = useT();
  return (
    <Sec title="Schedule & Count" sub="Your daily structure from 06:00 to 22:00">
      <div style={{ display:"grid", gap:6, marginBottom:14 }}>
        {[
          ["06:00","Wake up — electricity on, tidy cell, hygiene"],
          ["06:20–07:15","Breakfast served, morning count, medication"],
          ["08:00–17:00","Activities — study, work, programs, hobbies"],
          ["11:30–12:30","Lunch — brought to cell or at workplace"],
          ["17:30–18:30","Dinner — evening count, medication"],
          ["22:00","Night rest — electricity off (exception: unit manager may allow until midnight)"],
        ].map(([ti, d]) => (
          <div key={ti} style={{ display:"flex", gap:14, alignItems:"center", padding:"10px 14px", background:t.card2, borderRadius:8, border:`1px solid ${t.border}` }}>
            <span style={{ fontFamily:"monospace", fontSize:12, color:t.accent, fontWeight:600, minWidth:100 }}>{ti}</span>
            <span style={{ fontSize:15, color:t.dim }}>{d}</span>
          </div>
        ))}
      </div>
      <W>You must be in your cell when the schedule requires it. Schedule changes will be communicated via sound system, cell terminal, or officer.</W>
      <Acc title="Roll Call (Count) — What to Do">
        <p>You'll be notified 10 minutes before. During the <Kw word="count">count</Kw>:</p>
        <p style={{ marginTop:6 }}>Be properly dressed with your <Kw word="name tag">name tag</Kw> visible. Stand in front of your made bed. Keep hands visible — don't lean or sit. Turn off all devices or set to silent. If asked, clearly state your name. Don't eat, read, talk, or disturb the count.</p>
        <Tp>Counts happen morning and evening in your cell. If you're at work, count happens there. During long-term meetings, your presence is checked at mealtime instead.</Tp>
      </Acc>
    </Sec>
  );
}

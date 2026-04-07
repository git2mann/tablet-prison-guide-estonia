import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Kw from "../../components/ui/keyword";

export default function DailyAccount() {
  const t = useT();
  return (
    <Sec title="Personal Account" sub="How your money works in prison">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:12 }}>A <Kw word="personal account">personal account</Kw> will be opened for you. Your salary, money from family, and all other funds go here. You can check your balance on the tablet.</p>
      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 }}>
        {[
          ["No debts","70% → release fund · 30% → yours", t.green],
          ["Has debts","50% → debts · 20% → release fund · 30% → yours", t.red],
        ].map(([l, d, c]) => (
          <div key={l} style={{ flex:1, minWidth:200, padding:14, borderRadius:10, background:t.card2, border:`1px solid ${t.border}`, borderLeft:`3px solid ${c}` }}>
            <div style={{ fontWeight:600, fontSize:12, color:c, marginBottom:4 }}>{l}</div>
            <div style={{ fontSize:15, color:t.dim }}>{d}</div>
          </div>
        ))}
      </div>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>The <Kw word="release fund">release fund</Kw> maximum is 3× Estonian minimum wage. Once full, you can use or keep saving. Money from family is split the same way — e.g. if someone sends €12, you can use €3.60.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7 }}>You can make bank transfers from your account (e.g. state fees) and pay for services (laundry, copies). You must also pay for electricity for devices in your cell.</p>
      <W>Plan e-shop purchases carefully — ensure you have enough for mandatory expenses like electricity.</W>
    </Sec>
  );
}

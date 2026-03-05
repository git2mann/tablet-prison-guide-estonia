import { useState } from "react";
import { useT } from "../context/ThemeContext";
import Sec from "../components/ui/Section";
import Card from "../components/ui/Card";
import Tbl from "../components/ui/Table";
import Acc from "../components/ui/Accordion";
import Kw from "../components/ui/keyword";

export default function CalcPage() {
  const t = useT();
  const [amount, setAmount] = useState("");
  const [hasDebts, setHasDebts] = useState(true);
  const [fundFull, setFundFull] = useState(false);

  const val = parseFloat(amount) || 0;
  const debtPct = hasDebts ? 0.5 : 0;
  const releasePct = hasDebts ? 0.2 : 0.7;
  const releaseAmt = fundFull ? 0 : val * releasePct;
  const debtAmt = val * debtPct;
  const freeAmt = fundFull ? val - debtAmt : val * 0.3;
  const bars = [
    ...(hasDebts ? [{ label:"Debt repayment", amt:debtAmt, color:t.red }] : []),
    { label:"Release fund", amt:releaseAmt, color:t.blue },
    { label:"Available to use", amt:freeAmt, color:t.green },
  ];

  return (
    <Sec title="Money Calculator" sub="See how your income is split">
      <Card style={{ marginBottom:14 }}>
        <p style={{ fontSize:15.5, color:t.dim, lineHeight:1.7 }}>Money in your <Kw word="personal account">personal account</Kw> is automatically divided. The split depends on debts and whether your <Kw word="release fund">release fund</Kw> is full.</p>
      </Card>
      <Card style={{ marginBottom:14 }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:t.accent, marginBottom:14 }}>Configure</div>
        <div style={{ marginBottom:16 }}>
          <label style={{ fontSize:15, color:t.dim, display:"block", marginBottom:6 }}>Amount received (€)</label>
          <input type="number" min="0" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 12.00"
            style={{ width:"100%", maxWidth:260, padding:"10px 14px", borderRadius:8, border:`1px solid ${t.border}`, background:t.card2, color:t.text, fontSize:16, fontWeight:600, outline:"none", fontFamily:"inherit" }}/>
        </div>
        <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
          <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }}>
            <input type="checkbox" checked={hasDebts} onChange={e => setHasDebts(e.target.checked)} style={{ width:18, height:18, accentColor:t.accent }}/>
            <span style={{ fontSize:15, color:t.dim }}>I have outstanding debts</span>
          </label>
          <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }}>
            <input type="checkbox" checked={fundFull} onChange={e => setFundFull(e.target.checked)} style={{ width:18, height:18, accentColor:t.accent }}/>
            <span style={{ fontSize:15, color:t.dim }}>Release fund already full</span>
          </label>
        </div>
      </Card>
      {val > 0 && (
        <Card style={{ marginBottom:14 }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:t.accent, marginBottom:16 }}>Breakdown — €{val.toFixed(2)}</div>
          <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap" }}>
            {bars.filter(b => b.amt > 0).map(b => (
              <div key={b.label} style={{ flex:1, minWidth:140, padding:14, borderRadius:10, background:t.card2, border:`1px solid ${t.border}`, borderLeft:`3px solid ${b.color}` }}>
                <div style={{ fontSize:24, fontWeight:700, color:b.color }}>€{b.amt.toFixed(2)}</div>
                <div style={{ fontSize:12, color:t.dim, marginTop:2 }}>{b.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background:t.card2, borderRadius:8, overflow:"hidden", height:28, display:"flex", border:`1px solid ${t.border}` }}>
            {bars.filter(b => b.amt > 0).map(b => (
              <div key={b.label} style={{ width:`${(b.amt / val) * 100}%`, background:b.color, height:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"#000", transition:"width 0.3s", minWidth:28 }}>
                {((b.amt / val) * 100).toFixed(0)}%
              </div>
            ))}
          </div>
          <div style={{ marginTop:16 }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:t.accent, marginBottom:10 }}>Monthly Projection</div>
            <Tbl
              headers={["After", ...(hasDebts ? ["Debt paid"] : []), "Release fund", "Available"]}
              rows={[1, 3, 6, 12].map(m => [`${m} mo`, ...(hasDebts ? [`€${(debtAmt * m).toFixed(2)}`] : []), `€${(releaseAmt * m).toFixed(2)}`, `€${(freeAmt * m).toFixed(2)}`])}
            />
            <p style={{ fontSize:11, color:t.dim, opacity:0.6 }}>* Simplified projection. Actual amounts vary with release fund cap and debt changes.</p>
          </div>
        </Card>
      )}
      <Acc title="How does the split work?" open={val === 0}>
        <Tbl
          headers={["Situation","Debts","Release Fund","Available"]}
          rows={[
            ["No debts","—","70%","30%"],
            ["Has debts","50%","20%","30%"],
            ["Fund full, no debts","—","—","100%"],
            ["Fund full, has debts","50%","—","50%"],
          ]}
        />
      </Acc>
    </Sec>
  );
}

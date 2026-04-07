import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Kw from "../../components/ui/keyword";

export default function ArrivalNeeds() {
  const t = useT();
  return (
    <Sec title="Basic Needs" sub="What you receive upon arrival">
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(170px,1fr))", gap:8, marginBottom:14 }}>
        {[
          ["📞","Phone card (€1 credit)"],
          ["🆔","Personal ID number"],
          ["🧴","Hygiene pack (soap, toothbrush, razor)"],
          ["👕","Prison clothing (jacket, pants, T-shirt)"],
          ["👟","Shoes (if you don't have any)"],
          ["🛏️","Bedding, pillow & towel"],
          ["🍽️","Eating utensils"],
        ].map(([ic, tx]) => (
          <div key={tx} style={{ display:"flex", gap:8, padding:"10px 12px", background:t.card2, borderRadius:8, border:`1px solid ${t.border}`, fontSize:15, alignItems:"center", color:t.dim }}>
            <span style={{ fontSize:18 }}>{ic}</span>{tx}
          </div>
        ))}
      </div>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>A <Kw word="personal account">personal account</Kw> will be created for you — the officer or <Kw word="contact person">contact person</Kw> will provide the account number. A <Kw word="phone card">phone card</Kw> with €1 credit (~10–20 min) will be issued so you can call loved ones.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7 }}>Cash is not allowed in prison. Personal clothing is not allowed for convicts (arrested persons may wear their own). There are strict rules and a daily schedule — familiarize yourself with them in the following sections.</p>
    </Sec>
  );
}

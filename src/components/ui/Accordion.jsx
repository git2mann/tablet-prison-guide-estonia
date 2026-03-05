import { useState } from "react";
import { useT } from "../../context/ThemeContext";

export default function Acc({ title, children, open: d = false }) {
  const [o, setO] = useState(d);
  const t = useT();
  return (
    <div style={{ background:t.card, border:`1px solid ${o ? t.accentBorder : t.border}`, borderRadius:12, marginBottom:8, overflow:"hidden", transition:"border-color 0.2s" }}>
      <button onClick={() => setO(!o)} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"18px 20px", background:"none", border:"none", cursor:"pointer", fontSize:16, fontWeight:600, color:t.text, textAlign:"left", fontFamily:"inherit" }}>
        <span style={{ flex:1 }}>{title}</span>
        <span style={{ transform: o ? "rotate(180deg)" : "", transition:"0.2s", color:t.dim, fontSize:14 }}>▾</span>
      </button>
      {o && <div style={{ padding:"0 20px 20px", lineHeight:1.75, color:t.dim, fontSize:15 }}>{children}</div>}
    </div>
  );
}

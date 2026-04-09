import { useState } from "react";
import { useT } from "../../context/ThemeContext";

export default function Acc({ title, children, open: d = false }) {
  const [o, setO] = useState(d);
  const t = useT();
  return (
    <div className="tedi-card" style={{ background:t.card, border:`1px solid ${o ? t.accentBorder : t.border}`, borderRadius:12, marginBottom:8, overflow:"hidden", transition:"border-color 0.2s" }}>
      <button className="tedi-large-btn tedi-touch" onClick={() => setO(!o)} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"1.1rem 1.2rem", background:"none", border:"none", cursor:"pointer", fontSize:"1rem", fontWeight:600, color:t.text, textAlign:"left", fontFamily:"inherit" }}>
        <span style={{ flex:1 }}>{title}</span>
        <span style={{ transform: o ? "rotate(180deg)" : "", transition:"0.2s", color:t.dim, fontSize:"0.9rem" }}>▾</span>
      </button>
      {o && <div style={{ padding:"0 1.2rem 1.2rem", lineHeight:1.75, color:t.dim, fontSize:"1rem" }}>{children}</div>}
    </div>
  );
}

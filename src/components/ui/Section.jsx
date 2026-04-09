import { useT } from "../../context/ThemeContext";

export default function Sec({ title, sub, children }) {
  const t = useT();
  return (
    <div className="tedi-section" style={{ marginBottom:36 }}>
      {/* Tablet-first: Section image/animation placeholder */}
      <div style={{ width:"100%", height:80, background:"#f2f2f2", borderRadius:10, marginBottom:18, display:"flex", alignItems:"center", justifyContent:"center", color:t.dim, fontSize:18 }}>
        [Section Img/Anim]
      </div>
      <h2 className="tedi-header tedi-accent" style={{ fontSize:"clamp(1.5rem, 3vw, 2rem)", fontWeight:700, color:t.accent, marginBottom:4, letterSpacing:-0.3 }}>{title}</h2>
      {sub && <p style={{ fontSize:"1rem", color:t.dim, marginBottom:16 }}>{sub}</p>}
      {!sub && <div style={{ height:14 }} />}
      {children}
    </div>
  );
}

import { useT } from "../../context/ThemeContext";

export default function StatCard({ value, label, color }) {
  const t = useT();
  color = color || t.accent;
  return (
    <div className="tedi-card" style={{ background:t.card, borderRadius:12, padding:"18px 16px", border:`1px solid ${t.border}`, flex:1, minWidth:130 }}>
      <div className="tedi-header" style={{ fontSize:"clamp(1.5rem, 2.5vw, 2rem)", fontWeight:700, color, letterSpacing:-1 }}>{value}</div>
      <div className="tedi-dim" style={{ fontSize:"0.75rem", color:t.dim, fontWeight:500, letterSpacing:0.5, textTransform:"uppercase", marginTop:2 }}>{label}</div>
    </div>
  );
}

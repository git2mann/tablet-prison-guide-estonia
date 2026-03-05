import { useT } from "../../context/ThemeContext";

export default function StatCard({ value, label, color }) {
  const t = useT();
  color = color || t.accent;
  return (
    <div style={{ background:t.card, borderRadius:12, padding:"18px 16px", border:`1px solid ${t.border}`, flex:1, minWidth:130 }}>
      <div style={{ fontSize:28, fontWeight:700, color, letterSpacing:-1 }}>{value}</div>
      <div style={{ fontSize:11, color:t.dim, fontWeight:500, letterSpacing:0.5, textTransform:"uppercase", marginTop:2 }}>{label}</div>
    </div>
  );
}

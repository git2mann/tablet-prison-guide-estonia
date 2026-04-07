import { useT } from "../../context/ThemeContext";

export default function StatCard({ value, label, color, icon }) {
  const t = useT();
  const c = color || t.accent;
  
  return (
    <div style={{ 
      background: t.card, 
      borderRadius: t.radius.md, 
      padding: "20px", 
      border: `1px solid ${t.border}`, 
      flex: 1, 
      minWidth: 160,
      boxShadow: `0 2px 10px ${t.shadow}`,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ 
          fontSize: 32, 
          fontWeight: 800, 
          color: c, 
          letterSpacing: -1.5,
          lineHeight: 1 
        }}>
          {value}
        </div>
        {icon && <span style={{ fontSize: 24, opacity: 0.8 }}>{icon}</span>}
      </div>
      <div style={{ 
        fontSize: 12, 
        color: t.dim, 
        fontWeight: 700, 
        letterSpacing: 0.8, 
        textTransform: "uppercase" 
      }}>
        {label}
      </div>
    </div>
  );
}

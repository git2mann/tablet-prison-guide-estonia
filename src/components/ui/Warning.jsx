import { useT } from "../../context/ThemeContext";
import { dark } from "../../constants/theme";

export default function W({ children }) {
  const t = useT();
  return (
    <div className="tedi-card" style={{
      background: t === dark ? "rgba(255,107,107,0.08)" : "rgba(220,53,69,0.06)",
      border: `1px solid ${t === dark ? "rgba(255,107,107,0.2)" : "rgba(220,53,69,0.15)"}`,
      borderRadius:12, padding:"14px 18px", margin:"14px 0", display:"flex", gap:12
    }}>
      <span className="tedi-icon" style={{ fontSize:"1.2rem" }}>⚠️</span>
      <div className="tedi-dim" style={{ fontSize:"1rem", color:t.dim, lineHeight:1.65 }}>{children}</div>
    </div>
  );
}

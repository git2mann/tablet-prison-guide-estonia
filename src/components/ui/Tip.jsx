import { useT } from "../../context/ThemeContext";
import { dark } from "../../constants/theme";

export default function Tp({ children }) {
  const t = useT();
  return (
    <div className="tedi-card" style={{
      background: t === dark ? "rgba(74,222,128,0.06)" : "rgba(45,138,78,0.05)",
      border: `1px solid ${t === dark ? "rgba(74,222,128,0.15)" : "rgba(45,138,78,0.12)"}`,
      borderRadius:12, padding:"14px 18px", margin:"14px 0", display:"flex", gap:12
    }}>
      <span className="tedi-icon" style={{ fontSize:"1.2rem" }}>💡</span>
      <div className="tedi-dim" style={{ fontSize:"1rem", color:t.dim, lineHeight:1.65 }}>{children}</div>
    </div>
  );
}

import { useT } from "../../context/ThemeContext";
import { dark } from "../../constants/theme";

export default function W({ children }) {
  const t = useT();
  return (
    <div style={{
      background: t === dark ? "rgba(255,107,107,0.08)" : "rgba(220,53,69,0.06)",
      border: `1px solid ${t === dark ? "rgba(255,107,107,0.2)" : "rgba(220,53,69,0.15)"}`,
      borderRadius:12, padding:"14px 18px", margin:"14px 0", display:"flex", gap:12
    }}>
      <span style={{ fontSize:20 }}>⚠️</span>
      <div style={{ fontSize:15, color:t.dim, lineHeight:1.65 }}>{children}</div>
    </div>
  );
}

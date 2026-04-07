import { useT } from "../../context/ThemeContext";
import { dark } from "../../constants/theme";

export default function Tp({ children }) {
  const t = useT();
  return (
    <div style={{
      background: t === dark ? "rgba(74,222,128,0.06)" : "rgba(45,138,78,0.05)",
      border: `1px solid ${t === dark ? "rgba(74,222,128,0.15)" : "rgba(45,138,78,0.12)"}`,
      borderRadius:12, padding:"14px 18px", margin:"14px 0", display:"flex", gap:12
    }}>
      <span style={{ fontSize:20 }}>💡</span>
      <div style={{ fontSize:15, color:t.dim, lineHeight:1.65 }}>{children}</div>
    </div>
  );
}

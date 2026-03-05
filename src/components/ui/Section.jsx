import { useT } from "../../context/ThemeContext";

export default function Sec({ title, sub, children }) {
  const t = useT();
  return (
    <div style={{ marginBottom:36 }}>
      <h2 style={{ fontSize:28, fontWeight:700, color:t.accent, marginBottom:4, letterSpacing:-0.3 }}>{title}</h2>
      {sub && <p style={{ fontSize:15, color:t.dim, marginBottom:16 }}>{sub}</p>}
      {!sub && <div style={{ height:14 }} />}
      {children}
    </div>
  );
}

import { useT } from "../../context/ThemeContext";

export default function Card({ children, style = {} }) {
  const t = useT();
  return (
    <div className="tedi-card" style={{ background:t.card, borderRadius:14, padding:24, border:`1px solid ${t.border}`, ...style }}>
      {children}
    </div>
  );
}

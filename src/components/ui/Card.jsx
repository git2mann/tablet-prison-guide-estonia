import { useT } from "../../context/ThemeContext";

export default function Card({ children, style = {}, noPadding = false }) {
  const t = useT();
  return (
    <div style={{ 
      background: t.card, 
      borderRadius: t.radius.lg, 
      padding: noPadding ? 0 : 24, 
      border: `1px solid ${t.border}`,
      boxShadow: `0 2px 8px ${t.shadow}`,
      overflow: "hidden",
      ...style 
    }}>
      {children}
    </div>
  );
}

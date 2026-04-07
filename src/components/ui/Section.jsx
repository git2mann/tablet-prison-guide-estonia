import { useT } from "../../context/ThemeContext";

export default function Sec({ title, sub, children }) {
  const t = useT();
  const isTablet = window.innerWidth < 1024;
  
  return (
    <div style={{ marginBottom: isTablet ? 56 : 48 }}>
      <h2 style={{ 
        fontSize: isTablet ? 36 : 28, 
        fontWeight:800, 
        color:t.text, 
        marginBottom:8, 
        letterSpacing:-0.8,
        display: "flex",
        alignItems: "center",
        gap: 12
      }}>
        <span style={{ width: 6, height: 32, background: t.accent, borderRadius: 4 }} />
        {title}
      </h2>
      {sub && (
        <p style={{ 
          fontSize: isTablet ? 17 : 16, 
          color:t.dim, 
          marginBottom:24, 
          lineHeight:1.6,
          maxWidth: 700 
        }}>{sub}</p>
      )}
      {!sub && <div style={{ height: 16 }} />}
      {children}
    </div>
  );
}

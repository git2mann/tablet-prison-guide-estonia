import { useT } from "../../context/ThemeContext";

export default function Tbl({ headers, rows }) {
  const t = useT();
  
  return (
    <div style={{ 
      overflowX: "auto", 
      margin: "20px 0", 
      borderRadius: t.radius.lg, 
      border: `1px solid ${t.border}`, 
      boxShadow: `0 4px 12px ${t.shadow}`,
      background: t.card
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ 
                background: t.card2, 
                color: t.accent, 
                padding: "16px 20px", 
                textAlign: "left", 
                fontWeight: 800, 
                fontSize: 12, 
                letterSpacing: 1.2, 
                textTransform: "uppercase", 
                borderBottom: `2px solid ${t.border}` 
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ 
              background: i % 2 === 0 ? "transparent" : t.card2,
              transition: "background 0.15s ease" 
            }}>
              {r.map((c, j) => (
                <td key={j} style={{ 
                  padding: "16px 20px", 
                  borderBottom: i === rows.length - 1 ? "none" : `1px solid ${t.border}`, 
                  color: t.text,
                  lineHeight: 1.5,
                  fontWeight: 500
                }}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

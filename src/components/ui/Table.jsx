import { useT } from "../../context/ThemeContext";
import { dark } from "../../constants/theme";

export default function Tbl({ headers, rows }) {
  const t = useT();
  return (
    <div className="tedi-card" style={{ overflowX:"auto", margin:"12px 0", borderRadius:10, border:`1px solid ${t.border}`, overflow:"hidden" }}>
      <table className="tedi-table" style={{ width:"100%", borderCollapse:"collapse", fontSize:15 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="tedi-accent" style={{ background:t.card2, color:t.accent, padding:"1rem 1.2rem", textAlign:"left", fontWeight:600, fontSize:"0.85rem", letterSpacing:1, textTransform:"uppercase", borderBottom:`1px solid ${t.border}` }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className="tedi-dim" style={{ padding:"1rem 1.2rem", borderBottom:`1px solid ${t.border}`, color:t.dim, background: i % 2 === 0 ? "transparent" : (t === dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)") }}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

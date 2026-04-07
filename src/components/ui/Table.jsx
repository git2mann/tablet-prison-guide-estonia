import { useT } from "../../context/ThemeContext";
import { dark } from "../../constants/theme";

export default function Tbl({ headers, rows }) {
  const t = useT();
  return (
    <div style={{ overflowX:"auto", margin:"12px 0", borderRadius:10, border:`1px solid ${t.border}`, overflow:"hidden" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:15 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ background:t.card2, color:t.accent, padding:"12px 18px", textAlign:"left", fontWeight:600, fontSize:12, letterSpacing:1, textTransform:"uppercase", borderBottom:`1px solid ${t.border}` }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} style={{ padding:"12px 18px", borderBottom:`1px solid ${t.border}`, color:t.dim, background: i % 2 === 0 ? "transparent" : (t === dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)") }}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

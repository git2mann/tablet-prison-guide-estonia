import { useState, useEffect } from "react";
import { useT } from "../../context/ThemeContext";
import NAV from "../../constants/navigation";

export default function Sidebar({ active, onNav, collapsed, onToggle, isDark, toggleTheme, isTablet, drawerOpen }) {
  const t = useT();
  const [expanded, setExpanded] = useState({});
  const [now, setNow] = useState(new Date());
  const mainId = active.split(".")[0];
  
  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  useEffect(() => {
    const m = active.split(".")[0];
    if (m !== active) setExpanded(p => ({ ...p, [m]: true }));
  }, [active]);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = now.toLocaleDateString("en-GB", { weekday:"short", day:"numeric", month:"short" });
  const timeStr = now.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit" });

  const navStyle = isTablet
    ? {
        position:"fixed", top:0, left:0, height:"100vh", zIndex:99,
        width:320,
        transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
        transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        background:t.card, display:"flex", flexDirection:"column",
        borderRight:`1px solid ${t.border}`,
        boxShadow: drawerOpen ? `12px 0 40px ${t.shadowStrong}` : "none",
      }
    : {
        width: collapsed ? 80 : 280,
        background:t.card, display:"flex", flexDirection:"column",
        transition:"width 0.3s cubic-bezier(0.4, 0, 0.2, 1)", overflow:"hidden", flexShrink:0,
        borderRight:`1px solid ${t.border}`,
      };

  const showFull = !collapsed || isTablet;

  return (
    <nav style={navStyle}>
      {/* Header */}
      <div style={{ 
        padding: isTablet ? "24px 20px" : "20px", 
        display:"flex", alignItems:"center", gap:16, 
        borderBottom:`1px solid ${t.border}`, 
        minHeight: isTablet ? 90 : 80 
      }}>
        <div style={{ 
          width: isTablet ? 48 : 40, height: isTablet ? 48 : 40, 
          borderRadius: 14, background:t.accent, 
          display:"flex", alignItems:"center", justifyContent:"center", 
          fontSize: isTablet ? 24 : 20, flexShrink:0, color:t.accentText, fontWeight:800,
          boxShadow: `0 4px 12px ${t.accentDim}`
        }}>P</div>
        {showFull && (
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontWeight:800, fontSize: isTablet ? 18 : 16, color:t.text, letterSpacing:-0.2 }}>PRISON GUIDE</div>
            <div style={{ fontSize: isTablet ? 12 : 11, color:t.dim, fontWeight: 600, letterSpacing:1, textTransform:"uppercase", marginTop: 2 }}>Estonia · 2025</div>
          </div>
        )}
        {isTablet && (
          <button onClick={onToggle} style={{ 
            background:t.hover, border:"none", borderRadius:12, color:t.text, 
            cursor:"pointer", fontSize:20, width:44, height:44, display:"flex", 
            alignItems:"center", justifyContent:"center"
          }}>✕</button>
        )}
      </div>

      {/* Clock */}
      {showFull && (
        <div style={{ padding: "16px 20px", borderBottom:`1px solid ${t.border}`, background:t.card2 }}>
          <div style={{ display:"flex", alignItems:"baseline", gap:8 }}>
            <div style={{ fontSize: 24, fontWeight:800, color:t.text, letterSpacing:-0.5 }}>{timeStr}</div>
            <div style={{ fontSize: 13, color:t.dim, fontWeight: 600 }}>{dateStr}</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div style={{ flex:1, padding: "16px 12px", overflowY:"auto", scrollbarWidth:"none" }}>
        {NAV.map(n => {
          const isMain = mainId === n.id;
          const hasSub = n.sub && n.sub.length > 0;
          const isExp = expanded[n.id];
          
          return (
            <div key={n.id} style={{ marginBottom: 4 }}>
              <button
                className="tap-active"
                onClick={() => { 
                  if (hasSub && showFull) { 
                    toggle(n.id); 
                    if (!isExp) onNav(n.sub[0].id);
                  } else {
                    onNav(n.id);
                  }
                }}
                style={{
                  width:"100%", display:"flex", alignItems:"center", gap:14,
                  padding: isTablet ? "14px 16px" : "12px 16px",
                  background: isMain ? t.accentDim : "transparent", 
                  border:"none", borderRadius: 12,
                  cursor:"pointer", color: isMain ? t.text : t.dim, 
                  fontSize: isTablet ? 16 : 15,
                  fontWeight: isMain ? 700 : 500, 
                  transition:"all 0.2s",
                  textAlign:"left",
                  minHeight: isTablet ? 56 : 48,
                }}>
                <span style={{ 
                  fontSize: isTablet ? 22 : 18, 
                  width:32, textAlign:"center", 
                  color: isMain ? t.accent : t.dim 
                }}>{n.icon}</span>
                {showFull && <span style={{ flex:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{n.label}</span>}
                {showFull && hasSub && (
                  <span style={{ 
                    fontSize:14, transform: isExp ? "rotate(180deg)" : "", 
                    transition:"0.3s ease", color:t.dim, fontWeight: 800 
                  }}>▾</span>
                )}
              </button>
              
              {showFull && hasSub && isExp && (
                <div style={{ 
                  paddingLeft: 24, margin: "4px 0 8px 16px", 
                  borderLeft: `2px solid ${t.border}` 
                }}>
                  {n.sub.map(s => (
                    <button 
                      key={s.id} 
                      onClick={() => onNav(s.id)} 
                      className="tap-active"
                      style={{
                        width:"100%", padding: "10px 16px", minHeight: isTablet ? 48 : 40,
                        background: active === s.id ? t.hover : "transparent",
                        border:"none", borderRadius: 10, cursor:"pointer",
                        color: active === s.id ? t.text : t.dim, 
                        fontSize: isTablet ? 15 : 14,
                        fontWeight: active === s.id ? 700 : 500, 
                        textAlign:"left",
                        marginBottom:2, transition:"all 0.15s",
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer / Theme Toggle */}
      <div style={{ padding: "16px", borderTop:`1px solid ${t.border}`, display:"flex", gap:10 }}>
        <button 
          className="tap-active"
          onClick={toggleTheme} 
          style={{ 
            flex:1, height: 50, background:t.card2, 
            border:`1px solid ${t.border}`, borderRadius: 12, 
            color:t.text, cursor:"pointer", fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10
          }}
        >
          {isDark ? "☀️" : "🌙"}
          {showFull && <span style={{ fontSize: 14, fontWeight: 700 }}>{isDark ? "LIGHT" : "DARK"}</span>}
        </button>
        {!isTablet && (
          <button 
            className="tap-active"
            onClick={onToggle} 
            style={{ 
              width: 50, height: 50, background:t.card2, 
              border:`1px solid ${t.border}`, borderRadius: 12, 
              color:t.dim, cursor:"pointer", fontSize:20
            }}
          >
            {collapsed ? "›" : "‹"}
          </button>
        )}
      </div>
    </nav>
  );
}

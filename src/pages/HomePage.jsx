import { useT } from "../context/ThemeContext";
import { dark } from "../constants/theme";
import KW from "../constants/keywords";
import NAV from "../constants/navigation";
import Sec from "../components/ui/Section";
import Card from "../components/ui/Card";
import Kw from "../components/ui/keyword";

export default function HomePage({ onNav }) {
  const t = useT();
  const isTablet = window.innerWidth < 1024;
  
  return (
    <>
      {/* Hero Section */}
      <div style={{ 
        background: t === dark 
          ? `linear-gradient(135deg, ${t.card}, ${t.card2})` 
          : `linear-gradient(135deg, #ffffff, #fdfbf0)`, 
        borderRadius: t.radius.xl, 
        padding: isTablet ? "40px 28px" : "60px 48px", 
        marginBottom: 48, 
        border: `1px solid ${t.border}`, 
        position: "relative", 
        overflow: "hidden",
        boxShadow: `0 8px 32px ${t.shadow}`
      }}>
        <div style={{ 
          position: "absolute", 
          top: -100, 
          right: -100, 
          width: 300, 
          height: 300, 
          borderRadius: "50%", 
          background: t.accentDim, 
          filter: "blur(80px)",
          opacity: 0.6
        }}/>
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ 
            fontSize: 12, 
            fontWeight: 800, 
            letterSpacing: 4, 
            textTransform: "uppercase", 
            color: t.accent, 
            marginBottom: 20 
          }}>
            Estonian Prison Service · 2025
          </div>
          <h1 style={{ 
            fontSize: isTablet ? "clamp(40px, 8vw, 64px)" : 56, 
            fontWeight: 800, 
            lineHeight: 1.1, 
            color: t.text, 
            marginBottom: 24, 
            letterSpacing: -1.5 
          }}>
            Time in Prison<br/>
            <span style={{ 
              background: `linear-gradient(to right, ${t.accent}, #ffaa00)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              My Steps to Freedom
            </span>
          </h1>
          <p style={{ 
            fontSize: isTablet ? 19 : 18, 
            color: t.dim, 
            maxWidth: 600, 
            lineHeight: 1.6, 
            marginBottom: 32,
            fontWeight: 500
          }}>
            Your complete guide to rights, obligations, daily life, and the path back to society. 
            Developed with inmates from Tartu, Tallinn, and Viru Prisons.
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <button 
              className="tap-active"
              onClick={() => onNav("prep")}
              style={{
                padding: "16px 32px",
                background: t.accent,
                color: t.accentText,
                border: "none",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: `0 4px 12px ${t.accentDim}`
              }}
            >
              GET STARTED
            </button>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 12, 
              padding: "0 16px",
              fontSize: 14,
              color: t.dim,
              fontWeight: 600
            }}>
              <span style={{ fontSize: 20 }}>💡</span>
              Tap underlined words for help
            </div>
          </div>
        </div>
      </div>

      {/* Main Sections Grid */}
      <Sec title="Guide Sections" sub="Select a topic to explore rights and daily life in prison.">
        <div className="pg-grid">
          {NAV.filter(n => n.id !== "home").map(n => (
            <button 
              key={n.id} 
              className="hover-lift tap-active"
              onClick={() => onNav(n.sub ? n.sub[0].id : n.id)}
              style={{ 
                background: t.card, 
                border: `1px solid ${t.border}`, 
                borderRadius: t.radius.lg, 
                padding: isTablet ? 28 : 24, 
                cursor: "pointer", 
                textAlign: "left", 
                transition: "all 0.2s ease", 
                minHeight: isTablet ? 180 : 160,
                boxShadow: `0 4px 12px ${t.shadow}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
              <div>
                <div style={{ 
                  fontSize: 32, 
                  marginBottom: 16, 
                  background: t.accentDim,
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {n.icon}
                </div>
                <div style={{ fontWeight: 800, fontSize: 18, color: t.text, letterSpacing: -0.3 }}>
                  {n.label}
                </div>
              </div>
              {n.sub && (
                <div style={{ 
                  fontSize: 13, 
                  color: t.dim, 
                  marginTop: 12, 
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.5
                }}>
                  {n.sub.length} Topics
                </div>
              )}
            </button>
          ))}
        </div>
      </Sec>

      {/* Key Terms */}
      <Sec title="Glossary" sub="Commonly used terms and their legal or practical meanings.">
        <Card style={{ padding: isTablet ? 32 : 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {Object.keys(KW).slice(0, 15).map(k => (
              <div key={k} style={{ 
                padding: "8px 16px", 
                background: t.hover, 
                borderRadius: 10, 
                border: `1px solid ${t.border}`, 
                fontSize: 15 
              }}>
                <Kw word={k}>{k}</Kw>
              </div>
            ))}
            <div style={{ 
              padding: "8px 16px", 
              color: t.dim, 
              fontSize: 15, 
              fontWeight: 600,
              display: "flex",
              alignItems: "center"
            }}>
              + and many more throughout the guide
            </div>
          </div>
        </Card>
      </Sec>
    </>
  );
}

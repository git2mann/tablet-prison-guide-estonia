import { useState, useRef, useEffect } from "react";
import { Ctx } from "./context/ThemeContext";
import { light, dark } from "./constants/theme";
import Sidebar from "./components/layout/Sidebar";
import Router from "./components/Router";

export default function App() {
  const [page, setPage] = useState("home");
  const [isDark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isTablet, setIsTablet] = useState(() => window.innerWidth < 1024);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mainRef = useRef(null);
  const t = isDark ? dark : light;

  useEffect(() => {
    const check = () => {
      const tablet = window.innerWidth < 1024;
      setIsTablet(tablet);
      if (!tablet) setDrawerOpen(false);
    };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const nav = (id) => {
    setPage(id);
    if (mainRef.current) mainRef.current.scrollTop = 0;
    if (isTablet) setDrawerOpen(false);
  };

  return (
    <Ctx.Provider value={t}>
      <div style={{ display:"flex", height:"100vh", fontFamily:"'Nunito',-apple-system,sans-serif", background:t.bg, color:t.text, touchAction:"manipulation" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html { font-size: 18px; }
          body { background: ${t.bg}; font-size: 1rem; -webkit-tap-highlight-color: transparent; }
          h1, .tedi-header { font-size: clamp(2rem, 4vw, 2.5rem); }
          h2 { font-size: clamp(1.5rem, 3vw, 2rem); }
          h3 { font-size: clamp(1.2rem, 2vw, 1.5rem); }
          p, li, span, td, th, button, input, select, textarea {
            font-size: 1rem;
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: ${t.accent}; }
          ::-webkit-scrollbar-track { background: transparent; }
          button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
          @media (max-width: 1023px) {
            .pg-hero h1 { font-size: clamp(1.5rem, 5vw, 2.2rem) !important; }
            .pg-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important; }
            .pg-two-col { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            html { font-size: 16px; }
            .pg-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
        <link rel="stylesheet" href="/src/tedi-tablet.css" />

        {isTablet && drawerOpen && (
          <div
            onClick={() => setDrawerOpen(false)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:98, backdropFilter:"blur(2px)" }}
          />
        )}

        <Sidebar
          active={page}
          onNav={nav}
          collapsed={isTablet ? false : collapsed}
          onToggle={isTablet ? () => setDrawerOpen(false) : () => setCollapsed(!collapsed)}
          isDark={isDark}
          toggleTheme={() => setDark(!isDark)}
          isTablet={isTablet}
          drawerOpen={drawerOpen}
        />

        <main ref={mainRef} style={{ flex:1, overflowY:"auto", padding: "32px 32px 100px", minWidth:0 }}>
          <div style={{ maxWidth:920, margin:"0 auto" }}>
            {/* Tablet-first: Placeholder for hero/animation */}
            <div style={{ width:"100%", height:180, background:"#ececec", borderRadius:18, marginBottom:32, display:"flex", alignItems:"center", justifyContent:"center", color:t.dim, fontSize:28, fontWeight:700, letterSpacing:1 }}>
              [Image/Animation Placeholder]
            </div>
            <Router page={page} onNav={nav} />
            <footer style={{ marginTop:56, padding:"22px 0", borderTop:`1px solid ${t.border}`, textAlign:"center", color:t.dim, fontSize:15 }}>
              {/* Tablet-first: Placeholder for footer image/animation */}
              <div style={{ width:120, height:60, background:"#ececec", borderRadius:12, margin:"0 auto 18px", display:"flex", alignItems:"center", justifyContent:"center", color:t.dim, fontSize:18 }}>
                [Footer Img/Anim]
              </div>
              <p>Time in Prison: My Steps to Freedom — Estonian Prison Service © 2025</p>
              <p style={{ marginTop:3 }}>Baltic Institute of Research · TalTech · University of Tartu</p>
            </footer>
          </div>
        </main>

        {isTablet && (
          <button
            className="tedi-large-btn tedi-touch"
            onClick={() => setDrawerOpen(true)}
            style={{
              position:"fixed", bottom:28, right:28, zIndex:97,
              width:60, height:60, borderRadius:"50%",
              background:t.accent, border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:24, color:t.accentText, fontWeight:700,
              boxShadow:"0 6px 24px rgba(0,0,0,0.25)",
              transition:"transform 0.15s",
            }}
            onTouchStart={e => e.currentTarget.style.transform = "scale(0.92)"}
            onTouchEnd={e => e.currentTarget.style.transform = "scale(1)"}
          >☰</button>
        )}
      </div>
    </Ctx.Provider>
  );
}

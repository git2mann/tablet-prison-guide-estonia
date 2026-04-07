import { useState, useRef, useEffect } from "react";
import { useT } from "../../context/ThemeContext";
import KW from "../../constants/keywords";

export default function Kw({ word, children }) {
  const t = useT();
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const [pos, setPos] = useState({ x:0, y:0 });
  const isTablet = window.innerWidth < 1024;
  
  const def = KW[word] || KW[word?.toLowerCase()];
  if (!def) return <>{children || word}</>;

  const op = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.top });
    }
    setShow(true);
  };

  useEffect(() => {
    if (show && isTablet) {
      const close = () => setShow(false);
      window.addEventListener("scroll", close);
      return () => window.removeEventListener("scroll", close);
    }
  }, [show, isTablet]);

  return (
    <span 
      ref={ref} 
      onMouseEnter={!isTablet ? op : undefined} 
      onMouseLeave={!isTablet ? () => setShow(false) : undefined} 
      onClick={() => {
        if (show) setShow(false);
        else op();
      }}
      style={{ 
        borderBottom: `2px dashed ${t.accentBorder}`, 
        cursor:"help", 
        fontWeight:700, 
        color:t.text, 
        position:"relative",
        display: "inline-block",
        lineHeight: 1.2,
        padding: "0 2px"
      }}>
      {children || word}
      {show && (
        <span 
          onClick={(e) => e.stopPropagation()}
          style={{
            position:"fixed", 
            left: Math.min(Math.max(pos.x, 160), window.innerWidth - 160),
            top: Math.max(pos.y - 12, 10), 
            transform: "translate(-50%, -100%)", 
            background: t.card,
            color: t.text, 
            padding: "20px 24px", 
            borderRadius: t.radius.lg, 
            fontSize: 15, 
            lineHeight: 1.6,
            width: isTablet ? "calc(100vw - 48px)" : 320,
            maxWidth: 400,
            zIndex: 9999, 
            boxShadow: `0 24px 80px rgba(0,0,0,0.35)`, 
            border: `1px solid ${t.border}`,
            animation: "popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}
        >
          <style>{`
            @keyframes popIn {
              from { opacity: 0; transform: translate(-50%, -90%) scale(0.95); }
              to { opacity: 1; transform: translate(-50%, -100%) scale(1); }
            }
          `}</style>
          <span style={{ 
            fontWeight:800, 
            color:t.accent, 
            display:"block", 
            marginBottom:8, 
            fontSize:11, 
            letterSpacing:1.5, 
            textTransform:"uppercase" 
          }}>
            Definition
          </span>
          <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8, letterSpacing: -0.3 }}>{word}</div>
          <div style={{ color: t.dim }}>{def}</div>
          {!isTablet && (
            <span style={{ 
              position:"absolute", 
              bottom:-6, left:"50%", 
              transform:"translateX(-50%) rotate(45deg)", 
              width:12, height:12, 
              background:t.card, 
              borderRight:`1px solid ${t.border}`, 
              borderBottom:`1px solid ${t.border}` 
            }}/>
          )}
          {isTablet && (
            <button 
              onClick={() => setShow(false)}
              style={{
                marginTop: 20,
                width: "100%",
                padding: "12px",
                background: t.hover,
                border: "none",
                borderRadius: 10,
                color: t.text,
                fontWeight: 700,
                fontSize: 14
              }}
            >CLOSE</button>
          )}
        </span>
      )}
    </span>
  );
}

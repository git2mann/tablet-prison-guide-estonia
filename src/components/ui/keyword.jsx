import React, { useState, useRef, useEffect } from "react";
import { X } from 'lucide-react';
import KW from "../../constants/keywords";

export default function Keyword({ word, children }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
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
      onClick={(e) => {
        e.stopPropagation();
        if (show) setShow(false);
        else op();
      }}
      className="inline-block relative cursor-help px-1 group"
    >
      <span className="font-bold text-[#003B71] border-b-2 border-[#FFD000] hover:bg-[#FFD000]/10 transition-all rounded-sm px-0.5">
        {children || word}
      </span>
      {show && (
        <span 
          onClick={(e) => e.stopPropagation()}
          className="fixed z-[9999] bg-white text-slate-900 p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-2 border-[#e9ecef] animate-in fade-in zoom-in duration-200"
          style={{
            left: Math.min(Math.max(pos.x, 200), window.innerWidth - 200),
            top: Math.max(pos.y - 10, 10), 
            transform: "translate(-50%, -100%)", 
            width: isTablet ? "calc(100vw - 48px)" : 320,
          }}
        >
          <div className="font-black text-xs text-[#339af0] mb-1 uppercase tracking-widest italic">Mõiste</div>
          <div className="font-black text-2xl text-[#003B71] mb-3 tracking-tight leading-tight uppercase italic">{word}</div>
          <div className="font-medium text-lg text-slate-600 leading-relaxed">{def}</div>
          
          {isTablet && (
            <button 
              onClick={() => setShow(false)}
              className="mt-6 w-full py-3 bg-slate-100 rounded-2xl font-black text-slate-500 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              <X size={16} /> SULGE
            </button>
          )}
          
          {!isTablet && (
             <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r-2 border-b-2 border-[#e9ecef]" />
          )}
        </span>
      )}
    </span>
  );
}

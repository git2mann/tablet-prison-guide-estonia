import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Info } from 'lucide-react';
import KW from "../../constants/keywords";

export default function Keyword({ word, children, language = 'ET' }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsTablet(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  
  const defEntry = KW[word] || KW[Object.keys(KW).find(k => k.toLowerCase() === word.toLowerCase())];
  if (!defEntry) return <>{children || word}</>;

  const def = typeof defEntry === 'string' ? defEntry : (defEntry[language] || defEntry.EN);

  const openModal = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({ 
        x: rect.left + rect.width / 2, 
        y: rect.top 
      });
    }
    setShow(true);
  };

  useEffect(() => {
    if (show) {
      const handleScroll = () => {
        if (!isTablet) setShow(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [show, isTablet]);

  const modalContent = (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] pointer-events-auto transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setShow(false)}
      />

      <div 
        className={`fixed z-[10001] bg-white text-slate-900 p-6 md:p-8 rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.25)] border-2 border-white pointer-events-auto animate-in fade-in zoom-in duration-300`}
        style={{
          left: isTablet ? "50%" : Math.min(Math.max(pos.x, 220), window.innerWidth - 220),
          top: isTablet ? "50%" : Math.max(pos.y - 15, 20), 
          transform: isTablet ? "translate(-50%, -50%)" : "translate(-50%, -100%)", 
          width: isTablet ? "calc(100vw - 40px)" : 440,
          maxWidth: "500px",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Info size={18} />
            </div>
            <span className="font-black text-[10px] text-blue-600/50 uppercase tracking-[0.3em] italic">
              {language === 'ET' ? 'Mõiste selgitus' : 'Definition explanation'}
            </span>
          </div>
          <button 
            onClick={() => setShow(false)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        <div className="font-black text-2xl md:text-3xl text-[#003B71] mb-4 tracking-tighter uppercase italic leading-none">
          {children || word}
        </div>

        <div className="font-bold text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
          {def}
        </div>
        
        <button 
          onClick={() => setShow(false)}
          className="mt-8 w-full py-4 bg-[#003B71] hover:bg-blue-800 active:scale-[0.98] rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-xl"
        >
          {language === 'ET' ? 'Sule aken' : 'Close window'}
        </button>
        
        {!isTablet && (
           <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 rotate-45 w-5 h-5 bg-white border-r-2 border-b-2 border-white" />
        )}
      </div>
    </div>
  );

  return (
    <span className="inline">
      <span 
        ref={ref} 
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
        onKeyDown={(e) => e.key === 'Enter' && openModal()}
        onMouseEnter={!isTablet ? openModal : undefined}
        onMouseLeave={!isTablet ? () => setShow(false) : undefined}
        className="inline font-bold text-[#003B71] border-b-4 border-[#FFD000] bg-[#FFD000]/10 hover:bg-[#FFD000]/30 transition-all rounded-sm px-0.5 cursor-help"
      >
        {children || word}
      </span>
      {show && createPortal(modalContent, document.body)}
    </span>
  );
}

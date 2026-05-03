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
        className={`fixed inset-0 bg-black/60 backdrop-blur-[4px] pointer-events-auto transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setShow(false)}
      />

      <div 
        className={`fixed z-[10001] bg-[var(--color-bg-surface)] text-[var(--color-text-body)] p-6 md:p-8 rounded-[40px] shadow-[0_30px_90px_var(--color-shadow-strong)] border-2 border-[var(--color-border-strong)] pointer-events-auto animate-in fade-in zoom-in duration-300`}
        style={{
          left: isTablet ? "50%" : Math.min(Math.max(pos.x, 220), window.innerWidth - 220),
          top: isTablet ? "50%" : Math.max(pos.y - 15, 20), 
          transform: isTablet ? "translate(-50%, -50%)" : "translate(-50%, -100%)", 
          width: isTablet ? "calc(100vw - 40px)" : 440,
          maxWidth: "500px",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[var(--color-tip-bg)] text-[var(--color-tip-accent)] rounded-2xl shadow-sm">
              <Info size={20} />
            </div>
            <span className="font-black text-[10px] text-[var(--color-text-dim)] uppercase tracking-[0.3em] italic">
              {language === 'ET' ? 'Mõiste selgitus' : 'Definition'}
            </span>
          </div>
          <button 
            onClick={() => setShow(false)}
            className="p-2.5 hover:bg-[var(--color-bg-elevated)] rounded-full transition-all text-[var(--color-text-dim)] hover:text-[var(--color-text-body)]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="font-black text-3xl text-[var(--color-brand-blue)] mb-4 tracking-tighter uppercase italic leading-none">
          {children || word}
        </div>

        <div className="font-bold text-lg md:text-xl text-[var(--color-text-body)] leading-relaxed text-balance opacity-90">
          {def}
        </div>
        
        <button 
          onClick={() => setShow(false)}
          className="mt-10 w-full py-5 bg-[var(--color-brand-blue)] hover:brightness-110 active:scale-[0.98] rounded-2xl font-black text-white uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-2xl"
        >
          {language === 'ET' ? 'Sule aken' : 'Got it'}
        </button>
        
        {!isTablet && (
           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rotate-45 w-6 h-6 bg-[var(--color-bg-surface)] border-r-2 border-b-2 border-[var(--color-border-strong)]" />
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
        className="inline font-black text-[var(--color-brand-blue)] border-b-[6px] border-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/20 transition-all rounded-sm px-1 cursor-help italic tracking-tight"
      >
        {children || word}
      </span>
      {show && createPortal(modalContent, document.body)}
    </span>
  );
}

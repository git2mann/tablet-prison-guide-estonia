import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Accordion({ 
  title, 
  children, 
  open = false,
  color,
  onClick
}) {
  const [internalOpen, setInternalOpen] = useState(open);
  const isOpen = onClick ? open : internalOpen;
  const toggle = onClick || (() => setInternalOpen(!internalOpen));

  return (
    <div 
      className={`relative bg-[var(--color-bg-surface)]/60 backdrop-blur-xl rounded-[28px] overflow-hidden border-2 transition-all duration-500 mb-6 ${isOpen ? 'shadow-xl border-[var(--color-brand-gold)] translate-y-[-2px]' : 'shadow-sm border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gold)]/40 hover:shadow-md'}`}
      style={{
        boxShadow: isOpen ? '0 20px 40px var(--color-shadow-strong)' : 'none',
      }}
    >
      {/* Liquid glass accent */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-gold)] opacity-[0.05] blur-3xl pointer-events-none" />
      )}

      <button 
        onClick={toggle} 
        className="w-full p-6 md:p-8 flex items-start md:items-center justify-between text-left active:scale-[0.98] transition-all gap-6 group relative z-10"
      >
        <span 
          className={`text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-all duration-500 flex-grow leading-none ${isOpen ? 'text-[var(--color-brand-blue)] translate-x-1' : 'text-[var(--color-text-body)] opacity-60 group-hover:opacity-100 group-hover:translate-x-1'}`}
        >
          {title}
        </span>
        <div 
          className={`p-3 rounded-2xl transition-all duration-700 shrink-0 ${isOpen ? 'bg-[var(--color-brand-gold)] text-black rotate-90 scale-110 shadow-lg' : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-dim)] rotate-0 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white group-hover:rotate-45'}`}
        >
          <ChevronRight size={24} className="md:w-7 md:h-7" strokeWidth={3} />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 md:px-10 pb-10 pt-0 border-t border-[var(--color-border-subtle)] bg-white/5 relative z-10">
          <div className="text-[var(--color-text-body)] leading-relaxed pt-8 text-lg font-medium opacity-90">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

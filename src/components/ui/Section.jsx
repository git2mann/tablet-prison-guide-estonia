import React from 'react';

export default function Section({ title, sub, children, style = {}, className = "" }) {
  return (
    <div className={`space-y-12 mb-20 ${className}`} style={style}>
      <header className="relative group">
        {/* Decorative background bar */}
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[var(--color-brand-gold)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-[var(--color-brand-gold)] font-black text-xl italic select-none">/</span>
            <h2 className="text-[clamp(1.5rem,8vw,4rem)] font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-tight py-1 px-1">
              {title}
            </h2>
          </div>
          {sub && (
            <div className="flex flex-wrap items-center gap-3 md:gap-4 ml-4 md:ml-8">
              <div className="h-px flex-1 min-w-[80px] bg-[var(--color-border-strong)]" />
              <p className="section-subtitle text-[1.5rem] font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.08em] leading-tight max-w-full break-words [overflow-wrap:anywhere]">
                {sub}
              </p>
            </div>
          )}
        </div>
      </header>

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
        {children}
      </div>
    </div>
  );
}

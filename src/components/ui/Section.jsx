import React from 'react';

export default function Section({ title, sub, children, style = {}, className = "" }) {
  return (
    <div className={`space-y-12 mb-20 ${className}`} style={style}>
      <header className="relative group">
        {/* Decorative background bar */}
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#FFD000] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-[#FFD000] font-black text-xl italic select-none">/</span>
            <h2 className="text-3xl md:text-6xl font-black text-[#003B71] tracking-tighter uppercase italic leading-[0.9] py-1">
              {title}
            </h2>
          </div>
          {sub && (
            <div className="flex items-center gap-4 ml-6 md:ml-8">
              <div className="h-px flex-grow bg-slate-200" />
              <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">
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

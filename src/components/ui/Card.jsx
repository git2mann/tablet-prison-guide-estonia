import React from 'react';

export default function Card({ children, className = "", style = {} }) {
  return (
    <div 
      className={`relative bg-[var(--color-bg-surface)]/70 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${className}`}
      style={style}
    >
      {/* Subtle light leak for liquid glass effect */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-[var(--color-brand-gold)] opacity-[0.03] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[var(--color-brand-blue)] opacity-[0.02] blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

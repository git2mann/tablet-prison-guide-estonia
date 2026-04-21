import React from 'react';

export default function Card({ children, className = "", style = {} }) {
  return (
    <div 
      className={`bg-[var(--color-bg-card)] p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-[var(--color-border-subtle)] shadow-sm hover:shadow-xl transition-all duration-500 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

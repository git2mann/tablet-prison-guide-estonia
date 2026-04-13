import React from 'react';

export default function Section({ title, sub, children, style = {}, className = "" }) {
  return (
    <div className={`space-y-10 mb-16 ${className}`} style={style}>
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="w-2 h-12 bg-[#FFD000] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-[#003B71] tracking-tight leading-tight uppercase italic">
            {title}
          </h2>
        </div>
        {sub && (
          <p className="text-lg font-bold opacity-50 uppercase tracking-[0.15em] ml-6">
            {sub}
          </p>
        )}
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

import React from 'react';

export const RadialGauge = ({ value, color = "#10b981" }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-28 h-28 rotate-[-90deg]">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#f1f5f9" strokeWidth="10" />
        <circle 
          cx="50" cy="50" r={radius} 
          fill="none" 
          stroke={color} 
          strokeWidth="10" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset} 
          strokeLinecap="round" 
          className="transition-all duration-1000 ease-in-out" 
        />
      </svg>
      <span className="absolute text-2xl font-black text-slate-800">{value}%</span>
    </div>
  );
};

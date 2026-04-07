import React from 'react';

export const MiniAreaChart = ({ data, color = "#3b82f6" }) => {
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - v}`).join(' ');
  return (
    <div className="w-full h-24 relative mt-2">
      <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline fill="url(#chartGrad)" points={`0,100 ${points} 100,100`} />
        <polyline 
          fill="none" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          points={points} 
          style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: 'drawChart 2s ease-out forwards' }} 
        />
      </svg>
      <style>{`
        @keyframes drawChart { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
};

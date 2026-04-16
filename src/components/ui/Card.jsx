import React from 'react';

export default function Card({ children, className = "", style = {} }) {
  return (
    <div 
      className={`bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-500 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

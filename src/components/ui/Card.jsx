import React from 'react';

export default function Card({ children, className = "", style = {} }) {
  return (
    <div 
      className={`bg-white p-8 rounded-[32px] border-2 border-[#e9ecef] shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

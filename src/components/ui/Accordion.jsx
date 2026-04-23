import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Accordion({ 
  title, 
  children, 
  open = false,
  color, // Added from main
  onClick // Added to support external control
}) {
  const [internalOpen, setInternalOpen] = useState(open);
  
  // Use either internal or external state
  const isOpen = onClick ? open : internalOpen;
  const toggle = onClick || (() => setInternalOpen(!internalOpen));

  // Default colors (fallback) from main
  const borderColor = color || '#e9ecef';
  const activeBorderColor = color || '#FFD000';

  return (
    <div 
      className={`bg-white rounded-[24px] overflow-hidden border-2 transition-all duration-300 mb-4 ${isOpen ? 'shadow-md' : 'shadow-sm'}`}
      style={{
        borderColor: isOpen ? activeBorderColor : borderColor,
        boxShadow: isOpen && color 
          ? `0 4px 20px ${color}33` 
          : undefined,
      }}
    >
      <button 
        onClick={toggle} 
        className="w-full p-5 md:p-6 flex items-start md:items-center justify-between text-left active:scale-[0.99] transition-all gap-4"
      >
        <span 
          className={`text-lg md:text-xl font-bold transition-colors duration-300 flex-grow leading-snug md:leading-normal ${isOpen ? '' : 'text-slate-700'}`}
          style={{
            fontSize:"1.9rem",
            color: isOpen 
              ? (color || '#003B71') 
              : '#334155'
          }}
        >
          {title}
        </span>
        <div 
          className={`p-2 rounded-full transition-all duration-300 shrink-0 ${isOpen ? 'text-black rotate-90' : 'bg-slate-50 text-slate-400'}`}
          style={{
            backgroundColor: isOpen 
              ? (color || '#FFD000') 
              : '#f1f5f9',
            color: isOpen ? 'black' : '#94a3b8',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }}
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 md:px-6 pb-6 pt-0 border-t border-slate-50">
          <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-600 leading-relaxed pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

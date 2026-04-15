import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Accordion({ 
  title, 
  children, 
  open = false,
  color
}) {
  const [isOpen, setIsOpen] = useState(open);

 
  const borderColor = color || '#e9ecef';
  const activeBorderColor = color || '#FFD000';

  return (
    <div
      className="bg-white rounded-[24px] overflow-hidden border-2 transition-all duration-300 mb-4"
      style={{
        borderColor: isOpen ? activeBorderColor : borderColor,
        boxShadow: isOpen && color 
          ? `0 4px 20px ${color}33` 
          : undefined,
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-6 flex items-center justify-between text-left active:scale-[0.99] transition-all"
      >
        <span 
          className="text-[2rem] font-bold transition-colors duration-300"
          style={{
            color: isOpen 
              ? (color || '#003B71') 
              : '#334155'
          }}
        >
          {title}
        </span>

        <div
          className="p-2 rounded-full transition-all duration-300"
          style={{
            backgroundColor: isOpen 
              ? (color || '#FFD000') 
              : '#f1f5f9',
            color: isOpen ? 'black' : '#94a3b8',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }}
        >
          <ChevronRight size={24} />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-slate-50">
          <div className="prose prose-xl prose-slate max-w-none text-[2rem] text-slate-600 leading-relaxed pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
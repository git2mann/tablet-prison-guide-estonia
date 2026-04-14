import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Accordion({ title, children, open = false }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className={`bg-white rounded-[24px] overflow-hidden border-2 transition-all duration-300 mb-4 ${isOpen ? 'border-[#FFD000] shadow-md' : 'border-[#e9ecef] shadow-sm'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-6 flex items-center justify-between text-left active:scale-[0.99] transition-all"
      >
        <span className={`text-[2rem] font-bold transition-colors duration-300 ${isOpen ? 'text-[#003B71]' : 'text-slate-700'}`}>
          {title}
        </span>
        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#FFD000] text-black rotate-90' : 'bg-slate-50 text-slate-400'}`}>
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

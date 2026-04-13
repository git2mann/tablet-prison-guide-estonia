import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function Tip({ children }) {
  return (
    <div className="bg-blue-50/50 border-l-[8px] border-[#339af0] p-8 rounded-[24px] shadow-sm my-6 flex gap-6">
      <div className="p-3 bg-[#339af0] text-white rounded-2xl h-fit shadow-md">
        <Lightbulb size={32} />
      </div>
      <div>
        <h4 className="text-sm font-black text-[#339af0] uppercase tracking-widest mb-1 italic">NÕUANNE</h4>
        <p className="text-xl font-bold text-slate-700 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

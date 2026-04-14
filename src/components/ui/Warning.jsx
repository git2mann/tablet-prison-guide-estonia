import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Warning({ children }) {
  return (
    <div className="bg-red-50/50 border-l-[8px] border-[#fa5252] p-8 rounded-[24px] shadow-sm my-6 flex gap-6">
      <div className="p-3 bg-[#fa5252] text-white rounded-2xl h-fit shadow-md">
        <AlertTriangle size={32} />
      </div>
      <div>
        <h4 className="text-sm font-black text-[#fa5252] uppercase tracking-widest mb-1 italic">HOIATUS</h4>
        <p className="text-[1.9rem] font-bold text-slate-700 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}


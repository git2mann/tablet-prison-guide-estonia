import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Warning({ children }) {
  return (
    <div className="bg-[var(--color-warning-bg)] border-l-[8px] border-[var(--color-warning-accent)] p-8 rounded-[24px] shadow-sm my-6 flex gap-6">
      <div className="p-3 bg-[var(--color-warning-accent)] text-white rounded-2xl h-fit shadow-md">
        <AlertTriangle size={32} />
      </div>
      <div>
        <h4 className="text-sm font-black text-[var(--color-warning-accent)] uppercase tracking-widest mb-1 italic">HOIATUS</h4>
        <p className="text-[1.25rem] font-bold text-[var(--color-text-body)] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

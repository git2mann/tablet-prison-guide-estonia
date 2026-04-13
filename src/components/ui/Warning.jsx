import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Warning({ children }) {
  return (
    <div className="bg-red-50 border-l-[16px] border-red-500 p-12 rounded-[50px] shadow-2xl my-12">
      <div className="flex items-center gap-6 text-red-700 mb-6">
        <AlertTriangle size={56} strokeWidth={2.5} />
        <h4 className="text-3xl font-black uppercase tracking-tight italic">WARNING</h4>
      </div>
      <p className="text-2xl font-bold text-red-900 leading-relaxed">{children}</p>
    </div>
  );
}

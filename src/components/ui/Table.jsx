import React from 'react';

export default function Table({ headers, rows }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border-2 border-[#e9ecef] shadow-sm my-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-[#e9ecef]">
              {headers.map((header, i) => (
                <th key={i} className="py-5 px-6 text-sm font-black uppercase tracking-widest text-[#003B71]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="py-5 px-6 text-base font-bold text-slate-600">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

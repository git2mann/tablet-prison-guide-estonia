import React from 'react';

export default function Table({ headers, rows }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border-2 border-slate-300 shadow-sm my-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-slate-300">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-300">
              {headers.map((header, i) => (
                <th key={i} className=" text-[1.9rem] py-5 px-6 text-sm font-black uppercase tracking-widest text-[#003B71] border-r border-slate-300 last:border-r-0">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-300 last:border-b-0 hover:bg-slate-50 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="text-[1.9rem] py-5 px-6 font-bold text-slate-600 border-r border-slate-300 last:border-r-0">
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

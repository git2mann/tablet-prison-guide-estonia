import React,{useState} from 'react';

export default function Table({ headers, rows }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border-2 border-slate-300 shadow-sm my-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-slate-300">
                  <thead
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            <tr className="bg-slate-50 border-b-2 border-slate-300">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="text-[1.9rem] py-5 px-6 font-black uppercase tracking-widest text-[#003B71] border-r border-slate-300 last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>

            
          </thead>
          {open && (
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-slate-300 last:border-b-0 hover:bg-slate-50 transition-colors"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="text-[1.9rem] py-5 px-6 font-bold text-slate-600 border-r border-slate-300 last:border-r-0"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
        </table>
        <div
  onClick={() => setOpen(!open)}
  className="flex items-center justify-center gap-2 py-4 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all"
>
  <span className="text-[1.8rem] font-semibold text-slate-600">
    {open ? "Hide details" : "Show details"}
  </span>

  <span
    className={`text-slate-600 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  >
    ▼
  </span>
</div>
      </div>
    </div>
  );
}

import React,{useState} from 'react';

export default function Table({ headers, rows }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--color-bg-surface)] rounded-[24px] overflow-hidden border-2 border-[var(--color-border-subtle)] shadow-sm my-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            <tr className="bg-[var(--color-bg-elevated)] border-b-2 border-[var(--color-border-subtle)]">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="text-lg md:text-xl py-5 px-6 font-black uppercase tracking-widest text-[var(--color-brand-blue)] border-r border-[var(--color-border-subtle)] last:border-r-0"
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
                  className="border-b border-[var(--color-border-subtle)] last:border-b-0 hover:bg-[var(--color-bg-elevated)]/50 transition-colors"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="text-base md:text-lg py-5 px-6 font-bold text-[var(--color-text-body)] border-r border-[var(--color-border-subtle)] last:border-r-0"
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
          className="flex items-center justify-center gap-2 py-4 cursor-pointer bg-[var(--color-bg-elevated)] hover:bg-[var(--color-border-subtle)] transition-all"
        >
          <span className="text-sm font-black uppercase tracking-widest text-[var(--color-text-secondary)]">
            {open ? "Hide details" : "Show details"}
          </span>
          <span
            className={`text-[var(--color-text-secondary)] transition-transform duration-300 ${
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

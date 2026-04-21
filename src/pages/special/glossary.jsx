import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, Info, X } from 'lucide-react';
import KW from "../../constants/keywords";
import { staggerContainer, staggerItem } from "../../constants/animations";

export default function Glossary({ language = 'ET', onNav }) {
  const [search, setSearch] = useState('');
  
  const terms = useMemo(() => Object.entries(KW).sort((a, b) => {
    const labelA = typeof a[1].label === 'string' ? a[1].label : (a[1].label?.[language] || a[0]);
    const labelB = typeof b[1].label === 'string' ? b[1].label : (b[1].label?.[language] || b[0]);
    return labelA.localeCompare(labelB);
  }), [language]);
  
  const filtered = useMemo(() => terms.filter(([id, data]) => {
    const label = typeof data.label === 'string' ? data.label : (data.label?.[language] || id);
    const def = typeof data === 'string' ? data : (data[language] || data.EN);
    return label.toLowerCase().includes(search.toLowerCase()) || 
           def.toLowerCase().includes(search.toLowerCase());
  }), [terms, search, language]);

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 overflow-hidden">
      {/* Design-Consistent Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24 overflow-hidden">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[var(--color-brand-gold)]">
            <div className="p-2 bg-[var(--color-brand-gold)]/10 rounded-lg flex-shrink-0">
              <Book size={20} />
            </div>
            <span className="font-black text-xs uppercase tracking-[0.4em] italic  text-balance">
              {language === 'ET' ? 'Sõnastik' : 'Glossary'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.85]  text-balance">
            Mõistete <br />
            <span className="text-[var(--color-text-secondary)] opacity-30">{language === 'ET' ? 'seletused' : 'definitions'}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] opacity-50" size={20} />
            <input 
              type="text" 
              placeholder={language === 'ET' ? 'Otsi mõistet...' : 'Search terms...'}
              className="w-full pl-12 pr-6 py-5 bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] rounded-full outline-none focus:border-[var(--color-brand-gold)] shadow-sm focus:shadow-xl transition-all font-bold text-lg text-[var(--color-text-primary)]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <button 
            onClick={() => onNav('home')}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-bg-button-alt)] hover:bg-[var(--color-brand-gold)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-sm"
          >
            <X size={18} strokeWidth={3} className="flex-shrink-0" />
            <span className=" text-balance">{language === 'ET' ? 'Sule ja välju' : 'Close and exit'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-hidden">
        {filtered.map(([id, data], idx) => (
          <motion.div 
            key={id}
            variants={staggerItem}
            className="p-8 md:p-10 bg-[var(--color-bg-card)] rounded-[48px] border-2 border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gold)] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[280px] overflow-hidden"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-button-alt)] flex items-center justify-center text-[var(--color-text-primary)] group-hover:bg-[var(--color-brand-gold)] group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                <Info size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tight leading-none transition-colors group-hover:text-[var(--color-brand-blue)]  text-balance">
                {typeof data.label === 'string' ? data.label : (data.label?.[language] || id)}
              </h3>
            </div>
            <p className="text-[var(--color-text-secondary)] font-bold leading-relaxed text-lg text-balance mt-6 ">
              {typeof data === 'string' ? data : (data[language] || data.EN)}
            </p>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-32 text-center space-y-6 opacity-20">
          <Search size={80} className="mx-auto" strokeWidth={1} />
          <p className="font-black text-2xl uppercase tracking-[0.3em] italic  text-balance">Tulemusi ei leitud</p>
        </div>
      )}

      {/* Bottom Exit */}
      <div className="mt-24 pt-12 border-t-2 border-[var(--color-border-subtle)] flex justify-center pb-20">
         <button 
           onClick={() => onNav('home')}
           className="px-12 py-6 bg-[var(--color-brand-blue)] text-white rounded-[32px] font-black uppercase tracking-[0.2em] italic hover:opacity-90 hover:shadow-2xl active:scale-95 transition-all flex items-center gap-3"
         >
           <span className=" text-balance">Tagasi pealehele</span>
         </button>
      </div>
    </motion.div>
  );
}

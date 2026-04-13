import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3 } from 'lucide-react';
import { useCategories } from '../../constants/categories';
import { morphTransition, fadeIn } from '../../constants/animations';

export default function HomePage({ onNav, language = 'ET' }) {
  const categories = useCategories();
  const [searchQuery, setSearchQuery] = useState('');

  const uiStrings = {
    title: { ET: 'Vangi käsiraamat', RU: 'Справочник', EN: 'Handbook' },
    searchPlaceholder: { ET: 'Mida soovid teada?', RU: 'Otsi...', EN: 'Search...' },
  };

  return (
    <motion.div {...fadeIn} className="p-4 md:p-6 space-y-10">
      <div className="text-center py-8">
        <h2 className="text-4xl font-black text-[#003B71] mb-8 tracking-tight uppercase italic leading-none">
          {uiStrings.title[language]}
        </h2>
        <div className="relative group max-w-xl mx-auto bg-white rounded-[24px] shadow-sm border-2 border-[#e9ecef] focus-within:border-[#FFD000] focus-within:shadow-md transition-all duration-300">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#FFD000] transition-colors" size={24} />
          <input 
            type="text" 
            placeholder={uiStrings.searchPlaceholder[language]} 
            className="w-full pl-16 pr-14 py-5 rounded-[24px] outline-none text-xl font-bold bg-transparent text-slate-700" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      </div>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
        {categories.map((cat) => (
          <motion.button 
            key={cat.id} 
            layoutId={`card-${cat.id}`}
            onClick={() => onNav(`category.${cat.id}`)}
            whileTap={{ scale: 0.96 }}
            transition={morphTransition}
            style={{ borderRadius: 32 }}
            className={`relative h-44 flex items-center gap-6 p-8 overflow-hidden bg-white border-2 border-[#e9ecef] shadow-sm hover:shadow-md hover:border-[#FFD000]/30 transition-all group`}
          >
            <div className="relative z-10 flex items-center gap-6 w-full pointer-events-none text-left">
              <motion.div layoutId={`icon-box-${cat.id}`} transition={morphTransition} className="p-4 bg-slate-50 rounded-2xl text-[#003B71] shrink-0 group-hover:bg-[#FFD000] group-hover:text-black transition-colors duration-300">
                {cat.icon}
              </motion.div>
              <motion.div layoutId={`content-${cat.id}`} transition={morphTransition} className="flex flex-col min-w-0">
                <motion.h3 
                  layoutId={`title-${cat.id}`} 
                  transition={morphTransition} 
                  className="text-2xl font-black leading-tight truncate text-[#003B71]"
                >
                  {cat.title[language]}
                </motion.h3>
                <motion.p 
                  layoutId={`desc-${cat.id}`} 
                  transition={morphTransition} 
                  className="text-sm font-bold text-slate-400 uppercase tracking-widest truncate"
                >
                  {cat.desc[language]}
                </motion.p>
              </motion.div>
            </div>
          </motion.button>
        ))}
      </section>

      <button onClick={() => onNav('admin')} className="w-full p-8 rounded-[32px] bg-white border-2 border-[#e9ecef] flex items-center justify-center gap-4 text-slate-400 font-black uppercase tracking-widest active:scale-[0.98] transition-all hover:bg-slate-50 hover:text-slate-600 shadow-sm mb-12">
        <BarChart3 size={24} /> MONITOR
      </button>
    </motion.div>
  );
}

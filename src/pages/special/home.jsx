import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3 } from 'lucide-react';
import { useCategories } from '../../constants/categories';

export default function HomePage({ onNav, language = 'ET' }) {
  const categories = useCategories();
  const [searchQuery, setSearchQuery] = useState('');

  const uiStrings = {
    title: { ET: 'Vangi käsiraamat', RU: 'Справочник', EN: 'Handbook' },
    subtitle: { ET: 'STABIILSUSE MOOTOR', RU: 'ИНФОРМАЦИЯ', EN: 'STABILITY ENGINE' },
    searchPlaceholder: { ET: 'Mida soovid teada?', RU: 'Otsi...', EN: 'Search...' },
  };

  const morphTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 0.8,
    restDelta: 0.001
  };

  return (
    <div className="p-4 md:p-6 space-y-8 transition-colors duration-700">
      <div className="text-center py-6">
        <h2 className="text-3xl font-black text-[#003B71] mb-6 tracking-tight uppercase">
          {uiStrings.title[language]}
        </h2>
        <div className="relative group max-w-xl mx-auto bg-white rounded-[32px] shadow-lg ring-4 ring-white/50">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
          <input 
            type="text" 
            placeholder={uiStrings.searchPlaceholder[language]} 
            className="w-full pl-16 pr-14 py-5 rounded-[32px] outline-none text-xl font-bold bg-transparent" 
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
            whileTap={{ scale: 0.92, transition: { duration: 0.1 } }}
            transition={morphTransition}
            style={{ borderRadius: 48 }}
            className={`relative h-48 flex items-center gap-6 p-8 overflow-hidden ${cat.color} shadow-xl`}
          >
            <div className="relative z-10 flex items-center gap-6 w-full pointer-events-none text-left">
              <motion.div layoutId={`icon-box-${cat.id}`} transition={morphTransition} className="p-5 bg-white rounded-3xl text-[#003B71] shrink-0 shadow-md">
                {cat.icon}
              </motion.div>
              <div className="flex flex-col min-w-0">
                <motion.h3 
                  layoutId={`title-${cat.id}`} 
                  transition={morphTransition} 
                  style={{ originX: 0 }}
                  className="text-2xl font-black leading-tight truncate text-[#003B71]"
                >
                  {cat.title[language]}
                </motion.h3>
                <motion.p 
                  layoutId={`desc-${cat.id}`} 
                  transition={morphTransition} 
                  style={{ originX: 0 }}
                  className="text-sm font-bold opacity-50 uppercase tracking-widest truncate"
                >
                  {cat.desc[language]}
                </motion.p>
              </div>
            </div>
          </motion.button>
        ))}
      </section>

      <button onClick={() => onNav('admin')} className="w-full p-8 rounded-[40px] bg-white border-4 border-slate-200 flex items-center justify-center gap-4 text-slate-400 font-black uppercase tracking-widest active:scale-[0.98] transition-all hover:bg-blue-50 shadow-md">
        <BarChart3 size={24} /> MONITOR
      </button>
    </div>
  );
}

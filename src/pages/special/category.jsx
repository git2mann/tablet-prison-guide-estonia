import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ListChecks } from 'lucide-react';
import { useCategories } from '../../constants/categories';
import { appleSpring, staggerContainer, staggerItem } from '../../constants/animations';

export default function CategoryPage({ categoryId, onNav, language = 'ET', handleBack }) {
  const categories = useCategories();
  const selectedCategory = categories.find(c => c.id === categoryId);

  if (!selectedCategory) return null;

  return (
    <motion.div 
      key="category-overlay"
      layoutId={`card-${selectedCategory.id}`}
      transition={appleSpring}
      initial={{ borderRadius: 40, opacity: 1 }}
      animate={{ borderRadius: 0, opacity: 1 }}
      exit={{ borderRadius: 40, opacity: 1 }}
      className={`fixed inset-0 z-[200] flex flex-col items-center bg-white overflow-y-auto pt-0 pb-12 custom-scrollbar`}
    >
      {/* Immersive Hero Header */}
      <div className="w-full relative h-[55vh] md:h-[65vh] shrink-0 overflow-hidden bg-[#003B71]">
        <img 
          src={selectedCategory.imageUrl || 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80'} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003B71]/60 to-[#003B71]" />
        
        <div className="absolute inset-0 max-w-5xl mx-auto px-8 md:px-12 flex flex-col justify-end pb-16 md:pb-24 pt-20 md:pt-28 lg:pt-36">
          <div className="flex items-center gap-6 md:gap-10">
            <motion.div 
              layoutId={`icon-box-${selectedCategory.id}`} 
              transition={appleSpring} 
              className="p-6 md:p-8 bg-[#FFD000] rounded-[32px] text-black shadow-[0_20px_50px_rgba(255,208,0,0.3)] shrink-0"
            >
              {React.cloneElement(selectedCategory.icon, { size: 48, strokeWidth: 2.5 })}
            </motion.div>
            
            <div className="space-y-2 min-w-0">
              <motion.div layoutId={`content-${selectedCategory.id}`} transition={appleSpring}>
                <motion.h2 
                  layoutId={`title-${selectedCategory.id}`} 
                  className="text-3xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.8]"
                >
                  {selectedCategory.title[language]}
                </motion.h2>
                <motion.p 
                  layoutId={`desc-${selectedCategory.id}`} 
                  className="text-sm md:text-2xl font-bold text-[#FFD000] uppercase tracking-[0.3em] mt-2 md:mt-4 opacity-80"
                >
                  {selectedCategory.desc[language]}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Article List Section */}
      <div className="w-full max-w-5xl px-6 md:px-12 pb-32 -mt-10 md:-mt-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-white rounded-[50px] p-4 md:p-8 shadow-[0_-20px_80px_rgba(0,0,0,0.1)] border-2 border-[#e9ecef] space-y-4"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-50 mb-4">
             <span className="text-xs font-black text-slate-300 uppercase tracking-[0.4em]">Sisu valik</span>
             <span className="text-xs font-black text-[#003B71] uppercase tracking-[0.2em] bg-slate-50 px-3 py-1 rounded-full">{selectedCategory.articles.length} Teemat</span>
          </div>

          {selectedCategory.articles.map((art) => (
            <motion.button 
              key={art.id} 
              variants={staggerItem}
              onClick={() => onNav(art.id)} 
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-slate-50/50 hover:bg-white p-6 md:p-8 rounded-[32px] border-2 border-transparent hover:border-[#FFD000]/30 flex items-center justify-between transition-all group text-left gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#003B71] font-black text-lg shadow-sm border border-slate-100 group-hover:bg-[#FFD000] group-hover:text-black transition-colors duration-500">
                   {art.title[language].charAt(0)}
                </div>
                <span className="text-xl md:text-2xl font-black text-slate-700 group-hover:text-[#003B71] transition-colors leading-tight uppercase italic">
                  {art.title[language]}
                </span>
              </div>
              <div className="p-2 rounded-full bg-white text-slate-200 group-hover:text-[#FFD000] transition-all shrink-0">
                <ChevronRight size={32} strokeWidth={3} />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

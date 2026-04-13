import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useCategories } from '../../constants/categories';
import { morphTransition, slideUp } from '../../constants/animations';

export default function CategoryPage({ categoryId, onNav, language = 'ET', handleBack }) {
  const categories = useCategories();
  const selectedCategory = categories.find(c => c.id === categoryId);

  if (!selectedCategory) return null;

  return (
    <motion.div 
      key="category-overlay"
      layoutId={`card-${selectedCategory.id}`}
      transition={morphTransition}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.1}
      onDragEnd={(_, info) => {
        if (info.offset.y > 150 || info.velocity.y > 500) handleBack();
      }}
      initial={{ borderRadius: 32, opacity: 1 }}
      animate={{ borderRadius: 0, opacity: 1 }}
      exit={{ borderRadius: 32, opacity: 1 }}
      className={`fixed inset-0 z-[200] flex flex-col items-center overflow-hidden touch-none bg-[#f8f9fa]`}
    >
      <div className="relative z-10 w-full max-w-5xl h-full p-6 md:p-12 flex flex-col mt-12">
        <div className="flex items-center gap-8 mb-16 shrink-0">
          <motion.div layoutId={`icon-box-${selectedCategory.id}`} transition={morphTransition} className="p-6 bg-[#FFD000] rounded-3xl text-black shadow-lg">
            {React.cloneElement(selectedCategory.icon, { size: 48, strokeWidth: 2.5 })}
          </motion.div>
          <motion.div layoutId={`content-${selectedCategory.id}`} transition={morphTransition} className="space-y-2">
            <motion.h2 
              layoutId={`title-${selectedCategory.id}`} 
              transition={morphTransition} 
              className="text-5xl md:text-6xl font-black text-[#003B71] tracking-tighter uppercase italic leading-none"
            >
              {selectedCategory.title[language]}
            </motion.h2>
            <motion.p 
              layoutId={`desc-${selectedCategory.id}`} 
              transition={morphTransition} 
              className="text-xl font-bold text-slate-400 uppercase tracking-[0.2em]"
            >
              {selectedCategory.desc[language]}
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          {...slideUp}
          transition={{ delay: 0.2 }}
          className="space-y-4 flex-grow overflow-y-auto pr-4 custom-scrollbar pb-32"
        >
          {selectedCategory.articles.map((art) => (
            <button 
              key={art.id} 
              onClick={() => onNav(art.id)} 
              className="w-full bg-white p-8 rounded-[24px] border-2 border-[#e9ecef] flex items-center justify-between active:scale-[0.99] shadow-sm hover:shadow-md hover:border-[#FFD000]/30 transition-all group"
            >
              <span className="text-2xl font-black text-slate-700 group-hover:text-[#003B71] transition-colors">{art.title[language]}</span>
              <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-[#FFD000] group-hover:text-black transition-all">
                <ChevronRight size={32} />
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

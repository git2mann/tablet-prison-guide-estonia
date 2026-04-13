import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useCategories } from '../../constants/categories';

export default function CategoryPage({ categoryId, onNav, language = 'ET', handleBack }) {
  const categories = useCategories();
  const selectedCategory = categories.find(c => c.id === categoryId);

  if (!selectedCategory) return null;

  const morphTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 0.8,
    restDelta: 0.001
  };

  return (
    <motion.div 
      key="category-overlay"
      layoutId={`card-${selectedCategory.id}`}
      transition={morphTransition}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.15}
      onDragEnd={(_, info) => {
        if (info.offset.y > 150 || info.velocity.y > 500) handleBack();
      }}
      initial={{ borderRadius: 48, opacity: 1 }}
      animate={{ borderRadius: 0, opacity: 1 }}
      exit={{ borderRadius: 48, opacity: 1 }}
      className={`fixed inset-0 z-[200] flex flex-col items-center overflow-hidden touch-none ${selectedCategory.color}`}
      style={{ backgroundColor: selectedCategory.color.includes('bg-white') ? '#f8fafc' : undefined }}
    >
      <div className="relative z-10 w-full max-w-5xl h-full p-6 md:p-12 flex flex-col pt-44">
        <div className="space-y-4 mb-12 shrink-0">
          <motion.h2 
            layoutId={`title-${selectedCategory.id}`} 
            transition={morphTransition} 
            style={{ originX: 0 }}
            className="text-6xl font-black text-[#003B71] tracking-tighter uppercase italic leading-none"
          >
            {selectedCategory.title[language]}
          </motion.h2>
          <motion.p 
            layoutId={`desc-${selectedCategory.id}`} 
            transition={morphTransition} 
            style={{ originX: 0 }}
            className="text-xl font-bold opacity-40 uppercase tracking-[0.2em]"
          >
            {selectedCategory.desc[language]}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ 
            animate: { delay: 0.35, duration: 0.5 },
            exit: { duration: 0.1 }
          }}
          className="space-y-6 flex-grow overflow-y-auto pr-4 custom-scrollbar pb-32"
        >
          {selectedCategory.articles.map((art) => (
            <button key={art.id} onClick={() => onNav(art.id)} className="w-full bg-white/80 backdrop-blur-md p-10 rounded-[48px] flex items-center justify-between active:scale-[0.98] border-2 border-white shadow-xl hover:bg-white transition-all group">
              <span className="text-3xl font-black text-slate-800 group-hover:text-[#003B71] transition-colors">{art.title[language]}</span>
              <ChevronRight size={48} className="text-[#003B71]/20 group-hover:text-[#003B71] group-hover:translate-x-3 transition-all" />
            </button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

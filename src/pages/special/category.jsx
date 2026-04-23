import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, BookOpen, CheckCircle2, ChevronRight, Layout, Info } from 'lucide-react';
import { useCategories } from '../../constants/categories';
import { appleSpring, staggerContainer, staggerItem } from '../../constants/animations';

export default function CategoryPage({ categoryId, onNav, language = 'ET', handleBack }) {
  const categories = useCategories();
  const selectedCategory = categories.find(c => c.id === categoryId);

  if (!selectedCategory) return null;

  const stats = [
    { label: { ET: 'Teemat', EN: 'Topics' }, value: selectedCategory.articles.length, icon: <BookOpen size={16} /> }
  ];

  const labels = {
    articles: { ET: 'Peatüki sisukord', EN: 'Chapter Contents' },
    intro: { ET: 'Ülevaade', EN: 'Overview' },
    back: { ET: 'Tagasi pealehele', EN: 'Back to Home' }
  };

  return (
    <motion.div 
      key="category-overlay"
      layoutId={`card-${selectedCategory.id}`}
      transition={appleSpring}
      initial={{ borderRadius: 40, opacity: 1 }}
      animate={{ borderRadius: 0, opacity: 1 }}
      exit={{ borderRadius: 40, opacity: 1 }}
      className={`fixed inset-0 z-[200] flex flex-col items-center bg-[var(--color-bg-page)] overflow-y-auto custom-scrollbar transition-colors duration-500`}
    >
      {/* 1. SEAMLESS HERO HEADER */}
      <div className="w-full relative min-h-[40vh] md:min-h-[50vh] shrink-0 overflow-hidden bg-[var(--color-brand-blue)]">
        <img 
          src={selectedCategory.imageUrl + "&w=1600&q=85"} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-blue)]/40 via-transparent to-[var(--color-bg-page)]" />
        
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 pt-24 md:pt-36 pb-12 md:pb-20 flex flex-col justify-end h-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <motion.div 
                layoutId={`icon-box-${selectedCategory.id}`} 
                transition={appleSpring} 
                className="w-14 h-14 md:w-16 md:h-16 bg-[var(--color-brand-gold)] rounded-[24px] text-black shadow-2xl flex items-center justify-center shrink-0 rotate-3"
              >
                {React.cloneElement(selectedCategory.icon, { size: 32, strokeWidth: 2.5 })}
              </motion.div>
              
              <motion.div layoutId={`content-${selectedCategory.id}`} transition={appleSpring} className="space-y-1">
                <motion.h2 
                  layoutId={`title-${selectedCategory.id}`} 
                  className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9] px-1 drop-shadow-2xl text-balance "
                >
                  {selectedCategory.title[language]}
                </motion.h2>
              </motion.div>
            </div>

            <div className="flex items-center gap-4">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-[var(--color-brand-gold)] shadow-xl">
                  {s.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">{s.value} {s.label[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTENT GRID */}
      <div className="w-full max-w-7xl px-4 md:px-12 -mt-10 relative z-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Overview Section (6 columns) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-[var(--color-bg-card)] rounded-[60px] p-8 md:p-14 shadow-2xl border-2 border-[var(--color-border-subtle)] transition-colors duration-500 overflow-hidden relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-10 bg-[var(--color-brand-gold)] rounded-full shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black text-[var(--color-text-primary)] uppercase tracking-tighter italic">{labels.intro[language]}</h3>
              </div>
              
              <p className="text-[1.8rem] font-bold text-[var(--color-text-primary)] leading-tight text-balance mb-12 italic opacity-80">
                {selectedCategory.desc[language]}
              </p>

              <div className="grid grid-cols-1 gap-6 mb-12">
                 <div className="rounded-[40px] overflow-hidden aspect-video relative border-2 border-slate-100 shadow-lg">
                    <img src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80&sig=1-${categoryId}`} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/30 to-transparent" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-[32px] overflow-hidden aspect-square border-2 border-slate-50 shadow-md">
                       <img src={`https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80&sig=2-${categoryId}`} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="rounded-[32px] overflow-hidden aspect-square border-2 border-slate-50 shadow-md">
                       <img src={`https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80&sig=3-${categoryId}`} className="w-full h-full object-cover" alt="" />
                    </div>
                 </div>
              </div>

              <div className="prose max-w-none text-[1.8rem] text-[var(--color-text-secondary)] font-bold leading-relaxed text-balance">
                 {selectedCategory.introProse ? selectedCategory.introProse[language] : ""}
              </div>
            </div>
          </div>

          {/* Topics Grid (6 columns) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-[var(--color-bg-button-alt)]/30 rounded-[60px] p-6 md:p-12 border-2 border-white/60 shadow-xl min-h-full transition-colors duration-500">
              <div className="flex items-center justify-between mb-10 px-4">
                 <div className="space-y-1">
                   <h3 className="text-2xl font-black text-[var(--color-text-primary)] uppercase tracking-widest italic">{labels.articles[language]}</h3>
                   <div className="h-1 w-12 bg-[var(--color-brand-gold)] rounded-full" />
                 </div>
                 <CheckCircle2 size={32} className="text-slate-200" strokeWidth={3} />
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 gap-4"
              >
                {selectedCategory.articles.map((art, idx) => (
                  <motion.button 
                    key={art.id} 
                    variants={staggerItem}
                    onClick={() => onNav(art.id)} 
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full group p-4 md:p-5 bg-[var(--color-bg-card)] rounded-[24px] border-2 border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gold)] hover:shadow-lg transition-all text-left flex items-center justify-between gap-4 relative overflow-hidden min-h-[60px] md:min-h-[70px]`}
                  >
                    <div className="flex items-center gap-4 md:gap-6 relative z-10 min-w-0 flex-1">
                      <span className="text-lg md:text-xl font-black text-[var(--color-brand-gold)] opacity-40 italic tabular-nums shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className="text-[1.9rem] font-black text-[var(--color-text-primary)] leading-tight uppercase italic block whitespace-nowrap truncate pr-2">
                          {art.title[language]}
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[var(--color-bg-card)] flex items-center justify-center text-slate-200 group-hover:text-[var(--color-brand-gold)] group-hover:bg-[var(--color-brand-blue)] transition-all duration-500 shrink-0 shadow-sm border border-[var(--color-border-subtle)]">
                       <ChevronRight size={18} strokeWidth={3} />
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              <div className="mt-16 pt-10 border-t-2 border-white/40">
                 <button 
                   onClick={() => onNav('home')}
                   className="w-full py-8 bg-[var(--color-brand-blue)] text-white rounded-[32px] font-black uppercase tracking-[0.2em] italic hover:bg-blue-800 hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-4 shadow-xl border-b-4 border-black/20"
                 >
                   <ArrowRight size={20} className="rotate-180" strokeWidth={3} />
                   <span className="text-sm md:text-base">{labels.back[language]}</span>
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

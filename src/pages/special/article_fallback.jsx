import React, { useMemo } from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip";
import { useCategories, getNextArticle } from "../../constants/categories";
import { staggerContainer, staggerItem } from "../../constants/animations";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from 'lucide-react';

export default function ArticleFallback({ articleId, language = 'ET', onNav }) {
  const categories = useCategories();
  
  const { selectedCategory, selectedArticle } = useMemo(() => {
    for (const cat of categories) {
      const art = cat.articles.find(a => a.id === articleId);
      if (art) return { selectedCategory: cat, selectedArticle: art };
    }
    return { selectedCategory: null, selectedArticle: null };
  }, [categories, articleId]);

  const nextArticle = useMemo(() => 
    getNextArticle(articleId, categories),
  [articleId, categories]);

  const labels = {
    notFound: { ET: "Artikli andmeid ei leitud", EN: "Article Data Not Found" },
    procedure: { ET: "PROTSEDUUR", EN: "PROCEDURE" },
    nextTopic: { ET: "Järgmine teema", EN: "Next Topic" }
  };

  if (!selectedArticle) return <div className="p-20 text-center font-black opacity-20 uppercase tracking-widest">{labels.notFound[language]}</div>;

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-full overflow-x-hidden">
      <motion.div variants={staggerItem}>
        <Section 
          title={selectedArticle.title[language]} 
          sub={selectedCategory.title[language]}
        >
          <div className="prose prose-lg md:prose-2xl text-balance  prose-slate max-w-full font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12 overflow-x-hidden">
            {selectedArticle.content ? selectedArticle.content[language] : ""}
          </div>

          {selectedArticle.table && (
            <div className="w-full overflow-x-auto my-8 no-scrollbar">
              <Table 
                headers={selectedArticle.table.headers[language]}
                rows={selectedArticle.table.rows[language]}
              />
            </div>
          )}

          {selectedArticle.warnings && (selectedArticle.warnings[language]).map((w, i) => (
            <Warning key={i}>{w}</Warning>
          ))}

          {selectedArticle.steps && (
            <div className="relative my-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-10 bg-[#FFD000] rounded-full shrink-0" />
                <h3 className="text-[clamp(1.5rem,5vw,2.5rem)] font-black text-[#003B71] uppercase tracking-tighter italic">
                  {labels.procedure[language]}
                </h3>
              </div>
              
              <div className="space-y-6 relative">
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-[#003B71]/5 rounded-full" />
                {(selectedArticle.steps[language]).map((step, idx) => (
                  <motion.div key={idx} variants={staggerItem} className="relative pl-16 md:pl-20 group">
                    <div className="absolute left-4 md:left-6 top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white border-4 border-[#FFD000] z-10 shadow-sm group-hover:scale-125 transition-transform duration-500" />
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#e9ecef] shadow-sm hover:shadow-xl hover:border-[#FFD000]/30 transition-all duration-500 group-hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <span className="text-4xl md:text-5xl font-black text-slate-100 italic leading-none select-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-lg md:text-2xl font-bold text-slate-600 leading-relaxed pt-1 text-balance">
                          {step}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {selectedArticle.tips && (selectedArticle.tips[language]).map((t, i) => (
            <Tip key={i}>{t}</Tip>
          ))}

          {/* Sequential Flow Footer */}
          {nextArticle && (
            <div className="mt-32 pt-16 border-t-2 border-slate-100">
               <div className="flex items-center gap-3 text-slate-300 font-black text-[10px] uppercase tracking-[0.4em] italic mb-8 px-2">
                 <BookOpen size={14} />
                 {labels.nextTopic[language]}
               </div>
               
               <button 
                 onClick={() => onNav(nextArticle.id)}
                 className="w-full group p-8 md:p-12 bg-slate-50/50 hover:bg-[var(--color-bg-card)] rounded-[48px] border-2 border-transparent hover:border-[var(--color-brand-gold)] hover:shadow-2xl transition-all text-left flex flex-col md:flex-row items-center justify-between gap-8"
               >
                 <div className="space-y-2 min-w-0">
                    <span className="text-[10px] font-black text-[var(--color-brand-gold)] uppercase tracking-widest italic block">
                       {nextArticle.categoryTitle?.[language]}
                    </span>
                    <h4 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tighter leading-tight text-balance">
                       {nextArticle.title[language]}
                    </h4>
                 </div>

                 <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[var(--color-brand-blue)] text-[var(--color-brand-gold)] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <ArrowRight size={40} strokeWidth={3} />
                 </div>
               </button>
            </div>
          )}
        </Section>
      </motion.div>
    </motion.div>
  );
}

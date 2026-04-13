import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip";
import { useCategories } from "../../constants/categories";
import { slideUp } from "../../constants/animations";
import { motion } from "framer-motion";

export default function ArticleFallback({ articleId, language = 'ET' }) {
  const categories = useCategories();
  
  let selectedCategory = null;
  let selectedArticle = null;

  for (const cat of categories) {
    const art = cat.articles.find(a => a.id === articleId);
    if (art) {
      selectedCategory = cat;
      selectedArticle = art;
      break;
    }
  }

  if (!selectedArticle) return <div className="p-20 text-center font-black opacity-20 uppercase tracking-widest">Article Data Not Found</div>;

  return (
    <motion.div {...slideUp}>
      <Section 
        title={selectedArticle.title[language]} 
        sub={selectedCategory.title[language]}
      >
        <div className="prose prose-2xl prose-slate max-w-none font-bold whitespace-pre-wrap text-slate-600 leading-relaxed mb-12">
          {selectedArticle.content ? selectedArticle.content[language] : ""}
        </div>

        {selectedArticle.table && (
          <Table 
            headers={selectedArticle.table.headers[language]}
            rows={selectedArticle.table.rows[language]}
          />
        )}

        {selectedArticle.warnings && (selectedArticle.warnings[language]).map((w, i) => (
          <Warning key={i}>{w}</Warning>
        ))}

        {selectedArticle.steps && (
          <div className="bg-slate-50 rounded-[32px] p-10 border-2 border-slate-100 space-y-10 my-12">
            <div className="flex items-center gap-4 text-[#003B71]">
              <div className="w-1.5 h-8 bg-[#FFD000] rounded-full" />
              <h3 className="text-2xl font-black uppercase tracking-tight italic">PROTSEDUUR</h3>
            </div>
            <ul className="space-y-6">
              {(selectedArticle.steps[language]).map((step, idx) => (
                <li key={idx} className="flex items-start gap-6 bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm"> 
                  <span className="flex items-center justify-center w-12 h-12 rounded-[16px] bg-[#FFD000] text-black text-xl font-black shrink-0 shadow-sm">{idx + 1}</span> 
                  <p className="text-lg font-bold text-slate-600 leading-relaxed">{step}</p> 
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedArticle.tips && (selectedArticle.tips[language]).map((t, i) => (
          <Tip key={i}>{t}</Tip>
        ))}
      </Section>
    </motion.div>
  );
}

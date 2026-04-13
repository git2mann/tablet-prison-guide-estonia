import React from 'react';
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Table from "../../components/ui/Table";
import Tip from "../../components/ui/Tip";
import { useCategories } from "../../constants/categories";

export default function ArticleFallback({ articleId, language = 'ET' }) {
  const categories = useCategories();
  
  // Find category and article metadata
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

  if (!selectedArticle) return <div className="p-20 text-center font-black opacity-20">ARTICLE DATA NOT FOUND</div>;

  return (
    <Section 
      title={selectedArticle.title[language]} 
      sub={selectedCategory.title[language]}
    >
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {/* Note: In the final structure, content is usually in the component itself.
            This fallback is only for metadata-only articles if any remain. */}
        {selectedArticle.content ? selectedArticle.content[language] : "Content will be added soon."}
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
        <div className="bg-slate-900 rounded-[60px] p-16 text-white space-y-12 my-12">
          <div className="flex items-center gap-8 text-blue-400">
            <h3 className="text-4xl font-black uppercase tracking-tight italic">PROCEDURE</h3>
          </div>
          <ul className="grid gap-8">
            {(selectedArticle.steps[language]).map((step, idx) => (
              <li key={idx} className="flex items-start gap-8 bg-white/5 p-8 rounded-[40px] border border-white/10"> 
                <span className="flex items-center justify-center w-16 h-16 rounded-[24px] bg-blue-600 text-white text-3xl font-black shrink-0">{idx + 1}</span> 
                <p className="text-2xl font-bold text-slate-200 leading-relaxed">{step}</p> 
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedArticle.tips && (selectedArticle.tips[language]).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}

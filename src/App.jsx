import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Languages, LogOut, Volume2, 
  Pause, X, Home, ChevronRight as ChevronIcon,
  Play, Smartphone, Eye, EyeOff, Moon, Sun
} from 'lucide-react';
import { useCategories } from './constants/categories';
import Router from './components/Router';
import { SectionImage } from './components/ui/SectionImage';
import { appleSpring, fadeIn, uiTransition } from './constants/animations';

const App = () => {
  const [page, setPage] = useState('landing');
  const [language, setLanguage] = useState('ET');
  const [isAccessible, setIsAccessible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showHandoverMsg, setShowHandoverMsg] = useState(false);
  
  const categories = useCategories();

  useEffect(() => {
    const root = document.documentElement;
    if (isAccessible) root.classList.add('accessibility-mode');
    else root.classList.remove('accessibility-mode');
    
    if (isDarkMode) root.classList.add('dark-mode');
    else root.classList.remove('dark-mode');
  }, [isAccessible, isDarkMode]);

  const selectedCategoryId = useMemo(() => {
    if (page.startsWith('category.')) return page.replace('category.', '');
    if (page.includes('.')) {
      const prefix = page.split('.')[0];
      if (categories.find(c => c.id === prefix)) return prefix;
    }
    if (categories.find(c => c.id === page)) return page;
    return null;
  }, [page, categories]);

  const selectedArticleId = (page.includes('.') && !page.startsWith('category.')) ? page : null;
  const showAdmin = page === 'admin';
  const isTool = ['glossary', 'calculator', 'assistant', 'faq'].includes(page);
  const isLanding = page === 'landing';

  const selectedCategory = useMemo(() => 
    categories.find(c => c.id === selectedCategoryId),
  [categories, selectedCategoryId]);

  const selectedArticleMetadata = useMemo(() => {
    if (!selectedCategory || !selectedArticleId) return null;
    return selectedCategory.articles.find(a => a.id === selectedArticleId);
  }, [selectedCategory, selectedArticleId]);

  useEffect(() => {
    const shouldLock = selectedCategoryId || selectedArticleId || showAdmin || isTool || isLanding;
    document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
  }, [selectedCategoryId, selectedArticleId, showAdmin, isTool, isLanding]);

  const handleBack = () => {
    if (selectedArticleId) setPage(`category.${selectedCategoryId}`);
    else if (selectedCategoryId || showAdmin || isTool) setPage('home');
    else if (isLanding) setPage('home');
  };

  const uiStrings = {
    exit: { ET: 'Välju', EN: 'Exit' },
    title: { ET: 'Vangi käsiraamat', EN: 'Handbook' },
    subtitle: { ET: 'Turgutav Intranet', EN: 'SAFE INTRANET' },
    statusActive: { ET: 'Süsteem aktiivne', EN: 'System Active' },
    monitor: { ET: 'Monitor', EN: 'Monitor' },
    footer: { ET: 'TURVATUD SISEVÕRK', EN: 'SECURE INTRANET' },
    audioGuide: { ET: 'Helijuhis', EN: 'Audio Guide' },
    awesome: { ET: 'Sule aken', EN: 'Got it' },
    accessibility: { ET: 'Ligipääsetavus', EN: 'Accessibility' },
    darkMode: { ET: 'Tume režiim', EN: 'Dark Mode' }
  };

  const textColor = 'text-[var(--color-text-primary)]';

  return (
    <div className={`min-h-screen bg-[var(--color-bg-page)] font-sans text-[var(--color-text-primary)] flex flex-col select-none touch-manipulation transition-colors duration-500 ${isLanding ? 'pt-0' : 'pt-16 md:pt-24 pb-8'}`}>
      
      {/* HEADER: Now always visible for toggles, but navigation parts are conditional */}
      <header className="fixed top-0 left-0 right-0 z-[1000] h-16 md:h-24 bg-[var(--color-bg-header)] backdrop-blur-2xl border-b border-[var(--color-border-subtle)] transition-colors duration-500">
        <div className="max-w-7xl mx-auto h-full flex items-center px-2 md:px-12 relative z-10 overflow-hidden">
          
          {/* LEFT: BACK / EXIT (Hidden on Landing) */}
          <div className="flex items-center gap-2 md:gap-6 flex-shrink-0 min-w-[40px] md:min-w-[80px]">
            {!isLanding && (
              <AnimatePresence mode="wait">
                {(selectedCategoryId || selectedArticleId || showAdmin || isTool) ? (
                  <motion.button 
                    key="back" 
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                    onClick={handleBack} 
                    className="p-2 md:p-5 bg-[var(--color-bg-button-alt)] rounded-full text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-gold)] transition-all shadow-sm flex-shrink-0"
                  >
                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                  </motion.button>
                ) : (
                  <motion.button 
                    key="exit" 
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setShowHandoverMsg(true)} 
                    className="p-2 md:p-5 bg-[var(--color-brand-gold)] text-black rounded-full shadow-lg hover:shadow-xl transition-all flex-shrink-0"
                  >
                    <LogOut className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                  </motion.button>
                )}
              </AnimatePresence>
            )}
            
            {!isLanding && (
              <div className="hidden lg:flex flex-col flex-shrink-0">
                <span className={`font-black text-[10px] uppercase tracking-[0.3em] opacity-30 leading-none mb-1 ${textColor}`}>{uiStrings.subtitle[language]}</span>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${textColor}`}>{uiStrings.statusActive[language]}</span>
                </div>
              </div>
            )}
          </div>

          {/* BREADCRUMBS (Hidden on Landing) */}
          <div className="flex-1 flex items-center justify-start px-2 md:px-8 min-w-0 overflow-hidden">
            {!isLanding && (
              <div className="flex items-center gap-1.5 md:gap-3 flex-nowrap min-w-0">
                <button 
                  onClick={() => setPage('home')} 
                  className={`items-center p-1.5 rounded-lg transition-all hover:bg-[var(--color-bg-button-alt)] flex-shrink-0 ${(!selectedCategoryId && !showAdmin && !isTool) ? 'pointer-events-none' : 'opacity-40 hover:opacity-100'} ${textColor} ${selectedArticleId || isTool || selectedCategoryId ? 'hidden md:flex' : 'flex'}`}
                >
                  <Home className="w-4 h-4 md:w-6 md:h-6" strokeWidth={2.5} />
                </button>

                {(selectedCategoryId || showAdmin || isTool) && (
                  <div className={`shrink-0 opacity-20 ${textColor} ${selectedArticleId || isTool || selectedCategoryId ? 'hidden md:block' : 'block'}`}>
                    <ChevronIcon className="w-3 h-3 md:w-5 md:h-5" strokeWidth={3} />
                  </div>
                )}
                
                <div className="flex items-center gap-1 md:gap-2 min-w-0">
                  {showAdmin && (
                    <span className={`text-[10px] md:text-lg font-black uppercase italic tracking-tighter shrink-0 truncate ${textColor}`}>
                      {uiStrings.monitor[language]}
                    </span>
                  )}

                  {selectedCategory && (
                    <div className={`flex items-center gap-1 md:gap-2 min-w-0 ${selectedArticleId ? 'hidden md:flex' : 'flex'}`}>
                      <button 
                        onClick={() => setPage(`category.${selectedCategory.id}`)} 
                        className={`text-[11px] md:text-lg font-black uppercase italic tracking-tighter transition-all truncate px-1 rounded-lg ${selectedArticleId ? 'opacity-40' : 'pointer-events-none'} ${textColor}`}
                      >
                        {selectedCategory.title[language]}
                      </button>
                      {selectedArticleId && (
                        <ChevronIcon className={`w-3 h-3 md:w-4 md:h-4 shrink-0 opacity-20 ${textColor}`} strokeWidth={3} />
                      )}
                    </div>
                  )}

                  {isTool && (
                    <span className={`text-[11px] md:text-lg font-black uppercase italic tracking-tighter shrink-0 truncate ${textColor}`}>
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </span>
                  )}

                  {selectedArticleId && selectedArticleMetadata && (
                    <span className={`text-[11px] md:text-lg font-black uppercase italic tracking-tighter px-1 min-w-0 truncate ${textColor}`}>
                      {selectedArticleMetadata.title[language]}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: CONTROLS (Always Visible) */}
          <div className="flex items-center justify-end gap-1.5 md:gap-4 flex-shrink-0">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`active:scale-95 h-8 w-8 md:h-14 md:w-14 rounded-full font-black border-2 flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-[var(--color-brand-gold)] border-[var(--color-brand-gold)] text-black' : 'bg-white border-slate-100 text-slate-200'}`}
            >
              {isDarkMode ? <Sun size={16} md:size={22} strokeWidth={3} /> : <Moon size={16} md:size={22} strokeWidth={2} />}
            </button>

            <button 
              onClick={() => setIsAccessible(!isAccessible)} 
              className={`active:scale-95 h-8 w-8 md:h-14 md:w-14 rounded-full font-black border-2 flex items-center justify-center transition-all shadow-sm ${isAccessible ? 'bg-[var(--color-brand-blue)] border-[var(--color-brand-blue)] text-[var(--color-brand-gold)]' : 'bg-white border-slate-100 text-slate-200'}`}
            >
              {isAccessible ? <Eye size={16} md:size={22} strokeWidth={3} /> : <EyeOff size={16} md:size={22} strokeWidth={2} />}
            </button>

            <button 
              onClick={() => setLanguage(l => l === 'ET' ? 'EN' : 'ET')} 
              className="active:scale-95 h-8 md:h-14 px-2 md:px-4 rounded-full font-black border-2 flex items-center gap-1 transition-all shadow-sm bg-white border-slate-100 text-[#003B71]"
            >
              <Languages className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[10px] md:text-xs uppercase tracking-widest">{language}</span>
            </button>
          </div>
        </div>
        <motion.div className="absolute bottom-0 left-0 h-1 w-full bg-[#FFD000]" initial={{ scaleX: 0 }} animate={{ scaleX: (selectedArticleId || isTool) ? 1 : selectedCategoryId ? 0.6 : (isLanding ? 0 : 0.05) }} transition={{ duration: 0.8 }} style={{ originX: 0 }} />
      </header>
      
      <main className="page-content-typography flex-grow w-full mx-auto relative min-h-[85vh] overflow-x-hidden">
        {/* LANDING PAGE */}
        <AnimatePresence>
          {isLanding && (
            <Router page="landing" onNav={setPage} language={language} />
          )}
        </AnimatePresence>

        {/* DASHBOARD (Base Layer) */}
        {!isLanding && (
          <motion.div 
            animate={{ 
              filter: (selectedCategoryId || showAdmin || isTool) ? 'blur(8px) brightness(0.7)' : 'blur(0px) brightness(1)',
              scale: (selectedCategoryId || showAdmin || isTool) ? 0.98 : 1,
              opacity: (selectedCategoryId || showAdmin || isTool) ? 0.5 : 1
            }}
            transition={isAccessible ? { duration: 0 } : uiTransition}
            className="w-full h-full overflow-x-hidden will-change-[filter,transform,opacity]"
          >
            <Router page="home" onNav={setPage} language={language} />
          </motion.div>
        )}

        {/* CATEGORY OVERLAY */}
        <AnimatePresence>
          {selectedCategoryId && (
            <Router page={`category.${selectedCategoryId}`} onNav={setPage} language={language} handleBack={handleBack} />
          )}
        </AnimatePresence>

        {/* TOOL OVERLAY */}
        <AnimatePresence mode="wait">
          {isTool && (
             <motion.div 
                key={page}
                initial={isAccessible ? { opacity: 1 } : { opacity: 0, y: '20%' }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={isAccessible ? { opacity: 1 } : { opacity: 0, y: '20%' }} 
                transition={isAccessible ? { duration: 0 } : uiTransition} 
                className="fixed inset-0 z-[400] bg-[var(--color-bg-overlay)] flex flex-col border-t-[16px] border-[#FFD000] overflow-y-auto overflow-x-hidden custom-scrollbar pb-12 pt-20 md:pt-32 transition-colors duration-500 will-change-transform"
             >
                <Router page={page} onNav={setPage} language={language} handleBack={handleBack} />
             </motion.div>
          )}
        </AnimatePresence>

        {/* ARTICLE OVERLAY */}
        <AnimatePresence>
          {selectedArticleId && (
             <motion.div 
                key={selectedArticleId}
                initial={isAccessible ? { opacity: 1 } : { opacity: 0, y: '20%' }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={isAccessible ? { opacity: 1 } : { opacity: 0, y: '20%' }} 
                transition={isAccessible ? { duration: 0 } : uiTransition} 
                className="fixed inset-0 z-[300] bg-[var(--color-bg-page)] flex flex-col border-t-[16px] border-[var(--color-brand-blue)] overflow-y-auto overflow-x-hidden custom-scrollbar pb-12 pt-20 md:pt-32 transition-colors duration-500 will-change-transform"
             >
                <div className="w-full max-w-5xl mx-auto flex flex-col overflow-x-hidden">
                   <SectionImage url={selectedCategory?.imageUrl} />
                   <div className="p-6 md:p-16">
                      <Router page={selectedArticleId} onNav={setPage} language={language} />
                   </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        {/* MONITOR OVERLAY */}
        <AnimatePresence>
          {showAdmin && (
            <Router page="admin" onNav={setPage} language={language} />
          )}
        </AnimatePresence>
      </main>

      {!isLanding && (
        <footer className="py-16 text-center opacity-30 text-[10px] font-black uppercase tracking-[0.5em] pointer-events-none text-slate-400">
          v22.2.0 • {uiStrings.footer[language]}
        </footer>
      )}
      
      <AnimatePresence>
        {isAudioPlaying && (
          <motion.div 
            initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }}
            transition={isAccessible ? { duration: 0 } : appleSpring}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1500] w-[92%] max-w-2xl bg-[var(--color-bg-card)]/90 backdrop-blur-3xl rounded-[40px] p-6 shadow-2xl border-2 border-[var(--color-border-subtle)] flex items-center justify-between gap-8 transition-colors duration-500"
          >
             <div className="flex items-center gap-5 flex-1 min-w-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[var(--color-brand-blue)] rounded-2xl flex items-center justify-center text-[var(--color-brand-gold)] shadow-xl shrink-0">
                   <Play size={28} fill="currentColor" />
                </div>
                <div className="min-w-0">
                   <div className="text-[10px] font-black text-[var(--color-brand-gold)] uppercase tracking-widest leading-none mb-2">{uiStrings.audioGuide[language]}</div>
                   <div className="text-lg font-black text-[var(--color-text-primary)] truncate uppercase italic">{selectedArticleMetadata?.title[language]}</div>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <button onClick={() => setIsAudioPlaying(false)} className="p-5 bg-[var(--color-brand-blue)] text-white rounded-full shadow-lg active:scale-90 transition-transform">
                   <Pause size={28} fill="currentColor" />
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHandoverMsg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-6">
            <motion.div initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }} transition={appleSpring} className="bg-[var(--color-bg-card)] rounded-[60px] p-10 md:p-16 max-w-sm w-full text-center space-y-10 shadow-2xl border-4 border-[var(--color-border-subtle)]">
              <div className="w-20 h-20 bg-[var(--color-brand-gold)] rounded-[28px] flex items-center justify-center mx-auto shadow-2xl rotate-12 group">
                <Smartphone size={48} className="text-black group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-[var(--color-text-primary)] uppercase tracking-tighter italic leading-none">Portaali info</h3>
                <p className="text-lg text-[var(--color-text-secondary)] font-bold leading-relaxed text-balance">Süsteem on turvatud ja Teie tegevus on logitud.</p>
              </div>
              <button onClick={() => setShowHandoverMsg(false)} className="w-full py-5 bg-[var(--color-brand-blue)] text-white rounded-[28px] text-xl font-black active:scale-95 shadow-xl transition-all hover:bg-blue-800 uppercase italic">{uiStrings.awesome[language]}</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

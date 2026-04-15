import React, { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ArrowLeft, Languages, LogOut, Volume2, 
  Pause, RotateCcw, RotateCw, X, Home, ChevronRight as ChevronIcon,
  Play, Smartphone, Command
} from 'lucide-react';
import { useCategories } from './constants/categories';
import Router from './components/Router';
import { SectionImage } from './components/ui/SectionImage';
import { appleSpring, fadeIn, slideTransition, slideUp, morphTransition } from './constants/animations';

/**
 * Vangi Käsiraamat (Inmate Handbook) - v22.2.0
 * UNIFIED MODULAR ENGINE - APPLE PREMIUM STYLE
 */

const App = () => {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('ET');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showHandoverMsg, setShowHandoverMsg] = useState(false);
  
  const categories = useCategories();

  // Unified State Mapping
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

  const selectedCategory = useMemo(() => 
    categories.find(c => c.id === selectedCategoryId),
  [categories, selectedCategoryId]);

  const selectedArticleMetadata = useMemo(() => {
    if (!selectedCategory || !selectedArticleId) return null;
    return selectedCategory.articles.find(a => a.id === selectedArticleId);
  }, [selectedCategory, selectedArticleId]);

  // RESET SCROLL ON NAV
  // REMOVED: Global scroll reset on page change to preserve "Back" position
  // The independent overflow containers (fixed overlays) and the root div
  // will now naturally maintain their scroll positions while mounted.

  useEffect(() => {
    document.body.style.overflow = (selectedCategoryId || selectedArticleId || showAdmin) ? 'hidden' : 'auto';
  }, [selectedCategoryId, selectedArticleId, showAdmin]);

  const handleBack = () => {
    if (selectedArticleId) setPage(`category.${selectedCategoryId}`);
    else if (selectedCategoryId || showAdmin) setPage('home');
  };

  const uiStrings = {
    exit: { ET: 'Välju', RU: 'Выйти', EN: 'Exit' },
    title: { ET: 'Vangi käsiraamat', RU: 'Справоchnik', EN: 'Handbook' },
    subtitle: { ET: 'Turgutav Intranet', EN: 'SAFE INTRANET' },
    back: { ET: 'Tagasi', RU: 'Назад', EN: 'Back' },
    exitHeading: { ET: 'VaPo portaal', RU: 'VaPo портал', EN: 'VaPo Portal' },
    exitBody: { ET: 'Suuname teid tagasi...', RU: 'Возврат...', EN: 'Returning...' },
  };

  const headerBgClass = 'bg-white/90';
  const textColor = 'text-[#003B71]';

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900 flex flex-col select-none touch-manipulation pt-16 md:pt-20 lg:pt-24 pb-8 overflow-x-hidden overflow-y-auto">
      
      {/* APPLE PREMIUM HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-[1000] h-16 md:h-20 lg:h-24 transition-all duration-700 ${headerBgClass} backdrop-blur-3xl`}>
        <div className={`absolute inset-0 backdrop-blur-md bg-white/40`} />
        
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-12 relative z-10">
          
          {/* LEFT: STATUS & BACK */}
          <div className="flex items-center gap-3 md:gap-6">
            <AnimatePresence mode="wait">
              {(selectedCategoryId || selectedArticleId || showAdmin) ? (
                <motion.button 
                  key="back" 
                  {...fadeIn} 
                  onClick={handleBack} 
                  whileTap={{ scale: 0.9 }}
                  className="p-2 md:p-4 bg-slate-100 rounded-full text-[#003B71] hover:bg-slate-200 transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                </motion.button>
              ) : (
                <motion.button 
                  key="exit" 
                  {...fadeIn} 
                  onClick={() => setShowHandoverMsg(true)} 
                  whileTap={{ scale: 0.95 }}
                  className="p-2 md:p-4 bg-[#FFD000] text-black rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <LogOut className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                </motion.button>
              )}
            </AnimatePresence>
            
            <div className={`hidden lg:flex flex-col ${textColor}`}>
               <span className="font-black text-xs uppercase tracking-[0.3em] opacity-40 leading-none mb-1">{uiStrings.subtitle[language]}</span>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Süsteem aktiivne</span>
               </div>
            </div>
          </div>

          {/* CENTER: BREADCRUMBS */}
          <div className="flex-grow flex items-center justify-start px-2 md:px-6 lg:px-12 overflow-hidden relative">
            <motion.div 
              layout
              transition={appleSpring}
              className="flex items-center gap-1 lg:gap-3 max-w-full overflow-hidden"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.button 
                  key="bc-home" 
                  layout="position"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: (!selectedCategoryId && !showAdmin) ? 1 : 0.4, 
                    x: 0
                  }}
                  exit={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={appleSpring} 
                  onClick={() => setPage('home')} 
                  className={`flex items-center p-1.5 md:p-2 rounded-xl transition-colors hover:bg-slate-100/50 whitespace-nowrap ${(!selectedCategoryId && !showAdmin) ? 'pointer-events-none' : ''} ${textColor}`}
                >
                  <Home className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                </motion.button>

                {(selectedCategoryId || showAdmin) && (
                  <motion.div 
                    key="bc-cat-sep" 
                    layout="position"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 0.2, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={appleSpring}
                    className={`shrink-0 ${textColor}`}
                  >
                    <ChevronIcon className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                  </motion.div>
                )}
                
                {showAdmin && (
                  <motion.span 
                    key="bc-admin" 
                    layout="position"
                    initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                    transition={appleSpring}
                    className={`text-[clamp(8px,1.1vw,16px)] font-extrabold uppercase tracking-tighter whitespace-nowrap ${textColor}`}
                  >
                    Monitor
                  </motion.span>
                )}

                {selectedCategory && (
                  <motion.button 
                    key={`bc-cat-${selectedCategory.id}`} 
                    layout="position"
                    initial={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                    animate={{ opacity: selectedArticleId ? 0.4 : 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                    whileHover={{ opacity: 1, x: selectedArticleId ? 3 : 0 }}
                    whileTap={{ scale: 0.98 }}
                    transition={appleSpring} 
                    onClick={() => setPage(`category.${selectedCategory.id}`)} 
                    className={`text-[clamp(8px,1.1vw,16px)] font-extrabold uppercase tracking-tighter whitespace-nowrap px-1 md:px-2 py-1 rounded-lg transition-all ${selectedArticleId ? 'pointer-events-auto hover:bg-slate-100/50' : 'pointer-events-none'} ${textColor} ${selectedArticleId ? 'hidden sm:inline-block' : ''}`}
                  >
                    {selectedCategory.title[language]}
                  </motion.button>
                )}

                {selectedArticleId && selectedArticleMetadata && (
                  <>
                    <motion.div 
                      key="bc-art-sep" 
                      layout="position"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 0.2, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={appleSpring}
                      className={`shrink-0 ${textColor} hidden sm:block`}
                    >
                      <ChevronIcon className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                    </motion.div>
                    <motion.span 
                      key={`bc-art-${selectedArticleId}`} 
                      layout="position"
                      initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                      transition={appleSpring}
                      className={`text-[clamp(8px,1.1vw,16px)] font-extrabold uppercase tracking-tighter whitespace-nowrap px-1 ${textColor}`}
                    >
                      {selectedArticleMetadata.title[language]}
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT: CONTROLS */}
          <div className="flex items-center justify-end gap-2 md:gap-4">
            {selectedArticleId && (
              <button onClick={() => setIsAudioPlaying(!isAudioPlaying)} className={`p-2 md:p-4 rounded-full transition-all shadow-lg ${isAudioPlaying ? 'bg-[#FFD000] text-black scale-110' : 'bg-slate-100 text-[#003B71] hover:bg-slate-200'}`}>
                <Volume2 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </button>
            )}
            
            <button 
              onClick={() => setLanguage(l => l === 'ET' ? 'EN' : 'ET')} 
              className={`active:scale-95 h-10 md:h-14 px-4 md:px-6 rounded-full font-black border-2 flex items-center gap-2 transition-all shadow-sm bg-white border-[#e9ecef] text-[#003B71]`}
            >
              <Languages className="w-4 h-4 md:w-5 md:h-5" /><span className="text-[10px] md:text-xs uppercase tracking-widest">{language}</span>
            </button>
          </div>
        </div>
        <motion.div className={`absolute bottom-0 left-0 h-1.5 w-full bg-[#FFD000] shadow-[0_0_20px_rgba(255,208,0,0.5)]`} initial={{ scaleX: 0 }} animate={{ scaleX: selectedArticleId ? 1 : selectedCategoryId ? 0.6 : 0.1 }} transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }} style={{ originX: 0 }} />
      </header>
      
      <main className="flex-grow w-full mx-auto relative min-h-[85vh] overflow-x-hidden">
        <LayoutGroup>
          {/* DASHBOARD (Base Layer) */}
          <motion.div 
            animate={{ 
              filter: (selectedCategoryId || showAdmin) ? 'blur(15px) brightness(0.6)' : 'blur(0px) brightness(1)',
              scale: (selectedCategoryId || showAdmin) ? 0.96 : 1,
              opacity: (selectedCategoryId || showAdmin) ? 0.4 : 1
            }}
            transition={morphTransition}
            className="w-full h-full overflow-x-hidden"
          >
            <Router page="home" onNav={setPage} language={language} />
          </motion.div>

          {/* CATEGORY OVERLAY */}
          <AnimatePresence>
            {selectedCategoryId && (
              <Router page={`category.${selectedCategoryId}`} onNav={setPage} language={language} handleBack={handleBack} />
            )}
          </AnimatePresence>

          {/* ARTICLE OVERLAY */}
          <AnimatePresence>
            {selectedArticleId && (
               <motion.div 
                  key={selectedArticleId}
                  initial={{ opacity: 0, y: '100%' }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: '100%' }} 
                  transition={slideTransition} 
                  className="fixed inset-0 z-[300] bg-white flex flex-col border-t-[16px] border-[#003B71] overflow-y-auto overflow-x-hidden custom-scrollbar pb-12 pt-20 md:pt-28 lg:pt-32"
               >
                  <div className="w-full max-w-5xl mx-auto flex flex-col overflow-x-hidden">
                     <SectionImage url={selectedCategory?.imageUrl} />
                     <div className="p-4 md:p-12">
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
        </LayoutGroup>
      </main>

      {/* FOOTER */}
      <footer className="py-12 text-center opacity-30 text-[10px] font-bold uppercase tracking-[0.4em] pointer-events-none text-slate-400">v22.2.0 • TURVATUD SISEVÕRK</footer>
      
      {/* AUDIO PLAYER (Apple Music Style) */}
      <AnimatePresence>
        {isAudioPlaying && (
          <motion.div 
            initial={{ y: 200, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 200, opacity: 0 }}
            transition={appleSpring}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1500] w-[90%] max-w-2xl bg-white/80 backdrop-blur-3xl rounded-[40px] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-2 border-white flex items-center justify-between gap-8"
          >
             <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-16 h-16 bg-[#003B71] rounded-2xl flex items-center justify-center text-[#FFD000] shadow-xl shrink-0">
                   <Play size={32} fill="currentColor" />
                </div>
                <div className="min-w-0">
                   <div className="text-[10px] font-black text-[#FFD000] uppercase tracking-widest leading-none mb-1">Helijuhis</div>
                   <div className="text-lg font-black text-[#003B71] truncate uppercase italic">{selectedArticleMetadata?.title[language]}</div>
                </div>
             </div>
             <div className="flex items-center gap-6">
                <button onClick={() => setIsAudioPlaying(false)} className="p-5 bg-[#003B71] text-white rounded-full shadow-lg active:scale-90 transition-transform">
                   <Pause size={32} fill="currentColor" />
                </button>
                <button onClick={() => setIsAudioPlaying(false)} className="p-3 text-slate-300 hover:text-slate-600 transition-colors">
                   <X size={24} strokeWidth={3} />
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HANDOVER DIALOG */}
      <AnimatePresence>
        {showHandoverMsg && (
          <motion.div {...fadeIn} className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-6" role="alertdialog">
            <motion.div initial={{ scale: 0.9, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 40, opacity: 0 }} transition={appleSpring} className="bg-white rounded-[50px] p-12 max-w-sm w-full text-center space-y-8 shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-2 border-white">
              <div className="w-24 h-24 bg-[#FFD000] rounded-[32px] flex items-center justify-center mx-auto shadow-2xl rotate-12 group">
                <Smartphone size={48} className="text-black group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-black text-[#003B71] uppercase tracking-tighter italic leading-none">{uiStrings.exitHeading[language]}</h3>
                <p className="text-lg text-slate-500 font-bold leading-relaxed">{uiStrings.exitBody[language]}</p>
              </div>
              <button onClick={() => setShowHandoverMsg(false)} className="w-full py-6 bg-[#003B71] text-white rounded-3xl text-2xl font-black active:scale-95 shadow-xl transition-all hover:bg-[#002b51] uppercase italic">Suurepärane</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

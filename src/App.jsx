import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ArrowLeft, Languages, LogOut, Volume2, 
  Pause, RotateCcw, RotateCw, X, Home, ChevronRight as ChevronIcon
} from 'lucide-react';
import { useCategories } from './constants/categories';
import Router from './components/Router';
import { SectionImage } from './components/ui/SectionImage';
import { morphTransition, slideTransition, slideUp, fadeIn } from './constants/animations';

/**
 * Vangi Käsiraamat (Inmate Handbook) - v22.2.0
 * UNIFIED MODULAR ENGINE - TEDI FRAMEWORK STYLE
 */

const App = () => {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('ET');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0); 
  const [showHandoverMsg, setShowHandoverMsg] = useState(false);
  
  const categories = useCategories();

  // Unified State Mapping
  const selectedCategoryId = page.startsWith('category.') 
    ? page.replace('category.', '') 
    : (page.includes('.') ? page.split('.')[0] : (categories.find(c => c.id === page) ? page : null));
  const selectedArticleId = (page.includes('.') && !page.startsWith('category.')) ? page : null;
  const showAdmin = page === 'admin';

  const selectedCategory = useMemo(() => 
    categories.find(c => c.id === selectedCategoryId),
  [categories, selectedCategoryId]);

  const selectedArticleMetadata = useMemo(() => {
    if (!selectedCategory || !selectedArticleId) return null;
    return selectedCategory.articles.find(a => a.id === selectedArticleId);
  }, [selectedCategory, selectedArticleId]);

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
    subtitle: { ET: 'STABIILSUSE MOOTOR', RU: 'ИНФОРМАЦИЯ', EN: 'STABILITY ENGINE' },
    back: { ET: 'Tagasi', RU: 'Назад', EN: 'Back' },
    exitHeading: { ET: 'VaPo portaal', RU: 'VaPo портал', EN: 'VaPo Portal' },
    exitBody: { ET: 'Suuname teid tagasi...', RU: 'Возврат...', EN: 'Returning...' },
    version: { ET: 'v22.2.0', RU: 'v22.2.0', EN: 'v22.2.0' },
    network: { ET: 'TURVATUD SISEVÕRK', RU: 'СЕТЬ', EN: 'SECURE INTRANET' }
  };

  const headerBgClass = selectedCategory 
    ? selectedCategory.color 
    : 'bg-[#003B71] text-white';

  const isLightBg = selectedCategory && selectedCategory.color.includes('-50');
  const textColor = isLightBg ? 'text-[#003B71]' : 'text-white';

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900 flex flex-col select-none touch-manipulation pt-28 pb-20 overflow-x-hidden">
      
      {/* GLOBAL STATIC HEADER (Animations Removed) */}
      <header className={`fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-500 shadow-sm overflow-hidden ${headerBgClass} ${isLightBg ? 'border-b border-black/5' : 'border-b border-white/10'}`}>
        <div className={`absolute inset-0 backdrop-blur-md ${isLightBg ? 'bg-white/40' : 'bg-black/10'}`} />
        
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-6 relative z-10">
          {/* LEFT: NAVIGATION */}
          <div className="w-24 flex items-center">
            {(selectedCategoryId || selectedArticleId || showAdmin) ? (
              <button onClick={handleBack} className={`active:scale-90 p-2.5 rounded-xl transition-all shadow-sm ${isLightBg ? 'bg-black/5 text-inherit' : 'bg-white/10 text-white'}`}>
                <ArrowLeft size={22} strokeWidth={3} />
              </button>
            ) : (
              <button onClick={() => setShowHandoverMsg(true)} className="bg-[#FFD000] text-black active:scale-90 px-4 py-2 rounded-xl font-black flex items-center gap-2 transition-all shadow-sm">
                <LogOut size={18} strokeWidth={3} /><span className="text-xs uppercase font-black tracking-tight">{uiStrings.exit[language]}</span>
              </button>
            )}
          </div>

          {/* CENTER: STATIC BREADCRUMBS */}
          <div className="flex-grow flex items-center justify-center px-4 overflow-hidden">
            <div className="flex items-center gap-2 max-w-full">
              <button 
                onClick={() => setPage('home')} 
                className={`flex items-center gap-2 transition-all active:scale-95 whitespace-nowrap ${(!selectedCategoryId && !showAdmin) ? 'pointer-events-none' : 'opacity-60 hover:opacity-100'} ${textColor}`}
              >
                {!selectedCategoryId && !showAdmin ? (
                  <div className="flex flex-col items-center">
                    <span className="font-black text-base uppercase tracking-tight leading-none">{uiStrings.title[language]}</span>
                    <span className="text-[8px] opacity-60 font-bold tracking-[0.2em] leading-none mt-1.5 uppercase">{uiStrings.subtitle[language]}</span>
                  </div>
                ) : <Home size={18} strokeWidth={3} />}
              </button>

              {(selectedCategoryId || showAdmin) && (
                <div className={`shrink-0 opacity-30 ${textColor}`}>
                  <ChevronIcon size={16} strokeWidth={3} />
                </div>
              )}
              
              {showAdmin && (
                <span className={`text-base font-black uppercase tracking-tight whitespace-nowrap ${textColor}`}>
                  Monitor
                </span>
              )}

              {selectedCategory && (
                <button 
                  onClick={() => setPage(`category.${selectedCategory.id}`)} 
                  className={`text-base font-black uppercase tracking-tight whitespace-nowrap transition-all active:scale-95 ${!selectedArticleId ? 'pointer-events-none' : 'opacity-60 hover:opacity-100'} ${textColor}`}
                >
                  {selectedCategory.title[language]}
                </button>
              )}

              {selectedArticleId && selectedArticleMetadata && (
                <>
                  <div className={`shrink-0 opacity-30 ${textColor}`}>
                    <ChevronIcon size={16} strokeWidth={3} />
                  </div>
                  <span className={`text-base font-black uppercase tracking-tight whitespace-nowrap truncate max-w-[150px] md:max-w-[300px] ${textColor}`}>
                    {selectedArticleMetadata.title[language]}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: CONTROLS */}
          <div className="w-24 flex items-center justify-end">
            {selectedArticleId ? (
              <button onClick={() => setIsAudioPlaying(!isAudioPlaying)} className={`p-3 rounded-xl transition-all shadow-md ${isAudioPlaying ? 'bg-[#FFD000] text-black ring-4 ring-[#FFD000]/30' : 'bg-black/5 hover:bg-black/10 text-inherit'}`}>
                <Volume2 size={20} strokeWidth={3} />
              </button>
            ) : selectedCategory ? (
              <div className="p-2.5 bg-white rounded-xl text-[#003B71] shadow-sm border border-[#e9ecef]">
                {React.cloneElement(selectedCategory.icon, { size: 22, strokeWidth: 3 })}
              </div>
            ) : (
              <button onClick={() => setLanguage(l => l === 'ET' ? 'EN' : 'ET')} className="bg-white/10 hover:bg-white/20 active:scale-95 px-3 py-2 rounded-xl font-bold border border-white/20 flex items-center gap-2 transition-all shadow-sm text-white">
                <Languages size={16} /><span className="text-xs font-black">{language}</span>
              </button>
            )}
          </div>
        </div>
        <motion.div className={`absolute bottom-0 left-0 h-1 w-full bg-[#FFD000]`} initial={{ scaleX: 0 }} animate={{ scaleX: selectedArticleId ? 1 : selectedCategoryId ? 0.6 : 0.1 }} transition={{ duration: 0.8, ease: "circOut" }} style={{ originX: 0 }} />
      </header>
      
      <main className="flex-grow w-full max-w-5xl mx-auto relative min-h-[85vh]">
        <LayoutGroup>
          {/* DASHBOARD (Base Layer) */}
          <motion.div 
            animate={{ 
              filter: (selectedCategoryId || showAdmin) ? 'blur(15px) brightness(0.6)' : 'blur(0px) brightness(1)',
              scale: (selectedCategoryId || showAdmin) ? 0.96 : 1,
              opacity: (selectedCategoryId || showAdmin) ? 0.4 : 1
            }}
            transition={morphTransition}
            className="w-full h-full"
          >
            <Router page="home" onNav={setPage} language={language} />
          </motion.div>

          {/* CATEGORY OVERLAY */}
          <AnimatePresence>
            {(selectedCategoryId && !selectedArticleId) && (
              <Router page={`category.${selectedCategoryId}`} onNav={setPage} language={language} handleBack={handleBack} />
            )}
          </AnimatePresence>

          {/* ARTICLE OVERLAY */}
           <AnimatePresence>
            {selectedArticleId && (
              <motion.div 
                key="article-overlay"
                initial={{ opacity: 0, y: '100%' }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: '100%' }} 
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 150 || info.velocity.x > 500) handleBack();
                }}
                transition={slideTransition} 
                className="fixed inset-0 z-[300] bg-white overflow-hidden flex flex-col border-t-[16px] border-[#003B71] touch-none pt-24"
              >
                <div className="w-full max-w-5xl mx-auto h-full p-6 md:p-12 flex flex-col pt-4 overflow-y-auto custom-scrollbar pb-32">
                  <SectionImage url={selectedCategory?.imageUrl} />
                  <Router page={selectedArticleId} onNav={setPage} language={language} />
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
      <footer className="mt-auto py-8 text-center opacity-30 text-[10px] font-bold uppercase tracking-[0.2em] pointer-events-none text-slate-400">{uiStrings.version[language]} • {uiStrings.network[language]}</footer>
      
      {/* HANDOVER DIALOG */}
      <AnimatePresence>
        {showHandoverMsg && (
          <motion.div {...fadeIn} className="fixed inset-0 z-[1300] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6" role="alertdialog">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={slideTransition} className="bg-white rounded-[32px] p-10 max-w-sm w-full text-center space-y-6 shadow-2xl border-2 border-[#e9ecef]">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                <LogOut size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#003B71] uppercase tracking-tight">{uiStrings.exitHeading[language]}</h3>
                <p className="text-lg text-slate-500 font-medium leading-snug">{uiStrings.exitBody[language]}</p>
              </div>
              <button onClick={() => setShowHandoverMsg(false)} className="w-full py-4 bg-[#003B71] text-white rounded-2xl text-xl font-black active:scale-95 shadow-lg transition-all hover:bg-[#002b51]">OK</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ArrowLeft, Languages, LogOut, Volume2, 
  Pause, RotateCcw, RotateCw, X, Home, ChevronRight as ChevronIcon,
  BrainCircuit, Clock, Flame
} from 'lucide-react';
import { useCategories } from './constants/categories';
import Router from './components/Router';
import { SectionImage } from './components/ui/SectionImage';
import { MiniAreaChart } from './components/ui/MiniAreaChart';
import { RadialGauge } from './components/ui/RadialGauge';

/**
 * Vangi Käsiraamat (Inmate Handbook) - v22.2.0
 * UNIFIED MODULAR ENGINE
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
    title: { ET: 'Vangi käsiraamat', RU: 'Справочник', EN: 'Handbook' },
    subtitle: { ET: 'STABIILSUSE MOOTOR', RU: 'ИНФОРМАЦИЯ', EN: 'STABILITY ENGINE' },
    back: { ET: 'Tagasi', RU: 'Назад', EN: 'Back' },
    exitHeading: { ET: 'VaPo portaal', RU: 'VaPo портал', EN: 'VaPo Portal' },
    exitBody: { ET: 'Suuname teid tagasi...', RU: 'Возврат...', EN: 'Returning...' },
    version: { ET: 'v22.2.0', RU: 'v22.2.0', EN: 'v22.2.0' },
    network: { ET: 'TURVATUD SISEVÕRK', RU: 'СЕТЬ', EN: 'SECURE INTRANET' }
  };

  const morphTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 0.8,
    restDelta: 0.001
  };

  const headerBgClass = selectedCategory 
    ? selectedCategory.color 
    : 'bg-[#003B71] text-white';

  const isLightBg = selectedCategory && selectedCategory.color.includes('-50');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-gray-900 flex flex-col select-none touch-manipulation pt-20 pb-20 overflow-x-hidden">
      
      {/* GLOBAL HIGH-FIDELITY HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-[1000] h-16 transition-all duration-500 shadow-xl overflow-hidden ${headerBgClass} ${isLightBg ? 'border-b border-black/5' : 'border-b border-white/10'}`}>
        <div className={`absolute inset-0 backdrop-blur-md ${isLightBg ? 'bg-white/40' : 'bg-black/10'}`} />
        
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4 relative z-10">
          {/* LEFT: NAVIGATION */}
          <div className="w-20 flex items-center">
            <AnimatePresence mode="wait">
              {(selectedCategoryId || selectedArticleId || showAdmin) ? (
                <motion.button key="back" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} onClick={handleBack} className={`active:scale-90 p-2 rounded-xl transition-all shadow-sm ${isLightBg ? 'bg-black/5 text-inherit' : 'bg-white/10 text-white'}`}>
                  <ArrowLeft size={20} strokeWidth={3} />
                </motion.button>
              ) : (
                <motion.button key="exit" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} onClick={() => setShowHandoverMsg(true)} className="bg-white text-[#003B71] active:scale-90 px-3 py-1.5 rounded-xl font-black flex items-center gap-2 transition-all shadow-lg">
                  <LogOut size={16} strokeWidth={3} /><span className="text-[10px] uppercase font-black">{uiStrings.exit[language]}</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* CENTER: BREADCRUMBS */}
          <div className="flex-grow flex items-center justify-center px-2">
            <div className="flex items-center gap-1.5 max-w-full">
              <AnimatePresence mode="popLayout">
                <motion.button key="bc-home" layout onClick={() => setPage('home')} className={`flex items-center gap-1.5 transition-all active:scale-95 whitespace-nowrap ${(!selectedCategoryId && !showAdmin) ? 'pointer-events-none' : 'opacity-60 hover:opacity-100'}`}>
                  {!selectedCategoryId && !showAdmin ? (
                    <div className="flex flex-col items-center">
                      <span className="font-black text-sm uppercase tracking-tight leading-none">{uiStrings.title[language]}</span>
                      <span className="text-[7px] opacity-60 font-bold tracking-[0.2em] leading-none mt-1 uppercase">{uiStrings.subtitle[language]}</span>
                    </div>
                  ) : <Home size={16} strokeWidth={3} />}
                </motion.button>

                {(selectedCategoryId || showAdmin) && <motion.div key="bc-cat-sep" layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.3, scale: 1 }} className="shrink-0"><ChevronIcon size={14} strokeWidth={3} /></motion.div>}
                
                {showAdmin && <motion.span key="bc-admin" layout className="text-sm font-black uppercase tracking-tight whitespace-nowrap">Monitor</motion.span>}

                {selectedCategory && (
                  <motion.button key={`bc-cat-${selectedCategory.id}`} layout initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} onClick={() => setPage(`category.${selectedCategory.id}`)} className={`text-sm font-black uppercase tracking-tight whitespace-nowrap transition-all active:scale-95 ${!selectedArticleId ? 'pointer-events-none' : 'opacity-60 hover:opacity-100'}`}>
                    {selectedCategory.title[language]}
                  </motion.button>
                )}

                {selectedArticleId && selectedArticleMetadata && (
                  <>
                    <motion.div key="bc-art-sep" layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.3, scale: 1 }} className="shrink-0"><ChevronIcon size={14} strokeWidth={3} /></motion.div>
                    <motion.span key={`bc-art-${selectedArticleId}`} layout initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-sm font-black uppercase tracking-tight whitespace-nowrap">
                      {selectedArticleMetadata.title[language]}
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: CONTROLS */}
          <div className="w-20 flex items-center justify-end">
            <AnimatePresence mode="wait">
              {selectedArticleId ? (
                <motion.button key="audio-btn" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} onClick={() => setIsAudioPlaying(!isAudioPlaying)} className={`p-2.5 rounded-xl transition-all shadow-md ${isAudioPlaying ? 'bg-blue-600 text-white ring-4 ring-blue-500/30' : 'bg-black/5 hover:bg-black/10 text-inherit'}`}>
                  <Volume2 size={18} strokeWidth={3} />
                </motion.button>
              ) : selectedCategory ? (
                <motion.div key={`header-icon-${selectedCategory.id}`} layoutId={`icon-box-${selectedCategory.id}`} transition={morphTransition} className="p-2 bg-white rounded-xl text-[#003B71] shadow-lg border border-white/20">
                  {React.cloneElement(selectedCategory.icon, { size: 20, strokeWidth: 3 })}
                </motion.div>
              ) : (
                <motion.button key="lang-btn" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} onClick={() => setLanguage(l => l === 'ET' ? 'EN' : 'ET')} className="bg-white/10 hover:bg-white/20 active:scale-95 px-2.5 py-1.5 rounded-xl font-bold border border-white/20 flex items-center gap-1.5 transition-all shadow-sm">
                  <Languages size={14} /><span className="text-[10px] font-black">{language}</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
        <motion.div className={`absolute bottom-0 left-0 h-0.5 w-full ${isLightBg ? 'bg-black/20' : 'bg-white/30'}`} initial={{ scaleX: 0 }} animate={{ scaleX: selectedArticleId ? 1 : selectedCategoryId ? 0.6 : 0.1 }} transition={{ duration: 0.8, ease: "circOut" }} style={{ originX: 0 }} />
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
                  transition={{ type: 'spring', damping: 35, stiffness: 220 }} 
                  className="fixed inset-0 z-[300] bg-white overflow-hidden flex flex-col border-t-[16px] border-[#003B71] touch-none pt-28"
               >
                  <div className="w-full max-w-5xl mx-auto h-full p-6 md:p-12 flex flex-col pt-12 overflow-y-auto custom-scrollbar pb-32">
                     <SectionImage url={selectedCategory?.imageUrl} />
                     <Router page={selectedArticleId} onNav={setPage} language={language} />
                  </div>
               </motion.div>
            )}
          </AnimatePresence>

          {/* MONITOR OVERLAY */}
          <AnimatePresence>
            {showAdmin && (
              <motion.div 
                key="admin-overlay" initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                className="fixed inset-0 z-[1100] bg-slate-100 overflow-y-auto p-4 md:p-10 flex flex-col items-center pt-28"
              >
                <div className="w-full max-w-5xl space-y-8 pb-20">
                  <div className="bg-white rounded-[50px] p-10 shadow-2xl border-t-[20px] border-blue-600">
                    <div className="flex items-center gap-8 mb-12 border-b pb-10">
                      <div className="p-6 bg-blue-50 rounded-[32px] text-blue-600 shadow-inner"><BrainCircuit size={64} /></div>
                      <div>
                        <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase">Stability Monitor</h2>
                        <p className="text-lg font-bold text-slate-400 uppercase tracking-widest mt-2">{uiStrings.subtitle[language]}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-[40px] p-8 space-y-8 shadow-inner"><div className="flex justify-between items-center"><Clock size={24} className="text-slate-400"/><h3 className="font-black uppercase text-[10px] tracking-widest text-slate-400">Activity</h3></div><MiniAreaChart data={[12, 45, 67, 23, 89, 34]} color="#3b82f6" /></div>
                        <div className="bg-slate-50 rounded-[40px] p-8 flex flex-col items-center justify-center shadow-inner"><RadialGauge value={88} color="#a3e635"/><p className="mt-4 font-black uppercase text-xs text-slate-400 tracking-widest">Symmetry</p></div>
                        <div className="bg-[#003B71] rounded-[40px] p-8 text-white flex flex-col items-center justify-center shadow-2xl"><Flame size={48} className="animate-pulse text-orange-400" /><p className="mt-4 font-black text-5xl tracking-tighter">82%</p><p className="font-black uppercase text-[10px] opacity-50 tracking-[0.2em]">Social Heat</p></div>
                    </div>
                  </div>
                  <button onClick={() => setPage('home')} className="w-full py-10 bg-slate-800 text-white rounded-[50px] text-3xl font-black uppercase shadow-2xl active:scale-95 transition-all border-b-[16px] border-black">CLOSE MONITOR</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto py-6 text-center opacity-20 text-[9px] font-black uppercase tracking-[0.3em] pointer-events-none">{uiStrings.version[language]} • {uiStrings.network[language]}</footer>
      
      {/* HANDOVER DIALOG */}
      <AnimatePresence>
        {showHandoverMsg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1300] flex items-center justify-center bg-[#001a33]/90 backdrop-blur-xl p-6" role="alertdialog">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-[50px] p-10 max-w-sm w-full text-center space-y-8 shadow-2xl">
              <LogOut size={64} className="mx-auto text-blue-100" />
              <h3 className="text-3xl font-black text-[#003B71] uppercase tracking-tighter">{uiStrings.exitHeading[language]}</h3>
              <p className="text-lg text-gray-400 font-bold leading-snug">{uiStrings.exitBody[language]}</p>
              <button onClick={() => setShowHandoverMsg(false)} className="w-full py-6 bg-[#003B71] text-white rounded-[24px] text-2xl font-black active:scale-95 shadow-xl transition-all">OK</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

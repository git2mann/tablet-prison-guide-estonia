import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ArrowLeft, Search, Clock, ChevronRight, X, Languages, LogOut, Volume2, 
  Pause, RotateCcw, RotateCw, BarChart3, BrainCircuit, Flame, AlertTriangle, Lightbulb, ListChecks
} from 'lucide-react';
import { MiniAreaChart } from './components/ui/MiniAreaChart';
import { RadialGauge } from './components/ui/RadialGauge';
import { SectionImage } from './components/ui/SectionImage';
import { useCategories } from './constants/categories';

/**
 * Vangi Käsiraamat (Inmate Handbook) - v22.2.0
 * MORPHING EXPANSION ENGINE: iOS-style App Launch Physics
 */

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('ET');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0); 
  const [showHandoverMsg, setShowHandoverMsg] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    document.body.style.overflow = (selectedCategory || selectedArticle || showAdmin) ? 'hidden' : 'auto';
  }, [selectedCategory, selectedArticle, showAdmin]);

  const categories = useCategories();

  const handleBack = () => {
    if (selectedArticle) setSelectedArticle(null);
    else if (selectedCategory) setSelectedCategory(null);
    else if (showAdmin) setShowAdmin(false);
  };

  const uiStrings = {
    exit: { ET: 'Välju', RU: 'Выйти', EN: 'Exit' },
    title: { ET: 'Vangi käsiraamat', RU: 'Справочник', EN: 'Handbook' },
    subtitle: { ET: 'STABIILSUSE MOOTOR', RU: 'ИНФОРМАЦИЯ', EN: 'STABILITY ENGINE' },
    searchPlaceholder: { ET: 'Mida soovid teada?', RU: 'Otsi...', EN: 'Search...' },
    back: { ET: 'Tagasi', RU: 'Назад', EN: 'Back' },
    exitHeading: { ET: 'VaPo portaal', RU: 'VaPo портал', EN: 'VaPo Portal' },
    exitBody: { ET: 'Suuname teid tagasi...', RU: 'Возврат...', EN: 'Returning...' },
    version: { ET: 'v22.2.0', RU: 'v22.2.0', EN: 'v22.2.0' },
    network: { ET: 'TURVATUD SISEVÕRK', RU: 'СЕТЬ', EN: 'SECURE INTRANET' }
  };

  // iOS-style Launch Physics
  const morphTransition = {
    type: "spring",
    stiffness: 280,
    damping: 32,
    mass: 1,
    restDelta: 0.001
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-gray-900 flex flex-col select-none touch-manipulation pb-20 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="bg-[#003B71] text-white shadow-md sticky top-0 z-[50] border-b-2 border-white/10 h-16 flex items-center justify-between px-4">
        <button onClick={() => setShowHandoverMsg(true)} className="bg-white text-[#003B71] active:scale-90 px-4 py-1.5 rounded-xl font-black flex items-center gap-2 transition-all shadow-lg">
          <ArrowLeft size={18} strokeWidth={3} /><span className="text-sm uppercase">{uiStrings.exit[language]}</span>
        </button>
        <div className="text-center cursor-pointer" onClick={handleBack}>
          <h1 className="font-black text-base uppercase tracking-tight leading-none">{uiStrings.title[language]}</h1>
          <p className="text-[8px] opacity-60 font-bold tracking-widest leading-none mt-0.5 uppercase">{uiStrings.subtitle[language]}</p>
        </div>
        <button onClick={() => setLanguage(l => l === 'ET' ? 'EN' : 'ET')} className="bg-white/10 active:scale-95 px-4 py-2 rounded-xl font-bold border border-white/20 flex items-center gap-2 transition-colors">
          <Languages size={18} /><span className="text-sm font-black">{language}</span>
        </button>
      </header>
      
      <main className="flex-grow w-full max-w-5xl mx-auto relative min-h-[85vh]">
        <LayoutGroup>
          
          {/* DASHBOARD VIEW */}
          <motion.div 
            animate={{ 
              filter: (selectedCategory || showAdmin) ? 'blur(20px) brightness(0.4)' : 'blur(0px) brightness(1)',
              scale: (selectedCategory || showAdmin) ? 0.94 : 1,
              opacity: (selectedCategory || showAdmin) ? 0.2 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="p-4 md:p-6 space-y-8"
          >
            <div className="text-center py-6">
              <h2 className="text-3xl font-black text-[#003B71] mb-6 tracking-tight uppercase">{uiStrings.title[language]}</h2>
              <div className="relative group max-w-xl mx-auto bg-white rounded-[32px] shadow-lg ring-4 ring-white/50">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                <input type="text" placeholder={uiStrings.searchPlaceholder[language]} className="w-full pl-16 pr-14 py-5 rounded-[32px] outline-none text-xl font-bold bg-transparent" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
            </div>
            
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
              {categories.map((cat) => (
                <motion.button 
                  key={cat.id} 
                  layoutId={`card-${cat.id}`}
                  onClick={() => setSelectedCategory(cat)}
                  transition={morphTransition}
                  style={{ borderRadius: 48 }}
                  className={`relative h-48 flex items-center gap-6 p-8 overflow-hidden ${cat.color} shadow-xl active:scale-95 transition-transform duration-200`}
                >
                  <div className="relative z-10 flex items-center gap-6 w-full pointer-events-none">
                    <motion.div layoutId={`icon-box-${cat.id}`} transition={morphTransition} className="p-5 bg-white rounded-3xl text-[#003B71] shrink-0 shadow-md">
                      {cat.icon}
                    </motion.div>
                    <div className="flex flex-col min-w-0">
                      <motion.h3 layoutId={`title-${cat.id}`} transition={morphTransition} className="text-2xl font-black leading-tight truncate text-[#003B71] origin-left">
                        {cat.title[language]}
                      </motion.h3>
                      <motion.p layoutId={`desc-${cat.id}`} transition={morphTransition} className="text-sm font-bold opacity-50 uppercase tracking-widest truncate origin-left">
                        {cat.desc[language]}
                      </motion.p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </section>

            <button onClick={() => setShowAdmin(true)} className="w-full p-8 rounded-[40px] bg-white border-4 border-slate-200 flex items-center justify-center gap-4 text-slate-400 font-black uppercase tracking-widest active:scale-[0.98] transition-all hover:bg-blue-50 shadow-md">
              <BarChart3 size={24} /> MONITOR
            </button>
          </motion.div>

          {/* MORPHED OVERLAY CONTAINER */}
          <AnimatePresence>
            {selectedCategory && (
              <motion.div 
                key="category-overlay"
                layoutId={`card-${selectedCategory.id}`}
                transition={morphTransition}
                initial={{ borderRadius: 48 }}
                animate={{ borderRadius: 0 }}
                exit={{ borderRadius: 48 }}
                className={`fixed inset-0 z-[200] flex flex-col items-center overflow-hidden ${selectedCategory.color}`}
                style={{ backgroundColor: selectedCategory.color.includes('bg-white') ? '#f8fafc' : undefined }}
              >
                {/* BLUE TOP ACCENT */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.2 }} className="absolute top-0 left-0 right-0 h-4 bg-[#003B71] z-20" />

                <div className="relative z-10 w-full max-w-5xl h-full p-6 md:p-12 flex flex-col pt-12">
                  <div className="flex justify-between items-center mb-8 shrink-0">
                    <motion.button 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, transition: { duration: 0.1 } }}
                      onClick={handleBack} 
                      className="flex items-center gap-2 bg-[#003B71] text-white py-4 px-8 rounded-2xl font-black active:scale-90 shadow-2xl transition-all"
                    >
                      <ArrowLeft size={24} strokeWidth={3} /> <span className="uppercase text-lg tracking-widest">{uiStrings.back[language]}</span>
                    </motion.button>
                    <motion.div layoutId={`icon-box-${selectedCategory.id}`} transition={morphTransition} className="p-6 bg-white rounded-3xl text-[#003B71] shadow-xl">
                      {React.cloneElement(selectedCategory.icon, { className: "w-12 h-12" })}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4 mb-12 shrink-0">
                    <motion.h2 layoutId={`title-${selectedCategory.id}`} transition={morphTransition} className="text-6xl font-black text-[#003B71] tracking-tighter uppercase italic leading-none origin-left">
                      {selectedCategory.title[language]}
                    </motion.h2>
                    <motion.p layoutId={`desc-${selectedCategory.id}`} transition={morphTransition} className="text-xl font-bold opacity-40 uppercase tracking-[0.2em] origin-left">
                      {selectedCategory.desc[language]}
                    </motion.p>
                  </div>
                  
                  {/* ARTICLE LIST: Fades in only after expansion is near complete */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0 } }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="space-y-6 flex-grow overflow-y-auto pr-4 custom-scrollbar pb-32"
                  >
                    {selectedCategory.articles.map((art) => (
                      <button key={art.id} onClick={() => setSelectedArticle(art)} className="w-full bg-white/80 backdrop-blur-md p-10 rounded-[48px] flex items-center justify-between active:scale-[0.98] border-2 border-white shadow-xl hover:bg-white transition-all group">
                        <span className="text-3xl font-black text-slate-800 group-hover:text-[#003B71] transition-colors">{art.title[language]}</span>
                        <ChevronRight size={48} className="text-[#003B71]/20 group-hover:text-[#003B71] group-hover:translate-x-3 transition-all" />
                      </button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>

        {/* ARTICLE OVERLAY: Full screen vertical slide */}
        <AnimatePresence>
          {selectedArticle && (
             <motion.div 
                initial={{ opacity: 0, y: '100%' }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: '100%' }} 
                transition={{ type: 'spring', damping: 35, stiffness: 200 }} 
                className="fixed inset-0 z-[300] bg-white overflow-hidden flex flex-col border-t-[16px] border-[#003B71]"
             >
                <div className="w-full max-w-5xl mx-auto h-full p-6 md:p-12 flex flex-col">
                  <div className="flex justify-between items-start mb-12 shrink-0">
                    <div className="space-y-4">
                      <button onClick={() => setSelectedArticle(null)} className="bg-slate-100 text-[#003B71] font-black uppercase text-xs py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all shadow-sm">
                        <ArrowLeft size={16} strokeWidth={3}/> {selectedCategory?.title[language]}
                      </button>
                      <h2 className="text-6xl font-black text-[#003B71] tracking-tight leading-[1.1]">{selectedArticle.title[language]}</h2>
                    </div>
                    <button onClick={() => setIsAudioPlaying(!isAudioPlaying)} className={`p-8 rounded-[32px] active:scale-90 shadow-2xl transition-all ${isAudioPlaying ? 'bg-blue-600 text-white ring-8 ring-blue-500/20' : 'bg-slate-100 text-[#003B71] hover:bg-slate-200'}`}>
                      <Volume2 size={48} />
                    </button>
                  </div>
                  
                  <div className="space-y-12 overflow-y-auto pr-6 custom-scrollbar pb-32">
                    <SectionImage url={selectedCategory?.imageUrl} alt={selectedArticle.title[language]} />
                    <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed">
                      {selectedArticle.content[language] || selectedArticle.content.EN}
                    </div>
                    
                    {/* Warnings / Procedures / Tips rendered same as before but inside this container */}
                    {selectedArticle.warnings && (selectedArticle.warnings[language] || selectedArticle.warnings.EN).map((w, i) => (
                      <div key={i} className="bg-red-50 border-l-[16px] border-red-500 p-12 rounded-[50px] shadow-2xl">
                        <div className="flex items-center gap-6 text-red-700 mb-6">
                          <AlertTriangle size={56} strokeWidth={2.5} />
                          <h4 className="text-3xl font-black uppercase tracking-tight italic">WARNING</h4>
                        </div>
                        <p className="text-2xl font-bold text-red-900 leading-relaxed">{w}</p>
                      </div>
                    ))}
                    
                    {selectedArticle.steps && (
                      <div className="bg-slate-900 rounded-[60px] p-16 text-white space-y-12">
                        <div className="flex items-center gap-8 text-blue-400">
                          <ListChecks size={64} strokeWidth={2.5} />
                          <h3 className="text-4xl font-black uppercase tracking-tight italic">PROCEDURE</h3>
                        </div>
                        <ul className="grid gap-8">
                          {(selectedArticle.steps[language] || selectedArticle.steps.EN).map((step, idx) => (
                            <li key={idx} className="flex items-start gap-8 bg-white/5 p-8 rounded-[40px] border border-white/10"> 
                              <span className="flex items-center justify-center w-16 h-16 rounded-[24px] bg-blue-600 text-white text-3xl font-black shrink-0">{idx + 1}</span> 
                              <p className="text-2xl font-bold text-slate-200 leading-relaxed">{step}</p> 
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        {/* MONITOR OVERLAY */}
        <AnimatePresence>
          {showAdmin && (
            <motion.div 
              key="admin-overlay" initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed inset-0 z-[400] bg-slate-100 overflow-y-auto p-4 md:p-10 flex flex-col items-center"
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
                <button onClick={() => setShowAdmin(false)} className="w-full py-10 bg-slate-800 text-white rounded-[50px] text-3xl font-black uppercase shadow-2xl active:scale-95 transition-all border-b-[16px] border-black">CLOSE MONITOR</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto py-6 text-center opacity-20 text-[9px] font-black uppercase tracking-[0.3em] pointer-events-none">{uiStrings.version[language]} • {uiStrings.network[language]}</footer>
      
      {/* AUDIO PLAYER */}
      <AnimatePresence>
        {isAudioPlaying && (
          <motion.div initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: 300 }} transition={{ type: 'spring', damping: 28, stiffness: 180 }} className="fixed bottom-0 left-0 right-0 bg-[#003B71] text-white p-10 z-[500] shadow-[0_-30px_80px_rgba(0,0,0,0.5)] border-t-4 border-white/10 backdrop-blur-3xl rounded-t-[60px]">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6"><Volume2 className="animate-pulse text-blue-300 w-8 h-8" /> <div className="flex flex-col"><span className="font-black uppercase tracking-[0.2em] text-[10px] opacity-50">Listening Active</span><span className="font-black uppercase tracking-wider text-sm truncate max-w-[200px]">{selectedArticle?.title[language]}</span></div></div>
              <div className="flex gap-12 items-center"><RotateCcw size={32} className="opacity-40 hover:opacity-100 cursor-pointer" onClick={() => setAudioProgress(p => Math.max(0, p - 5))} /><div className="p-6 bg-white text-[#003B71] rounded-[24px] active:scale-90 cursor-pointer shadow-2xl" onClick={() => setIsAudioPlaying(false)}><Pause size={40} /></div><RotateCw size={32} className="opacity-40 hover:opacity-100 cursor-pointer" onClick={() => setAudioProgress(p => Math.min(100, p + 5))} /></div>
              <button onClick={() => setIsAudioPlaying(false)} className="p-4 bg-white/10 rounded-full hover:bg-white/20"><X size={28} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHandoverMsg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] flex items-center justify-center bg-[#001a33]/90 backdrop-blur-xl p-6" role="alertdialog">
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
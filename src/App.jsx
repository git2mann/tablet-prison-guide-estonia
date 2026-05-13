import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Languages, LogOut, Volume2, 
  Pause, X, Home, ChevronRight as ChevronIcon,
  Play, Smartphone, Eye, EyeOff, Moon, Sun, ArrowRight
} from 'lucide-react';
import { useCategories } from './constants/categories';
import Router from './components/Router';
import { SectionImage } from './components/ui/SectionImage';
import FloatingAssistant from './components/FloatingAssistant';
import { appleSpring, fadeIn, uiTransition } from './constants/animations';
import handbookContent from './constants/handbookContent.json';
import { speechService } from './utils/speechService';

const App = () => {
  const [page, setPage] = useState('landing');
  const [language, setLanguage] = useState('ET');
  const [isAccessible, setIsAccessible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showAudioInstructions, setShowAudioInstructions] = useState(false);
  const [showHandoverMsg, setShowHandoverMsg] = useState(false);
  const speechRef = useRef(null);
  
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

  const articleNav = useMemo(() => {
    if (!selectedCategory || !selectedArticleId) {
      return { previous: null, next: null };
    }

    const currentIndex = selectedCategory.articles.findIndex(a => a.id === selectedArticleId);
    if (currentIndex === -1) {
      return { previous: null, next: null };
    }

    return {
      previous: selectedCategory.articles[currentIndex - 1] || null,
      next: selectedCategory.articles[currentIndex + 1] || null
    };
  }, [selectedCategory, selectedArticleId]);

  // TTS Logic - Redesigned for Interactive Selection
  useEffect(() => {
    const container = document.getElementById('handbook-article-container');
    
    if (isAudioPlaying && selectedArticleId) {
      if (!container) return;
      
      container.classList.add('audio-selection-active');
      
      const handleSectionClick = (e) => {
        const target = e.target.closest('h1, h2, h3, h4, p, li, th, td, button, span, .audio-readable');
        
        // If it's a valid readable target
        if (target) {
          // DO NOT preventDefault or stopPropagation
          // This allows accordions, buttons, etc. to still work
          
          // Visual feedback
          container.querySelectorAll('.speaking').forEach(el => el.classList.remove('speaking'));
          target.classList.add('speaking');
          
          const text = target.innerText.trim();
          
          // speechService.speak automatically cancels any ongoing speech
          speechService.speak([text], language, () => {
            target.classList.remove('speaking');
          });
        }
      };

      container.addEventListener('click', handleSectionClick, true);
      
      return () => {
        container.classList.remove('audio-selection-active');
        container.removeEventListener('click', handleSectionClick, true);
        speechService.stop();
      };
    } else {
      if (container) container.classList.remove('audio-selection-active');
      speechService.stop();
    }
  }, [isAudioPlaying, selectedArticleId, language]);

  const toggleAudioMode = () => {
    if (!isAudioPlaying) {
      setShowAudioInstructions(true);
      setIsAudioPlaying(true);
    } else {
      setIsAudioPlaying(false);
    }
  };

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

  const navStrings = {
    previousArticle: { ET: 'Eelmine', EN: 'Previous' },
    nextArticle: { ET: 'Järgmine', EN: 'Next' },
    chapterDone: { ET: 'Peatükk valmis', EN: 'Chapter done' },
    mainMenu: { ET: 'Peamenüü', EN: 'Main menu' }
  };

  const textColor = 'text-[var(--color-text-primary)]';

  return (
    <div className={`min-h-screen bg-[var(--color-bg-page)] font-sans text-[var(--color-text-primary)] flex flex-col touch-manipulation transition-colors duration-500 ${isLanding ? 'pt-0' : 'pt-16 md:pt-24 pb-8'}`}>
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[1000] h-16 md:h-24 bg-[var(--color-bg-header)] backdrop-blur-3xl border-b border-[var(--color-border-subtle)] transition-colors duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto h-full flex items-center px-2 md:px-12 relative z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-full bg-[var(--color-brand-gold)] opacity-[0.03] blur-[60px] pointer-events-none" />
          
          <div className="flex items-center gap-2 md:gap-6 flex-shrink-0 min-w-[40px] md:min-w-[80px]">
            {!isLanding && (
              <AnimatePresence mode="wait">
                {(selectedCategoryId || selectedArticleId || showAdmin || isTool) ? (
                  <motion.button 
                    key="back" 
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                    onClick={handleBack} 
                    className="p-2 md:p-5 bg-[var(--color-bg-button-alt)] rounded-full text-[var(--color-brand-blue)] [.dark-mode_&]:text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] [.dark-mode_&]:hover:text-[var(--color-brand-blue)] transition-all shadow-sm flex-shrink-0"
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

          <div className="flex items-center justify-end gap-1.5 md:gap-4 flex-shrink-0">
            {/* ✨ Cute Dark / Light Mode Toggle ✨ */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 600, damping: 20 }}
              aria-label={uiStrings.darkMode[language]}
              className={`relative overflow-hidden h-8 w-8 md:h-14 md:w-14 rounded-full font-black border-2 flex items-center justify-center shadow-sm transition-colors duration-150 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-indigo-900 via-slate-900 to-black border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] shadow-[0_0_18px_rgba(255,208,0,0.45)]'
                  : 'bg-gradient-to-br from-amber-100 via-yellow-200 to-orange-200 border-amber-300 text-amber-700 shadow-[0_0_18px_rgba(255,193,7,0.35)]'
              }`}
            >
              {/* Twinkling stars when in dark mode */}
              <AnimatePresence>
                {isDarkMode && (
                  <>
                    <motion.span
                      key="star1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [0.6, 1, 0.6] }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-1 left-1.5 md:top-2 md:left-2.5 w-0.5 h-0.5 md:w-1 md:h-1 bg-[var(--color-brand-gold)] rounded-full"
                    />
                    <motion.span
                      key="star2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [0.6, 1, 0.6] }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                      className="absolute bottom-1.5 right-1 md:bottom-2.5 md:right-2 w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full"
                    />
                    <motion.span
                      key="star3"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [0.6, 1, 0.6] }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                      className="absolute top-2.5 right-1.5 md:top-4 md:right-3 w-0.5 h-0.5 md:w-1 md:h-1 bg-[var(--color-brand-gold)] rounded-full"
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Animated icon swap */}
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.span
                    key="sun-icon"
                    initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="relative z-10"
                  >
                    <Sun className="w-4 h-4 md:w-6 md:h-6 fill-current drop-shadow-[0_0_4px_rgba(255,208,0,0.6)]" strokeWidth={2.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon-icon"
                    initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="relative z-10"
                  >
                    <Moon className="w-4 h-4 md:w-6 md:h-6 fill-current" strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* ✨ Cute High / Low Contrast Toggle ✨ */}
            <motion.button
              onClick={() => setIsAccessible(!isAccessible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 600, damping: 20 }}
              aria-label={uiStrings.accessibility[language]}
              className={`relative overflow-hidden h-8 w-8 md:h-14 md:w-14 rounded-full font-black border-2 flex items-center justify-center shadow-sm transition-colors duration-150 ${
                isAccessible
                  ? 'bg-gradient-to-br from-[var(--color-brand-blue)] via-blue-800 to-indigo-900 border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] shadow-[0_0_18px_rgba(0,59,113,0.55)]'
                  : 'bg-gradient-to-br from-slate-50 via-white to-sky-50 border-sky-200 text-sky-400 shadow-[0_0_12px_rgba(125,211,252,0.4)]'
              }`}
            >
              {/* Pulsing halo ring when contrast is high */}
              <AnimatePresence>
                {isAccessible && (
                  <motion.span
                    key="halo"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: [0.4, 0, 0.4], scale: [0.9, 1.4, 0.9] }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full border-2 border-[var(--color-brand-gold)]"
                  />
                )}
              </AnimatePresence>

              {/* Animated icon swap */}
              <AnimatePresence mode="wait" initial={false}>
                {isAccessible ? (
                  <motion.span
                    key="eye-on"
                    initial={{ scale: 0.4, opacity: 0, y: 4 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.4, opacity: 0, y: -4 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="relative z-10"
                  >
                    <Eye className="w-4 h-4 md:w-6 md:h-6 drop-shadow-[0_0_4px_rgba(255,208,0,0.6)]" strokeWidth={3} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="eye-off"
                    initial={{ scale: 0.4, opacity: 0, y: -4 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.4, opacity: 0, y: 4 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="relative z-10"
                  >
                    <EyeOff className="w-4 h-4 md:w-6 md:h-6" strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {selectedArticleId && (
              <motion.button
                onClick={toggleAudioMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.88 }}
                transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                aria-label={uiStrings.audioGuide[language]}
                className={`relative overflow-hidden h-8 w-8 md:h-14 md:w-14 rounded-full font-black border-2 flex items-center justify-center shadow-sm transition-colors duration-150 ${
                  isAudioPlaying
                    ? 'bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 border-emerald-400 text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.55)]'
                    : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200 text-slate-400 shadow-[0_0_12px_rgba(148,163,184,0.3)]'
                }`}
              >
                <Volume2 className={`w-4 h-4 md:w-6 md:h-6 ${isAudioPlaying ? 'drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]' : ''}`} strokeWidth={isAudioPlaying ? 3 : 2.5} />
                
                {isAudioPlaying && (
                  <motion.span
                    layoutId="audio-pulse"
                    className="absolute inset-0 rounded-full border-2 border-emerald-200"
                    animate={{ opacity: [0, 0.5, 0], scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.button>
            )}

            <button
              onClick={() => setLanguage(l => l === 'ET' ? 'EN' : 'ET')}
              className="active:scale-95 h-8 md:h-14 px-2 md:px-4 rounded-full font-black border-2 flex items-center gap-1 transition-all shadow-sm bg-white border-slate-100 text-[var(--color-brand-blue)]"
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
            <Router page="landing" onNav={setPage} language={language} isDarkMode={isDarkMode} />
          )}
        </AnimatePresence>

        {/* DASHBOARD */}
        {!isLanding && (
          <motion.div 
            animate={{ 
              filter: (selectedCategoryId || showAdmin || isTool) ? 'blur(8px) brightness(0.7)' : 'blur(0px) brightness(1)',
              scale: (selectedCategoryId || showAdmin || isTool) ? 0.98 : 1,
              opacity: (selectedCategoryId || showAdmin || isTool) ? 0.5 : 1
            }}
            transition={isAccessible ? { duration: 0 } : uiTransition}
            className="w-full h-full overflow-x-hidden"
          >
            <Router page="home" onNav={setPage} language={language} isDarkMode={isDarkMode} />
          </motion.div>
        )}

        <AnimatePresence>
          {selectedCategoryId && (
            <Router page={`category.${selectedCategoryId}`} onNav={setPage} language={language} handleBack={handleBack} isDarkMode={isDarkMode} />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isTool && (
             <motion.div 
                key={page}
                initial={isAccessible ? { opacity: 1 } : { opacity: 0, y: '20%' }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={isAccessible ? { opacity: 1 } : { opacity: 0, y: '20%' }} 
                transition={isAccessible ? { duration: 0 } : uiTransition} 
                className="fixed inset-0 z-[400] bg-[var(--color-bg-overlay)] flex flex-col border-t-[16px] border-[#FFD000] overflow-y-auto overflow-x-hidden custom-scrollbar pt-20 md:pt-32 transition-colors duration-500"
             >
                <div className="w-full flex-grow flex flex-col">
                   <Router page={page} onNav={setPage} language={language} handleBack={handleBack} isDarkMode={isDarkMode} />
                </div>
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
                className="fixed inset-0 z-[300] bg-[var(--color-bg-page)] flex flex-col border-t-[16px] border-[var(--color-brand-blue)] overflow-y-auto overflow-x-hidden custom-scrollbar pt-20 md:pt-32 transition-colors duration-500"
             >
                <div className="w-full max-w-7xl mx-auto flex flex-col flex-grow" id="handbook-article-container">
                   <div className="px-4 md:px-12 w-full">
                      <div className="w-full max-w-5xl mx-auto flex flex-col">
                         <SectionImage url={selectedCategory?.imageUrl} videoUrl={selectedCategory?.videoUrl} />
                         <div className="py-12 md:py-20">
                            <Router page={selectedArticleId} onNav={setPage} language={language} isDarkMode={isDarkMode} />
                            <nav className="mt-20 pt-10 border-t-2 border-[var(--color-border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                              <button
                                type="button"
                                onClick={() => articleNav.previous && setPage(articleNav.previous.id)}
                                disabled={!articleNav.previous}
                                className="group min-h-[96px] p-5 md:p-6 rounded-[28px] border-2 border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-left flex items-center gap-5 shadow-sm transition-all hover:border-[var(--color-brand-gold)] hover:shadow-xl disabled:opacity-30 disabled:pointer-events-none"
                              >
                                <span className="w-12 h-12 rounded-2xl bg-[var(--color-bg-elevated)] text-[var(--color-brand-blue)] [.dark-mode_&]:text-[var(--color-brand-gold)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-gold)] group-hover:text-black [.dark-mode_&]:group-hover:text-[var(--color-brand-blue)] transition-all">
                                  <ArrowLeft size={24} strokeWidth={3} />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-text-dim)] mb-1">
                                    {navStrings.previousArticle[language]}
                                  </span>
                                  <span className="block text-xl md:text-2xl font-black uppercase italic tracking-tighter text-[var(--color-text-primary)] truncate">
                                    {articleNav.previous?.title?.[language] || navStrings.previousArticle[language]}
                                  </span>
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() => articleNav.next ? setPage(articleNav.next.id) : setPage('home')}
                                className="group min-h-[96px] p-5 md:p-6 rounded-[28px] border-2 border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-left flex items-center justify-between gap-5 shadow-xl transition-all hover:border-[var(--color-brand-gold)] hover:shadow-2xl hover:-translate-y-0.5"
                              >
                                <span className="min-w-0">
                                  <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-brand-gold)] mb-1">
                                    {articleNav.next ? navStrings.nextArticle[language] : navStrings.chapterDone[language]}
                                  </span>
                                  <span className="block text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white truncate">
                                    {articleNav.next?.title?.[language] || navStrings.mainMenu[language]}
                                  </span>
                                </span>
                                <span className="w-12 h-12 rounded-2xl bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-gold)] group-hover:text-[var(--color-brand-blue)] group-hover:translate-x-1 transition-all duration-300">
                                  {articleNav.next ? <ArrowRight size={24} strokeWidth={3} /> : <Home size={24} strokeWidth={3} />}
                                </span>
                              </button>
                            </nav>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAdmin && (
            <Router page="admin" onNav={setPage} language={language} isDarkMode={isDarkMode} />
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
                   <div className="text-lg font-black text-[var(--color-text-primary)] truncate uppercase italic">{selectedArticleMetadata?.title[language] || selectedCategory?.title[language] || uiStrings.title[language]}</div>
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

      {/* ✨ Persistent Floating Handbook Assistant — visible across all pages ✨ */}
      {!isLanding && <FloatingAssistant language={language} onNav={setPage} />}
    </div>
  );
};

export default App;

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCategories } from '../../constants/categories';
import { ArrowRight, Sparkles, Trophy, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';
import Animation from "../../components/ui/Animation";
import liquidAmbient from "../../assets/animations/liquid_ambient.json";

const StepDescription = ({ cat, i, align, language, uiStrings, isDarkMode }) => (
  <div className={`flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : align === 'left' ? 'md:items-start md:text-left' : 'items-center text-center'} space-y-3`}>
    <div className="flex items-center gap-3">
      {align === 'left' && <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} className="h-[1px] bg-[var(--color-brand-gold)]" />}
      <span className="text-[10px] font-black text-[var(--color-brand-gold)] tracking-[0.3em] uppercase italic">
        {uiStrings.step[language]} {i + 1}
      </span>
      {align === 'right' && <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} className="h-[1px] bg-[var(--color-brand-gold)]" />}
    </div>
    <h3 className="text-xl md:text-3xl font-black text-[var(--color-brand-blue)] tracking-tighter uppercase italic leading-none group-hover/row:translate-y-[-2px] transition-transform duration-300">
      {cat.title[language].replace(/^\d+\.\s*/, '')}
    </h3>
    <p className="text-[9px] md:text-[11px] font-bold text-[var(--color-text-secondary)] uppercase tracking-widest leading-relaxed max-w-[280px] opacity-80">
      {cat.desc[language]}
    </p>
  </div>
);

const CategoryImage = ({ cat, align, isDarkMode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative w-full max-w-sm group/img"
  >
    <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] ${isDarkMode ? 'border-zinc-900' : 'border-white'} transition-all duration-700 group-hover/row:border-[var(--color-brand-gold)] group-hover/row:rotate-1`}>
      {cat.videoUrl ? (
        <video 
          src={cat.videoUrl}
          poster={cat.imageUrl}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110 group-hover/row:scale-100 transition-transform duration-1000"
        />
      ) : (
        <img 
          src={cat.imageUrl} 
          alt="" 
          className="w-full h-full object-cover scale-110 group-hover/row:scale-100 transition-transform duration-1000" 
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/40 to-transparent opacity-60 group-hover/row:opacity-0 transition-opacity" />
    </div>
    <div className={`absolute -z-10 inset-0 blur-2xl opacity-20 bg-[var(--color-brand-gold)] translate-y-4 ${align === 'right' ? '-rotate-6' : 'rotate-6'}`} />
  </motion.div>
);

export default function LandingPage({ onNav, language = 'ET', isDarkMode }) {
  const categories = useCategories();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Environmental storytelling transforms - Adapted for theme
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    isDarkMode 
      ? ["rgba(0, 0, 0, 1)", "rgba(10, 10, 10, 1)", "rgba(26, 26, 26, 1)"]
      : ["rgba(248, 250, 252, 1)", "rgba(241, 245, 249, 1)", "rgba(255, 251, 235, 1)"]
  );

  const cometY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const blob1Y = useTransform(smoothProgress, [0, 1], [0, 400]);
  const blob2Y = useTransform(smoothProgress, [0, 1], [0, -600]);

  const uiStrings = {
    title: { ET: 'Sinu sammud vabanemiseni', EN: 'Your Path to a Fresh Start' },
    subtitle: { ET: 'DIGITAALNE TEEJUHT', EN: 'DIGITAL HANDBOOK' },
    desc: { 
      ET: 'See teejuht on Sulle toeks ja abiks vangistuse igal etapil. Siit leiad selged vastused oma küsimustele ja juhised väärtuslikuks ajakasutuseks.',
      EN: 'This guide supports you at every stage. Find clear answers and learn how to make the best use of your time.'
    },
    start: { ET: 'Alusta teekonda', EN: 'Start the Journey' },
    direct: { ET: 'Otse töölauale', EN: 'To Dashboard' },
    enter: { ET: 'Mine töölauale', EN: 'Go to Dashboard' },
    finish: { ET: 'Vabanemine', EN: 'Release' },
    step: { ET: 'SAMM', EN: 'STEP' }
  };

  const handleStart = () => {
    document.getElementById('samm-0')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor: bgColor }}
      className="fixed inset-0 z-[500] overflow-y-auto overflow-x-hidden custom-scrollbar selection:bg-[var(--color-brand-gold)] selection:text-black scroll-smooth snap-y snap-mandatory transition-colors duration-1000"
    >
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1002]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} />

      {/* Progress Bar */}
      <motion.div style={{ scaleX: smoothProgress }} className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-brand-gold)] z-[1001] origin-left shadow-[0_0_15px_rgba(255,208,0,0.5)]" />

      {/* 1. HERO HEADER */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center snap-start">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div style={{ y: blob1Y }} className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-brand-blue)] opacity-[0.08] blur-[120px] rounded-full" />
          <motion.div style={{ y: blob2Y }} className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-brand-gold)] opacity-[0.08] blur-[100px] rounded-full" />
          
          {/* Lottie Liquid Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
             <Animation animationData={liquidAmbient} className="w-full h-full" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className={`inline-flex items-center gap-3 px-6 py-2 ${isDarkMode ? 'bg-slate-900/40 border-slate-700/40' : 'bg-white/40 border-white/40'} backdrop-blur-md shadow-xl rounded-full mb-8 border`}>
            <Sparkles size={16} className="text-[var(--color-brand-gold)]" fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-blue)]">{uiStrings.subtitle[language]}</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-[var(--color-brand-blue)] tracking-tighter uppercase italic leading-[0.8] mb-8">
            {uiStrings.title[language].split(' ').map((w, i) => (
              <span key={i} className={i >= 1 && i <= 2 ? 'text-[var(--color-brand-gold)] block md:inline' : ''}>{w} </span>
            ))}
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-xl font-bold text-[var(--color-text-secondary)] leading-snug mb-12 text-balance">
            {uiStrings.desc[language]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
            <motion.button
              onClick={handleStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[var(--color-brand-blue)] text-white rounded-2xl font-black uppercase tracking-[0.2em] italic shadow-2xl flex items-center gap-6 group"
            >
              <span className="text-base">{uiStrings.start[language]}</span>
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => onNav('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-5 ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-slate-100 text-[var(--color-brand-blue)]'} border-2 rounded-2xl font-black uppercase tracking-[0.2em] italic shadow-xl flex items-center gap-6 group`}
            >
              <span className="text-base">{uiStrings.direct[language]}</span>
              <div className={`w-8 h-8 ${isDarkMode ? 'bg-zinc-800' : 'bg-slate-50'} rounded-full flex items-center justify-center group-hover:bg-[var(--color-brand-gold)] transition-colors`}>
                <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className={`absolute bottom-10 ${isDarkMode ? 'text-slate-600' : 'text-slate-200'}`}>
           <ChevronDown size={48} strokeWidth={1} />
        </motion.div>
      </section>

      {/* 2. THE PROGRESSION PATH */}
      <section className="relative max-w-7xl mx-auto px-6 py-40">
        
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] z-0">
           <div className={`h-full w-full ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-200/50'} rounded-full`} />
           <motion.div 
             style={{ scaleY: smoothProgress }}
             className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-brand-blue)] via-[var(--color-brand-gold)] to-emerald-500 origin-top shadow-[0_0_20px_var(--color-brand-gold)] rounded-full"
           />
           <motion.div 
             style={{ top: cometY }}
             className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_var(--color-brand-gold)] z-10"
           >
              <div className="absolute inset-0 bg-[var(--color-brand-gold)] rounded-full animate-ping opacity-50" />
           </motion.div>
        </div>

        <div className="space-y-40 md:space-y-64 relative z-10">
          {categories.map((cat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={cat.id} id={`samm-${i}`} className="group/row relative snap-center">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32 cursor-pointer"
                  onClick={() => onNav(`category.${cat.id}`)}
                >
                  <div className={`flex flex-col items-center md:items-end ${!isEven ? 'md:order-2' : ''}`}>
                    {isEven ? (
                      <StepDescription cat={cat} i={i} align="right" language={language} uiStrings={uiStrings} isDarkMode={isDarkMode} />
                    ) : (
                      <CategoryImage cat={cat} align="left" isDarkMode={isDarkMode} />
                    )}
                  </div>
                  <div className={`flex flex-col items-center md:items-start ${!isEven ? 'md:order-1' : ''}`}>
                    {!isEven ? (
                      <StepDescription cat={cat} i={i} align="left" language={language} uiStrings={uiStrings} isDarkMode={isDarkMode} />
                    ) : (
                      <CategoryImage cat={cat} align="right" isDarkMode={isDarkMode} />
                    )}
                  </div>
                </motion.div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "8rem" }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent to-slate-200 ${isEven ? 'right-full' : 'left-full'} opacity-40 group-hover/row:opacity-100 transition-opacity`}
                  />

                  <motion.div 
                    whileInView={{ scale: [0.8, 1.2, 1], rotate: [0, 10, 0] }}
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    viewport={{ amount: 0.8 }}
                    onClick={() => onNav(`category.${cat.id}`)}
                    className={`w-20 h-20 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-50'} rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center text-[var(--color-brand-blue)] cursor-pointer relative z-30 group-hover/row:border-[var(--color-brand-gold)] transition-colors border-2`}
                  >
                    {React.cloneElement(cat.icon, { size: 32, strokeWidth: 1.5 })}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}

          {/* 3. RELEASE GOAL */}
          <div className="flex flex-col items-center text-center pb-20 snap-center">
            <motion.div 
              initial={{ rotate: -10, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              className="relative mb-12"
            >
              <div className="absolute inset-0 bg-[var(--color-brand-gold)] blur-[80px] opacity-30 animate-pulse" />
              <div className={`w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[var(--color-brand-gold)] to-yellow-500 rounded-[3rem] rotate-12 flex items-center justify-center shadow-2xl relative z-10 border-[12px] ${isDarkMode ? 'border-slate-800' : 'border-white'}`}>
                <Trophy size={64} className="text-white -rotate-12" />
              </div>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black text-[var(--color-brand-blue)] uppercase italic tracking-tighter mb-12">
              {uiStrings.finish[language]}
            </h2>

            <motion.button
              onClick={() => onNav('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] italic shadow-2xl flex items-center gap-8 group mb-16"
            >
              <span className="text-lg">{uiStrings.enter[language]}</span>
              <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <div className="flex items-center gap-4 text-[var(--color-text-dim)] opacity-60">
               <div className={`h-px w-12 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`} />
               <span className="text-[10px] font-black uppercase tracking-[0.6em]">Vabadus algab siit</span>
               <div className={`h-px w-12 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`} />
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-20 text-center ${isDarkMode ? 'bg-black border-zinc-900' : 'bg-slate-50 border-slate-100'} border-t snap-end`}>
        <div className="flex flex-col items-center gap-4 opacity-40">
            <ShieldCheck size={32} className="text-[var(--color-brand-blue)]" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-text-dim)] leading-relaxed">
              TURVALINE ÜHENDUS • v22.2.0 <br />
              Project Samm © 2026
            </p>
        </div>
      </footer>
    </motion.div>
  );
}

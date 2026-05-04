import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Book, Wallet, HelpCircle, MessageSquare, ArrowRightCircle, Calendar, Star, Send, Bot, User, ChevronDown } from 'lucide-react';
import { useCategories } from '../../constants/categories';

export default function Home({ onNav, language = 'ET' }) {
  const categories = useCategories();
  const [hoveredId, setHoveredId] = useState(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatOpen, setChatOpen] = useState(true);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const featuredRef = useRef(null);

  const ui = {
    quick:        { ET: 'Käsiraamat', EN: 'Handbook' },
    heroTitle:    { ET: 'Digitaalne', EN: 'Digital' },
    heroSub:      { ET: 'teejuht', EN: 'handbook' },
    explore:      { ET: 'Sinu teekond vabanemiseni', EN: 'Your Path to Release' },
    featured:     { ET: 'Esiletõstetud pärl', EN: 'Featured Insight' },
    readMore:     { ET: 'Loe edasi', EN: 'Read more' },
    featuredTitle:{ ET: 'Päevakava ja loendus', EN: 'Schedule and count' },
    featuredDesc: {
      ET: 'Vanglas kehtib range päevakava. Leia siit info kellaaegade, loenduste ja igapäevaste rutiinide kohta.',
      EN: 'A strict daily schedule applies in prison. Find information about times, counts, and daily routines here.'
    },
    placeholder:  { ET: 'Küsi käsiraamatust...', EN: 'Ask the handbook...' },
    greeting:     {
      ET: 'Tere! Olen sinu vangla käsiraamatu abiline. Võid küsida minult kõike vanglaelu kohta – helistamine, toit, arstiabi, töötamine ja palju muud. Olen siin, et aidata.',
      EN: 'Hi, I\'m your prison handbook assistant. You can ask me anything about prison life - phone calls, food, medical care, work, and more. I\'m here to help.'
    },
    noResult:     { ET: 'Teemat ei leitud. Proovi teise sõnaga.', EN: 'Topic not found. Try different words.' },
    goTo:         { ET: 'Loe täpsemalt', EN: 'Read more' },
    offline:      { ET: 'Töötab ilma internetita', EN: 'Works offline' },
  };

  const greeting = { role: 'bot', text: ui.greeting[language], results: [] };

  useEffect(() => {
    setMessages([greeting]);
  }, [language]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (chatOpen) setTimeout(() => inputRef.current?.focus(), 350);
  }, [chatOpen]);

  useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleSend() {
    const q = input.trim();
    if (!q) return;
    setInput('');
    setChatOpen(true);

    const results = searchHandbook(q, language, 2);
    const botText = results.length > 0
      ? results[0].snippet
      : ui.noResult[language];

    setMessages(prev => [
      ...prev,
      { role: 'user', text: q },
      { role: 'bot', text: botText, results },
    ]);
  }

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 pt-4 pb-8 md:pt-6 md:pb-12 space-y-12 md:space-y-20">

      {/* PAGE HEADING + CHATBOT + FEATURED */}
      <div className="space-y-6">
      <div className="space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-none px-2"
      >
        {ui.heroTitle[language]}{' '}
        <span className="text-[var(--color-brand-gold)]">{ui.heroSub[language]}</span>
      </motion.h1>

      {/* HERO — chatbot */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[var(--color-brand-blue)]"
      >
        <div className="bg-[var(--color-bg-surface)] overflow-hidden">

          {/* Header */}
          <div className="px-6 py-5 flex items-center justify-between bg-[var(--color-brand-blue)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-gold)] flex items-center justify-center flex-shrink-0">
                <Bot size={24} className="text-[var(--color-brand-blue)]" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-wider leading-tight" style={{ color: '#ffffff' }}>
                  {language === 'ET' ? 'Käsiraamatu abiline' : 'Handbook Assistant'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(o => !o)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all"
            >
              <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: '#ffffff' }}>
                {chatOpen
                  ? (language === 'ET' ? 'Peida' : 'Hide')
                  : (language === 'ET' ? 'Ava' : 'Expand')}
              </span>
              <motion.div animate={{ rotate: chatOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={13} />
              </motion.div>
            </button>
          </div>

           <div className="w-full max-w-lg relative z-10">
              <input 
                type="text" 
                placeholder={uiStrings.search[language]}
                className="w-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-border-subtle)] rounded-2xl py-4 px-6 pl-14 text-lg font-bold text-[var(--color-text-body)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner focus:shadow-xl focus:shadow-[var(--color-brand-gold)]/5"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-text-dim)]" size={24} />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center gap-1.5 px-2 py-1 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg shadow-sm opacity-40 hidden md:flex">
                 <Command size={12} className="text-[var(--color-text-dim)]" />
                 <span className="text-[10px] font-black text-[var(--color-text-dim)]">K</span>
              </div>
           </div>
        </div>
      </motion.div>
      </div>

      {/* FEATURED ARTICLE */}
      <motion.div
        ref={featuredRef}

        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer"
        onClick={() => onNav('daily.schedule')}
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-[3rem]" />
        <div className="relative min-h-[300px] md:min-h-[350px] bg-[var(--color-bg-surface)] rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 flex flex-col md:flex-row">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-30 md:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-surface)] via-[var(--color-bg-surface)]/90 to-transparent md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface)] via-[var(--color-bg-surface)]/60 to-transparent md:hidden block" />
          </div>
          <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-brand-gold)] rounded-lg flex items-center justify-center text-black shadow-lg">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-gold)]">{ui.featured[language]}</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-6xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tighter leading-none">
                {ui.featuredTitle[language]}
              </h2>
              <p className="text-sm md:text-lg font-bold text-[var(--color-text-secondary)] uppercase tracking-wider leading-relaxed max-w-xl opacity-80">
                {ui.featuredDesc[language]}
              </p>
            </div>
            <button className="flex items-center gap-4 px-8 py-4 bg-[var(--color-brand-blue)] text-white rounded-2xl font-black uppercase tracking-widest italic shadow-xl group-hover:bg-[var(--color-brand-gold)] group-hover:text-black transition-all transform group-hover:translate-x-2 duration-500">
              <span>{ui.readMore[language]}</span>
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
          <div className="relative z-10 w-full md:w-1/3 bg-gradient-to-l from-[var(--color-brand-gold)]/10 to-transparent backdrop-blur-[2px] hidden lg:flex items-center justify-center p-12">
            <div className="w-full aspect-square bg-[var(--color-bg-surface)]/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 shadow-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <Calendar size={80} className="text-[var(--color-brand-gold)] drop-shadow-2xl" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </motion.div>
      </div>

      {/* CATEGORY GRID */}
      <div className="space-y-12">
        <div className="flex items-end justify-between px-2">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic drop-shadow-sm">{ui.explore[language]}</h2>
            <div className="h-1.5 w-24 bg-[var(--color-brand-gold)] rounded-full shadow-[0_0_10px_rgba(255,208,0,0.5)]" />
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              variants={item}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onNav(`category.${cat.id}`)}
              className="group relative h-80 md:h-96 bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-subtle)] rounded-[3rem] p-10 text-left flex flex-col justify-between transition-all hover:border-[var(--color-brand-gold)] hover:shadow-2xl overflow-hidden shadow-sm hover:-translate-y-2 duration-500"
            >
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-[var(--color-brand-gold)] opacity-0 group-hover:opacity-[0.05] blur-[80px] transition-opacity rounded-full pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[var(--color-brand-blue)] opacity-0 group-hover:opacity-[0.03] blur-[60px] transition-opacity rounded-full pointer-events-none" />
              <div className="flex items-start justify-between relative z-10">
                <div className="w-20 h-20 bg-[var(--color-bg-elevated)] rounded-[1.5rem] flex items-center justify-center text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-gold)] group-hover:text-black group-hover:rotate-12 transition-all duration-700 shadow-sm border border-[var(--color-border-subtle)]">
                  {React.cloneElement(cat.icon, { size: 40, strokeWidth: 2.5 })}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500">
                  <ArrowRightCircle size={40} className="text-[var(--color-brand-gold)]" strokeWidth={1.5} />
                </div>
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] uppercase tracking-tighter italic leading-none group-hover:text-[var(--color-brand-blue)] transition-colors duration-500">
                  {cat.title[language]}
                </h3>
                <p className="text-xs md:text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.1em] leading-relaxed line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {cat.desc[language]}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* FLOATING SCROLL HINT */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            onClick={() => featuredRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 text-[var(--color-text-dim)] hover:text-[var(--color-brand-gold)] transition-colors"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.25em]">
              {language === 'ET' ? 'Kerige alla' : 'Scroll to explore'}
            </span>
            <ChevronDown size={18} className="animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* QUICK TOOLS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { id: 'calculator', icon: <Wallet size={24} />, label: { ET: 'Kalkulaator', EN: 'Calculator' } },
          { id: 'assistant',  icon: <HelpCircle size={24} />, label: { ET: 'Abiline', EN: 'Assistant' } },
          { id: 'glossary',   icon: <Book size={24} />, label: { ET: 'Sõnastik', EN: 'Glossary' } },
          { id: 'faq',        icon: <MessageSquare size={24} />, label: { ET: 'KKK', EN: 'FAQ' } },
        ].map(tool => (
          <motion.button
            key={tool.id}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => onNav(tool.id)}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-subtle)] rounded-[2rem] shadow-md hover:shadow-2xl hover:border-[var(--color-brand-gold)] transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 bg-[var(--color-bg-elevated)] rounded-2xl flex items-center justify-center text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-gold)] group-hover:text-black transition-all duration-500 shadow-sm relative z-10">
              {tool.icon}
            </div>
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[var(--color-text-primary)] italic relative z-10">{tool.label[language]}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

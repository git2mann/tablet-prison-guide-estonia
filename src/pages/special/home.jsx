import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart3, ArrowRight, Sparkles, Book, Wallet, HelpCircle, MessageSquare, ArrowRightCircle, Command } from 'lucide-react';
import { useCategories } from '../../constants/categories';
import { appleSpring, fadeIn, staggerContainer, staggerItem } from '../../constants/animations';

export default function HomePage({ onNav, language = 'ET' }) {
  const categories = useCategories();
  const [searchQuery, setSearchQuery] = useState('');
  const [catIndex, setCatIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const catScrollRef = React.useRef(null);

  const featuredArticles = [
    {
      id: 'arrival.search',
      title: { ET: 'Kuidas vanglas toime tulla?', EN: 'How to manage in prison?' },
      desc: { ET: 'Oluline info uutele saabujatele: õigused, kohustused ja esimene nädal vanglas.', EN: 'Essential info for newcomers: rights, duties and the first week.' },
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
      tag: { ET: 'Alusta siit', EN: 'Start here' }
    },
    {
      id: 'daily.schedule',
      title: { ET: 'Päevakava ja rutiin', EN: 'Daily Schedule' },
      desc: { ET: 'Kuidas on planeeritud sinu päev: loendused, söögiajad ja vaba aeg.', EN: 'How your day is planned: counts, mealtimes and leisure.' },
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
      tag: { ET: 'Igapäevaelu', EN: 'Daily Life' }
    },
    {
      id: 'rel.open',
      title: { ET: 'Tee vabadusse: Avavangla', EN: 'Path to Freedom: Open Prison' },
      desc: { ET: 'Millal ja kuidas on võimalik pääseda avavanglasse.', EN: 'When and how it is possible to get to open prison.' },
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80',
      tag: { ET: 'Vabanemine', EN: 'Release' }
    }
  ];

  const handleCatScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const itemsPerView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
    const itemWidth = (width / itemsPerView);
    const index = Math.round(scrollLeft / itemWidth);
    if (index !== catIndex) setCatIndex(index);
  };

  const scrollToCat = (index) => {
    if (catScrollRef.current) {
      const width = catScrollRef.current.offsetWidth;
      const itemsPerView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
      const itemWidth = (width / itemsPerView);
      catScrollRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
      setCatIndex(index);
    }
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setHeroIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = featuredArticles.length - 1;
      if (next >= featuredArticles.length) next = 0;
      return next;
    });
  };

  const currentHero = featuredArticles[heroIndex];

  const uiStrings = {
    searchPlaceholder: { ET: 'Otsi kõike...', RU: 'Otsi...', EN: 'Search anything...' },
    featured: { ET: 'Päeva soovitus', EN: 'Featured Today' },
    explore: { ET: 'Avasta kategooriaid', EN: 'Explore Categories' }
  };

  return (
    <motion.div {...fadeIn} className="px-6 md:px-12 py-12 space-y-16 max-w-7xl mx-auto">
      
      {/* Editorial Hero Carousel */}
      <section className="space-y-8 pt-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2 text-[var(--color-brand-gold)] font-black text-xs uppercase tracking-[0.4em] italic"
            >
              <Sparkles size={14} fill="currentColor" /> {uiStrings.featured[language]}
            </motion.div>
            <h2 className="text-[clamp(2.5rem,5vw+1rem,6rem)] font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.85] text-balance ">
              Sinu <br />
              <span className="text-slate-200">teekond</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="w-full sm:w-96">
              <div className="relative group bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] shadow-sm focus-within:shadow-2xl focus-within:border-[var(--color-brand-gold)] transition-all duration-500 rounded-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[var(--color-brand-gold)] transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder={uiStrings.searchPlaceholder[language]} 
                  className="w-full pl-14 pr-6 py-5 rounded-full outline-none text-lg font-bold bg-transparent text-[var(--color-text-primary)] placeholder:text-slate-300" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 bg-[var(--color-bg-card)] p-2.5 rounded-full border-2 border-[var(--color-border-subtle)] shadow-sm">
               {featuredArticles.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => {
                     setDirection(idx > heroIndex ? 1 : -1);
                     setHeroIndex(idx);
                   }}
                   className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${heroIndex === idx ? 'bg-[var(--color-brand-gold)] w-10' : 'bg-slate-300'}`}
                 />
               ))}
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-[60px] shadow-2xl border-4 border-[var(--color-bg-card)] bg-slate-100 transition-colors duration-500">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div 
              key={heroIndex}
              custom={direction}
              initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 1000 : -1000, opacity: 0 }}
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;
                if (swipe) paginate(offset.x > 0 ? -1 : 1);
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              onClick={() => onNav(currentHero.id)}
            >
              <img src={currentHero.image} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt={currentHero.title[language]} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end pointer-events-none">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-block px-4 py-1.5 bg-[var(--color-brand-gold)] text-black rounded-full font-black text-[10px] uppercase tracking-widest mb-2 shadow-xl">{currentHero.tag[language]}</div>
                  <h3 className="text-[clamp(2rem,5vw+1rem,4.5rem)] font-black text-white tracking-tighter uppercase italic leading-tight text-balance  px-1">
                    {currentHero.title[language]}
                  </h3>
                  <p className="text-xl text-white/70 font-bold max-w-md leading-relaxed hidden md:block">{currentHero.desc[language]}</p>
                </div>
              </div>
              
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 pointer-events-none">
                 <ArrowRightCircle size={40} strokeWidth={1.5} className="text-white" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b-2 border-[var(--color-border-subtle)] pb-6">
          <h3 className="text-2xl font-black text-[var(--color-text-primary)] uppercase tracking-tight italic">{uiStrings.explore[language]}</h3>
          <div className="flex flex-wrap gap-2 bg-[var(--color-bg-button-alt)] p-2.5 rounded-full border border-[var(--color-border-subtle)]">
             {categories.map((_, idx) => (
               <button key={idx} onClick={() => scrollToCat(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${catIndex === idx ? 'bg-[var(--color-brand-gold)] w-8' : 'bg-slate-300'}`} />
             ))}
          </div>
        </div>

        <motion.div ref={catScrollRef} onScroll={handleCatScroll} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
          {categories.map((cat) => (
            <motion.button 
              key={cat.id}
              layoutId={`card-${cat.id}`}
              onClick={() => onNav(`category.${cat.id}`)}
              className="relative w-full min-h-[350px] flex flex-col justify-end p-8 md:p-10 bg-[var(--color-bg-card)] rounded-[48px] shadow-sm border-2 border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gold)] hover:shadow-2xl transition-all text-left group overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-[var(--color-brand-blue)] to-transparent`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-[var(--color-bg-button-alt)] rounded-2xl flex items-center justify-center text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-gold)] group-hover:text-black group-hover:rotate-12 transition-all duration-500 shadow-sm flex-shrink-0">
                  {React.cloneElement(cat.icon, { size: 32, strokeWidth: 2.5 })}
                </div>
                <div className="space-y-2">
                  <h4 className="text-[clamp(1.5rem,2cqw+1rem,2.25rem)] font-black text-[var(--color-text-primary)] uppercase italic tracking-tighter leading-tight text-balance ">{cat.title[language]}</h4>
                  <p className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-widest leading-snug line-clamp-2">{cat.desc[language]}</p>
                </div>
              </div>
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                <ArrowRight size={32} className="text-[var(--color-text-primary)]" strokeWidth={3} />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* SMART TOOLS */}
      <section className="space-y-12 pt-12 border-t-2 border-[var(--color-border-subtle)]">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-[var(--color-brand-gold)]">
            <Command size={20} />
            <span className="font-black text-xs uppercase tracking-[0.4em] italic">Interaktiivsed lahendused</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw+1rem,4rem)] font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-none">Nutikad <span className="text-slate-200 text-balance ">tööriistad</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 'glossary', title: { ET: 'Sõnastik', EN: 'Glossary' }, desc: { ET: 'Mõisted ja lühendid', EN: 'Terms & Acronyms' }, icon: <Book size={32} />, color: 'bg-blue-600' },
            { id: 'calculator', title: { ET: 'Kalkulaator', EN: 'Calculator' }, desc: { ET: 'Vabanemisfondi arvutus', EN: 'Release Fund Math' }, icon: <Wallet size={32} />, color: 'bg-emerald-600' },
            { id: 'assistant', title: { ET: 'Abiline', EN: 'Assistant' }, desc: { ET: 'Avalduste koostamine', EN: 'Application Guide' }, icon: <HelpCircle size={32} />, color: 'bg-amber-600' },
            { id: 'faq', title: { ET: 'KKK', EN: 'FAQ' }, desc: { ET: 'Korduvad küsimused', EN: 'Common Questions' }, icon: <MessageSquare size={32} />, color: 'bg-purple-600' },
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => onNav(tool.id)}
              className="group p-8 bg-[var(--color-bg-card)] rounded-[40px] border-2 border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gold)] hover:shadow-2xl transition-all text-left flex flex-col justify-between h-[280px] overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl ${tool.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                {tool.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tight leading-tight text-balance ">{tool.title[language]}</h4>
                <p className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest leading-snug">{tool.desc[language]}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <motion.button 
        whileHover={{ scale: 0.99, y: 5 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onNav('admin')} 
        className="w-full p-12 rounded-[60px] bg-[var(--color-brand-blue)] text-white flex flex-col md:flex-row items-center justify-between px-16 group shadow-2xl relative overflow-hidden transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-20" />
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="p-6 bg-white/10 rounded-[32px] border border-white/20 group-hover:bg-[var(--color-brand-gold)] group-hover:text-black transition-colors duration-500 flex-shrink-0">
            <BarChart3 size={48} strokeWidth={1.5} />
          </div>
          <div className="text-center md:text-left overflow-hidden">
            <div className="text-[var(--color-brand-gold)] font-black text-xs uppercase tracking-[0.4em] mb-2 italic">Süsteem</div>
            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight text-balance ">Monitor</h4>
          </div>
        </div>
        <ArrowRight size={48} className="hidden md:block group-hover:translate-x-4 transition-transform text-[var(--color-brand-gold)] flex-shrink-0" strokeWidth={1.5} />
      </motion.button>
    </motion.div>
  );
}

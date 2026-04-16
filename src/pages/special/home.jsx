import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart3, ArrowRight, ShieldCheck, Sparkles, Zap, Clock, HeartPulse, Scale, GraduationCap, ArrowRightCircle } from 'lucide-react';
import { useCategories } from '../../constants/categories';
import { appleSpring, fadeIn, staggerContainer, staggerItem } from '../../constants/animations';

export default function HomePage({ onNav, language = 'ET' }) {
  const categories = useCategories();
  const [searchQuery, setSearchQuery] = useState('');

  const uiStrings = {
    title: { ET: 'Vangi käsiraamat', RU: 'Справочник', EN: 'Handbook' },
    searchPlaceholder: { ET: 'Otsi kõike...', RU: 'Otsi...', EN: 'Search anything...' },
    greeting: { ET: 'Tere tulemast', EN: 'Welcome' },
    featured: { ET: 'Päeva soovitus', EN: 'Featured Today' },
    explore: { ET: 'Avasta kategooriaid', EN: 'Explore Categories' }
  };

  return (
    <motion.div {...fadeIn} className="px-6 md:px-12 py-12 space-y-16 max-w-7xl mx-auto">
      
      {/* Editorial Hero */}
      <section className="space-y-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2 text-[#FFD000] font-black text-xs uppercase tracking-[0.4em] italic"
            >
              <Sparkles size={14} fill="currentColor" /> {uiStrings.featured[language]}
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-[#003B71] tracking-tighter uppercase italic leading-[0.85]">
              Sinu <br />
              <span className="text-slate-200">teekond</span>
            </h2>
          </div>
          
          {/* Dynamic Island Search */}
          <div className="w-full md:w-96">
            <div className="relative group bg-white/40 backdrop-blur-2xl rounded-full border-2 border-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] focus-within:shadow-2xl focus-within:bg-white transition-all duration-500">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#FFD000] transition-colors" size={20} />
              <input 
                type="text" 
                placeholder={uiStrings.searchPlaceholder[language]} 
                className="w-full pl-14 pr-6 py-5 rounded-full outline-none text-lg font-bold bg-transparent text-slate-700 placeholder:text-slate-300" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
            </div>
          </div>
        </div>

        {/* Large Editorial Card */}
        <motion.div 
          whileHover={{ scale: 0.99, y: 5 }}
          whileTap={{ scale: 0.97 }}
          transition={appleSpring}
          className="relative h-[400px] md:h-[500px] rounded-[60px] overflow-hidden cursor-pointer group shadow-2xl"
          onClick={() => onNav('arrival.search')}
        >
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003B71] via-[#003B71]/40 to-transparent opacity-90" />
          
          <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
            <div className="max-w-2xl space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#FFD000] text-black rounded-full font-black text-[10px] uppercase tracking-widest mb-2 shadow-xl">
                Alusta siit
              </div>
              <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                Kuidas <br /> vanglas <br /> <span className="text-[#FFD000]">toime tulla?</span>
              </h3>
              <p className="text-xl text-white/70 font-bold max-w-md leading-relaxed hidden md:block">
                Oluline info uutele saabujatele: õigused, kohustused ja esimene nädal vanglas.
              </p>
            </div>
          </div>
          
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#FFD000] group-hover:text-black transition-all duration-500">
             <ArrowRightCircle size={40} strokeWidth={1.5} />
          </div>
        </motion.div>
      </section>

      {/* Grid Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-6">
        <h3 className="text-2xl font-black text-[#003B71] uppercase tracking-tight italic">
          {uiStrings.explore[language]}
        </h3>
        <div className="flex gap-2">
           <div className="w-2 h-2 rounded-full bg-[#FFD000]" />
           <div className="w-2 h-2 rounded-full bg-slate-200" />
           <div className="w-2 h-2 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* Category Grid - Apple App Style */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={staggerItem}
            className="group"
          >
            <motion.button 
              layoutId={`card-${cat.id}`}
              onClick={() => onNav(`category.${cat.id}`)}
              whileHover={{ scale: 1.015, y: -5 }}
              whileTap={{ scale: 0.94, filter: "brightness(0.9)" }}
              transition={{ ...appleSpring, stiffness: 400, damping: 30 }}
              className={`relative w-full min-h-[320px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-10 overflow-hidden bg-white rounded-[40px] md:rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border-2 border-white group-hover:shadow-2xl transition-all text-left @container`}
              style={{ borderRadius: '40px' }} 
            >
              {/* Mesh Gradient Background */}
              <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${cat.color.includes('orange') ? 'from-orange-400 to-red-600' : cat.color.includes('blue') ? 'from-blue-400 to-indigo-800' : 'from-slate-400 to-slate-800'}`} />

              <div className="absolute top-0 right-0 p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                <ArrowRight size={32} className="text-[#003B71]" strokeWidth={3} />
              </div>

              <div className="relative z-10 flex flex-col gap-4 md:gap-6 w-full">
                <motion.div 
                  layoutId={`icon-box-${cat.id}`} 
                  transition={appleSpring} 
                  className="p-4 md:p-5 bg-slate-50 rounded-2xl md:rounded-3xl text-[#003B71] w-fit group-hover:bg-[#FFD000] group-hover:text-black group-hover:rotate-12 transition-all duration-500 shadow-sm"
                >
                  {React.cloneElement(cat.icon, { size: 32, strokeWidth: 2.5 })}
                </motion.div>

                <motion.div layoutId={`content-${cat.id}`} transition={appleSpring} className="space-y-1 md:space-y-2 flex-grow flex flex-col justify-end">
                  <motion.h3 
                    layoutId={`title-${cat.id}`} 
                    className="text-[clamp(12px,9cqw,26px)] font-black text-[#003B71] tracking-tighter uppercase italic leading-[0.9] text-balance break-words hyphens-auto"
                    lang={language.toLowerCase()}
                  >
                    {cat.title[language]}
                  </motion.h3>
                  <motion.p 
                    layoutId={`desc-${cat.id}`} 
                    className="text-[clamp(9px,4.5cqw,13px)] font-bold text-slate-400 uppercase tracking-tighter md:tracking-[0.1em] line-clamp-2"
                  >
                    {cat.desc[language]}
                  </motion.p>
                </motion.div>
              </div>
            </motion.button>

          </motion.div>
        ))}
      </motion.section>

      {/* Monitor Footer */}
      <motion.button 
        whileHover={{ scale: 0.99, y: 5 }}
        whileTap={{ scale: 0.97 }}
        transition={appleSpring}
        onClick={() => onNav('admin')} 
        className="w-full p-12 rounded-[60px] bg-[#003B71] text-white flex flex-col md:flex-row items-center justify-between px-16 group shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-20" />
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10 text-center md:text-left">
          <div className="p-6 bg-white/10 backdrop-blur-3xl rounded-[32px] border border-white/20 group-hover:bg-[#FFD000] group-hover:text-black transition-colors duration-500">
            <BarChart3 size={48} strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-[#FFD000] font-black text-xs uppercase tracking-[0.4em] mb-2 italic">Turvatud Süsteem</div>
            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Stabiilsuse Monitor</h4>
          </div>
        </div>
        <ArrowRight size={48} className="hidden md:block group-hover:translate-x-4 transition-transform text-[#FFD000]" strokeWidth={1.5} />
      </motion.button>
    </motion.div>
  );
}

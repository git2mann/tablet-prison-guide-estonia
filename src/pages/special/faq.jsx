import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, Search, X } from 'lucide-react';
import { staggerContainer, staggerItem } from "../../constants/animations";

const FAQS = [
  {
    q: { ET: 'Kuidas ma saan tööle asuda?', EN: 'How can I start working?' },
    a: { 
      ET: 'Võtke ühendust oma kontaktisikuga. Ta hindab Teie sobivust ja suunab Teid vastavasse osakonda (majandustööd või kutseline töö).', 
      EN: 'Contact your contact person. They will assess your eligibility and refer you to the appropriate department (economic or professional work).' 
    },
    cat: 'Töö'
  },
  {
    q: { ET: 'Mis saab, kui ma kaotan nimesildi?', EN: 'What happens if I lose my name tag?' },
    a: { 
      ET: 'Teavitage koheselt osakonna ametnikku. Teile väljastatakse uus nimesilt. Sildi puudumine võib olla reeglite rikkumine.', 
      EN: 'Inform unit staff immediately. A new name tag will be issued. Being without a tag can be considered a rule violation.' 
    },
    cat: 'Reeglid'
  },
  {
    q: { ET: 'Kuidas ma saan helistada?', EN: 'How can I make calls?' },
    a: { 
      ET: 'Peate kandma raha oma isikuarvelt telefonikaardile. Helistada saate graafiku alusel lubatud kellaaegadel.', 
      EN: 'You must transfer money from your personal account to your phone card. You can make calls during scheduled hours.' 
    },
    cat: 'Suhtlus'
  },
  {
    q: { ET: 'Kas ma saan oma riideid kanda?', EN: 'Can I wear my own clothes?' },
    a: { 
      ET: 'Süüdimõistetud peavad kandma vanglariideid. Vahistatud isikutel on lubatud kanda isiklikke riideid, kui need vastavad turvanõuetele.', 
      EN: 'Convicts must wear prison-issued clothing. Arrested persons are permitted to wear personal clothes if they meet security requirements.' 
    },
    cat: 'Igapäevaelu'
  }
];

export default function FAQ({ language = 'ET', onNav }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = FAQS.filter(f => 
    f.q[language].toLowerCase().includes(search.toLowerCase()) || 
    f.a[language].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16 md:space-y-24 ">
      {/* Design-Consistent Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 ">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[var(--color-brand-gold)]">
            <div className="p-2 bg-[var(--color-brand-gold)]/10 rounded-lg flex-shrink-0">
              <HelpCircle size={20} />
            </div>
            <span className="font-black text-xs uppercase tracking-[0.4em] italic  text-balance">
              {language === 'ET' ? 'Korduvad küsimused' : 'Common Questions'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.85]  text-balance">
            KKK <br />
            <span className="text-[var(--color-text-secondary)] opacity-30">{language === 'ET' ? 'vastused' : 'answers'}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] opacity-50" size={20} />
            <input 
              type="text" 
              placeholder={language === 'ET' ? 'Otsi küsimust...' : 'Search questions...'}
              className="w-full pl-14 pr-6 py-5 bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] rounded-full outline-none focus:border-[var(--color-brand-gold)] shadow-sm focus:shadow-xl transition-all font-bold text-lg text-[var(--color-text-primary)]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <button 
            onClick={() => onNav('home')}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-bg-button-alt)] hover:bg-[var(--color-brand-gold)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-sm"
          >
            <X size={18} strokeWidth={3} className="flex-shrink-0" />
            <span className=" text-balance">{language === 'ET' ? 'Sule ja välju' : 'Close and exit'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-6 ">
        {filtered.map((faq, idx) => (
          <motion.div key={idx} variants={staggerItem} className="bg-[var(--color-bg-card)] rounded-[40px] border-2 border-[var(--color-border-subtle)]  hover:border-[var(--color-brand-gold)]/30 transition-all duration-500 shadow-sm hover:shadow-2xl">
            <button
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className="w-full p-8 md:p-12 flex items-center justify-between text-left group "
            >
              <div className="flex items-center gap-8 ">
                <span className="hidden sm:block font-black text-[var(--color-text-secondary)] opacity-10 italic text-6xl leading-none transition-colors group-hover:text-[var(--color-brand-gold)]/20 flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl md:text-3xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tight leading-tight group-hover:text-[var(--color-brand-blue)] transition-colors  text-balance">{faq.q[language]}</h3>
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${activeIdx === idx ? 'bg-[var(--color-brand-blue)] text-white rotate-180 shadow-xl' : 'bg-[var(--color-bg-button-alt)] text-[var(--color-text-secondary)] group-hover:bg-[var(--color-brand-gold)] group-hover:text-[var(--color-text-primary)]'}`}>
                {activeIdx === idx ? <Minus size={28} strokeWidth={3} /> : <Plus size={28} strokeWidth={3} />}
              </div>
            </button>
            <AnimatePresence>
              {activeIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className=""
                >
                  <div className="p-8 md:p-20 pt-0 border-t-2 border-[var(--color-border-subtle)] ">
                    <div className="flex gap-8 ">
                       <div className="hidden md:block w-1.5 h-auto bg-[var(--color-brand-gold)] rounded-full opacity-40 flex-shrink-0" />
                       <div className="space-y-8 ">
                         <p className="text-2xl md:text-3xl font-bold text-[var(--color-text-secondary)] leading-relaxed text-balance ">
                           {faq.a[language]}
                         </p>
                         <div className="inline-flex items-center gap-3 px-6 py-2 bg-[var(--color-bg-button-alt)] rounded-full border border-[var(--color-border-subtle)] ">
                           <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                           <span className="text-xs font-black uppercase text-[var(--color-text-secondary)] opacity-50 tracking-widest italic  text-balance">Kategooria: {faq.cat}</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-40 text-center space-y-8 opacity-20">
          <HelpCircle size={100} className="mx-auto" strokeWidth={1} />
          <p className="font-black text-3xl uppercase tracking-[0.3em] italic  text-balance">Vastuseid ei leitud</p>
        </div>
      )}

      {/* Bottom Exit */}
      <div className="mt-24 pt-12 border-t-2 border-[var(--color-border-subtle)] flex justify-center pb-20 ">
         <button 
           onClick={() => onNav('home')}
           className="px-16 py-6 bg-[var(--color-brand-blue)] text-white rounded-full font-black uppercase tracking-[0.2em] italic hover:opacity-90 hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-3 "
         >
           <span className=" text-balance">Tagasi pealehele</span>
         </button>
      </div>
    </motion.div>
  );
}

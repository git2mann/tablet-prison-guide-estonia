import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronRight, FileText, Send, X } from 'lucide-react';
import { staggerContainer, staggerItem } from "../../constants/animations";

const ASSISTANT_FLOW = {
  start: {
    question: { ET: 'Millega saame Teid aidata?', EN: 'What can we help you with?' },
    options: [
      { label: { ET: 'Tööle kandideerimine', EN: 'Apply for work' }, next: 'work' },
      { label: { ET: 'Kohtumine lähedastega', EN: 'Visit from family' }, next: 'visit' },
      { label: { ET: 'Koolitus või õppimine', EN: 'Study or training' }, next: 'study' },
      { label: { ET: 'Muu avaldus', EN: 'Other application' }, next: 'other' }
    ]
  },
  work: {
    result: true,
    title: { ET: 'Tööle kandideerimine', EN: 'Applying for Work' },
    steps: {
      ET: [
        'Võtke ühendust oma kontaktisikuga.',
        'Teid suunatakse VEK-i (Vangla Ettevõtluskeskus) või majandustöödele.',
        'Täitke sooviavaldus tahvlis või paberil.',
        'Oodake vestlust sotsiaaltöötajaga.'
      ],
      EN: [
        'Contact your contact person first.',
        'You will be referred to VEK or economic work.',
        'Fill out a request form on the tablet or paper.',
        'Wait for an interview with a social worker.'
      ]
    }
  },
  visit: {
    result: true,
    title: { ET: 'Lähikondsetega kohtumine', EN: 'Family Visits' },
    steps: {
      ET: [
        'Esitage taotlus vähemalt 5 tööpäeva ette.',
        'Märkige külastajate nimed ja isikukoodid.',
        'Kohtumised toimuvad graafiku alusel.',
        'Pikaajaliseks kohtumiseks on vajalik eraldi luba.'
      ],
      EN: [
        'Submit a request at least 5 working days in advance.',
        'Include names and ID numbers of visitors.',
        'Visits follow a specific unit schedule.',
        'Long-term visits require a separate approval process.'
      ]
    }
  },
  study: {
    result: true,
    title: { ET: 'Õppimisvõimalused', EN: 'Study Opportunities' },
    steps: {
      ET: [
        'Võimalik on omandada põhi-, kesk- või kutseharidus.',
        'Õppetöö toimub koostöös kohalike koolidega.',
        'Teavitage sotsiaaltöötajat oma õppimissoovist.',
        'Õppimine on osa Teie ITK-st (individuaalne täitmiskava).'
      ],
      EN: [
        'Basic, secondary, or vocational education is available.',
        'Studies are organized with local schools.',
        'Inform a social worker about your desire to study.',
        'Studying is integrated into your ITK (individual plan).'
      ]
    }
  },
  other: {
    result: true,
    title: { ET: 'Muud avaldused', EN: 'Other Applications' },
    steps: {
      ET: [
        'Enamik avaldusi (pood, helistamine) esitatakse tahvlis.',
        'Vabas vormis avaldused andke üle osakonna ametnikule.',
        'Vastamise tähtaeg on tavaliselt kuni 30 päeva.',
        'Kiireloomuliste muredega pöörduge otse kontaktisiku poole.'
      ],
      EN: [
        'Most applications (shop, calls) are submitted via tablet.',
        'Paper applications should be handed to unit staff.',
        'Response time is generally up to 30 days.',
        'Urgent matters should go directly to your contact person.'
      ]
    }
  }
};

export default function ApplicationAssistant({ language = 'ET', onNav }) {
  const [currentNode, setCurrentNode] = useState('start');
  const node = ASSISTANT_FLOW[currentNode];

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
              {language === 'ET' ? 'Avalduste abiline' : 'Application Guide'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.85]  text-balance">
            Vajate <br />
            <span className="text-[var(--color-text-secondary)] opacity-30">{language === 'ET' ? 'abi avaldusega?' : 'application help?'}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <button 
            onClick={() => onNav('home')}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-bg-button-alt)] hover:bg-[var(--color-brand-gold)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-sm"
          >
            <X size={18} strokeWidth={3} className="flex-shrink-0" />
            <span className=" text-balance">{language === 'ET' ? 'Sule ja välju' : 'Close and exit'}</span>
          </button>
        </div>
      </div>

      <div className="bg-[var(--color-bg-card)] rounded-[60px] border-2 border-[var(--color-border-subtle)] shadow-2xl  min-h-[600px] flex flex-col">
        <div className="p-8 md:p-14 bg-[var(--color-bg-button-alt)]/50 border-b-2 border-[var(--color-border-subtle)] flex items-center justify-between ">
           <div className="flex items-center gap-6">
             <div className="p-5 bg-[var(--color-brand-blue)] text-[var(--color-brand-gold)] rounded-[24px] shadow-xl rotate-3 flex-shrink-0">
               <FileText size={32} strokeWidth={2.5} />
             </div>
             <div className="">
               <h3 className="text-2xl md:text-4xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tighter leading-none  text-balance">Vali teema</h3>
               <p className="text-xs font-bold text-[var(--color-text-secondary)] opacity-50 uppercase tracking-widest mt-2 italic  text-balance">Samm-sammuline juhend</p>
             </div>
           </div>
           {currentNode !== 'start' && (
             <button 
              onClick={() => setCurrentNode('start')}
              className="px-6 py-3 bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] rounded-2xl text-[10px] font-black text-[var(--color-text-secondary)] uppercase tracking-widest hover:border-[var(--color-brand-gold)] hover:text-[var(--color-text-primary)] transition-all active:scale-95 flex-shrink-0"
             >
               <span className=" text-balance">Tagasi algusesse</span>
             </button>
           )}
        </div>

        <div className="flex-1 p-8 md:p-20 ">
          <AnimatePresence mode="wait">
            {node.result ? (
              <motion.div 
                key={currentNode}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12 "
              >
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-7xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-none  text-balance">
                    {node.title[language]}
                  </h3>
                  <div className="h-2 w-32 bg-[var(--color-brand-gold)] rounded-full" />
                </div>

                <div className="grid grid-cols-1 gap-6 ">
                   {node.steps[language].map((step, i) => (
                     <div key={i} className="flex items-start gap-8 p-8 bg-[var(--color-bg-button-alt)]/50 rounded-[40px] border-2 border-transparent hover:border-[var(--color-brand-gold)] transition-all duration-500 group ">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-card)] border-2 border-[var(--color-text-primary)]/10 text-[var(--color-text-primary)] flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-[var(--color-brand-blue)] group-hover:text-white transition-all">
                          {i + 1}
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[var(--color-text-secondary)] leading-tight pt-1 text-balance ">{step}</p>
                     </div>
                   ))}
                </div>

                <div className="p-10 bg-[var(--color-brand-blue)] rounded-[48px] shadow-2xl flex flex-col md:flex-row items-center gap-10 relative ">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                   <div className="w-20 h-20 rounded-3xl bg-[var(--color-brand-gold)] text-[var(--color-text-primary)] flex items-center justify-center shrink-0 shadow-xl rotate-12">
                      <Send size={40} strokeWidth={2.5} />
                   </div>
                   <div className="space-y-2 ">
                     <p className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight  text-balance">Oluline meelespea</p>
                     <p className="text-lg md:text-xl font-bold text-white/60 leading-relaxed text-balance ">
                       {language === 'ET' 
                         ? 'Kasutage seda nimekirja juhendina ametnikuga suhtlemisel. Selge küsimus toob kiirema vastuse.' 
                         : 'Use this checklist as a guide when speaking with staff. Clear questions get faster answers.'}
                     </p>
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12 "
              >
                <h3 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.9] text-balance ">
                  {node.question[language]}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  {node.options.map(opt => (
                    <button
                      key={opt.next}
                      onClick={() => setCurrentNode(opt.next)}
                      className="p-10 bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] rounded-[48px] hover:border-[var(--color-brand-gold)] hover:shadow-2xl transition-all duration-500 group text-left flex flex-col justify-between h-[280px] "
                    >
                      <span className="text-3xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tighter leading-none group-hover:text-[var(--color-brand-blue)] transition-colors  text-balance">
                        {opt.label[language]}
                      </span>
                      <div className="flex items-center justify-between ">
                         <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-button-alt)] flex items-center justify-center text-[var(--color-text-secondary)] opacity-50 group-hover:bg-[var(--color-brand-gold)]/10 group-hover:text-[var(--color-brand-gold)] group-hover:opacity-100 transition-all flex-shrink-0">
                            <ChevronRight size={28} strokeWidth={3} />
                         </div>
                         <span className="text-[10px] font-black text-[var(--color-text-secondary)] opacity-30 uppercase tracking-widest group-hover:text-[var(--color-brand-gold)] group-hover:opacity-100 transition-colors  text-balance">Vaata juhist</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center pb-20 ">
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

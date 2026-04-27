import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Info, RefreshCw, Landmark, X, Clock } from 'lucide-react';
import { staggerContainer, staggerItem } from "../../constants/animations";

export default function FundCalculator({ language = 'ET', onNav }) {
  const [balance, setBalance] = useState(0);
  const [salary, setIncome] = useState(0);
  const [hasDebt, setHasDebt] = useState(false);

  // Example Estonian Minimum Wage 2024 is ~820€
  const MIN_WAGE = 820;
  const CAP = MIN_WAGE * 3;

  // Calculation Logic based on Handbook:
  // No debt: 70% to fund, 30% to user
  // Debt: 20% to fund, 50% to debt, 30% to user
  const fundRate = hasDebt ? 0.20 : 0.70;
  const monthlySavings = salary * fundRate;
  const remainingToCap = Math.max(0, CAP - balance);
  const monthsToCap = monthlySavings > 0 ? Math.ceil(remainingToCap / monthlySavings) : Infinity;

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16 md:space-y-24 ">
      {/* Design-Consistent Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 ">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[var(--color-brand-gold)]">
            <div className="p-2 bg-[var(--color-brand-gold)]/10 rounded-lg flex-shrink-0">
              <Wallet size={20} />
            </div>
            <span className="font-black text-xs uppercase tracking-[0.4em] italic  text-balance">
              {language === 'ET' ? 'Rahaline planeerimine' : 'Financial Planning'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.85]  text-balance">
            Vabanemis<br />
            <span className="text-[var(--color-text-secondary)] opacity-30">{language === 'ET' ? 'fondi arvutus' : 'fund calculator'}</span>
          </h2>
        </div>

        <button 
          onClick={() => onNav('home')}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-bg-button-alt)] hover:bg-[var(--color-brand-gold)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-sm w-fit"
        >
          <X size={18} strokeWidth={3} className="flex-shrink-0" />
          <span className=" text-balance">{language === 'ET' ? 'Sule ja välju' : 'Close and exit'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 ">
        {/* Input Section (5 columns) */}
        <div className="lg:col-span-5 bg-[var(--color-bg-card)] rounded-[48px] p-8 md:p-12 border-2 border-[var(--color-border-subtle)] shadow-xl space-y-10 ">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--color-text-secondary)] opacity-50">
               <RefreshCw size={16} className="flex-shrink-0" />
               <label className="text-[10px] font-black uppercase tracking-widest italic  text-balance">Sisestage andmed</label>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-black uppercase text-[var(--color-text-primary)] opacity-40 tracking-widest italic  text-balance">Praegune jääk (€)</label>
              <input 
                type="number" 
                className="w-full p-6 bg-[var(--color-bg-button-alt)] rounded-3xl border-2 border-transparent focus:border-[var(--color-brand-gold)] focus:bg-[var(--color-bg-card)] transition-all text-3xl font-black text-[var(--color-text-primary)] outline-none shadow-inner"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-black uppercase text-[var(--color-text-primary)] opacity-40 tracking-widest italic  text-balance">Kuu netopalk (€)</label>
              <input 
                type="number" 
                className="w-full p-6 bg-[var(--color-bg-button-alt)] rounded-3xl border-2 border-transparent focus:border-[var(--color-brand-gold)] focus:bg-[var(--color-bg-card)] transition-all text-3xl font-black text-[var(--color-text-primary)] outline-none shadow-inner"
                value={salary}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </div>
          </div>

          <button 
            onClick={() => setHasDebt(!hasDebt)}
            className={`w-full p-8 rounded-[32px] border-2 flex items-center justify-between transition-all group  ${hasDebt ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 shadow-lg translate-y-[-2px]' : 'bg-[var(--color-bg-button-alt)] border-transparent hover:border-[var(--color-border-subtle)]'}`}
          >
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-2xl transition-colors flex-shrink-0 ${hasDebt ? 'bg-red-500 text-white' : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)]'}`}>
                <Landmark size={24} />
              </div>
              <div className="text-left">
                <span className={`block font-black uppercase italic tracking-tight text-lg  text-balance ${hasDebt ? 'text-red-600' : 'text-[var(--color-text-secondary)]'}`}>
                  {language === 'ET' ? (hasDebt ? 'Mul on võlgnevusi' : 'Mul puuduvad võlad') : (hasDebt ? 'I have debts' : 'No debts')}
                </span>
                <span className="text-[10px] font-bold text-[var(--color-text-secondary)] opacity-50 uppercase tracking-widest italic  text-balance">Mõjutab kogumise määra</span>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border-4 transition-all flex-shrink-0 ${hasDebt ? 'bg-red-500 border-red-100 dark:border-red-900/30 scale-110' : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-800 group-hover:border-[var(--color-border-subtle)]'}`} />
          </button>
        </div>

        {/* Results Section (7 columns) */}
        <div className="lg:col-span-7 bg-[var(--color-brand-blue)] rounded-[60px] p-10 md:p-16 text-white shadow-2xl relative  flex flex-col justify-between min-h-[500px]">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-gold)]/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] -ml-32 -mb-32" />

          <div className="space-y-12 relative z-10 ">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-10 bg-[var(--color-brand-gold)] rounded-full flex-shrink-0" />
              <div className="space-y-1">
                <span className="text-[var(--color-brand-gold)] font-black text-xs uppercase tracking-widest italic opacity-60  text-balance">Prognoositav tulemus</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-balance ">Hinnanguline <br />ülevaade</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
              <div className="space-y-2">
                <span className="text-white/30 text-xs font-black uppercase tracking-[0.2em] italic  text-balance">Kogumine kuus</span>
                <p className="text-5xl font-black text-[var(--color-brand-gold)] tracking-tighter italic ">{monthlySavings.toFixed(2)}€</p>
                <div className="h-1 w-12 bg-[var(--color-brand-gold)]/20 rounded-full" />
              </div>
              <div className="space-y-2">
                <span className="text-white/30 text-xs font-black uppercase tracking-[0.2em] italic  text-balance">Maksimummäär</span>
                <p className="text-5xl font-black tracking-tighter italic ">{CAP}€</p>
                <div className="h-1 w-12 bg-white/10 rounded-full" />
              </div>
            </div>

            <div className="p-8 bg-[var(--color-bg-card)] rounded-[40px] border-2 border-white/10 shadow-2xl ">
               <div className="flex items-center justify-between mb-6 ">
                 <div>
                    <span className="block font-black text-[var(--color-brand-gold)] text-2xl tracking-tighter italic uppercase ">{remainingToCap.toFixed(2)}€</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)] italic  text-balance">Limiidini jäänud</span>
                 </div>
                 <div className="text-right">
                    <span className="block font-black text-[var(--color-text-primary)] opacity-40 text-xl italic uppercase ">{((balance / CAP) * 100).toFixed(0)}%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)] italic  text-balance">Valmidus</span>
                 </div>
               </div>
               <div className="w-full h-4 bg-[var(--color-bg-button-alt)] rounded-full  p-1">
                 <motion.div 
                   className="h-full bg-[var(--color-brand-gold)] rounded-full shadow-[0_0_20px_rgba(255,208,0,0.5)]"
                   initial={{ width: 0 }}
                   animate={{ width: `${Math.min(100, (balance / CAP) * 100)}%` }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                 />
               </div>
            </div>
          </div>

          <div className="pt-12 relative z-10 ">
            {monthsToCap !== Infinity && monthsToCap > 0 ? (
              <div className="flex items-center gap-6 p-6 bg-[var(--color-brand-gold)] rounded-3xl text-[var(--color-text-primary)] shadow-xl rotate-[-1deg] ">
                <div className="p-3 bg-white/20 rounded-2xl flex-shrink-0">
                   <Clock size={32} />
                </div>
                <p className="text-2xl font-black leading-tight uppercase italic tracking-tighter  text-balance">
                  Täitub umbes <span className="text-[var(--color-text-primary)] underline underline-offset-4 decoration-4">{monthsToCap} kuu</span> pärast
                </p>
              </div>
            ) : (
              <p className="text-lg font-bold italic opacity-40 text-center  text-balance text-[var(--color-bg-card)]">Sisestage palga summa, et näha prognoosi.</p>
            )}
          </div>
        </div>
      </div>

      {/* Info Notice & Global Exit */}
      <div className="space-y-12 ">
        <div className="p-8 bg-[var(--color-bg-button-alt)] rounded-[40px] border-2 border-[var(--color-border-subtle)] flex items-start gap-6 ">
          <div className="p-4 bg-[var(--color-bg-card)] rounded-2xl shadow-sm text-[var(--color-brand-gold)] flex-shrink-0">
            <Info size={28} />
          </div>
          <p className="text-lg md:text-xl font-bold text-[var(--color-text-secondary)] italic leading-relaxed text-balance ">
            {language === 'ET' 
              ? 'Vabanemisfondi kogutakse raha, et Teil oleks pärast vabanemist vahendid esmaseks toimetulekuks. See arvutus on indikatiivne ja põhineb üldistel reeglitel (70% säästmist, kui võlgu pole; 20% kui on võlad).' 
              : 'The release fund is collected to ensure you have funds for primary coping after release. This calculation is indicative and based on general rules (70% saving if no debts; 20% if debts exist).'}
          </p>
        </div>

        <div className="flex justify-center pb-20 ">
           <button 
             onClick={() => onNav('home')}
             className="px-16 py-6 bg-[var(--color-brand-blue)] text-white rounded-full font-black uppercase tracking-[0.2em] italic hover:opacity-90 hover:shadow-2xl active:scale-[0.98] transition-all  flex items-center justify-center gap-3"
           >
             <span className=" text-balance">Tagasi pealehele</span>
           </button>
        </div>
      </div>
    </motion.div>
  );
}

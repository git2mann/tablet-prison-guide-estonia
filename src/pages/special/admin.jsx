import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Clock, Flame } from 'lucide-react';
import { MiniAreaChart } from '../../components/ui/MiniAreaChart';
import { RadialGauge } from '../../components/ui/RadialGauge';
import { slideTransition, fadeIn } from '../../constants/animations';

export default function AdminPage({ onNav, language = 'ET' }) {
  const uiStrings = {
    subtitle: { ET: 'STABIILSUSE MOOTOR', EN: 'STABILITY ENGINE' }
  };

  return (
    <motion.div 
      {...fadeIn}
      transition={slideTransition}
      className="fixed inset-0 z-[1100] bg-[#f8f9fa] overflow-y-auto p-4 md:p-10 flex flex-col items-center pt-28"
    >
      <div className="w-full max-w-5xl space-y-8 pb-20">
        <div className="bg-white rounded-[40px] p-10 shadow-sm border-2 border-[#e9ecef] border-t-[16px] border-t-[#003B71]">
          <div className="flex items-center gap-8 mb-12 border-b border-slate-100 pb-10">
            <div className="p-6 bg-slate-50 rounded-[24px] text-[#003B71] shadow-inner">
              <BrainCircuit size={64} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-[#003B71] uppercase italic">Stabiilsuse Monitor</h2>
              <p className="text-sm sm:text-lg font-bold text-slate-400 uppercase tracking-widest mt-1 md:mt-2">{uiStrings.subtitle[language]}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-slate-50 rounded-[32px] p-6 md:p-8 space-y-8 shadow-inner">
                <div className="flex justify-between items-center">
                  <Clock size={24} className="text-slate-400"/>
                  <h3 className="font-black uppercase text-xs tracking-widest text-slate-400">Aktiivsus</h3>
                </div>
                <MiniAreaChart data={[12, 45, 67, 23, 89, 34]} color="#003B71" />
              </div>
              <div className="bg-slate-50 rounded-[32px] p-6 md:p-8 flex flex-col items-center justify-center shadow-inner text-center">
                <RadialGauge value={88} color="#FFD000"/>
                <p className="mt-4 font-black uppercase text-xs text-slate-400 tracking-widest">Sümmeetria</p>
              </div>
              <div className="bg-[#003B71] rounded-[32px] p-6 md:p-8 text-white flex flex-col items-center justify-center shadow-lg">
                <Flame size={48} className="animate-pulse text-[#FFD000]" />
                <p className="mt-4 font-black text-3xl md:text-5xl tracking-tighter">82%</p>
                <p className="font-black uppercase text-[10px] opacity-50 tracking-[0.2em] mt-2">Sotsiaalne soojus</p>
              </div>
          </div>
        </div>
        <button 
          onClick={() => onNav('home')} 
          className="w-full py-6 md:py-8 bg-[#003B71] text-white rounded-[24px] md:rounded-[32px] text-xl md:text-2xl font-black uppercase shadow-lg active:scale-[0.98] transition-all hover:bg-[#002b51] border-b-[8px] border-black/20"
        >
          SULGE MONITOR
        </button>
      </div>
    </motion.div>
  );
}

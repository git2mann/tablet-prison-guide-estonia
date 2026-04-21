import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, AlertCircle, ClipboardCheck, Clock, UserCheck, MessageSquare, HeartPulse, Info } from 'lucide-react';

const FLOW = {
  start: {
    question: {
      ET: 'Kas tegemist on erakorralise murega? (Tugev valu, verejooks, hingamisraskused)',
      EN: 'Is this an emergency? (Severe pain, bleeding, breathing difficulties)'
    },
    yes: 'emergency',
    no: 'mental'
  },
  emergency: {
    type: 'result',
    style: 'danger',
    title: { ET: 'ERAKORRALINE ABI', EN: 'EMERGENCY ACTION' },
    text: { 
      ET: 'Pöörduge KOHE lähima valvuri poole. Meditsiiniline abi on kättesaadav 24/7.', 
      EN: 'Contact the NEAREST guard IMMEDIATELY. Medical help is available 24/7.' 
    },
    icon: <AlertCircle className="text-red-500" size={40} />
  },
  mental: {
    question: {
      ET: 'Kas mure on seotud vaimse tervise, ärevuse või unetusega?',
      EN: 'Is your concern related to mental health, anxiety, or insomnia?'
    },
    yes: 'mental_result',
    no: 'dental'
  },
  mental_result: {
    type: 'result',
    style: 'info',
    title: { ET: 'VAIMNE TERVIS', EN: 'MENTAL HEALTH' },
    text: { 
      ET: 'Teavitage oma kontaktisikut või täitke avaldus psühholoogi vastuvõtule saamiseks. Võite pöörduda ka kaplani poole.', 
      EN: 'Inform your contact person or fill out an application to see a psychologist. You can also approach the chaplain.' 
    },
    icon: <HeartPulse className="text-blue-500" size={40} />
  },
  dental: {
    question: {
      ET: 'Kas mure on seotud hammaste või igemetega?',
      EN: 'Is your concern related to teeth or gums?'
    },
    yes: 'dental_result',
    no: 'routine'
  },
  dental_result: {
    type: 'result',
    style: 'warning',
    title: { ET: 'HAMBARAVI', EN: 'DENTAL CARE' },
    text: { 
      ET: 'Hambavalu leevendamine on tasuta. Täitke avaldus. Muud protseduurid on järjekorra alusel.', 
      EN: 'Pain relief is free. Fill out an application. Other procedures are subject to a waiting list.' 
    },
    icon: <UserCheck className="text-amber-500" size={40} />
  },
  routine: {
    type: 'result',
    style: 'standard',
    title: { ET: 'TAVAPÄRANE VASTUVÕTT', EN: 'ROUTINE VISIT' },
    text: { 
      ET: 'Täitke avaldus tahvlis või paberil. Teid vaatab esmalt üle üksuse pereõde (tööpäevadel).', 
      EN: 'Fill out an application on the tablet or paper. You will be reviewed first by the unit nurse (on weekdays).' 
    },
    icon: <ClipboardCheck className="text-[#003B71]" size={40} />
  }
};

export default function SymptomChecker({ language = 'ET' }) {
  const [currentNode, setCurrentNode] = useState('start');
  const [history, setHistory] = useState([]);

  const node = FLOW[currentNode];
  const isResult = node.type === 'result';

  const handleAnswer = (choice) => {
    setHistory([...history, currentNode]);
    setCurrentNode(node[choice]);
  };

  const goBack = () => {
    const newHistory = [...history];
    const prev = newHistory.pop();
    setHistory(newHistory);
    setCurrentNode(prev || 'start');
  };

  const reset = () => {
    setCurrentNode('start');
    setHistory([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-[40px] md:rounded-[60px] border-2 border-slate-100 shadow-2xl overflow-hidden relative">
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-slate-50">
          <motion.div 
            className="h-full bg-[#FFD000]"
            initial={{ width: '0%' }}
            animate={{ width: isResult ? '100%' : `${(history.length / 3) * 100}%` }}
          />
        </div>

        <div className="p-8 md:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              {!isResult ? (
                <>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <MessageSquare size={24} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-300 italic">Küsimus {history.length + 1}</span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-[#003B71] tracking-tighter uppercase italic leading-[1.1]">
                    {node.question[language]}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <button
                      onClick={() => handleAnswer('yes')}
                      className="group flex items-center justify-between p-8 bg-[#003B71] hover:bg-blue-800 rounded-[32px] transition-all shadow-xl active:scale-[0.98]"
                    >
                      <span className="text-2xl font-black text-white uppercase italic">JAH</span>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
                        <ChevronRight size={24} />
                      </div>
                    </button>
                    <button
                      onClick={() => handleAnswer('no')}
                      className="group flex items-center justify-between p-8 bg-slate-50 hover:bg-slate-100 rounded-[32px] border-2 border-slate-100 transition-all active:scale-[0.98]"
                    >
                      <span className="text-2xl font-black text-slate-400 uppercase italic">EI</span>
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 group-hover:translate-x-2 transition-transform">
                        <ChevronRight size={24} />
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-8">
                  <div className={`inline-flex items-center gap-4 px-6 py-3 rounded-full border-2 ${
                    node.style === 'danger' ? 'bg-red-50 border-red-100 text-red-600' :
                    node.style === 'warning' ? 'bg-amber-50 border-amber-100 text-amber-600' :
                    'bg-blue-50 border-blue-100 text-blue-600'
                  }`}>
                    {node.icon}
                    <span className="font-black uppercase tracking-widest text-sm">{node.title[language]}</span>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-black text-[#003B71] tracking-tighter uppercase italic leading-none">
                      Teie tegevusplaan
                    </h3>
                    <p className="text-2xl md:text-3xl font-bold text-slate-600 leading-relaxed text-balance">
                      {node.text[language]}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={reset}
                      className="px-10 py-5 bg-[#FFD000] text-[#003B71] rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-xl transition-all active:scale-[0.95]"
                    >
                      Alusta uuesti
                    </button>
                    <div className="flex items-center gap-3 px-6 text-slate-400 italic font-bold">
                       <Clock size={18} />
                       Abi kättesaadavus sõltub mure kriitilisusest
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {history.length > 0 && !isResult && (
          <button 
            onClick={goBack}
            className="absolute bottom-8 left-8 text-slate-300 hover:text-slate-500 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-colors"
          >
            <ChevronRight size={14} className="rotate-180" /> Tagasi
          </button>
        )}
      </div>

      <div className="mt-8 flex items-start gap-4 px-8">
        <Info className="text-[#FFD000] shrink-0" size={20} />
        <p className="text-xs font-bold text-slate-400 italic leading-relaxed">
          {language === 'ET' 
            ? 'See juhis põhineb vangla sisekorraeeskirjadel. See ei asenda meditsiinilist diagnoosi, vaid selgitab, kuidas abi küsida.' 
            : 'This guide is based on prison internal rules. It does not replace medical diagnosis; it explains how to request help.'}
        </p>
      </div>
    </div>
  );
}

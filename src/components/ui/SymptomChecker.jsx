import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, AlertCircle, ClipboardCheck, Clock, UserCheck, MessageSquare, HeartPulse, Info, RefreshCcw } from 'lucide-react';

const FLOW = {
  start: {
    question: {
      ET: 'Kas tegemist on erakorralise murega? (Tugev valu, verejooks, hingamisraskused, teadvusekaotus)',
      EN: 'Is this an emergency? (Severe pain, bleeding, breathing difficulties, loss of consciousness)'
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

  const labels = {
    title: { ET: "Arstiabi teejuht", EN: "Medical Assistant" },
    desc: { ET: "Vasta küsimustele, et leida sobivaim lahendus.", EN: "Answer the questions to find the best solution." },
    yes: { ET: "JAH", EN: "YES" },
    no: { ET: "EI", EN: "NO" },
    back: { ET: "Tagasi", EN: "Back" },
    reset: { ET: "Alusta uuesti", EN: "Start Over" },
    plan: { ET: "Teie tegevusplaan", EN: "Your Action Plan" },
    availability: { ET: "Abi kättesaadavus sõltub mure kriitilisusest", EN: "Availability of help depends on the criticality of the concern" },
    disclaimer: { 
      ET: 'See juhis põhineb vangla sisekorraeeskirjadel. See ei asenda meditsiinilist diagnoosi, vaid selgitab, kuidas abi küsida.', 
      EN: 'This guide is based on prison internal rules. It does not replace medical diagnosis; it explains how to request help.' 
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] rounded-[40px] md:rounded-[60px] shadow-2xl overflow-hidden relative">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--color-bg-elevated)]">
          <motion.div
            className="h-full bg-[var(--color-brand-gold)]"
            initial={{ width: '0%' }}
            animate={{ width: isResult ? '100%' : `${(history.length / 3) * 100}%` }}
          />
        </div>

        <div className="p-8 md:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              {!isResult ? (
                <>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 [.dark-mode_&]:bg-[var(--color-bg-elevated)] flex items-center justify-center text-blue-600 [.dark-mode_&]:text-[var(--color-brand-gold)]">
                      <MessageSquare size={24} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-[0.3em] italic text-[var(--color-text-dim)]">
                      {language === 'ET' ? 'Küsimus' : 'Question'} {history.length + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-[1.1] text-[var(--color-text-primary)]">
                    {node.question[language]}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <button
                      onClick={() => handleAnswer('yes')}
                      className="group flex items-center justify-between p-8 bg-[var(--color-brand-blue)] hover:opacity-90 rounded-[32px] transition-all shadow-xl active:scale-[0.98]"
                    >
                      <span className="text-2xl font-black text-white [.dark-mode_&]:text-[var(--color-brand-gold)] uppercase italic">{labels.yes[language]}</span>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white [.dark-mode_&]:text-[var(--color-brand-gold)] group-hover:translate-x-2 transition-transform">
                        <ChevronRight size={24} />
                      </div>
                    </button>
                    <button
                      onClick={() => handleAnswer('no')}
                      className="group flex items-center justify-between p-8 bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-button-alt)] rounded-[32px] border-2 border-[var(--color-border-subtle)] transition-all active:scale-[0.98]"
                    >
                      <span className="text-2xl font-black uppercase italic text-[var(--color-text-secondary)]">{labels.no[language]}</span>
                      <div className="w-10 h-10 rounded-full bg-[var(--color-bg-button-alt)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:translate-x-2 transition-transform">
                        <ChevronRight size={24} />
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-8">
                  <div className={`inline-flex items-center gap-4 px-6 py-3 rounded-full border-2 ${
                    node.style === 'danger' ? 'bg-red-50 [.dark-mode_&]:bg-red-500/10 border-red-100 [.dark-mode_&]:border-red-500/30 text-red-600 [.dark-mode_&]:text-red-300' :
                    node.style === 'warning' ? 'bg-amber-50 [.dark-mode_&]:bg-amber-500/10 border-amber-100 [.dark-mode_&]:border-amber-500/30 text-amber-600 [.dark-mode_&]:text-amber-300' :
                    'bg-blue-50 [.dark-mode_&]:bg-[var(--color-bg-elevated)] border-blue-100 [.dark-mode_&]:border-[var(--color-border-subtle)] text-blue-600 [.dark-mode_&]:text-[var(--color-brand-gold)]'
                  }`}>
                    {node.icon}
                    <span className="font-black uppercase tracking-widest text-sm">{node.title[language]}</span>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-[var(--color-text-primary)]">
                      {labels.plan[language]}
                    </h3>
                    <p className="text-2xl md:text-3xl font-bold leading-relaxed text-balance text-[var(--color-text-body)]">
                      {node.text[language]}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={reset}
                      className="px-10 py-5 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] [.dark-mode_&]:text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-xl transition-all active:scale-[0.95] flex items-center gap-2"
                    >
                      <RefreshCcw size={18} />
                      {labels.reset[language]}
                    </button>
                    <div className="flex items-center gap-3 px-6 italic font-bold text-[var(--color-text-dim)]">
                       <Clock size={18} />
                       {labels.availability[language]}
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
            className="absolute bottom-8 left-8 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-colors text-[var(--color-text-dim)] hover:text-[var(--color-text-secondary)]"
          >
            <ChevronRight size={14} className="rotate-180" /> {labels.back[language]}
          </button>
        )}
      </div>

      <div className="mt-8 flex items-start gap-4 px-8">
        <Info className="text-[var(--color-brand-gold)] shrink-0" size={20} />
        <p className="text-xs font-bold italic leading-relaxed text-[var(--color-text-dim)]">
          {labels.disclaimer[language]}
        </p>
      </div>
    </div>
  );
}

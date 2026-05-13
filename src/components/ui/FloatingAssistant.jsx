import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, X, ChevronDown, ArrowRight, Maximize2, Minimize2 } from 'lucide-react';
import { searchHandbook } from '../../utils/handbookSearch';

const CHAPTER_HEADINGS = {
  'arrival.search':      { ET: '1. Saabumine ja vastuvõtt vanglasse', EN: '1. Arrival & Reception' },
  'arrival.health':      { ET: '1. Saabumine ja vastuvõtt vanglasse', EN: '1. Arrival & Reception' },
  'arrival.needs':       { ET: '1. Saabumine ja vastuvõtt vanglasse', EN: '1. Arrival & Reception' },
  'daily.schedule':      { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.account':       { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.phone':         { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.eating':        { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.eshop':         { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.living':        { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.hygiene':       { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.laundry':       { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.meetings':      { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.letters':       { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.movement':      { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'daily.leisure':       { ET: '2. Vangla igapäevaelu',               EN: '2. Daily Life' },
  'rules.process':       { ET: '3. Reeglid ja distsipliin',           EN: '3. Rules & Discipline' },
  'rules.punishments':   { ET: '3. Reeglid ja distsipliin',           EN: '3. Rules & Discipline' },
  'rules.solitary':      { ET: '3. Reeglid ja distsipliin',           EN: '3. Rules & Discipline' },
  'health.services':     { ET: '4. Tervis',                           EN: '4. Health' },
  'health.doctor':       { ET: '4. Tervis',                           EN: '4. Health' },
  'health.meds':         { ET: '4. Tervis',                           EN: '4. Health' },
  'health.psych':        { ET: '4. Tervis',                           EN: '4. Health' },
  'health.chaplain':     { ET: '4. Tervis',                           EN: '4. Health' },
  'activities.risk':     { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'activities.programs': { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'activities.learn':    { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'activities.work':     { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'release.open':        { ET: '6. Avavangla ja TEV',                 EN: '6. Open Prison & Release' },
  'release.etev':        { ET: '6. Avavangla ja TEV',                 EN: '6. Open Prison & Release' },
  'release.tev':         { ET: '6. Avavangla ja TEV',                 EN: '6. Open Prison & Release' },
  'staff.roles':         { ET: '8. KES-ON-KES — Vangla töötajad ja nende ülesanded', EN: '8. WHO\'S WHO — Prison Staff and Their Roles' },
};

export default function FloatingAssistant({ language = 'ET', onNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  const ui = {
    title:        { ET: 'Käsiraamatu abiline', EN: 'Handbook Assistant' },
    placeholder:  { ET: 'Küsi käsiraamatust...', EN: 'Ask the handbook...' },
    greeting:     {
      ET: 'Tere! Olen sinu vangla käsiraamatu abiline. Võid küsida minult kõike vanglaelu kohta – helistamine, toit, arstiabi, töötamine ja palju muud. Olen siin, et aidata.',
      EN: 'Hi, I\'m your prison handbook assistant. You can ask me anything about prison life - phone calls, food, medical care, work, and more. I\'m here to help.'
    },
    noResult:     { ET: 'Teemat ei leitud. Proovi teise sõnaga.', EN: 'Topic not found. Try different words.' },
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'bot', text: ui.greeting[language], results: [] }]);
    }
  }, [language]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen, isMinimized]);

  function handleSend() {
    const q = input.trim();
    if (!q) return;
    setInput('');

    const results = searchHandbook(q, language, 2);
    const botText = results.length > 0
      ? results[0].snippet
      : ui.noResult[language];

    const suggestion = results.find(r => r.suggestion)?.suggestion;

    setMessages(prev => [
      ...prev,
      { role: 'user', text: q },
      { role: 'bot', text: botText, results, suggestion },
    ]);
  }

  function handleSuggestion(s) {
    setInput(s);
    // Use a timeout to ensure state update before sending
    setTimeout(() => {
      const results = searchHandbook(s, language, 2);
      const botText = results.length > 0
        ? results[0].snippet
        : ui.noResult[language];
      
      setMessages(prev => [
        ...prev,
        { role: 'user', text: s },
        { role: 'bot', text: botText, results },
      ]);
      setInput('');
    }, 10);
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[2000] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? '64px' : '500px',
              width: isMinimized ? '300px' : '380px'
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[var(--color-bg-surface)] rounded-[2rem] shadow-2xl border-2 border-[var(--color-brand-blue)] overflow-hidden mb-4 flex flex-col transition-all duration-300 ease-in-out"
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between bg-[var(--color-brand-blue)] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[var(--color-brand-gold)] flex items-center justify-center">
                  <Bot size={18} className="text-[var(--color-brand-blue)]" />
                </div>
                <p className="text-xs font-black uppercase tracking-wider text-white">
                  {ui.title[language]}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div ref={messagesRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 custom-scrollbar bg-[var(--color-bg-page)]">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.role === 'bot' && (
                        <div className="w-6 h-6 rounded-lg bg-[var(--color-brand-blue)] flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot size={12} className="text-white" />
                        </div>
                      )}
                      <div className={`max-w-[85%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} space-y-1`}>
                        <div className={`px-3 py-2.5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[var(--color-brand-blue)] text-white rounded-br-sm'
                            : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-body)] rounded-bl-sm border border-[var(--color-border-subtle)]'
                        }`}>
                          {msg.results?.length > 0 && (() => {
                            const r = msg.results[0];
                            const sectionTitle = language === 'ET' ? r.titleET : r.titleEN;
                            const chapterHeading = CHAPTER_HEADINGS[r.id]?.[language] ?? sectionTitle;
                            const showSection = sectionTitle !== chapterHeading;
                            return (
                              <span className="block mb-1.5">
                                <span className="block font-black text-[10px] uppercase tracking-wider leading-tight text-[var(--color-brand-blue)]">
                                  {chapterHeading}
                                </span>
                                {showSection && (
                                  <span className="block font-black text-[9px] uppercase tracking-wider text-[var(--color-brand-gold)]">
                                    {sectionTitle}
                                  </span>
                                )}
                              </span>
                            );
                          })()}
                          {msg.text}
                          {msg.role === 'bot' && msg.text?.endsWith('…') && msg.results?.length > 0 && (
                            <button
                              onClick={() => {
                                onNav(msg.results[0].id);
                                setIsMinimized(true);
                              }}
                              className="ml-1 text-[var(--color-brand-gold)] font-bold hover:underline"
                            >
                              {language === 'ET' ? 'Loe edasi' : 'Read more'}
                            </button>
                          )}
                          {msg.suggestion && (
                            <div className="mt-2 pt-2 border-t border-[var(--color-border-subtle)] text-[11px] italic">
                              {language === 'ET' ? 'Kas mõtlesid: ' : 'Did you mean: '}
                              <button 
                                onClick={() => handleSuggestion(msg.suggestion)}
                                className="font-black text-[var(--color-brand-gold)] hover:underline"
                              >
                                {msg.suggestion}
                              </button>
                              ?
                            </div>
                          )}
                        </div>
                        {msg.role === 'bot' && msg.results?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {msg.results.map(r => (
                              <button
                                key={r.id}
                                onClick={() => {
                                  onNav(r.id);
                                  setIsMinimized(true);
                                }}
                                className="flex items-center gap-1 px-2 py-1 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] rounded-lg text-[9px] font-black uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all"
                              >
                                {language === 'ET' ? r.titleET : r.titleEN}
                                <ArrowRight size={8} strokeWidth={3} />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="px-4 py-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder={ui.placeholder[language]}
                    className="flex-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-xl py-2 px-3 text-xs font-medium text-[var(--color-text-body)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-brand-gold)] outline-none transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="w-8 h-8 bg-[var(--color-brand-blue)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:text-black transition-all disabled:opacity-30 flex-shrink-0"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen && !isMinimized 
            ? 'bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)]' 
            : 'bg-[var(--color-brand-blue)] text-white'
        }`}
      >
        {isOpen && !isMinimized ? (
          <ChevronDown size={28} />
        ) : (
          <Bot size={28} />
        )}
      </motion.button>
    </div>
  );
}

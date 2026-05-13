import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, Bot, User, X } from 'lucide-react';
import { searchHandbook } from '../utils/handbookSearch';

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
  'act.risk':           { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'act.programs':       { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'act.learn':          { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'act.work':           { ET: '5. Minu tegevused vanglas',           EN: '5. Activities in Prison' },
  'rel.open':           { ET: '6. Avavangla ja TEV',                 EN: '6. Open Prison & Release' },
  'rel.etev':           { ET: '6. Avavangla ja TEV',                 EN: '6. Open Prison & Release' },
  'rel.tev':            { ET: '6. Avavangla ja TEV',                 EN: '6. Open Prison & Release' },
  'prep.steps':         { ET: '7. Vabanemine',                       EN: '7. Release' },
  'staff.roles':        { ET: '8. KES-ON-KES — Vangla töötajad ja nende ülesanded', EN: '8. WHO\'S WHO — Prison Staff and Their Roles' },
  'journey.overview':   { ET: '9. Kinnipeetava teekond',             EN: '9. Inmate Journey' },
};

const STRINGS = {
  title:       { ET: 'Käsiraamatu abiline', EN: 'Handbook Assistant' },
  open:        { ET: 'Abiline',             EN: 'Assistant' },
  close:       { ET: 'Sulge',               EN: 'Close' },
  placeholder: { ET: 'Küsi käsiraamatust...', EN: 'Ask the handbook...' },
  greeting:    {
    ET: 'Tere! Olen sinu vangla käsiraamatu abiline. Võid küsida minult kõike vanglaelu kohta – helistamine, toit, arstiabi, töötamine ja palju muud. Olen siin, et aidata.',
    EN: 'Hi, I\'m your prison handbook assistant. You can ask me anything about prison life - phone calls, food, medical care, work, and more. I\'m here to help.',
  },
  noResult:    { ET: 'Teemat ei leitud. Proovi teise sõnaga.', EN: 'Topic not found. Try different words.' },
};

export default function FloatingAssistant({ language = 'ET', onNav }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setMessages([{ role: 'bot', text: STRINGS.greeting[language], results: [] }]);
  }, [language]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (chatOpen) setTimeout(() => inputRef.current?.focus(), 250);
  }, [chatOpen]);

  function handleSend() {
    const q = input.trim();
    if (!q) return;
    setInput('');
    setChatOpen(true);

    const results = searchHandbook(q, language, 2);
    const botText = results.length > 0 ? results[0].snippet : STRINGS.noResult[language];

    setMessages(prev => [
      ...prev,
      { role: 'user', text: q },
      { role: 'bot', text: botText, results },
    ]);
  }

  function handleNav(id) {
    setChatOpen(false);
    onNav?.(id);
  }

  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 z-[1100] flex flex-col items-end gap-3 pointer-events-none">
      {/* Expanded chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="pointer-events-auto w-[92vw] max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--color-brand-blue)] bg-white [.dark-mode_&]:bg-[#16223a] origin-bottom-right"
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between bg-[var(--color-brand-blue)]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFD000] flex items-center justify-center flex-shrink-0">
                  <Bot size={18} className="text-[var(--color-brand-blue)]" />
                </div>
                <p className="text-xs font-black uppercase tracking-wider leading-tight" style={{ color: '#ffffff' }}>
                  {STRINGS.title[language]}
                </p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                aria-label={STRINGS.close[language]}
                className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white flex items-center justify-center transition-all"
              >
                <X size={14} strokeWidth={3} />
              </button>
            </div>

            {/* Messages */}
            <div ref={messagesRef} className="px-4 py-4 space-y-4 max-h-[55vh] md:max-h-80 overflow-y-auto">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-xl bg-[var(--color-brand-blue)] [.dark-mode_&]:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} className="text-white [.dark-mode_&]:text-[var(--color-brand-blue)]" />
                    </div>
                  )}
                  <div className={`max-w-[80%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} space-y-2`}>
                    <div className={`px-3.5 py-2.5 rounded-2xl text-sm font-medium leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[var(--color-brand-blue)] text-white rounded-br-sm'
                        : 'bg-[#f1f5f9] text-[#1e293b] [.dark-mode_&]:bg-[#1f2c48] [.dark-mode_&]:text-[#e7ecf6] rounded-bl-sm'
                    }`}>
                      {msg.results?.length > 0 && (() => {
                        const r = msg.results[0];
                        const sectionTitle = language === 'ET' ? r.titleET : r.titleEN;
                        const chapterHeading = CHAPTER_HEADINGS[r.id]?.[language] ?? sectionTitle;
                        const showSection = sectionTitle !== chapterHeading;
                        return (
                          <span className="block mb-2 space-y-0.5">
                            <span className="block font-black text-sm uppercase tracking-wider leading-tight text-[var(--color-brand-blue)] [.dark-mode_&]:text-[#7eb0e8]">
                              {chapterHeading}
                            </span>
                            {showSection && (
                              <span className="block font-black text-[11px] uppercase tracking-wider text-[#FFD000]">
                                {sectionTitle}
                              </span>
                            )}
                          </span>
                        );
                      })()}
                      {msg.text}
                      {msg.role === 'bot' && msg.text?.endsWith('…') && msg.results?.length > 0 && (
                        <button
                          onClick={() => handleNav(msg.results[0].id)}
                          className="ml-1 text-[#FFD000] font-medium hover:underline"
                        >
                          {language === 'ET' ? 'Loe edasi' : 'Read more'}
                        </button>
                      )}
                    </div>
                    {msg.role === 'bot' && msg.results?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {msg.results.map(r => (
                          <button
                            key={r.id}
                            onClick={() => handleNav(r.id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFD000] text-[var(--color-brand-blue)] rounded-lg text-[10px] font-black uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all"
                          >
                            {language === 'ET' ? r.titleET : r.titleEN}
                            <ArrowRight size={10} strokeWidth={3} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-[#f1f5f9] [.dark-mode_&]:bg-[#1f2c48] flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={14} className="text-[#94a3b8] [.dark-mode_&]:text-[#6b7a95]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#e2e8f0] [.dark-mode_&]:border-[#283452] flex items-center gap-2.5 bg-white [.dark-mode_&]:bg-[#16223a]">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder={STRINGS.placeholder[language]}
                className="flex-1 bg-[#f1f5f9] [.dark-mode_&]:bg-[#0d1626] border border-[#e2e8f0] [.dark-mode_&]:border-[#283452] rounded-xl py-2.5 px-3.5 text-sm font-medium text-[#1e293b] [.dark-mode_&]:text-[#e7ecf6] placeholder:text-[#94a3b8] [.dark-mode_&]:placeholder:text-[#6b7a95] focus:border-[#FFD000] outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 bg-[var(--color-brand-blue)] rounded-xl flex items-center justify-center text-white hover:bg-[#FFD000] hover:text-black transition-all disabled:opacity-30 flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact toggle button (always visible) — brand chrome hardcoded
          so the assistant identity stays consistent across light and dark modes */}
      <motion.button
        onClick={() => setChatOpen(o => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 500, damping: 22 }}
        aria-label={STRINGS.title[language]}
        className="pointer-events-auto relative flex items-center gap-2 pl-1.5 pr-3 py-1.5 md:pl-2 md:pr-4 md:py-2 rounded-full bg-[var(--color-brand-blue)] shadow-xl border-2 border-[#FFD000] hover:shadow-2xl transition-shadow"
      >
        <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#FFD000] flex items-center justify-center flex-shrink-0">
          <Bot size={16} className="text-[var(--color-brand-blue)] md:w-[18px] md:h-[18px]" />
        </span>
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap">
          {chatOpen ? STRINGS.close[language] : STRINGS.open[language]}
        </span>
        {/* Cute pulse dot when closed to draw attention */}
        {!chatOpen && (
          <motion.span
            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#FFD000] border-2 border-[var(--color-brand-blue)]"
            animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.button>
    </div>
  );
}

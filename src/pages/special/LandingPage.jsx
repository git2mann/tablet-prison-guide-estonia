import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useCategories } from '../../constants/categories';
import { appleSpring } from '../../constants/animations';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function LandingPage({ onNav, language = 'ET' }) {
  const categories = useCategories();

  const nodes = useMemo(() => {
    // Spaced out perimeter coordinates to clear the center for text
    const coords = [
      { x: 12, y: 15, size: 110 }, // 1. Arrival (Top Left)
      { x: 50, y: 10, size: 150 }, // 2. Daily (Top Center)
      { x: 88, y: 15, size: 130 }, // 3. Rules (Top Right)
      { x: 92, y: 45, size: 140 }, // 4. Health (Right Center)
      { x: 88, y: 80, size: 170 }, // 5. Activities (Bottom Right)
      { x: 65, y: 92, size: 130 }, // 6. Release Prep (Bottom)
      { x: 35, y: 92, size: 150 }, // 7. Final Release (Bottom)
      { x: 8,  y: 80, size: 120 }, // 8. Staff (Bottom Left)
      { x: 12, y: 45, size: 110 }, // 9. Journey (Left Center)
    ];

    return categories.map((cat, i) => ({
      ...cat,
      ...coords[i]
    }));
  }, [categories]);

  const uiStrings = {
    title: { ET: 'Minu sammud vabanemiseni', EN: 'My Steps to Release' },
    subtitle: { ET: 'VANGI KÄSIRAAMAT', EN: 'INMATE HANDBOOK' },
    desc: { 
      ET: 'Siit leiad lühidalt ja konkreetselt kõik, mis aitab Sul korraldada oma igapäevaelu – alates tervishoiust ja suhtlusvõimalustest kuni töö ja õppimiseni.',
      EN: 'Here you will find concise information to help organize your daily life – from healthcare and communication to work and studies.'
    },
    cta: { ET: 'Alusta lugemist', EN: 'Start Reading' }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-[500] bg-[var(--color-bg-page)] overflow-hidden flex flex-col items-center justify-center p-6"
    >
      {/* Background Decorative SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ filter: 'blur(1px)' }}>
        {nodes.map((node, i) => {
          if (i === nodes.length - 1) return null;
          const next = nodes[i + 1];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`} y1={`${node.y}%`}
              x2={`${next.x}%`} y2={`${next.y}%`}
              stroke="var(--color-brand-blue)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          );
        })}
        {/* Connect last back to center or first if needed, but here we follow 1-9 path */}
      </svg>

      {/* Constellation Nodes (Interactive Perimeter) */}
      <div className="absolute inset-0">
        {nodes.map((node, i) => (
          <motion.button
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...appleSpring, delay: i * 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNav(`category.${node.id}`)}
            className="absolute flex flex-col items-center justify-center text-center p-4 rounded-full bg-[var(--color-bg-card)] border-2 border-[var(--color-border-subtle)] shadow-xl hover:border-[var(--color-brand-gold)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-colors group"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-gold)] transition-colors mb-1 md:mb-2">
              {React.cloneElement(node.icon, { size: node.size * 0.25 })}
            </div>
            <span className="text-[9px] md:text-xs font-black uppercase tracking-tighter italic leading-tight text-[var(--color-text-primary)] px-2">
              {node.title[language]}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Central Content Overlay: Now perfectly clear of all nodes */}
      <div className="relative z-10 max-w-2xl text-center space-y-8 pointer-events-none pt-20 md:pt-32">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-4 px-4"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--color-brand-blue)] text-[var(--color-brand-gold)] rounded-full shadow-lg">
             <Sparkles size={16} fill="currentColor" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">{uiStrings.subtitle[language]}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-[var(--color-brand-blue)] tracking-tighter uppercase italic leading-[0.85] drop-shadow-sm">
            {uiStrings.title[language].split(' ').map((w, i) => (
              <span key={i} className={i === 1 ? 'text-[var(--color-brand-gold)]' : ''}>{w} </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-slate-500 leading-relaxed text-balance px-4 md:px-12">
            {uiStrings.desc[language]}
          </p>
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={() => onNav('home')}
          className="pointer-events-auto px-12 py-6 bg-[var(--color-brand-blue)] text-white rounded-full font-black uppercase tracking-[0.2em] italic hover:bg-blue-800 hover:shadow-2xl active:scale-95 transition-all shadow-xl flex items-center gap-4 mx-auto"
        >
          {uiStrings.cta[language]}
          <ArrowRight size={20} strokeWidth={3} />
        </motion.button>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center gap-3 opacity-20 hidden md:flex">
         <BookOpen size={24} />
         <span className="font-black text-xs uppercase tracking-widest italic">Project Samm</span>
      </div>
    </motion.div>
  );
}

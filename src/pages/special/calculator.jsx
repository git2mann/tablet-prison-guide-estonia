import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Info, Landmark, X, ArrowDown, Check } from 'lucide-react';
import { staggerContainer } from "../../constants/animations";

export default function FundCalculator({ language = 'ET', onNav }) {
  const [amount, setAmount] = useState(0);
  const [hasDebt, setHasDebt] = useState(false);

  // Per the handbook: max release fund = 3 × Estonian minimum wage.
  // 2025 minimum wage figure used here.
  const MIN_WAGE = 886;
  const CAP = MIN_WAGE * 3;

  // Handbook splits from "Isikuarve / Personal Account":
  //   No claims   → 70% fund + 30% your use
  //   With claims → 50% debts + 20% fund + 30% your use
  const splits = hasDebt
    ? [
        { key: 'debt', pct: 50, color: '#9EC3D4' },
        { key: 'fund', pct: 20, color: '#A3A3A3' },
        { key: 'use',  pct: 30, color: '#0F5B8D' },
      ]
    : [
        { key: 'fund', pct: 70, color: '#A3A3A3' },
        { key: 'use',  pct: 30, color: '#0F5B8D' },
      ];

  const ui = {
    sectionLabel:   { ET: 'Rahaline planeerimine',          EN: 'Financial planning' },
    titleLine1:     { ET: 'Vabanemis',                      EN: 'Release' },
    titleLine2:     { ET: 'fondi arvutus',                  EN: 'fund calculator' },
    close:          { ET: 'Sule ja välju',                  EN: 'Close and exit' },
    amountLabel:    { ET: 'Saadud summa (€)',               EN: 'Amount received (€)' },
    amountHint:     { ET: 'Näiteks Sinu palk või lähedaste saadetud raha', EN: 'For example your salary or money sent by family' },
    debtLabelMain:  { ET: 'Märgi, kui Sul on võlad',        EN: 'Check if you have debts' },
    debtAffect:     { ET: '50% Sinu rahast läheb võlgade tasumiseks', EN: '50% of your money goes to debt repayment' },
    fundLabel:      { ET: 'Vabanemisfondi',                 EN: 'Release fund' },
    debtLabel:      { ET: 'Võlgade tasumiseks',             EN: 'Debt repayment' },
    useLabel:       { ET: 'Sinu kasutuseks',                EN: 'Your personal use' },
    capPrefix:      { ET: 'Vabanemisfondi maksimummäär on', EN: 'The release fund cap is' },
    capExplain:     { ET: '(3× Eesti miinimumpalk)',        EN: '(3× Estonian minimum wage)' },
    infoTitle:      { ET: 'Kuidas see kalkulaator töötab?',  EN: 'How does this calculator work?' },
    infoNote: {
      ET: 'Vabanemisfond aitab Sul katta esimesi vabanemisjärgseid kulutusi, näiteks elukoha üürimist. Kui Sinu vastu ei ole nõudeid, läheb 70% isikuarvele laekuvast rahast vabanemisfondi ja 30% Sinu kasutusse. Kui on võlgu, läheb 50% võlgade tasumiseks, 20% vabanemisfondi ja 30% Sinu kasutusse. Sama jaotust kohaldatakse ka lähedaste saadetud rahale.',
      EN: 'The release fund helps you cover initial post-release expenses such as renting a home. If there are no claims against you, 70% of money credited to your personal account goes to the release fund and 30% stays for your use. With debts, 50% goes to debt repayment, 20% to the release fund, and 30% to your use. The same split applies to money sent by family.'
    },
    infoCta:        { ET: 'Sisesta summa allpool, et näha oma jaotust.', EN: 'Enter an amount below to see your split.' },
    backHome:       { ET: 'Tagasi pealehele',               EN: 'Back to home' }
  };

  const t = (key) => ui[key][language] ?? ui[key].EN;

  const labelFor = (key) => {
    if (key === 'fund') return t('fundLabel');
    if (key === 'debt') return t('debtLabel');
    return t('useLabel');
  };

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="w-full max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 space-y-12 md:space-y-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[var(--color-brand-gold)]">
            <div className="p-2 bg-[var(--color-brand-gold)]/10 rounded-lg flex-shrink-0">
              <Wallet size={20} />
            </div>
            <span className="font-black text-xs uppercase tracking-[0.4em] italic text-balance">
              {t('sectionLabel')}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase italic leading-[0.85] text-balance">
            {t('titleLine1')}<br />
            <span className="text-[var(--color-text-secondary)] opacity-30">{t('titleLine2')}</span>
          </h2>
        </div>

        <button
          onClick={() => onNav('home')}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-bg-button-alt)] hover:bg-[var(--color-brand-gold)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-sm w-fit"
        >
          <X size={18} strokeWidth={3} className="flex-shrink-0" />
          <span className="text-balance">{t('close')}</span>
        </button>
      </div>

      {/* Intro / explainer — first thing the user reads on the tablet */}
      <div className="p-7 md:p-9 bg-[var(--color-bg-card)] rounded-[40px] border-2 border-[var(--color-border-subtle)] shadow-sm flex flex-col md:flex-row items-start gap-6">
        <div className="p-4 bg-[var(--color-brand-gold)]/15 rounded-2xl text-[var(--color-brand-gold)] flex-shrink-0">
          <Info size={28} />
        </div>
        <div className="space-y-3 min-w-0">
          <h3 className="text-xl md:text-2xl font-black text-[var(--color-text-primary)] uppercase italic tracking-tighter leading-tight text-balance">
            {t('infoTitle')}
          </h3>
          <p className="text-base md:text-lg font-bold text-[var(--color-text-secondary)] italic leading-relaxed text-balance">
            {t('infoNote')}
          </p>
          <p className="text-xs md:text-sm font-black uppercase tracking-widest italic text-[var(--color-brand-gold)] pt-1">
            {t('infoCta')}
          </p>
        </div>
      </div>

      <div>
        {/* Single calculator card — inputs and live breakdown together */}
        <div className="bg-[var(--color-bg-card)] rounded-[40px] p-7 md:p-9 border-2 border-[var(--color-border-subtle)] shadow-xl space-y-7">
          <div className="space-y-3">
            <label className="block text-sm font-black uppercase text-[var(--color-text-primary)] opacity-50 tracking-widest italic text-balance">
              {t('amountLabel')}
            </label>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="0"
              className="w-full p-5 bg-[var(--color-bg-button-alt)] rounded-2xl border-2 border-transparent focus:border-[var(--color-brand-gold)] focus:bg-[var(--color-bg-card)] transition-all text-3xl font-black text-[var(--color-text-primary)] outline-none shadow-inner"
              value={amount || ''}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            />
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)] opacity-70 italic">
              {t('amountHint')}
            </span>
          </div>

          {/* Checkbox-style toggle — single static label, clear ON/OFF state */}
          <button
            type="button"
            role="checkbox"
            aria-checked={hasDebt}
            onClick={() => setHasDebt(!hasDebt)}
            className={`w-full p-5 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all group ${
              hasDebt
                ? 'bg-[var(--color-brand-blue)]/5 border-[var(--color-brand-blue)] shadow-lg'
                : 'bg-[var(--color-bg-button-alt)] border-[var(--color-border-subtle)] hover:border-[var(--color-brand-blue)]/40'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl transition-colors flex-shrink-0 ${
                hasDebt
                  ? 'bg-[var(--color-brand-blue)] text-white'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)]'
              }`}>
                <Landmark size={22} />
              </div>
              <div className="text-left">
                <span className={`block font-black uppercase italic tracking-tight text-base text-balance transition-colors ${
                  hasDebt ? 'text-[var(--color-brand-blue)]' : 'text-[var(--color-text-primary)] opacity-70'
                }`}>
                  {t('debtLabelMain')}
                </span>
                <span className="text-[10px] font-bold text-[var(--color-text-secondary)] opacity-60 uppercase tracking-widest italic text-balance">
                  {t('debtAffect')}
                </span>
              </div>
            </div>
            {/* Clear square checkbox with checkmark when active */}
            <div className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
              hasDebt
                ? 'bg-[var(--color-brand-blue)] border-[var(--color-brand-blue)] scale-105'
                : 'bg-transparent border-[var(--color-border-strong)] group-hover:border-[var(--color-brand-blue)]/50'
            }`}>
              {hasDebt && <Check size={20} strokeWidth={4} className="text-white" />}
            </div>
          </button>

          <div className="pt-4 border-t-2 border-dashed border-[var(--color-border-subtle)] [.dark-mode_&]:border-white/40 text-xs text-[var(--color-text-secondary)] italic leading-relaxed">
            {t('capPrefix')} <span className="font-black text-[var(--color-brand-blue)] [.dark-mode_&]:text-white not-italic">{CAP}€</span> {t('capExplain')}
          </div>

          {/* Live breakdown — appears inside the same card once the user types */}
          {amount > 0 && (
            <div className="space-y-3 pt-2">
              {splits.map((row, idx) => {
                const value = (amount * row.pct) / 100;
                return (
                  <React.Fragment key={row.key}>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      className="flex items-center justify-between gap-4 p-4 md:p-5 rounded-2xl shadow-md"
                      style={{ background: row.color }}
                    >
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="text-2xl md:text-3xl font-black tabular-nums italic tracking-tighter text-white">{row.pct}%</span>
                        <span className="text-xs md:text-sm font-black uppercase tracking-wider italic text-white/95 text-balance truncate">
                          {labelFor(row.key)}
                        </span>
                      </div>
                      <span className="text-xl md:text-2xl font-black tabular-nums tracking-tighter italic text-white whitespace-nowrap">
                        {value.toFixed(2)}€
                      </span>
                    </motion.div>
                    {idx < splits.length - 1 && (
                      <div className="flex justify-center text-[var(--color-text-dim)]">
                        <ArrowDown size={20} strokeWidth={3} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Back to home */}
      <div className="flex justify-center pb-12">
        <button
          onClick={() => onNav('home')}
          className="px-12 md:px-16 py-5 md:py-6 bg-[var(--color-brand-blue)] text-white rounded-full font-black uppercase tracking-[0.2em] italic hover:opacity-90 hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-3"
        >
          <span className="text-balance">{t('backHome')}</span>
        </button>
      </div>
    </motion.div>
  );
}

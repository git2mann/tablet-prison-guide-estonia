import React, { useState } from "react";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Accordion from "../../components/ui/Accordion";
import Keyword from "../../components/ui/keyword";

export default function CalcInfo({ language = 'ET' }) {
  const [amount, setAmount] = useState("");
  const [hasDebts, setHasDebts] = useState(true);
  const [fundFull, setFundFull] = useState(false);

  const val = parseFloat(amount) || 0;
  const debtPct = hasDebts ? 0.5 : 0;
  const releasePct = hasDebts ? 0.2 : 0.7;
  const releaseAmt = fundFull ? 0 : val * releasePct;
  const debtAmt = val * debtPct;
  const freeAmt = fundFull ? val - debtAmt : val * 0.3;
  
  const bars = [
    ...(hasDebts ? [{ label: language === 'ET' ? "Võlad" : "Debt repayment", amt: debtAmt, color: "bg-red-500", text: "text-red-500" }] : []),
    { label: language === 'ET' ? "Vabanemisfond" : "Release fund", amt: releaseAmt, color: "bg-blue-600", text: "text-blue-600" },
    { label: language === 'ET' ? "Vabalt kasutatav" : "Available to use", amt: freeAmt, color: "bg-green-600", text: "text-green-600" },
  ];

  const uiStrings = {
    title: { ET: 'Rahakalkulaator', EN: 'Money Calculator' },
    sub: { ET: 'Sissetulekute jaotus', EN: 'Income breakdown' },
    amount: { ET: 'Saadud summa (€)', EN: 'Amount received (€)' },
    debts: { ET: 'Mul on võlgnevusi', EN: 'I have outstanding debts' },
    fundFull: { ET: 'Vabanemisfond on täis', EN: 'Release fund already full' },
    breakdown: { ET: 'Jaotus', EN: 'Breakdown' },
  };

  return (
    <Section title={uiStrings.title[language]} sub={uiStrings.sub[language]}>
      <Card className="mb-8">
        <p className="text-xl font-bold text-slate-600 leading-relaxed">
          {language === 'ET' 
            ? 'Teie isikuarvele laekuv raha jagatakse automaatselt. Jaotus sõltub võlgnevustest ja sellest, kas vabanemisfond on täis.'
            : 'Money in your personal account is automatically divided. The split depends on debts and whether your release fund is full.'}
        </p>
      </Card>
      
      <Card className="mb-8 border-l-[16px] border-blue-600">
        <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 italic">Configure</div>
        <div className="space-y-8">
          <div>
            <label className="block text-xl font-black text-slate-400 uppercase tracking-widest mb-4">{uiStrings.amount[language]}</label>
            <input 
              type="number" 
              min="0" 
              step="0.01" 
              value={amount} 
              onChange={e => setAmount(e.target.value)} 
              placeholder="e.g. 12.00"
              className="w-full max-w-md p-6 rounded-[32px] border-4 border-slate-100 bg-slate-50 text-3xl font-black text-[#003B71] outline-none focus:border-blue-600 transition-all"
            />
          </div>
          <div className="flex flex-col gap-6">
            <label className="flex items-center gap-6 cursor-pointer group">
              <input type="checkbox" checked={hasDebts} onChange={e => setHasDebts(e.target.checked)} className="w-10 h-10 rounded-xl accent-blue-600"/>
              <span className="text-2xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{uiStrings.debts[language]}</span>
            </label>
            <label className="flex items-center gap-6 cursor-pointer group">
              <input type="checkbox" checked={fundFull} onChange={e => setFundFull(e.target.checked)} className="w-10 h-10 rounded-xl accent-blue-600"/>
              <span className="text-2xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{uiStrings.fundFull[language]}</span>
            </label>
          </div>
        </div>
      </Card>

      {val > 0 && (
        <Card className="mb-8 overflow-hidden">
          <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 italic">{uiStrings.breakdown[language]} — €{val.toFixed(2)}</div>
          <div className="h-20 w-full bg-slate-100 rounded-[30px] overflow-hidden flex shadow-inner mb-12">
            {bars.filter(b => b.amt > 0).map(b => (
              <div key={b.label} style={{ width: `${(b.amt / val) * 100}%` }} className={`${b.color} h-full flex items-center justify-center text-white text-xl font-black transition-all duration-500`}>
                {((b.amt / val) * 100).toFixed(0)}%
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bars.filter(b => b.amt > 0).map(b => (
              <div key={b.label} className={`p-8 rounded-[40px] bg-slate-50 border-2 border-slate-100 border-l-[16px] ${b.color.replace('bg-', 'border-')}`}>
                <div className={`text-4xl font-black mb-2 ${b.text}`}>€{b.amt.toFixed(2)}</div>
                <div className="text-sm font-black uppercase tracking-widest text-slate-400">{b.label}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Accordion title={language === 'ET' ? 'Kuidas jaotus toimib?' : 'How does the split work?'} open={val === 0}>
        <Table
          headers={["Situation","Debts","Release Fund","Available"]}
          rows={[
            ["No debts","—","70%","30%"],
            ["Has debts","50%","20%","30%"],
            ["Fund full, no debts","—","—","100%"],
            ["Fund full, has debts","50%","—","50%"],
          ]}
        />
      </Accordion>
    </Section>
  );
}

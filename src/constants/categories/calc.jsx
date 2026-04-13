import React from 'react';
import { FileText } from 'lucide-react';

export default {
  id: 'calc',
  title: { ET: 'Rahakalkulaator', EN: 'Money Calculator' },
  desc: { ET: 'Sissetulekute jaotus', EN: 'Income breakdown' },
  icon: <FileText className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  color: 'bg-slate-50 border-slate-100 text-slate-900',
  articles: [
    { id: 'calc.info', title: { ET: 'Kuidas jaotus toimib?', EN: 'How does it work?' } }
  ]
};

import React from 'react';
import { GraduationCap } from 'lucide-react';

export default {
  id: 'act',
  title: { ET: 'Tegevused', EN: 'Activities' },
  desc: { ET: 'Haridus ja töö', EN: 'Education & Work' },
  icon: <GraduationCap className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1454165833767-02302306d649?auto=format&fit=crop&w=800&q=80',
  color: 'bg-purple-50 border-purple-100 text-purple-900',
  articles: [
    { id: 'act.risk', title: { ET: 'Riskihindamine ja ITK', EN: 'Risk Assessment & ITK' } },
    { id: 'act.programs', title: { ET: 'Sotsiaalprogrammid', EN: 'Social Programs' } },
    { id: 'act.learn', title: { ET: 'Haridus', EN: 'Education' } },
    { id: 'act.work', title: { ET: 'Töötamine', EN: 'Working' } }
  ]
};

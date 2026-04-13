import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default {
  id: 'prep',
  title: { ET: 'Vabanemise ettevalmistus', EN: 'Preparation' },
  desc: { ET: 'Sammud vabadusse', EN: 'Steps to freedom' },
  icon: <ShieldCheck className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  color: 'bg-teal-50 border-teal-100 text-teal-900',
  articles: [
    { id: 'prep.steps', title: { ET: 'Olulised sammud', EN: 'Important Steps' } }
  ]
};

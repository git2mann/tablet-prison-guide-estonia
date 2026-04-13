import React from 'react';
import { Scale } from 'lucide-react';

export default {
  id: 'rules',
  title: { ET: 'Reeglid ja kord', EN: 'Rules & Discipline' },
  desc: { ET: 'Distsipliin ja õigused', EN: 'Discipline & Rights' },
  icon: <Scale className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  color: 'bg-red-50 border-red-100 text-red-900',
  articles: [
    { id: 'rules.process', title: { ET: 'Rikkumiste menetlemine', EN: 'Violation Process' } },
    { id: 'rules.punishments', title: { ET: 'Karistused', EN: 'Punishments' } },
    { id: 'rules.solitary', title: { ET: 'Distsiplinaarkamber', EN: 'Solitary Confinement' } }
  ]
};

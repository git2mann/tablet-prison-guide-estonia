import React from 'react';
import { GraduationCap } from 'lucide-react';

export default {
  id: 'act',
  title: { ET: '5. Minu tegevused vanglas', EN: '5. My Activities in Prison' },
  desc: { 
    ET: 'Tegevused ja sammud, mis aitavad Sind viia vabanemiseni – õppimine, töötamine ja sotsiaalprogrammid.',
    EN: 'Activities and steps that help lead you to release – studying, working, and social programs.'
  },
  icon: <GraduationCap className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1454165833767-02302306d649?auto=format&fit=crop&w=1200&q=80',
  color: 'purple',
  articles: [
    { id: 'act.risk', title: { ET: 'Riskihindamine ja ITK', EN: 'Risk Assessment & ITK' } },
    { id: 'act.programs', title: { ET: 'Sotsiaalprogrammid', EN: 'Social Programs' } },
    { id: 'act.learn', title: { ET: 'Õppimine', EN: 'Studying' } },
    { id: 'act.work', title: { ET: 'Töötamine', EN: 'Working' } }
  ]
};

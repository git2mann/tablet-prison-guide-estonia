import React from 'react';
import { Scale } from 'lucide-react';

export default {
  id: 'rules',
  title: { ET: '3. Reeglitest kinnipidamine', EN: '3. Compliance with Rules' },
  desc: { 
    ET: 'Vanglas kehtib terve hulk reegleid, millest kinni pidamine on Sulle kohustuslik. Rikkumised võivad mõjutada Sinu võimalusi vabanemiseks.',
    EN: 'A set of rules apply in prison that you are mandatory to follow. Violations can affect your chances for release.'
  },
  icon: <Scale className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  color: 'red',
  articles: [
    { id: 'rules.process', title: { ET: 'Rikkumiste menetlemine', EN: 'Violation Process' } },
    { id: 'rules.punishments', title: { ET: 'Karistused', EN: 'Punishments' } },
    { id: 'rules.solitary', title: { ET: 'Distsiplinaarkamber', EN: 'Solitary Confinement' } }
  ]
};

import React from 'react';
import { LogOut } from 'lucide-react';

export default {
  id: 'release',
  title: { ET: '7. Vabanemine', EN: '7. Release' },
  desc: { 
    ET: 'Ettevalmistused vabanemiseks: dokumendid, eluase ja toetusvõrgustik.',
    EN: 'Preparations for release: documents, housing, and support network.'
  },
  icon: <LogOut className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
  color: 'teal',
  articles: [
    { id: 'prep.steps', title: { ET: 'Olulised sammud vabanemiseks', EN: 'Important Steps for Release' } }
  ]
};

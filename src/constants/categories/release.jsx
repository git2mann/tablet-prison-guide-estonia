import React from 'react';
import { ArrowRight } from 'lucide-react';

export default {
  id: 'rel',
  title: { ET: '6. Avavangla ja TEV', EN: '6. Open Prison & Parole' },
  desc: { 
    ET: 'Võimalused liikuda kinnisest vanglast avavanglasse või vabaneda ennetähtaegselt elektroonilise valve all.',
    EN: 'Opportunities to move from closed prison to open prison or be released early under electronic monitoring.'
  },
  icon: <ArrowRight className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80',
  color: 'emerald',
  articles: [
    { id: 'rel.open', title: { ET: 'Avavangla', EN: 'Open Prison' } },
    { id: 'rel.etev', title: { ET: 'Elektrooniline valve (ETEV)', EN: 'Electronic Monitoring (ETEV)' } },
    { id: 'rel.tev', title: { ET: 'Tingimisi ennetähtaegne vabastamine (TEV)', EN: 'Conditional Release (TEV)' } }
  ]
};

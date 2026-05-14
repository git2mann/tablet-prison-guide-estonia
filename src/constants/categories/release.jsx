import React from 'react';
import { ArrowRight } from 'lucide-react';
import openPrisonStill from '../../assets/categories/open_prison/openprison_still.png';
import openPrisonLoop from '../../assets/categories/open_prison/openprison_loop.mp4';

export default {
  id: 'rel',
  title: { ET: '6. Avavangla ja TEV', EN: '6. Open Prison & Parole' },
  desc: {
    ET: 'Võimalused liikuda kinnisest vanglast avavanglasse või vabaneda ennetähtaegselt elektroonilise valve all.',
    EN: 'Opportunities to move from closed prison to open prison or be released early under electronic monitoring.'
  },
  icon: <ArrowRight className="w-10 h-10" />,
  imageUrl: openPrisonStill,
  videoUrl: openPrisonLoop,
  videoPosition: '50% 0%',
  videoTranslateY: '10%',
  color: 'emerald',
  articles: [
    { id: 'rel.open', title: { ET: 'Avavangla', EN: 'Open Prison' } },
    { id: 'rel.etev', title: { ET: 'Elektrooniline valve (ETEV)', EN: 'Electronic Monitoring (ETEV)' } },
    { id: 'rel.tev', title: { ET: 'Tingimisi ennetähtaegne vabastamine (TEV)', EN: 'Conditional Release (TEV)' } }
  ]
};

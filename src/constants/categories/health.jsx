import React from 'react';
import { HeartPulse } from 'lucide-react';

export default {
  id: 'health',
  title: { ET: '4. Minu füüsiline ja vaimne tervis', EN: '4. My Physical and Mental Health' },
  desc: { 
    ET: 'Tervishoid ja arstiabi toimub selgete reeglite järgi, et saaksid vajalikku abi õigel ajal ja turvaliselt.',
    EN: 'Healthcare and medical aid follow clear rules so you receive necessary help timely and safely.'
  },
  icon: <HeartPulse className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1505751172107-16785669b61d?auto=format&fit=crop&w=1200&q=80',
  color: 'green',
  articles: [
    { id: 'health.services', title: { ET: 'Arstiabi ja teenused', EN: 'Medical Services' } },
    { id: 'health.doctor', title: { ET: 'Arsti vastuvõtt', EN: 'Seeing a Doctor' } },
    { id: 'health.meds', title: { ET: 'Ravimite võtmine', EN: 'Taking Medication' } },
    { id: 'health.psych', title: { ET: 'Psühholoog', EN: 'Psychologist' } },
    { id: 'health.chaplain', title: { ET: 'Kaplan, usuline tegevus ja hingehoid', EN: 'Chaplain & Spiritual Care' } }
  ]
};

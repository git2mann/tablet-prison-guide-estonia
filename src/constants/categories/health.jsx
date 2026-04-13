import React from 'react';
import { HeartPulse } from 'lucide-react';

export default {
  id: 'health',
  title: { ET: 'Tervis ja heaolu', EN: 'Health & Wellbeing' },
  desc: { ET: 'Arstiabi ja tugi', EN: 'Medical Care & Support' },
  icon: <HeartPulse className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1505751172107-16785669b61d?auto=format&fit=crop&w=800&q=80',
  color: 'bg-green-50 border-green-100 text-green-900',
  articles: [
    { id: 'health.services', title: { ET: 'Meditsiiniteenused', EN: 'Medical Services' } },
    { id: 'health.doctor', title: { ET: 'Arsti vastuvõtt', EN: 'Seeing a Doctor' } },
    { id: 'health.meds', title: { ET: 'Ravimite reeglid', EN: 'Medication Rules' } },
    { id: 'health.psych', title: { ET: 'Psühholoog', EN: 'Psychologist' } },
    { id: 'health.chaplain', title: { ET: 'Kaplan', EN: 'Chaplain' } }
  ]
};

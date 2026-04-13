import React from 'react';
import { ArrowRight } from 'lucide-react';

export default {
  id: 'release',
  title: { ET: 'Vabanemine', EN: 'Release' },
  desc: { ET: 'Tee vabadusse', EN: 'Path to Freedom' },
  icon: <ArrowRight className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80',
  color: 'bg-emerald-50 border-emerald-100 text-emerald-900',
  articles: [
    { id: 'rel.open', title: { ET: 'Avavangla', EN: 'Open Prison' } },
    { id: 'rel.etev', title: { ET: 'Elektrooniline valve', EN: 'Electronic Monitoring' } },
    { id: 'rel.tev', title: { ET: 'Kriminaalhooldus', EN: 'Probation (TEV)' } }
  ]
};

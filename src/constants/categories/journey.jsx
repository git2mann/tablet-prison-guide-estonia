import React from 'react';
import { Activity } from 'lucide-react';

export default {
  id: 'journey',
  title: { ET: 'Minu teekond', EN: 'My Journey' },
  desc: { ET: 'Ülevaade etappidest', EN: 'Journey overview' },
  icon: <Activity className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  color: 'bg-cyan-50 border-cyan-100 text-cyan-900',
  articles: [
    { id: 'journey.overview', title: { ET: 'Teekonna etapid', EN: 'Journey Stages' } }
  ]
};

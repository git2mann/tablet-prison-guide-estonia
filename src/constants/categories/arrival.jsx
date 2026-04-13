import React from 'react';
import { Zap } from 'lucide-react';

export default {
  id: 'arrival',
  title: { ET: 'Saabumine', EN: 'Arrival' },
  desc: { ET: 'Sissevõtt ja kord', EN: 'First steps' },
  icon: <Zap className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
  color: 'bg-orange-50 border-orange-100 text-orange-900',
  articles: [
    { id: 'arrival.search', title: { ET: 'Otsing ja dokumendid', EN: 'Search & Documents' } },
    { id: 'arrival.health', title: { ET: 'Tervisekontroll', EN: 'Health Check' } },
    { id: 'arrival.needs', title: { ET: 'Baasvajad', EN: 'Basic Needs' } }
  ]
};

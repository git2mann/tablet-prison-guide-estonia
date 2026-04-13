import React from 'react';
import { Users } from 'lucide-react';

export default {
  id: 'staff',
  title: { ET: 'Töötajate teejuht', EN: 'Staff Guide' },
  desc: { ET: 'Kellelt küsida abi?', EN: 'Who to ask for help?' },
  icon: <Users className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&w=800&q=80',
  color: 'bg-indigo-50 border-indigo-100 text-indigo-900',
  articles: [
    { id: 'staff.roles', title: { ET: 'Rollid ja ülesanded', EN: 'Roles & Tasks' } }
  ]
};

import React from 'react';
import { Users } from 'lucide-react';
import staffStill from '../../assets/categories/staff/staff_still.png';
import staffLoop from '../../assets/categories/staff/staff_loop.mp4';

export default {
  id: 'staff',
  title: { ET: '8. Kes-on-kes', EN: '8. Who is Who' },
  desc: {
    ET: 'Ülevaade vangla ametikohtadest ja nende ülesannetest. See info aitab Sul pöörduda oma küsimusega õige inimese poole.',
    EN: 'Overview of prison roles and their tasks. This info helps you approach the right person with your questions.'
  },
  icon: <Users className="w-10 h-10" />,
  imageUrl: staffStill,
  videoUrl: staffLoop,
  videoPosition: '50% 0%',
  videoTranslateY: '15%',
  color: 'indigo',
  articles: [
    { id: 'staff.roles', title: { ET: 'Vangla töötajad ja nende ülesanded', EN: 'Prison Staff & Tasks' } }
  ]
};

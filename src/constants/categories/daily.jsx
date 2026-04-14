import React from 'react';
import { Clock } from 'lucide-react';

export default {
  id: 'daily',
  title: { ET: 'Igapäevaelu', EN: 'Daily Life' },
  desc: { ET: 'Päevakava ja teenused', EN: 'Schedule & Services' },
  icon: <Clock className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
  color: 'bg-blue-50 border-blue-100 text-blue-900',
  articles: [
    { id: 'daily.schedule', title: { ET: 'Päevakava ja loendus', EN: 'Schedule & Count' } },
    { id: 'daily.account', title: { ET: 'Isikuarve', EN: 'Personal Account' } },
    { id: 'daily.phone', title: { ET: 'Telefonikõned', EN: 'Phone Calls' } },
    { id: 'daily.eating', title: { ET: 'Söömine ja toit', EN: 'Eating & Food' } },
    { id: 'daily.eshop', title: { ET: 'E-pood', EN: 'E-Shop' } },
    { id: 'daily.living', title: { ET: 'Eluruumid', EN: 'Living Quarters' } },
    { id: 'daily.hygiene', title: { ET: 'Hügieen ja riietus', EN: 'Hygiene & Clothing' } },
    { id: 'daily.laundry', title: { ET: 'Pesemine ja remont', EN: 'Washing & Repair' } },
    { id: 'daily.meetings', title: { ET: 'Kohtumised', EN: 'Meetings' } },
    { id: 'daily.letters', title: { ET: 'Kirjavahetus', EN: 'Correspondence' } },
    { id: 'daily.movement', title: { ET: 'Liikumine ja jalutuskäigud', EN: 'Movement & Walks' } },
    { id: 'daily.leisure', title: { ET: 'Vaba aeg ja sport', EN: 'Leisure & Sports' } }
  ]
};

import React from 'react';
import { Clock } from 'lucide-react';
import dailyStill from '../../assets/categories/daily/daily_still.png';
import dailyLoop from '../../assets/categories/daily/daily_loop.mp4';

export default {
  id: 'daily',
  title: { ET: '2. Vangla igapäevaelu', EN: '2. Daily Life in Prison' },
  desc: { 
    ET: 'Kõik, mis aitab Sul korraldada oma igapäevaelu.',
    EN: 'Everything that helps you organize your daily life.'
  },
  introProse: {
    ET: 'Vanglas kehtib päevakava — kindlad ajad, millal kinnipeetavad ärkavad, söövad, pesevad, ringi liiguvad ja puhkavad. Päevakava on korra, turvalisuse ja Sinu päeva sisustamise huvides. Täpse päevakava leiad vangla kodukorrast. Enamasti algab päev vanglas kell 06:00 ning lõpeb kell 22:00. Nende kahe kellaaja vahel toimuvad kõik põhitegevused: õppimine, töötamine, osalemine programmides ja huvitegevus.',
    EN: 'A daily schedule applies in prison — fixed times when inmates wake up, eat, wash, move around, and rest. The daily schedule is in the interest of order, safety, and occupying your day. You can find the exact daily schedule in the prison internal rules. Most days in prison begin at 06:00 and end at 22:00. Between these two times, all main activities take place: studying, working, participating in programs, and leisure activities.'
  },
  icon: <Clock className="w-10 h-10" />,
  imageUrl: dailyStill,
  videoUrl: dailyLoop,
  color: 'blue',
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
    { id: 'daily.movement', title: { ET: 'Vanglas liikumine', EN: 'Movement in Prison' } },
    { id: 'daily.leisure', title: { ET: 'Vaba aeg ja sport', EN: 'Leisure & Sports' } }
  ]
};

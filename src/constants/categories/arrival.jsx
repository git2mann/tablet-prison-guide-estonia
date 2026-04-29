import React from 'react';
import { Zap } from 'lucide-react';
import arrivalStill from '../../assets/categories/arrival/arrival_still.png';
import arrivalLoop from '../../assets/categories/arrival/arrival_loop.mp4';

export default {
  id: 'arrival',
  title: { ET: '1. Saabumine ja vastuvõtt', EN: '1. Arrival and Reception' },
  desc: { 
    ET: 'Ülevaade esimestest protseduuridest vanglasse saabumisel.',
    EN: 'Overview of initial procedures upon arrival.'
  },
  introProse: {
    ET: 'Tere! Oled saabunud vanglasse. On mõistetav, kui tunned end praegu ebakindlalt, segaduses või ärevana. Meie eesmärk on tagada Sinu turvalisus ning pakkuda saabumisel vajalikku tuge. Esimestel päevadel viiakse Sinuga läbi mõned toimingud ning jagatakse infot esmaste vajaduste kohta vanglas. Võimalik, et kõik ei toimu kohe – palume varuda kannatlikkust, erinevad tegevused võivad aega võtta.',
    EN: 'Welcome! You have arrived at the prison. It is understandable if you feel uncertain, confused, or anxious right now. Our goal is to ensure your safety and provide necessary support upon arrival. In the first few days, some procedures will be carried out with you, and information about primary needs in prison will be shared. It is possible that everything will not happen immediately – we ask for your patience, as various activities may take time.'
  },
  icon: <Zap className="w-10 h-10" />,
  imageUrl: arrivalStill,
  videoUrl: arrivalLoop,
  color: 'orange',
  articles: [
    { id: 'arrival.search', title: { ET: 'Otsing ja dokumendid', EN: 'Search & Documents' } },
    { id: 'arrival.health', title: { ET: 'Tervisekontroll', EN: 'Health Check' } },
    { id: 'arrival.needs', title: { ET: 'Baasvajad', EN: 'Basic Needs' } }
  ]
};

import React from 'react';
import { Activity } from 'lucide-react';
import journeyStill from '../../assets/categories/journey/journey_still.png';
import journeyLoop from '../../assets/categories/journey/journey_loop.mp4';

export default {
  id: 'journey',
  title: { ET: '9. Kinnipeetava teekond', EN: '9. Inmate Journey' },
  desc: {
    ET: 'Sinu teekond vangistuse algusest kuni vabanemiseni. Ettevalmistus eluks väljaspool müüre algab esimesest päevast.',
    EN: 'Your journey from the start of imprisonment until release. Preparation for life outside the walls begins on day one.'
  },
  icon: <Activity className="w-10 h-10" />,
  imageUrl: journeyStill,
  videoUrl: journeyLoop,
  videoPosition: '50% 0%',
  videoTranslateY: '10%',
  color: 'cyan',
  articles: [
    { id: 'journey.overview', title: { ET: 'Teekonna etapid', EN: 'Journey Stages' } }
  ]
};

import React from 'react';
import { Activity } from 'lucide-react';

export default {
  id: 'journey',
  title: { ET: '9. Kinnipeetava teekond', EN: '9. Inmate Journey' },
  desc: { 
    ET: 'Sinu teekond vangistuse algusest kuni vabanemiseni. Ettevalmistus eluks väljaspool müüre algab esimesest päevast.',
    EN: 'Your journey from the start of imprisonment until release. Preparation for life outside the walls begins on day one.'
  },
  icon: <Activity className="w-10 h-10" />,
  imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  color: 'cyan',
  articles: [
    { id: 'journey.overview', title: { ET: 'Teekonna etapid', EN: 'Journey Stages' } }
  ]
};

import React from 'react';
import { LogOut } from 'lucide-react';
import releaseStill from '../../assets/categories/release/release_still.png';
import releaseLoop from '../../assets/categories/release/release_loop.mp4';

export default {
  id: 'release',
  title: { ET: '7. Vabanemine', EN: '7. Release' },
  desc: {
    ET: 'Ettevalmistused vabanemiseks: dokumendid, eluase ja toetusvõrgustik.',
    EN: 'Preparations for release: documents, housing, and support network.'
  },
  icon: <LogOut className="w-10 h-10" />,
  imageUrl: releaseStill,
  videoUrl: releaseLoop,
  color: 'teal',
  articles: [
    { id: 'prep.steps', title: { ET: 'Olulised sammud vabanemiseks', EN: 'Important Steps for Release' } }
  ]
};

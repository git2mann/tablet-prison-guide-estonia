import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const SectionImage = ({ url, alt }) => {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="w-full h-72 bg-[var(--color-bg-elevated)] rounded-[50px] overflow-hidden flex items-center justify-center relative shadow-inner border-4 border-[var(--color-bg-surface)]">
      {!hasError ? (
        <img src={url} alt={alt} className="w-full h-full object-cover animate-in fade-in duration-1000" onError={() => setHasError(true)} />
      ) : (
        <ImageIcon size={64} className="opacity-10 text-[var(--color-text-dim)]" />
      )}
    </div>
  );
};

import React from 'react';
import Lottie from 'lottie-react';

/**
 * Reusable Lottie Animation component
 * @param {Object|String} animationData - JSON object or URL to a Lottie file
 * @param {Boolean} loop - Whether to loop the animation
 * @param {String} className - Additional CSS classes
 */
export default function Animation({ 
  animationData, 
  loop = true, 
  autoplay = true,
  className = "",
  style = {}
}) {
  if (!animationData) return null;

  return (
    <div className={`lottie-container ${className}`} style={style}>
      <Lottie 
        animationData={animationData} 
        loop={loop} 
        autoplay={autoplay}
      />
    </div>
  );
}

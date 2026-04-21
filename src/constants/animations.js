/**
 * APPLE-STYLE SPRING PHYSICS
 * These values mimic the "weighted" feel of iOS transitions
 * Optimized for 60Hz stability
 */

export const appleSpring = {
  type: "spring",
  stiffness: 180, // Reduced from 230 for more fluid movement
  damping: 25,    // Balanced for smooth stops
  mass: 0.8,      // Increased from 0.6 for a more grounded feel
  restDelta: 0.01 // Increased to stop physics calculations earlier
};

export const fluidTransition = {
  type: "spring",
  stiffness: 150,
  damping: 28,
  mass: 1,
};

export const morphTransition = appleSpring;
export const slideTransition = appleSpring;

// SMOOTH TWEEN for opacity and filters (physics-based is jittery for these)
export const uiTransition = {
  duration: 0.4,
  ease: [0.33, 1, 0.68, 1]
};

export const fadeIn = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
  transition: uiTransition
};

export const slideUp = {
  initial: { opacity: 0, y: 30 }, // Reduced travel distance
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: appleSpring
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04, // Faster stagger
      delayChildren: 0.05
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 15 }, // Reduced y travel
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: appleSpring
  }
};

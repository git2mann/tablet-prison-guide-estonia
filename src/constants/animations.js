/**
 * APPLE-STYLE SPRING PHYSICS
 * These values mimic the "weighted" feel of iOS transitions
 */

export const appleSpring = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.6,
  restDelta: 0.001
};

export const fluidTransition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  mass: 1,
};

export const morphTransition = appleSpring;
export const slideTransition = appleSpring; // Restore missing export used by admin.jsx and App.jsx

export const fadeIn = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
};

export const slideUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: appleSpring
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: appleSpring
  }
};

export const morphTransition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  mass: 1,
  restDelta: 0.001
};

export const slideTransition = {
  type: "spring",
  damping: 30,
  stiffness: 150,
  mass: 1
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 }
};

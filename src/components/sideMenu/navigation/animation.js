export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateX: '-1rem',
    translateY: '5rem',
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + 0.1 * i,
      opacity: { duration: 0.4 },
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.7, 0, 0.3, 1] },
  },
};

export const slide = {
  initial: {
    opacity: 0,
    y: '1rem',
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + 0.1 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.7, 0, 0.3, 1] },
  },
};

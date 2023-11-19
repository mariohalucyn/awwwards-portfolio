const variants = {
  initial: {
    opacity: 0,
    translateY: '2rem',
  },
  animate: (i) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + 0.3 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default variants;

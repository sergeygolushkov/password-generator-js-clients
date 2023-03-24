import { Variants } from 'framer-motion';

export const fadeInRightVariants: Variants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const fadeInRightKeys = {
  initial: 'initial',
  animate: 'animate',
};

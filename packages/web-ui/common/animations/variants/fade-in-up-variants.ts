import { Variants } from 'framer-motion';

export const fadeInUpVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const fadeInUpKeys = {
  initial: 'initial',
  animate: 'animate',
};

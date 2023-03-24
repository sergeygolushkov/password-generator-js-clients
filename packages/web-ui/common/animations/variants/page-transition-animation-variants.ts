import { Variants } from 'framer-motion';

export const pageTransitionAnimationVariants: Variants = {
  exit: {
    opacity: 0,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const pageTransitionAnimationKeys = {
  exit: 'exit',
  initial: 'initial',
  animate: 'animate',
};

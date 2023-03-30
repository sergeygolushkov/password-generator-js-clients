import { Variants } from 'framer-motion';

export const fadeInDownVariants: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const fadeInDownKeys = {
  initial: 'initial',
  animate: 'animate',
};

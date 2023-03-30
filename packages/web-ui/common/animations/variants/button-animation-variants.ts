import { Variants } from 'framer-motion';

export const buttonAnimationVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.9,
  },
};

export const buttonAnimationVariantsKeys = {
  hover: 'hover',
  tap: 'tap',
};

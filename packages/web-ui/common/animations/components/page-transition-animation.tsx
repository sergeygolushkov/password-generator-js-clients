import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import {
  pageTransitionAnimationKeys,
  pageTransitionAnimationVariants,
} from '../variants';

export const PageTransitionAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      variants={pageTransitionAnimationVariants}
      exit={pageTransitionAnimationKeys.exit}
      initial={pageTransitionAnimationKeys.initial}
      animate={pageTransitionAnimationKeys.animate}
    >
      {children}
    </motion.div>
  );
};

import { AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const AnimationPresence = ({ children }: PropsWithChildren) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

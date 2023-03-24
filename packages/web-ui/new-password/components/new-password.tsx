import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUpKeys, fadeInUpVariants } from '../../common';
import { NewPasswordForm } from './new-password-form';

const MainText = styled(Typography)`
  padding: 0 2rem;
`;

export type NewPasswordProps = {};

export const NewPassword = (props: NewPasswordProps) => {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial={fadeInUpKeys.initial}
      animate={fadeInUpKeys.animate}
      transition={{ delay: 0.2 }}
    >
      <Box>
        <MainText variant="h1" className="text-center">
          Generate strong, secure password
        </MainText>
      </Box>
      <Box className="m-top-2 w-100">
        <NewPasswordForm />
      </Box>
    </motion.div>
  );
};

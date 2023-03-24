import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  ContentWrapper,
  fadeInLeftKeys,
  fadeInLeftVariants,
} from '../../common';

export type HomeApiSectionProps = {};

const Section = styled.section`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: ${(props) => props.theme?.background?.secondary};

  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

export const HomeApiSection = (props: HomeApiSectionProps) => {
  return (
    <Section id="api">
      <ContentWrapper>
        <motion.div
          variants={fadeInLeftVariants}
          initial={fadeInLeftKeys.initial}
          animate={fadeInLeftKeys.animate}
          transition={{ delay: 0.2 }}
        >
          <Stack
            direction={{ xs: 'column' }}
            spacing={{ xs: 4, md: 6 }}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Typography variant="h3" className="text-center">
                Create passwords doing API requests
              </Typography>
            </Box>
            <Box>curl request here</Box>
            <Box>postman example, url and body snippet</Box>
          </Stack>
        </motion.div>
      </ContentWrapper>
    </Section>
  );
};

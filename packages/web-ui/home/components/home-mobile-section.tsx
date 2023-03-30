import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  ContentWrapper,
  fadeInRightKeys,
  fadeInRightVariants,
  InProgressStatus,
} from '../../common';

export type HomeMobileSectionProps = {
  storeIcons: JSX.Element[];
};

const Section = styled.section`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: ${(props) => props.theme?.background?.secondary};

  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

export const HomeMobileSection = ({ storeIcons }: HomeMobileSectionProps) => {
  return (
    <Section id="mobile">
      <ContentWrapper>
        <motion.div
          variants={fadeInRightVariants}
          initial={fadeInRightKeys.initial}
          animate={fadeInRightKeys.animate}
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
                Create passwords with mobile device
              </Typography>
            </Box>
            <Box>
              <InProgressStatus label="Development is in progress" />
            </Box>
            <Stack
              direction={{ xs: 'row' }}
              spacing={{ xs: 2, md: 4 }}
              justifyContent="space-evenly"
              alignItems="center"
            >
              {storeIcons.map((store, index) => (
                <span key={index}>{store}</span>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </ContentWrapper>
    </Section>
  );
};

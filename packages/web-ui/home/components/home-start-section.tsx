import styled from '@emotion/styled';
import { Box, Link, Stack, Typography } from '@mui/material';
import { NavigationContext, WEB_APP_ROUTES } from 'shared';
import { useContext } from 'react';
import {
  buttonAnimationVariants,
  buttonAnimationVariantsKeys,
  ContentWrapper,
  DarkButton,
  fadeInRightKeys,
  fadeInRightVariants,
} from '../../common';
import { motion } from 'framer-motion';
import { HomeAvailableClients } from './home-available-clients';

export type HomeStartSectionProps = {};

const Section = styled.section`
  padding-top: 20.4rem;
  padding-bottom: 8rem;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 15.4rem;
    padding-bottom: 6rem;
  }
`;

const GenerateButton = styled(DarkButton)`
  font-size: 2rem !important;
  min-width: 100%;

  ${(props) => props.theme.breakpoints.up('md')} {
    min-width: 40rem;
  }
`;

export const HomeStartSection = (props: HomeStartSectionProps) => {
  const { navigate } = useContext(NavigationContext);

  const generateNewHandler = () => {
    navigate(WEB_APP_ROUTES.CREATE_PASSWORD);
  };

  return (
    <Section id="start-section">
      <ContentWrapper>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 7, md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <motion.div
            variants={fadeInRightVariants}
            initial={fadeInRightKeys.initial}
            animate={fadeInRightKeys.animate}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <Typography variant="h1" className="text-center">
              Cross platform Password Generator
            </Typography>
            <Typography variant="h4" className="m-top-5 text-center">
              An open sources project with clients for different platforms,
              available on the <Link href="/">Github</Link>.
            </Typography>
            <Box className="m-top-5 flex justify-center">
              <motion.div
                variants={buttonAnimationVariants}
                whileHover={buttonAnimationVariantsKeys.hover}
                whileTap={buttonAnimationVariantsKeys.tap}
              >
                <GenerateButton
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={generateNewHandler}
                >
                  Create Password
                </GenerateButton>
              </motion.div>
            </Box>
            <Box className="m-top-5 flex flex-direction-col justify-center">
              <HomeAvailableClients />
            </Box>
          </motion.div>
        </Stack>
      </ContentWrapper>
    </Section>
  );
};

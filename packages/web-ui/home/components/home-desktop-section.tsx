import styled from '@emotion/styled';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { MANUAL_CONSOLE_EXE_URL, MANUAL_GUI_EXE_URL } from 'shared';
import { motion } from 'framer-motion';
import {
  ContentWrapper,
  fadeInLeftKeys,
  fadeInLeftVariants,
  ILinkViewModel,
  InProgressStatus,
} from '../../common';

export type HomeDesktopSectionProps = {
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

const manualLinks: ILinkViewModel[] = [
  {
    url: MANUAL_CONSOLE_EXE_URL,
    text: 'console .exe',
  },
  {
    url: MANUAL_GUI_EXE_URL,
    text: 'gui .exe',
  },
];

export const HomeDesktopSection = ({ storeIcons }: HomeDesktopSectionProps) => {
  return (
    <Section id="desktop">
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
                Use your PC to create secure passwords
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
            <Box>
              <Typography variant="h4" className="text-center">
                or download installers
              </Typography>
            </Box>
            <Stack
              direction={{ xs: 'column' }}
              spacing={{ xs: 2, md: 4 }}
              justifyContent="space-evenly"
              alignItems="center"
            >
              {manualLinks.map((link, index) => (
                <Box key={index}>
                  <Button color="secondary" href={link.url} component={Link}>
                    {link.text}
                  </Button>
                </Box>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </ContentWrapper>
    </Section>
  );
};

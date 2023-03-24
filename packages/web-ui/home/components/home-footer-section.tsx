import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  ContentWrapper,
  ExternalLink,
  fadeInRightKeys,
  fadeInRightVariants,
  ILinkViewModel,
} from '../../common';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GITHUB_URL, LINKED_IN_URL } from 'shared';

export type HomeFooterSectionProps = {};

const Section = styled.section`
  padding-top: 8rem;
  padding-bottom: 8rem;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const socialLinks: ILinkViewModel[] = [
  {
    url: GITHUB_URL,
    imageSource: <GitHubIcon fontSize="large" />,
  },
  {
    url: LINKED_IN_URL,
    imageSource: <LinkedInIcon fontSize="large" />,
  },
];

export const HomeFooterSection = (props: HomeFooterSectionProps) => {
  return (
    <Section>
      <ContentWrapper>
        <motion.div
          variants={fadeInRightVariants}
          initial={fadeInRightKeys.initial}
          animate={fadeInRightKeys.animate}
          transition={{ delay: 0.2 }}
        >
          <Stack
            direction={{ xs: 'row' }}
            spacing={{ xs: 4, md: 6 }}
            justifyContent="center"
            alignItems="center"
          >
            {socialLinks.map((link, index) => (
              <ExternalLink
                content={link.imageSource}
                url={link.url}
                key={index}
              />
            ))}
          </Stack>
        </motion.div>
      </ContentWrapper>
    </Section>
  );
};

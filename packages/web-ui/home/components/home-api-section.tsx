import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GITHUB_API_REPO_URL } from 'shared';
import {
  ContentWrapper,
  ExternalLink,
  fadeInLeftKeys,
  fadeInLeftVariants,
} from '../../common';

export type HomeApiSectionProps = {
  createPasswordApiUrl: string;
  swaggerUrl: string;
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

const StyledRequestBox = styled(Box)`
  background-color: ${(props) => props.theme.palette.common.white};
  color: ${(props) => props.theme.palette.common.black};
  min-height: 5rem;
  font-size: 1.8rem;
  border-radius: ${(props) => props.theme.shape.borderRadius + 'px'};
  padding: 2rem 5rem;
  letter-spacing: 0.2rem;
  word-break: break-all;
`;

export const HomeApiSection = ({
  createPasswordApiUrl,
  swaggerUrl,
}: HomeApiSectionProps) => {
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
                Create password via request to API
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Full API documentation:
                <span className="m-left-1">
                  <ExternalLink url={swaggerUrl} content="Swagger UI" />
                </span>
                ,
                <span className="m-left-1">
                  <ExternalLink
                    url={GITHUB_API_REPO_URL}
                    content="API repository"
                  />
                </span>
              </Typography>
            </Box>
            <StyledRequestBox>
              <p className="text-center">Request properties</p>
              <p>
                Method: <b>POST</b>
              </p>
              <p>
                Url: <b>{createPasswordApiUrl}</b>
              </p>
              <p>Body: </p>
              <p>
                <b>{'{'}</b>
              </p>
              <p>
                <b>{'"includeUpperCaseLetters"'}: true,</b>
              </p>
              <p>
                <b>{'"includeNumbers"'}: true,</b>
              </p>
              <p>
                <b>{'"includeSpecialCharacters"'}: true,</b>
              </p>
              <p>
                <b>{'"length"'}: 16</b>
              </p>
              <p>
                <b>{'}'}</b>
              </p>
            </StyledRequestBox>
          </Stack>
        </motion.div>
      </ContentWrapper>
    </Section>
  );
};

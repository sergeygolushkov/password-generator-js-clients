import styled from '@emotion/styled';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { GITHUB_WEB_REPO_URL, WEB_APP_ROUTES } from 'shared';
import { ReactNode } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ExternalLink } from '../external-link';
import Link from 'next/link';

export type ApplicationBarProps = {
  logo: ReactNode;
};

interface IHeaderLinkNavigation {
  name: string;
  route: string;
}

export const headerLinksNavigation: IHeaderLinkNavigation[] = [
  {
    name: 'Home',
    route: WEB_APP_ROUTES.HOME_WEB,
  },
  {
    name: 'Create Password',
    route: WEB_APP_ROUTES.CREATE_PASSWORD,
  },
];

const StyledToolbar = styled(Toolbar)`
  padding: 0 !important;
`;

const StyledHeaderLink = styled(Link)`
  color: ${(props) => props.theme?.palette?.primary?.main};
  padding: 0.6rem 0.8rem;
`;

export const ApplicationBar = ({ logo }: ApplicationBarProps): JSX.Element => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <StyledToolbar>
          {logo}

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'start',
              paddingRight: '0.8rem',
              paddingLeft: '0.8rem',
            }}
          >
            {headerLinksNavigation.map((navLink) => (
              <StyledHeaderLink key={navLink.name} href={`/${navLink.route}`}>
                {navLink.name}
              </StyledHeaderLink>
            ))}
          </Box>

          <Box sx={{ paddingTop: '0.5rem' }}>
            <ExternalLink
              content={<GitHubIcon fontSize="medium" />}
              url={GITHUB_WEB_REPO_URL}
            />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

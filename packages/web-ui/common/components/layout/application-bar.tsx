import styled from '@emotion/styled';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { GITHUB_URL, NavigationContext, WEB_APP_ROUTES } from 'shared';
import { ReactNode, useContext } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ExternalLink } from '../external-link';

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

export const ApplicationBar = ({ logo }: ApplicationBarProps): JSX.Element => {
  const navigationContext = useContext(NavigationContext);

  const onHeaderLinkClick = (navLink: IHeaderLinkNavigation) => {
    navigationContext.navigate(navLink.route);
  };
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <StyledToolbar>
          {logo}

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'start' }}>
            {headerLinksNavigation.map((navLink) => (
              <Button
                key={navLink.name}
                onClick={() => onHeaderLinkClick(navLink)}
              >
                {navLink.name}
              </Button>
            ))}
          </Box>

          <Box>
            <ExternalLink content={<GitHubIcon />} url={GITHUB_URL} />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

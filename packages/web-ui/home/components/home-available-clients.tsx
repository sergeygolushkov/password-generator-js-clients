import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { NavigationContext } from 'shared';
import { useContext } from 'react';

export type HomeAvailableClientsProps = {};

const availableClients: {
  title: string;
  url: string;
}[] = [
  {
    title: 'Web',
    url: 'password/create',
  },
  {
    title: 'API',
    url: '#api',
  },
  {
    title: 'Desktop',
    url: '#desktop',
  },
  {
    title: 'Mobile',
    url: '#mobile',
  },
];

export const HomeAvailableClients = (props: HomeAvailableClientsProps) => {
  const theme = useTheme();
  const navigationContext = useContext(NavigationContext);

  const onClientClick = (clientUrl: string) => {
    navigationContext.navigate(clientUrl);
  };

  return (
    <>
      <Box>
        <Typography variant="h4" className="text-center">
          Available clients
        </Typography>
      </Box>
      <Box className="m-top-4 flex justify-center">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 4 }}
          divider={
            <Divider
              orientation={
                useMediaQuery(theme?.breakpoints?.up('md'))
                  ? 'vertical'
                  : 'horizontal'
              }
              flexItem
            />
          }
        >
          {availableClients.map((client, index) => (
            <Button
              variant="text"
              color="info"
              key={index}
              onClick={() => onClientClick(client.url)}
            >
              {client.title}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
};

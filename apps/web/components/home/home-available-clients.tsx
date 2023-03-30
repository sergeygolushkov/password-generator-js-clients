import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { AvailableClientGroup } from 'shared';
import {
  ContentWrapper,
  DeployedStatus,
  HomeClientInfo,
  HomeClientsGroup,
  InProgressStatus,
  PlannedStatus,
} from 'web-ui';
import planned from './../../public/images/in_development_min.jpg';
import nextjsClients from './../../public/images/nextjs_client_ipad_pro_min.png';
import Image, { StaticImageData } from 'next/image';

export type HomeAvailableClientsProps = {};

const getGroupImage = (image: StaticImageData, alt: string) => (
  <Image
    // width={400} height={300}
    layout="responsive"
    src={image}
    alt={alt}
  />
);

const ClientsSection = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const BlockHeading = styled(ContentWrapper)`
  display: flex;
  justify-content: center;
`;

const availableClients: AvailableClientGroup[] = [
  {
    name: 'Web',
    image: getGroupImage(nextjsClients, 'next.js client images'),
    clients: [
      {
        title: 'Next.js',
        statuses: [<InProgressStatus key={1} />, <DeployedStatus key={2} />],
        description: `Web client built with Next.js and MUI (material ui) library.
        To share code with React Native app used Turborepo, another solution is NX but I used NX a lot at work and just wanted to try turborepo.`,
      },
      {
        title: 'Blazor',
        statuses: [<PlannedStatus key={1} />],
        description: '',
      },
    ],
  },
  {
    name: 'Mobile',
    image: getGroupImage(planned, 'planned for development'),
    clients: [
      {
        title: 'React Native',
        statuses: [<PlannedStatus key={1} />],
        description: '',
      },
      {
        title: '.NET MAUI',
        statuses: [<PlannedStatus key={1} />],
        description: '',
      },
    ],
  },
  {
    name: 'Desktop',
    image: getGroupImage(planned, 'planned for development'),
    clients: [
      {
        title: '.NET MAUI',
        statuses: [<PlannedStatus key={1} />],
        description: '',
      },
      {
        title: '.NET Console',
        statuses: [<PlannedStatus key={1} />],
        description: '',
      },
    ],
  },
  {
    name: 'API',
    image: getGroupImage(planned, 'planned for development'),
    clients: [
      {
        title: '.NET Core',
        statuses: [<PlannedStatus key={1} />],
        description: '',
      },
    ],
  },
];

export const HomeAvailableClients = (props: HomeAvailableClientsProps) => {
  return (
    <ClientsSection>
      <BlockHeading>
        <Typography variant="h2">Available Clients</Typography>
      </BlockHeading>
      <Box>
        {availableClients.map((group) => (
          <HomeClientsGroup
            groupName={group.name}
            key={group.name}
            groupImage={group.image}
          >
            <>
              {group.clients.map((client) => (
                <HomeClientInfo
                  key={group.name + client.title}
                  title={client.title}
                  statuses={client.statuses}
                  description={client.description}
                />
              ))}
            </>
          </HomeClientsGroup>
        ))}
      </Box>
    </ClientsSection>
  );
};

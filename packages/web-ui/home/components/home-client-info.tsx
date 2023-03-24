import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export type HomeClientInfoProps = {
  title: string;
  statuses: JSX.Element[];
  description?: string;
};

const ClientTitle = styled.span`
  font-weight: bold;
`;

const TitleRow = styled(Box)`
  font-size: 3rem;
  display: flex;
  align-items: center;
`;

export const HomeClientInfo = ({
  title,
  statuses,
  description,
}: HomeClientInfoProps) => {
  return (
    <Box className="m-top-4">
      <Box className="flex">
        <TitleRow className="flex-1">
          <ClientTitle>{title}</ClientTitle>
        </TitleRow>
      </Box>
      <Box className="flex">
        <TitleRow className="flex-1">
          {statuses.map((s, i) => (
            <span key={i} className="padding-right-1">
              {s}
            </span>
          ))}
        </TitleRow>
      </Box>

      <Box className="m-top-2">{description}</Box>
    </Box>
  );
};

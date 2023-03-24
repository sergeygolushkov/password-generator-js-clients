import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

export type DeployedStatusProps = {};

const Deployed = styled(Chip)`
  color: ${() => lightGreen[400]};
  border-color: ${() => lightGreen[400]};
`;

export const DeployedStatus = (props: DeployedStatusProps) => {
  return <Deployed label="Deployed" variant="outlined" />;
};

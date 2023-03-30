import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import { green } from '@mui/material/colors';

export type CompletedStatusProps = {};

const Completed = styled(Chip)`
  color: ${() => green[400]};
  border-color: ${() => green[400]};
`;

export const CompletedStatus = (props: CompletedStatusProps) => {
  return <Completed label="Completed" variant="outlined" />;
};

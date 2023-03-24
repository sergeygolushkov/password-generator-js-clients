import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import { grey } from '@mui/material/colors';

export type PlannedStatusProps = {};

const Planned = styled(Chip)`
  color: ${() => grey[400]};
  border-color: ${() => grey[400]};
`;

export const PlannedStatus = (props: PlannedStatusProps) => {
  return <Planned label="Planned" variant="outlined" />;
};

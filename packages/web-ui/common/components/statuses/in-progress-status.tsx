import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import { blue } from '@mui/material/colors';

export type InProgressStatusProps = {
  label?: string;
};

const InProgress = styled(Chip)`
  color: ${() => blue[400]};
  border-color: ${() => blue[400]};
`;

export const InProgressStatus = ({
  label = 'In Progress',
}: InProgressStatusProps) => {
  return <InProgress label={label} variant="outlined" />;
};

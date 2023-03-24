import styled from '@emotion/styled';
import { Box } from '@mui/material';

export interface NewPasswordBoxProps {
  newPassword: string | undefined;
}

const StyledBox = styled(Box)`
  background-color: ${(props) => props.theme.palette.common.white};
  color: ${(props) => props.theme.palette.common.black};
  min-height: 5rem;
  font-size: 2.4rem;
  font-weight: bold;
  border-radius: ${(props) => props.theme.shape.borderRadius + 'px'};
  padding: 1.6rem;
  letter-spacing: 0.2rem;
  word-break: break-all;
`;

export const NewPasswordBox = ({ newPassword }: NewPasswordBoxProps) => {
  return (
    <StyledBox className="w-100 text-center">{newPassword || ''}</StyledBox>
  );
};

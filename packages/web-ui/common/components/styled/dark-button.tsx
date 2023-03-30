import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const DarkButton = styled(Button)`
  font-weight: bold;
  background-color: ${(props) =>
    props.theme.palette[
      props.color && props.color !== 'inherit' ? props.color : 'primary'
    ].dark};

  &:hover {
    background-color: ${(props) =>
      props.theme.palette[
        props.color && props.color !== 'inherit' ? props.color : 'primary'
      ].main};
  }
`;

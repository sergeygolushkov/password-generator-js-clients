import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export type ContentWrapperProps = PropsWithChildren & {
  className?: string;
};

export const ContentWrapper = ({
  children,
  className,
}: ContentWrapperProps): JSX.Element => {
  return (
    <Container maxWidth="xl" className={className}>
      {children}
    </Container>
  );
};

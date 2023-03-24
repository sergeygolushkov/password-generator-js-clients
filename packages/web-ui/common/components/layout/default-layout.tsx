import { PropsWithChildren, ReactNode } from 'react';
import { ApplicationBar } from './application-bar';

export const DefaultLayout = ({
  children,
  logo,
}: PropsWithChildren & {
  logo: ReactNode;
}) => {
  return (
    <>
      <ApplicationBar logo={logo} />
      <main>{children}</main>
    </>
  );
};

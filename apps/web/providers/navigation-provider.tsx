import { NavigationContext } from 'shared';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

export type NavigationProviderProps = PropsWithChildren;

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const router = useRouter();
  const navigate = (route: string) => router && router.push(`/${route}`);

  return (
    <NavigationContext.Provider
      value={{
        navigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

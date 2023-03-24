import { createContext } from 'react';

export interface INavigationContext {
  navigate: (route: string) => void;
}
export const NavigationContext = createContext<INavigationContext>({
  navigate: (route) => `the route is ${route}`,
});

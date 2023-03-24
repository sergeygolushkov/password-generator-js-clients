import { createContext } from 'react';

export interface INotificationContext {
  error: (message: string) => void;
  success: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
}

export const NotificationContext = createContext<INotificationContext>({
  error: (message) => console.log(message),
  success: (message) => console.log(message),
  warning: (message) => console.log(message),
  info: (message) => console.log(message),
});

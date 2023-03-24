import { createContext } from 'react';

export interface IClipboardContext {
  writeTextToClipboard: (text: string) => Promise<boolean>;
}

export const ClipboardContext = createContext<IClipboardContext>({
  writeTextToClipboard: async (text) => false,
});

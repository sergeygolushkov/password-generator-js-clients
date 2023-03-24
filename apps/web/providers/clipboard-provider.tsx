import { ClipboardContext } from 'shared';
import { PropsWithChildren } from 'react';

export type ClipboardProviderProps = PropsWithChildren;

export const ClipboardProvider = ({ children }: ClipboardProviderProps) => {
  const writeTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <ClipboardContext.Provider
      value={{
        writeTextToClipboard,
      }}
    >
      {children}
    </ClipboardContext.Provider>
  );
};

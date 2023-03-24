import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface INewPasswordOpetionsStoreState {
  upperLetters: boolean;
  numbers: boolean;
  specialCharacters: boolean;
  length: number;
}

export interface INewPasswordOpetionsStore
  extends INewPasswordOpetionsStoreState {
  setUpperLetters: (value: boolean) => void;
  setNumbers: (value: boolean) => void;
  setSpecialCharacters: (value: boolean) => void;
  setLength: (value: number) => void;
}

export const defaultNewPasswordOptionsState = {
  upperLetters: true,
  numbers: true,
  specialCharacters: true,
  length: 16,
};

export const useNewPasswordOptionsStore = create<INewPasswordOpetionsStore>()(
  persist(
    (set, get) => ({
      ...defaultNewPasswordOptionsState,
      setUpperLetters: (value: boolean) => set({ upperLetters: value }),
      setNumbers: (value: boolean) => set({ numbers: value }),
      setSpecialCharacters: (value: boolean) =>
        set({ specialCharacters: value }),
      setLength: (value: number) => set({ length: value }),
    }),
    {
      name: 'new-password-options',
      // getStorage: () => localStorage, // for mobile put here AsyncStorage
    }
  )
);

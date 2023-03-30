import { useCallback, useEffect, useState } from 'react';
import { useNewPasswordOptionsStore } from '../state';
import {
  getRandomNumber,
  getRandomArray,
  getRandomUpperCaseLetter,
  getRandomSpecialLetter,
  getRandomLowerCaseLetter,
  shuffle,
} from '../utilities';

type PasswordCreatorProps = {
  numbers: boolean;
  upperLetters: boolean;
  specialCharacters: boolean;
  length: number;
};

// LL - letters lowercase, LU - letters uppercase, LD - letters digits, LS - letters special
// 1) Determine number of arrays to calculate (depends on password options if user needs lu, ld, ls, etc). First 1 constant - means LL.
//    and calculate length of LD, LU, LS arrays
// 2) randomly generate number LD for uppercase.
// 3) randomly generate number LU for uppercase.
// 4) randomly generate number LS for uppercase.
// 5) LL array length will be [password lenght - sum(<all other arrays>.length)]
// 6) randomly generate LL lowercase letters
// 7) concatenate arrays into one array
// 8) Shuffle the array randomly
// 9) test result with regexp
function createPassword({
  numbers,
  upperLetters,
  specialCharacters,
  length,
}: PasswordCreatorProps): string {
  // step 1
  const randomArraysNumber =
    1 + Number(numbers) + Number(upperLetters) + Number(specialCharacters);
  const arraysLength = Math.floor(length / randomArraysNumber);

  // steps 2 - 4
  const ld = (numbers && getRandomArray(arraysLength, getRandomNumber)) || [];
  const lu =
    (upperLetters && getRandomArray(arraysLength, getRandomUpperCaseLetter)) ||
    [];
  const ls =
    (specialCharacters &&
      getRandomArray(arraysLength, getRandomSpecialLetter)) ||
    [];

  // step 5
  const llLength = length - (ld.length + lu.length + ls.length);

  // step 6 - 7
  const result = getRandomArray(llLength, getRandomLowerCaseLetter)
    .concat(ld)
    .concat(lu)
    .concat(ls);

  // step 8
  const resultStr = shuffle(result).join('');

  // step 9
  // validate string by regexp and regenerate it if it is not valid
  // or write tests to validate string

  return resultStr;
}

export function usePasswordCreator() {
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [upperLetters, numbers, specialCharacters, length] =
    useNewPasswordOptionsStore((state) => [
      state.upperLetters,
      state.numbers,
      state.specialCharacters,
      state.length,
    ]);

  const generateNew = useCallback(() => {
    const newPass = createPassword({
      numbers,
      upperLetters,
      specialCharacters,
      length,
    });
    setPassword(newPass);
  }, [numbers, upperLetters, specialCharacters, length]);

  useEffect(() => {
    generateNew();
  }, [generateNew]);

  return {
    password,
    generateNew,
  };
}

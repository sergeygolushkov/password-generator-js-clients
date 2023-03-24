import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import {
  defaultNewPasswordOptionsState,
  INewPasswordOpetionsStoreState,
  useNewPasswordOptionsStore,
} from 'shared';
import { useEffect, useState } from 'react';
import { InputSlider } from '../../common';

export interface NewPasswordOptionsProps {}

export const NewPasswordOptions = () => {
  const store = useNewPasswordOptionsStore();

  // next lines, optionsState and useEffect, are to fix MUI render error
  const [optionsState, setOptionsState] =
    useState<INewPasswordOpetionsStoreState>(defaultNewPasswordOptionsState);

  useEffect(() => {
    setOptionsState({
      length: store.length,
      numbers: store.numbers,
      specialCharacters: store.specialCharacters,
      upperLetters: store.upperLetters,
    });
  }, [
    store.length,
    store.numbers,
    store.specialCharacters,
    store.upperLetters,
  ]);

  return (
    <Box className="padding-2 w-100">
      <Box>
        <Typography variant="h3" className="text-center m-bottom-1">
          Options
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <FormGroup className="flex-1 justify-center">
          <FormControlLabel
            control={<Checkbox />}
            checked={optionsState.upperLetters}
            label="Upper case letters"
            onChange={(event, value) => store.setUpperLetters(value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={optionsState.numbers}
            label="Numbers"
            onChange={(event, value) => store.setNumbers(value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={optionsState.specialCharacters}
            label="Special characters"
            onChange={(event, value) => store.setSpecialCharacters(value)}
          />
        </FormGroup>
        <Box className="flex-1 justify-center flex flex-direction-col">
          <InputSlider
            title="Length"
            inputValue={optionsState.length}
            minValue={8}
            maxValue={100}
            onChange={store.setLength}
          />
        </Box>
      </Stack>
    </Box>
  );
};

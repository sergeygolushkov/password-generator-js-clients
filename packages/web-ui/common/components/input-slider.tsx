import styled from '@emotion/styled';
import { Box, Grid, Input, Slider, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const StyledInput = styled(Input)`
  width: 4rem;
`;

export type InputSliderProps = {
  title: string;
  inputValue: number;
  minValue: number;
  maxValue: number;
  onChange: (value: number) => void;
};

export const InputSlider = ({
  title,
  inputValue,
  minValue,
  maxValue,
  onChange,
}: InputSliderProps) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    onChange(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const handleInputChange = (event: any) => {
    const newValue = (event.target as any).value;
    onChange(!newValue ? minValue : Number(newValue));
  };

  const handleBlur = (event: any) => {
    const newValue = (event.target as any).value;
    if (!newValue || newValue < minValue) {
      onChange(minValue);
    } else if (newValue > maxValue) {
      onChange(maxValue);
    }
  };

  return (
    <>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={
              !inputValue || typeof inputValue !== 'number'
                ? minValue
                : inputValue
            }
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
            step={1}
            min={minValue}
            max={maxValue}
          />
        </Grid>
        <Grid item>
          <StyledInput
            value={inputValue}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: minValue,
              max: maxValue,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

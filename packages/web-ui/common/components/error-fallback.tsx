"use client";

import { Box, Fab, Typography } from '@mui/material';
import { useErrorBoundary } from 'react-error-boundary';
import RefreshIcon from '@mui/icons-material/Refresh';
import styled from '@emotion/styled';

export type ErrorFallbackProps = {
  error: { message: string };
};

const StyledContainer = styled(Box)`
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  const { resetBoundary } = useErrorBoundary();

  console.log(error.message);

  return (
    <StyledContainer className="absolute padding-5 flex flex-direction-col">
      <Box className="padding-bottom-3 text-center">
        <Typography variant="h2" component="h1">
          Ooops, something went wrong.
        </Typography>
      </Box>

      <Box className="text-center">
        <Fab variant="extended" onClick={resetBoundary} color="primary">
          <RefreshIcon sx={{ mr: 1 }} />
          Try again
        </Fab>
      </Box>
    </StyledContainer>
  );
};

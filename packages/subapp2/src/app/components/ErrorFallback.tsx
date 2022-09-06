import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Typography, Button } from '@mui/material';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      style={{
        textAlign: 'center',
        background: '#efefef',
        padding: '25px',
        margin: '50px',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '100%',
      }}
    >
      <Typography variant="h3">Something went wrong</Typography>
      <Typography variant="body1">
        Will send the error - {error.message || ''} to server and log it.
      </Typography>
      <div>
        <Button color="primary" variant="text" onClick={resetErrorBoundary}>
          Reset State
        </Button>
      </div>
    </div>
  );
};

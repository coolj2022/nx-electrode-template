import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../components/ErrorFallback';
import { Typography, Button } from '@mui/material';
import { errorHandler } from '../../../helpers/utils';

function Bomb() {
  throw new Error(' CABOOM ');
  return <></>;
}

const Logging = () => {
  const [explode, setExplode] = React.useState(false);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
      onReset={() => setExplode(false)}
    >
      <div
        style={{
          textAlign: 'center',
          background: '#efefef',
          padding: '25px',
          margin: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
        }}
      >
        {explode ? <Bomb /> : null}
        <Typography variant='h3'>Telemetry - UI Logging</Typography>
        <Typography variant='body1'>
          This logger is only for use in React UI jsx code. It offers logging
          support to UI code executed either on the browser or the server (SSR).
          The same has been already setup so in order to use you can check the
          errorHandler function. More documentation can be found here{' '}
          To check the error object being sent it can be checked in the network tab.
        </Typography>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              setExplode(true);
            }}
          >
            Click here to Force Error
          </Button>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default Logging;

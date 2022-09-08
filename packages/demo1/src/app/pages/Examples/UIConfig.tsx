import React from 'react';
import { Typography } from '@mui/material';

export const UIConfig = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        background: '#efefef',
        padding: '25px',
        margin: '50px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3">UI Config</Typography>
      <Typography variant="body1">
        The subapp can access UI config setup per environment via
        electrode-ui-config lib. The ui config property set are as below and for
        more documentation on UI config check
        <pre
          style={{
            display: 'flex',
            textAlign: 'left',
            justifyContent: 'center',
          }}
        >
          {JSON.stringify(
            {
              body: 'abcd',
            },
            undefined,
            2
          )}
        </pre>
      </Typography>
    </div>
  );
};

/* istanbul ignore next */
export default UIConfig;

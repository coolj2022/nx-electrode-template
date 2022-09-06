import React from 'react';
import { Typography } from '@mui/material';

const PageNotFound = () => {
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
      <Typography style={{ color: 'red' }}>PAGE NOT FOUND</Typography>
    </div>
  );
};

export default PageNotFound;

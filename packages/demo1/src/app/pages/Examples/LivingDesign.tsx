import React from 'react';
import { Typography } from '@mui/material';

export const LivingDesign = () => {
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
      <Typography variant='h1' component='h2'>Living Design</Typography>
      <Typography variant='body1' component='div'>
        The subapp has living designs UI library integrated for design
        consistency across subapps and core. Check the Living Design
        Documentation test
        <a href='https://wmlink/ld3' target='_blank' rel='noreferrer'>
          here
        </a>
      </Typography>
    </div>
  );
};

/* istanbul ignore next */
export default LivingDesign;

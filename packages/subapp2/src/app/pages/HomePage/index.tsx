import React from 'react';
import { Typography } from '@mui/material';
import Cookies from 'electrode-cookies';
// import styles from './style.module.css';

export const HomePage = () => {
  let ssoUserInfo, userName;
  try {
    const ssoCred = Cookies.get('SSO_CRED');
    // render with user's credentials
    ssoUserInfo = JSON.parse(ssoCred || '{}');
    userName = ssoUserInfo ? ssoUserInfo.name : '';
  } catch (err) {
    console.log(err);
  }
  return (
    <div
      style={{
        textAlign: 'center',
        background: '#efefef',
        padding: '25px',
        margin: '50px',
      }}
    >
      <Typography className={styles['main']} variant="h3">
        Subapp2
      </Typography>
    </div>
  );
};

/* istanbul ignore next */
export default HomePage;

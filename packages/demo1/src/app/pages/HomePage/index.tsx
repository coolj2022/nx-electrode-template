import React from 'react';
import { Typography } from '@mui/material';
import Cookies from 'electrode-cookies';

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
      <Typography variant="h3">Welcome {userName},</Typography>
      <Typography variant="h3">Electrode SubApp Template2</Typography>
      <Typography variant="body1">
        Subapps represent a novel approach for developing web applications with
        electrode. At its core, a subapp is a component, and if React is used -
        a subapp is a React component. There are several advantages to creating
        a web application from subapps: Superior code isolation - conducive to
        development across multiple teams; Smaller initial payloads - loads
        through lazy-loadable subapps; Improved application scalability. Teams
        can use this page as starting point to their apps
      </Typography>
    </div>
  );
};

/* istanbul ignore next */
export default HomePage;

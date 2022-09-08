import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
/**
 * Example for routing. The core app has subapp entry routes defined in subapp-routes.json.
 * Below is an example of routing within subapp
 */
export const Routing = () => {
  let history = useHistory();
  const routeChange = (routeName) => {
    let path = routeName;
    history.push(path);
  };
  return (
    <div
      style={{
        textAlign: 'center',
        background: '#efefef',
        padding: '25px',
        margin: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography component="h3" fontWeight={700}>
        Nested Routing
      </Typography>
      <Typography variant="body1">
        This example explains how nested routing works withing subapps where
        core can have its own routing and subapp can have its own routing. You
        can refer to src/routes.js to add your sub app routes
      </Typography>
      <div
        style={{
          display: 'flex',
          width: '30%',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            routeChange('/link1');
          }}
          style={{ margin: '10px' }}
        >
          Load Dummy Component at link 1
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            routeChange('/link2');
          }}
          style={{ margin: '10px' }}
        >
          Load Dummy Component at link 2
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          width: '30%',
          justifyContent: 'center',
        }}
      ></div>
    </div>
  );
};

/* istanbul ignore next */
export default Routing;

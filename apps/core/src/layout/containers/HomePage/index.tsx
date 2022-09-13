/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { React } from '@xarc/react';
import { Route, Switch, Link } from 'react-router-dom';
import { useSelector } from '@xarc/react-redux';
import { Typography } from '@mui/material';

const Home = (props) => {
  const a = 'b';
  return (
    <Switch>
      <Route exact path="/home">
        <div
          style={{
            textAlign: 'center',
            paddingInline: '20%',
            paddingTop: '1%',
            wordWrap: 'break-word',
          }}
        >
          <Typography variant="h3" fontWeight={400}>
            Welcome Home
          </Typography>
        </div>
      </Route>
    </Switch>
  );
};

export default Home;

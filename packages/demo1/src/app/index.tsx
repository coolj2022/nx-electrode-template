import React from 'react';

import SideNav from './components/SideNav';
import Routes from './routes';

/**
import { Routes } from './routes';
 * App entry. Can replace the code below with actual Subapp code.
 */
export const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <SideNav />
      </div>
      <div style={styles.rightPanel}>
        <Routes />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  leftPanel: {
    width: '20%',
  },
  rightPanel: {
    width: '80%',
  },
};

/* istanbul ignore next */
export default App;

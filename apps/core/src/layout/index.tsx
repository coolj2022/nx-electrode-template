import React from 'react';
import { ReactSubApp, createDynamicComponent } from '@xarc/react';
import { reduxFeature, useDispatch } from '@xarc/react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'electrode-cookies';
import Home from './containers/HomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { subApp as demo1SubApp, reducers as demo1Reducers } from 'demo1';
import { Header, SideNav } from 'ui';
import menuData from '../common/menu';

const Demo1 = createDynamicComponent(demo1SubApp, { ssr: false });

const Layout = (props) => {
  const dispatch = useDispatch();
  let ssoUserInfo;
  useEffect(() => {
    try {
      const ssoCred = Cookies.get('SSO_CRED');
      ssoUserInfo = JSON.parse(ssoCred || '{}');
      console.log(ssoUserInfo);
      // dispatch(setUserInfo(ssoUserInfo));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [isNavOpened, setNavOpened] = useState(false);

  const handleNavOpen = (status) => {
    setNavOpened(status);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header isNavOpened={isNavOpened} onNavOpen={handleNavOpen} />
        <Container>
          <SideNav menuData={menuData} isNavOpened={isNavOpened} onNavOpen={handleNavOpen} position='left' />
          <Main>
            <Switch>
              <Redirect key='root-to-home' from='/' to='/home' exact />
              <Route path='/home'>
                <Home />
              </Route>
              {/* define additional routes here */}
              <Route path='/demo1'>
                <Demo1 />
              </Route>
            </Switch>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--header-height);
  min-height: calc(100vh - 1px);
`;

const Main = styled.main`
  background: #E5E5E5;
  flex: 1;
  width: 100%;
  @media (min-width: 1024px) {
    width: calc(100% - var(--side-nav1-width) - var(--side-nav2-width));
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% - var(--side-nav1-width));
  }
`;

export const reduxReducers = Object.assign({},
  // libReducers,
  demo1Reducers,
);

export const subapp: ReactSubApp = {
  Component: Layout,
  wantFeatures: [
    reduxFeature({
      React,
      shareStore: true,
      reducers: true, // true => read the reduxReducers export from this file
      prepare: async (initialState) => {
        return { initialState: initialState };
      },
    }),
  ],
};

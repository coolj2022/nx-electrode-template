import React from 'react';
import { createDynamicComponent } from '@xarc/react';
import { Switch, Route } from 'react-router-dom';
import DummyComponent from './pages/Examples/DummyComponent';
import LivingDesign from './pages/Examples/LivingDesign';
import Logging from './pages/Examples/Logging';
import ReduxDemo from './pages/Examples/Redux/index';
import Routing from './pages/Examples/Routing';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/NotFoundPage';
import { subApp as subapp1SubApp } from '@homeoffice-web/subapp1';

const Subapp1 = createDynamicComponent(subapp1SubApp, { ssr: false });

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/routing" component={Routing}></Route>
      <Route path="/ui-logging" component={Logging}></Route>
      <Route path="/living-design" component={LivingDesign}></Route>
      <Route path="/redux-demo" component={ReduxDemo}></Route>
      <Route path="/ui-config" component={Subapp1}></Route>
      <Route path="/link1">
        <DummyComponent dynamic={1} />
      </Route>
      <Route path="/link2">
        <DummyComponent dynamic={2} />
      </Route>
      <Route path="/*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;

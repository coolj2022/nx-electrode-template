import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createDynamicComponent } from '@xarc/react';
import DummyComponent from './pages/Examples/DummyComponent';
import LivingDesign from './pages/Examples/LivingDesign';
import Logging from './pages/Examples/Logging';
import ReduxDemo from './pages/Examples/Redux/index';
import Routing from './pages/Examples/Routing';
import UIConfig from './pages/Examples/UIConfig';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/NotFoundPage';

import { subApp as subapp1, reducers as subapp1Reducers } from 'subapp1';

const Subapp1 = createDynamicComponent(subapp1, { ssr: false });

const SubappRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/routing" element={<Routing />}></Route>
      <Route path="/subapp1" element={<Subapp1 />}></Route>
      <Route path="/ui-logging" element={<Logging />}></Route>
      <Route path="/living-design" element={<LivingDesign />}></Route>
      <Route path="/redux-demo" element={<ReduxDemo />}></Route>
      <Route path="/ui-config" element={<UIConfig />}></Route>
      <Route path="/link1" element={<DummyComponent dynamic={1} />} />
      <Route path="/link2" element={<DummyComponent dynamic={2} />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default SubappRoutes;

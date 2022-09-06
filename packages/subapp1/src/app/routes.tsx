import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createDynamicComponent } from '@xarc/react';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/NotFoundPage';

import { subApp as subapp2, reducers as subapp2Reducers } from 'subapp2';

const Subapp2 = createDynamicComponent(subapp2, { ssr: false });

const SubappRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/subapp2" element={<Subapp2 />}></Route>
      <Route path="/*">
        <PageNotFound />
      </Route>
    </Routes>
  );
};

export default SubappRoutes;

import { declareSubApp } from '@xarc/react';
export { reducers } from './app/pages/Examples/Redux/reducer';

export const subApp = declareSubApp({
  name: 'Subapp2',
  getModule: () => import('./main/subapp'),
});

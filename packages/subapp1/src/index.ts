import { declareSubApp } from '@xarc/react';

export const subApp = declareSubApp({
  name: 'Subapp1',
  getModule: () => import('./app/subApp'),
});

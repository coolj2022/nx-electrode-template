import { React, ReactSubApp } from '@xarc/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorFallback } from '../app/components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { errorHandler } from '../helpers/utils';
import App from '../app';

export const Component = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
      <App />
    </ErrorBoundary>
  );
};

export const subapp: ReactSubApp = {
  Component: (props) => {
    return (
      <BrowserRouter basename="/demo1">
        <Component {...props} />
      </BrowserRouter>
    );
  },
  wantFeatures: [],
};

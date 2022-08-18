import { React } from 'subapp-react';
import { Route } from 'react-router-dom';
import ClientSubApp from './LoadSubApp';

export const CustomRoutes = ({ data }) => {
  return (
    <>
      {data.map((dataItem) => {
        return (
          <Route path={dataItem.path}>
            <ClientSubApp dynamic name={dataItem.subappName} />
          </Route>
        );
      })}
    </>
  );
};

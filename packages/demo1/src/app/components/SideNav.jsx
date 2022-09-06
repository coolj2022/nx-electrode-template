import React from 'react';
import { useNavigate } from 'react-router-dom';
const SideNav = () => {
  let navigate = useNavigate();

  const routeChange = (routeName) => {
    let path = routeName;
    navigate(path);
    // sendEvent('Subapp template - Internal Route ', { routeName });
  };

  return (
    <>
      <ul>
        <li
          onClick={() => {
            routeChange('/home');
          }}
        >
          Home
        </li>

        <li
          onClick={() => {
            routeChange('/routing');
          }}
        >
          Routing
        </li>
        <li
          onClick={() => {
            routeChange('/ui-logging');
          }}
        >
          UI-Logging
        </li>
        <li
          onClick={() => {
            routeChange('/redux-demo');
          }}
        >
          Redux
        </li>
        <li
          onClick={() => {
            routeChange('/living-design');
          }}
        >
          Living design
        </li>
        <li
          onClick={() => {
            routeChange('/ui-config');
          }}
        >
          UI Configurations
        </li>
        <li
          onClick={() => {
            routeChange('/subapp1');
          }}
        >
          Subapp1
        </li>
      </ul>
    </>
  );
};

/* istanbul ignore next */
export default SideNav;

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
            routeChange('/subapp2');
          }}
        >
          Subapp2
        </li>
      </ul>
    </>
  );
};

/* istanbul ignore next */
export default SideNav;

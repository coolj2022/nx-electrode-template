import React from 'react';
import classNames from 'classnames';
import { Icon } from '@mui/material';
import { SubNavItemType } from './SubNavItem';

export type MainNavItemType = {
  name: string;
  icon: string;
  url: string;
  children?: SubNavItemType[];
};

export interface MainNavProps {
  menuData: MainNavItemType[];
  activeIdx: number;
  isNavOpened: boolean;
  onNavSelect: (idx: number) => void;
}

const MainNav = ({
  menuData,
  activeIdx,
  isNavOpened,
  onNavSelect,
}: MainNavProps) => {
  const handleMainNavClick = (idx: number) => () => {
    onNavSelect(idx);
  };

  return (
    <nav
      className={classNames('main-nav', {
        active: isNavOpened,
      })}
    >
      <ul>
        {menuData &&
          menuData.map((item, index) => (
            <li
              key={index}
              {...(index === activeIdx && { className: 'active' })}
            >
              <a className="nav-link" onClick={handleMainNavClick(index)}>
                <Icon fontSize="medium">{item.icon}</Icon>
              </a>
              <label>{item.name}</label>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MainNav;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';
import { Divider, Icon } from '@mui/material';
import { SubNavLinkParent } from './SubNavLinkParent';

export type SubNavItemType = {
  name?: string;
  icon?: string;
  url?: string;
  isParent?: boolean;
  type?: string;
  children?: SubNavItemType[];
};

export interface SubNavItemProps {
  item: SubNavItemType;
}

const SubNavItem = ({ item }: SubNavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (url: any) => (e: any) => {
    e.preventDefault();
    navigate(url);
  };

  return item.type === 'seperator' ? (
    <Divider />
  ) : item.children ? (
    <SubNavLinkParent item={item} />
  ) : (
    <li>
      <a
        className={classNames('nav-link', {
          active: item.url && location.pathname.indexOf(item.url) === 0,
        })}
        onClick={handleLinkClick(item.url)}
      >
        {item.icon && <Icon>{item.icon}</Icon>} {item.name}
      </a>
    </li>
  );
};

SubNavItem.defaultProps = {
  isActive: false,
};

export default SubNavItem;

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Divider, Icon } from '@mui/material';
import { SubNavLinkParent } from './SubNavLinkParent';
import { SubNavItemType } from '../../../common/types';

export interface SubNavItemProps {
  item: SubNavItemType;
};

const SubNavItem = ({ item }: SubNavItemProps) => {
  const history = useHistory();
  const location = useLocation();

  const handleLinkClick = (url) => (e) => {
    e.preventDefault();
    history.push(url);
  };

  return (
    item.type === 'seperator'
      ? <Divider />
      : (item.children ? (
          <SubNavLinkParent item={item} />
        ) : (
          <li>
            <a
              href='#'
              className={location.pathname.indexOf(item.url) === 0 ? 'active' : ''}
              onClick={handleLinkClick(item.url)}
            >
              {item.icon && <Icon>{item.icon}</Icon>} {item.name}
            </a>
          </li>
        )
      )
  );
};

SubNavItem.defaultProps = {
  isActive: false,
};

export default SubNavItem;

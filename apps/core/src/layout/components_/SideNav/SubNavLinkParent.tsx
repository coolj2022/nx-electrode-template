import React from 'react';
import { Icon } from '@mui/material';
import { SubNavItemType } from '../../../common/types';
import SubNav from './SubNav';

export interface SubNavLinkParentProps {
  item: SubNavItemType;
};

export const SubNavLinkParent = ({ item }: SubNavLinkParentProps) => {
  return (
    <>
      <span className='sub-nav-link-parent'>
        {item.icon &&
          <span className='nav-item-leading'>
            <Icon>{item.icon}</Icon>
          </span>
        }
        {item.name}
      </span>
      {item.children && <SubNav menuData={item.children} />}
    </>
  );
};

SubNavLinkParent.displayName = 'SubNavLinkParent';
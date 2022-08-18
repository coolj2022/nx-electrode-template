import React from 'react';
import SubNavItem from './SubNavItem';
import { SubNavItemType } from '../../../common/types';

export interface SubNavProps {
  menuData: SubNavItemType[];
};

const SubNav = ({ menuData }: SubNavProps) => {
  return (
    <div className='sub-nav'>
      <ul>
        {menuData.map(( item, index ) => (
          <SubNavItem
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubNav;

import React from 'react';
import SubNavItem, { SubNavItemType } from './SubNavItem';

export interface SubNavProps {
  menuData?: SubNavItemType[];
};

const SubNav = ({ menuData }: SubNavProps) => {
  return (
    <div className='sub-nav'>
      <ul>
        {menuData && menuData.map(( item, index ) => (
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

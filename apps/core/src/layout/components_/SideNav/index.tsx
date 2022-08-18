import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames';
import menuData from '../../../common/menu';
import { OverlayPosition } from '../../../common/types';
import MainNav from './MainNav';
import SubNav from './SubNav';
import './style.css';
import Overlay from '../../../common/components/Overlay';
import { findActiveNavIndex } from '../../../common/utils';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
}
const TabletAndBelow = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 1023 });
  return isNotMobile ? children : null;
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
}

export interface SideNavProps {
  position?: OverlayPosition;
  isNavOpened: boolean;
  onNavOpen: (status: boolean) => void;
};

const SideNav = ({ position, isNavOpened, onNavOpen }: SideNavProps) => {
  const location = useLocation();
  const [curNavIdx, setCurNavIdx] = useState(0);

  const handleNavSelect = (navIdx: number): void => {
    setCurNavIdx(navIdx);
    if (!isNavOpened) {
      onNavOpen(true);
    }
  };

  useEffect(() => {
    const navIdx = findActiveNavIndex(menuData, location.pathname);
    setCurNavIdx(navIdx === -1 ? 0 : navIdx);
    onNavOpen(false);
  }, [location]);

  return (
    <>
      <Default>
        <div className={classNames('nav-container', {
          [`pos-${position}`]: true,
        })}>
          <div className='nav-layer'>
            <MainNav
              menuData={menuData}
              activeIdx={curNavIdx}
              isNavOpened={isNavOpened}
              onNavSelect={handleNavSelect}
            />

            <Desktop>
              {menuData[curNavIdx] && menuData[curNavIdx].children && (
                <SubNav menuData={menuData[curNavIdx].children} />
              )}
            </Desktop>
          </div>
        </div>
      </Default>

      <TabletAndBelow>
        <Overlay
          isOpen={isNavOpened}
          className={classNames('nav-overlay', {
            [`pos-${position}`]: true,
          })}
          onClose={() => onNavOpen(false)}
        >
          <div className='nav-layer'>
            <MainNav
              menuData={menuData}
              activeIdx={curNavIdx}
              isNavOpened={isNavOpened}
              onNavSelect={handleNavSelect}
            />
            {menuData[curNavIdx] && menuData[curNavIdx].children && (
              <SubNav menuData={menuData[curNavIdx].children} />
            )}
          </div>
        </Overlay>
      </TabletAndBelow>
    </>
  );
};

SideNav.defaultProps = {
  position: 'left'
};

export default SideNav;

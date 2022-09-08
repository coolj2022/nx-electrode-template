/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MainNav from './MainNav';
import SubNav from './SubNav';
import { Overlay } from '../Overlay';
import './style.css';

type MediaQueryProps = {
  children: React.ReactNode;
};

const Desktop = ({ children }: MediaQueryProps): JSX.Element => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return <>{isDesktop && children}</>;
};
const TabletAndBelow = ({ children }: MediaQueryProps): JSX.Element => {
  const isNotMobile = useMediaQuery({ maxWidth: 1023 });
  return <>{isNotMobile && children}</>;
};
const Default = ({ children }: MediaQueryProps): JSX.Element => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return <>{isNotMobile && children}</>;
};

const hasActiveSubNav = (menus: SubNavItemType[], url: string): boolean => {
  return menus.some((item) => {
    const isActive = item.url && url.indexOf(item.url) === 0;
    if (isActive) return true;
    if (item.children) return hasActiveSubNav(item.children, url);
    return isActive;
  });
};

export const findActiveNavIndex = (
  menus: MainNavItemType[],
  url: string
): number => {
  const index = menus.findIndex(
    (item) => item.children && hasActiveSubNav(item.children, url)
  );
  return index;
};

export type MainNavItemType = {
  name: string;
  icon: string;
  url: string;
  children?: SubNavItemType[];
};

export type SubNavItemType = {
  name?: string;
  icon?: string;
  url?: string;
  isParent?: boolean;
  type?: string;
  children?: SubNavItemType[];
};

export type SideNavPosition = 'left' | 'right';

export interface SideNavProps {
  position?: SideNavPosition;
  isNavOpened: boolean;
  onNavOpen: (status: boolean) => void;
  menuData: MainNavItemType[];
}

const SideNav = ({
  position,
  isNavOpened,
  onNavOpen,
  menuData,
}: SideNavProps) => {
  const location = useLocation();
  const [curNavIdx, setCurNavIdx] = useState(0);

  const handleNavSelect = (navIdx: number): void => {
    setCurNavIdx(navIdx);
    if (!isNavOpened) {
      onNavOpen(true);
    }
  };

  useEffect(() => {
    if (location) {
      const navIdx = findActiveNavIndex(menuData, location.pathname);
      setCurNavIdx(navIdx === -1 ? 0 : navIdx);
    }
    onNavOpen(false);
  }, [location]);

  return (
    <>
      <Default>
        <div className={`nav-container ${position}`}>
          <div className={`nav-layer ${position}`}>
            <MainNav
              menuData={menuData}
              activeIdx={curNavIdx}
              isNavOpened={isNavOpened}
              onNavSelect={handleNavSelect}
            />

            <Desktop>
              {menuData &&
                menuData[curNavIdx] &&
                menuData[curNavIdx].children && (
                  <SubNav menuData={menuData[curNavIdx].children} />
                )}
            </Desktop>
          </div>
        </div>
      </Default>

      <TabletAndBelow>
        <Overlay isOpen={isNavOpened} onClose={() => onNavOpen(false)}>
          <div className={`nav-layer ${position}`}>
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
  position: 'left',
  isNavOpened: false,
  menuData: [],
  onNavOpen: () => {},
};

export default SideNav;

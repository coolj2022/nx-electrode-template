import { MainNavItemType, SubNavItemType } from './types';

export const findActiveNavIndex = (menus: MainNavItemType[], url: string) => {
  const index = menus.findIndex(item => item.children && hasActiveSubNav(item.children, url));
  return index;
}

const hasActiveSubNav = (menus: SubNavItemType[], url: string) => {
  return menus.some(item => {
    const isActive = item.url && url.indexOf(item.url) === 0;
    if (isActive) return true;
    if (item.children) return hasActiveSubNav(item.children, url);
    return isActive;
  });
}

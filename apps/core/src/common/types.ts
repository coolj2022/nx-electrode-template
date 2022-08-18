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

export type OverlayPosition = 'left' | 'right';
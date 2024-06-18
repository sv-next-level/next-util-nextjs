export interface NavItem {
  title: string;
  href?: string;
  label?: string;
  variant?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: JSX.Element;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface SidebarItem {
  title: string;
  url?: string;
  icon?: React.ComponentType;
  children?: SidebarItem[];
}

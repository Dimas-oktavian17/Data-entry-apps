interface MenuItem {
 icon: string;
 label: string;
 route: string;
 children?: [{
  label: string;
  route: string;
 }];
}
export interface MenuGroup {
 name: string;
 menuItems: MenuItem[];
}

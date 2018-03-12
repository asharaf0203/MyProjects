export interface INavigationMenuItem {
  parent?: string;
  path: string;
  title: string;
  icon: string;
  children: INavigationMenuItem[];
}

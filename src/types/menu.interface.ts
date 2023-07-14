export interface FirstLevelMenuItem {
  route: FirstLevelMenuRoute;
  // name: FirstLevelMenuName;
  secondLevel?: [SecondLevelMenuItem];
}

export interface SecondLevelMenuItem {
  route: string;
  // name: string;
  parent: FirstLevelMenuRoute;
}

export enum FirstLevelMenuRoute {
  "home",
  "events",
  "projects",
  "locations",
  "peoples",
  "blog",
  "edm-box",
}

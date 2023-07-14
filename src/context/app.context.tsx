import { createContext, PropsWithChildren, useState } from "react";
import { FirstLevelMenuItem, FirstLevelMenuRoute } from "../types/menu.interface";

export interface IAppContext {
  menu: FirstLevelMenuItem[];
  firstCategory: FirstLevelMenuRoute;
  setMenu?: (newMenu: FirstLevelMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: FirstLevelMenuRoute.home });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<FirstLevelMenuItem[]>(menu);
  const setMenu = (newMenu: FirstLevelMenuItem[]) => {
    setMenuState(newMenu);
  };

  return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>;
};

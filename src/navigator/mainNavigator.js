import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile176106Navigator from '../features/UserProfile176106/navigator';
import Maps175973Navigator from '../features/Maps175973/navigator';
import Additem175972Navigator from '../features/Additem175972/navigator';
import Maps175968Navigator from '../features/Maps175968/navigator';
import UserProfile175964Navigator from '../features/UserProfile175964/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile176106: { screen: UserProfile176106Navigator },
Maps175973: { screen: Maps175973Navigator },
Additem175972: { screen: Additem175972Navigator },
Maps175968: { screen: Maps175968Navigator },
UserProfile175964: { screen: UserProfile175964Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

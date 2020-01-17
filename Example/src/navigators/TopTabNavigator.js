import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import HomeComponent from '../screen/HomeComponent';
import PromotionComponent from '../screen/PromotionComponent';
import TransactionHistoryComponent from '../screen/TransactionHistoryComponent';
import MyWalletComponent from '../screen/MyWalletComponent';

let routeConfigs = {
  Home: {
    screen: HomeComponent,
  },
  Promotion: {
    screen: PromotionComponent,
  },
  Transaction: {
    screen: TransactionHistoryComponent,
  },
  MyWallet: {
    screen: MyWalletComponent,
  },
};

let tabNavigatorConfig = {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10,
    },
  },
  order: ['Home', 'Promotion', 'Transaction', 'MyWallet'],
};

export const TopTabNavigator = createMaterialTopTabNavigator(
  routeConfigs,
  tabNavigatorConfig,
);

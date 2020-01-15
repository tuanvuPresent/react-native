import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeDrawerComponent from '../components/HomeDrawerComponent';
import ScanCodeComponent from '../components/ScanCodeComponent';
import WithdrawalComponent from '../components/WithdrawalComponent';
import PaymentCodeComponent from '../components/PaymentCodeComponent';

const {height, width} = Dimensions.get('window');
let routeConfigs = {
  Home: {
    screen: HomeDrawerComponent,
  },
  ScanCode: {
    screen: ScanCodeComponent,
  },
  Withdrawal: {
    screen: WithdrawalComponent,
  },
  PaymentCode: {
    screen: PaymentCodeComponent,
  },
};
let drawerNavigatorConfig = {
  initialRouteName: 'Home',
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red',
  },
  order: ['Home', 'Withdrawal', 'PaymentCode', 'ScanCode'],
};
export const DrawerNavigator = createDrawerNavigator(
  routeConfigs,
  drawerNavigatorConfig,
);

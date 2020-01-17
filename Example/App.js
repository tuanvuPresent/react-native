import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {TabNavigator} from './src/navigators/TabNavigatorComponent';
import {DrawerNavigator} from './src/navigators/DrawerNavigator';
import {TopTabNavigator} from './src/navigators/TopTabNavigator';

const App = createAppContainer(DrawerNavigator);

export default App;

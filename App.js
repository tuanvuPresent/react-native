import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {DrawerNavigator} from './src/navigators/DrawerNavigator';
import {DemoTab} from "./src/demo/navigator/DemoTabNavigator";
import {DemoStackNavigator} from "./src/demo/navigator/DemoStackNavigator";
import {DemoDrawerNavigator} from "./src/demo/navigator/DemoDrawerNavigator";
import {DemoTopTab} from "./src/demo/navigator/DemoTopTabNavigator";

const App = createAppContainer(DrawerNavigator);

export default App;

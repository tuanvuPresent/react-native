import {createStackNavigator} from "react-navigation-stack";
import Screen1 from "../screen/Screen1";
import Screen2 from "../screen/Screen2";
import Screen3 from "../screen/Screen3";

export const DemoStackNavigator = createStackNavigator(
    {
        screen1: {
            screen: Screen1,
            navigationOptions: {
                title: 'screen1',
                headerStyle: {
                    backgroundColor: '#beffb7',
                },
                headerTintColor: '#000000',
            }
        },
        screen2: {
            screen: Screen2,
            navigationOptions: {
                title: 'screen2',
                headerStyle: {
                    backgroundColor: '#beffb7',
                },
                headerTintColor: '#000000',
            }
        },
        screen3: {
            screen: Screen3,
            navigationOptions: {
                title: 'screen3',
                headerStyle: {
                    backgroundColor: '#beffb7',
                },
                headerTintColor: '#000000',
            }
        },
    }
);

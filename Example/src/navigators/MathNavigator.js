import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListTestScreen from "../screen/ListTestScreen";
import GridMenuSection from "../screen/GridMenuSection";
import ListQuestionScreen from "../screen/ListQuestionScreen";


export const RootStack = createStackNavigator({
    Math: {
        screen: GridMenuSection,
        navigationOptions: {
            title: 'Math',
            headerStyle: {
                backgroundColor: '#beffb7',
            },
            headerTintColor: '#000000',
        }
    },
    ListTest: {
        screen: ListTestScreen,
        navigationOptions: {
            title: 'List Test',
            headerStyle: {
                backgroundColor: '#beffb7',
            },
            headerTintColor: '#000000',
        }
    },
    ListQuestion: {
        screen: ListQuestionScreen,
        navigationOptions: {
            title: 'List Question',
            headerStyle: {
                backgroundColor: '#beffb7',
            },
            headerTintColor: '#000000',
        }
    }
});

export const AppStack = createAppContainer(RootStack);

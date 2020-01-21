import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListTestScreen from "../screen/ListTestScreen";
import GridMenuSection from "../screen/GridMenuSectionExam";
import ListQuestionScreen from "../screen/ListQuestionScreen";
import DemoSectionFlatList from "../demo/screen/SectionFlatList";
import {DemoSnackbar} from "../demo/screen/DemoSackbar";
import DemoPages from "../demo/screen/DemoPages";
import DemoRadioButton from "../demo/screen/DemoRadioButton";


export const RootStack = createStackNavigator({
    Math: {
        screen: GridMenuSection,
        navigationOptions: {
            title: 'Math',
            headerStyle: {
                backgroundColor: '#beffb7',
            },
            headerTintColor: '#000000',
            // headerShown: false,
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
            // headerShown: false,
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
            // headerShown: false,
        }
    }
}, {
    initialRouteName: 'Math',
});

export const AppStack = createAppContainer(RootStack);

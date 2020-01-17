//import react in our code.
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeDrawerComponent from '../screen/HomeDrawerComponent';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HeaderComponent from "../components/HeaderComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import MathScreen from "../screen/MathScreen";
import CustomDrawComponent from "./CustomDrawComponent";


const FirstActivity_StackNavigator = createStackNavigator({
    Home: {
        screen: HomeDrawerComponent,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerLeft: <HeaderComponent navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});
const SecondActivity_StackNavigator = createStackNavigator({
    Math: {
        screen: MathScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Math',
            headerLeft: <HeaderComponent navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    }
});

export const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerIcon: () => (
                    <Icon name="home" size={25} color="#900"/>
                )
            })
        },
        Math: {
            screen: SecondActivity_StackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerIcon: () => (
                    <Icon name="book" size={25} color="#900"/>
                )
            })
        },
    }, {
        contentComponent: CustomDrawComponent
    }
);

export default createAppContainer(DrawerNavigator);

import {createDrawerNavigator} from "react-navigation-drawer";
import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import Screen3 from "../screen/Screen3";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomDrawerComponent from "../component/CustomDrawerComponent";
import DemoGridView from "../screen/DemoGridView";
import DemoSectionGrid from "../screen/DemoSectionGrid";

const FirstActivity_StackNavigator = createStackNavigator({
    screen1: {
        screen: DemoGridView,
        navigationOptions: ({navigation}) => ({
            title: 'screen1',
            headerLeft: <HeaderComponent navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const SecondActivity_StackNavigator = createStackNavigator({
    screen2: {
        screen: DemoSectionGrid,
        navigationOptions: ({navigation}) => ({
            title: 'screen2',
            headerLeft: <HeaderComponent navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const ThirdActivity_StackNavigator = createStackNavigator({
    screen3: {
        screen: Screen3,
        navigationOptions: ({navigation}) => ({
            title: 'screen3',
            headerLeft: <HeaderComponent navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});
export const DemoDrawerNavigator = createDrawerNavigator(
    {
        screen1: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerIcon: () => (
                    <Icon name="home" size={25} color="#900"/>
                )
            })
        },
        screen2: {
            screen: SecondActivity_StackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerIcon: () => (
                    <Icon name="book" size={25} color="#900"/>
                )
            })
        },
        screen3: {
            screen: ThirdActivity_StackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerIcon: () => (
                    <Icon name="star" size={25} color="#900"/>
                )
            })
        },
    }, {
        contentComponent: CustomDrawerComponent
    }
);

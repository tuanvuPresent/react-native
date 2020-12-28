import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Screen2 from "../screen/Screen2";
import Screen1 from "../screen/Screen1";
import Screen3 from "../screen/Screen3";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export const DemoTopTab = createMaterialTopTabNavigator(
    {
        screen1: {
            screen: Screen1,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" size={25} color="#900"/>
                )
            }
        },
        screen2: {
            screen: Screen2,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="etsy" size={25} color="#900"/>
                )
            },
        },
        screen3: {
            screen: Screen3,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="book" size={25} color="#900"/>
                )
            },
        },
    }
);

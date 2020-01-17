import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {DrawerItems} from "react-navigation-drawer";

export default class CustomDrawComponent extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

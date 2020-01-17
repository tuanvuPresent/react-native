import React, {Component} from 'react';
import {View} from 'react-native';
import {AppStack} from "../navigators/MathNavigator";

export default class MathScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <AppStack/>
            </View>
        );
    }
}

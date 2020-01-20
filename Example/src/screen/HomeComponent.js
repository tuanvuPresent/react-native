import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#297220',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    This is My Home Screen
                </Text>
            </View>
        );
    }
}

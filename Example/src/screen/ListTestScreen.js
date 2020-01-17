import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";

class ListTestScreen extends Component {
    render() {
        return (
            <View>
                <Text>List Test</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('ListQuestion');
                }}>
                    <Text style={{color: 'red'}}>Start</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListTestScreen;

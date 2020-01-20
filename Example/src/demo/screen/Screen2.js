import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

class Screen2 extends Component {
    render() {
        return (
            <View>
                <Text>
                    Screen 2
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('screen3')
                }}>
                    <Text>
                        go to screen 3
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default Screen2;

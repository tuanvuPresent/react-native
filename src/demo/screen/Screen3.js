import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";


class Screen3 extends Component {
    render() {
        return (
            <View>
                <Text>
                    Screen 3
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('screen1')
                }}>
                    <Text>
                        go to screen 1
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default Screen3;

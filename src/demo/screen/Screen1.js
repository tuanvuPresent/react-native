import React, {Component} from "react";
import {Text, TouchableOpacity, View, Button} from "react-native";

class Screen1 extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red'}}>
                <Text>
                    Screen 1
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('screen2')
                }}>
                    <Text>
                        go to screen 2
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default Screen1;

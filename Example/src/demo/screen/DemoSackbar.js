import Snackbar from "react-native-snackbar";
import React, {Component} from "react";
import {Alert, TouchableOpacity} from "react-native";

export class DemoSnackbar extends Component {
    render() {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={() => {
                Snackbar.show({
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        text: 'message',
                        onPress: () => {
                            Alert.alert('message')
                        },
                    },
                });
            }}>
            </TouchableOpacity>
        )
    }
}

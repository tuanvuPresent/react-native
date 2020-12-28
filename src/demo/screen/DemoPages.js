import Pages from "react-native-pages/src/components/pages";
import React, {Component} from "react";
import {View, Text} from "react-native";

export default class DemoPages extends Component {
    render() {
        return (
            <Pages rtl={true}>
                <View>
                    <Text>
                        Page 1
                    </Text>
                </View>
                <View>
                    <Text>
                        Page 2
                    </Text>
                </View>
                <View>
                    <Text>
                        Page 3
                    </Text>
                </View>
            </Pages>
        )
    }
}

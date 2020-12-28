import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

const data = [
    {
        label: 'Default value is same as label',
    },
    {
        label: 'Value is different',
        value: "I'm not same as label",
    },
    {
        label: 'Color',
        color: 'green',
    },
    {
        disabled: true,
        label: 'Disabled',
    },
    {
        label: 'Size',
        size: 32,
    },
];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '1110',
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.valueText}>
                    Value = {this.state.selected}
                </Text>
                <RadioGroup
                    radioButtons={data}
                    onPress={(value) => {
                        let selectedButton = value.find(e => e.selected === true);
                        console.log(selectedButton.value)
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueText: {
        fontSize: 18,
        marginBottom: 50,
    },
});

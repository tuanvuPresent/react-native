import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";


let listTest = [
    {key: 'test 1'},
    {key: 'test 2'},
    {key: 'test 3'},
    {key: 'test 4'},
    {key: 'test 5'},
];

class ListTestScreen extends Component {
    showQuestion() {
        this.props.navigation.navigate('ListQuestion');
    }

    render() {
        return (
            <View>
                <FlatList
                    data={listTest}
                    renderItem={
                        ({item}) =>
                            <TouchableOpacity onPress={() => {
                                this.showQuestion()
                            }}>
                                <Text>{item.key}</Text>
                            </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

export default ListTestScreen;

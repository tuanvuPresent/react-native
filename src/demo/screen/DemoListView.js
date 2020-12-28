import React, {Component} from "react";
import {FlatList, Text} from "react-native";

let listTest = [
    {key: 'test 1'},
    {key: 'test 2'},
    {key: 'test 3'},
    {key: 'test 4'},
    {key: 'test 5'},
];

export default class DemoListView extends Component {
    render() {
        return (
            <FlatList
                data={listTest}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        )
    }
}

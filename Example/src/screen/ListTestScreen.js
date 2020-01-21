import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";


let listTest = [
    {key: 'test 1'},
    {key: 'test 2'},
    {key: 'test 3'},
    {key: 'test 4'},
    {key: 'test 5'},
    {key: 'test 6'},
    {key: 'test 7'},
    {key: 'test 8'},
    {key: 'test 9'},
    {key: 'test 10'},
    {key: 'test 11'},
    {key: 'test 12'},
    {key: 'test 13'},
    {key: 'test 14'},
    {key: 'test 15'},
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
                                <Text style={styles.text}>{item.key}</Text>
                            </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

export default ListTestScreen;


const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5
    },
});

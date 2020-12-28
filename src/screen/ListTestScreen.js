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

class ItemTest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.item.key}</Text>
            </View>
        )
    }

}

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
                                <ItemTest item={item}/>
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
        paddingLeft: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

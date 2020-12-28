import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';

export default class DemoGridMenuSection extends Component {
    render() {
        const items = [
            {name: 'one', code: '#1abc9c'}, {name: 'two', code: '#2ecc71'},
            {name: 'three', code: '#3498db'}, {name: 'four', code: '#9b59b6'},
            {name: 'five', code: '#34495e'}, {name: 'six', code: '#16a085'},
            {name: 'seven', code: '#27ae60'}, {name: 'eight', code: '#2980b9'},
            {name: 'nine', code: '#8e44ad'}, {name: 'ten', code: '#2c3e50'},
        ];
        return (
            <SectionGrid
                sections={[
                    {
                        title: 'section 1',
                        data: items.slice(0, 5),
                    },
                    {
                        title: 'section 2',
                        data: items.slice(5, 10),
                    },
                ]}
                style={styles.gridView}
                renderItem={({item, section, index}) => (
                    <TouchableOpacity onPress={() => {
                        Alert.alert(item.name)
                    }}>
                        <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#2b4f72',
        color: 'white',
        padding: 10,
    },
});

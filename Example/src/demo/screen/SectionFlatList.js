import React, {Component} from 'react';
import {Alert, Platform, SectionList, StyleSheet, Text, View} from 'react-native';

export default class DemoSectionFlatList extends Component {
    GetSectionListItem = item => {
        Alert.alert(item);
    };

    render() {
        const DATA = [
            {
                title: 'Section Head For Data A',
                data: [
                    {'id': '1', 'value': 'AA'},
                    {'id': '2', 'value': 'BB'},
                    {'id': '3', 'value': 'CC'}]
            },
            {
                title: 'Section Head For Data B',
                data: [
                    {'id': '4', 'value': 'Benin'}, {'id': '5', 'value': 'Bhutan'},
                    {'id': '6', 'value': 'Bosnia'}, {'id': '7', 'value': 'Botswana'},
                    {'id': '8', 'value': 'Brazil'}, {'id': '9', 'value': 'Brunei'},
                    {'id': '10', 'value': 'Bulgaria'},]
            },
            {
                title: 'Section Head For Data C',
                data: [
                    {'id': '11', 'value': 'Cambodia'},
                    {'id': '12', 'value': 'Cameroon'},
                    {'id': '13', 'value': 'Canada'},
                    {'id': '14', 'value': 'Cabo'}]
            }
        ];
        return (
            <View style={{marginTop: Platform.OS == 'ios' ? 20 : 30}}>
                <SectionList
                    sections={DATA}
                    renderSectionHeader={({section}) => (
                        <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
                    )}
                    renderItem={({item}) => (
                        <Text
                            style={styles.SectionListItemStyle}
                            onPress={this.GetSectionListItem.bind(this,
                                'Id: ' + item.id + ' Name: ' + item.value)}>
                            {item.value}
                        </Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        SectionHeaderStyle: {
            backgroundColor: '#CDDC89',
            fontSize: 20,
            padding: 5,
            color: '#fff',
        },
        SectionListItemStyle: {
            fontSize: 15,
            padding: 15,
            color: '#000',
            backgroundColor: '#F5F5F5',
        },
    });

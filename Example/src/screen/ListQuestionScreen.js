import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const data = [
    {
        id: '1',
        content: 'Question 1',
        answer: [
            {
                content: 'A'
            },
            {
                content: 'B'
            },
            {
                content: 'C'
            }
        ]
    },
    {
        id: '2',
        content: 'Question 2',
        answer: [
            {
                content: 'A'
            },
            {
                content: 'B'
            },
            {
                content: 'C'
            }
        ]
    },
    {
        id: '3',
        content: 'Question 3',
        answer: [
            {
                content: 'A'
            },
            {
                content: 'B'
            },
            {
                content: 'C'
            }
        ]
    },
    {
        id: '4',
        content: 'Question 4',
        answer: [
            {
                content: 'A'
            },
            {
                content: 'B'
            },
            {
                content: 'C'
            }
        ]
    },
    {
        id: '5',
        content: 'Question 5',
        answer: [
            {
                content: 'A'
            },
            {
                content: 'B'
            },
            {
                content: 'C'
            }
        ]
    }
];

class ItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const list = [...this.props.item.answer];
        list.map((item) => {
            item.label = item.content;
        });
        return (
            <View style={{margin: 20}}>
                <Text style={styles.TextComponentStyle}>{this.props.item.content}</Text>
                <RadioForm
                    // selectedLabelColor={'red'}
                    radio_props={this.props.item.answer}
                    onPress={(value, index) => {
                        console.log(index)
                    }}
                />
            </View>
        );
    }
}

export default class ListQuestionScreen extends Component {

    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={
                        ({item}) => {
                            return (
                                <ItemComponent item={item}>
                                </ItemComponent>
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    TextComponentStyle: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FF5722',
        padding: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 2
    }
});

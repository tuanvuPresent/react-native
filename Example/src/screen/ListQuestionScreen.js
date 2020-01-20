import React, {Component} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import Pages from "react-native-pages/src/components/pages";

let listTest = [
    {key: 'test 1'},
    {key: 'test 2'},
    {key: 'test 3'},
    {key: 'test 4'},
    {key: 'test 5'},
];

// export default class DemoPages extends Component {
//     render() {
//         return (
//             <Pages rtl={true}>
//                 <Text>screen 1</Text>
//                 <Text>screen 2</Text>
//                 <Text>screen 3</Text>
//             </Pages>
//         )
//     }
//
// }
class ItemComponent extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {

                }}>
                    <Text>{this.props.item.key}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class ListQuestionScreen1 extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={listTest}
                    renderItem={
                        ({item}) => {
                            return (
                                <ItemComponent item={item}>
                                </ItemComponent>
                            )
                        }
                    }
                />
            </View>
        );
    }
};

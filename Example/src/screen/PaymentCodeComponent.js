import React, {Component} from 'react';
import {Button, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class PaymentCodeComponent extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Payment';
        let drawerIcon = ({tintColor}) => (
            <Icon name="shopping-cart" size={25} color="#900"/>
        );
        return {drawerLabel, drawerIcon};
    };
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Go to Home"
                />
            </View>
        );
    }
}

import React, {Component} from 'react';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WithdrawalComponent extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Withdrawal';
        let drawerIcon = ({tintColor}) => (
            <Icon name="pencil-square" size={25} color="#900"/>
        );
        return {drawerLabel, drawerIcon};
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Home')}
                title="Go to Home"
            />
        );
    }
}

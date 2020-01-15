import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MyWalletComponent extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    let tabBarLabel = 'Wallet';
    let tabBarIcon = ({tintColor}) => (
      <Icon name="bank" size={25} color="#900" />
    );
    return {tabBarLabel, tabBarIcon};
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#007256',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
          This is My Wallet Screen
        </Text>
      </View>
    );
  }
}

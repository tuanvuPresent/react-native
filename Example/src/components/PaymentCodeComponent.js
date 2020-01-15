import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PaymentCodeComponent extends Component {
  static navigationOptions = ({navigation}) => {
    let drawerLabel = 'Payment';
    let drawerIcon = ({tintColor}) => (
      <Icon name="shopping-cart" size={25} color="#900" />
    );
    return {drawerLabel, drawerIcon};
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderComponent {...this.props} />
        <View
          style={{
            flex: 1,
            backgroundColor: '#964f8e',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
            This is Payment Code Screen
          </Text>
        </View>
      </View>
    );
  }
}

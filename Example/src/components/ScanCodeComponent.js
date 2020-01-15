import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ScanCodeComponent extends Component {
  static navigationOptions = ({navigation}) => {
    let drawerLabel = 'ScanCode';
    let drawerIcon = () => <Icon name="search" size={25} color="#900" />;
    return {drawerLabel, drawerIcon};
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderComponent {...this.props} />
        <View
          style={{
            flex: 1,
            backgroundColor: '#007256',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
            This is Scan Code Screen
          </Text>
        </View>
      </View>
    );
  }
}

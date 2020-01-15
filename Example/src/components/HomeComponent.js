import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';

export default class HomeComponent extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    let tabBarLabel = 'Home';
    let tabBarIcon = ({tintColor}) => (
      <Icon name="home" size={25} color="#900" />
    );
    return {tabBarLabel, tabBarIcon};
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#297220',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
          This is My Home Screen
        </Text>
      </View>
    );
  }
}

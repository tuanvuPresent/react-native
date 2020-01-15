import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class PromotionComponent extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    let tabBarLabel = 'Promotion';
    let tabBarIcon = ({tintColor}) => (
      <Icon name="plane" size={25} color="#900" />
    );
    return {tabBarLabel, tabBarIcon};
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#e97600',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
          This is Promotion Screen
        </Text>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
// đưa tab vào page Home, nên chỉ có trang Home mới xuất hiện tab
import {AppTab} from '../navigators/TabNavigatorComponent';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
  static navigationOptions = ({navigation}) => {
    let drawerLabel = 'Home';
    let drawerIcon = ({tintColor}) => (
      <Icon name="home" size={25} color="#900" />
    );
    return {drawerLabel, drawerIcon};
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <HeaderComponent {...this.props} />
        <AppTab />
      </View>
    );
  }
}

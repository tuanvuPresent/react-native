import React, {Component} from 'react';
import {View, Image, TouchableHighlight} from 'react-native';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableHighlight
          style={{marginLeft: 10, marginTop: 10}}
          onPress={() => this.props.navigation.openDrawer()}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/menu.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

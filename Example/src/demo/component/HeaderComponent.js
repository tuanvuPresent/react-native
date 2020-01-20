import React, {Component} from 'react';
import {Image, TouchableHighlight, View} from 'react-native';

export default class HeaderComponent extends Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

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
                    onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('../../assets/menu.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

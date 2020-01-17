import React, {Component} from 'react';
import {View} from 'react-native';
// đưa tab vào page Home, nên chỉ có trang Home mới xuất hiện tab
import {AppTab} from '../navigators/TabNavigatorComponent';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'green'
                }}>
                <AppTab/>
            </View>
        );
    }
}

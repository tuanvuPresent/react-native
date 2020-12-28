import React, {Component} from "react";
import CountDown from 'react-native-countdown-component';
import {View} from "react-native";

export default class DemoCountDown extends Component {
    constructor(props) {
        super(props);
    }

    onFinish() {
        alert('Finished')
    }

    render() {
        return (
            <View>
                <CountDown
                    size={20}
                    until={60}
                    onFinish={() => this.onFinish()}
                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                    digitTxtStyle={{color: '#1CC625'}}
                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                    separatorStyle={{color: '#1CC625'}}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{m: null, s: null}}
                    showSeparator
                />
            </View>
        )
    }

}

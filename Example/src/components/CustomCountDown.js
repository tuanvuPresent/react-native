import React, {Component} from "react";
import CountDown from 'react-native-countdown-component';

export default class CustomCountDown extends Component {
    onFinish() {
        alert('Finished')
    }

    render() {
        return (
            <CountDown
                size={16}
                until={this.props.time}
                onFinish={() => this.onFinish()}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                digitTxtStyle={{color: '#1CC625'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: '#1CC625'}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
            />
        )
    }

}

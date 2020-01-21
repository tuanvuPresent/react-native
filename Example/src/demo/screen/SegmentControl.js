import React, {Component} from 'react';
import {View} from 'react-native';
import {SegmentedControls} from 'react-native-radio-buttons'

export default class DemoSegmentControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '1'
        }
    }

    render() {
        function setSelectedOption(selectedOption) {
            this.setState({
                selectedOption
            });
            console.log(selectedOption.value)
        }

        return (
            <View style={{margin: 20}}>

                <SegmentedControls
                    direction={'column'}
                    options={radioGroupList}
                    onSelection={setSelectedOption.bind(this)}
                    selectedOption={this.state.selectedOption}
                    extractText={(option) => option.value}
                />
            </View>);
    }
}

const radioGroupList = [{
    label: 'Car',
    value: 'transport_car'
}, {
    label: 'Bike',
    value: 'transport_bike'
}, {
    label: 'Bus',
    value: 'transport_bus'
}];

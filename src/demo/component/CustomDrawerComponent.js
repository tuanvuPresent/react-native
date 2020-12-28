import React, {Component} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {DrawerItems} from "react-navigation-drawer";

export default class CustomDrawerComponent extends Component {
    render() {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <ImageBackground source={require('../../assets/backgroud.jpg')}
                                     style={{flex: 1, width: 280, justifyContent: 'center'}}>
                    </ImageBackground>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props}/>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle: {
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    }
});

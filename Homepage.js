import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapScreen from './MapScreen'

export default class Homepage extends React.Component{
    
    render() {
        return(
            <View>
                <MapScreen />
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });
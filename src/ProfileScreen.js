import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function ProfileScreen(props){
    console.log('PROFILE',props)
    return(
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 40}}>Profile Page</Text>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });
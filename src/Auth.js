import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Login from './Login.js'

export default function Auth(props) {

    return(
        <View style={styles.container}>
            <Login />
            <Button title='login' onPress={() => props.navigation.navigate('Homepage')}/>    
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
        },   
    });
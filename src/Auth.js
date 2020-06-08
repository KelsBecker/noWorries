import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Login from './Login.js'

export default function Auth(props) {
    return(
        <View style={styles.container}>
            <Login emailChange={props.handleEmailChange} passwordChange={props.handlePasswordChange} />
            <Button title='login' onPress={() => props.currentUser !== undefined ? props.props.navigation.navigate('Homepage', {currentUser: props.currentUser}): null}/>    
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
import React from 'react';
import {StyleSheet, View, Button, ImageBackground, Text, Image} from 'react-native';
import Login from './Login.js'
// import sunshine from './assets/sunshine copy.png'

export default function Auth(props) {
    return(
        <View style={styles.container}>
            <Image style={{height: 220, width: 220}} source={require('../assets/sunshine.png')}/>
            <Login emailChange={props.handleEmailChange} passwordChange={props.handlePasswordChange} email={props.email} password={props.password} />
            <Button title='login' onPress={() => props.currentUser !== undefined ? props.navigation.navigate('Homepage'): alert('Looks like you have a typo! Double check your email address please!')}/>
            <Text style={{fontFamily: 'PingFangHK-Semibold'}}>Don't Have an Account Yet?</Text>
            <Button title='sign up'></Button>  
        </View>
    )
}

    const styles = StyleSheet.create({
        background: {
            width: '100%',     
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            backgroundColor: '#00BFFF'
        },   
    });
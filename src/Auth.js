import React from 'react';
import {StyleSheet, View, Button, ImageBackground, Text, Image} from 'react-native';
import Login from './Login.js'


export default function Auth(props) {
    return(
        <View style={styles.container}>
            <Image style={{height: 215, width: 215}} source={require('../assets/sunny.png')}/>
            <Login emailChange={props.handleEmailChange} passwordChange={props.handlePasswordChange} email={props.email} password={props.password} />
            <Button title='login' onPress={() => props.currentUser !== undefined ? props.navigation.navigate('Homepage'): alert('Looks like you have a typo! Double check your email address please!')}/>
            <Text style={{fontFamily: 'PingFangHK-Semibold', color: 'darkblue'}}>Don't have an account yet?</Text>
            <Button title='sign up' style={{color: 'darkblue'}} onPress={() => props.navigation.navigate('SignUp')}></Button>  
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
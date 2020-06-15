import React from 'react';
import {StyleSheet, View, Button, ImageBackground} from 'react-native';
import Login from './Login.js'

export default function Auth(props) {
    return(
        <ImageBackground style={{flex: 1, width:'100%'}} source={{uri:'https://yada.org/wp-content/uploads/2018/10/light-blue-moving-circles-psychedelic-abstract-vj-background-loop_vk0mp0fsx__F0000.png'}}>
            <View style={styles.container}>
                <Login emailChange={props.handleEmailChange} passwordChange={props.handlePasswordChange} />
                <Button title='login' onPress={() => props.currentUser !== undefined ? props.navigation.navigate('Homepage'): alert('Looks like you have a typo! Double check your email address please!')}/>  
            </View>
        </ImageBackground>  
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
        },   
    });
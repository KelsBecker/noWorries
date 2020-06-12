import React from 'react';
import {StyleSheet, View, Button, ImageBackground} from 'react-native';
import Login from './Login.js'

export default function Auth(props) {
    return(
        <ImageBackground style={{flex: 1, width:'100%'}} source={{uri:'https://i.pinimg.com/originals/4a/b6/90/4ab690ab37f38e464aabefca63275081.jpg'}}>
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
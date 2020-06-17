import React from 'react'
import {Text, TextInput, View, StyleSheet, Button} from 'react-native'

export default function SignUp(){
    return(
        <View style={styles.container}>
            <Text style={styles.formLabel}>Hakuna Matata!</Text>
            <Text style={styles.formLabel}>Create an Account</Text>
            <TextInput style={styles.inputStyle} placeholder='Username'/>
            <TextInput style={styles.inputStyle} placeholder='Email'/>
            <TextInput style={styles.inputStyle} placeholder='Password'/>
            <Button title='sign up'/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#F0FFFF',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'cornflowerblue'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#00BFFF'
    },
    formLabel: {
        fontSize: 25,
        color: 'darkblue',
        fontFamily: 'PingFangHK-Semibold',
        fontWeight: 'bold'
    }, 
})
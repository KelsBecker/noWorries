import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

export default function Login(props) {
    return(
        <>
        <Text style={styles.formLabel}>Welcome, Please Sign In</Text>
        <View>
            <TextInput style={styles.inputStyle} placeholder="Email" onChangeText={text => props.emailChange(text)}/>
            <TextInput style={styles.inputStyle} secureTextEntry={true} placeholder="Password" onChangeText={text => props.passwordChange(text)} />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    formLabel: {
        fontSize: 20,
        color: 'black',
    },
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
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#87CEFA',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});    
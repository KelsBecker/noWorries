import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

export default function Login(props) {
    return(
        <>
        <Text style={styles.formLabel}>NOWorries</Text>
        <View>
            <TextInput style={styles.inputStyle} value={props.email} placeholder="Email" onChangeText={text => props.emailChange(text)}/>
            <TextInput style={styles.inputStyle} value={props.password} secureTextEntry={true} placeholder="Password" onChangeText={text => props.passwordChange(text)} />
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
        fontSize: 25,
        color: 'darkblue',
        fontFamily: 'PingFangHK-Semibold',
        fontWeight: 'bold'
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
        fontFamily: 'PingFangHK-Semibold'
    },
});    
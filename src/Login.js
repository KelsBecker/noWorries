import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

export default function Login() {
    return(
        <>
        <Text style={styles.formLabel}>Form Demo</Text>
        <View>
            <TextInput style={styles.inputStyle} placeholder="Email" />
            <TextInput style={styles.inputStyle} secureTextEntry={true} placeholder="Password" />
        </View>
        </>
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
        backgroundColor: '#DCDCDC',
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});    
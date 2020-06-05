import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

export default function Homepage(props) {
    console.log(props)
    return(
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 40}}>Homepage</Text>
            <Button title='log in' onPress={() => props.navigation.navigate('Auth')} /> 
            <Button title='sign up'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
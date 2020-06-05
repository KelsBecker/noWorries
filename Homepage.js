import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

export default function Homepage() {
    return(
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 40}}>Homepage</Text>
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
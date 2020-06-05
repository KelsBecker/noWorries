import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Auth(props) {


    return(
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 30}}>Auth.js</Text>
            <Button title='login' onPress={() => props.navigation.navigate('Homepage')}/>    
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
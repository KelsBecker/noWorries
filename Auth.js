import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Auth() {


    return(
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 30}}>
                Auth
            </Text>
            <Button title='press me' onPress={null}/>    
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
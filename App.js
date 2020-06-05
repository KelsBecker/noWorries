import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Homepage'
import Auth from './Auth'

export default class App extends React.Component {

  // componentDidMount(){
  //   fetch('http://localhost:3000/locations')

  // }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Homepage' component={Homepage} />
          <Stack.Screen name='Auth'> 
          {props => <Auth {...props} />} 
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

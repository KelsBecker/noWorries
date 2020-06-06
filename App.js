import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Auth from './src/Auth'
import Homepage from './src/Homepage'
import ProfileScreen from './src/ProfileScreen'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default class App extends React.Component {

  createHomeTabs = () => 
    <Tab.Navigator>
      <Tab.Screen name='Map' component={Homepage} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>

  render() {
    
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Auth' component={Auth}/> 
          <Stack.Screen name='Homepage'children={this.createHomeTabs}/>
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

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
  //currently only have one user. Once there are more users I will have to current user on login
  state = {
    users: null
  }

  componentDidMount(){
    fetch('https://06fc1403bc65.ngrok.io/users')
    .then(response => response.json())
    .then(data => this.setState({users: data}))
  }

  createHomeTabs = () => 
    <Tab.Navigator>
      <Tab.Screen name='Map' component={Homepage} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>

  render() {
    // console.log('Users', this.state)
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

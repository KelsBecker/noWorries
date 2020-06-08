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

  state = {
    users: null,
    email:'',
    password:'',
    currentUser: undefined
  }

  componentDidMount(){
    fetch('https://7b68c0e0436d.ngrok.io/users')
    .then(response => response.json())
    .then(data => this.setState({users: data}))
  }

  handleEmailChange = (text) => {
    this.setState({email: text}, this.findCurrentUser)
  }

  handlePasswordChange = (text) => {
    this.setState({password: text})
  }

  findCurrentUser = () => {
    let user = this.state.users.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())
      this.setState({currentUser: user})
  }

  createHomeTabs = () => 
    <Tab.Navigator>
      <Tab.Screen name='Map'> 
      {props => <Homepage props={props} currentUser={this.state.currentUser}/>}
      </Tab.Screen>
      <Tab.Screen name='Profile'>
        {props => <ProfileScreen currentUser={this.state.currentUser}/>}
      </Tab.Screen> 
    </Tab.Navigator>

  render() {
    const {handleEmailChange, handlePasswordChange} = this
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Auth'>
          {props => <Auth props={props} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} currentUser={this.state.currentUser}/>}
          </Stack.Screen>
          <Stack.Screen name='Homepage' children={this.createHomeTabs}/>
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

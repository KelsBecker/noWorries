import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import Auth from './src/Auth'
import Homepage from './src/Homepage'
import ProfileScreen from './src/ProfileScreen'
import LocationsScreen from './src/LocationsScreen'
const Stack = createStackNavigator();



export default class App extends React.Component {

  state = {
    users: null,
    email:'',
    password:'',
    currentUser: undefined
  }

  componentDidMount(){
    fetch('https://c0600bc41de8.ngrok.io/users')
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

  render() {
    const {handleEmailChange, handlePasswordChange} = this
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Auth' options={{title: 'noWorries'}}>
          {props => <Auth props={props} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} currentUser={this.state.currentUser}/>}
          </Stack.Screen>
          <Stack.Screen name='Homepage'>
          {props => <Homepage {...props} currentUser={this.state.currentUser}/>}
          </Stack.Screen>
          <Stack.Screen name='Profile'>
          {props => <ProfileScreen {...props} currentUser={this.state.currentUser}/>}
          </Stack.Screen>
          <Stack.Screen name='Locations'>
          {props => <LocationsScreen {...props} currentUser={this.state.currentUser}/>}
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

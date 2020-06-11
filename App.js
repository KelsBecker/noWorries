import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet} from 'react-native';
import Auth from './src/Auth'
import Homepage from './src/Homepage'
import ProfileScreen from './src/ProfileScreen'
import LocationsScreen from './src/LocationsScreen'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()
const URL = 'https://1ea4766204b1.ngrok.io'



export default class App extends React.Component {

  state = {
    users: null,
    email:'',
    password:'',
    currentUser: undefined,
    locations: [],
    filteredLocations: [],
    favorites: []
  }

  componentDidMount(){
    Promise.all([fetch(`${URL}/users`), fetch(`${URL}/locations`), fetch(`${URL}/favorites`)])
    .then(([usersResponse, locationsResponse, favoritesResponse]) => Promise.all([usersResponse.json(), locationsResponse.json(), favoritesResponse.json()]))
    .then(([userData, locationData, favoriteData]) => this.setState({
        users: userData,
        locations: locationData, 
        filteredLocations: locationData,
        favorites: favoriteData,
    }))     
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

  addFavorite = (location) => {
    let newFave = {user_id: this.state.currentUser.id, location_id: location}
    fetch('https://1ea4766204b1.ngrok.io/favorites', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify(newFave)
    })
    .then(response => response.json())
    .then(data => this.setState({favorites: [...this.state.favorites, data]}))
  }

  tabScreens = () => {
    return (
    <Tab.Navigator>
      <Tab.Screen name='Homepage'>
        {props => <Homepage {...props} currentUser={this.state.currentUser} locations={this.state.locations} />}
      </Tab.Screen> 
      <Tab.Screen name='Profile'>
        {props => <ProfileScreen {...props} currentUser={this.state.currentUser} favorites={this.state.favorites} />}
      </Tab.Screen> 
      <Tab.Screen name='Locations'>
        {props => <LocationsScreen {...props} currentUser={this.state.currentUser} locations={this.state.locations} addFavorite={this.addFavorite} />}
      </Tab.Screen> 
    </Tab.Navigator>
    )
  }

  render() {
    const {handleEmailChange, handlePasswordChange} = this
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Auth' options={{title: 'noWorries'}}>
          {props => <Auth props={props} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} currentUser={this.state.currentUser}/>}
          </Stack.Screen>
          <Stack.Screen name='Homepage' component={this.tabScreens}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

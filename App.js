import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet} from 'react-native';
import Auth from './src/Auth'
import Homepage from './src/Homepage'
import ProfileScreen from './src/ProfileScreen'
import LocationsScreen from './src/LocationsScreen'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()
const URL = 'https://79d9c791abbe.ngrok.io'



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
    fetch(`${URL}/favorites`, {
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


  // updateFavorites = (id) => {
  //   this.setState({favorites: this.state.favorites.filter(fav => fav.id !== id)})
  // }

  removeFavorite = (id) => {
    fetch(`${URL}/favorites/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      const newFave = this.state.favorites.filter(fave => fave.id !== data.id)
      this.setState({favorites: newFave })
    })
  }
  
  
  tabScreens = () => {
    const userFave = this.state.favorites.filter(favorite => favorite.user_id === this.state.currentUser.id)
    return (
    <Tab.Navigator       
    initialRouteName="Homepage"
    activeColor="#fff"
    >
      <Tab.Screen name='Homepage'
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#6a9c72',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}>
        {props => <Homepage {...props} currentUser={this.state.currentUser} locations={this.state.locations} />}
      </Tab.Screen> 
      <Tab.Screen name='Profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#6a9c72',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}>
        {props => <ProfileScreen {...props} currentUser={this.state.currentUser} favorites={userFave} removeFavorite={this.removeFavorite} url={URL} />}
      </Tab.Screen> 
      <Tab.Screen name='Locations'
        options={{
          tabBarLabel: 'Add Favorites!',
          tabBarColor: '#6a9c72',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="emoticon" color={color} size={26} />
          ),
        }}>
        {props => <LocationsScreen {...props} currentUser={this.state.currentUser} locations={this.state.locations} addFavorite={this.addFavorite} />}
      </Tab.Screen> 
    </Tab.Navigator>
    )
  }

  render() {
    const {handleEmailChange, handlePasswordChange} = this
    return (
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name='Auth' 
          options={{
            title: 'noWorries',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            }}>
          {props => <Auth {...props} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} currentUser={this.state.currentUser}/>}
          </Stack.Screen>
          <Stack.Screen name='Homepage'
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
            }}
          component={this.tabScreens}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


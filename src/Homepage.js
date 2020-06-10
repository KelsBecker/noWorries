import React from 'react'
import {StyleSheet, View, Button} from 'react-native'
import MapScreen from './MapScreen'
import CategoryPicker from './CategoryPicker'
const ngrokURL = 'https://2a0e61d7d874.ngrok.io'



export default class Homepage extends React.Component{

    state = {
        locations: [],
        selectedCategory: '',
        filteredLocations: [],
        favorites: [],
        currentUser: ''
    }

    componentDidMount(){
        Promise.all([fetch('https://7f163d1f046b.ngrok.io/locations'), fetch('https://7f163d1f046b.ngrok.io/favorites')])
        .then(([locationResponse, favoritesResponse]) => Promise.all([locationResponse.json(), favoritesResponse.json()]))
        .then(([locationData, favoriteData]) => this.setState({
            locations: locationData, 
            filteredLocations: locationData,
            favorites: favoriteData,
            currentUser: this.props.currentUser
        }))     
    }

    handleCategorySelect = (value) => {
        this.setState({selectedCategory: value}, this.sortedLocations)
    }
    
    addFavorite = (location) => {
        let newFave = {user_id: this.state.currentUser.id, location_id: location}
        fetch('https://7f163d1f046b.ngrok.io/favorites', {
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

    sortedLocations = () => {
        let locationArray = []
        if(this.state.selectedCategory === 'Parks'){
            locationArray = [...this.state.locations].filter(location => location.category_id === 2) 
        }else if(this.state.selectedCategory === 'Groceries'){
            locationArray = [...this.state.locations].filter(location => location.category_id === 1) 
        } else if(this.state.selectedCategory === 'Your Favorites'){
            locationArray = [...this.state.locations].filter(location => location.favorites.location_id === location.id)
        } else {
            locationArray = [...this.state.locations]
        }
        this.setState({filteredLocations: locationArray})
    }


    render() {
        return(
            <View style={styles.container}>
                <CategoryPicker categorySelect={this.handleCategorySelect} />
                <MapScreen locations={this.state.filteredLocations} />
                <Button title='Go To Profile' onPress={() => this.props.navigation.navigate('Profile', {favorites: this.state.favorites})}></Button>
                <Button title='Add Favorites' onPress={() => this.props.navigation.navigate('Locations', {locations: this.state.locations, addFavorite: this.addFavorite})}></Button>
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        }
    });
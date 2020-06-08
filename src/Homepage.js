import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapScreen from './MapScreen'
import CategoryPicker from './CategoryPicker'
import ProfileScreen from './ProfileScreen'
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
        Promise.all([fetch('https://7b68c0e0436d.ngrok.io/locations'), fetch('https://7b68c0e0436d.ngrok.io/favorites')])
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


    sortedLocations = () => {
        let locationArray = []
        if(this.state.selectedCategory === 'Parks'){
            locationArray = [...this.state.locations].filter(location => location.category_id === 2) 
        }else if(this.state.selectedCategory === 'Groceries'){
            locationArray = [...this.state.locations].filter(location => location.category_id === 1) 
        } else {
            locationArray = [...this.state.locations]
        }
        this.setState({filteredLocations: locationArray})
    }


    render() {
        console.log('HOMEPAGE USER', this.state.currentUser)
        console.log('HOMEPAGE FAVORITES', this.state.favorites)
        return(
            <View style={styles.container}>
                <CategoryPicker categorySelect={this.handleCategorySelect} />
                <MapScreen locations={this.state.filteredLocations} />
                {/* <ProfileScreen currentUser={this.state.currentUser} favorites={this.state.favorites} /> */}
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFillObject
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        },
    });
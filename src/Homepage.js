import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapScreen from './MapScreen'
import CategoryPicker from './CategoryPicker'
const ngrokURL = 'https://2a0e61d7d874.ngrok.io'

export default class Homepage extends React.Component{

    
    state = {
        locations: [],
        selectedCategory: '',
        filteredLocations: [],
        favorites: []
    }

    componentDidMount(){
        Promise.all([fetch('https://2a0e61d7d874.ngrok.io/locations'), fetch('https://2a0e61d7d874.ngrok.io/favorites')])
        .then(([locationResponse, favoritesResponse]) => Promise.all([locationResponse.json(), favoritesResponse.json()]))
        .then(([locationData, favoriteData]) => this.setState({
            locations: locationData, 
            filteredLocations: locationData,
            favorites: favoriteData
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
        console.log('HOMEPAGE PARAMS', this.props.navigation)
        // console.log('Faves', this.state.locations)
        return(
            <View style={styles.container}>
                <CategoryPicker categorySelect={this.handleCategorySelect} />
                <MapScreen locations={this.state.filteredLocations} />
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
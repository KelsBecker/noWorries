import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapScreen from './MapScreen'
import CategoryPicker from './CategoryPicker'

export default class Homepage extends React.Component{
    
    state = {
        locations: [],
        selectedCategory: '',
        filteredLocations: []
    }

    componentDidMount(){
        fetch('https://06fc1403bc65.ngrok.io/locations')
        .then(response => response.json())
        .then(data => this.setState({locations: data, filteredLocations: data}))
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
        return(
            <View>
                <CategoryPicker categorySelect={this.handleCategorySelect} />
                <MapScreen locations={this.state.filteredLocations} />
            </View>
        )
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
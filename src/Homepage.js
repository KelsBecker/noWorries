import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapScreen from './MapScreen'
import CategoryPicker from './CategoryPicker'


export default class Homepage extends React.Component{

    state = {
        selectedCategory: '',
        filteredLocations: [],
    }

    componentDidMount(){
        this.setState({filteredLocations: this.props.locations})
    }

    handleCategorySelect = (value) => {
        this.setState({selectedCategory: value}, this.sortedLocations)
    }

    sortedLocations = () => {
        let locationArray = []
        if(this.state.selectedCategory === 'Parks'){
            locationArray = [...this.props.locations].filter(location => location.category_id === 2) 
        } else if(this.state.selectedCategory === 'Markets'){
            locationArray = [...this.props.locations].filter(location => location.category_id === 1) 
        } else if(this.state.selectedCategory === 'Your Favorites'){
            this.props.favorites.map(obj => locationArray.push(obj.location))
        }else {
            locationArray = [...this.props.locations]
        }
        this.setState({filteredLocations: locationArray})
    }


    render() {
        return(
            <View style={styles.container}>
                <CategoryPicker handleCategorySelect={this.handleCategorySelect} />
                <MapScreen locations={this.state.filteredLocations}  />
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
import React from 'react'
import { Header, Item, Input, Icon, Button, Text } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native'
import LocationCard from './LocationCard'


export default class LocationsScreen extends React.Component {

    state = {
        locations: [],
        search: ''
    }
    
    componentDidMount(){
        this.setState({locations: this.props.locations})
    }

    handleSearch = (value) => {
        this.setState({search: value})
    }
    
    render(){
        const searchedLocations = this.state.locations.filter(location => location.name.toLowerCase().includes(this.state.search.toLowerCase()) || location.description.toLowerCase().includes(this.state.search.toLowerCase()))
        return(
            <ScrollView style={styles.container}>
                <Header searchBar rounded style={{paddingBottom: 20}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={(event) => this.handleSearch(event)}/>
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                    {searchedLocations.map(location => 
                    <LocationCard location={location} key={location.id} 
                    addFavorite={this.props.addFavorite} 
                    userFave={this.props.userFave} 
                    />)}
            </ScrollView>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mintcream'
    },
});
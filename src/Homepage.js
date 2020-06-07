import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapScreen from './MapScreen'

export default class Homepage extends React.Component{
    
    state = {
        locations: []
    }

    componentDidMount(){
        fetch('https://06fc1403bc65.ngrok.io/locations')
        .then(response => response.json())
        .then(data => this.setState({locations: data}))
    }

    render() {
        // console.log('HOMEPAGE STATE=', this.state )
        return(
            <View>
                <MapScreen locations={this.state.locations} />
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
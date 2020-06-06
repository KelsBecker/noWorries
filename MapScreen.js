import React from 'react'
import {StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class MapScreen extends React.Component {
    state = {
        locations: []
    }

    componentDidMount(){
        fetch('https://4e9d4fd97395.ngrok.io/locations')
        .then(response => response.json())
        .then(data => this.setState({locations: data}))
    }

    render(){
        console.log('MapScreen State=',  this.state.locations)
        return(
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: 40.712776,
                longitude: -74.005974,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035
            }}>
                {this.state.locations.map(location => 
                <Marker
                coordinate={{latitude: location.latitude, longitude: location.longitude}}
                title={location.name}>     
                </Marker>)}

            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
});
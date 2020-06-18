import React from 'react'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Heatmap} from 'react-native-maps';


export default class MapScreen extends React.Component {

    // state = {
    //     userLocation: {}
    // }

    // componentDidMount(){
    //     this.getLocation()
    // }

    // getLocation = async() => {
    //     const {status} = await Permissions.askAsync(Permissions.LOCATION)
    //     if(status !== 'granted') {
    //         console.log('Status', status)
    //     } else if (status === 'granted') {
    //     const userLocation = await Location.getCurrentPositionAsync({})
    //         let location = {
    //             latitude: userLocation.coords.latitude,
    //             longitude: userLocation.coords.longitude,
    //             latitudeDelta: 0.09,
    //             longitudeDelta: 0.035
    //         }
    //         this.setState({userLocation: location})
    //     }
    // }

    render(){
        return(
        <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            style={styles.map}
            region={{
                latitude: 40.712776,
                longitude: -74.005974,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035
            }}>
                {this.props.locations.map((location) =>
                <Marker
                key={location.id}
                coordinate={{latitude: location.latitude, longitude: location.longitude}}
                title={location.name}
                >    
                </Marker>)}
                <Heatmap
                points={this.props.locations}
                radius={50}
                opacity={2}
                gradient={{
                    colors: ['#000000', '#183567', '#2e649e', '#17adcb', '#00fafa'],
                    colorMapSize: 200,
                    startPoints: [0.01, 0.04, 0.1, 0.45, 0.5]
                }}
                ></Heatmap>
        </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
import React from 'react'
import {StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Heatmap} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MapScreen extends React.Component {

    render(){
        console.log('MapScreen props=',  this.props.locations)
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
                {this.props.locations.map((location, index) =>
                <Marker
                key={index}
                coordinate={{latitude: location.latitude, longitude: location.longitude}}
                title={location.name}>     
                </Marker>)}
                <Heatmap
                points={this.props.locations}
                radius={40}
                opacity={1}
                gradient={{
                    colors: ['black', 'purple', 'red', 'yellow', 'white'],
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
        height: '100%'
    }
});
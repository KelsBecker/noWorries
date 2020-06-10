import React from 'react'
import {StyleSheet, Dimensions, View, Text, Modal, Button, TouchableHighlight} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Heatmap, Callout} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MapScreen extends React.Component {

    render(){
        // console.log('MAP', this.props)
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
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 48
    },
});
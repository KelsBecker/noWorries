import React from 'react'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'
import {ScrollView, StyleSheet, View} from 'react-native'
import LocationCard from './LocationCard'


export default function LocationsScreen(props) {
    
    return(
        <ScrollView style={styles.container}>
                {props.locations.map(location => 
                <LocationCard location={location} key={location.id} 
                addFavorite={props.addFavorite} 
                userFave={props.userFave} 
                />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mintcream'
    },
});
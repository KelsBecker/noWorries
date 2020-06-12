import React from 'react'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'
import {ScrollView, StyleSheet, View, FlatList} from 'react-native'
import LocationCard from './LocationCard'


export default function LocationsScreen(props) {
    

    // console.log('LOCATIONS SCREEN', props)
    return(
    // <View style={styles.container}>
        <ScrollView>
                {props.locations.map(location => <LocationCard location={location} key={location.id} addFavorite={props.addFavorite} />)}
                {/* // <Card key={location.id}>
                //     <CardItem>
                //         <Body>
                //             <Text>{location.name}</Text>
                //             <Text>{location.address}</Text>
                //             <Text>{location.description}</Text>
                //         </Body>
                //         <CardItem>
                //             <Button bordered dark onPress={() => props.addFavorite(location.id)}>
                //                 <Text>Favorite!</Text>
                //             </Button>
                //         </CardItem>
                //     </CardItem>
                // </Card>)} */}
        </ScrollView>
    // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 40,
        // paddingHorizontal: 20,
        // paddingBottom: 40,
        // backgroundColor: '#fff'
    },
});
import React from 'react'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'
import {ScrollView, StyleSheet, View} from 'react-native'


export default function LocationsScreen(props) {
    

    // console.log('LOCATIONS SCREEN', props)
    return(
    <View style={styles.container}>
        <ScrollView>
            <Container>
                {props.locations.map(location => 
                <Card key={location.id}>
                    <CardItem>
                        <Body>
                            <Text>{location.name}</Text>
                            <Text>Add A Description or Features</Text>
                        </Body>
                        <CardItem>
                            <Button onPress={() => props.addFavorite(location.id)}>
                                <Text>Favorite!</Text>
                            </Button>
                        </CardItem>
                    </CardItem>
                </Card>)}
            </Container>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: '#fff'
    },
});
import React from 'react'
import {Container, Card, CardItem, Text, Body, Right, Button} from 'native-base'
import {ScrollView} from 'react-native'

export default function LocationsScreen(props) {
    console.log('LOCATION SCREEN', props)
    const {addFavorite} = props.route.params
    return(
        <ScrollView>
            <Container>
                {props.route.params.locations.map(location => 
                <Card key={location.id}>
                    <CardItem>
                        <Body>
                            <Text>{location.name}</Text>
                            <Text>Add A Description or Features</Text>
                        </Body>
                        <CardItem>
                            <Button onPress={() => addFavorite(location.id)}>
                                <Text>Favorite!</Text>
                            </Button>
                        </CardItem>
                    </CardItem>
                </Card>)}
            </Container>
        </ScrollView>
    )

}
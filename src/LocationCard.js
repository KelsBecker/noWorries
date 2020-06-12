import React from 'react'
// import {Text} from 'react-native'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'

export default function LocationCard(props) {
    // console.log('LOCATION CARD PROPS', props)
    return(
    <Card>
        <CardItem>
            <Body>
                <Text>{props.location.name}</Text>
                <Text>{props.location.address}</Text>
                <Text>{props.location.description}</Text>
            </Body>
        <CardItem>
            <Button bordered dark onPress={() => props.addFavorite(props.location.id)}>
                <Text>Favorite!</Text>
            </Button>
        </CardItem>
        </CardItem>
    </Card>
    )
}
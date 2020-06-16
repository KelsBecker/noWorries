import React from 'react'
import {Card, CardItem, Text, Body, Button} from 'native-base'

export default function LocationCard(props) {
    return(
    <Card>
        <CardItem>
            <Body>
                <Text>{props.location.name}</Text>
                <Text>{props.location.address}</Text>
                <Text>{props.location.description}</Text>
            </Body>
        <CardItem>
            <Button bordered dark onPress={props.userFave.some(fave => fave.location_id === props.location.id) ? () => alert('Looks like you really love this place, Its already a fave 😃') : () => props.addFavorite(props.location.id)}>
                <Text>Favorite!</Text>
            </Button>
        </CardItem>
        </CardItem>
    </Card>
    )
}
import React from 'react'
import {Card, CardItem, Text, Body, Button} from 'native-base'

export default function LocationCard(props) {
    const {name, address, description, id} = props.location
    return(
    <Card>
        <CardItem>
            <Body>
                <Text>{name}</Text>
                <Text>{address}</Text>
                <Text>{description}</Text>
            </Body>
        <CardItem>
            <Button bordered dark onPress={props.userFave.some(fave => fave.location_id === id) ? () => alert('Looks like you really love this place, Its already a fave 😃') : () => props.addFavorite(id)}>
                <Text>Favorite!</Text>
            </Button>
        </CardItem>
        </CardItem>
    </Card>
    )
}
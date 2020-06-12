import React from 'react'
import {Card, CardItem, Body, Button, Text} from 'native-base'
import {TextInput, StyleSheet, View} from 'react-native'

export default function FavoriteCard(props) {
    console.log('Favorite Card', props)
    return(
        <Card>
            <CardItem>
                <Body>
                    <Text>{props.favorite.location.name}</Text>
                    <Text>{props.favorite.location.address}</Text>
                    <Text>{props.favorite.location.description}</Text>
                </Body>
            </CardItem>
            <View>
                <TextInput style={styles.inputStyle} placeholder='Add A Personal Note'/>
            </View>
            <CardItem>
            <Button bordered dark onPress={() => props.removeFavorite(props.favorite.id)}>
                <Text>Remove Favorite</Text>
            </Button>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: 385,
        height: 50,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'mediumseagreen',
        backgroundColor: 'mintcream',
    },
})
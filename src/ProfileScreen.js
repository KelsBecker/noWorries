import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'


export default class ProfileScreen extends React.Component {

    render(){
        const userFave = this.props.favorites.filter(favorite => favorite.user_id === this.props.currentUser.id)
        // console.log('PROFILE', userFave )
        return(
            <ScrollView>
                <Container>
                    <Text style={{color: 'red', fontSize: 40}}>@{this.props.currentUser.username}</Text>
                    {userFave.map(favorite => 
                    <Card key={favorite.id}>
                        <CardItem>
                            <Body>
                                <Text>{favorite.location.name}</Text>
                                <Text>{favorite.location.address}</Text>
                                <Text>{favorite.location.description}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                        <Button bordered dark onPress={() => this.props.removeFavorite(favorite.id)}>
                            <Text>Remove Favorite</Text>
                        </Button>
                        </CardItem>
                    </Card>
                    )}
                </Container>
            </ScrollView>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    });


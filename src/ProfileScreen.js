import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {Container, Card, CardItem, Text, Body} from 'native-base'


export default class ProfileScreen extends React.Component {

    render(){
        // console.log('PROFILE', this.props)
        return(
            <ScrollView>
                <Container>
                    <Text style={{color: 'red', fontSize: 40}}>@{this.props.currentUser.username}</Text>
                    {this.props.favorites.map(favorite => 
                    <Card key={favorite.id}>
                        <CardItem>
                            <Body>
                                <Text>{favorite.location.name}</Text>
                                <Text>Add A Description or Features</Text>
                            </Body>
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


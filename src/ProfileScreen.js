import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {Container, Card, CardItem, Text, Body} from 'native-base'


export default class ProfileScreen extends React.Component {

    render(){
        console.log('PROFILE PAGE', this.props.route.params.favorites)
        return(
            <ScrollView>
                <Container>
                    <Text style={{color: 'red', fontSize: 40}}>@{this.props.currentUser.username}</Text>
                    {this.props.route.params.favorites.map((favorite, index) => 
                    <Card key={index}>
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


import React from 'react'
import {StyleSheet, ScrollView, View} from 'react-native'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'
import FavoriteCard from './FavoriteCard'


export default class ProfileScreen extends React.Component {

    render(){
        // const userFave = this.props.favorites.filter(favorite => favorite.user_id === this.props.currentUser.id)
        // console.log('PROFILE PROPS', this.props )
        // console.log('PROFILE STATE', this.state)
        
        return(
            <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>Good Afternoon @{this.props.currentUser.username}</Text>
            </View>
            {this.props.favorites.map(favorite => 
            <FavoriteCard favorite={favorite} key={favorite.id} 
            removeFavorite={this.props.removeFavorite}
            url={this.props.url}
            currentUser={this.props.currentUser}
            />)}
            </ScrollView>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'mintcream'
        },
        header: {
            flex: 1,
            alignItems: 'center',
        },
        title: {
            color: '#1E90FF', 
            fontSize: 35, 
        }
    });


import React from 'react'
import {StyleSheet, ScrollView, View, Text} from 'react-native'
import FavoriteCard from './FavoriteCard'


export default class ProfileScreen extends React.Component {

    render(){
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


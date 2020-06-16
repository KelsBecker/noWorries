import React from 'react'
import {StyleSheet, ScrollView, View, Text} from 'react-native'
import FavoriteCard from './FavoriteCard'


export default function ProfileScreen(props) {

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Good Afternoon @{props.currentUser.username}</Text>
            </View>
            {props.favorites.map(favorite => 
            <FavoriteCard favorite={favorite} key={favorite.id} 
            removeFavorite={props.removeFavorite}
            url={props.url}
            currentUser={props.currentUser}
            />)}
        </ScrollView>
    )
}

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'mintcream',
        },
        header: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            backgroundColor: 'dodgerblue',
            margin: 5,
            borderStyle: 'solid',
            borderColor: 'mediumseagreen', 
            borderWidth: 3 
        },
        title: {
            color: '#fff', 
            fontSize: 25, 
            fontFamily: 'PingFangHK-Semibold',
        }
    });


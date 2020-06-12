import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {Container, Card, CardItem, Text, Body, Button} from 'native-base'
import FavoriteCard from './FavoriteCard'


export default class ProfileScreen extends React.Component {

    // state = {
    //     favorites: []
    // }

    // componentDidMount() {
    //     this.setState({ favorites: this.props.favorites})
    // }

    // handleDelete = (id) => {
    //     const newFave = this.state.favorites.filter(fave => fave.id !== id)
    //     this.setState({favorites: newFave})
    // }




    render(){
        // const userFave = this.props.favorites.filter(favorite => favorite.user_id === this.props.currentUser.id)
        // console.log('PROFILE PROPS', this.props )
        return(
            <ScrollView>
            <Text style={{color: '#1E90FF', fontSize: 40, alignItems: 'center'}}>Hey @{this.props.currentUser.username}</Text>
            {this.props.favorites.map(favorite => <FavoriteCard favorite={favorite} key={favorite.id} removeFavorite={this.props.removeFavorite} /> )}
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


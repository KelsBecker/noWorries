import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ProfileScreen extends React.Component {

    state = {
        currentUser: ''
    }

    componentDidMount(){
        this.setState({
            currentUser: this.props.currentUser,
        })
    }

    render(){
        console.log('State', this.state)
        return(
            <View style={styles.container}>
                <Text style={{color: 'red', fontSize: 40}}>Hello @{this.state.currentUser.username}</Text>
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });
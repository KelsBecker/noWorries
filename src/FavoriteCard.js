import React from 'react'
import {Card, CardItem, Body, Button, Text} from 'native-base'
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native'

export default class FavoriteCard extends React.Component {

    state = {
        content: '',
        notes: []
    }

    componentDidMount(){
        fetch(`${this.props.url}/notes`)
        .then(response => response.json())
        .then(notesArray => this.setState({notes: notesArray}))
    }

    handleTextChange = (value) => {
        this.setState({content: value})
    }

    submitNote = (favoriteId, userId) => {
        let noteObj = {user_id: userId, favorite_id: favoriteId, content: this.state.content}
        if(this.state.content !== ''){
        fetch(`${this.props.url}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(noteObj)
        })
        .then(response => response.json())
        .then(data => this.setState({notes: [...this.state.notes, data], content: '' }) )
        }
    }

    deleteNote = (id) => {
        let remainingNotes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes: remainingNotes })
        fetch(`${this.props.url}/notes/${id}`, {
            method: 'DELETE'
        })
    }
    
    render(){
        const userNotes = this.state.notes.filter(note => note.user_id === this.props.currentUser.id)
        const {name, address, description} = this.props.favorite.location
        const {id, user_id} = this.props.favorite
        return(
            <Card>
                <CardItem>
                    <Body>
                        <Text style={styles.title}>{name}</Text>
                        <Text>{address}</Text>
                        <Text>{description}</Text>
                        <Text style={styles.notes}>Notes:</Text>
                        {userNotes.map(note => note.favorite_id === id ?
                        <View key={note.id}> 
                            <Text>{note.content}</Text>
                            <TouchableOpacity onPress={() => this.deleteNote(note.id)}>
                                <Text>X</Text>  
                            </TouchableOpacity>
                        </View> 
                        : null )}
                    </Body>
                </CardItem>
                <View style={styles.container}>
                    <TextInput style={styles.inputStyle} placeholder='Add A Personal Note' value={this.state.content} 
                    onChangeText={(text) => this.handleTextChange(text)}
                    onSubmitEditing={() => this.submitNote(id, user_id)}
                    />
                </View>
                <CardItem style={styles.container}>
                <Button bordered dark onPress={() => this.props.removeFavorite(id)}>
                    <Text>Remove Favorite</Text>
                </Button>
                </CardItem>
            </Card>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    inputStyle: {
        marginTop: 20,
        width: 385,
        height: 50,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'mediumseagreen',
        backgroundColor: 'mintcream',
        paddingLeft: 10,
    },
    title: {
        fontSize: 25,
        paddingBottom: 10,
        paddingTop: 5,
    },
    notes: {
        paddingTop: 20,
        fontSize: 18
    }
})
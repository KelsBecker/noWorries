import React from 'react'
import {StyleSheet, View} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

export default function CategoryPicker(props) {

    return(
        <View style={styles.container}>
        <RNPickerSelect
            style={styles.inputIOS}
            onValueChange={(value) => props.handleCategorySelect(value)}
            items={[
                { label: 'All Locations', value: 'All Locations' },
                { label: 'Markets', value: 'Markets' },
                { label: 'Parks', value: 'Parks' },
                { label: 'Your Favorites', value: 'Your Favorites'}
            ]}
        />
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            paddingTop: 60,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center', 
        },
        inputIOS: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 50
        }
    })


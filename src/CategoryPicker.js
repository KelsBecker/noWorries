import React from 'react'
import {StyleSheet, View} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
// import {Picker} from '@react-native-community/picker';


export default function CategoryPicker(props) {

    return(
        <View>
        <RNPickerSelect
            style={styles.container}
            onValueChange={(value) => props.handleCategorySelect(value)}
            items={[
                { label: 'All Locations', value: 'All Locations' },
                { label: 'Groceries', value: 'Groceries' },
                { label: 'Parks', value: 'Parks' },
                { label: 'Your Favorites', value: 'Your Favorites'}
            ]}
        />
        </View>
    )
}


    const styles = StyleSheet.create({
        container: {
            fontSize: 50,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            color: 'red',
            paddingRight: 30,
        },
    })

            {/* <Picker
        selectedValue={'All Locations'}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue) =>
        props.categorySelect(itemValue)
        }>
        <Picker.Item label="All Locations" value="All Locations" />
        <Picker.Item label="Groceries" value="Groceries" />
        <Picker.Item label="Parks" value="Parks" />
        <Picker.Item label="Your Favorites" value="Your Favorites" />
        </Picker> */}
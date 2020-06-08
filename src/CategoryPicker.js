import React from 'react'
import {StyleSheet} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';


export default function CategoryPicker(props) {

    return(
        <>
        <RNPickerSelect
            style={styles.inputIOS}
            onValueChange={(value) => props.categorySelect(value)}
            items={[
                { label: 'All Locations', value: 'All Locations' },
                { label: 'Groceries', value: 'Groceries' },
                { label: 'Parks', value: 'Parks' },
                { label: 'Your Favorites', value: 'Your Favorites'}
            ]}
        />
        </>
    )

}

//styles not showing up
const styles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    }
})
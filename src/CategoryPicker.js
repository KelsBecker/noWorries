import React from 'react'
import {StyleSheet} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
// import {Picker} from '@react-native-community/picker';


export default function CategoryPicker(props) {

    return(
        <>
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
        <RNPickerSelect
            style={styles.container}
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
    container: {
        flex: 1,
        alignItems: 'center',
        height: 100,
        justifyContent: 'center',
    }

})
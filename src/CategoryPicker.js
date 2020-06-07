import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

export default function CategoryPicker(props) {

    return(
        <>
        <RNPickerSelect
            onValueChange={(value) => props.categorySelect(value)}
            items={[
                { label: 'All Locations', value: 'All Locations' },
                { label: 'Groceries', value: 'Groceries' },
                { label: 'Parks', value: 'Parks' },
            ]}
        />
        </>
    )

}
import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';

export default function CarouselDisplay(props) {
    console.log('CAROUSEL', props)

    renderCarouselItem = ({item}) => {
        <View>
            <Text>{item.name}</Text>
        </View>
    }
    return(
        <>
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.props.locations}
            renderItem={renderCarouselItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={200}
        />
        </>
    )
}
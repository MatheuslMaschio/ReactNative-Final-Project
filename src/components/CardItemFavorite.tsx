import { View, Text } from 'react-native'
import React from 'react'
import {
    ButtonFavorite,
    CardContainer,
    ImageBG,
    
} from "../Styles/StyleFavoriteScreen";

import Icon from "react-native-vector-icons/MaterialIcons";

interface CardItemData {
    title: string;
    price: number;
    image: string;
}

export default function CardItemFavorite({data, removeFavorite} : {data: CardItemData; removeFavorite: () => void; }) {
    return (
        <CardContainer>
            <ImageBG source={{ uri: data.image }} />

            <View style={{ padding: 6, flex: 1 }}>
                <Text>{data.title}</Text>
                <Text>{`$${data.price}`}</Text>
            </View>
            
                
            <ButtonFavorite onPress={ removeFavorite }>
                <Icon name="favorite" size={24} color="#418b64" />    
            </ButtonFavorite>

        </CardContainer>
    )
}
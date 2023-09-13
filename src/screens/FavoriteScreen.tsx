import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import {
    Container,
    TitleContainer,
    TitleText,

} from "../Styles/StyleFavoriteScreen";

import { FavoriteContext} from "../contexts/FavoriteContext";
import  CardItemFavorite from '../components/CardItemFavorite';


export default function FavoriteScreen() {
    const {favorite, removeFavorite } = useContext(FavoriteContext);

    return (
        <Container>

            <TitleContainer>
                <TitleText>Favorites</TitleText>
            </TitleContainer>

            <FlatList style={styles.FlatListStyled}
                data = {favorite} 
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => (
                    <Text style ={{ textAlign: "center"}}>Sua Lista de favoritos está vazia</Text>
                )}
                renderItem={({ item }) => (
                    <CardItemFavorite
                        data={item}
                        removeFavorite={() => removeFavorite(item.id)}
                    />
                )}
            />
        </Container>
    );

}

const styles = StyleSheet.create({
    FlatListStyled: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }
})
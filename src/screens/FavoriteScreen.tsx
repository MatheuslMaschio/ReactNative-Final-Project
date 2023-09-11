import { View, Text } from 'react-native'
import React from 'react'
import {
    Container,
    ButtonFavorite,
    CardContainer,
    TitleContainer,
    TitleText,
    ImageBG,
    BackGround,
    ButtonContent,
} from "../Styles/StyleFavoriteScreen";

export default function FavoriteScreen() {

    const logo = require('../images/plant1.png');

    return (
        <Container>
            <TitleContainer>
                <TitleText>Favorites</TitleText>
            </TitleContainer>

            <BackGround>
                <CardContainer>
                    <ImageBG source={logo} />
                    <ButtonContent>
                        <View>
                            <Text>Green Vines</Text>
                            <Text>$9.20</Text>
                        </View>
                        <ButtonFavorite />
                    </ButtonContent>
                </CardContainer>
            </BackGround>

        </Container>
    );

}
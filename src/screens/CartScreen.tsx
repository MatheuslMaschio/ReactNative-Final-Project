import { View, Text, Alert } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";
import {
    Button,
    ButtonAdd,
    ButtonContainer,
    Buttons,
    CardAlign,
    CardContainer,
    CartButton,
    Container,
    HeaderContainer,
    HeaderText,
    Logo,
    SumCard,
    TextButtons,
} from "../Styles/StyleCartScreen";

export default function CartScreen() {
    const logoCard = require("../images/plant1.png");

    return (
        <Container>
            <HeaderContainer>
                <HeaderText>Cart</HeaderText>
            </HeaderContainer>

            <CardAlign>
                <CardContainer>
                <Logo source={logoCard} />
                <ButtonContainer>
                    <View>
                    <Text>Green Vines</Text>
                    <Text>$9.20</Text>
                    </View>
                    <Buttons>
                    <Button>
                        <Icon name="remove" size={12} color={"#418B64"} />
                    </Button>
                    <Text>1</Text>
                    <ButtonAdd>
                        <Icon name="add" size={12} color={"#ffffff"} />
                    </ButtonAdd>
                    </Buttons>
                </ButtonContainer>
                </CardContainer>
            </CardAlign>

            <SumCard>
                <Text>Subtotal</Text>
                <Text>$30.00</Text>
            </SumCard>
            
            <CartButton onPress={() => Alert.alert("Purchase Completed")}>
                <TextButtons>Go To Checkout</TextButtons>
            </CartButton>
        </Container>
    );
}
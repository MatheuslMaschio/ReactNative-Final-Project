import { View, Text, Alert, FlatList, StyleSheet } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import {
    CartButton,
    Container,
    HeaderContainer,
    HeaderText,
    SumCard,
    TextButtons,
} from "../Styles/StyleCartScreen";

import { CartContext } from "../contexts/CartContext";
import CardItem from '../components/CardItem';

export default function CartScreen( ) {
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
    
    

    return (
        <Container>
            <HeaderContainer>
                <HeaderText>Cart</HeaderText>
            </HeaderContainer>

            <FlatList style={styles.FlatListStyled}
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => (
                    <Text style ={{ textAlign: "center"}}>Seu carrinho está vazio</Text>
                )}
                renderItem={({ item }) => (
                    <CardItem 
                        data={item}
                        addAmount={() => addItemCart(item)}
                        removeAmount={() => removeItemCart(item)}
                    />
                )}
            />

            <SumCard>
                <Text>Subtotal</Text>
                <Text>{`$${total}`}</Text>
            </SumCard>

            <CartButton onPress={() => Alert.alert("Purchase Completed")}>
                <TextButtons>Go To Checkout</TextButtons>
            </CartButton>
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
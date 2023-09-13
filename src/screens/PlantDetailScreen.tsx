import React, { useContext, useState } from "react";
import {
    ButtonTotal,
    ButtonsDetails,
    Container,
    Description,
    ImageDetails,
    Price,
    PriceButton,
    TextTotal,
    TitleDetails,
    TotalContainer,
} from "../Styles/StylePlantDetailScreen";

import { Button, ButtonAdd, Buttons } from "../Styles/StyleCartScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRoute, RouteProp  } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { useNavigation } from "@react-navigation/native";
import { TabTypes } from "../routes/TabNavigator";

type RouteParams = {
    PlantDetail: {
        item: {
            title: string;
            description: string;
            price: number;
            image: string;
            category: string;
        };
    };
};

export default function PlantDetailScreen() {
    const route = useRoute<RouteProp<RouteParams, 'PlantDetail'>>();
    const item = route.params.item;

    const navigation = useNavigation<TabTypes>();

    const {  addItemCart } = useContext(CartContext);
    const [itemQuantity, setItemQuantity] = useState(1);

    function addToCart(item: any) {
        addItemCart({ 
            ...item, 
            amount: itemQuantity,
            total: itemQuantity * item.price
        }); 

        navigation.navigate("Cart");
    }

    function increaseQuantity() {
        setItemQuantity((prevQuantity) => prevQuantity + 1);
    }

    function decreaseQuantity() {
        if (itemQuantity > 1) {
            setItemQuantity((prevQuantity) => prevQuantity - 1);
        }
    }
    
    return (
        <Container>
            <View>
                <ImageDetails source={{ uri: item.image }} />

                <Text style={styles.textStyle}>
                    {item.category}
                </Text>
                
                <TitleDetails>
                    {item.title}
                </TitleDetails>

                <PriceButton>
                    <Price>{`$${item.price}`}</Price>
                    <ButtonsDetails>
                        <Buttons>
                            <Button onPress={decreaseQuantity}>
                                <Icon name="remove" size={12} color={"#418B64"} />
                            </Button>
                            <Text>{itemQuantity}</Text>
                            <ButtonAdd onPress={increaseQuantity}>
                                <Icon name="add" size={12} color={"#ffffff"} />
                            </ButtonAdd>
                        </Buttons>
                    </ButtonsDetails>
                </PriceButton>
                <Description>
                    {item.description}
                </Description>
            </View>
            <TotalContainer>

                <View>
                    <Text>Total Price</Text>

                    <Text style={{ fontSize: 20, fontWeight: "700" }}
                        >{`$${item.price * itemQuantity}`}
                    </Text>

                </View>
                <ButtonTotal onPress={() => addToCart(item)}>
                    <TextTotal>Add to cart</TextTotal>
                </ButtonTotal>
            </TotalContainer>
        </Container>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontWeight: "400",
        marginRight: 24,
        paddingTop: 24,
        paddingLeft: 24,
        paddingBottom: 16,
        color: '#969595'
    }
});

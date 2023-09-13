import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";
import { Feather } from '@expo/vector-icons'; 

import {
    Button,
    ButtonAdd,
    ButtonContainer,
    Buttons,
    CardContainer,
    Logo,
    
} from "../Styles/StyleCartScreen";

// Defina o tipo para data
interface CardItemData {
    title: string;
    price: number;
    amount: number;
    image: string;
}

type AddAmountFunction = () => void;

type RemoveAmountFunction = () => void;

export default function CardItem({ data, addAmount, removeAmount }: { data: CardItemData; addAmount: AddAmountFunction; removeAmount: RemoveAmountFunction; }) {
    const [amount, setAmount] = useState(data?.amount || 0);

    function handleIncrease() {
        addAmount();
        setAmount(item => item + 1);
    }

    function handleDecrease(){
        removeAmount();

        if(amount === 0){
            setAmount(0);
            return;
        }
        setAmount(item => item - 1);
    }

    const isDelete = amount === 1;

    return (
        <CardContainer>
            <Logo source={{ uri: data.image }} />

            <View style={{ padding: 6, flex: 1 }}>
                <Text>{data.title}</Text>
                <Text>{`$${data.price}`}</Text>
            </View>

            <ButtonContainer>
                <Buttons>
                    <Button onPress={handleDecrease} isDelete={isDelete}> 

                        {
                            isDelete ? <Feather name="trash" size={12} color="red" />
                        :   
                            <Icon name="remove" size={12} color={"#418B64"} /> 
                        }

                    </Button>
                        
                    <Text>{data.amount}</Text>

                    <ButtonAdd onPress={handleIncrease}>
                        <Icon name="add" size={12} color={"#ffffff"} />
                    </ButtonAdd>
                </Buttons>
            </ButtonContainer>
        </CardContainer>
    )
}

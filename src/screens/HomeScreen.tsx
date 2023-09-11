import { View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { StackTypes } from '../routes/auth.routes';

import { useNavigation } from '@react-navigation/native';
import { TabTypes } from '../routes/app.routes';
import { 
    Container, 
    HeaderContainer, 
    HeaderText, 
    ProfileImage, 
    TextContainer, 
    SubTitle, 
    CardOneContainer, 
    CardOne, 
    ButtonCart,
    CardOneImage,
    TextCardOne, 
    CardContainerTwo, 
    Card, 
    ImageB, 
    ButtonFavorites, 
    ButtonFavoritesOne,
    ButtonAdd,
    TextButtonAdd
} from '../Styles/StyleHomeScreen';

const profile = require('../images/profile.png');
const plant1 = require('../images/plant1.png');
const plant2 = require('../images/plant2.jpeg');


export default function HomeScreen() {
    const navigation = useNavigation<TabTypes>();
    const navigationStack = useNavigation<StackTypes>();
    function navigateTab() {
        navigation.navigate("Cart");
    }

    const cardData = [
        { id: '1', title: 'Green Vines', price: '$9.20', image: require('../images/plant1.png') },
        { id: '2', title: 'Another Plant', price: '$10.50', image: require('../images/plant2.jpeg') },
        { id: '3', title: 'Green Vines', price: '$9.20', image: require('../images/plant1.png') },
        { id: '4', title: 'Another Plant', price: '$10.50', image: require('../images/plant2.jpeg') },
        { id: '5', title: 'Green Vines', price: '$9.20', image: require('../images/plant1.png') },
        { id: '6', title: 'Another Plant', price: '$10.50', image: require('../images/plant2.jpeg') },
    ];



    return (
        <Container>
            <HeaderContainer>
                <HeaderText>Hi,John</HeaderText>
                <ProfileImage source={profile} />
            </HeaderContainer>

            <SubTitle>Most popular</SubTitle>

            <View style={{flex:1}}>
                <FlatList 
                    data={cardData}
                    horizontal={true}
                    renderItem={({item}) => (
                        <CardOneContainer >
                            <CardOne>
                                <CardOneImage source={item.image} />
                                <ButtonFavoritesOne />
                                <TextCardOne>
                                    <View>
                                        <Text>{item.title}</Text>
                                        <Text>{item.price}</Text>
                                    </View>

                                    <View>
                                        <ButtonAdd onPress={navigateTab}>
                                            <TextButtonAdd>Add to Cart</TextButtonAdd>
                                        </ButtonAdd>
                                    </View>
                                </TextCardOne>
                            </CardOne>
                        </CardOneContainer>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            
            <View style={{flex:1}}>
                <FlatList
                    data={cardData}
                    horizontal={false}
                    renderItem={({ item }) => (
                        <CardContainerTwo>
                        <Card>
                            <ImageB source={item.image} />
                            <ButtonFavorites />
                            <TextContainer>
                            <View>
                                <Text>{item.title}</Text>
                                <Text>{item.price}</Text>
                            </View>
                            <ButtonCart />
                            </TextContainer>
                        </Card>
                        </CardContainerTwo>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            
        </Container>
    )
}






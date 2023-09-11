import { View, Text, FlatList, SectionList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { TabTypes } from '../routes/app.routes';
import { 
    Container, 
    Header, 
    HeaderText, 
    ProfileImage, 
    TextContainer, 
    TextOne, 
    CardOneContainer, 
    ButtonCart,
    ButtonAdd,
    TextButtonAdd,
    CardOne,
    CardOneImage,
    ButtonFavoritesOne,
    TextCardOne,
    CardContainerTwo,
    Card,
    ImageB,
    ButtonFavorites
} from '../Styles/StyleHomeScreen';

import axios from 'axios';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomeScreen() {
    const profile = require('../images/profile.png');
    const navigation = useNavigation<TabTypes>();
    interface Product {
        id: string;
        title: string;
        description: string;
        price: number;
        category: string;
        categoryId: string;
        image: string;
    }

    const [mostPopularData, setMostPopularData] = useState<Product[]>([]);
    const [itemsData, setItemsData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/');
                setMostPopularData(response.data.body.data.mostPopular);
                setItemsData(response.data.body.data.items);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
    
        fetchData();
    }, []);

    function navigationDetails() {
        navigation.navigate('Details');
    }

    return (
        <Container>
            <Header>
                <HeaderText>Hi,John</HeaderText>
                <ProfileImage source={profile} />
            </Header>

            <TextOne>Most popular</TextOne>
            
            <View style={{flex:1}}>
                <FlatList 
                    data={mostPopularData}
                    horizontal={true}
                    renderItem={({item}) => (
                        <CardOneContainer onPress={navigationDetails} >
                            <CardOne>
                                <CardOneImage source={{uri: item.image}}  />
                                <ButtonFavoritesOne>
                                    <Icon name="favorite-border" size={16} />
                                </ButtonFavoritesOne>
                                <TextCardOne>
                                    <View>
                                        <Text>{item.title}</Text>
                                        <Text>{`$${item.price}`}</Text>
                                    </View>

                                    <View>
                                        <ButtonAdd >

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
                    data={itemsData}
                    horizontal={false}
                    renderItem={({ item }) => (
                        <CardContainerTwo >
                            <Card>
                                <ImageB source={{uri: item.image}} />
                                <ButtonFavorites>
                                    <Icon name="favorite-border" size={16} />
                                </ButtonFavorites>
                                <TextContainer>
                                    <View>
                                        <Text>{item.title}</Text>
                                        <Text>{`$${item.price}`}</Text>
                                    </View>
                                    <ButtonCart >
                                        <Icon name="shopping-bag" size={16} color={"#fff"} />    
                                    </ButtonCart>
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
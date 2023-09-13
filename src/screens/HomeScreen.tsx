import { View, Text, FlatList, SectionList, ActivityIndicator} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TabTypes } from '../routes/app.routes';

import { 
    Container, 
    HeaderContainer, 
    HeaderText, 
    ProfileImage, 
    TextContainer, 
    Subtitle, 
    CardOrizontalContainer, 
    ButtonCart,
    ButtonAdd,
    TextButtonAdd,
    CardOrizontal,
    CardOrizontalImage,

    ButtonFavoritesOne,
    TextCardOrizontal,
    CardContainerTwo,
    Card,
    ImageB,
    ButtonFavorites
} from '../Styles/StyleHomeScreen';

import axios from 'axios';
import Icon from "react-native-vector-icons/MaterialIcons";
import { CartContext } from '../contexts/CartContext';
import {FavoriteContext} from '../contexts/FavoriteContext';    


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


    const [isLoading, setIsLoading] = useState(true);
    const [mostPopularData, setMostPopularData] = useState<Product[]>([]);
    const [itemsData, setItemsData] = useState<Product[]>([]);

    const {addItemFavorite, removeFavorite, isFavorite} = useContext(FavoriteContext)

    const { addItemCart } = useContext(CartContext)

    function addToCart(item) {
        addItemCart(item); 
    }

    function addToFavorite(item) {
        addItemFavorite(item);
    }

    const route = useRoute();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/');
                setMostPopularData(response.data.body.data.mostPopular);
                setItemsData(response.data.body.data.items);
                setIsLoading(false);
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
            {isLoading ? (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#418b64" />
                    <Text>Loading...</Text>
                </View>
                
            ) : (
                <>
                    <HeaderContainer>
                        <HeaderText>Hi,John</HeaderText>
                        <ProfileImage source={profile} />
                    </HeaderContainer>

                    <Subtitle>Most popular</Subtitle>
                    
                    <View style={{flex:1}}>
                        <FlatList 
                            data={mostPopularData}
                            horizontal={true}
                            renderItem={({ item }: { item: Product }) => (
                                <CardOrizontalContainer onPress={navigationDetails}> 
                                    <CardOrizontal>

                                        <CardOrizontalImage source={{uri: item.image}}  />

                                        <ButtonFavoritesOne 
                                            onPress={() => {
                                                const itemId = parseInt(item.id, 10);
                                                if (isFavorite(itemId)) {
                                                    // O item é favorito, então remova-o dos favoritos
                                                    removeFavorite(itemId);
                                                } else {
                                                    // O item não é favorito, então adicione-o aos favoritos
                                                    addToFavorite(item);
                                                }
                                            }}
                                        >
                                            {isFavorite(parseInt(item.id)) ? (
                                                <Icon name="favorite" size={24} color="#418b64" />
                                            ) : (
                                                <Icon name="favorite-border" size={16} />
                                            )}
                                        </ButtonFavoritesOne>

                                        <TextCardOrizontal>
                                            <View>
                                                <Text>{item.title}</Text>
                                                <Text>{`$${item.price}`}</Text>
                                            </View>

                                            <View>
                                                <ButtonAdd onPress={() => addToCart(item)} >
                                                    <TextButtonAdd>Add to Cart</TextButtonAdd>
                                                </ButtonAdd>

                                            </View>

                                        </TextCardOrizontal>

                                    </CardOrizontal>

                                </CardOrizontalContainer>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
            
                    <View style={{flex:1}}>
                        <FlatList
                            data={itemsData}
                            horizontal={false}
                            renderItem={({ item }) => (
                                <CardContainerTwo>

                                    <Card>
                                        <ImageB source={{uri: item.image}} />

                                        <ButtonFavorites onPress={() => addToFavorite(item)}>
                                            <Icon name="favorite-border" size={16} />
                                        </ButtonFavorites>

                                        <TextContainer>
                                            
                                            <View>
                                                <Text>{item.title}</Text>
                                                <Text>{`$${item.price}`}</Text>
                                            </View>

                                            <ButtonCart onPress={() => addToCart(item)} >
                                                <Icon name="shopping-bag" size={16} color={"#fff"} />    
                                            </ButtonCart>

                                        </TextContainer>
                                    </Card>

                                </CardContainerTwo>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                
                </>
            )}


            
        </Container>
    )
}
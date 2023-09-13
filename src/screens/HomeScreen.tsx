import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from "react-native";

    import React, { useState, useEffect, useContext } from "react";
    import { useNavigation, useRoute } from "@react-navigation/native";
    import { TabTypes } from "../routes/app.routes";
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
        ButtonFavorites,
        ButtonContainer,
        BtnCategory,
    } from "../Styles/StyleHomeScreen";
    import axios from "axios";
    import Icon from "react-native-vector-icons/MaterialIcons";
    import { CartContext } from "../contexts/CartContext";
    import { FavoriteContext } from "../contexts/FavoriteContext";

    export default function HomeScreen() {
        const profile = require("../images/profile.png");
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

        const route = useRoute();
        const [isLoading, setIsLoading] = useState(true);
        const [selectedCategory, setSelectedCategory] = useState("all");
        const [mostPopularData, setMostPopularData] = useState<Product[]>([]);
        const [itemsData, setItemsData] = useState<Product[]>([]);

        const { addItemFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
        const { addItemCart } = useContext(CartContext);
        
        function addToCart(item: any) {
            addItemCart(item);
        }
    
        function addToFavorite(item: any) {
        addItemFavorite(item);
        }
    
        const [filteredItems, setFilteredItems] = useState<Product[]>([]);
    
        useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredItems(itemsData);
        } else {
            const filtered = itemsData.filter(
            (item) => item.category === selectedCategory
            );
            setFilteredItems(filtered);
        }
        }, [selectedCategory, itemsData]);
    
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(
                "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/"
            );
            setMostPopularData(response.data.body.data.mostPopular);
            setItemsData(response.data.body.data.items);
            setFilteredItems(response.data.body.data.items);
            setIsLoading(false);
            } catch (error) {
            console.error("Erro ao buscar dados:", error);
            }
        };
    
        fetchData();
        }, []);

    
    
        function navigationDetails(item: Product) {
            navigation.navigate("Details", { item });
        }
    
        if(isLoading) {
            return(
                <ActivityIndicator size="large" color="#418b64" style={{ width: "100%", height: "100%" }}/>
            )
        }
        return (
        <Container>
            
                <HeaderContainer>
                <HeaderText>Hi,John</HeaderText>
                <ProfileImage source={profile} />
                </HeaderContainer>
    
                <Subtitle>Most popular</Subtitle>
    
                <View style={{ flex: 1 }}>
                <FlatList
                    data={mostPopularData}
                    horizontal={true}
                    renderItem={({ item }: { item: Product }) => (
                    <CardOrizontalContainer
                        onPress={() => navigationDetails(item)}
                    >
                        <CardOrizontal>
                        <CardOrizontalImage source={{ uri: item.image }} />
    
                        <ButtonFavoritesOne
                            onPress={() => {
                            isFavorite(item.id)
                                ? removeFavorite(item.id)
                                : addToFavorite(item);
                            }}
                        >
                            {isFavorite(item.id) ? (
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
                            <ButtonAdd onPress={() => addToCart(item)}>
                                <TextButtonAdd>Add to Cart</TextButtonAdd>
                            </ButtonAdd>
                            </View>
                        </TextCardOrizontal>
                        </CardOrizontal>
                    </CardOrizontalContainer>
                    )}
                    keyExtractor={(item) => item.id}
                    style={{ marginBottom: 35 }}
                />
                </View>
    
                <ButtonContainer>
                    <BtnCategory
                        onPress={() => setSelectedCategory("all")}
                        isActive={selectedCategory === "all"}
                    >
                        <Text>All</Text>

                    </BtnCategory>
    
                    <BtnCategory
                        onPress={() => setSelectedCategory("Indoor")}
                        isActive={selectedCategory === "Indoor"}
                    >
                        <Text>Indoor</Text>

                    </BtnCategory>
    
                    <BtnCategory
                        onPress={() => setSelectedCategory("Outdoor")}
                        isActive={selectedCategory === "Outdoor"}
                    >
                        <Text>Outdoor</Text>

                    </BtnCategory>
                </ButtonContainer>
    
                <View style={{ flex: 1 }}>
                <FlatList
                    data={filteredItems}
                    horizontal={false}
                    renderItem={({ item }) => (

                    <CardContainerTwo onPress={() => navigationDetails(item)} >
                        <Card>
                            <ImageB source={{ uri: item.image }} />
        
                            <ButtonFavorites
                                onPress={() =>
                                isFavorite(item.id)
                                    ? removeFavorite(item.id)
                                    : addToFavorite(item)
                                }
                            >
                                {isFavorite(item.id) ? (
                                <Icon name="favorite" size={24} color="#418b64" />
                                ) : (
                                <Icon name="favorite-border" size={16} />
                                )}
                            </ButtonFavorites>
        
                            <TextContainer>
                                <View>
                                    <Text>{item.title}</Text>
                                    <Text>{`$${item.price}`}</Text>
                                </View>
        
                                <ButtonCart
                                    onPress={() => {
                                        addToCart(item);
                                    }}
                                >
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
    );
}
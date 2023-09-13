import React, { useContext } from "react";
import {BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlantDetailScreen from "../screens/PlantDetailScreen";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ButtonFavorites } from "../Styles/detailsScreenStyle";
import { FavoriteContext } from "../contexts/FavoriteContext";

const Stack = createNativeStackNavigator();

type TabNavigation = {
    Details: {};
    Perfil: undefined;
    Tab: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation, "Details"| "Tab" | "Perfil" >;

function AppRoutes() {
    const { addItemFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);

    return (
        <Stack.Navigator >
            <Stack.Screen   
                name= "Tab" 
                component={TabNavigator} 
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="Details" 
                component={PlantDetailScreen} 
                options={
                    {
                        headerTitleAlign: 'center', 

                    }
                } 
            />

            <Stack.Screen 
                name="Perfil" 
                component={ProfileScreen}
            />
        </Stack.Navigator>
    );
}

export default AppRoutes;

import React from "react";
import {BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlantDetailScreen from "../screens/PlantDetailScreen";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

type TabNavigation = {
    Details: undefined;
    Perfil: undefined;
    Tab: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation, "Details"| "Tab" | "Perfil" >;

function AppRoutes() {
    return (
        <Stack.Navigator >
            <Stack.Screen name= "Tab" component={TabNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={PlantDetailScreen}/>
            <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default AppRoutes;

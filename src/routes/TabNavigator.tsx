
import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

type TabNavigation = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation, "Home" | "Cart" | "Favorite">;

function TabNavigator() {
  return (
    <Tab.Navigator 
        screenOptions={{
          tabBarStyle: { height: 60 },
          tabBarActiveTintColor: "#418B64",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { margin: 7, fontSize: 14 },
        }
      }>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={
            { 
              headerShown: false, 
              tabBarIcon: ({ size, color }) => (
                <Icon name="home" size={30} color={color} />
              )   
            }
          }
        />
        <Tab.Screen name= "Favorite" component={FavoriteScreen} options={{ headerShown: false, tabBarIcon: ({ size, color }) => (
            <Icon name="favorite-border" size={30} color={color} />
          ), }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false, tabBarIcon: ({ size, color }) => (
            <Icon name="shopping-bag" size={30} color={color} />
          ), }}/>
    </Tab.Navigator>
    );
  
}

export default TabNavigator; 


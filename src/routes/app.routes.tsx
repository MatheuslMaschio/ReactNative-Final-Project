import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
            />

            

        </Tab.Navigator>
    )
}

export default AppRoutes;
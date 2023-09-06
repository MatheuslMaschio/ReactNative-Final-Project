import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import InitialScreen from '../screens/InitialScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    SignIn: undefined; //nao tenho props sendo passado para a rota
    SignUp: undefined;
    InitialScreen: undefined;
    Home: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='InitialScreen'
                component={InitialScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name='SignIn'
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name='SignUp'
                component={SignUpScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export default AuthRoutes;
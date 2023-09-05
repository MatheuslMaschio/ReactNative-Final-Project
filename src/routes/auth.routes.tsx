import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    SignIn: undefined; //nao tenho props sendo passado para a rota
    SignUp: undefined;
    // example: {
    //     name: string
    //     age: number
    //     adult: boolean
    // };
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='SignIn'
                component={SignInScreen}
            />

            <Stack.Screen 
                name='SignUp'
                component={SignUpScreen}
            />

        </Stack.Navigator>
    )
}

export default AuthRoutes;
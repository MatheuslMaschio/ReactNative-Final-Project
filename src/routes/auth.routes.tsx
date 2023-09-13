import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import InitialScreen from '../screens/InitialScreen';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    SignIn: undefined;
    SignUp: undefined;
    InitialScreen: undefined;
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
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerTitleAlign: 'center'
                }}
            />

            <Stack.Screen 
                name='SignUp'   
                component={SignUpScreen}
                options={{
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes; 
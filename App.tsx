import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';
import CartProvider from './src/contexts/CartContext';
import FavoriteProvider from './src/contexts/FavoriteContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>
            <StatusBar backgroundColor='#f4f0ff' style='dark' />
            <Routes />
          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}



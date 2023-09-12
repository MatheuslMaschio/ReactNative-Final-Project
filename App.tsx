import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';
import CartProvider from './src/contexts/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <StatusBar backgroundColor='#f4f0ff' style='dark' />
          <Routes />
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}



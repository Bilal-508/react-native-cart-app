/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useState} from 'react';

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import CartContext from './src/context/CartContext';
import CartContextProvider from './src/context/CartContextProvider';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  cartImage: {height: 30, width: 30},
  cartContainer: {
    position: 'relative',
  },
  cart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    width: 15,
    backgroundColor: '#000000',
    borderRadius: 15 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cartText: {
    color: '#fff',
  },
});

export default App;

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BMIForm from './assets/src/BMIForm';
import BMIResult from './assets/src/BMIResult';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BMIForm">
        <Stack.Screen name="BMIForm" component={BMIForm} />
        <Stack.Screen name="BMIResult" component={BMIResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
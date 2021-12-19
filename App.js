import react from 'react'
import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import signIn from './Screens/SignIn';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' options={{headerShown : false}} component = {Login}/>
          <Stack.Screen name='SignUp' options={{headerShown : false}} component = {SignUp}/>
          <Stack.Screen name='SignIn' options={{headerShown : false}} component = {signIn}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

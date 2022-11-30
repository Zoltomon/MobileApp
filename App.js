
import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PageLogIn } from './pages/page-login';
import { PageMain } from './pages/page-main';
import {PageReg} from './pages/page-reg';
const Stack = createNativeStackNavigator();


export default function App() {
  return (    
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Авторизация">
      <Stack.Screen options={{headerShown: true}} name="Авторизация" component={PageLogIn} />
      <Stack.Screen options={{headerShown: true}} name="Окно пользователя" component={PageMain} />
      <Stack.Screen options={{headerShown: true}} name="Регистрация" component={PageReg}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};


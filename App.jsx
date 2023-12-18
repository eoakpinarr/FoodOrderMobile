import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Welcome from './src/Screens/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Welcome'>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Welcome'
          component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


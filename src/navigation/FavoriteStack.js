import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/FavoriteScreen';
import MovieScreen from '../screens/MovieScreen';

const Stack = createNativeStackNavigator();

const FavoriteStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
      />
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default FavoriteStack;
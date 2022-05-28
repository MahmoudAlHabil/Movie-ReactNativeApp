import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import MovieScreen from '../screens/MovieScreen';

const Stack = createNativeStackNavigator();

const SearchStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
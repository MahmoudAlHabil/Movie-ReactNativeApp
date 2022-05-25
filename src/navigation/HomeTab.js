import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { primary } from '../utils/colors';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FavoriteStack from './FavoriteStack';
import { ScaledSheet } from 'react-native-size-matters';


const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={FavoriteStack} />
      </Tab.Navigator>
  );
}

export default HomeTab;

const styles = ScaledSheet.create({
  tabBarStyle: { 
    borderColor: primary, 
    borderTopColor: primary, 
    borderWidth: 2, 
    borderTopWidth: 2, 
    borderBottomWidth: 0, 
    borderTopStartRadius: 25, 
    borderTopEndRadius: 25, 
    elevation: 0, 
  },
})
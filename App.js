
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeTab from './src/navigation/HomeTab';
import LoginScreen from './src/screens/LoginScreen';

import TestScreen from './src/screens/TestScreen';

const App = () => {

  
  return (
    <Navigation/>
  );
};

const styles = StyleSheet.create({}); 

export default App;

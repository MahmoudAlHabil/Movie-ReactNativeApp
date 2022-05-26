
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import HomeDrawer from './src/navigation/HomeDrawer';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeTab from './src/navigation/HomeTab';
import LoginScreen from './src/screens/LoginScreen';

import TestScreen from './src/screens/TestScreen';

const App = () => {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (<Navigation/>
    );
  }

  return (<NavigationContainer><HomeDrawer/></NavigationContainer>);
}


const styles = StyleSheet.create({}); 

export default App;

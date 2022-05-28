import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import HomeDrawer from './src/navigation/HomeDrawer';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    return (<Navigation/>
    );
  }

  return (<NavigationContainer><HomeDrawer/></NavigationContainer>);
}

export default App;

import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import HomeDrawer from './src/navigation/HomeDrawer';
import messaging from '@react-native-firebase/messaging';


const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {

    (async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        messaging().getToken().then((val) => console.log(val))
      }
    })()
  }, [])

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (<Navigation />
    );
  }

  return (<NavigationContainer><HomeDrawer /></NavigationContainer>);
}

export default App;

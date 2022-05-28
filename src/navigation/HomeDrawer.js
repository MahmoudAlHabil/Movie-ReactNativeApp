import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTab from './HomeTab';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import auth from '@react-native-firebase/auth';

function SignOut({ navigation }) {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  return null;
}

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Movie" component={HomeTab} options={{}} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      <Drawer.Screen name="Sign out" component={SignOut} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
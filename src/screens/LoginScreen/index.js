import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import styles from './styles';
import auth from '@react-native-firebase/auth';


  
const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isVisible, setIsVisible] = useState(false);
  const visibleHandler = () => setIsVisible(prevIsVisible => prevIsVisible ? false : true)
  const visibleIcon = (<TouchableOpacity
    style={styles.visibleIcon}
    onPress={visibleHandler}>
    {isVisible ?
      <Icon name='ios-eye' size={16} color={'#c6c6c6'} /> :
      <Icon name='ios-eye-off' size={16} color={'#c6c6c6'} />}
  </TouchableOpacity>)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WelcomeScreen')}
            style={styles.wrapperBackIcon}>
            <Icon name='arrow-back' size={32} color='black' style={{ fontWeight: 'bold' }} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Welcome back</Text>
        </View>
        <View style={styles.WrapperImage}>
          <SvgXml xml={icons.loginImg} width="220" height="220" />
        </View>
        <View style={styles.WrapperForm}>
          <Input
            wrapperStyle={styles.input}
            placeholder='Email'
            onChangeText={val => setEmail(val)}
            keyboardType='email-address'
            renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />} />
          <Input
            wrapperStyle={styles.input}
            placeholder='Password'
            secureTextEntry={!isVisible}
            onChangeText={val => setPassword(val)}
            renderIconLeft={() => <Icon name='lock-closed' size={16} color={'#c6c6c6'} />}
            renderIconRight={() => visibleIcon} />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
            style={styles.forgotPasswordTouch}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            onPress={() => signin(navigation, email, password)}
            title='Log In'
            wrapperStyle={styles.loginButton} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}



const signin = (navigation, email, password) => {

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('HomeDrawer');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }

      alert(error);
    });
};

export default LoginScreen;

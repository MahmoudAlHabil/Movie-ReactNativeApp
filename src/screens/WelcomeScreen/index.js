import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import styles from './styles';

const WelcomeScreen = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.movieContainer}>
        <Text style={styles.moviesText}>Movies</Text>
        <SvgXml xml={icons.signImg} width="220" height="220" />
      </View>
      <View style={styles.boxSign}>
        <Text style={styles.welcomText}>Welcome</Text>
        <Text style={styles.bodyText}>Watch from your home with the best quality and fastest download</Text>
        <Text style={styles.bodyText}>Enjoy your time</Text>
        <View style={styles.logInSignUpWrapper}>
          <Button title='Log In'
            onPress={() => navigation.navigate('LoginScreen')} />
          <Button title='Sign Up'
            onPress={() => navigation.navigate('CreateAccountScreen')} />
        </View>
        <Button
          title='LOGIN WITH FACEBOOK'
          onPress={() => navigation.navigate('HomeDrawer')}
          icon={() => <Icon name='facebook' size={16} color='white'/>}
          textStyle={styles.facebookText}
          wrapperStyle={styles.signFacebook} />
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen;


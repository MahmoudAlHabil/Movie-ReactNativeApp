import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Button from '../../components/Button';
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
            wrapperStyle={styles.button}
            onPress={() => navigation.navigate('LoginScreen')} />
          <Button title='Sign Up'
            wrapperStyle={styles.button}
            onPress={() => navigation.navigate('CreateAccountScreen')} />
          {/* <Button title='Sign fast'
            wrapperStyle={styles.button}
            onPress={() => navigation.navigate('HomeDrawer')} /> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen;


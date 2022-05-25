import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import styles from './styles';


const VerificationScreen = (props) => {

  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Verification</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.wrapperBackIcon}>
            <SvgXml xml={icons.back} width="17" height="15" />
          </TouchableOpacity>
        </View>
        <View style={styles.WrapperImage}>
          <SvgXml xml={icons.verificationImg} width="220" height="220" />
        </View>
        <View style={styles.WrapperForm}>
          <Text style={styles.infoText}>
            Enter the Code to Verify Your Phone
          </Text>
          <Input
            wrapperStyle={styles.input}
            placeholder='Email'
            renderIconRight={() => <SvgXml xml={icons.email} />} />
          <Button
            onPress={() => navigation.navigate('ChangePasswordScreen')}
            title='Continue'
            wrapperStyle={styles.continueButton} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VerificationScreen;


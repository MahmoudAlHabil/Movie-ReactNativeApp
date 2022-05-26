import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import auth from '@react-native-firebase/auth';


const ForgotPasswordScreen = (props) => {

    const { navigation } = props;
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.wrapperBackIcon}>
                        <Icon name='arrow-back' size={32} color='black' style={{ fontWeight: 'bold' }} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Forgot Password</Text>
                </View>
                <View style={styles.WrapperImage}>
                    <SvgXml xml={icons.forgotPasswordImg} width="220" height="220" />
                </View>
                <View style={styles.WrapperForm}>
                    <Text style={styles.infoText}>
                        Enter your email address or phone number to reset the password
                    </Text>
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Email'
                        onChangeText={val => setEmail(val)}
                        renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />} />
                    <Button
                        onPress={() => forgotPassword(navigation, email)}
                        title='Reset password'
                        wrapperStyle={styles.resetPasswordButton} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const forgotPassword = (navigation, email) => {
    auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            alert('A password reset link has been sent to your email')
            navigation.navigate('LoginScreen');
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

export default ForgotPasswordScreen;


import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
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
                        <SvgXml xml={icons.back} width="17" height="15" />
                    </TouchableOpacity>
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
                        renderIconRight={() => <SvgXml xml={icons.email} />} />
                    <Text style={styles.orText}>OR</Text>
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
            navigation.navigate('VerificationScreen');
        })
        .catch(error => {
            alert(error);
        });
};

export default ForgotPasswordScreen;


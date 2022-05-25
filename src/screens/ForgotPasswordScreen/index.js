import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import styles from './styles';


const ForgotPasswordScreen = (props) => {

    const { navigation } = props;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Forgot Password</Text>
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
                        renderIconRight={() => <SvgXml xml={icons.email} />} />
                    <Text style={styles.orText}>OR</Text>
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Phone number'
                        renderIconRight={() => <SvgXml xml={icons.phone} />} />
                    <Button
                        onPress={() => navigation.navigate('VerificationScreen')}
                        title='Reset password'
                        wrapperStyle={styles.resetPasswordButton} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen;


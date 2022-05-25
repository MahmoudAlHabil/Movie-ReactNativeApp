import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import styles from './styles';


const CreateAccountScreen = (props) => {

    const { navigation } = props;
    const [isVisible, setIsVisible] = React.useState(false);
    const visibleHandler = () => setIsVisible(prevIsVisible => prevIsVisible ? false : true)
    const visibleIcon = (<TouchableOpacity
        style={styles.visibleIcon}
        onPress={visibleHandler}>
        {isVisible ?
            <SvgXml xml={icons.visible} /> :
            <SvgXml xml={icons.invisible} />}
    </TouchableOpacity>)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Create Account</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('WelcomeScreen')}
                        style={styles.wrapperBackIcon}>
                        <SvgXml xml={icons.back} width="17" height="15" />
                    </TouchableOpacity>
                </View>
                <View style={styles.WrapperImage}>
                    <SvgXml xml={icons.createAccountImg} width="220" height="220" />
                </View>
                <View style={styles.WrapperForm}>
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Username'
                        renderIconRight={() => <SvgXml xml={icons.user} />} />
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Email'
                        renderIconRight={() => <SvgXml xml={icons.email} />} />
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Phone number'
                        renderIconRight={() => <SvgXml xml={icons.phone} />} />
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Password'
                        secureTextEntry={!isVisible}
                        renderIconRight={() => <SvgXml xml={icons.lock} />}
                        renderIconLeft={() => visibleIcon} />
                    <Button
                        onPress={() => navigation.navigate('HomeDrawer')}
                        title='Sing Up'
                        wrapperStyle={styles.SignupButton} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={styles.haveAccountTouch}>
                        <Text style={styles.haveAccountText}>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const createUser = (navigation, email, password) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
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

export default CreateAccountScreen;


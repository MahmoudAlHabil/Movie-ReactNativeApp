import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import styles from './styles';


const ChangePasswordScreen = (props) => {

    const { navigation } = props;
    const [isVisible1, setIsVisible1] = React.useState(false);
    const [isVisible2, setIsVisible2] = React.useState(false);
    const visibleHandler1 = () => setIsVisible1(prevIsVisible => prevIsVisible ? false : true)
    const visibleHandler2 = () => setIsVisible2(prevIsVisible => prevIsVisible ? false : true)
    const visibleIcon1 = (<TouchableOpacity
        style={styles.visibleIcon}
        onPress={visibleHandler1}>
        {isVisible1 ?
            <SvgXml xml={icons.visible} /> :
            <SvgXml xml={icons.invisible} />}
    </TouchableOpacity>)

    const visibleIcon2 = (<TouchableOpacity
        style={styles.visibleIcon}
        onPress={visibleHandler2}>
        {isVisible2 ?
            <SvgXml xml={icons.visible} /> :
            <SvgXml xml={icons.invisible} />}
    </TouchableOpacity>)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Change Password</Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.wrapperBackIcon}>
                        <SvgXml xml={icons.back} width="17" height="15" />
                    </TouchableOpacity>
                </View>
                <View style={styles.WrapperImage}>
                    <SvgXml xml={icons.changePasswordImg} width="270" height="270" />
                </View>
                <View style={styles.WrapperForm}>
                    <Text style={styles.infoText}>
                        Enter the new password
                    </Text>
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='New password'
                        secureTextEntry={!isVisible1}
                        renderIconRight={() => <SvgXml xml={icons.lock} />}
                        renderIconLeft={() => visibleIcon1} />
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Confirm password'
                        secureTextEntry={!isVisible2}
                        renderIconRight={() => <SvgXml xml={icons.lock} />}
                        renderIconLeft={() => visibleIcon2} />
                    <Button
                        onPress={() => navigation.navigate('LoginScreen')}
                        title='Continue' wrapperStyle={styles.continueButton} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePasswordScreen;


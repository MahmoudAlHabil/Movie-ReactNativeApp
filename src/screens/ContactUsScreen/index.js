import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primary } from "../../utils/colors";
import styles from "./styles";


const ContactUsScreen = (props) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image}
                        source={{ uri: 'https://mir-s3-cdn-cf.behance.net/user/115/61934f748437387.622e0b680865f.jpg' }} />
                    <Text style={styles.text}>Mahmoud AlHabil</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://m.facebook.com/people/Mahmoud-AlHabil/100010120299334')}>
                        <Icon name='facebook' size={44} color={primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=970592773664')}>
                        <Icon name='whatsapp' size={44} color={primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://github.com/MahmoudAlHabil')}>
                        <Icon name='github' size={44} color={primary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Image style={styles.image}
                        source={{ uri: 'https://mir-s3-cdn-cf.behance.net/user/115/cfe42c394600227.623dc988a998e.jpg' }} />
                    <Text style={styles.text}>Ahmed Alshareif</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.facebook.com/Ahmed.Mohammed.AlShareif')}>
                        <Icon name='facebook' size={44} color={primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=972567222788')}>
                        <Icon name='whatsapp' size={44} color={primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://github.com/AhmedAlshareif')}>
                        <Icon name='github' size={44} color={primary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Image style={styles.image}
                        source={{ uri: 'https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.6435-9/117861858_971531853273572_8739227056358512783_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=AlZvuVM8bWgAX9k46s3&_nc_ht=scontent.fjrs4-1.fna&oh=00_AT_NXOuGyX60MvpXbleoUmaRf9ctpC_YyyNF5rkRGmWkuA&oe=62B5524D' }} />
                    <Text style={styles.text}>Mohammed Albatrawi</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100012502988151')}>
                        <Icon name='facebook' size={44} color={primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=972594874833')}>
                        <Icon name='whatsapp' size={44} color={primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ContactUsScreen; 
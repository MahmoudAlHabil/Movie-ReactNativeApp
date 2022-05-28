import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Rating from '../Rating';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Card = props => {
    const { dataMovie } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MovieScreen', dataMovie)} style={[styles.card, props.style]}>
            <Image
                style={styles.imageCard}
                resizeMode='contain'
                source={{ uri: dataMovie.poster }} />

            {dataMovie.Favorite && <View style={styles.favorite}>
                <Icon name='heart' size={30} color={'#ff4500'} />
            </View>}
            <View style={styles.bottomCard}>
                <Text style={styles.text}>{dataMovie.title}</Text>
                <View style={styles.rate}>
                    <Rating setRate={dataMovie.rated} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
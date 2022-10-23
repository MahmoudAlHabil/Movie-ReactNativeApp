import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Rating from '../Rating';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFavoriteDataContext } from '../../contexts/favoriteDataContext';

const Card = props => {
    const { dataMovie } = props;
    const navigation = useNavigation();
    const { favoriteData, setFavoriteData } = useFavoriteDataContext();

    const iconHandler = () => {
        if (!favoriteData.includes(dataMovie)) {
            setFavoriteData([...favoriteData, dataMovie]);
            console.log('====================================');
            console.log('favoriteData');
            console.log('====================================');
        }
        else {
            const newFavoriteData = favoriteData.filter(item => item.imdbID !== dataMovie.imdbID);
            setFavoriteData(newFavoriteData);
            console.log('====================================');
            console.log('newFavoriteData');
            console.log('====================================');
        }
    }


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MovieScreen', dataMovie)} style={[styles.card, props.style]}>
            <Image
                style={styles.imageCard}
                resizeMode='contain'
                source={{ uri: dataMovie.Poster }} />

            <View style={styles.favorite}>
                <Icon name='heart' size={30} color={
                    favoriteData.includes(dataMovie) ? '#ff4500' : '#dedede'
                } onPress={iconHandler} />
            </View>
            <View style={styles.bottomCard}>
                <Text style={styles.text}>{dataMovie.Title}</Text>
                <View style={styles.rate}>
                    <Rating setRate={dataMovie.Rated} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
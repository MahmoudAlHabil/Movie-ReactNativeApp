import React from 'react';
import { View, Text, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../utils/icons';
import Rating from '../Rating';
import styles from './styles';

const Card = props => {
    return (
        <View style={[styles.card, props.style]}>
            <Image
                style={styles.imageCard}
                source={{ uri: 'https://miro.medium.com/max/880/0*k9CL2yoHU6ELTkmi.png' }} />
            
            <View style={styles.favorite}>
                <SvgXml xml={icons.favorite} />
            </View>
            <View style={styles.bottomCard}>
                <Text style={styles.text}>Name of movies</Text>
                <View style={styles.rate}>
                    <Rating setRate={3}/>
                </View>
            </View>
        </View>
    );
};

export default Card;
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const {
        icon,
        wrapperStyle,
        textStyle,
        iconWrapperStyle,
        onPress,
        ...rest
    } = props;
    return (
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            style={[styles.container, wrapperStyle]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, textStyle]}>{props.title}</Text>
                {icon && (
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {icon()}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Button


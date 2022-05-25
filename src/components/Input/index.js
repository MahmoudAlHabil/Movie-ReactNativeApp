import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const Input = (props) => {
    const {
        renderIconLeft,
        renderIconRight,
        wrapperStyle,
        inputStyle,
        iconWrapperStyle,
        placeholder,
        placeholderPosition,
        ...rest
    } = props;

    return (
        <View style={[styles.container, wrapperStyle]}>
            <View style={styles.wrapper}>
                {renderIconLeft && (
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {renderIconLeft()}
                    </View>
                )}
                <TextInput
                    placeholder={placeholder}
                    style={[styles.input, inputStyle]}
                    {...rest}
                />
                {renderIconRight && (
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {renderIconRight()}
                    </View>
                )}
            </View>
        </View>
    )
}

export default Input;


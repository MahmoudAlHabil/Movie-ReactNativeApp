import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    card: {
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: 'black',
        margin: 6,
    },
    imageCard: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 8,
    },
    favorite: {
        position: 'absolute',
        top: 6,
        right: 6,
    },
    bottomCard: {
        position: 'absolute',
        bottom: 6,
        left: 12,
    },
    text: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500',
        color: 'white',
    },
    rate: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        left: -8,
    },
});

export default styles;
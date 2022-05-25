import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    card: {
        height: '160@s',
        width: '146@s',
        backgroundColor: '#f18484',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;
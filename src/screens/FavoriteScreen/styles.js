import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '170@s',
        width: '155@s',
        backgroundColor: '#a9a9a9',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;
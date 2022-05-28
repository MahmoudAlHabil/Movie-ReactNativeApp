import { ScaledSheet } from 'react-native-size-matters';
import { primary } from '../../utils/colors'

const styles = ScaledSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        padding: 10

    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    },
    poster: {
        height: 240,
        width: '100%',
        resizeMode: 'stretch',
        marginVertical: 10,
        borderRadius: 10

    },
    text: {
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: primary
    },
    textActor: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        paddingBottom: 0,
        fontWeight: 'bold',
    },
    img: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        margin: 5,
        borderRadius: 10

    },
    scrollActor: {
        width: '100%',
        height: 212,
    },
    watchButton: {
        width: '100%',
        backgroundColor: '#4C46B4',
        height: 50,
        alignSelf: 'center',
        marginBottom: 20
    },
})

export default styles;
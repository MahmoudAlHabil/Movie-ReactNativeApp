import { ScaledSheet } from 'react-native-size-matters';
import { primary } from "../../utils/colors";

const styles = ScaledSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingVertical: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80,
        alignSelf: 'center',
        marginBottom: 5
    },
    text: {
        color: primary,
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconContainer: {
        marginTop: 15,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around'
    },

})

export default styles;
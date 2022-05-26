import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 35,
        width: '100%',
        marginTop: '5%',
        marginBottom: '20%'
    },
    headerText: {
        fontSize: 27,
        color: '#000',
        lineHeight: 35,
        flex: 1,
        textAlign: 'center',
        marginLeft: '11%',
    },
    wrapperBackIcon: {
        marginRight: '5%',
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    WrapperImage: {
        alignItems: 'center',
        marginBottom: '10%'
    },
    WrapperForm: {
        flex: 1,
        alignItems: 'center'
    },
    infoText: {
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        marginHorizontal: '13.5%',
        marginBottom: '8%',
        color: '#6D6D6D',
    },
    input: {
        width: '72%',
        marginVertical: '1%'
    },
    resetPasswordButton: {
        width: '72%',
        backgroundColor: '#4C46B4',
        height: 50,
        borderColor: '#707070',
        marginTop: '12%',
    },
})
  
export default styles;
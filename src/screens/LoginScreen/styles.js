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
      marginRight: '11%',
    },
    wrapperBackIcon: {
      marginLeft: '5%',
      width: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    WrapperImage: {
      alignItems: 'center',
      marginBottom: '22%'
    },
    WrapperForm: {
      flex: 1,
      alignItems: 'center'
    },
    input: {
      width: '72%',
      marginVertical: '2.5%',
    },
    visibleIcon: {
      padding: 4,
    },
    forgotPasswordTouch: {
      alignSelf: 'flex-end',
      marginBottom: '11%',
      marginRight: '15%'
    },
    forgotPasswordText: {
      fontSize: 12,
      fontWeight: '300',
      lineHeight: 16,
      color: '#8E8AEE',
    },
    loginButton: {
      width: '72%',
      backgroundColor: '#4C46B4',
      height: 50,
      borderColor: '#707070',
    },
  })
  
  export default styles;
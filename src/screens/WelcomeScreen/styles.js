import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
      flex: 1
    },
    movieContainer: {
      alignItems: 'center'
    },
    moviesText: {
      fontSize: 30,
      color: '#000',
      fontWeight: 'bold',
      lineHeight: 35,
      marginTop: '5%',
      marginBottom: '14%'
    },
    boxSign: {
      backgroundColor: '#6058E3',
      height: '52%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      borderTopLeftRadius: 31,
      borderTopRightRadius: 31,
      paddingVertical: '12%',
      paddingHorizontal: '8%',
    },
    welcomText: {
      fontSize: 27,
      color: '#fff',
      lineHeight: 31,
      fontWeight: '700',
      marginBottom: '10%',
    },
    bodyText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      lineHeight: 24,
      fontWeight: '700',
      marginBottom: '5%',
    },
    logInSignUpWrapper: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: '5%',
      paddingHorizontal: '7%'
    },
    signFacebook: {
      width: '87%',
      marginTop: '2%'
    },
    facebookText: {
      fontSize: 11,
      fontWeight: 'bold',
      lineHeight: 12,
      marginHorizontal: 20,
      paddingTop: '1%'
    }
  })
  
export default styles;
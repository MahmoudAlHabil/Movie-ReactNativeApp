import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 23,
        height: 46,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 17,
        lineHeight: 23,
        color: '#fff'
    },
    iconWrapperStyle: {
        width: 16,
        height: 16,
    }
})
  
export default styles;
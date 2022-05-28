import { ScaledSheet } from 'react-native-size-matters';
import { primary } from "../../utils/colors";

const styles = ScaledSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 5
  },
  textInputStyle: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: primary,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  card: {
    height: '170@s',
    width: '155@s',
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
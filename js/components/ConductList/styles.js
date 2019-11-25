import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

const styles = StyleSheet.create({
  plusMinusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  plusMinus: {
    padding: 10,
    color: colors.purple,
    fontWeight: 'bold',
  },
  conductTitle: {
    fontSize: 20,
    color: colors.purple,
  },
  conductDescription: {
    fontSize: 18,
  },
  copyright: {},
});

export default styles;

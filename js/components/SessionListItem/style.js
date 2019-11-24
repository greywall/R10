import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  heading: {
    padding: 10,
  },
  headingText: {
    fontSize: 21,
  },
  location: {
    color: colors.mediumGrey,
    paddingTop: 5,
    fontSize: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;

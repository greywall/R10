import {StyleSheet, Platform} from 'react-native';
import {colors, typography} from '../../config/styles';
import {red} from 'ansi-colors';

const styles = StyleSheet.create({
  noFaved: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  errorMessage: {
    justifyContent: 'center',

    marginTop: 'auto',
    marginBottom: 'auto',
  },
  errorText: {
    textAlign: 'center',
  },
});

export default styles;

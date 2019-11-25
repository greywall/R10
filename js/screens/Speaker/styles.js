import {StyleSheet, Platform} from 'react-native';
import {colors, typography} from '../../config/styles';
import {red} from 'ansi-colors';

const styles = StyleSheet.create({
  speakerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  outsideMain: {},
  close: {
    color: colors.white,
  },
  titleContainer: {},
  staticTitle: {
    color: colors.white,
  },
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  image: {},
  title: {},
  bio: {},

  button: {
    marginTop: 25,
  },
  buttonStyle: {
    height: 50,
    width: '60%',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
});

export default styles;

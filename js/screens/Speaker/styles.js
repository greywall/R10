import {StyleSheet, Platform} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  speakerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  outsideMain: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 30,
    paddingTop: 40,
  },
  close: {
    color: colors.white,
    alignSelf: 'flex-end',
    paddingRight: 85,
    fontSize: 25,
  },
  titleContainer: {},
  staticTitle: {
    color: colors.white,
    fontSize: 25,
  },
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    width: '96%',
    alignItems: 'center',
  },
  speakerBioImage: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    marginBottom: 5,
  },
  bio: {
    fontSize: 20,
    padding: 20,
  },

  button: {
    marginTop: 25,
    marginBottom: 25,
  },
  buttonStyle: {
    height: 50,
    width: 250,
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

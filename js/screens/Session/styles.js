import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

const styles = StyleSheet.create({
  speakerImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  sessionPage: {
    margin: 20,
  },
  locationContainer: {
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    color: colors.mediumGrey,
  },
  title: {
    fontSize: 40,
    paddingBottom: 10,
  },
  time: {
    color: 'red',
    fontSize: 25,
    paddingBottom: 10,
  },
  description: {
    fontSize: 25,
    paddingBottom: 15,
  },
  speakerText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    color: colors.mediumGrey,
  },
  speakerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  speakerName: {
    marginLeft: 15,
    fontSize: 20,
  },
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

import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'red',
    paddingTop: 100,
  },
  about: {
    margin: 10,
  },
  aboutImageView: {
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  aboutImage: {
    height: 60,
    width: 250,
    marginBottom: 20,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 5,
    fontWeight: '300',
  },
  heading: {
    fontSize: 35,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'black',
  },
  accordion: {
    color: 'purple',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  copyright: {
    fontSize: 20,
    paddingLeft: 20,
  },
  copyrightContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.mediumGrey,
    marginTop: 15,
    marginBottom: 30,
    paddingTop: 30,
  },
  allConduct: {
    marginBottom: 30,
  },
});

export default styles;

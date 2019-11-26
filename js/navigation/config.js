import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {colors, typography} from '../config/styles';
const {white, purple, red} = colors;
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';

const GradientHeader = props => (
  <View style={{backgroundColor: white, overflow: 'hidden'}}>
    <LinearGradient
      colors={[red, purple]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: 120, width: '100%'}]}
    />
    <Header {...props} />
  </View>
);
export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: white,
    fontFamily: typography.fontMain,
  },
  headerTintColor: white,
  headerLeft: Platform.OS !== 'ios' &&
    navigation.state.routeName !== 'Session' && (
      <View style={{paddingLeft: 16}}>
        <Icon
          name={'md-menu'}
          size={30}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),
});

GradientHeader.propTypes = {
  props: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

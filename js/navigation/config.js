import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {colors, typography} from '../config/styles';
const {white, purple, red} = colors;
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

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
  headerLeft: Platform.OS !== 'ios' && (
    <View style={{paddingLeft: 16}}>
      {navigation.routeName === 'Session' ? (
        <Icon
          name={'chevron-right'}
          onPress={() => {
            goBack();
          }}
        />
      ) : (
        <Icon
          color="#fff"
          name="logo-usd"
          size={50}
          style={({paddingLeft: 20}, {paddingRight: 20})}
          onPress={() => navigation.toggleDrawer()}
        />
      )}
    </View>
  ),
});

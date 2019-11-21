import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';
import Faves from '../screens/Faves';
import Map from '../screens/Map';
import Schedule from '../screens/Schedule';
import Session from '../screens/Session';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';
import {sharedNavigationOptions} from './config';
const {black, mediumGrey, white, lightGrey, coralblue} = colors;
import {createDrawerNavigator} from 'react-navigation-drawer';

const ScheduleStack = createStackNavigator(
  {
    Schedule: Schedule,
    Session: Session,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'Schedule',
    }),
  },
);

const AboutStack = createStackNavigator(
  {
    About: About,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'About',
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: Faves,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'Faves',
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Map: Map,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'Map',
    }),
  },
);

MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name={'md-heart'} size={25} color={tintColor} />
  ),
};

ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name={'md-heart'} size={25} color={tintColor} />
  ),
};

FavesStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name={'md-heart'} size={25} color={tintColor} />
  ),
};

AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name={'md-heart'} size={25} color={tintColor} />
  ),
};

export default createDrawerNavigator(
  {
    About: {
      screen: AboutStack,
    },
    Faves: {
      screen: FavesStack,
    },
    Map: {
      screen: MapStack,
    },
    Schedule: {
      screen: ScheduleStack,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: coralblue,
      inactiveTintColor: lightGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: typography.fontMain,
      },
      tabStyle: {
        backgroundColor: black,
      },
    },
  },
);

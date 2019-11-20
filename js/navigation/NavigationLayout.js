import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';
import Faves from '../screens/Faves';
import Map from '../screens/Map';
import Schedule from '../screens/Schedule';
import Session from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';
import {sharedNavigationOptions} from './config';
const {black, mediumGrey, white, lightGrey, coralblue} = colors;

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

export default createBottomTabNavigator(
  {
    About: AboutStack,
    Faves: FavesStack,
    Map: MapStack,
    Schedule: ScheduleStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `${focused ? 'ios-clock' : 'ios-calendar'}`;
        } else if (routeName === 'Map') {
          iconName = `${focused ? 'ios-pin' : 'ios-map'}`;
        } else if (routeName === 'Faves') {
          iconName = `${focused ? 'ios-heart' : 'ios-heart-empty'}`;
        } else if (routeName === 'About') {
          iconName = `${focused ? 'ios-home' : 'ios-information-circle'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

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
